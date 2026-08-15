/**
 * CM AGENT CONTROL TOWER — DATA FEED (fase 2)
 * Entity: Custommade Agency Int. B.V. (CUSTOMMADE AGENCY — uitsluitend CM)
 * Companion van: cm-agent-control-tower.gs · plan: docs/05_OPERATIONS/AGENTS/CM_AGENT_OPTION3_BUILD_PLAN.md
 *
 * Doel:
 * - Vult het "CM AGENT CONTROL TOWER"-blad automatisch: per agent-tab de open items uit
 *   ClickUp; de MONEY-tab tevens met open posten uit Moneybird; en per agent een bounded
 *   signaal uit Gmail (recente ongelezen mails van een gemapt label) en Google Drive (recent
 *   gewijzigde bestanden in de agent-map). Gmail/Drive draaien native — geen tokens nodig.
 * - Draait op een tijd-trigger (installControlTowerFeedTrigger()).
 *
 * Veiligheid / grenzen:
 * - READ-ONLY op alle bronnen: haalt alleen data OP uit ClickUp/Moneybird/Gmail/Drive; wijzigt,
 *   markeert of verplaatst daar niets.
 * - Schrijft UITSLUITEND in de agent-datatabs van dit ene Control Tower-blad (spiegel), onder de
 *   kopregel. COCKPIT, LEGENDA en formules blijven ongemoeid. Verwijdert geen tabbladen.
 * - Tokens staan NOOIT in de code: lees ze uit Script Properties. Gmail/Drive gebruiken de native
 *   GmailApp/DriveApp van het CM-account (geen tokens); FIERCE/EXTERNE_ENTITEIT bewust uitgesloten.
 * - Config-gedreven en degraderend: agents zonder geconfigureerde bron worden overgeslagen zonder
 *   de rest te breken. Gmail/Drive zijn "bounded": alleen recente items, gecapt (geen inbox-kopie).
 *
 * Eenmalige setup (Project Settings → Script Properties):
 *   CLICKUP_TOKEN        = pk_xxx            (ClickUp personal API token, read-scope)
 *                          Ook aanvaard: CLICKUP_API_TOKEN / CM_CLICKUP_TOKEN / CM_CLICKUP_API_TOKEN
 *                          (hergebruikt een bestaand projecttoken zonder dubbele eigenschap).
 *   AGENT_LIST_MAP       = {"CM OPS":["<listId>",...],"CM LEGAL":["<listId>"], ...}
 *                          (per agent de ClickUp-list-ID's die zijn tab voeden; vul na reconciliatie)
 *                          Optioneel ":closed"-suffix op een list-ID (bv. "<listId>:closed") haalt
 *                          óók afgeronde/gesloten taken op — voor terminale lijsten WON/LOST/COMPLETED.
 *   MONEYBIRD_TOKEN      = <token>           (optioneel; voor de MONEY-tab)
 *   MONEYBIRD_ADMIN_ID   = <administratie-id>(CM-administratie; nooit EXTERNE_ENTITEIT)
 *   AGENT_GMAIL_MAP      = {"CM MONEY":"FINANCE&FACTUREN", ...}   (optioneel; anders ingebouwde standaard)
 *   AGENT_DRIVE_MAP      = {"CM MONEY":["<folderId>"], ...}       (optioneel; anders ingebouwde standaard)
 *
 * Daarna: run refreshControlTower() handmatig (autoriseer — 1e keer óók Gmail/Drive-scopes),
 * dan installControlTowerFeedTrigger().
 */

const CTF_SHEET_NAME = 'CM AGENT CONTROL TOWER';
const CTF_CLICKUP_BASE = 'https://api.clickup.com/api/v2';
const CTF_DATA_FIRST_ROW = 2;               // rij 1 = kopregel (van cm-agent-control-tower.gs)
const CTF_DATA_COLS = 10;                    // A..J, zie CT_AGENT_HEADERS

// Gmail/Drive = bounded signaal: alleen recente items, gecapt per agent (geen inbox-kopie).
const CTF_RECENT_DAYS = 14;                  // venster voor Gmail-ongelezen en Drive-wijzigingen
const CTF_GMAIL_MAX = 10;                    // max mails per agent
const CTF_DRIVE_MAX = 10;                    // max recent gewijzigde bestanden per agent
const CTF_DRIVE_MAX_FOLDERS = 80;           // scan-grens per agent (voorkomt time-outs)

// Standaardmapping agent → Gmail-label (thematisch; FIERCE/EXTERNE_ENTITEIT bewust uitgesloten).
// Overschrijfbaar via Script Property AGENT_GMAIL_MAP (JSON). Lege label = agent overgeslagen.
const CTF_GMAIL_MAP_DEFAULT = {
  'CM MONEY': 'FINANCE&FACTUREN',
  'CM LEGAL': 'BUSINESS&LEGAL',
  'CM CONTROL': 'TO-DO',
  'CM OPS': 'ADMIN/BOEKINGEN',
  'CM PROSPECT': 'ADMIN/SPONSORING',
};

// Standaardmapping agent → Drive-map(pen) onder OS_CUSTOMMADE (folder-ID's).
// Overschrijfbaar via Script Property AGENT_DRIVE_MAP (JSON).
const CTF_DRIVE_MAP_DEFAULT = {
  'CM MONEY': ['1Yxs29O5zC0bC9VR-SjnEUc6ojR6620uK'],                                  // 06_FINANCE
  'CM LEGAL': ['1gj-glzUt9n5fa38-jSZtR-5H2f3eh48X', '1ZKY7qOVggqThgY1VHcXv70uNdQvVPNpJ'], // 07_LEGAL, 04_DEALS
  'CM OPS': ['12k8NabqqHAvc-W7RRec_a9inhQTR3pqt', '1fJoLC2PL2r5RGFHde0AmZ4Gs4A2eGtS1'],    // 03_CLIENTS, 02_ARTIST_MANAGEMENT
  'CM PROSPECT': ['1izvO63CpCDdEJm1_bmYX3xCsbklsqg-J'],                               // 01_MASTER_BOUTIQUE
  'CM SOCIAL': ['1sgz_QOmWrK-pQ2fOv_Qw-X-LPw6RZGQc', '1INi8P1nmqnHAOMyMORjKZkLI7N2wZOZH'], // 08_MARKETING, 09_CONTENT
  'CM CONTROL': ['1gaDQm1QP44sbuUVbS8kkFFe_ul9RxRfE'],                               // 00_ADMIN
  'CM VAULT': ['1UDYPPEKPH8WZV-Q2Gi-VY1mmIc6G83KE'],                                 // 05_OPERATIONS
};

function refreshControlTower() {
  const cfg = ctfConfig_();
  const ss = ctfOpenSheet_();
  const agentMap = cfg.agentListMap || {};
  const gmailMap = cfg.gmailMap || {};
  const driveMap = cfg.driveMap || {};
  const summary = { agents: 0, rows: 0, skipped: 0, errors: [] };

  // Unie van alle agents die door één van de bronnen worden gevoed.
  const allAgents = {};
  [agentMap, gmailMap, driveMap].forEach(function (m) {
    Object.keys(m).forEach(function (k) { allAgents[k] = true; });
  });

  Object.keys(allAgents).forEach(function (agent) {
    const sh = ss.getSheetByName(agent);
    if (!sh) { summary.errors.push('Tab ontbreekt: ' + agent); return; }
    let rows = [];
    let failed = false;
    (agentMap[agent] || []).forEach(function (listId) {
      try {
        rows = rows.concat(ctfClickUpListRows_(listId, cfg.clickUpToken));
      } catch (e) {
        failed = true;
        summary.errors.push(agent + '/' + listId + ': ' + ctfMsg_(e));
      }
    });
    // MONEY: voeg open posten uit Moneybird toe (indien geconfigureerd).
    if (agent === 'CM MONEY' && cfg.moneybirdToken && cfg.moneybirdAdminId) {
      try { rows = rows.concat(ctfMoneybirdRows_(cfg.moneybirdAdminId, cfg.moneybirdToken)); }
      catch (e) { failed = true; summary.errors.push('Moneybird: ' + ctfMsg_(e)); }
    }
    // Gmail: recente ongelezen mails uit het gemapte label (bounded).
    if (gmailMap[agent]) {
      try { rows = rows.concat(ctfGmailRows_(gmailMap[agent])); }
      catch (e) { failed = true; summary.errors.push(agent + ' Gmail: ' + ctfMsg_(e)); }
    }
    // Drive: recent gewijzigde bestanden in de gemapte agent-map(pen) (bounded).
    if (driveMap[agent]) {
      try { rows = rows.concat(ctfDriveRows_(driveMap[agent])); }
      catch (e) { failed = true; summary.errors.push(agent + ' Drive: ' + ctfMsg_(e)); }
    }
    // Bij een (tijdelijke) bronfout NIET overschrijven: bewaar de laatste geslaagde
    // momentopname, zodat de cockpit tijdens een 401/429/5xx-storing geen blockers "verliest".
    if (failed) { summary.skipped++; return; }
    ctfWriteAgentRows_(sh, rows);
    summary.agents++; summary.rows += rows.length;
  });

  Logger.log('Control Tower refresh: ' + summary.agents + ' agents, ' + summary.rows +
    ' rijen, ' + summary.skipped + ' overgeslagen (bronfout → snapshot behouden). Fouten: ' +
    (summary.errors.length ? summary.errors.join(' | ') : 'geen'));
  return summary;
}

function installControlTowerFeedTrigger() {
  // Idempotent: verwijder bestaande trigger op deze functie, zet er één per uur.
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'refreshControlTower') { ScriptApp.deleteTrigger(t); }
  });
  ScriptApp.newTrigger('refreshControlTower').timeBased().everyHours(1).create();
  Logger.log('Trigger gezet: refreshControlTower elk uur.');
}

// ---- config ----
// Aanvaard het ClickUp-token onder meerdere gangbare propertynamen, zodat de feed het bestaande
// token van dit project hergebruikt zonder een dubbele eigenschap te vereisen.
const CTF_CLICKUP_TOKEN_KEYS = [
  'CLICKUP_TOKEN', 'CLICKUP_API_TOKEN', 'CM_CLICKUP_TOKEN', 'CM_CLICKUP_API_TOKEN',
];

function ctfConfig_() {
  const p = PropertiesService.getScriptProperties();
  let token = '';
  for (var i = 0; i < CTF_CLICKUP_TOKEN_KEYS.length; i++) {
    token = p.getProperty(CTF_CLICKUP_TOKEN_KEYS[i]);
    if (token) break;
  }
  if (!token) {
    throw new Error('ClickUp-token ontbreekt in Script Properties (verwacht een van: ' +
      CTF_CLICKUP_TOKEN_KEYS.join(', ') + ').');
  }
  let map = {};
  const raw = p.getProperty('AGENT_LIST_MAP');
  if (raw) { try { map = JSON.parse(raw); } catch (e) { throw new Error('AGENT_LIST_MAP is geen geldige JSON.'); } }
  return {
    clickUpToken: token,
    agentListMap: map,
    moneybirdToken: p.getProperty('MONEYBIRD_TOKEN') || '',
    moneybirdAdminId: p.getProperty('MONEYBIRD_ADMIN_ID') || '',
    gmailMap: ctfParseMap_(p.getProperty('AGENT_GMAIL_MAP'), 'AGENT_GMAIL_MAP') || CTF_GMAIL_MAP_DEFAULT,
    driveMap: ctfParseMap_(p.getProperty('AGENT_DRIVE_MAP'), 'AGENT_DRIVE_MAP') || CTF_DRIVE_MAP_DEFAULT,
  };
}

// Optionele override-map uit een Script Property; leeg = gebruik de ingebouwde standaard.
function ctfParseMap_(raw, name) {
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { throw new Error(name + ' is geen geldige JSON.'); }
}

function ctfOpenSheet_() {
  const files = DriveApp.getFilesByName(CTF_SHEET_NAME);
  if (!files.hasNext()) throw new Error('Blad "' + CTF_SHEET_NAME + '" niet gevonden. Run eerst buildControlTower().');
  return SpreadsheetApp.open(files.next());
}

// ---- ClickUp ----
function ctfClickUpListRows_(listToken, token) {
  // ClickUp pagineert /list/{id}/task in blokken van 100; loop tot last_page.
  // listToken mag een ":closed"-suffix hebben (bv. "901523770692:closed") → dan worden ook
  // afgeronde/gesloten taken opgehaald. Zo tonen terminale lijsten (WON/LOST/COMPLETED) hun
  // items, zonder actieve lijsten met oude historie te overspoelen.
  var parts = String(listToken).split(':');
  var listId = parts[0];
  var includeClosed = parts.indexOf('closed') !== -1;
  var rows = [];
  var listName = listId;
  var page = 0;
  var MAX_PAGES = 100;                          // 100 pagina's × 100 taken = 10.000 open items
  for (var guard = 0; ; guard++) {
    if (guard >= MAX_PAGES) {
      // Guard bereikt zonder last_page: gooi i.p.v. een afgekapte set als "geslaagd" terug te
      // geven — refreshControlTower() slaat de agent dan over en behoudt de vorige snapshot.
      throw new Error('ClickUp list ' + listId + ' > ' + MAX_PAGES + ' pagina\'s; afgebroken.');
    }
    var url = CTF_CLICKUP_BASE + '/list/' + listId +
      '/task?archived=false&include_closed=' + (includeClosed ? 'true' : 'false') +
      '&subtasks=false&page=' + page;
    var res = UrlFetchApp.fetch(url, {
      method: 'get',
      headers: { Authorization: token },
      muteHttpExceptions: true,
    });
    if (res.getResponseCode() !== 200) {
      throw new Error('ClickUp ' + res.getResponseCode() + ' voor list ' + listId);
    }
    var data = JSON.parse(res.getContentText());
    var tasks = data.tasks || [];
    if (page === 0 && tasks[0] && tasks[0].list && tasks[0].list.name) { listName = tasks[0].list.name; }
    tasks.forEach(function (t) {
      rows.push([
        t.name || '',
        listName,
        t.url || '',
        ctfMapStatus_(t.status && t.status.status),
        (t.assignees && t.assignees.map(function (a) { return a.username; }).join(', ')) || '',
        ctfDate_(t.due_date),
        ctfCustomField_(t, ['Waiting-On', 'Waiting On']),
        ctfCustomField_(t, ['Approval Status', 'Sophia Approval']),
        ctfDate_(t.date_updated),
        '', // reden/notitie — handmatig/CM CONTROL
      ]);
    });
    if (data.last_page === true || tasks.length === 0) { break; }
    page++;
  }
  return rows;
}

function ctfCustomField_(task, names) {
  if (!task.custom_fields) return '';
  for (var i = 0; i < task.custom_fields.length; i++) {
    var f = task.custom_fields[i];
    if (names.indexOf(f.name) !== -1 && f.value !== undefined && f.value !== null) {
      // dropdown → label; anders ruwe waarde
      if (f.type_config && f.type_config.options && typeof f.value === 'number') {
        var opt = f.type_config.options[f.value];
        return opt ? (opt.name || opt.label || '') : String(f.value);
      }
      return String(f.value);
    }
  }
  return '';
}

// ---- Moneybird ----
// Open posten = debiteuren (open verkoopfacturen, geld dat binnenkomt) ÉN crediteuren (open
// inkoopfacturen, geld dat betaald moet worden). Beide op de CM MONEY-tab.
function ctfMoneybirdRows_(adminId, token) {
  var out = [];
  out = out.concat(ctfMbInvoices_(adminId, token, 'sales_invoices', 'state:open',
    'Open Posten – Debiteuren (Moneybird)', false));
  out = out.concat(ctfMbInvoices_(adminId, token, 'documents/purchase_invoices', 'state:open',
    'Open Posten – Crediteuren (Moneybird)', true));
  return out;
}

function ctfMbInvoices_(adminId, token, resource, filter, label, isPurchase) {
  var url = 'https://moneybird.com/api/v2/' + adminId + '/' + resource +
    '.json?filter=' + encodeURIComponent(filter);
  var res = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) {
    throw new Error('Moneybird ' + resource + ' ' + res.getResponseCode());
  }
  var invoices = JSON.parse(res.getContentText()) || [];
  return invoices.map(function (inv) {
    var bedrag = inv.total_unpaid || inv.total_price_incl_tax || '';
    return [
      (isPurchase ? 'Inkoopfactuur ' : 'Verkoopfactuur ') + (inv.reference || inv.invoice_id || inv.id),
      label,
      inv.url || '',
      '🔴 Blocked' /* open post = aandacht */,
      (inv.contact && (inv.contact.company_name || inv.contact.first_name)) || '',
      inv.due_date || '',
      (bedrag ? ((isPurchase ? 'te betalen ' : 'openstaand ') + bedrag) : ''),
      inv.state || 'open',
      inv.updated_at ? inv.updated_at.substring(0, 10) : '',
      '', // reden/notitie leeg laten: anders overschrijft de placeholder handmatige aantekeningen
    ];
  });
}

// ---- Gmail (native, geen token) ----
// Recente ongelezen threads uit één label. READ-ONLY: leest alleen, markeert/verplaatst niets.
function ctfGmailRows_(labelName) {
  var label = GmailApp.getUserLabelByName(labelName);
  if (!label) return [];                        // label bestaat niet (meer) → stil overslaan
  var threads = label.getThreads(0, 50);        // 50 meest recente threads van dit label
  var cutoff = Date.now() - CTF_RECENT_DAYS * 86400000;
  var out = [];
  for (var i = 0; i < threads.length && out.length < CTF_GMAIL_MAX; i++) {
    var th = threads[i];
    var d = th.getLastMessageDate();
    if (th.isUnread() && d.getTime() >= cutoff) {
      out.push([
        th.getFirstMessageSubject() || '(geen onderwerp)',
        'Gmail – ' + labelName,
        th.getPermalink(),
        '📧 Mail',
        '', '', '', '',
        ctfDate_(d.getTime()),
        '',
      ]);
    }
  }
  return out;
}

// ---- Drive (native, geen token) ----
// Recent gewijzigde bestanden in de agent-map(pen), begrensd gescand (voorkomt time-outs).
function ctfDriveRows_(folderIds) {
  var cutoff = Date.now() - CTF_RECENT_DAYS * 86400000;
  var found = [];
  var visited = 0;
  (folderIds || []).forEach(function (rootId) {
    var queue = [];
    try { queue.push(DriveApp.getFolderById(rootId)); } catch (e) { return; }
    while (queue.length && visited < CTF_DRIVE_MAX_FOLDERS) {
      var folder = queue.shift();
      visited++;
      var name = folder.getName();
      var files = folder.getFiles();
      while (files.hasNext()) {
        var f = files.next();
        var t = f.getLastUpdated().getTime();
        if (t >= cutoff) {
          found.push({ t: t, row: [
            f.getName(),
            'Drive – ' + name,
            f.getUrl(),
            '📄 Bestand',
            '', '', '', '',
            ctfDate_(t),
            '',
          ] });
        }
      }
      var subs = folder.getFolders();
      while (subs.hasNext()) { queue.push(subs.next()); }
    }
  });
  found.sort(function (a, b) { return b.t - a.t; });   // nieuwste eerst
  return found.slice(0, CTF_DRIVE_MAX).map(function (x) { return x.row; });
}

// ---- schrijven (alleen de datatabs van dit spiegel-blad) ----
function ctfWriteAgentRows_(sh, rows) {
  const lastRow = sh.getLastRow();
  // Bewaar handmatige notities (kolom J = index 9) per item-sleutel (kolom C = url, index 2),
  // zodat operator-/CM CONTROL-aantekeningen niet bij elke refresh worden gewist.
  const notes = {};
  if (lastRow >= CTF_DATA_FIRST_ROW) {
    const existing = sh.getRange(CTF_DATA_FIRST_ROW, 1, lastRow - CTF_DATA_FIRST_ROW + 1, CTF_DATA_COLS).getValues();
    existing.forEach(function (r) {
      var key = r[2], note = r[9];
      if (key && note) { notes[key] = note; }
    });
    sh.getRange(CTF_DATA_FIRST_ROW, 1, lastRow - CTF_DATA_FIRST_ROW + 1, CTF_DATA_COLS).clearContent();
  }
  if (rows.length === 0) return;
  // Her-koppel bewaarde notities op de url-sleutel (bestaande waarde in de rij wint).
  rows.forEach(function (r) {
    var key = r[2];
    if (key && !r[9] && notes[key]) { r[9] = notes[key]; }
  });
  sh.getRange(CTF_DATA_FIRST_ROW, 1, rows.length, CTF_DATA_COLS).setValues(rows);
}

// ---- helpers ----
function ctfMapStatus_(status) {
  const s = (status || '').toLowerCase();
  if (!s) return '';
  if (/(block|geblok)/.test(s)) return '🔴 Blocked';
  if (/(escal)/.test(s)) return '🔴 Blocked';
  if (/(waiting|wacht|on hold|hold)/.test(s)) return '⏳ Waiting-On';
  if (/(approval|sophia|gate)/.test(s)) return '🔒 Gate';
  if (/(done|complete|closed|afgerond|published|won|lost)/.test(s)) return '✅ Done';
  return '🟢 Op koers';
}

function ctfDate_(ms) {
  if (!ms) return '';
  var n = Number(ms);
  if (isNaN(n)) return '';
  return Utilities.formatDate(new Date(n), Session.getScriptTimeZone() || 'Europe/Amsterdam', 'yyyy-MM-dd');
}

function ctfMsg_(e) { return (e && e.message) ? e.message : String(e); }

/**
 * CM AGENT CONTROL TOWER — DATA FEED (fase 2)
 * Entity: Custommade Agency Int. B.V. (CUSTOMMADE AGENCY — uitsluitend CM)
 * Companion van: cm-agent-control-tower.gs · plan: docs/05_OPERATIONS/AGENTS/CM_AGENT_OPTION3_BUILD_PLAN.md
 *
 * Doel:
 * - Vult het "CM AGENT CONTROL TOWER"-blad automatisch: per agent-tab de open items uit
 *   ClickUp; de MONEY-tab tevens met open posten uit Moneybird.
 * - Draait op een tijd-trigger (installControlTowerFeedTrigger()).
 *
 * Veiligheid / grenzen:
 * - READ-ONLY op de bronsystemen: haalt alleen data OP uit ClickUp/Moneybird; wijzigt daar niets.
 * - Schrijft UITSLUITEND in de agent-datatabs van dit ene Control Tower-blad (spiegel), onder de
 *   kopregel. COCKPIT, LEGENDA en formules blijven ongemoeid. Verwijdert geen tabbladen.
 * - Tokens staan NOOIT in de code: lees ze uit Script Properties.
 * - Config-gedreven en degraderend: agents zonder geconfigureerde lijst-ID's worden overgeslagen
 *   (zolang de ClickUp-reconciliatie nog loopt), zonder de rest te breken.
 *
 * Eenmalige setup (Project Settings → Script Properties):
 *   CLICKUP_TOKEN        = pk_xxx            (ClickUp personal API token, read-scope)
 *   AGENT_LIST_MAP       = {"CM OPS":["<listId>",...],"CM LEGAL":["<listId>"], ...}
 *                          (per agent de ClickUp-list-ID's die zijn tab voeden; vul na reconciliatie)
 *   MONEYBIRD_TOKEN      = <token>           (optioneel; voor de MONEY-tab)
 *   MONEYBIRD_ADMIN_ID   = <administratie-id>(CM-administratie; nooit EXTERNE_ENTITEIT)
 *
 * Daarna: run refreshControlTower() handmatig (autoriseer), dan installControlTowerFeedTrigger().
 */

const CTF_SHEET_NAME = 'CM AGENT CONTROL TOWER';
const CTF_CLICKUP_BASE = 'https://api.clickup.com/api/v2';
const CTF_DATA_FIRST_ROW = 2;               // rij 1 = kopregel (van cm-agent-control-tower.gs)
const CTF_DATA_COLS = 10;                    // A..J, zie CT_AGENT_HEADERS

function refreshControlTower() {
  const cfg = ctfConfig_();
  const ss = ctfOpenSheet_();
  const agentMap = cfg.agentListMap || {};
  const summary = { agents: 0, rows: 0, errors: [] };

  Object.keys(agentMap).forEach(function (agent) {
    const sh = ss.getSheetByName(agent);
    if (!sh) { summary.errors.push('Tab ontbreekt: ' + agent); return; }
    let rows = [];
    (agentMap[agent] || []).forEach(function (listId) {
      try {
        rows = rows.concat(ctfClickUpListRows_(listId, cfg.clickUpToken));
      } catch (e) {
        summary.errors.push(agent + '/' + listId + ': ' + ctfMsg_(e));
      }
    });
    // MONEY: voeg open posten uit Moneybird toe (indien geconfigureerd).
    if (agent === 'CM MONEY' && cfg.moneybirdToken && cfg.moneybirdAdminId) {
      try { rows = rows.concat(ctfMoneybirdRows_(cfg.moneybirdAdminId, cfg.moneybirdToken)); }
      catch (e) { summary.errors.push('Moneybird: ' + ctfMsg_(e)); }
    }
    ctfWriteAgentRows_(sh, rows);
    summary.agents++; summary.rows += rows.length;
  });

  Logger.log('Control Tower refresh: ' + summary.agents + ' agents, ' + summary.rows +
    ' rijen. Fouten: ' + (summary.errors.length ? summary.errors.join(' | ') : 'geen'));
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
function ctfConfig_() {
  const p = PropertiesService.getScriptProperties();
  const token = p.getProperty('CLICKUP_TOKEN');
  if (!token) throw new Error('CLICKUP_TOKEN ontbreekt in Script Properties.');
  let map = {};
  const raw = p.getProperty('AGENT_LIST_MAP');
  if (raw) { try { map = JSON.parse(raw); } catch (e) { throw new Error('AGENT_LIST_MAP is geen geldige JSON.'); } }
  return {
    clickUpToken: token,
    agentListMap: map,
    moneybirdToken: p.getProperty('MONEYBIRD_TOKEN') || '',
    moneybirdAdminId: p.getProperty('MONEYBIRD_ADMIN_ID') || '',
  };
}

function ctfOpenSheet_() {
  const files = DriveApp.getFilesByName(CTF_SHEET_NAME);
  if (!files.hasNext()) throw new Error('Blad "' + CTF_SHEET_NAME + '" niet gevonden. Run eerst buildControlTower().');
  return SpreadsheetApp.open(files.next());
}

// ---- ClickUp ----
function ctfClickUpListRows_(listId, token) {
  const url = CTF_CLICKUP_BASE + '/list/' + listId + '/task?archived=false&include_closed=false&subtasks=false';
  const res = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { Authorization: token },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) {
    throw new Error('ClickUp ' + res.getResponseCode() + ' voor list ' + listId);
  }
  const data = JSON.parse(res.getContentText());
  const listName = (data.tasks && data.tasks[0] && data.tasks[0].list && data.tasks[0].list.name) || listId;
  return (data.tasks || []).map(function (t) {
    return [
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
    ];
  });
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
function ctfMoneybirdRows_(adminId, token) {
  const url = 'https://moneybird.com/api/v2/' + adminId + '/sales_invoices/filter/state:open.json';
  const res = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) {
    throw new Error('Moneybird ' + res.getResponseCode());
  }
  const invoices = JSON.parse(res.getContentText());
  return (invoices || []).map(function (inv) {
    return [
      'Factuur ' + (inv.invoice_id || inv.reference || inv.id),
      'Open Posten (Moneybird)',
      inv.url || '',
      '🔴 Blocked' /* open post = aandacht */,
      (inv.contact && (inv.contact.company_name || inv.contact.first_name)) || '',
      inv.due_date || '',
      (inv.total_unpaid ? ('onbetaald ' + inv.total_unpaid) : ''),
      inv.state || 'open',
      inv.updated_at ? inv.updated_at.substring(0, 10) : '',
      'Moneybird open post',
    ];
  });
}

// ---- schrijven (alleen de datatabs van dit spiegel-blad) ----
function ctfWriteAgentRows_(sh, rows) {
  const lastRow = sh.getLastRow();
  if (lastRow >= CTF_DATA_FIRST_ROW) {
    sh.getRange(CTF_DATA_FIRST_ROW, 1, lastRow - CTF_DATA_FIRST_ROW + 1, CTF_DATA_COLS).clearContent();
  }
  if (rows.length === 0) return;
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
  if (/(done|complete|closed|afgerond|published)/.test(s)) return '✅ Done';
  return '🟢 Op koers';
}

function ctfDate_(ms) {
  if (!ms) return '';
  var n = Number(ms);
  if (isNaN(n)) return '';
  return Utilities.formatDate(new Date(n), Session.getScriptTimeZone() || 'Europe/Amsterdam', 'yyyy-MM-dd');
}

function ctfMsg_(e) { return (e && e.message) ? e.message : String(e); }

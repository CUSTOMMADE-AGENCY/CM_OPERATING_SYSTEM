/**
 * CM AGENT CONTROL TOWER — Google Sheet opzet
 * Entity: Custommade Agency Int. B.V. (CUSTOMMADE AGENCY — uitsluitend CM)
 * Onderdeel van: Optie 3 build plan (docs/05_OPERATIONS/AGENTS/CM_AGENT_OPTION3_BUILD_PLAN.md)
 *
 * Doel:
 * - Bouwt het read-only "Control Tower"-overzichtsblad: één COCKPIT-tab + één tab per agent
 *   + een LEGENDA-tab. Dit is het centrale controlepunt (waar je het werk terugvindt).
 * - v1 zet de STRUCTUUR + kopregels + formules klaar (handmatige invoer werkt direct);
 *   automatische voeding vanuit ClickUp/Moneybird volgt in fase 2 (aparte koppeling).
 *
 * Veiligheid (niet-onderhandelbaar):
 * - Maakt alleen aan / vult kopregels; verwijdert NOOIT tabbladen, rijen of data.
 * - Idempotent: bestaande tabs worden hergebruikt, niet overschreven met dataverlies.
 * - Geen externe verzending, geen Drive-mutatie buiten dit ene spreadsheet.
 *
 * Gebruik:
 * 1. Open Google Apps Script in de CM Google-omgeving.
 * 2. Plak dit bestand.
 * 3. Run buildControlTower(). Eerste run maakt het blad "CM AGENT CONTROL TOWER" aan
 *    (in My Drive of onder CONTROL_TOWER_PARENT_FOLDER_ID indien gezet).
 * 4. Deel het blad read-only met wie mag meekijken.
 */

const CONTROL_TOWER_NAME = 'CM AGENT CONTROL TOWER';
const CONTROL_TOWER_PARENT_FOLDER_ID = ''; // leeg = My Drive; of zet een 06_.../00_ADMIN map-ID

const CT_AGENTS = [
  'CM CONTROL', 'CM OPS', 'CM MONEY', 'CM LEGAL',
  'CM PROSPECT', 'CM SOCIAL', 'CM VAULT', 'CM FLOW',
];

// Kolommen per agent-tab.
const CT_AGENT_HEADERS = [
  'Item', 'Workflow / Lane', 'ClickUp/Drive link', 'Status', 'Owner',
  'Due Date', 'Waiting-On', 'Approval status', 'Laatste update', 'Reden / notitie',
];

// Kolommen op de cockpit-tab (één rij per agent).
const CT_COCKPIT_HEADERS = [
  'Agent', 'Status', 'Open items', 'Waiting-On', 'Escalaties',
  'Gate-wachtrij (Sophia)', 'Laatste update', 'Tab',
];

function buildControlTower() {
  const ss = getOrCreateSpreadsheet_();
  buildLegenda_(ss);
  // Agent-tabs eerst: de cockpit heeft hun echte sheet-ID (gid) nodig voor de links.
  CT_AGENTS.forEach(function (agent) { buildAgentTab_(ss, agent); });
  buildCockpit_(ss);
  orderTabs_(ss);
  Logger.log('Control Tower gereed: ' + ss.getUrl());
  return ss.getUrl();
}

function getOrCreateSpreadsheet_() {
  // Zoek bestaand blad op naam (in de parent-map indien gezet), anders maak nieuw.
  const parent = (CONTROL_TOWER_PARENT_FOLDER_ID && CONTROL_TOWER_PARENT_FOLDER_ID.trim() !== '')
    ? DriveApp.getFolderById(CONTROL_TOWER_PARENT_FOLDER_ID.trim())
    : DriveApp.getRootFolder();
  const existing = parent.getFilesByName(CONTROL_TOWER_NAME);
  if (existing.hasNext()) {
    Logger.log('Hergebruik bestaand blad.');
    return SpreadsheetApp.open(existing.next());
  }
  const ss = SpreadsheetApp.create(CONTROL_TOWER_NAME);
  // Verplaats naar de parent-map indien gezet (kopie-vrij via addFile/removeFile op root).
  if (CONTROL_TOWER_PARENT_FOLDER_ID && CONTROL_TOWER_PARENT_FOLDER_ID.trim() !== '') {
    const file = DriveApp.getFileById(ss.getId());
    parent.addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  }
  Logger.log('Nieuw blad aangemaakt.');
  return ss;
}

function getOrCreateSheet_(ss, name) {
  const sh = ss.getSheetByName(name);
  return sh ? sh : ss.insertSheet(name);
}

function setHeaderRow_(sh, headers) {
  const range = sh.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  range.setFontWeight('bold').setBackground('#1f2a44').setFontColor('#ffffff');
  sh.setFrozenRows(1);
  for (var c = 1; c <= headers.length; c++) { sh.autoResizeColumn(c); }
}

function buildAgentTab_(ss, agent) {
  const sh = getOrCreateSheet_(ss, agent);
  setHeaderRow_(sh, CT_AGENT_HEADERS);
  // Status-kolom (D) als dropdown voor consistente waarden.
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['🟢 Op koers', '🟡 Aandacht', '🔴 Blocked', '⏳ Waiting-On', '🔒 Gate', '✅ Done'], true)
    .setAllowInvalid(true).build();
  sh.getRange(2, 4, Math.max(sh.getMaxRows() - 1, 1), 1).setDataValidation(statusRule);
}

function buildCockpit_(ss) {
  const sh = getOrCreateSheet_(ss, 'COCKPIT');
  setHeaderRow_(sh, CT_COCKPIT_HEADERS);
  // Eén rij per agent, met live-tellingen uit de agent-tabs.
  const rows = CT_AGENTS.map(function (agent) {
    const t = "'" + agent + "'";
    const gid = ss.getSheetByName(agent).getSheetId(); // echte tab-ID voor de link
    return [
      agent,
      '=IFERROR(INDEX(' + t + '!D2:D, MATCH("🔴*", ' + t + '!D2:D, 0)), "🟢")', // eerste blocker of groen
      '=COUNTIFS(' + t + '!A2:A, "<>", ' + t + '!D2:D, "<>✅ Done")',           // open = nonempty & niet Done
      '=COUNTIF(' + t + '!D2:D, "⏳*")',
      '=COUNTIF(' + t + '!D2:D, "🔴*")',
      '=COUNTIF(' + t + '!D2:D, "🔒*")',
      '=IF(COUNTA(' + t + '!I2:I)=0, "", MAX(' + t + '!I2:I))',                // leeg als geen updates
      '=HYPERLINK("#gid=' + gid + '","open")',
    ];
  });
  sh.getRange(2, 1, rows.length, CT_COCKPIT_HEADERS.length).setValues(rows);
  // Gate-wachtrij sectiekop onder de agent-rijen.
  const gateRow = rows.length + 3;
  sh.getRange(gateRow, 1).setValue('GATE-WACHTRIJ — wacht op Sophia').setFontWeight('bold');
  sh.getRange(gateRow + 1, 1, 1, 5)
    .setValues([['Agent', 'Item', 'Type gate', 'Sinds', 'Link']])
    .setFontWeight('bold').setBackground('#7a1f1f').setFontColor('#ffffff');
}

function buildLegenda_(ss) {
  const sh = getOrCreateSheet_(ss, 'LEGENDA');
  const rows = [
    ['CM AGENT CONTROL TOWER — legenda', ''],
    ['', ''],
    ['Status', 'Betekenis'],
    ['🟢 Op koers', 'Loopt, geen actie nodig'],
    ['🟡 Aandacht', 'Let op / dreigt uit te lopen'],
    ['🔴 Blocked', 'Geblokkeerd — heeft actie/besluit nodig'],
    ['⏳ Waiting-On', 'Wacht op input (client/agent) met follow-updatum'],
    ['🔒 Gate', 'Wacht op approval (meestal Sophia) — niets extern/bindend tot groen'],
    ['✅ Done', 'Afgerond'],
    ['', ''],
    ['Regels', ''],
    ['Read-only overzicht', 'Het werk gebeurt in ClickUp/Drive/Moneybird; dit blad is de spiegel.'],
    ['Waiting-On zonder follow-updatum', 'Ongeldig — telt als aandacht.'],
    ['Gate-wachtrij', 'Alles wat op Sophia wacht staat op de COCKPIT-tab.'],
    ['Voeding', 'v1 = handmatig/mixed; fase 2 = automatisch via Apps Script/Make (ClickUp/Moneybird).'],
  ];
  sh.getRange(1, 1, rows.length, 2).setValues(rows);
  sh.getRange(1, 1).setFontWeight('bold').setFontSize(14);
  sh.getRange(3, 1, 1, 2).setFontWeight('bold').setBackground('#1f2a44').setFontColor('#ffffff');
  sh.getRange(11, 1).setFontWeight('bold');
  sh.autoResizeColumn(1); sh.autoResizeColumn(2);
}

function orderTabs_(ss) {
  // Volgorde: COCKPIT, agents (register-volgorde), LEGENDA. Verplaatst alleen, verwijdert niets.
  const order = ['COCKPIT'].concat(CT_AGENTS).concat(['LEGENDA']);
  order.forEach(function (name, i) {
    const sh = ss.getSheetByName(name);
    if (sh) { ss.setActiveSheet(sh); ss.moveActiveSheet(i + 1); }
  });
  // Verwijder een leeg default 'Sheet1' NIET automatisch (nooit verwijderen); laat staan als het bestaat.
  ss.setActiveSheet(ss.getSheetByName('COCKPIT'));
}

/**
 * CM AGENT CONTROL TOWER — Google Sheet opzet
 * Entity: Custommade Agency Int. B.V. (CUSTOMMADE AGENCY — uitsluitend CM)
 *
 * GOVERNANCE
 * - Volgt docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md
 * - Taal: Nederlands; gangbare industry-/machine-termen mogen Engels blijven
 * - Typografie: Montserrat
 * - Kleuren: zwart/wit; geen decoratieve kleuren
 * - Drive = documentatie; ClickUp = uitvoering; Moneybird = financiële waarheid
 *
 * Veiligheid
 * - Verwijdert NOOIT tabbladen, rijen of data.
 * - Idempotent: bestaande tabs worden hergebruikt.
 */

const CONTROL_TOWER_NAME = 'CM AGENT CONTROL TOWER';
const CONTROL_TOWER_PARENT_FOLDER_ID = '';

const CT_FONT = 'Montserrat';
const CT_BLACK = '#000000';
const CT_WHITE = '#FFFFFF';

const CT_AGENTS = [
  'CM CONTROL', 'CM OPS', 'CM MONEY', 'CM LEGAL',
  'CM PROSPECT', 'CM SOCIAL', 'CM VAULT', 'CM FLOW',
];

const CT_AGENT_HEADERS = [
  'Item', 'Workflow / Lane', 'ClickUp/Drive-link', 'Status', 'Eigenaar',
  'Deadline', 'Wacht op', 'Goedkeuringsstatus', 'Laatste update', 'Reden / notitie',
];

const CT_COCKPIT_HEADERS = [
  'Agent', 'Status', 'Open items', 'Wacht op', 'Escalaties',
  'Besluitwachtrij Sophia', 'Laatste update', 'Tab',
];

const CT_STATUSES = [
  'OP_KOERS', 'AANDACHT', 'GEBLOKKEERD',
  'WACHT_OP', 'BESLUIT_SOPHIA', 'AFGEROND'
];

function buildControlTower() {
  const ss = getOrCreateSpreadsheet_();
  buildLegenda_(ss);
  CT_AGENTS.forEach(function (agent) { buildAgentTab_(ss, agent); });
  buildCockpit_(ss);
  orderTabs_(ss);
  applyControlTowerGovernance_(ss);
  Logger.log('Control Tower gereed en CM-governance compliant: ' + ss.getUrl());
  return ss.getUrl();
}

function getOrCreateSpreadsheet_() {
  const parent = (CONTROL_TOWER_PARENT_FOLDER_ID && CONTROL_TOWER_PARENT_FOLDER_ID.trim() !== '')
    ? DriveApp.getFolderById(CONTROL_TOWER_PARENT_FOLDER_ID.trim())
    : DriveApp.getRootFolder();
  const existing = parent.getFilesByName(CONTROL_TOWER_NAME);
  if (existing.hasNext()) return SpreadsheetApp.open(existing.next());

  const ss = SpreadsheetApp.create(CONTROL_TOWER_NAME);
  if (CONTROL_TOWER_PARENT_FOLDER_ID && CONTROL_TOWER_PARENT_FOLDER_ID.trim() !== '') {
    const file = DriveApp.getFileById(ss.getId());
    parent.addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  }
  return ss;
}

function getOrCreateSheet_(ss, name) {
  const sh = ss.getSheetByName(name);
  return sh ? sh : ss.insertSheet(name);
}

function setHeaderRow_(sh, headers) {
  const range = sh.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  range
    .setFontFamily(CT_FONT)
    .setFontSize(8)
    .setFontWeight('bold')
    .setBackground(CT_BLACK)
    .setFontColor(CT_WHITE)
    .setWrap(true);
  sh.setFrozenRows(1);
  sh.setHiddenGridlines(true);
  for (var c = 1; c <= headers.length; c++) {
    sh.autoResizeColumn(c);
    if (sh.getColumnWidth(c) > 320) sh.setColumnWidth(c, 320);
  }
}

function buildAgentTab_(ss, agent) {
  const sh = getOrCreateSheet_(ss, agent);
  setHeaderRow_(sh, CT_AGENT_HEADERS);
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(CT_STATUSES, true)
    .setAllowInvalid(true)
    .build();
  sh.getRange(2, 4, Math.max(sh.getMaxRows() - 1, 1), 1).setDataValidation(statusRule);
}

function buildCockpit_(ss) {
  const sh = getOrCreateSheet_(ss, 'COCKPIT');
  setHeaderRow_(sh, CT_COCKPIT_HEADERS);

  const rows = CT_AGENTS.map(function (agent) {
    const t = "'" + agent + "'";
    const gid = ss.getSheetByName(agent).getSheetId();
    return [
      agent,
      '=IF(COUNTIF(' + t + '!D2:D,"GEBLOKKEERD")>0,"GEBLOKKEERD",IF(COUNTIF(' + t + '!D2:D,"AANDACHT")>0,"AANDACHT","OP_KOERS"))',
      '=COUNTIFS(' + t + '!A2:A,"<>",' + t + '!D2:D,"<>AFGEROND")',
      '=COUNTIF(' + t + '!D2:D,"WACHT_OP")',
      '=COUNTIF(' + t + '!D2:D,"GEBLOKKEERD")',
      '=COUNTIF(' + t + '!D2:D,"BESLUIT_SOPHIA")',
      '=IF(COUNTA(' + t + '!I2:I)=0,"",MAX(' + t + '!I2:I))',
      '=HYPERLINK("#gid=' + gid + '","open")'
    ];
  });

  if (rows.length) {
    sh.getRange(2, 1, rows.length, CT_COCKPIT_HEADERS.length).setValues(rows);
  }

  const gateRow = rows.length + 3;
  sh.getRange(gateRow, 1, 1, 5)
    .merge()
    .setValue('BESLUITWACHTRIJ — WACHT OP SOPHIA')
    .setFontFamily(CT_FONT)
    .setFontWeight('bold')
    .setBackground(CT_BLACK)
    .setFontColor(CT_WHITE);

  sh.getRange(gateRow + 1, 1, 1, 5)
    .setValues([['Agent', 'Item', 'Type besluit', 'Sinds', 'Link']])
    .setFontFamily(CT_FONT)
    .setFontSize(8)
    .setFontWeight('bold')
    .setBackground(CT_BLACK)
    .setFontColor(CT_WHITE);
}

function buildLegenda_(ss) {
  const sh = getOrCreateSheet_(ss, 'LEGENDA');
  const rows = [
    ['CM AGENT CONTROL TOWER — LEGENDA', ''],
    ['', ''],
    ['Status', 'Betekenis'],
    ['OP_KOERS', 'Loopt volgens plan; geen directe actie nodig'],
    ['AANDACHT', 'Actie of controle nodig'],
    ['GEBLOKKEERD', 'Kan niet verder zonder actie'],
    ['WACHT_OP', 'Wacht op input, reactie of externe partij'],
    ['BESLUIT_SOPHIA', 'Besluit of goedkeuring van Sophia nodig'],
    ['AFGEROND', 'Volledig afgerond'],
    ['', ''],
    ['Systeem', 'Functie'],
    ['Drive', 'Opslag, documentatie en bewijs'],
    ['ClickUp', 'Uitvoering en opvolging'],
    ['Moneybird', 'Financiële waarheid'],
    ['GitHub', 'Governance en automation-specificaties']
  ];
  sh.getRange(1, 1, rows.length, 2).setValues(rows);
  sh.getDataRange().setFontFamily(CT_FONT).setFontSize(8).setWrap(true);
  sh.getRange(1, 1, 1, 2).setFontSize(12).setFontWeight('bold').setBackground(CT_BLACK).setFontColor(CT_WHITE);
  sh.getRange(3, 1, 1, 2).setFontWeight('bold').setBackground(CT_BLACK).setFontColor(CT_WHITE);
  sh.getRange(11, 1, 1, 2).setFontWeight('bold').setBackground(CT_BLACK).setFontColor(CT_WHITE);
  sh.setHiddenGridlines(true);
  sh.setColumnWidth(1, 200);
  sh.setColumnWidth(2, 500);
}

function applyControlTowerGovernance_(ss) {
  ss.getSheets().forEach(function (sh) {
    if (sh.getLastRow() === 0 || sh.getLastColumn() === 0) return;
    sh.getDataRange()
      .setFontFamily(CT_FONT)
      .setFontSize(8)
      .setVerticalAlignment('middle')
      .setWrap(true);
    sh.setHiddenGridlines(true);

    if (sh.getName() !== 'LEGENDA') {
      sh.getRange(1, 1, 1, sh.getLastColumn())
        .setFontFamily(CT_FONT)
        .setFontSize(8)
        .setFontWeight('bold')
        .setBackground(CT_BLACK)
        .setFontColor(CT_WHITE);
      sh.setFrozenRows(1);
    }
  });
}

function orderTabs_(ss) {
  const order = ['COCKPIT'].concat(CT_AGENTS).concat(['LEGENDA']);
  order.forEach(function (name, i) {
    const sh = ss.getSheetByName(name);
    if (sh) {
      ss.setActiveSheet(sh);
      ss.moveActiveSheet(i + 1);
    }
  });
  if (ss.getSheetByName('COCKPIT')) ss.setActiveSheet(ss.getSheetByName('COCKPIT'));
}

/**
 * OS_CUSTOMMADE root migration planner/executor for Sprint 2C.
 *
 * Governance basis:
 * - docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md
 * - docs/00_GOVERNANCE/DRIVE_INVENTORY_ANALYSIS_WORKFLOW.md
 * - docs/00_GOVERNANCE/DRIVE_INVENTORY_EXPORT_GUIDE.md
 *
 * Purpose:
 * - Use the actual Drive Inventory spreadsheet as the source of truth.
 * - Translate each inventory row to a Sprint 2B root-level migration decision.
 * - Write a Migration Log sheet, movement count, manual-review list and conflicts list.
 * - Never change Drive content while DRY_RUN is true.
 *
 * Setup:
 * 1. Paste this file into Google Apps Script.
 * 2. Set INVENTORY_SPREADSHEET_ID to the real inventory spreadsheet created by
 *    scripts/google-drive/export-drive-inventory.gs.
 * 3. Keep DRY_RUN = true for Sprint 2C validation.
 * 4. Run dryRunSprint2CMigration().
 */
const DRY_RUN = true;
const INVENTORY_SPREADSHEET_ID = '';
const INVENTORY_SHEET_NAME = 'Drive Inventory';
const MIGRATION_LOG_SHEET_NAME = 'Sprint 2C Migration Log';
const MANUAL_REVIEW_SHEET_NAME = 'Sprint 2C Manual Review';
const CONFLICTS_SHEET_NAME = 'Sprint 2C Conflicts';
const SUMMARY_SHEET_NAME = 'Sprint 2C Summary';
const MIGRATION_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const MIGRATION_DATE = Utilities.formatDate(new Date(), MIGRATION_TIMEZONE, 'yyyy-MM-dd');

const INVENTORY_COLUMNS = {
  folderId: 'Folder ID',
  folderName: 'Folder naam',
  fullPath: 'Volledig pad',
  parentFolder: 'Parent folder',
  rootFolder: 'Root folder',
  governanceRoot: 'Governance root',
  owner: 'Eigenaar',
  fileCount: 'Aantal bestanden',
  folderCount: 'Aantal submappen',
  lastUpdated: 'Laatst gewijzigd',
  inventoryAction: 'Migratieactie',
  note: 'Opmerking',
  folderUrl: 'Folder URL',
  parentFolderId: 'Parent folder ID',
  exportTimestamp: 'Export timestamp',
};

const MIGRATION_LOG_HEADERS = [
  'Timestamp',
  'DRY_RUN',
  'Status',
  'Folder ID',
  'Folder naam',
  'Bronpad',
  'Doelpad',
  'Sprint 2B actie',
  'Risico',
  'Migratievolgorde',
  'Aantal bestanden',
  'Aantal submappen',
  'Eigenaar',
  'Review vereist',
  'Conflict',
  'Reden / afhankelijkheden',
  'Folder URL',
];

const REVIEW_HEADERS = [
  'Folder ID',
  'Folder naam',
  'Bronpad',
  'Voorgesteld doelpad',
  'Reden handmatige review',
  'Risico',
  'Eigenaar',
  'Folder URL',
];

const CONFLICT_HEADERS = [
  'Folder ID',
  'Folder naam',
  'Bronpad',
  'Voorgesteld doelpad',
  'Conflict type',
  'Blokkade',
  'Risico',
  'Eigenaar',
  'Folder URL',
];

const CANONICAL_ROOTS = {
  '00_ADMIN': 'OS_CUSTOMMADE/00_ADMIN',
  '01_MASTER_BOUTIQUE': 'OS_CUSTOMMADE/01_MASTER_BOUTIQUE',
  '02_ARTIST_MANAGEMENT': 'OS_CUSTOMMADE/02_ARTIST_MANAGEMENT',
  '03_CLIENTS': 'OS_CUSTOMMADE/03_CLIENTS',
  '04_DEALS': 'OS_CUSTOMMADE/04_DEALS',
  '05_OPERATIONS': 'OS_CUSTOMMADE/05_OPERATIONS',
  '06_FINANCE': 'OS_CUSTOMMADE/06_FINANCE',
  '07_LEGAL': 'OS_CUSTOMMADE/07_LEGAL',
  '08_MARKETING': 'OS_CUSTOMMADE/08_MARKETING',
  '09_CONTENT': 'OS_CUSTOMMADE/09_CONTENT',
  '99_ARCHIVE': 'OS_CUSTOMMADE/99_ARCHIVE',
};

const LEGACY_ROOT_RULES = {
  '00_GOVERNANCE': { action: 'hernoemen / opsplitsen / deels archiveren', target: 'OS_CUSTOMMADE/00_ADMIN/GOVERNANCE_REFERENCE', risk: 'Middel', order: 1, review: true, reason: 'GitHub blijft source of truth; alleen niet-vertrouwelijke governancekopieën naar Drive-reference.' },
  '00_INBOX': { action: 'opsplitsen / HOLD / archiveren', target: 'HOLD', risk: 'Kritiek', order: 2, review: true, reason: 'Inbox is geen blijvende root; itemclassificatie, owner, FIERCE-scan en linkcontrole verplicht.' },
  '01_ARTIST_MANAGEMENT': { action: 'hernoemen / samenvoegen / deels archiveren', target: 'OS_CUSTOMMADE/02_ARTIST_MANAGEMENT', risk: 'Hoog', order: 3, review: true, reason: 'Canonical artiestnaam, duplicaatcontrole, legal/finance/rights en links controleren.' },
  '02_MASTER_BOUTIQUE': { action: 'opsplitsen', target: 'OS_CUSTOMMADE/01_MASTER_BOUTIQUE', risk: 'Hoog', order: 5, review: true, reason: 'Business-lane documentatie naar Master Boutique; dealdossiers naar 04_DEALS na dealstatuscontrole.' },
  '03_EXECUTIVE': { action: 'hernoemen / opsplitsen / samenvoegen', target: 'OS_CUSTOMMADE/00_ADMIN', risk: 'Hoog', order: 6, review: true, reason: 'Admin, governance, legal en finance verdelen met vertrouwelijkheids-, Moneybird- en legal review.' },
  '04_BUSINESS': { action: 'opsplitsen / samenvoegen / archiveren', target: 'HOLD', risk: 'Hoog', order: 4, review: true, reason: 'Verdelen over clients, deals, operations, finance, legal en admin; artist/client/dealconflict uitsluiten.' },
  '05_MARKETING': { action: 'hernoemen / opsplitsen / archiveren', target: 'OS_CUSTOMMADE/08_MARKETING', risk: 'Middel', order: 7, review: true, reason: 'Generieke marketing naar 08_MARKETING; artist/client-campagnes blijven dossier-specifiek.' },
  '06_PROJECTS': { action: 'opsplitsen / samenvoegen / archiveren', target: 'HOLD', risk: 'Hoog', order: 3, review: true, reason: 'Projecten classificeren als artist, client, deal, operations, content of archive.' },
  '07_ARCHIVE': { action: 'hernoemen / samenvoegen / shims tijdelijk behouden', target: 'OS_CUSTOMMADE/99_ARCHIVE', risk: 'Middel', order: 8, review: true, reason: 'Archive consolideren met broncontext; actieve dossiers en shims niet blind archiveren.' },
};

function dryRunSprint2CMigration() {
  return runSprint2CMigration_();
}

function runSprint2CMigration_() {
  if (!DRY_RUN) {
    throw new Error('Live migration is blocked in Sprint 2C. Set DRY_RUN back to true.');
  }
  if (!INVENTORY_SPREADSHEET_ID) {
    throw new Error('Set INVENTORY_SPREADSHEET_ID to the actual Drive Inventory spreadsheet ID before running Sprint 2C.');
  }

  const spreadsheet = SpreadsheetApp.openById(INVENTORY_SPREADSHEET_ID);
  const inventorySheet = spreadsheet.getSheetByName(INVENTORY_SHEET_NAME);
  if (!inventorySheet) {
    throw new Error('Inventory sheet not found: ' + INVENTORY_SHEET_NAME);
  }

  const rows = readInventoryRows_(inventorySheet);
  const timestamp = Utilities.formatDate(new Date(), MIGRATION_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const migrationRows = [];
  const reviewRows = [];
  const conflictRows = [];
  let movementCount = 0;

  rows.forEach(function(row) {
    const decision = decideMigration_(row);
    if (decision.countsAsMovement) {
      movementCount += 1;
    }
    migrationRows.push(buildMigrationLogRow_(timestamp, row, decision));
    if (decision.reviewRequired) {
      reviewRows.push(buildReviewRow_(row, decision));
    }
    if (decision.conflict) {
      conflictRows.push(buildConflictRow_(row, decision));
    }
  });

  writeSheet_(spreadsheet, MIGRATION_LOG_SHEET_NAME, MIGRATION_LOG_HEADERS, migrationRows);
  writeSheet_(spreadsheet, MANUAL_REVIEW_SHEET_NAME, REVIEW_HEADERS, reviewRows);
  writeSheet_(spreadsheet, CONFLICTS_SHEET_NAME, CONFLICT_HEADERS, conflictRows);
  writeSummary_(spreadsheet, rows.length, movementCount, reviewRows.length, conflictRows.length, timestamp);

  Logger.log('Sprint 2C dry run complete: ' + spreadsheet.getUrl());
  Logger.log('Aantal verplaatsingen: ' + movementCount);
  Logger.log('Handmatige review lijst: ' + reviewRows.length);
  Logger.log('Conflictenlijst: ' + conflictRows.length);
  return spreadsheet.getUrl();
}

function readInventoryRows_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return [];
  }
  const headerMap = buildHeaderMap_(values[0]);
  validateRequiredColumns_(headerMap);
  const rows = [];
  for (let i = 1; i < values.length; i += 1) {
    if (values[i][0] === 'STATUS' || values[i][0] === 'ERROR' || isBlankRow_(values[i])) {
      continue;
    }
    rows.push(toInventoryObject_(values[i], headerMap));
  }
  return rows;
}

function decideMigration_(row) {
  const root = normalizeRoot_(row.rootFolder, row.fullPath);
  const childPath = stripInventoryRoot_(row.fullPath);
  const firstChild = childPath.split('/')[1] || '';
  let rule = LEGACY_ROOT_RULES[root];
  let target = '';
  let action = '';
  let risk = '';
  let order = '';
  let reason = '';
  let reviewRequired = false;
  let conflict = '';

  if (CANONICAL_ROOTS[root]) {
    target = rebuildCanonicalTarget_(root, childPath);
    action = 'behouden';
    risk = riskForCanonicalRoot_(root);
    order = orderForCanonicalRoot_(root);
    reason = 'Map staat al onder een goedgekeurde OS_CUSTOMMADE governance root; owner-, link- en risicoreview blijven verplicht.';
  } else if (rule) {
    target = refineLegacyTarget_(root, firstChild, row.fullPath, rule.target);
    action = rule.action;
    risk = rule.risk;
    order = rule.order;
    reason = rule.reason;
    reviewRequired = rule.review;
  } else {
    target = 'HOLD';
    action = 'handmatige review';
    risk = 'Kritiek';
    order = 2;
    reviewRequired = true;
    reason = 'Root is niet vastgelegd in Sprint 2B; classificatie, ownerbesluit en FIERCE-check verplicht.';
  }

  const conflictChecks = detectConflicts_(row, root, target);
  if (conflictChecks.length > 0) {
    conflict = conflictChecks.join('; ');
    reviewRequired = true;
  }

  if (row.inventoryAction === 'handmatige review' || target === 'HOLD') {
    reviewRequired = true;
  }

  return {
    action: action,
    target: target,
    risk: risk,
    order: order,
    reason: reason,
    reviewRequired: reviewRequired,
    conflict: conflict,
    status: DRY_RUN ? 'DRY_RUN_ONLY_GEEN_DRIVE_WIJZIGING' : 'LIVE_BLOCKED',
    countsAsMovement: target !== 'HOLD' && action !== 'behouden' && target !== row.fullPath,
  };
}

function refineLegacyTarget_(root, firstChild, fullPath, fallbackTarget) {
  const name = firstChild || lastPathPart_(fullPath);
  const lowerPath = fullPath.toLowerCase();
  if (root === '02_MASTER_BOUTIQUE' && /(deal|catalog|asset|loi|apa|closing|data room|due diligence)/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/04_DEALS/' + name;
  }
  if (root === '03_EXECUTIVE' && /finance/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/06_FINANCE/' + name;
  }
  if (root === '03_EXECUTIVE' && /legal|contract/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/07_LEGAL/' + name;
  }
  if (root === '04_BUSINESS' && /(client|brand|sponsor)/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/03_CLIENTS/' + name;
  }
  if (root === '04_BUSINESS' && /(deal|pipeline|prospect)/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/04_DEALS/' + name;
  }
  if (root === '04_BUSINESS' && /(operation|process|tool)/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/05_OPERATIONS/' + name;
  }
  if (root === '04_BUSINESS' && /finance/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/06_FINANCE/' + name;
  }
  if (root === '04_BUSINESS' && /legal|contract/i.test(fullPath)) {
    return 'OS_CUSTOMMADE/07_LEGAL/' + name;
  }
  if (root === '05_MARKETING' && /(artist|epk|press|socialmedia)/i.test(fullPath)) {
    return 'HOLD';
  }
  if (root === '06_PROJECTS') {
    if (/(client|brand)/i.test(lowerPath)) return 'OS_CUSTOMMADE/03_CLIENTS/' + name;
    if (/(deal|catalog|rights)/i.test(lowerPath)) return 'OS_CUSTOMMADE/04_DEALS/' + name;
    if (/(content|video|shoot|production)/i.test(lowerPath)) return 'OS_CUSTOMMADE/09_CONTENT/' + name;
    return 'HOLD';
  }
  if (root === '07_ARCHIVE') {
    return 'OS_CUSTOMMADE/99_ARCHIVE/07_ARCHIVE/' + name;
  }
  return fallbackTarget === 'HOLD' ? 'HOLD' : fallbackTarget + (name && fallbackTarget.indexOf('[') === -1 ? '/' + name : '');
}

function detectConflicts_(row, root, target) {
  const conflicts = [];
  const haystack = [row.folderName, row.fullPath, row.note].join(' ');
  if (/fierce/i.test(haystack)) conflicts.push('Mogelijk FIERCE-content; uitsluiten tot expliciet CM-besluit.');
  if (/(copy|kopie|duplicate|duplicaat|backup|back-up)/i.test(row.folderName)) conflicts.push('Duplicaat/canonical-conflict.');
  if (/OWNER_UNKNOWN|ERROR_METADATA/i.test(row.owner)) conflicts.push('Owner ontbreekt of metadata onleesbaar.');
  if (/(legal|contract|rights|finance|invoice|royalt|moneybird)/i.test(haystack)) conflicts.push('Legal/finance/rights review vereist.');
  if ((root === '03_CLIENTS' || target.indexOf('/03_CLIENTS/') !== -1) && isKnownArtistSignal_(haystack)) conflicts.push('Artist/client-classificatieconflict.');
  if (target === 'HOLD') conflicts.push('HOLD: doelpad niet veilig vastgesteld.');
  return conflicts;
}

function buildMigrationLogRow_(timestamp, row, decision) {
  return [timestamp, DRY_RUN, decision.status, row.folderId, row.folderName, row.fullPath, decision.target, decision.action, decision.risk, decision.order, row.fileCount, row.folderCount, row.owner, decision.reviewRequired ? 'Ja' : 'Nee', decision.conflict || 'Nee', decision.reason, row.folderUrl];
}

function buildReviewRow_(row, decision) {
  return [row.folderId, row.folderName, row.fullPath, decision.target, decision.conflict || decision.reason, decision.risk, row.owner, row.folderUrl];
}

function buildConflictRow_(row, decision) {
  return [row.folderId, row.folderName, row.fullPath, decision.target, decision.conflict, 'Niet verplaatsen zolang blokkade open is.', decision.risk, row.owner, row.folderUrl];
}

function writeSummary_(spreadsheet, totalRows, movementCount, reviewCount, conflictCount, timestamp) {
  const rows = [
    ['Veld', 'Waarde'],
    ['Timestamp', timestamp],
    ['DRY_RUN', DRY_RUN],
    ['Bron spreadsheet ID', INVENTORY_SPREADSHEET_ID],
    ['Bron sheet', INVENTORY_SHEET_NAME],
    ['Aantal inventory regels', totalRows],
    ['Aantal verplaatsingen', movementCount],
    ['Handmatige review lijst', reviewCount],
    ['Conflictenlijst', conflictCount],
    ['Governance', 'Sprint 2B Drive Migration Matrix'],
    ['Veiligheidsregel', 'Geen Drive-wijzigingen zolang DRY_RUN = true.'],
  ];
  writeSheet_(spreadsheet, SUMMARY_SHEET_NAME, rows[0], rows.slice(1));
}

function writeSheet_(spreadsheet, sheetName, headers, rows) {
  const sheet = resetSheet_(spreadsheet, sheetName);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function resetSheet_(spreadsheet, sheetName) {
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
  sheet.clear();
  return sheet;
}

function buildHeaderMap_(headers) {
  return headers.reduce(function(map, header, index) {
    map[String(header).trim()] = index;
    return map;
  }, {});
}

function validateRequiredColumns_(headerMap) {
  Object.keys(INVENTORY_COLUMNS).forEach(function(key) {
    const header = INVENTORY_COLUMNS[key];
    if (headerMap[header] === undefined) {
      throw new Error('Missing required inventory column: ' + header);
    }
  });
}

function toInventoryObject_(row, headerMap) {
  const obj = {};
  Object.keys(INVENTORY_COLUMNS).forEach(function(key) {
    obj[key] = row[headerMap[INVENTORY_COLUMNS[key]]];
  });
  obj.folderName = String(obj.folderName || '');
  obj.fullPath = String(obj.fullPath || '');
  obj.rootFolder = String(obj.rootFolder || '');
  obj.owner = String(obj.owner || '');
  obj.inventoryAction = String(obj.inventoryAction || '');
  obj.note = String(obj.note || '');
  return obj;
}

function isBlankRow_(row) {
  return row.join('').trim() === '';
}

function normalizeRoot_(rootFolder, fullPath) {
  if (rootFolder) return rootFolder;
  const parts = String(fullPath || '').split('/');
  return parts.length > 1 ? parts[1] : parts[0];
}

function stripInventoryRoot_(fullPath) {
  const parts = String(fullPath || '').split('/');
  return parts.length > 1 ? parts.slice(1).join('/') : String(fullPath || '');
}

function rebuildCanonicalTarget_(root, childPath) {
  const childParts = String(childPath || '').split('/');
  childParts[0] = root;
  return 'OS_CUSTOMMADE/' + childParts.join('/');
}

function lastPathPart_(fullPath) {
  const parts = String(fullPath || '').split('/');
  return parts[parts.length - 1] || '';
}

function riskForCanonicalRoot_(root) {
  if (root === '06_FINANCE' || root === '07_LEGAL' || root === '04_DEALS') return 'Hoog';
  if (root === '99_ARCHIVE') return 'Middel';
  return 'Laag';
}

function orderForCanonicalRoot_(root) {
  const order = { '00_ADMIN': 1, '01_MASTER_BOUTIQUE': 1, '02_ARTIST_MANAGEMENT': 3, '03_CLIENTS': 4, '04_DEALS': 5, '05_OPERATIONS': 7, '06_FINANCE': 6, '07_LEGAL': 6, '08_MARKETING': 7, '09_CONTENT': 7, '99_ARCHIVE': 8 };
  return order[root] || 10;
}

function isKnownArtistSignal_(text) {
  return /(calsey|dani\s*deaux|dodo|giniio|goudtje|get_paid|jairzinho|kalibwoy|latifah|namikoo)/i.test(text);
}

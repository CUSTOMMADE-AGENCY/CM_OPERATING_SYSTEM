/**
 * Sprint 2B — OS_CUSTOMMADE root migration dry-run simulator.
 *
 * Source matrix:
 * docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md
 *
 * Purpose:
 * - Simulate migration of the current OS_CUSTOMMADE roots to the definitive
 *   root structure.
 * - Write a Migration Log Sheet, conflict list and manual review list.
 *
 * Safety guarantees:
 * - DRY_RUN is hard-coded to true.
 * - This script never deletes files or folders.
 * - This script never moves, renames or creates Drive folders/files.
 * - The only write action is creating/updating the migration log spreadsheet.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const DRY_RUN = true;
const MIGRATION_LOG_SPREADSHEET_ID = '';
const MIGRATION_SPREADSHEET_NAME = 'CM_OS Sprint 2B OS_CUSTOMMADE Migration Dry Run';
const MIGRATION_LOG_SHEET_NAME = 'Migration Log';
const CONFLICTS_SHEET_NAME = 'Conflictenlijst';
const MANUAL_REVIEW_SHEET_NAME = 'Handmatige review lijst';
const SUMMARY_SHEET_NAME = 'Samenvatting';
const MIGRATION_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';

const DEFINITIVE_ROOTS = [
  '00_ADMIN',
  '01_MASTER_BOUTIQUE',
  '02_ARTIST_MANAGEMENT',
  '03_CLIENTS',
  '04_DEALS',
  '05_OPERATIONS',
  '06_FINANCE',
  '07_LEGAL',
  '08_MARKETING',
  '09_CONTENT',
  '99_ARCHIVE',
];

const CURRENT_ROOT_DECISIONS = [
  {
    sourceRoot: '00_GOVERNANCE',
    defaultTarget: '00_ADMIN/GOVERNANCE_REFERENCE',
    action: 'hernoemen / opsplitsen / samenvoegen / deels archiveren',
    risk: 'Middel',
    order: 1,
    dependency: 'Controle op dubbele SOPs, verouderde beleidsdocumenten en links vanuit AI-agent instructies.',
    reviewReason: 'Governance blijft GitHub-led; Drive-kopieën alleen als niet-vertrouwelijke referentie of auditwaardig archief.',
  },
  {
    sourceRoot: '00_INBOX',
    defaultTarget: 'HOLD',
    action: 'opsplitsen / archiveren',
    risk: 'Kritiek',
    order: 2,
    dependency: 'Owner, classificatie, FIERCE-scan, vertrouwelijkheidscheck en linkcontrole ontbreken mogelijk.',
    reviewReason: 'Inbox-items krijgen pas na owner-review een definitief artist-, client-, deal- of archiefpad.',
  },
  {
    sourceRoot: '01_ARTIST_MANAGEMENT',
    defaultTarget: '02_ARTIST_MANAGEMENT',
    action: 'hernoemen / samenvoegen / deels archiveren',
    risk: 'Hoog',
    order: 3,
    dependency: 'Canonical artistnaam, aliascontrole, duplicaatcontrole, ClickUp/Gmail/shortcut-links.',
    reviewReason: 'Artistnamen en contract-/finance-/rights-content vereisen owner- en permissions-review.',
  },
  {
    sourceRoot: '02_MASTER_BOUTIQUE',
    defaultTarget: '01_MASTER_BOUTIQUE',
    action: 'opsplitsen',
    risk: 'Hoog',
    order: 5,
    dependency: 'Dealstatus, chain of title, rechtenregister, buyer links en due diligence fase.',
    reviewReason: 'Business-lane documentatie blijft in Master Boutique; operationele dealdossiers moeten naar 04_DEALS.',
  },
  {
    sourceRoot: '03_EXECUTIVE',
    defaultTarget: '00_ADMIN',
    action: 'hernoemen / opsplitsen / samenvoegen',
    risk: 'Hoog',
    order: 6,
    dependency: 'Vertrouwelijkheid, Moneybird-status, legal owner, dossiercontext en audit trail.',
    reviewReason: 'Executive content wordt verdeeld over admin, legal, finance of dossierpaden.',
  },
  {
    sourceRoot: '04_BUSINESS',
    defaultTarget: 'HOLD',
    action: 'opsplitsen / samenvoegen / archiveren',
    risk: 'Hoog',
    order: 4,
    dependency: 'Artist/client/deal classificatie, ClickUp, owners en permissions.',
    reviewReason: 'Brede business-root vereist item-level classificatie naar clients, deals, operations, finance, legal of admin.',
  },
  {
    sourceRoot: '05_MARKETING',
    defaultTarget: '08_MARKETING',
    action: 'hernoemen / opsplitsen / archiveren',
    risk: 'Middel',
    order: 7,
    dependency: 'Assetrechten, campagnecontext en actieve publicatie-links.',
    reviewReason: 'Bepaal per item of materiaal generiek CM-marketing, artist-specifiek of client-specifiek is.',
  },
  {
    sourceRoot: '06_PROJECTS',
    defaultTarget: 'HOLD',
    action: 'opsplitsen / samenvoegen / archiveren',
    risk: 'Hoog',
    order: 3,
    dependency: 'Projectclassificatie, open verplichtingen, rechten, facturatie en actieve links.',
    reviewReason: 'Projecten moeten worden geclassificeerd als artist, client, deal, operations, content of archive.',
  },
  {
    sourceRoot: '07_ARCHIVE',
    defaultTarget: '99_ARCHIVE',
    action: 'hernoemen / samenvoegen / shims tijdelijk behouden',
    risk: 'Middel',
    order: 8,
    dependency: 'Broncontext, actieve dossiers, shortcuts/shims en linkcontrole.',
    reviewReason: 'Archive-content mag niet blind worden gearchiveerd als het actieve artist-, client- of dealdossiers bevat.',
    aliases: ['07_ ARCHIVE'],
  },
];

const LOG_HEADERS = [
  'Timestamp',
  'Migratievolgorde',
  'Oude locatie',
  'Nieuwe locatie',
  'Actie',
  'Risico',
  'Status',
  'Afhankelijkheden',
  'Handmatige review ja/nee',
  'Folder ID',
  'Folder URL',
  'DRY_RUN',
];

const REVIEW_HEADERS = [
  'Timestamp',
  'Oude locatie',
  'Voorgesteld doel / HOLD',
  'Risico',
  'Review reden',
  'Afhankelijkheden',
  'Folder ID',
  'Folder URL',
];

const CONFLICT_HEADERS = [
  'Timestamp',
  'Type conflict',
  'Oude locatie',
  'Voorgesteld doel',
  'Risico',
  'Toelichting',
  'Folder ID',
  'Folder URL',
];

function runOsCustommadeMigrationDryRun() {
  assertDryRunOnly_();

  const startedAt = new Date();
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = safeFolderName_(root, 'OS_CUSTOMMADE');
  const spreadsheet = getOrCreateMigrationSpreadsheet_();
  const logRows = [];
  const conflictRows = [];
  const reviewRows = [];
  const rootSnapshot = getDirectChildFoldersByName_(root);

  resetSheetWithHeaders_(spreadsheet, MIGRATION_LOG_SHEET_NAME, LOG_HEADERS);
  resetSheetWithHeaders_(spreadsheet, CONFLICTS_SHEET_NAME, CONFLICT_HEADERS);
  resetSheetWithHeaders_(spreadsheet, MANUAL_REVIEW_SHEET_NAME, REVIEW_HEADERS);
  resetSheetWithHeaders_(spreadsheet, SUMMARY_SHEET_NAME, ['Key', 'Value']);

  DEFINITIVE_ROOTS.forEach(function(rootFolderName) {
    const existing = rootSnapshot[rootFolderName] || [];
    if (existing.length) {
      addLogRow_(logRows, 0, rootName + '/' + rootFolderName, rootName + '/' + rootFolderName, 'doelroot controleren', 'Laag', 'DRY_RUN_EXISTS', 'Definitieve root bestaat al.', 'nee', existing[0]);
      addDuplicateNameConflicts_(conflictRows, rootName, rootFolderName, existing, 'Dubbele definitieve rootnaam binnen OS_CUSTOMMADE.');
    } else {
      addLogRow_(logRows, 0, rootName + '/' + rootFolderName, rootName + '/' + rootFolderName, 'ontbrekende doelroot signaleren', 'Middel', 'DRY_RUN_TARGET_MISSING', 'Doelroot moet vóór live migratie bestaan of expliciet worden aangemaakt.', 'ja', null);
      addReviewRow_(reviewRows, rootName + '/' + rootFolderName, rootName + '/' + rootFolderName, 'Middel', 'Definitieve doelroot ontbreekt in huidige Drive-root.', 'Aanmaken alleen na go/no-go; dit script maakt geen Drive-folders.', null);
    }
  });

  CURRENT_ROOT_DECISIONS.sort(function(a, b) { return a.order - b.order; }).forEach(function(decision) {
    simulateRootDecision_(rootName, rootSnapshot, decision, logRows, conflictRows, reviewRows);
  });

  addUnexpectedRootReviews_(rootName, rootSnapshot, logRows, conflictRows, reviewRows);

  appendRows_(spreadsheet.getSheetByName(MIGRATION_LOG_SHEET_NAME), logRows, LOG_HEADERS.length);
  appendRows_(spreadsheet.getSheetByName(CONFLICTS_SHEET_NAME), conflictRows, CONFLICT_HEADERS.length);
  appendRows_(spreadsheet.getSheetByName(MANUAL_REVIEW_SHEET_NAME), reviewRows, REVIEW_HEADERS.length);
  writeSummary_(spreadsheet.getSheetByName(SUMMARY_SHEET_NAME), startedAt, spreadsheet.getUrl(), logRows, conflictRows, reviewRows);

  Logger.log('Migration Log Sheet: ' + spreadsheet.getUrl());
  Logger.log('Conflictenlijst: ' + CONFLICTS_SHEET_NAME);
  Logger.log('Handmatige review lijst: ' + MANUAL_REVIEW_SHEET_NAME);
  Logger.log('GEREED VOOR DRY RUN');
  return spreadsheet.getUrl();
}

function runSprint2BDriveMigration() {
  return runOsCustommadeMigrationDryRun();
}

function simulateRootDecision_(rootName, rootSnapshot, decision, logRows, conflictRows, reviewRows) {
  const candidates = getSourceCandidates_(rootSnapshot, decision);
  const targetPath = decision.defaultTarget === 'HOLD' ? 'HOLD' : rootName + '/' + decision.defaultTarget;

  if (!candidates.length) {
    addLogRow_(logRows, decision.order, rootName + '/' + decision.sourceRoot, targetPath, decision.action, decision.risk, 'DRY_RUN_SOURCE_NOT_FOUND', decision.dependency, 'ja', null);
    addReviewRow_(reviewRows, rootName + '/' + decision.sourceRoot, targetPath, decision.risk, 'Bronroot niet gevonden; controleer inventory, spelling en eventuele gedeelde Drive-locaties.', decision.dependency, null);
    return;
  }

  addDuplicateNameConflicts_(conflictRows, rootName, decision.sourceRoot, candidates, 'Dubbele bronrootnaam of alias gevonden; live migratie vereist handmatige keuze van canonical bron.');

  candidates.forEach(function(folder) {
    const oldPath = rootName + '/' + safeFolderName_(folder, decision.sourceRoot);
    const hasChildFolders = folder.getFolders().hasNext();
    const status = decision.defaultTarget === 'HOLD' ? 'DRY_RUN_HOLD_REVIEW' : 'DRY_RUN_PLANNED';

    addLogRow_(logRows, decision.order, oldPath, targetPath, decision.action, decision.risk, status, decision.dependency, 'ja', folder);
    addReviewRow_(reviewRows, oldPath, targetPath, decision.risk, decision.reviewReason, decision.dependency, folder);

    if (hasChildFolders && ['Hoog', 'Kritiek'].indexOf(decision.risk) !== -1) {
      addConflictRow_(conflictRows, 'ITEM_LEVEL_CLASSIFICATION_REQUIRED', oldPath, targetPath, decision.risk, 'Bronroot bevat submappen en mag niet bulk worden verplaatst; classificeer per item volgens migratiematrix.', folder);
    }
  });
}

function addUnexpectedRootReviews_(rootName, rootSnapshot, logRows, conflictRows, reviewRows) {
  const knownNames = DEFINITIVE_ROOTS.concat(CURRENT_ROOT_DECISIONS.map(function(decision) { return decision.sourceRoot; }));
  CURRENT_ROOT_DECISIONS.forEach(function(decision) {
    (decision.aliases || []).forEach(function(alias) { knownNames.push(alias); });
  });

  Object.keys(rootSnapshot).sort().forEach(function(folderName) {
    if (knownNames.indexOf(folderName) !== -1) return;

    rootSnapshot[folderName].forEach(function(folder) {
      const oldPath = rootName + '/' + folderName;
      addLogRow_(logRows, 0, oldPath, 'HOLD', 'onverwachte root signaleren', 'Hoog', 'DRY_RUN_UNEXPECTED_ROOT', 'Niet opgenomen in Sprint 2B migratiematrix.', 'ja', folder);
      addConflictRow_(conflictRows, 'UNEXPECTED_ROOT', oldPath, 'HOLD', 'Hoog', 'Root staat niet in de migratiematrix en vereist owner-besluit.', folder);
      addReviewRow_(reviewRows, oldPath, 'HOLD', 'Hoog', 'Onverwachte root: niet live migreren zonder classificatie, FIERCE-check en owner-akkoord.', 'Owner, beslisser, linkcontrole en permissions review nodig.', folder);
    });
  });
}

function getSourceCandidates_(rootSnapshot, decision) {
  let candidates = [];
  [decision.sourceRoot].concat(decision.aliases || []).forEach(function(name) {
    candidates = candidates.concat(rootSnapshot[name] || []);
  });
  return candidates;
}

function getDirectChildFoldersByName_(parent) {
  const result = {};
  const folders = parent.getFolders();
  while (folders.hasNext()) {
    const folder = folders.next();
    const name = safeFolderName_(folder, 'UNKNOWN');
    if (!result[name]) result[name] = [];
    result[name].push(folder);
  }
  return result;
}

function addDuplicateNameConflicts_(conflictRows, rootName, folderName, folders, explanation) {
  if (folders.length <= 1) return;
  folders.forEach(function(folder) {
    addConflictRow_(conflictRows, 'DUPLICATE_NAME', rootName + '/' + folderName, 'HANDMATIGE_SAMENVOEGING', 'Hoog', explanation, folder);
  });
}

function addLogRow_(rows, order, oldLocation, newLocation, action, risk, status, dependency, manualReview, folder) {
  rows.push([
    formatTimestamp_(new Date()),
    order,
    oldLocation,
    newLocation,
    action,
    risk,
    status,
    dependency || '',
    manualReview,
    safeFolderId_(folder, ''),
    folder ? getFolderUrl_(folder) : '',
    'true',
  ]);
}

function addReviewRow_(rows, oldLocation, targetLocation, risk, reason, dependency, folder) {
  rows.push([
    formatTimestamp_(new Date()),
    oldLocation,
    targetLocation,
    risk,
    reason,
    dependency || '',
    safeFolderId_(folder, ''),
    folder ? getFolderUrl_(folder) : '',
  ]);
}

function addConflictRow_(rows, conflictType, oldLocation, targetLocation, risk, explanation, folder) {
  rows.push([
    formatTimestamp_(new Date()),
    conflictType,
    oldLocation,
    targetLocation,
    risk,
    explanation,
    safeFolderId_(folder, ''),
    folder ? getFolderUrl_(folder) : '',
  ]);
}

function getOrCreateMigrationSpreadsheet_() {
  if (MIGRATION_LOG_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(MIGRATION_LOG_SPREADSHEET_ID);
  }
  return SpreadsheetApp.create(MIGRATION_SPREADSHEET_NAME + ' ' + formatTimestamp_(new Date()));
}

function resetSheetWithHeaders_(spreadsheet, sheetName, headers) {
  const existing = spreadsheet.getSheetByName(sheetName);
  const sheet = existing || spreadsheet.insertSheet(sheetName);
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  return sheet;
}

function appendRows_(sheet, rows, width) {
  if (!rows.length) return;
  sheet.getRange(2, 1, rows.length, width).setValues(rows);
  sheet.autoResizeColumns(1, width);
}

function writeSummary_(sheet, startedAt, logUrl, logRows, conflictRows, reviewRows) {
  const statusCounts = logRows.reduce(function(accumulator, row) {
    const status = row[6];
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {});

  const rows = [
    ['Started at', formatTimestamp_(startedAt)],
    ['Completed at', formatTimestamp_(new Date())],
    ['DRY_RUN', 'true'],
    ['Root folder ID', ROOT_FOLDER_ID],
    ['Migration log spreadsheet', logUrl],
    ['Migration log rows', logRows.length],
    ['Conflictenlijst rows', conflictRows.length],
    ['Handmatige review rows', reviewRows.length],
    ['Final message', 'GEREED VOOR DRY RUN'],
    ['', ''],
    ['Status', 'Aantal'],
  ];

  Object.keys(statusCounts).sort().forEach(function(status) {
    rows.push([status, statusCounts[status]]);
  });

  sheet.getRange(1, 1, rows.length, 2).setValues(rows);
  sheet.autoResizeColumns(1, 2);
}

function assertDryRunOnly_() {
  if (DRY_RUN !== true) {
    throw new Error('Deze migratie mag alleen als DRY_RUN=true draaien. Geen live verplaatsingen toegestaan.');
  }
}

function safeFolderName_(folder, fallback) {
  try {
    return folder ? folder.getName() : fallback;
  } catch (error) {
    return fallback;
  }
}

function safeFolderId_(folder, fallback) {
  try {
    return folder ? folder.getId() : fallback;
  } catch (error) {
    return fallback;
  }
}

function getFolderUrl_(folder) {
  return 'https://drive.google.com/drive/folders/' + safeFolderId_(folder, '');
}

function formatTimestamp_(date) {
  return Utilities.formatDate(date, MIGRATION_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
}

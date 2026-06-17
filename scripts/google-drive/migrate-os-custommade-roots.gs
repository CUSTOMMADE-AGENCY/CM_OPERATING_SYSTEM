/**
 * Sprint 2B OS_CUSTOMMADE root migration to locked CM_OS Drive structure.
 *
 * ROOT_FOLDER_ID is the current OS_CUSTOMMADE Drive-root:
 * 0B2aV9TqyUPDzd0F1WEd1RkVxNFk
 *
 * IMPORTANT:
 * - DRY_RUN defaults to true. In dry-run mode this script only logs the
 *   intended actions and writes a migration log Sheet.
 * - Set DRY_RUN to false only after reviewing the migration log.
 * - The script never deletes content and never creates anything in FIERCE.
 * - Governance remains GitHub-led by default; legacy Drive governance is moved
 *   to 99_ARCHIVE/GOVERNANCE_LEGACY when execution is enabled.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const DRY_RUN = true;
const MIGRATION_LOG_SPREADSHEET_ID = '';
const MIGRATION_LOG_SHEET_NAME = 'Sprint 2B Migration Log';
const MIGRATION_SUMMARY_SHEET_NAME = 'Sprint 2B Summary';
const MIGRATION_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const GOVERNANCE_IN_GITHUB_IS_LEADING = true;

const TARGET_ROOTS = [
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

const KNOWN_CURRENT_ROOTS = [
  '00_GOVERNANCE',
  '00_INBOX',
  '01_ARTIST_MANAGEMENT',
  '02_MASTER_BOUTIQUE',
  '03_EXECUTIVE',
  '04_BUSINESS',
  '05_MARKETING',
  '06_PROJECTS',
  '07_ ARCHIVE',
];

const LOG_HEADERS = [
  'Timestamp',
  'Oude locatie',
  'Nieuwe locatie',
  'Actie',
  'Status',
  'Foutmelding',
  'Handmatige review ja/nee',
  'Folder ID',
  'DRY_RUN',
];

const CLASSIFICATION_RULES = {
  FINANCE: [
    'finance', 'financ', 'factuur', 'facturen', 'invoice', 'invoices', 'boekhouding',
    'accounting', 'tax', 'btw', 'belasting', 'budget', 'cashflow', 'royalty', 'royalties',
    'payments', 'betaling', 'betalingen', 'bank', 'payroll', 'salaris',
  ],
  LEGAL: [
    'legal', 'juridisch', 'contract', 'contracts', 'agreement', 'agreements', 'overeenkomst',
    'rechten', 'rights', 'ip', 'nda', 'apa', 'loi', 'license', 'licence', 'licensing',
    'compliance', 'privacy', 'terms',
  ],
  OPERATIONS: [
    'operations', 'operationeel', 'ops', 'admin', 'hr', 'people', 'team', 'process',
    'processen', 'sop', 'system', 'systems', 'tooling', 'planning', 'templates',
  ],
  ADMIN: ['executive', 'directie', 'board', 'management', 'strategy', 'strategie', 'inbox'],
  MARKETING: [
    'marketing', 'brand', 'branding', 'merk', 'network', 'netwerk', 'pr', 'press', 'promo',
    'campaign', 'campagne', 'positioning', 'partnership',
  ],
  CONTENT: [
    'content', 'asset', 'assets', 'social', 'socialmedia', 'social media', 'instagram',
    'tiktok', 'youtube', 'video', 'photo', 'photos', 'beeld', 'copy', 'creative', 'design',
  ],
  DEALS: [
    'deal', 'deals', 'transaction', 'transactions', 'transactie', 'transacties', 'buyer',
    'seller', 'catalog', 'catalogus', 'acquisition', 'sale', 'verkoop', 'koop', 'due diligence',
  ],
  ARCHIVE: ['archive', 'archief', 'old', 'oud', 'legacy', 'closed', 'afgerond'],
};

function runSprint2BDriveMigration() {
  const startedAt = formatTimestamp_(new Date());
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = safeFolderName_(root, 'OS_CUSTOMMADE');
  const spreadsheet = getOrCreateMigrationSpreadsheet_();
  const logSheet = resetSheet_(spreadsheet, MIGRATION_LOG_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, MIGRATION_SUMMARY_SHEET_NAME);
  const rows = [];
  const targetFolders = {};

  initializeLogSheet_(logSheet);
  logInfo_('Sprint 2B Drive migration started. DRY_RUN=' + DRY_RUN);

  TARGET_ROOTS.forEach(function(targetRootName) {
    if (targetRootName !== '01_MASTER_BOUTIQUE' && targetRootName !== '02_ARTIST_MANAGEMENT') {
      targetFolders[targetRootName] = getOrCreateChildFolder_(root, targetRootName, rows, rootName, targetRootName);
    }
  });

  migrateDirectChild_(root, rows, rootName, '00_INBOX', targetFolders['00_ADMIN'], 'INBOX', 'verplaatsen/hernoemen', false);
  migrateGovernance_(root, rows, rootName, targetFolders);
  swapArtistAndMasterRoots_(root, rows, rootName);
  targetFolders['01_MASTER_BOUTIQUE'] = getOrCreateChildFolder_(root, '01_MASTER_BOUTIQUE', rows, rootName, '01_MASTER_BOUTIQUE');
  targetFolders['02_ARTIST_MANAGEMENT'] = getOrCreateChildFolder_(root, '02_ARTIST_MANAGEMENT', rows, rootName, '02_ARTIST_MANAGEMENT');
  splitRootChildren_(root, rows, rootName, '04_BUSINESS', targetFolders, classifyBusinessFolder_);
  splitRootChildren_(root, rows, rootName, '05_MARKETING', targetFolders, classifyMarketingFolder_);
  splitRootChildren_(root, rows, rootName, '06_PROJECTS', targetFolders, classifyProjectFolder_);
  migrateDirectChild_(root, rows, rootName, '07_ ARCHIVE', targetFolders['99_ARCHIVE'], 'LEGACY_ARCHIVE', 'verplaatsen/hernoemen', false);
  reviewUnexpectedRoots_(root, rows, rootName);

  appendRows_(logSheet, rows);
  writeSummary_(summarySheet, rows, startedAt, spreadsheet.getUrl());

  logInfo_('Sprint 2B Drive migration log: ' + spreadsheet.getUrl());
  logInfo_('GEREED VOOR DRY RUN');
  return spreadsheet.getUrl();
}


function swapArtistAndMasterRoots_(root, rows, rootName) {
  const artistRoot = findChildFolder_(root, '01_ARTIST_MANAGEMENT');
  const masterRoot = findChildFolder_(root, '02_MASTER_BOUTIQUE');
  const finalArtist = findChildFolder_(root, '02_ARTIST_MANAGEMENT');
  const finalMaster = findChildFolder_(root, '01_MASTER_BOUTIQUE');
  const tempArtistName = '__MIGRATION_TEMP_01_ARTIST_MANAGEMENT__';

  if (finalArtist && finalMaster) {
    addLogRow_(rows, rootName + '/01_ARTIST_MANAGEMENT', rootName + '/02_ARTIST_MANAGEMENT', 'artist root controleren', 'EXISTS', '', 'nee', safeFolderId_(finalArtist, ''), false);
    addLogRow_(rows, rootName + '/02_MASTER_BOUTIQUE', rootName + '/01_MASTER_BOUTIQUE', 'master boutique root controleren', 'EXISTS', '', 'nee', safeFolderId_(finalMaster, ''), false);
    return;
  }

  if (artistRoot && masterRoot) {
    if (!DRY_RUN) {
      artistRoot.setName(tempArtistName);
      masterRoot.setName('01_MASTER_BOUTIQUE');
      artistRoot.setName('02_ARTIST_MANAGEMENT');
    }
    addLogRow_(rows, rootName + '/01_ARTIST_MANAGEMENT', rootName + '/02_ARTIST_MANAGEMENT', 'artist management root swap-hernoemen', DRY_RUN ? 'DRY_RUN_PLANNED' : 'DONE', '', 'nee', safeFolderId_(artistRoot, ''), true);
    addLogRow_(rows, rootName + '/02_MASTER_BOUTIQUE', rootName + '/01_MASTER_BOUTIQUE', 'master boutique root swap-hernoemen', DRY_RUN ? 'DRY_RUN_PLANNED' : 'DONE', '', 'nee', safeFolderId_(masterRoot, ''), true);
    return;
  }

  migrateDirectChild_(root, rows, rootName, '01_ARTIST_MANAGEMENT', root, '02_ARTIST_MANAGEMENT', 'hernoemen/verplaatsen', false);
  migrateDirectChild_(root, rows, rootName, '02_MASTER_BOUTIQUE', root, '01_MASTER_BOUTIQUE', 'hernoemen/verplaatsen', false);
}

function migrateGovernance_(root, rows, rootName, targetFolders) {
  if (GOVERNANCE_IN_GITHUB_IS_LEADING) {
    migrateDirectChild_(root, rows, rootName, '00_GOVERNANCE', targetFolders['99_ARCHIVE'], 'GOVERNANCE_LEGACY', 'archiveren governance legacy', false);
    return;
  }

  migrateDirectChild_(root, rows, rootName, '00_GOVERNANCE', targetFolders['00_ADMIN'], 'GOVERNANCE', 'verplaatsen/hernoemen', false);
}

function splitRootChildren_(root, rows, rootName, sourceRootName, targetFolders, classifier) {
  const sourceRoot = findChildFolder_(root, sourceRootName);
  if (!sourceRoot) {
    addLogRow_(rows, rootName + '/' + sourceRootName, rootName + '/' + sourceRootName, 'splitsen', 'SKIPPED_NOT_FOUND', '', 'nee', '', false);
    return;
  }

  const children = sourceRoot.getFolders();
  let childCount = 0;
  while (children.hasNext()) {
    childCount += 1;
    const child = children.next();
    const decision = classifier(safeFolderName_(child, 'UNKNOWN'));
    const targetFolder = targetFolders[decision.targetRoot];
    const manualReview = decision.manualReview ? 'ja' : 'nee';
    const oldPath = rootName + '/' + sourceRootName + '/' + safeFolderName_(child, 'UNKNOWN');
    const newPath = rootName + '/' + decision.targetRoot + '/' + safeFolderName_(child, 'UNKNOWN');

    moveFolder_(child, sourceRoot, targetFolder, safeFolderName_(child, 'UNKNOWN'), rows, oldPath, newPath, decision.action, manualReview);
  }

  if (childCount === 0) {
    addLogRow_(rows, rootName + '/' + sourceRootName, rootName + '/99_ARCHIVE/' + sourceRootName + '_EMPTY_LEGACY', 'lege bronroot archiveren', 'PLANNED_EMPTY_ROOT_REVIEW', '', 'ja', safeFolderId_(sourceRoot, ''), false);
  }
}

function classifyBusinessFolder_(folderName) {
  if (matchesAny_(folderName, CLASSIFICATION_RULES.FINANCE)) return { targetRoot: '06_FINANCE', action: 'business finance verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.LEGAL)) return { targetRoot: '07_LEGAL', action: 'business legal verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.OPERATIONS)) return { targetRoot: '05_OPERATIONS', action: 'business operations verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.ADMIN)) return { targetRoot: '00_ADMIN', action: 'business admin verplaatsen', manualReview: false };
  return { targetRoot: '00_ADMIN', action: 'business onbekend naar handmatige review', manualReview: true };
}

function classifyMarketingFolder_(folderName) {
  if (matchesAny_(folderName, CLASSIFICATION_RULES.CONTENT)) return { targetRoot: '09_CONTENT', action: 'marketing content/assets verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.MARKETING)) return { targetRoot: '08_MARKETING', action: 'marketing/brand/network verplaatsen', manualReview: false };
  return { targetRoot: '08_MARKETING', action: 'marketing onbekend naar handmatige review', manualReview: true };
}

function classifyProjectFolder_(folderName) {
  if (matchesAny_(folderName, CLASSIFICATION_RULES.DEALS)) return { targetRoot: '04_DEALS', action: 'project deal/transactie verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.OPERATIONS)) return { targetRoot: '05_OPERATIONS', action: 'actief operations-project verplaatsen', manualReview: false };
  if (matchesAny_(folderName, CLASSIFICATION_RULES.ARCHIVE)) return { targetRoot: '99_ARCHIVE', action: 'oud project archiveren', manualReview: false };
  return { targetRoot: '99_ARCHIVE', action: 'project onduidelijk archiveren voor review', manualReview: true };
}

function reviewUnexpectedRoots_(root, rows, rootName) {
  const folders = root.getFolders();
  while (folders.hasNext()) {
    const folder = folders.next();
    const folderName = safeFolderName_(folder, 'UNKNOWN');
    if (TARGET_ROOTS.indexOf(folderName) === -1 && KNOWN_CURRENT_ROOTS.indexOf(folderName) === -1) {
      addLogRow_(rows, rootName + '/' + folderName, rootName + '/' + folderName, 'onverwachte root handmatige review', 'REVIEW_ONLY', '', 'ja', safeFolderId_(folder, ''), false);
    }
  }
}

function migrateDirectChild_(root, rows, rootName, sourceName, targetParent, targetName, action, manualReview) {
  const source = findChildFolder_(root, sourceName);
  const targetPath = rootName + '/' + safeFolderName_(targetParent, 'UNKNOWN') + '/' + targetName;
  if (!source) {
    addLogRow_(rows, rootName + '/' + sourceName, targetPath, action, 'SKIPPED_NOT_FOUND', '', manualReview ? 'ja' : 'nee', '', false);
    return null;
  }

  return moveFolder_(source, root, targetParent, targetName, rows, rootName + '/' + sourceName, targetPath, action, manualReview ? 'ja' : 'nee');
}

function moveFolder_(folder, oldParent, newParent, targetName, rows, oldPath, newPath, action, manualReview) {
  try {
    const existingTarget = findChildFolder_(newParent, targetName);
    if (existingTarget && safeFolderId_(existingTarget, '') !== safeFolderId_(folder, '')) {
      addLogRow_(rows, oldPath, newPath, action, 'SKIPPED_TARGET_EXISTS', 'Doelmap bestaat al; handmatige samenvoeging vereist.', manualReview === 'ja' ? 'ja' : 'ja', safeFolderId_(folder, ''), false);
      return existingTarget;
    }

    if (!DRY_RUN) {
      if (safeFolderName_(folder, '') !== targetName) {
        folder.setName(targetName);
      }
      newParent.addFolder(folder);
      oldParent.removeFolder(folder);
    }

    addLogRow_(rows, oldPath, newPath, action, DRY_RUN ? 'DRY_RUN_PLANNED' : 'DONE', '', manualReview, safeFolderId_(folder, ''), true);
    return folder;
  } catch (error) {
    addLogRow_(rows, oldPath, newPath, action, 'ERROR', error.message, 'ja', safeFolderId_(folder, ''), false);
    return null;
  }
}

function getOrCreateChildFolder_(parent, folderName, rows, rootName, relativePath) {
  const existing = findChildFolder_(parent, folderName);
  const targetPath = rootName + '/' + relativePath;
  if (existing) {
    addLogRow_(rows, targetPath, targetPath, 'doelroot controleren', 'EXISTS', '', 'nee', safeFolderId_(existing, ''), false);
    return existing;
  }

  if (DRY_RUN) {
    addLogRow_(rows, targetPath, targetPath, 'ontbrekende doelroot aanmaken', 'DRY_RUN_PLANNED', '', 'nee', '', false);
    return createVirtualFolder_(folderName, parent);
  }

  const created = parent.createFolder(folderName);
  addLogRow_(rows, targetPath, targetPath, 'ontbrekende doelroot aanmaken', 'DONE', '', 'nee', safeFolderId_(created, ''), true);
  return created;
}

function findChildFolder_(parent, folderName) {
  const folders = parent.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : null;
}

function createVirtualFolder_(folderName, parent) {
  return {
    getName: function() { return folderName; },
    getId: function() { return 'DRY_RUN_VIRTUAL_' + folderName; },
    getFoldersByName: function() { return { hasNext: function() { return false; }, next: function() { return null; } }; },
    addFolder: function() {},
    removeFolder: function() {},
    _parent: parent,
  };
}

function matchesAny_(folderName, keywords) {
  const normalized = normalize_(folderName);
  return keywords.some(function(keyword) {
    return normalized.indexOf(normalize_(keyword)) !== -1;
  });
}

function normalize_(value) {
  return String(value || '').toLowerCase().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function getOrCreateMigrationSpreadsheet_() {
  if (MIGRATION_LOG_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(MIGRATION_LOG_SPREADSHEET_ID);
  }
  return SpreadsheetApp.create('CM_OS Sprint 2B Drive Migration Log ' + formatTimestamp_(new Date()));
}

function resetSheet_(spreadsheet, sheetName) {
  const existing = spreadsheet.getSheetByName(sheetName);
  if (existing) spreadsheet.deleteSheet(existing);
  return spreadsheet.insertSheet(sheetName);
}

function initializeLogSheet_(sheet) {
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setValues([LOG_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setFontWeight('bold');
}

function appendRows_(sheet, rows) {
  if (!rows.length) return;
  sheet.getRange(2, 1, rows.length, LOG_HEADERS.length).setValues(rows);
  sheet.autoResizeColumns(1, LOG_HEADERS.length);
}

function addLogRow_(rows, oldLocation, newLocation, action, status, errorMessage, manualReview, folderId, mutatesDrive) {
  rows.push([
    formatTimestamp_(new Date()),
    oldLocation,
    newLocation,
    action,
    status,
    errorMessage || '',
    manualReview,
    folderId || '',
    DRY_RUN ? 'true' : 'false',
  ]);
  logInfo_((DRY_RUN && mutatesDrive ? '[DRY_RUN] ' : '') + status + ' | ' + action + ' | ' + oldLocation + ' -> ' + newLocation);
}

function writeSummary_(sheet, rows, startedAt, logUrl) {
  const counts = rows.reduce(function(accumulator, row) {
    const status = row[4];
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {});

  const summaryRows = [
    ['Started at', startedAt],
    ['Completed at', formatTimestamp_(new Date())],
    ['DRY_RUN', DRY_RUN ? 'true' : 'false'],
    ['Root folder ID', ROOT_FOLDER_ID],
    ['Governance in GitHub leading', GOVERNANCE_IN_GITHUB_IS_LEADING ? 'true' : 'false'],
    ['Migration log URL', logUrl],
    ['Final message', 'GEREED VOOR DRY RUN'],
    ['', ''],
    ['Status', 'Aantal'],
  ];

  Object.keys(counts).sort().forEach(function(status) {
    summaryRows.push([status, counts[status]]);
  });

  sheet.getRange(1, 1, summaryRows.length, 2).setValues(summaryRows);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.autoResizeColumns(1, 2);
}

function safeFolderName_(folder, fallback) {
  try {
    return folder.getName();
  } catch (error) {
    return fallback;
  }
}

function safeFolderId_(folder, fallback) {
  try {
    return folder.getId();
  } catch (error) {
    return fallback;
  }
}

function formatTimestamp_(date) {
  return Utilities.formatDate(date, MIGRATION_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
}

function logInfo_(message) {
  Logger.log(message);
}

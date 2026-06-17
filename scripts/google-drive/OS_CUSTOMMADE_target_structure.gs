/**
 * OS_CUSTOMMADE target structure creator for the CM_OS safe-roots migration.
 *
 * Purpose:
 * - Create only the missing target folders under the existing OS_CUSTOMMADE
 *   Drive root so the safe-roots migration can run afterwards.
 *
 * Safety guarantees:
 * - Deletes nothing.
 * - Moves nothing.
 * - Renames nothing.
 * - Archives nothing.
 * - Creates only missing folders.
 * - Idempotent: existing folders are skipped and logged as EXISTS.
 * - Always creates a Google Sheet log for createOsCustommadeTargetStructure().
 *
 * Governance rules:
 * - GitHub remains the source of truth for governance, SOPs and workflows.
 * - Drive is only operational storage for live dossiers and deliverables.
 * - Moneybird remains the financial source of truth; 06_FINANCE is only a
 *   reference/work layer.
 * - No FIERCE content is created or migrated by this script.
 * - No signed contracts are moved to GitHub by this script.
 * - Data Room, LOI, APA, Closing and Success Fee folders are not created by
 *   default for deals; they can be added later only during due diligence.
 *
 * Usage:
 * 1. Run testOsCustommadeTargetStructure() first to verify ROOT_FOLDER_ID.
 * 2. Run createOsCustommadeTargetStructure() to create missing target folders.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const TARGET_STRUCTURE_LOG_TITLE = 'CM_OS Target Structure Creation Log ';
const TARGET_STRUCTURE_LOG_SHEET_NAME = 'Target Structure Log';
const TARGET_STRUCTURE_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';

const TARGET_STRUCTURE_HEADERS = [
  'timestamp',
  'parent path',
  'folder name',
  'full path',
  'action',
  'folder ID',
  'error message'
];

const OS_CUSTOMMADE_TARGET_STRUCTURE = {
  '00_INBOX': [
    '_SCHOONMAAK_TE_SORTEREN',
    'TO-SORT'
  ],
  '00_ADMIN': [
    'GOVERNANCE_REFERENCE',
    'HR',
    'CURSUS_MASTERCLASSES'
  ],
  '01_MASTER_BOUTIQUE': [
    '00_START_HIER',
    '01_RECHTEN_REGISTER',
    '02_CONTRACTEN_BEWIJS',
    '03_WAARDERING_VERKOOPPAKKET',
    '04_OUTREACH_CLICKUP',
    '99_ARCHIEF'
  ],
  '02_ARTIST_MANAGEMENT': [
    '00_START_HIER',
    '01_ROSTER',
    '02_BRANDBOOKS',
    '03_RELEASE_STRATEGY',
    '04_BUSINESS_AUDIT',
    '05_ROADMAPS',
    '06_MANAGEMENT',
    '07_RIGHTS_CHECKS',
    '99_ARCHIEF'
  ],
  '03_CLIENTS': [
    '00_START_HIER',
    '99_ARCHIEF'
  ],
  '04_DEALS': [
    '00_START_HIER',
    '01_RECHTEN_REGISTER',
    '02_CONTRACTEN_BEWIJS',
    '03_WAARDERING_VERKOOPPAKKET',
    '04_OUTREACH_CLICKUP',
    '99_ARCHIEF'
  ],
  '05_OPERATIONS': [
    '00_START_HIER',
    'HR',
    'TRAINING',
    'TOOLS',
    'PROCESSES',
    'TEMPLATES_REFERENCE',
    '99_ARCHIEF'
  ],
  '06_FINANCE': [
    '00_START_HIER',
    'MONEYBIRD_REFERENCE',
    'BELASTINGDIENST',
    'BANK',
    'STATEMENTS',
    'ADMIN_EXPORTS',
    '99_ARCHIEF'
  ],
  '07_LEGAL': [
    '00_START_HIER',
    'CONTRACTEN',
    'NDA',
    'PARTNERS',
    'FREELANCERS',
    'ARTIESTEN',
    'KLANTEN',
    'LEVERANCIERS',
    'RIGHTS',
    'APPROVALS',
    '99_ARCHIEF'
  ],
  '08_MARKETING': [
    '00_START_HIER',
    'BRAND',
    'NETWORK',
    'CAMPAIGNS',
    'PARTNERSHIPS',
    '99_ARCHIEF'
  ],
  '09_CONTENT': [
    '00_START_HIER',
    'ASSETS',
    'SOCIALMEDIA',
    'FORMATS',
    'CONTENT_CALENDAR',
    '99_ARCHIEF'
  ],
  '99_ARCHIVE': [
    '00_START_HIER',
    'LEGACY_ROOTS',
    'REVIEW_HOLD',
    '99_ARCHIEF'
  ]
};

function testOsCustommadeTargetStructure() {
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = root.getName();
  let topLevelFolderCount = 0;
  const folders = root.getFolders();

  while (folders.hasNext()) {
    folders.next();
    topLevelFolderCount += 1;
  }

  const message = 'ROOT_FOLDER_ID bereikbaar: ' + rootName + ' (' + ROOT_FOLDER_ID + '). Bestaande top-level mappen: ' + topLevelFolderCount + '. Er is niets aangemaakt.';
  Logger.log(message);
  return message;
}

function createOsCustommadeTargetStructure() {
  const spreadsheet = createTargetStructureLogSpreadsheet_();
  const logSheet = initializeTargetStructureLogSheet_(spreadsheet);
  const rows = [];
  let root;
  let rootPath = 'OS_CUSTOMMADE';

  try {
    root = DriveApp.getFolderById(ROOT_FOLDER_ID);
    rootPath = root.getName();
    Object.keys(OS_CUSTOMMADE_TARGET_STRUCTURE).forEach(function(topLevelFolderName) {
      const topLevelFolder = getOrCreateTargetFolder_(root, rootPath, topLevelFolderName, rows);
      const topLevelPath = rootPath + '/' + topLevelFolderName;

      OS_CUSTOMMADE_TARGET_STRUCTURE[topLevelFolderName].forEach(function(childFolderName) {
        getOrCreateTargetFolder_(topLevelFolder, topLevelPath, childFolderName, rows);
      });
    });
  } catch (error) {
    addTargetStructureLogRow_(rows, rootPath, 'ROOT_FOLDER_ID', rootPath, 'ERROR', ROOT_FOLDER_ID, error.message);
  }

  appendTargetStructureRows_(logSheet, rows);
  Logger.log('GEREED VOOR TARGET STRUCTURE DRY CHECK');
  Logger.log('Logsheet: ' + spreadsheet.getUrl());
  return 'GEREED VOOR TARGET STRUCTURE DRY CHECK — logsheet: ' + spreadsheet.getUrl();
}

function getOrCreateTargetFolder_(parentFolder, parentPath, folderName, rows) {
  const fullPath = parentPath + '/' + folderName;

  try {
    const existingFolders = parentFolder.getFoldersByName(folderName);
    if (existingFolders.hasNext()) {
      const existingFolder = existingFolders.next();
      addTargetStructureLogRow_(rows, parentPath, folderName, fullPath, 'EXISTS', existingFolder.getId(), '');
      Logger.log('EXISTS: ' + fullPath + ' (' + existingFolder.getId() + ')');
      return existingFolder;
    }

    const createdFolder = parentFolder.createFolder(folderName);
    addTargetStructureLogRow_(rows, parentPath, folderName, fullPath, 'CREATED', createdFolder.getId(), '');
    Logger.log('CREATED: ' + fullPath + ' (' + createdFolder.getId() + ')');
    return createdFolder;
  } catch (error) {
    addTargetStructureLogRow_(rows, parentPath, folderName, fullPath, 'ERROR', '', error.message);
    Logger.log('ERROR: ' + fullPath + ' — ' + error.message);
    throw error;
  }
}

function createTargetStructureLogSpreadsheet_() {
  const timestamp = Utilities.formatDate(new Date(), TARGET_STRUCTURE_TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
  return SpreadsheetApp.create(TARGET_STRUCTURE_LOG_TITLE + timestamp);
}

function initializeTargetStructureLogSheet_(spreadsheet) {
  const sheet = spreadsheet.getSheets()[0];
  sheet.setName(TARGET_STRUCTURE_LOG_SHEET_NAME);
  sheet.clear();
  sheet.appendRow(TARGET_STRUCTURE_HEADERS);
  sheet.setFrozenRows(1);
  return sheet;
}

function addTargetStructureLogRow_(rows, parentPath, folderName, fullPath, action, folderId, errorMessage) {
  rows.push([
    Utilities.formatDate(new Date(), TARGET_STRUCTURE_TIMEZONE, 'yyyy-MM-dd HH:mm:ss'),
    parentPath,
    folderName,
    fullPath,
    action,
    folderId,
    errorMessage || ''
  ]);
}

function appendTargetStructureRows_(sheet, rows) {
  if (rows.length === 0) return;
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, TARGET_STRUCTURE_HEADERS.length).setValues(rows);
  sheet.autoResizeColumns(1, TARGET_STRUCTURE_HEADERS.length);
}

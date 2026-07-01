/**
 * OS_CUSTOMMADE target structure creator for the CM_OS safe-roots migration.
 * Governance status: SAFE ROOT REPAIR only; not the primary approved Drive build script.
 *
 * ── CHANGELOG ──────────────────────────────────────────────────────────────
 * - AS-BUILT align (22 jun 2026): verboden roots verwijderd;
 *         goedgekeurde structuur gebruikt uitsluitend de 11 AS-BUILT roots.
 * - 2G safety: bij DriveApp/getOrCreate errors eindigt het script met NO-GO en
 *         logt/returnt nooit ten onrechte GEREED VOOR TARGET STRUCTURE DRY CHECK.
 * ───────────────────────────────────────────────────────────────────────────
 *
 * Safety guarantees:
 * - Deletes nothing. Moves nothing. Renames nothing. Archives nothing.
 * - Creates only missing folders.
 * - Idempotent: existing folders are skipped and logged as EXISTS.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const TARGET_STRUCTURE_LOG_TITLE = 'CM_OS Target Structure Creation Log ';
const TARGET_STRUCTURE_LOG_SHEET_NAME = 'Target Structure Log';
const TARGET_STRUCTURE_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const TARGET_STRUCTURE_SUCCESS_MESSAGE = 'GEREED VOOR TARGET STRUCTURE DRY CHECK';
const TARGET_STRUCTURE_ERROR_MESSAGE = 'NO-GO TARGET STRUCTURE ERROR';

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
  '00_ADMIN': [
    '03_TEMPLATES',
    'GOVERNANCE_REFERENCE',
    'HR',
    'CURSUS_MASTERCLASSES'
  ],
  '01_MASTER_BOUTIQUE': [],
  '02_ARTIST_MANAGEMENT': [],
  '03_CLIENTS': [],
  '04_DEALS': [],
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
  try {
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
  } catch (error) {
    Logger.log('ERROR: DriveApp.getFolderById failed for ROOT_FOLDER_ID ' + ROOT_FOLDER_ID + ' — ' + getErrorMessage_(error));
    Logger.log(TARGET_STRUCTURE_ERROR_MESSAGE);
    throw new Error(TARGET_STRUCTURE_ERROR_MESSAGE + ': ' + getErrorMessage_(error));
  }
}

function createOsCustommadeTargetStructure() {
  const spreadsheet = createTargetStructureLogSpreadsheet_();
  const logSheet = initializeTargetStructureLogSheet_(spreadsheet);
  const rows = [];
  let rootPath = 'OS_CUSTOMMADE';

  try {
    const root = getRootFolderOrNoGo_();
    rootPath = root.getName();

    Object.keys(OS_CUSTOMMADE_TARGET_STRUCTURE).forEach(function(topLevelFolderName) {
      const topLevelFolder = getOrCreateTargetFolder_(root, rootPath, topLevelFolderName, rows);
      const topLevelPath = rootPath + '/' + topLevelFolderName;

      OS_CUSTOMMADE_TARGET_STRUCTURE[topLevelFolderName].forEach(function(childFolderName) {
        getOrCreateTargetFolder_(topLevelFolder, topLevelPath, childFolderName, rows);
      });
    });

    appendTargetStructureRows_(logSheet, rows);
    Logger.log(TARGET_STRUCTURE_SUCCESS_MESSAGE);
    Logger.log('Logsheet: ' + spreadsheet.getUrl());
    return TARGET_STRUCTURE_SUCCESS_MESSAGE + ' — logsheet: ' + spreadsheet.getUrl();
  } catch (error) {
    addTargetStructureLogRow_(rows, rootPath, 'NO-GO', rootPath, 'ERROR', ROOT_FOLDER_ID, getErrorMessage_(error));
    appendTargetStructureRows_(logSheet, rows);
    Logger.log('ERROR: target structure creation failed — ' + getErrorMessage_(error));
    Logger.log(TARGET_STRUCTURE_ERROR_MESSAGE);
    throw new Error(TARGET_STRUCTURE_ERROR_MESSAGE + ': ' + getErrorMessage_(error));
  }
}

function getRootFolderOrNoGo_() {
  try {
    return DriveApp.getFolderById(ROOT_FOLDER_ID);
  } catch (error) {
    Logger.log('ERROR: DriveApp.getFolderById failed for ROOT_FOLDER_ID ' + ROOT_FOLDER_ID + ' — ' + getErrorMessage_(error));
    throw error;
  }
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
    addTargetStructureLogRow_(rows, parentPath, folderName, fullPath, 'ERROR', '', getErrorMessage_(error));
    Logger.log('ERROR: getOrCreateTargetFolder_ failed for ' + fullPath + ' — ' + getErrorMessage_(error));
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

function getErrorMessage_(error) {
  if (!error) return 'Unknown error';
  return error.message || String(error);
}

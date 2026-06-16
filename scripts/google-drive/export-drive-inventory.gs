/**
 * Exports the OS_CUSTOMMADE Google Drive folder inventory to Google Sheets.
 *
 * Sprint 2 purpose:
 * - Produce one spreadsheet row per folder under OS_CUSTOMMADE.
 * - Support migration decisions without moving, renaming, deleting or sharing files.
 * - Classify each folder against the approved governance roots.
 *
 * Usage:
 * 1. Open script.google.com in the Google account that can read OS_CUSTOMMADE.
 * 2. Paste this file into a Google Apps Script project.
 * 3. Set OS_CUSTOMMADE_FOLDER_ID when you know the folder ID, or leave it empty
 *    to find the first folder named OS_CUSTOMMADE that the account can access.
 * 4. Optionally set OUTPUT_SPREADSHEET_ID to append/update an existing Sheet.
 * 5. Run exportDriveInventory().
 */
const OS_CUSTOMMADE_FOLDER_ID = '';
const OUTPUT_SPREADSHEET_ID = '';
const OS_CUSTOMMADE_ROOT_NAME = 'OS_CUSTOMMADE';
const INVENTORY_SHEET_NAME = 'Drive Inventory';
const SUMMARY_SHEET_NAME = 'Sprint 2 Summary';
const EXPORT_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';

const MIGRATION_ACTIONS = [
  'behouden',
  'verplaatsen',
  'samenvoegen',
  'archiveren',
  'handmatige review',
];

const GOVERNANCE_ROOTS = {
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

const ARTIST_NAMES = [
  'CALSEY',
  'DANI DEAUX',
  'DODO',
  'GINIIO',
  'GOUDTJE_GET_PAID',
  'JAIRZINHO',
  'KALIBWOY',
  'LATIFAH',
  'NAMIKOO',
];

const INVENTORY_HEADERS = [
  'Folder ID',
  'Folder naam',
  'Volledig pad',
  'Parent folder',
  'Eigenaar',
  'Aantal bestanden',
  'Aantal submappen',
  'Laatst gewijzigd',
  'Huidige root',
  'Governance root',
  'Migratieactie',
  'Review status',
  'Opmerking',
  'Folder URL',
  'Parent folder ID',
  'Export timestamp',
];

function exportDriveInventory() {
  const rootFolder = getOsCustommadeRootFolder_();
  const spreadsheet = getOrCreateOutputSpreadsheet_();
  const inventorySheet = resetSheet_(spreadsheet, INVENTORY_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, SUMMARY_SHEET_NAME);
  const exportTimestamp = Utilities.formatDate(new Date(), EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");

  const rows = [];
  collectFolderRows_(rootFolder, OS_CUSTOMMADE_ROOT_NAME, rows, exportTimestamp);
  writeInventory_(inventorySheet, rows);
  writeSummary_(summarySheet, rootFolder, rows, exportTimestamp);

  Logger.log('Drive inventory export complete: ' + spreadsheet.getUrl());
  Logger.log('Folders exported: ' + rows.length);
  return spreadsheet.getUrl();
}

function collectFolderRows_(folder, fullPath, rows, exportTimestamp) {
  const parentInfo = getPrimaryParentInfo_(folder);
  const currentRoot = getCurrentRootFromPath_(fullPath);
  const governanceRoot = getGovernanceRootFromPath_(fullPath);
  const counts = countDirectChildren_(folder);
  const migrationDecision = determineMigrationAction_(folder.getName(), fullPath, currentRoot, governanceRoot);

  rows.push([
    folder.getId(),
    folder.getName(),
    fullPath,
    parentInfo.name,
    getOwnerEmail_(folder),
    counts.files,
    counts.folders,
    formatDate_(folder.getLastUpdated()),
    currentRoot,
    governanceRoot,
    migrationDecision.action,
    migrationDecision.status,
    migrationDecision.note,
    folder.getUrl(),
    parentInfo.id,
    exportTimestamp,
  ]);

  const childFolders = folder.getFolders();
  while (childFolders.hasNext()) {
    const childFolder = childFolders.next();
    collectFolderRows_(childFolder, fullPath + '/' + childFolder.getName(), rows, exportTimestamp);
  }
}

function determineMigrationAction_(folderName, fullPath, currentRoot, governanceRoot) {
  if (fullPath === OS_CUSTOMMADE_ROOT_NAME) {
    return {
      action: 'behouden',
      status: 'GOEDGEKEURD VOOR REVIEW',
      note: 'OS_CUSTOMMADE root is de inventarisbasis en wordt niet gemigreerd.',
    };
  }

  if (!governanceRoot) {
    return {
      action: 'handmatige review',
      status: 'HOLD',
      note: 'Map valt niet onder een vastgelegde governance root.',
    };
  }

  if (currentRoot === folderName) {
    return {
      action: 'behouden',
      status: 'GOEDGEKEURD VOOR REVIEW',
      note: 'Root of governance top-level map staat al op de doelstructuur.',
    };
  }

  if (isArtistFolder_(folderName) && governanceRoot !== GOVERNANCE_ROOTS['02_ARTIST_MANAGEMENT']) {
    return {
      action: 'verplaatsen',
      status: 'OWNER REVIEW',
      note: 'Artiestmap lijkt buiten 02_ARTIST_MANAGEMENT te staan.',
    };
  }

  if (hasArchiveSignal_(folderName, fullPath) && governanceRoot !== GOVERNANCE_ROOTS['99_ARCHIVE']) {
    return {
      action: 'archiveren',
      status: 'OWNER REVIEW',
      note: 'Naam of pad bevat archive/archief/old/obsolete-signaal.',
    };
  }

  if (hasDuplicateSignal_(folderName)) {
    return {
      action: 'samenvoegen',
      status: 'OWNER REVIEW',
      note: 'Naam bevat duplicaat/kopie-signaal; canonical map bevestigen.',
    };
  }

  return {
    action: 'behouden',
    status: 'TE REVIEWEN',
    note: 'Geen automatische conflictindicator gevonden; owner/link-review blijft verplicht vóór migratie.',
  };
}

function getOsCustommadeRootFolder_() {
  if (OS_CUSTOMMADE_FOLDER_ID) {
    return DriveApp.getFolderById(OS_CUSTOMMADE_FOLDER_ID);
  }

  const matches = DriveApp.getFoldersByName(OS_CUSTOMMADE_ROOT_NAME);
  if (!matches.hasNext()) {
    throw new Error('No accessible folder named ' + OS_CUSTOMMADE_ROOT_NAME + ' found. Set OS_CUSTOMMADE_FOLDER_ID.');
  }

  return matches.next();
}

function getOrCreateOutputSpreadsheet_() {
  if (OUTPUT_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(OUTPUT_SPREADSHEET_ID);
  }

  const timestamp = Utilities.formatDate(new Date(), EXPORT_TIMEZONE, 'yyyyMMdd-HHmmss');
  return SpreadsheetApp.create('OS_CUSTOMMADE Drive Inventory - ' + timestamp);
}

function resetSheet_(spreadsheet, sheetName) {
  const existingSheet = spreadsheet.getSheetByName(sheetName);
  const sheet = existingSheet || spreadsheet.insertSheet(sheetName);
  sheet.clear();
  return sheet;
}

function writeInventory_(sheet, rows) {
  sheet.getRange(1, 1, 1, INVENTORY_HEADERS.length).setValues([INVENTORY_HEADERS]);

  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, INVENTORY_HEADERS.length).setValues(rows);
  }

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, INVENTORY_HEADERS.length).setFontWeight('bold');
  sheet.autoResizeColumns(1, INVENTORY_HEADERS.length);
  applyMigrationActionValidation_(sheet, rows.length);
}

function writeSummary_(sheet, rootFolder, rows, exportTimestamp) {
  const actionCounts = countByColumn_(rows, 10);
  const summaryRows = [
    ['Veld', 'Waarde'],
    ['Root folder', OS_CUSTOMMADE_ROOT_NAME],
    ['Root folder ID', rootFolder.getId()],
    ['Root folder URL', rootFolder.getUrl()],
    ['Export timestamp', exportTimestamp],
    ['Aantal folders', rows.length],
    ['behouden', actionCounts['behouden'] || 0],
    ['verplaatsen', actionCounts['verplaatsen'] || 0],
    ['samenvoegen', actionCounts['samenvoegen'] || 0],
    ['archiveren', actionCounts['archiveren'] || 0],
    ['handmatige review', actionCounts['handmatige review'] || 0],
    ['Sprint 2 instructie', 'Gebruik deze export als reviewbasis; voer geen migratie uit zonder owner-, link- en risico-review.'],
  ];

  sheet.getRange(1, 1, summaryRows.length, 2).setValues(summaryRows);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.autoResizeColumns(1, 2);
}

function applyMigrationActionValidation_(sheet, rowCount) {
  if (rowCount < 1) {
    return;
  }

  const validation = SpreadsheetApp.newDataValidation()
    .requireValueInList(MIGRATION_ACTIONS, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 11, rowCount, 1).setDataValidation(validation);
}

function countDirectChildren_(folder) {
  let files = 0;
  let folders = 0;
  const fileIterator = folder.getFiles();
  const folderIterator = folder.getFolders();

  while (fileIterator.hasNext()) {
    fileIterator.next();
    files += 1;
  }

  while (folderIterator.hasNext()) {
    folderIterator.next();
    folders += 1;
  }

  return { files: files, folders: folders };
}

function getPrimaryParentInfo_(folder) {
  const parents = folder.getParents();
  if (!parents.hasNext()) {
    return { id: '', name: '' };
  }

  const parent = parents.next();
  return { id: parent.getId(), name: parent.getName() };
}

function getOwnerEmail_(folder) {
  try {
    const owner = folder.getOwner();
    return owner ? owner.getEmail() : '';
  } catch (error) {
    return 'Niet beschikbaar: ' + error.message;
  }
}

function getCurrentRootFromPath_(fullPath) {
  const parts = fullPath.split('/');
  return parts.length > 1 ? parts[1] : parts[0];
}

function getGovernanceRootFromPath_(fullPath) {
  const currentRoot = getCurrentRootFromPath_(fullPath);
  return GOVERNANCE_ROOTS[currentRoot] || '';
}

function formatDate_(dateValue) {
  return Utilities.formatDate(dateValue, EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
}

function countByColumn_(rows, columnIndex) {
  return rows.reduce(function(accumulator, row) {
    const key = row[columnIndex];
    accumulator[key] = (accumulator[key] || 0) + 1;
    return accumulator;
  }, {});
}

function isArtistFolder_(folderName) {
  return ARTIST_NAMES.indexOf(folderName.toUpperCase()) !== -1;
}

function hasArchiveSignal_(folderName, fullPath) {
  return /(^|[\s_\-/])(archive|archief|old|obsolete|vervallen)([\s_\-/]|$)/i.test(folderName)
    || /(^|[\s_\-/])(archive|archief|old|obsolete|vervallen)([\s_\-/]|$)/i.test(fullPath);
}

function hasDuplicateSignal_(folderName) {
  return /(copy|kopie|duplicate|duplicaat|backup|back-up|oud)$/i.test(folderName)
    || /\((copy|kopie|duplicate|duplicaat)\)/i.test(folderName);
}

/**
 * OS_CUSTOMMADE Drive inventory export for Sprint 2A.
 *
 * Governance basis:
 * - docs/00_GOVERNANCE/DECISION_LOG.md
 * - docs/00_GOVERNANCE/GOVERNANCE_RULES.md
 * - docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md
 * - docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md
 * - docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md
 * - docs/00_GOVERNANCE/SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md
 *
 * Purpose:
 * - Export one row per folder below a configured OS_CUSTOMMADE root folder.
 * - Support Sprint 2 migration review in Google Sheets.
 * - Inventory only: this script does not move, rename, delete, create, share or archive Drive content.
 *
 * Setup:
 * 1. Paste this file into Google Apps Script.
 * 2. Set ROOT_FOLDER_ID to the OS_CUSTOMMADE Drive folder ID.
 * 3. Optionally set OUTPUT_SPREADSHEET_ID to reuse an existing Sheet.
 * 4. Run exportDriveInventory().
 */
const ROOT_FOLDER_ID = '';
const OUTPUT_SPREADSHEET_ID = '';
const INVENTORY_ROOT_NAME = 'OS_CUSTOMMADE';
const INVENTORY_SHEET_NAME = 'Drive Inventory';
const SUMMARY_SHEET_NAME = 'Sprint 2A Summary';
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

const KNOWN_ARTIST_NAMES = [
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
  'Root folder',
  'Governance root',
  'Eigenaar',
  'Aantal bestanden',
  'Aantal submappen',
  'Laatst gewijzigd',
  'Migratieactie',
  'Opmerking',
  'Folder URL',
  'Parent folder ID',
  'Export timestamp',
];

function exportDriveInventory() {
  const rootFolder = getRootFolder_();
  const spreadsheet = getOrCreateOutputSpreadsheet_();
  const inventorySheet = resetSheet_(spreadsheet, INVENTORY_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, SUMMARY_SHEET_NAME);
  const exportTimestamp = Utilities.formatDate(new Date(), EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const rows = [];

  collectFolderRows_(rootFolder, rootFolder.getName() || INVENTORY_ROOT_NAME, rows, exportTimestamp);
  writeInventory_(inventorySheet, rows);
  writeSummary_(summarySheet, rootFolder, rows, exportTimestamp);

  Logger.log('Drive inventory export complete: ' + spreadsheet.getUrl());
  Logger.log('Folders exported: ' + rows.length);
  return spreadsheet.getUrl();
}

function collectFolderRows_(folder, fullPath, rows, exportTimestamp) {
  const parentInfo = getPrimaryParentInfo_(folder);
  const rootFolder = getRootFolderFromPath_(fullPath);
  const governanceRoot = getGovernanceRootFromPath_(fullPath);
  const counts = countDirectChildren_(folder);
  const migrationDecision = determineMigrationAction_(folder.getName(), fullPath, rootFolder, governanceRoot);

  rows.push([
    folder.getId(),
    folder.getName(),
    fullPath,
    parentInfo.name,
    rootFolder,
    governanceRoot,
    getOwnerEmail_(folder),
    counts.files,
    counts.folders,
    formatDate_(folder.getLastUpdated()),
    migrationDecision.action,
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

function determineMigrationAction_(folderName, fullPath, rootFolder, governanceRoot) {
  if (fullPath === folderName) {
    return {
      action: 'behouden',
      note: 'Inventaris-root; alleen inventariseren, niet migreren.',
    };
  }

  if (!governanceRoot) {
    return {
      action: 'handmatige review',
      note: 'Map valt niet onder een vastgelegde OS_CUSTOMMADE governance root; classificatie en ownerbesluit verplicht.',
    };
  }

  if (isKnownArtistFolder_(folderName) && governanceRoot !== GOVERNANCE_ROOTS['02_ARTIST_MANAGEMENT']) {
    return {
      action: 'verplaatsen',
      note: 'Bekende artiestenmap lijkt buiten 02_ARTIST_MANAGEMENT te staan; artist/client-conflict controleren.',
    };
  }

  if (hasFierceSignal_(folderName, fullPath)) {
    return {
      action: 'handmatige review',
      note: 'Mogelijk FIERCE-content; CM en FIERCE blijven strikt gescheiden. Niet migreren zonder uitsluitbesluit.',
    };
  }

  if (hasDuplicateSignal_(folderName)) {
    return {
      action: 'samenvoegen',
      note: 'Naam bevat duplicaat-, kopie- of backup-signaal; canonical map en samenvoegplan verplicht.',
    };
  }

  if (hasArchiveSignal_(folderName, fullPath) && governanceRoot !== GOVERNANCE_ROOTS['99_ARCHIVE']) {
    return {
      action: 'archiveren',
      note: 'Naam of pad bevat archive/archief/old/obsolete-signaal; owner moet bevestigen dat geen actieve links of verplicht bewijs bestaan.',
    };
  }

  if (rootFolder === Object.keys(GOVERNANCE_ROOTS).find(function(key) { return GOVERNANCE_ROOTS[key] === governanceRoot; })) {
    return {
      action: 'behouden',
      note: 'Map staat onder een goedgekeurde governance root; owner-, link- en risicoreview blijven verplicht vóór Sprint 2 migratie.',
    };
  }

  return {
    action: 'behouden',
    note: 'Geen automatische conflictindicator gevonden; gebruik de analysis workflow voor definitieve actie.',
  };
}

function getRootFolder_() {
  if (!ROOT_FOLDER_ID) {
    throw new Error('Set ROOT_FOLDER_ID to the OS_CUSTOMMADE Drive folder ID before running exportDriveInventory().');
  }
  return DriveApp.getFolderById(ROOT_FOLDER_ID);
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
    ['Root folder naam', rootFolder.getName()],
    ['Root folder ID', rootFolder.getId()],
    ['Root folder URL', rootFolder.getUrl()],
    ['Export timestamp', exportTimestamp],
    ['Aantal folders', rows.length],
    ['behouden', actionCounts['behouden'] || 0],
    ['verplaatsen', actionCounts['verplaatsen'] || 0],
    ['samenvoegen', actionCounts['samenvoegen'] || 0],
    ['archiveren', actionCounts['archiveren'] || 0],
    ['handmatige review', actionCounts['handmatige review'] || 0],
    ['Governance instructie', 'Alleen inventarisatie. Geen Drive-wijzigingen. Definitieve migratieactie pas na owner-, link-, FIERCE-, legal/finance- en risicoreview.'],
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

function getRootFolderFromPath_(fullPath) {
  const parts = fullPath.split('/');
  return parts.length > 1 ? parts[1] : parts[0];
}

function getGovernanceRootFromPath_(fullPath) {
  const rootFolder = getRootFolderFromPath_(fullPath);
  return GOVERNANCE_ROOTS[rootFolder] || '';
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

function isKnownArtistFolder_(folderName) {
  return KNOWN_ARTIST_NAMES.indexOf(folderName.toUpperCase()) !== -1;
}

function hasArchiveSignal_(folderName, fullPath) {
  const archivePattern = /(^|[\s_\-/])(archive|archief|old|obsolete|vervallen)([\s_\-/]|$)/i;
  return archivePattern.test(folderName) || archivePattern.test(fullPath);
}

function hasDuplicateSignal_(folderName) {
  return /(copy|kopie|duplicate|duplicaat|backup|back-up|oud)$/i.test(folderName)
    || /\((copy|kopie|duplicate|duplicaat)\)/i.test(folderName);
}

function hasFierceSignal_(folderName, fullPath) {
  return /(^|[\s_\-/])fierce([\s_\-/]|$)/i.test(folderName)
    || /(^|[\s_\-/])fierce([\s_\-/]|$)/i.test(fullPath);
}

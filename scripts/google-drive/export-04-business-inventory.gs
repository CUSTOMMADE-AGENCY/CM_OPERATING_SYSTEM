/**
 * Sprint 3A read-only inventory export for OS_CUSTOMMADE/04_BUSINESS.
 *
 * Purpose:
 * - Create a Google Sheet named SPRINT3A_04_BUSINESS_INVENTORY.
 * - Inventory every folder and file below OS_CUSTOMMADE/04_BUSINESS.
 * - Do not move, rename, delete, archive, classify, or share Drive content.
 * - The only write action is creating/updating the output Google Sheet.
 *
 * Setup:
 * 1. Paste this file into Google Apps Script.
 * 2. Set either BUSINESS_ROOT_FOLDER_ID to the 04_BUSINESS folder ID, or set
 *    OS_CUSTOMMADE_ROOT_FOLDER_ID and leave BUSINESS_ROOT_FOLDER_ID blank.
 * 3. Optionally set BUSINESS_OUTPUT_SPREADSHEET_ID to reuse an existing Sheet.
 * 4. Run exportSprint3A04BusinessInventory().
 */
const OS_CUSTOMMADE_ROOT_FOLDER_ID = '';
const BUSINESS_ROOT_FOLDER_ID = '';
const BUSINESS_ROOT_FOLDER_NAME = '04_BUSINESS';
const BUSINESS_INVENTORY_SPREADSHEET_NAME = 'SPRINT3A_04_BUSINESS_INVENTORY';
const BUSINESS_EXPORT_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const BUSINESS_WRITE_BATCH_SIZE = 100;
const BUSINESS_OUTPUT_SPREADSHEET_ID = '';

const BUSINESS_INVENTORY_HEADERS = [
  'Folder ID',
  'Parent Folder ID',
  'Volledig pad',
  'Naam',
  'Type',
  'Owner',
  'Last Modified Date',
  'Sharing Status',
  'Aantal child items',
];

function exportSprint3A04BusinessInventory() {
  const spreadsheet = getOrCreateBusinessInventorySpreadsheet_();
  const inventorySheet = resetBusinessSheet_(spreadsheet, 'INVENTORY');
  const foldersSheet = resetBusinessSheet_(spreadsheet, 'FOLDERS_ONLY');
  const filesSheet = resetBusinessSheet_(spreadsheet, 'FILES_ONLY');
  const duplicatesSheet = resetBusinessSheet_(spreadsheet, 'DUPLICATE_NAMES');
  const unknownSheet = resetBusinessSheet_(spreadsheet, 'UNKNOWN_CLASSIFICATION');
  removeExtraBusinessSheets_(spreadsheet);
  const exportTimestamp = Utilities.formatDate(new Date(), BUSINESS_EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");

  initializeBusinessSheet_(inventorySheet, BUSINESS_INVENTORY_HEADERS, exportTimestamp);
  initializeBusinessSheet_(foldersSheet, BUSINESS_INVENTORY_HEADERS, exportTimestamp);
  initializeBusinessSheet_(filesSheet, BUSINESS_INVENTORY_HEADERS, exportTimestamp);
  initializeBusinessSheet_(duplicatesSheet, BUSINESS_INVENTORY_HEADERS.concat(['Duplicate Key', 'Duplicate Count']), exportTimestamp);
  initializeBusinessSheet_(unknownSheet, BUSINESS_INVENTORY_HEADERS, exportTimestamp);

  const rootFolder = getBusinessRootFolder_();
  const rootPath = 'OS_CUSTOMMADE/' + safeBusinessName_(rootFolder, BUSINESS_ROOT_FOLDER_NAME);
  const rows = collectBusinessInventoryRows_(rootFolder, rootPath);
  const folderRows = rows.filter(function(row) { return row[4] === 'Folder'; });
  const fileRows = rows.filter(function(row) { return row[4] === 'File'; });
  const duplicateRows = buildDuplicateNameRows_(rows);

  appendBusinessRows_(inventorySheet, rows, BUSINESS_INVENTORY_HEADERS.length);
  appendBusinessRows_(foldersSheet, folderRows, BUSINESS_INVENTORY_HEADERS.length);
  appendBusinessRows_(filesSheet, fileRows, BUSINESS_INVENTORY_HEADERS.length);
  appendBusinessRows_(duplicatesSheet, duplicateRows, BUSINESS_INVENTORY_HEADERS.length + 2);
  // No classification is added in Sprint 3A; this tab intentionally remains empty except for headers.

  finalizeBusinessSheet_(inventorySheet, BUSINESS_INVENTORY_HEADERS.length);
  finalizeBusinessSheet_(foldersSheet, BUSINESS_INVENTORY_HEADERS.length);
  finalizeBusinessSheet_(filesSheet, BUSINESS_INVENTORY_HEADERS.length);
  finalizeBusinessSheet_(duplicatesSheet, BUSINESS_INVENTORY_HEADERS.length + 2);
  finalizeBusinessSheet_(unknownSheet, BUSINESS_INVENTORY_HEADERS.length);

  Logger.log('Sprint 3A 04_BUSINESS inventory complete: ' + spreadsheet.getUrl());
  Logger.log('Items exported: ' + rows.length);
  Logger.log('Folders exported: ' + folderRows.length);
  Logger.log('Files exported: ' + fileRows.length);
  Logger.log('Duplicate-name rows exported: ' + duplicateRows.length);
  Logger.log('GEREED VOOR 04_BUSINESS ANALYSE');
  return spreadsheet.getUrl();
}

function collectBusinessInventoryRows_(rootFolder, rootPath) {
  const rows = [];
  const queue = [{ folder: rootFolder, path: rootPath }];

  while (queue.length > 0) {
    const current = queue.shift();
    const folderRow = buildBusinessFolderRow_(current.folder, current.path);
    rows.push(folderRow);

    const childFolders = current.folder.getFolders();
    while (childFolders.hasNext()) {
      const childFolder = childFolders.next();
      const childPath = current.path + '/' + safeBusinessName_(childFolder, 'UNKNOWN_FOLDER');
      queue.push({ folder: childFolder, path: childPath });
    }

    const childFiles = current.folder.getFiles();
    while (childFiles.hasNext()) {
      const childFile = childFiles.next();
      rows.push(buildBusinessFileRow_(childFile, current.path + '/' + safeBusinessName_(childFile, 'UNKNOWN_FILE'), current.folder));
    }
  }

  return rows;
}

function buildBusinessFolderRow_(folder, fullPath) {
  const parentInfo = safeBusinessPrimaryParentInfo_(folder);
  return [
    safeBusinessId_(folder),
    parentInfo.id,
    fullPath,
    safeBusinessName_(folder, 'UNKNOWN_FOLDER'),
    'Folder',
    safeBusinessOwner_(folder),
    safeBusinessLastUpdated_(folder),
    safeBusinessSharingStatus_(folder),
    safeBusinessChildCount_(folder),
  ];
}

function buildBusinessFileRow_(file, fullPath, parentFolder) {
  return [
    safeBusinessId_(file),
    safeBusinessId_(parentFolder),
    fullPath,
    safeBusinessName_(file, 'UNKNOWN_FILE'),
    'File',
    safeBusinessOwner_(file),
    safeBusinessLastUpdated_(file),
    safeBusinessSharingStatus_(file),
    '',
  ];
}

function buildDuplicateNameRows_(rows) {
  const counts = {};
  rows.forEach(function(row) {
    const key = row[3] + '|' + row[4];
    counts[key] = (counts[key] || 0) + 1;
  });
  return rows
    .filter(function(row) { return counts[row[3] + '|' + row[4]] > 1; })
    .map(function(row) { return row.concat([row[3] + '|' + row[4], counts[row[3] + '|' + row[4]]]); });
}

function getBusinessRootFolder_() {
  if (BUSINESS_ROOT_FOLDER_ID) {
    return DriveApp.getFolderById(BUSINESS_ROOT_FOLDER_ID);
  }
  if (!OS_CUSTOMMADE_ROOT_FOLDER_ID) {
    throw new Error('Set BUSINESS_ROOT_FOLDER_ID or OS_CUSTOMMADE_ROOT_FOLDER_ID before running the export.');
  }
  const root = DriveApp.getFolderById(OS_CUSTOMMADE_ROOT_FOLDER_ID);
  const matches = root.getFoldersByName(BUSINESS_ROOT_FOLDER_NAME);
  if (!matches.hasNext()) {
    throw new Error('Folder not found under OS_CUSTOMMADE: ' + BUSINESS_ROOT_FOLDER_NAME);
  }
  return matches.next();
}

function getOrCreateBusinessInventorySpreadsheet_() {
  if (BUSINESS_OUTPUT_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(BUSINESS_OUTPUT_SPREADSHEET_ID);
  }
  return SpreadsheetApp.create(BUSINESS_INVENTORY_SPREADSHEET_NAME);
}

function resetBusinessSheet_(spreadsheet, name) {
  const existing = spreadsheet.getSheetByName(name);
  const sheet = existing || spreadsheet.insertSheet(name);
  const filter = sheet.getFilter();
  if (filter) {
    filter.remove();
  }
  sheet.clear();
  return sheet;
}


function removeExtraBusinessSheets_(spreadsheet) {
  const keepNames = {
    INVENTORY: true,
    FOLDERS_ONLY: true,
    FILES_ONLY: true,
    DUPLICATE_NAMES: true,
    UNKNOWN_CLASSIFICATION: true,
  };
  spreadsheet.getSheets().forEach(function(sheet) {
    if (!keepNames[sheet.getName()] && spreadsheet.getSheets().length > 1) {
      spreadsheet.deleteSheet(sheet);
    }
  });
}

function initializeBusinessSheet_(sheet, headers, exportTimestamp) {
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(2, 1, 1, 3).setValues([['STATUS', 'Inventaris gestart', exportTimestamp]]);
  sheet.setFrozenRows(1);
}

function appendBusinessRows_(sheet, rows, width) {
  for (let index = 0; index < rows.length; index += BUSINESS_WRITE_BATCH_SIZE) {
    const batch = rows.slice(index, index + BUSINESS_WRITE_BATCH_SIZE);
    sheet.getRange(sheet.getLastRow() + 1, 1, batch.length, width).setValues(batch);
    SpreadsheetApp.flush();
  }
}

function finalizeBusinessSheet_(sheet, width) {
  sheet.autoResizeColumns(1, width);
  sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 1), width).createFilter();
}

function safeBusinessName_(item, fallback) {
  try { return item.getName(); } catch (error) { return fallback; }
}

function safeBusinessId_(item) {
  try { return item.getId(); } catch (error) { return ''; }
}

function safeBusinessOwner_(item) {
  try {
    const owner = item.getOwner();
    return owner ? owner.getEmail() : '';
  } catch (error) {
    return 'UNKNOWN_OWNER';
  }
}

function safeBusinessLastUpdated_(item) {
  try {
    return Utilities.formatDate(item.getLastUpdated(), BUSINESS_EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
  } catch (error) {
    return '';
  }
}

function safeBusinessSharingStatus_(item) {
  try {
    return String(item.getSharingAccess()) + ' / ' + String(item.getSharingPermission());
  } catch (error) {
    return 'UNKNOWN_SHARING_STATUS';
  }
}

function safeBusinessChildCount_(folder) {
  let count = 0;
  const folders = folder.getFolders();
  while (folders.hasNext()) { folders.next(); count += 1; }
  const files = folder.getFiles();
  while (files.hasNext()) { files.next(); count += 1; }
  return count;
}

function safeBusinessPrimaryParentInfo_(item) {
  try {
    const parents = item.getParents();
    if (parents.hasNext()) {
      const parent = parents.next();
      return { id: safeBusinessId_(parent), name: safeBusinessName_(parent, '') };
    }
  } catch (error) {
    return { id: '', name: '' };
  }
  return { id: '', name: '' };
}

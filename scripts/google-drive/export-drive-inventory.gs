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
 * 4. Run testDriveInventoryExport() first.
 * 5. Run exportDriveInventory() after validating the test output.
 */
const ROOT_FOLDER_ID = '';
const OUTPUT_SPREADSHEET_ID = '';
const INVENTORY_ROOT_NAME = 'OS_CUSTOMMADE';
const INVENTORY_SHEET_NAME = 'Drive Inventory';
const SUMMARY_SHEET_NAME = 'Sprint 2A Summary';
const EXPORT_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const MAX_DEPTH = 2;
const WRITE_BATCH_SIZE = 25;

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
  return runDriveInventoryExport_(MAX_DEPTH);
}

function testDriveInventoryExport() {
  return runDriveInventoryExport_(1);
}

function runDriveInventoryExport_(maxDepth) {
  const spreadsheet = getOrCreateOutputSpreadsheet_();
  const inventorySheet = resetSheet_(spreadsheet, INVENTORY_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, SUMMARY_SHEET_NAME);
  const exportTimestamp = Utilities.formatDate(new Date(), EXPORT_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const rows = [];

  initializeInventorySheet_(inventorySheet, exportTimestamp);

  let rootFolder;
  try {
    rootFolder = getRootFolder_();
  } catch (error) {
    appendErrorRow_(inventorySheet, ROOT_FOLDER_ID, INVENTORY_ROOT_NAME, error.message);
    throw error;
  }

  const rootPath = safeFolderName_(rootFolder, INVENTORY_ROOT_NAME);
  collectFolderRows_(rootFolder, rootPath, rows, exportTimestamp, inventorySheet, maxDepth);
  applyMigrationActionValidation_(inventorySheet, rows.length + 1);
  writeSummary_(summarySheet, rootFolder, rows, exportTimestamp);

  Logger.log('Drive inventory export complete: ' + spreadsheet.getUrl());
  Logger.log('Folders exported: ' + rows.length);
  return spreadsheet.getUrl();
}

function initializeInventorySheet_(sheet, exportTimestamp) {
  sheet.getRange(1, 1, 1, INVENTORY_HEADERS.length).setValues([INVENTORY_HEADERS]);
  sheet.getRange(2, 1, 1, 3).setValues([['STATUS', 'Script gestart', exportTimestamp]]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, INVENTORY_HEADERS.length).setFontWeight('bold');
}

function collectFolderRows_(rootFolder, rootPath, rows, exportTimestamp, sheet, maxDepth) {
  const queue = [{ folder: rootFolder, fullPath: rootPath, depth: 0 }];
  let pendingRows = [];

  while (queue.length > 0) {
    const current = queue.shift();
    let folderName = '';
    let folderId = '';

    try {
      folderName = safeFolderName_(current.folder, 'ERROR_METADATA');
      folderId = safeFolderId_(current.folder, 'ERROR_METADATA');
      Logger.log(current.fullPath);

      const row = buildFolderRow_(current.folder, current.fullPath, exportTimestamp);
      rows.push(row);
      pendingRows.push(row);

      if (pendingRows.length >= WRITE_BATCH_SIZE) {
        appendRows_(sheet, pendingRows);
        pendingRows = [];
      }

      if (maxDepth === null || maxDepth === undefined || current.depth < maxDepth) {
        enqueueChildFolders_(current.folder, current.fullPath, current.depth, queue, sheet);
      }
    } catch (error) {
      appendErrorRow_(sheet, folderId, folderName || current.fullPath, error.message);
    }
  }

  if (pendingRows.length > 0) {
    appendRows_(sheet, pendingRows);
  }
}

function buildFolderRow_(folder, fullPath, exportTimestamp) {
  const folderName = safeFolderName_(folder, 'ERROR_METADATA');
  const folderId = safeFolderId_(folder, 'ERROR_METADATA');
  const parentInfo = safePrimaryParentInfo_(folder);
  const rootFolder = getRootFolderFromPath_(fullPath);
  const governanceRoot = getGovernanceRootFromPath_(fullPath);
  const counts = safeCountDirectChildren_(folder);
  const lastUpdated = safeLastUpdated_(folder);
  const folderUrl = safeFolderUrl_(folder);
  const migrationDecision = determineMigrationAction_(folderName, fullPath, rootFolder, governanceRoot);

  return [
    folderId,
    folderName,
    fullPath,
    parentInfo.name,
    rootFolder,
    governanceRoot,
    getOwnerEmail_(folder),
    counts.files,
    counts.folders,
    lastUpdated,
    migrationDecision.action,
    migrationDecision.note,
    folderUrl,
    parentInfo.id,
    exportTimestamp,
  ];
}

function enqueueChildFolders_(folder, fullPath, depth, queue, sheet) {
  let childFolders;
  try {
    childFolders = folder.getFolders();
  } catch (error) {
    appendErrorRow_(sheet, safeFolderId_(folder, 'ERROR_METADATA'), safeFolderName_(folder, fullPath), error.message);
    return;
  }

  while (true) {
    let hasNext = false;
    try {
      hasNext = childFolders.hasNext();
    } catch (error) {
      appendErrorRow_(sheet, safeFolderId_(folder, 'ERROR_METADATA'), safeFolderName_(folder, fullPath), error.message);
      return;
    }

    if (!hasNext) {
      return;
    }

    try {
      const childFolder = childFolders.next();
      const childName = safeFolderName_(childFolder, 'ERROR_METADATA');
      queue.push({
        folder: childFolder,
        fullPath: fullPath + '/' + childName,
        depth: depth + 1,
      });
    } catch (error) {
      appendErrorRow_(sheet, safeFolderId_(folder, 'ERROR_METADATA'), safeFolderName_(folder, fullPath), error.message);
    }
  }
}

function appendRows_(sheet, rows) {
  if (rows.length < 1) {
    return;
  }
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, INVENTORY_HEADERS.length).setValues(rows);
  SpreadsheetApp.flush();
}

function appendErrorRow_(sheet, folderId, folderName, errorMessage) {
  const row = new Array(INVENTORY_HEADERS.length).fill('');
  row[0] = 'ERROR';
  row[1] = folderId || '';
  row[2] = folderName || '';
  row[3] = errorMessage || '';
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, INVENTORY_HEADERS.length).setValues([row]);
  SpreadsheetApp.flush();
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

  if (hasExterne entiteitSignal_(folderName, fullPath)) {
    return {
      action: 'handmatige review',
      note: 'Mogelijk EXTERNE_ENTITEIT-content; CM en EXTERNE_ENTITEIT blijven strikt gescheiden. Niet migreren zonder uitsluitbesluit.',
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

function writeSummary_(sheet, rootFolder, rows, exportTimestamp) {
  const actionCounts = countByColumn_(rows, 10);
  const summaryRows = [
    ['Veld', 'Waarde'],
    ['Root folder naam', safeFolderName_(rootFolder, 'ERROR_METADATA')],
    ['Root folder ID', safeFolderId_(rootFolder, 'ERROR_METADATA')],
    ['Root folder URL', safeFolderUrl_(rootFolder)],
    ['Export timestamp', exportTimestamp],
    ['Aantal folders', rows.length],
    ['behouden', actionCounts['behouden'] || 0],
    ['verplaatsen', actionCounts['verplaatsen'] || 0],
    ['samenvoegen', actionCounts['samenvoegen'] || 0],
    ['archiveren', actionCounts['archiveren'] || 0],
    ['handmatige review', actionCounts['handmatige review'] || 0],
    ['Governance instructie', 'Alleen inventarisatie. Geen Drive-wijzigingen. Definitieve migratieactie pas na owner-, link-, EXTERNE_ENTITEIT-, legal/finance- en risicoreview.'],
  ];
  sheet.getRange(1, 1, summaryRows.length, 2).setValues(summaryRows);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.autoResizeColumns(1, 2);
}

function applyMigrationActionValidation_(sheet, rowCount) {
  if (rowCount < 2) {
    return;
  }
  const validation = SpreadsheetApp.newDataValidation()
    .requireValueInList(MIGRATION_ACTIONS, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(3, 11, rowCount - 1, 1).setDataValidation(validation);
  sheet.autoResizeColumns(1, INVENTORY_HEADERS.length);
}

function safeCountDirectChildren_(folder) {
  let files = 0;
  let folders = 0;

  try {
    const fileIterator = folder.getFiles();
    while (fileIterator.hasNext()) {
      fileIterator.next();
      files += 1;
    }
  } catch (error) {
    files = 'ERROR_METADATA';
  }

  try {
    const folderIterator = folder.getFolders();
    while (folderIterator.hasNext()) {
      folderIterator.next();
      folders += 1;
    }
  } catch (error) {
    folders = 'ERROR_METADATA';
  }

  return { files: files, folders: folders };
}

function safePrimaryParentInfo_(folder) {
  try {
    const parents = folder.getParents();
    if (!parents.hasNext()) {
      return { id: '', name: '' };
    }
    const parent = parents.next();
    return { id: safeFolderId_(parent, 'ERROR_METADATA'), name: safeFolderName_(parent, 'ERROR_METADATA') };
  } catch (error) {
    return { id: 'ERROR_METADATA', name: 'ERROR_METADATA' };
  }
}

function getOwnerEmail_(folder) {
  try {
    const owner = folder.getOwner();
    return owner ? owner.getEmail() : '';
  } catch (error) {
    return 'OWNER_UNKNOWN';
  }
}

function safeFolderId_(folder, fallback) {
  try {
    return folder.getId();
  } catch (error) {
    return fallback;
  }
}

function safeFolderName_(folder, fallback) {
  try {
    return folder.getName();
  } catch (error) {
    return fallback;
  }
}

function safeFolderUrl_(folder) {
  try {
    return folder.getUrl();
  } catch (error) {
    return 'ERROR_METADATA';
  }
}

function safeLastUpdated_(folder) {
  try {
    return formatDate_(folder.getLastUpdated());
  } catch (error) {
    return 'ERROR_METADATA';
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

function hasExterne entiteitSignal_(folderName, fullPath) {
  return /(^|[\s_\-/])externe_entiteit([\s_\-/]|$)/i.test(folderName)
    || /(^|[\s_\-/])externe_entiteit([\s_\-/]|$)/i.test(fullPath);
}

/**
 * Creates the CM Google Drive root structure and provides a client-folder helper.
 *
 * Usage:
 * 1. Set ROOT_FOLDER_ID if the structure should be created inside an existing Drive folder.
 * 2. Run createCmDriveStructure().
 * 3. Run createCmClientFolder('CLIENT_NAME') when a new client folder is approved.
 *
 * Rules:
 * - Uses uppercase folder names.
 * - Reuses existing folders to avoid duplicates.
 * - Avoids deep unnecessary nesting.
 */

const ROOT_FOLDER_ID = '';

const CM_ROOT_FOLDERS = [
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

const CM_CLIENT_FOLDERS = [
  '01_ADMIN',
  '02_BRAND',
  '03_STRATEGY',
  '04_DEALS_RIGHTS',
  '05_RELEASES',
  '06_CONTENT',
  '07_FINANCE',
  '08_DELIVERABLES',
  '09_ARCHIVE',
];

function createCmDriveStructure() {
  const root = getCmRootFolder_();

  CM_ROOT_FOLDERS.forEach(function(folderName) {
    getOrCreateFolder_(root, folderName);
  });
}

function createCmClientFolder(clientName) {
  if (!clientName || String(clientName).trim() === '') {
    throw new Error('clientName is required.');
  }

  createCmDriveStructure();

  const root = getCmRootFolder_();
  const clientsFolder = getOrCreateFolder_(root, '03_CLIENTS');
  const normalizedClientName = normalizeFolderName_(clientName);
  const clientFolder = getOrCreateFolder_(clientsFolder, normalizedClientName);

  CM_CLIENT_FOLDERS.forEach(function(folderName) {
    getOrCreateFolder_(clientFolder, folderName);
  });

  return clientFolder.getUrl();
}

function getCmRootFolder_() {
  if (ROOT_FOLDER_ID && ROOT_FOLDER_ID.trim() !== '') {
    return DriveApp.getFolderById(ROOT_FOLDER_ID.trim());
  }

  return DriveApp.getRootFolder();
}

function getOrCreateFolder_(parentFolder, folderName) {
  const folders = parentFolder.getFoldersByName(folderName);

  if (folders.hasNext()) {
    return folders.next();
  }

  return parentFolder.createFolder(folderName);
}

function normalizeFolderName_(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_\-]/g, '')
    .toUpperCase();
 * Creates the approved Custommade Agency Google Drive folder structure.
 * Governance status: PRIMARY for approved Drive build.
 *
 * Usage:
 * 1. Open Google Apps Script in the target Google account.
 * 2. Paste this file or bind it to the target Drive location.
 * 3. Set PARENT_FOLDER_ID to a folder ID, or leave blank to use My Drive root.
 * 4. Run createCmDriveStructure().
 * 5. Optional: run createCmDealStructure('DEAL_OR_ASSET_NAME') when a new
 *    deal case must be initialized under OS_CUSTOMMADE/04_DEALS.
 *
 * This script creates missing folders only; it does not delete, rename or move
 * existing content. GitHub remains the source of truth for the structure rules.
 */
const PARENT_FOLDER_ID = '';
const CM_DRIVE_ROOT = 'OS_CUSTOMMADE';

const ARTISTS = [
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

const ARTIST_SUBFOLDERS = [
  '01_ADMIN',
  '02_CONTRACT',
  '03_STRATEGY',
  '04_RELEASES',
  '05_BOOKING',
  '06_FINANCE',
  '07_SOCIALMEDIA',
  '08_PRESS_EPK',
  '09_ARCHIVE',
];

const DEAL_SUBFOLDERS = [
  '00_START_HIER',
  '01_RECHTEN_REGISTER',
  '02_CONTRACTEN_BEWIJS',
  '03_WAARDERING_VERKOOPPAKKET',
  '04_OUTREACH_CLICKUP',
  '99_ARCHIEF',
];

const CM_DRIVE_STRUCTURE = {
  '00_ADMIN': [],
  '01_MASTER_BOUTIQUE': [],
  '02_ARTIST_MANAGEMENT': ARTISTS,
  '03_CLIENTS': [],
  '04_DEALS': [],
  '05_OPERATIONS': [],
  '06_FINANCE': [],
  '07_LEGAL': [],
  '08_MARKETING': [],
  '09_CONTENT': [],
  '99_ARCHIVE': [],
};

function createCmDriveStructure() {
  const parent = PARENT_FOLDER_ID
    ? DriveApp.getFolderById(PARENT_FOLDER_ID)
    : DriveApp.getRootFolder();

  const root = getOrCreateFolder(parent, CM_DRIVE_ROOT);

  Object.keys(CM_DRIVE_STRUCTURE).forEach(function(rootFolderName) {
    const rootFolder = getOrCreateFolder(root, rootFolderName);
    const secondLevelFolders = CM_DRIVE_STRUCTURE[rootFolderName];

    secondLevelFolders.forEach(function(secondLevelFolderName) {
      const secondLevelFolder = getOrCreateFolder(rootFolder, secondLevelFolderName);

      if (rootFolderName === '02_ARTIST_MANAGEMENT') {
        ARTIST_SUBFOLDERS.forEach(function(artistSubfolderName) {
          getOrCreateFolder(secondLevelFolder, artistSubfolderName);
        });
      }

      if (rootFolderName === '04_DEALS') {
        DEAL_SUBFOLDERS.forEach(function(dealSubfolderName) {
          getOrCreateFolder(secondLevelFolder, dealSubfolderName);
        });
      }
    });
  });
}

function createCmDealStructure(dealFolderName) {
  if (!dealFolderName) {
    throw new Error('Provide a deal or asset folder name.');
  }

  const parent = PARENT_FOLDER_ID
    ? DriveApp.getFolderById(PARENT_FOLDER_ID)
    : DriveApp.getRootFolder();

  const root = getOrCreateFolder(parent, CM_DRIVE_ROOT);
  const dealsRoot = getOrCreateFolder(root, '04_DEALS');
  const dealFolder = getOrCreateFolder(dealsRoot, dealFolderName);

  DEAL_SUBFOLDERS.forEach(function(dealSubfolderName) {
    getOrCreateFolder(dealFolder, dealSubfolderName);
  });
}

function getOrCreateFolder(parentFolder, folderName) {
  const existingFolders = parentFolder.getFoldersByName(folderName);

  if (existingFolders.hasNext()) {
    Logger.log('Exists: ' + folderName);
    return existingFolders.next();
  }

  const createdFolder = parentFolder.createFolder(folderName);
  Logger.log('Created: ' + folderName);
  return createdFolder;
}

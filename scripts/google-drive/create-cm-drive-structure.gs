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
}

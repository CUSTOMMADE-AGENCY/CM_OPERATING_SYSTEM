/**
 * Creates the approved Custommade Agency Google Drive folder structure.
 *
 * Usage:
 * 1. Open Google Apps Script in the target Google account.
 * 2. Paste this file or bind it to the target Drive location.
 * 3. Set PARENT_FOLDER_ID to a folder ID, or leave blank to use My Drive root.
 * 4. Run createCmDriveStructure().
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
  '07_CONTENT',
  '08_PRESS_EPK',
  '09_ARCHIVE',
  'SOCIALMEDIA',
];

const CM_DRIVE_STRUCTURE = {
  '00_INBOX': [],
  '01_ARTIST_MANAGEMENT': ARTISTS,
  '02_MASTER_BOUTIQUE': [
    '01_CLIENTS',
    '02_OPERATIONS',
    '03_FINANCE',
    '04_LEGAL',
    '05_MARKETING',
    '06_ARCHIVE',
  ],
  '03_SHARED_SERVICES': [
    '01_GOVERNANCE',
    '02_RESOURCES',
    '03_OPERATION',
    '04_REPORTS',
    '05_SOPS_FLOWS',
  ],
  '04_BUSINESS': [
    '01_FINANCE',
    '02_LEGAL',
    '03_HR',
    '04_CURSUS_MASTERCLASSES',
  ],
  '05_MARKETING': [
    '01_BRAND',
    '02_CONTENT',
    '03_SOCIALMEDIA',
    '04_NETWORK',
  ],
  '06_PROJECTS': [],
  '07_ARCHIVE': [],
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

      if (rootFolderName === '01_ARTIST_MANAGEMENT') {
        ARTIST_SUBFOLDERS.forEach(function(artistSubfolderName) {
          getOrCreateFolder(secondLevelFolder, artistSubfolderName);
        });
      }
    });
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

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
  '05_BOOKING_PARTNERSHIPS',
  '06_FINANCE',
  '07_SOCIALMEDIA',
  '08_PRESS_EPK',
  '09_ARCHIVE',
];

const DEAL_SUBFOLDERS = [
  '00_Intake',
  '01_Valuation',
  '02_Data_Room',
  '03_Buyer_Outreach',
  '04_LOI',
  '05_APA_Negotiation',
  '06_Closing',
  '07_Post_Closing',
  '08_Success_Fee',
];

const CM_DRIVE_STRUCTURE = {
  '00_ADMIN': [],
  '01_MASTER_BOUTIQUE': [],
  '02_ARTIST_MANAGEMENT': [],
  '03_CLIENTS': ARTISTS,
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

      if (rootFolderName === '03_CLIENTS') {
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

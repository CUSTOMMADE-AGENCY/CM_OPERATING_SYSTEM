/**
 * Creates the approved Custommade Agency Google Drive root folder structure.
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

const CM_DRIVE_FOLDERS = [
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

function createCmDriveStructure() {
  const parent = PARENT_FOLDER_ID
    ? DriveApp.getFolderById(PARENT_FOLDER_ID)
    : DriveApp.getRootFolder();

  CM_DRIVE_FOLDERS.forEach(function(folderName) {
    const existing = parent.getFoldersByName(folderName);
    if (!existing.hasNext()) {
      parent.createFolder(folderName);
      Logger.log('Created: ' + folderName);
    } else {
      Logger.log('Exists: ' + folderName);
    }
  });
}

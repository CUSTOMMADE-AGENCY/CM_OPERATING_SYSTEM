/**
 * Creates the approved Custommade Agency Google Drive folder structure.
 * Governance status: PRIMARY for approved Drive build.
 *
 * Bouwt exact de goedgekeurde structuur uit docs/00_GOVERNANCE/DRIVE_STRUCTURE.md
 * (production baseline). Roots die in de baseline root-only zijn
 * (01_MASTER_BOUTIQUE, 05_OPERATIONS, 06_FINANCE, 08_MARKETING, 09_CONTENT)
 * krijgen bewust geen submappen.
 *
 * Usage:
 * 1. Open Google Apps Script in the target Google account.
 * 2. Set PARENT_FOLDER_ID to a folder ID, or leave blank to use My Drive root.
 * 3. Run createCmDriveStructure().
 * 4. Optional: run createCmClientFolder('CLIENT_OR_PARTNER_NAME') of
 *    createCmDealStructure('DEAL_OR_ASSET_NAME') voor een nieuw dossier.
 *
 * Rules:
 * - Creates missing folders only; never deletes, renames or moves content.
 * - Reuses existing folders to avoid duplicates.
 * - Uppercase folder names.
 * - GitHub remains the source of truth for the structure rules.
 */
const PARENT_FOLDER_ID = '';
const CM_DRIVE_ROOT = 'OS_CUSTOMMADE';

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

// Vaste root-level submappen conform de baseline. Roots die hier niet staan zijn
// bewust root-only (01_MASTER_BOUTIQUE, 05_OPERATIONS, 06_FINANCE, 08_MARKETING,
// 09_CONTENT). 02_ARTIST_MANAGEMENT/03_CLIENTS/04_DEALS krijgen per-dossier
// structuren via de losse helperfuncties.
const ROOT_SUBFOLDERS = {
  '00_ADMIN': [
    '01_INBOX_REVIEW',
    '02_GOVERNANCE_REFERENCE',
    '03_TEMPLATES',
    '04_REPORTS',
    '05_APPROVALS',
  ],
  '07_LEGAL': [
    '00_START_HIER',
    'APPROVALS',
    'CONTRACTS',
    'NDA',
    'PARTNERS',
    'FREELANCERS',
    'ARTIESTEN',
    'KLANTEN',
    'LEVERANCIERS',
    'RIGHTS',
    'LEGAL_REVIEW',
    'EVIDENCE',
    '99_ARCHIEF',
  ],
  '99_ARCHIVE': [
    'ARTIST_MANAGEMENT',
    'CLIENTS',
    'DEALS',
    'REVIEW_HOLD_OLD_STRUCTURE',
    'LEGACY_ROOTS',
    'MIGRATION_LOGS',
  ],
};

// 07_LEGAL/APPROVALS bevat het centrale approval register als enige submap.
const LEGAL_APPROVALS_CHILD = 'CM_APPROVAL_REGISTER';

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

const CLIENT_SUBFOLDERS = [
  '01_ADMIN',
  '02_CONTRACT',
  '03_BRIEF_SCOPE',
  '04_DELIVERABLES',
  '05_COMMUNICATION',
  '06_FINANCE',
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

function createCmDriveStructure() {
  const root = getOrCreateFolder_(getCmParentFolder_(), CM_DRIVE_ROOT);

  CM_ROOT_FOLDERS.forEach(function(rootFolderName) {
    const rootFolder = getOrCreateFolder_(root, rootFolderName);

    (ROOT_SUBFOLDERS[rootFolderName] || []).forEach(function(subFolderName) {
      const subFolder = getOrCreateFolder_(rootFolder, subFolderName);

      if (rootFolderName === '07_LEGAL' && subFolderName === 'APPROVALS') {
        getOrCreateFolder_(subFolder, LEGAL_APPROVALS_CHILD);
      }
    });

    if (rootFolderName === '02_ARTIST_MANAGEMENT') {
      ARTISTS.forEach(function(artistName) {
        const artistFolder = getOrCreateFolder_(rootFolder, artistName);
        ARTIST_SUBFOLDERS.forEach(function(artistSubfolderName) {
          getOrCreateFolder_(artistFolder, artistSubfolderName);
        });
      });
    }
  });
}

function createCmClientFolder(clientName) {
  if (!clientName || String(clientName).trim() === '') {
    throw new Error('clientName is required.');
  }

  const root = getOrCreateFolder_(getCmParentFolder_(), CM_DRIVE_ROOT);
  const clientsFolder = getOrCreateFolder_(root, '03_CLIENTS');
  const clientFolder = getOrCreateFolder_(clientsFolder, normalizeFolderName_(clientName));

  CLIENT_SUBFOLDERS.forEach(function(folderName) {
    getOrCreateFolder_(clientFolder, folderName);
  });

  return clientFolder.getUrl();
}

function createCmDealStructure(dealFolderName) {
  if (!dealFolderName || String(dealFolderName).trim() === '') {
    throw new Error('Provide a deal or asset folder name.');
  }

  const root = getOrCreateFolder_(getCmParentFolder_(), CM_DRIVE_ROOT);
  const dealsRoot = getOrCreateFolder_(root, '04_DEALS');
  const dealFolder = getOrCreateFolder_(dealsRoot, normalizeFolderName_(dealFolderName));

  DEAL_SUBFOLDERS.forEach(function(dealSubfolderName) {
    getOrCreateFolder_(dealFolder, dealSubfolderName);
  });

  return dealFolder.getUrl();
}

function getCmParentFolder_() {
  if (PARENT_FOLDER_ID && PARENT_FOLDER_ID.trim() !== '') {
    return DriveApp.getFolderById(PARENT_FOLDER_ID.trim());
  }

  return DriveApp.getRootFolder();
}

function getOrCreateFolder_(parentFolder, folderName) {
  const existingFolders = parentFolder.getFoldersByName(folderName);

  if (existingFolders.hasNext()) {
    Logger.log('Exists: ' + folderName);
    return existingFolders.next();
  }

  const createdFolder = parentFolder.createFolder(folderName);
  Logger.log('Created: ' + folderName);
  return createdFolder;
}

function normalizeFolderName_(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_\-]/g, '')
    .toUpperCase();
}

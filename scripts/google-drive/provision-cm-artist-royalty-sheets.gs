/**
 * Provisions the governed Custommade Agency Royalty Sheet for every active
 * CM management artist.
 *
 * Governance:
 * - docs/00_GOVERNANCE/DRIVE_STRUCTURE.md
 * - docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md
 * - docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md
 * - docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md
 * - docs/00_GOVERNANCE/MAP_SPECIFICATIONS/TEMPLATE_PLACEMENT_MAP.md
 *
 * Canonical location per artist:
 * OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE/ROYALTYSHEET/
 * [ARTIST]_ROYALTY_SHEET
 *
 * Rules:
 * - Idempotent: creates only when the exact governed file name is absent.
 * - Never overwrites, renames, deletes or moves an existing artist Royalty Sheet.
 * - Reuses/creates only the governed ROYALTYSHEET folder.
 * - Copies one canonical native Google Sheets master.
 * - Replaces [ARTIST] placeholders in the copied workbook only.
 * - Active artist scope = direct artist folders under 02_ARTIST_MANAGEMENT.
 *   Inactive artists belong in 99_ARCHIVE and are therefore not provisioned.
 * - Drive = storage/rights evidence; ClickUp = execution; Moneybird = financial truth.
 */

const CM_RS_PARENT_FOLDER_ID = '';
const CM_RS_DRIVE_ROOT = 'OS_CUSTOMMADE';
const CM_RS_ARTISTS_ROOT = '02_ARTIST_MANAGEMENT';
const CM_RS_FINANCE_FOLDER = '06_FINANCE';
const CM_RS_ROYALTY_FOLDER = 'ROYALTYSHEET';

// Canonical blank CM Royalty Sheet master in:
// OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/02_ARTIST_MANAGEMENT
const CM_RS_MASTER_SPREADSHEET_ID = '1KuZvTbZ878kz-kdU-4qbPgD2mDH_SLu7dF6RcwbDl5g';
const CM_RS_MASTER_FILE_NAME = 'CM_ARTIST_ROYALTY_SHEET_MASTER';

// true = preview only; missing folders may still be safely created idempotently.
const CM_RS_DRY_RUN = true;

/**
 * Provision all active CM management artists.
 */
function provisionCmArtistRoyaltySheets() {
  const report = newCmRsReport_();
  const artistsRoot = getCmRsArtistsRoot_();
  const folders = artistsRoot.getFolders();

  while (folders.hasNext()) {
    const artistFolder = folders.next();
    provisionCmArtistRoyaltySheetInFolder_(artistFolder, report);
  }

  logCmRsReport_(report);
  return report;
}

/**
 * Provision one artist by folder/name.
 */
function provisionCmArtistRoyaltySheet(artistName) {
  if (!artistName || String(artistName).trim() === '') {
    throw new Error('artistName is required.');
  }

  const report = newCmRsReport_();
  const artistsRoot = getCmRsArtistsRoot_();
  const normalized = normalizeCmRsArtist_(artistName);
  const matches = artistsRoot.getFoldersByName(normalized);

  if (!matches.hasNext()) {
    report.errors.push('Artist folder ontbreekt onder 02_ARTIST_MANAGEMENT: ' + normalized);
    logCmRsReport_(report);
    return report;
  }

  provisionCmArtistRoyaltySheetInFolder_(matches.next(), report);
  logCmRsReport_(report);
  return report;
}

/**
 * Audit only: verifies folder + exact governed file for every active artist.
 */
function auditCmArtistRoyaltySheets() {
  const report = newCmRsReport_();
  const artistsRoot = getCmRsArtistsRoot_();
  const folders = artistsRoot.getFolders();

  while (folders.hasNext()) {
    const artistFolder = folders.next();
    const artist = artistFolder.getName();
    const expectedName = artist + '_ROYALTY_SHEET';
    const finance = findChildFolder_(artistFolder, CM_RS_FINANCE_FOLDER);

    if (!finance) {
      report.errors.push(artist + ': 06_FINANCE ontbreekt');
      continue;
    }

    const royaltyFolder = findChildFolder_(finance, CM_RS_ROYALTY_FOLDER);
    if (!royaltyFolder) {
      report.errors.push(artist + ': 06_FINANCE/ROYALTYSHEET ontbreekt');
      continue;
    }

    if (!royaltyFolder.getFilesByName(expectedName).hasNext()) {
      report.errors.push(artist + ': ' + expectedName + ' ontbreekt');
      continue;
    }

    report.skipped.push(artist + ': CM_CONFORM placement aanwezig');
  }

  logCmRsReport_(report);
  return report;
}

function provisionCmArtistRoyaltySheetInFolder_(artistFolder, report) {
  const artist = artistFolder.getName();
  const expectedName = artist + '_ROYALTY_SHEET';
  const finance = getOrCreateCmRsFolder_(artistFolder, CM_RS_FINANCE_FOLDER);
  const royaltyFolder = getOrCreateCmRsFolder_(finance, CM_RS_ROYALTY_FOLDER);

  if (royaltyFolder.getFilesByName(expectedName).hasNext()) {
    report.skipped.push(artist + ': bestaat al — ' + expectedName);
    return null;
  }

  const masterFile = DriveApp.getFileById(CM_RS_MASTER_SPREADSHEET_ID);
  if (masterFile.getName() !== CM_RS_MASTER_FILE_NAME) {
    report.errors.push(
      artist + ': master-ID verwijst niet naar verwachte master (' + masterFile.getName() + ')'
    );
    return null;
  }

  report.created.push(artist + ': ' + expectedName);
  if (CM_RS_DRY_RUN) {
    return null;
  }

  const copy = masterFile.makeCopy(expectedName, royaltyFolder);
  const spreadsheet = SpreadsheetApp.openById(copy.getId());

  spreadsheet.getSheets().forEach(function(sheet) {
    sheet.createTextFinder('[ARTIST]')
      .matchCase(true)
      .replaceAllWith(artist);
  });

  SpreadsheetApp.flush();
  return copy;
}

function getCmRsArtistsRoot_() {
  const parent = CM_RS_PARENT_FOLDER_ID && CM_RS_PARENT_FOLDER_ID.trim() !== ''
    ? DriveApp.getFolderById(CM_RS_PARENT_FOLDER_ID.trim())
    : DriveApp.getRootFolder();

  const root = getOrCreateCmRsFolder_(parent, CM_RS_DRIVE_ROOT);
  return getOrCreateCmRsFolder_(root, CM_RS_ARTISTS_ROOT);
}

function getOrCreateCmRsFolder_(parent, name) {
  const matches = parent.getFoldersByName(name);
  return matches.hasNext() ? matches.next() : parent.createFolder(name);
}

function findChildFolder_(parent, name) {
  const matches = parent.getFoldersByName(name);
  return matches.hasNext() ? matches.next() : null;
}

function normalizeCmRsArtist_(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_\-]/g, '')
    .toUpperCase();
}

function newCmRsReport_() {
  return { created: [], skipped: [], errors: [] };
}

function logCmRsReport_(report) {
  Logger.log('=== CM Artist Royalty Sheet provision' + (CM_RS_DRY_RUN ? ' (DRY_RUN)' : '') + ' ===');
  Logger.log('Te creëren/aangemaakt: ' + report.created.length);
  report.created.forEach(function(line) { Logger.log('  + ' + line); });
  Logger.log('Overgeslagen: ' + report.skipped.length);
  report.skipped.forEach(function(line) { Logger.log('  = ' + line); });
  Logger.log('Fouten: ' + report.errors.length);
  report.errors.forEach(function(line) { Logger.log('  ! ' + line); });
}

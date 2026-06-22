/**
 * Safe cleanup for wrongly generated Drive root folders under OS_CUSTOMMADE.
 *
 * Rules (non-negotiable):
 * - NEVER deletes anything.
 * - NEVER renames anything.
 * - ONLY moves a wrong root folder if it contains no real files and no
 *   sub-subfolders with content (i.e. the entire subtree is empty).
 * - Moves qualify folders into 99_ARCHIVE/ARCHIVE_OLD_WRONG_STRUCTURE_2026-06-22.
 * - Folders with real content are flagged as REVIEW_REQUIRED and left untouched.
 * - Sends a full report to REPORT_RECIPIENT after every run.
 *
 * Usage:
 * 1. Open Google Apps Script bound to the correct Google account.
 * 2. Set ROOT_FOLDER_ID to the ID of OS_CUSTOMMADE (or leave as-is if already set).
 * 3. Run runSafeCleanup() — review the report email before doing anything else.
 * 4. Re-run as needed until all REVIEW_REQUIRED folders have been manually cleared.
 */

const CLEANUP_ROOT_FOLDER_ID   = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk'; // OS_CUSTOMMADE
const CLEANUP_ARCHIVE_ROOT     = '99_ARCHIVE';
const CLEANUP_ARCHIVE_TARGET   = 'ARCHIVE_OLD_WRONG_STRUCTURE_2026-06-22';
const CLEANUP_REPORT_RECIPIENT = 'info@custommade.agency';
const CLEANUP_REPORT_SUBJECT   = 'CM DRIVE SAFE CLEANUP REPORT — ' + Utilities.formatDate(new Date(), 'Europe/Amsterdam', 'yyyy-MM-dd');
const CLEANUP_TIMEZONE         = 'Europe/Amsterdam';

// Wrong root folder names to evaluate — do not change this list without governance approval.
const WRONG_ROOT_NAMES = [
  '00_INBOX',
  '01_ARTIST_MANAGEMENT',
  '02_MASTER_BOUTIQUE',
  '03_EXECUTIVE',
  '04_BUSINESS',
  '05_MARKETING',
  '06_PROJECTS',
  '07_ARCHIVE',
];

/**
 * Entry point. Run this function.
 */
function runSafeCleanup() {
  const log = [];
  const timestamp = Utilities.formatDate(new Date(), CLEANUP_TIMEZONE, 'yyyy-MM-dd HH:mm:ss');

  log.push('CM DRIVE SAFE CLEANUP');
  log.push('Run: ' + timestamp);
  log.push('Root: OS_CUSTOMMADE (' + CLEANUP_ROOT_FOLDER_ID + ')');
  log.push('='.repeat(60));

  let root;
  try {
    root = DriveApp.getFolderById(CLEANUP_ROOT_FOLDER_ID);
  } catch (e) {
    const msg = 'FATAL: Cannot access OS_CUSTOMMADE — ' + getMsg_(e);
    log.push(msg);
    Logger.log(msg);
    sendCleanupReport_(log.join('\n'));
    return;
  }

  // Ensure the archive target folder exists before moving anything.
  let archiveTarget;
  try {
    archiveTarget = getOrCreateCleanupFolder_(root, CLEANUP_ARCHIVE_ROOT, CLEANUP_ARCHIVE_TARGET);
  } catch (e) {
    const msg = 'FATAL: Cannot create archive target — ' + getMsg_(e);
    log.push(msg);
    Logger.log(msg);
    sendCleanupReport_(log.join('\n'));
    return;
  }

  const results = { archived: [], reviewRequired: [], notFound: [] };

  WRONG_ROOT_NAMES.forEach(function (folderName) {
    log.push('');
    log.push('── ' + folderName + ' ──');

    const matches = root.getFoldersByName(folderName);
    if (!matches.hasNext()) {
      log.push('  STATUS : NOT FOUND (already gone or never created — OK)');
      results.notFound.push(folderName);
      return;
    }

    const folder = matches.next();
    const folderId = folder.getId();

    const check = subtreeIsEmpty_(folder, folder.getName());
    log.push('  ID     : ' + folderId);
    log.push('  EMPTY  : ' + check.empty);
    if (!check.empty) {
      log.push('  REASON : ' + check.reason);
    }
    if (check.details.length > 0) {
      check.details.forEach(function (d) { log.push('  ' + d); });
    }

    if (check.empty) {
      try {
        archiveTarget.addFile(DriveApp.getFileById(folderId));
      } catch (moveErr) {
        // addFile works on files; for folders we use a different approach.
        // Google Drive API via DriveApp does not have a direct moveFolderTo().
        // We use the Drive advanced service if available, otherwise we log and skip.
        try {
          moveFolder_(folder, archiveTarget);
          log.push('  STATUS : ARCHIVED → 99_ARCHIVE/' + CLEANUP_ARCHIVE_TARGET);
          results.archived.push(folderName);
        } catch (e2) {
          log.push('  STATUS : MOVE FAILED — ' + getMsg_(e2));
          log.push('  ACTION : Manual move required to 99_ARCHIVE/' + CLEANUP_ARCHIVE_TARGET);
          results.reviewRequired.push(folderName + ' (move failed: ' + getMsg_(e2) + ')');
        }
        return;
      }
      // Should not reach here for folders, but kept for safety.
      log.push('  STATUS : ARCHIVED → 99_ARCHIVE/' + CLEANUP_ARCHIVE_TARGET);
      results.archived.push(folderName);
    } else {
      log.push('  STATUS : REVIEW_REQUIRED — folder has real content, left untouched');
      results.reviewRequired.push(folderName);
    }
  });

  // Summary
  log.push('');
  log.push('='.repeat(60));
  log.push('SUMMARY');
  log.push('Archived        : ' + results.archived.length + (results.archived.length ? ' (' + results.archived.join(', ') + ')' : ''));
  log.push('Review required : ' + results.reviewRequired.length + (results.reviewRequired.length ? ' (' + results.reviewRequired.join(', ') + ')' : ''));
  log.push('Not found       : ' + results.notFound.length + (results.notFound.length ? ' (' + results.notFound.join(', ') + ')' : ''));
  log.push('');
  log.push('Nothing was deleted. Nothing was renamed.');
  if (results.reviewRequired.length > 0) {
    log.push('');
    log.push('ACTION REQUIRED: Manually review and clear content from the REVIEW_REQUIRED folders,');
    log.push('then re-run runSafeCleanup() to move them to archive.');
  }

  const report = log.join('\n');
  Logger.log(report);
  sendCleanupReport_(report);
}

/**
 * Recursively checks whether a folder subtree contains any real files.
 * Returns { empty: boolean, reason: string, details: string[] }.
 *
 * "Empty" means: no files anywhere in the subtree, and no non-empty subfolders.
 */
function subtreeIsEmpty_(folder, path) {
  const details = [];
  let empty = true;
  let reason = '';

  // Check direct files.
  const files = folder.getFiles();
  while (files.hasNext()) {
    const f = files.next();
    const filePath = path + '/' + f.getName();
    details.push('FILE: ' + filePath);
    empty = false;
    reason = 'contains files';
  }

  // Recurse into subfolders.
  const subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    const sub = subfolders.next();
    const subPath = path + '/' + sub.getName();
    const subCheck = subtreeIsEmpty_(sub, subPath);
    if (!subCheck.empty) {
      empty = false;
      reason = reason || 'contains non-empty subfolder';
      subCheck.details.forEach(function (d) { details.push(d); });
    }
  }

  return { empty: empty, reason: reason, details: details };
}

/**
 * Moves a folder into a new parent using the Drive advanced service.
 * Falls back to a manual addParent/removeParent approach if Drive advanced
 * service is not enabled, which requires the Drive API scope.
 */
function moveFolder_(folder, newParent) {
  try {
    // Try Drive advanced service first (requires Drive API to be enabled).
    var file = Drive.Files.get(folder.getId(), { fields: 'parents' });
    var previousParents = file.parents.map(function (p) { return p.id; }).join(',');
    Drive.Files.update(
      {},
      folder.getId(),
      null,
      {
        addParents: newParent.getId(),
        removeParents: previousParents,
        fields: 'id, parents',
      }
    );
  } catch (advancedErr) {
    // Drive advanced service not available — try DriveApp workaround.
    // DriveApp does not have a moveFolder method; this will throw if the
    // Drive API scope is not enabled. In that case, log clearly.
    throw new Error(
      'Drive advanced service not available and no fallback. ' +
      'Enable Drive API in the Apps Script project (Resources → Advanced Google Services → Drive API). ' +
      'Original error: ' + getMsg_(advancedErr)
    );
  }
}

/**
 * Gets or creates a nested folder path: parent/topLevel/child.
 */
function getOrCreateCleanupFolder_(root, topLevelName, childName) {
  const topLevel = getOrCreateSingle_(root, topLevelName);
  return getOrCreateSingle_(topLevel, childName);
}

function getOrCreateSingle_(parent, name) {
  const existing = parent.getFoldersByName(name);
  if (existing.hasNext()) return existing.next();
  Logger.log('CREATED: ' + parent.getName() + '/' + name);
  return parent.createFolder(name);
}

/**
 * Sends the cleanup report by email.
 */
function sendCleanupReport_(body) {
  try {
    GmailApp.sendEmail(
      CLEANUP_REPORT_RECIPIENT,
      CLEANUP_REPORT_SUBJECT,
      body,
      {
        htmlBody:
          '<pre style="font-family:monospace;font-size:13px;line-height:1.5;">' +
          body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
          '</pre>',
      }
    );
    Logger.log('Report sent to ' + CLEANUP_REPORT_RECIPIENT);
  } catch (e) {
    Logger.log('ERROR sending report: ' + getMsg_(e));
  }
}

function getMsg_(error) {
  if (!error) return 'Unknown error';
  return error.message || String(error);
}

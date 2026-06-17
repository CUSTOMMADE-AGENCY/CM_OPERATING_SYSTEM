/**
 * OS_CUSTOMMADE Safe Roots live migration script.
 *
 * Purpose:
 * - Execute the first partial live Drive migration for only explicitly approved
 *   OS_CUSTOMMADE roots.
 * - Default mode is a safe dry run. Live Drive moves are blocked unless both
 *   DRY_RUN=false and EXECUTION_ENABLED=true are set by the operator.
 *
 * Scope allowed for live migration:
 * 1. OS_CUSTOMMADE/01_ARTIST_MANAGEMENT -> OS_CUSTOMMADE/02_ARTIST_MANAGEMENT
 * 2. OS_CUSTOMMADE/02_MASTER_BOUTIQUE -> OS_CUSTOMMADE/01_MASTER_BOUTIQUE
 * 3. OS_CUSTOMMADE/03_EXECUTIVE -> OS_CUSTOMMADE/00_ADMIN
 * 4. OS_CUSTOMMADE/05_MARKETING -> OS_CUSTOMMADE/08_MARKETING or OS_CUSTOMMADE/09_CONTENT
 *
 * Safety guarantees:
 * - DRY_RUN is true by default.
 * - EXECUTION_ENABLED is false by default.
 * - No delete actions.
 * - No archive actions.
 * - No permission or sharing changes.
 * - HOLD roots and sensitive items are logged but never moved.
 * - A Migration Log Sheet is always created.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const DRY_RUN = true;
const EXECUTION_ENABLED = false;
const MIGRATION_LOG_SPREADSHEET_ID = '';
const MIGRATION_LOG_TITLE = 'CM_OS Safe Roots Migration Log ';
const MIGRATION_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';

const SUMMARY_SHEET_NAME = 'Migration Summary';
const LOG_SHEET_NAME = 'Migration Log';
const HOLD_SHEET_NAME = 'Hold Items';
const ERRORS_SHEET_NAME = 'Errors';
const GO_NO_GO_SHEET_NAME = 'Go-No-Go';

const DIRECT_SAFE_ROOT_MAPPINGS = [
  { source: '01_ARTIST_MANAGEMENT', target: '02_ARTIST_MANAGEMENT', action: 'MOVE_TO_ARTIST_MANAGEMENT' },
  { source: '02_MASTER_BOUTIQUE', target: '01_MASTER_BOUTIQUE', action: 'MOVE_TO_MASTER_BOUTIQUE' },
  { source: '03_EXECUTIVE', target: '00_ADMIN', action: 'MOVE_TO_ADMIN' },
];

const MARKETING_SOURCE_ROOT = '05_MARKETING';
const HOLD_ROOTS = ['00_INBOX', '04_BUSINESS', '06_PROJECTS', '07_ARCHIVE'];
const SENSITIVE_KEYWORDS = [
  'fierce', 'legal', 'juridisch', 'finance', 'financ', 'rechten', 'rights',
  'contract', 'contracten', 'contracts', 'agreement', 'agreements', 'overeenkomst',
  'royalty', 'royalties', 'invoice', 'factuur', 'facturen', 'tax', 'btw',
  'bank', 'payment', 'betalingen', 'nda', 'apa', 'loi', 'license', 'licence'
];
const CONTENT_KEYWORDS = [
  'content', 'asset', 'assets', 'social', 'social media', 'socialmedia',
  'instagram', 'tiktok', 'youtube', 'video', 'photo', 'photos', 'beeld',
  'copy', 'creative', 'design', 'reels', 'shorts'
];
const UNKNOWN_KEYWORDS = ['unknown', 'onbekend', 'mixed', 'gemengd', 'conflict', 'review', 'tbd'];

const LOG_HEADERS = [
  'Timestamp', 'Source Root', 'Item Name', 'Old Parent ID', 'New Parent ID',
  'Folder ID', 'Old Path', 'New Path', 'Action', 'Status', 'Error Message',
  'DRY_RUN', 'EXECUTION_ENABLED'
];

function runSafeRootsDryRun() {
  return runSafeRootsMigration_(true);
}

function runSafeRootsLiveMigration() {
  if (DRY_RUN !== false || EXECUTION_ENABLED !== true) {
    throw new Error('Safety stop: runSafeRootsLiveMigration() mag alleen werken als DRY_RUN=false en EXECUTION_ENABLED=true. Huidig: DRY_RUN=' + DRY_RUN + ', EXECUTION_ENABLED=' + EXECUTION_ENABLED + '.');
  }
  return runSafeRootsMigration_(false);
}

function runSafeRootsMigration_(forceDryRun) {
  const startedAt = formatTimestamp_(new Date());
  const effectiveDryRun = forceDryRun === true || DRY_RUN === true;
  const spreadsheet = getOrCreateSpreadsheet_();
  const logSheet = resetSheet_(spreadsheet, LOG_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, SUMMARY_SHEET_NAME);
  const holdSheet = resetSheet_(spreadsheet, HOLD_SHEET_NAME);
  const errorsSheet = resetSheet_(spreadsheet, ERRORS_SHEET_NAME);
  const goNoGoSheet = resetSheet_(spreadsheet, GO_NO_GO_SHEET_NAME);
  const rows = [];

  initializeLogSheet_(logSheet);
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = safeFolderName_(root, 'OS_CUSTOMMADE');

  logHoldRoots_(root, rootName, rows);
  DIRECT_SAFE_ROOT_MAPPINGS.forEach(function(mapping) {
    migrateDirectRootChildren_(root, rootName, mapping, rows, effectiveDryRun);
  });
  migrateMarketingChildren_(root, rootName, rows, effectiveDryRun);

  appendRows_(logSheet, rows);
  const result = summarizeRows_(rows);
  writeSummary_(summarySheet, rows, result, startedAt, spreadsheet.getUrl(), effectiveDryRun);
  writeDerivedRows_(holdSheet, rows.filter(isHoldRow_), 'Geen HOLD-items gevonden.');
  writeDerivedRows_(errorsSheet, rows.filter(isErrorRow_), 'Geen errors gevonden.');
  writeGoNoGo_(goNoGoSheet, result, startedAt, spreadsheet.getUrl(), effectiveDryRun);

  Logger.log('GEREED VOOR SAFE ROOTS DRY RUN');
  return 'GEREED VOOR SAFE ROOTS DRY RUN — migratielog: ' + spreadsheet.getUrl();
}

function migrateDirectRootChildren_(root, rootName, mapping, rows, effectiveDryRun) {
  const source = findChildFolder_(root, mapping.source);
  const target = findChildFolder_(root, mapping.target);
  if (!source || !target) {
    addRow_(rows, mapping.source, '', source ? safeFolderId_(source, '') : '', target ? safeFolderId_(target, '') : '', source ? safeFolderId_(source, '') : '', rootName + '/' + mapping.source, rootName + '/' + mapping.target, mapping.action, 'ERROR_MISSING_SOURCE_OR_TARGET', 'Source of target root ontbreekt.', effectiveDryRun);
    return;
  }
  migrateChildrenToTarget_(source, target, rootName, mapping.source, mapping.target, mapping.action, rows, effectiveDryRun);
}

function migrateMarketingChildren_(root, rootName, rows, effectiveDryRun) {
  const source = findChildFolder_(root, MARKETING_SOURCE_ROOT);
  const marketingTarget = findChildFolder_(root, '08_MARKETING');
  const contentTarget = findChildFolder_(root, '09_CONTENT');
  if (!source || !marketingTarget || !contentTarget) {
    addRow_(rows, MARKETING_SOURCE_ROOT, '', source ? safeFolderId_(source, '') : '', '', source ? safeFolderId_(source, '') : '', rootName + '/' + MARKETING_SOURCE_ROOT, rootName + '/08_MARKETING of /09_CONTENT', 'MOVE_MARKETING_SPLIT', 'ERROR_MISSING_SOURCE_OR_TARGET', 'Marketing source of target root ontbreekt.', effectiveDryRun);
    return;
  }
  const children = source.getFolders();
  while (children.hasNext()) {
    const child = children.next();
    const childName = safeFolderName_(child, 'UNKNOWN');
    if (shouldHold_(childName)) {
      logHoldItem_(rows, MARKETING_SOURCE_ROOT, child, source, rootName + '/' + MARKETING_SOURCE_ROOT + '/' + childName, 'HOLD_SENSITIVE_UNKNOWN_MIXED_OR_CONFLICT', effectiveDryRun);
      continue;
    }
    const target = matchesAny_(childName, CONTENT_KEYWORDS) ? contentTarget : marketingTarget;
    const targetName = target === contentTarget ? '09_CONTENT' : '08_MARKETING';
    migrateOneFolder_(child, source, target, rootName, MARKETING_SOURCE_ROOT, targetName, 'MOVE_MARKETING_TO_' + targetName, rows, effectiveDryRun);
  }
}

function migrateChildrenToTarget_(source, target, rootName, sourceName, targetName, action, rows, effectiveDryRun) {
  const children = source.getFolders();
  while (children.hasNext()) {
    const child = children.next();
    const childName = safeFolderName_(child, 'UNKNOWN');
    if (shouldHold_(childName)) {
      logHoldItem_(rows, sourceName, child, source, rootName + '/' + sourceName + '/' + childName, 'HOLD_FIERCE_LEGAL_FINANCE_RIGHTS_CONTRACT_UNKNOWN_MIXED_OR_CONFLICT', effectiveDryRun);
      continue;
    }
    migrateOneFolder_(child, source, target, rootName, sourceName, targetName, action, rows, effectiveDryRun);
  }
}

function migrateOneFolder_(child, source, target, rootName, sourceName, targetName, action, rows, effectiveDryRun) {
  const childName = safeFolderName_(child, 'UNKNOWN');
  const oldPath = rootName + '/' + sourceName + '/' + childName;
  const newPath = rootName + '/' + targetName + '/' + childName;
  let status = effectiveDryRun ? 'DRY_RUN_PLANNED' : 'MOVED';
  let errorMessage = '';
  try {
    if (!effectiveDryRun) child.moveTo(target);
  } catch (error) {
    status = 'ERROR_MOVE_FAILED';
    errorMessage = error.message;
  }
  addRow_(rows, sourceName, childName, safeFolderId_(source, ''), safeFolderId_(target, ''), safeFolderId_(child, ''), oldPath, newPath, action, status, errorMessage, effectiveDryRun);
}

function logHoldRoots_(root, rootName, rows) {
  HOLD_ROOTS.forEach(function(rootNameToHold) {
    const folder = findChildFolder_(root, rootNameToHold);
    if (folder) logHoldItem_(rows, rootNameToHold, folder, root, rootName + '/' + rootNameToHold, 'HOLD_ROOT_NOT_IN_SAFE_SCOPE', true);
  });
}

function logHoldItem_(rows, sourceRoot, folder, oldParent, oldPath, status, effectiveDryRun) {
  addRow_(rows, sourceRoot, safeFolderName_(folder, 'UNKNOWN'), safeFolderId_(oldParent, ''), '', safeFolderId_(folder, ''), oldPath, 'HOLD / NIET MIGREREN', 'NO_ACTION_HOLD', status, '', effectiveDryRun);
}

function shouldHold_(name) {
  return matchesAny_(name, SENSITIVE_KEYWORDS) || matchesAny_(name, UNKNOWN_KEYWORDS);
}

function matchesAny_(value, keywords) {
  const normalized = normalize_(value);
  return keywords.some(function(keyword) { return normalized.indexOf(normalize_(keyword)) !== -1; });
}

function normalize_(value) {
  return String(value || '').toLowerCase().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function findChildFolder_(parent, folderName) {
  const folders = parent.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : null;
}

function getOrCreateSpreadsheet_() {
  if (MIGRATION_LOG_SPREADSHEET_ID) return SpreadsheetApp.openById(MIGRATION_LOG_SPREADSHEET_ID);
  return SpreadsheetApp.create(MIGRATION_LOG_TITLE + formatTimestamp_(new Date()));
}

function resetSheet_(spreadsheet, sheetName) {
  const existing = spreadsheet.getSheetByName(sheetName);
  if (existing) { existing.clear(); return existing; }
  return spreadsheet.insertSheet(sheetName);
}

function initializeLogSheet_(sheet) {
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setValues([LOG_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setFontWeight('bold');
}

function appendRows_(sheet, rows) {
  if (!rows.length) return;
  sheet.getRange(2, 1, rows.length, LOG_HEADERS.length).setValues(rows);
  sheet.autoResizeColumns(1, LOG_HEADERS.length);
}

function addRow_(rows, sourceRoot, itemName, oldParentId, newParentId, folderId, oldPath, newPath, action, status, errorMessage, effectiveDryRun) {
  rows.push([formatTimestamp_(new Date()), sourceRoot, itemName, oldParentId, newParentId, folderId, oldPath, newPath, action, status, errorMessage || '', effectiveDryRun ? 'true' : 'false', EXECUTION_ENABLED ? 'true' : 'false']);
}

function summarizeRows_(rows) {
  const errors = rows.filter(isErrorRow_).length;
  const holds = rows.filter(isHoldRow_).length;
  const moved = rows.filter(function(row) { return row[9] === 'MOVED'; }).length;
  const planned = rows.filter(function(row) { return row[9] === 'DRY_RUN_PLANNED'; }).length;
  return { total: rows.length, errors: errors, holds: holds, moved: moved, planned: planned, goNoGo: errors === 0 ? 'GO VOOR SAFE ROOTS DRY RUN REVIEW' : 'NO-GO: ERRORS OPLOSSEN' };
}

function writeSummary_(sheet, rows, result, startedAt, logUrl, effectiveDryRun) {
  const summaryRows = [
    ['Started at', startedAt], ['Completed at', formatTimestamp_(new Date())],
    ['Root folder ID', ROOT_FOLDER_ID], ['DRY_RUN effective', effectiveDryRun ? 'true' : 'false'],
    ['EXECUTION_ENABLED', EXECUTION_ENABLED ? 'true' : 'false'], ['No delete actions', 'true'],
    ['No archive actions', 'true'], ['No permission changes', 'true'], ['No sharing changes', 'true'],
    ['Rows', result.total], ['Planned', result.planned], ['Moved', result.moved],
    ['Hold Items', result.holds], ['Errors', result.errors], ['Go/No-Go', result.goNoGo],
    ['Migration Log URL', logUrl], ['Final message', 'GEREED VOOR SAFE ROOTS DRY RUN']
  ];
  sheet.getRange(1, 1, summaryRows.length, 2).setValues(summaryRows);
  sheet.autoResizeColumns(1, 2);
}

function writeDerivedRows_(sheet, rows, emptyMessage) {
  initializeLogSheet_(sheet);
  if (rows.length) sheet.getRange(2, 1, rows.length, LOG_HEADERS.length).setValues(rows);
  else sheet.getRange(2, 1).setValue(emptyMessage);
  sheet.autoResizeColumns(1, LOG_HEADERS.length);
}

function writeGoNoGo_(sheet, result, startedAt, logUrl, effectiveDryRun) {
  const goRows = [
    ['Controlepunt', 'Resultaat'], ['DRY_RUN standaard veilig', DRY_RUN === true ? 'PASS' : 'LIVE CONFIG'],
    ['Live guard', (!effectiveDryRun && EXECUTION_ENABLED === true) || effectiveDryRun ? 'PASS' : 'NO-GO'],
    ['Errors', result.errors], ['Hold Items gelogd', result.holds], ['Conclusie', result.goNoGo],
    ['Gestart', startedAt], ['Log', logUrl], ['Eindregel', 'GEREED VOOR SAFE ROOTS DRY RUN']
  ];
  sheet.getRange(1, 1, goRows.length, 2).setValues(goRows);
  sheet.autoResizeColumns(1, 2);
}

function isHoldRow_(row) { return String(row[9] || '').indexOf('HOLD') !== -1 || row[8] === 'NO_ACTION_HOLD'; }
function isErrorRow_(row) { return String(row[9] || '').indexOf('ERROR') === 0 || !!row[10]; }
function safeFolderName_(folder, fallback) { try { return folder.getName(); } catch (error) { return fallback; } }
function safeFolderId_(folder, fallback) { try { return folder.getId(); } catch (error) { return fallback; } }
function formatTimestamp_(date) { return Utilities.formatDate(date, MIGRATION_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX"); }

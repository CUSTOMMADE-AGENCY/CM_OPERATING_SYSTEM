/**
 * Sprint 2C OS_CUSTOMMADE Drive migration DRY RUN simulator.
 *
 * Built from the approved Sprint 2B migration matrix; governance files remain unchanged during Sprint 2C dry run.
 *
 * ROOT_FOLDER_ID is the current OS_CUSTOMMADE Drive-root:
 * 0B2aV9TqyUPDzd0F1WEd1RkVxNFk
 *
 * SAFETY GUARANTEES FOR THIS VERSION:
 * - DRY_RUN is locked to true.
 * - The script only simulates the migration and writes a migration log in
 *   Google Sheets.
 * - No Drive folders/files are moved, renamed, deleted, removed from parents,
 *   or archived.
 * - Archive decisions from the matrix are logged as review-only simulation rows;
 *   they are not executed and are intentionally blocked from mutation.
 * - FIERCE-content is flagged for exclusion and never receives a target path.
 */
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const DRY_RUN = true;
const EXECUTION_ENABLED = false;
const ALLOW_ARCHIVE_ACTIONS = false;
const MIGRATION_LOG_SPREADSHEET_ID = '';
const MIGRATION_LOG_SHEET_NAME = 'Sprint 2C Migration Log';
const MIGRATION_SUMMARY_SHEET_NAME = 'Sprint 2C Summary';
const MIGRATION_CONFLICTS_SHEET_NAME = 'Sprint 2C Conflicten';
const MIGRATION_MANUAL_REVIEW_SHEET_NAME = 'Sprint 2C Handmatige Review';
const MIGRATION_GO_NO_GO_SHEET_NAME = 'Sprint 2C Go-No-Go';
const MIGRATION_TIMEZONE = Session.getScriptTimeZone() || 'Etc/UTC';
const GOVERNANCE_IN_GITHUB_IS_LEADING = true;
const GOVERNANCE_CONFLICT_REPORT_PATH = 'docs/00_GOVERNANCE/SPRINT2B_GOVERNANCE_CONFLICT_REPORT.md';
const MIGRATION_MATRIX_PATH = 'docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md';
const INVENTORY_TEMPLATE_PATH = 'docs/00_GOVERNANCE/DRIVE_INVENTORY_TEMPLATE.md';

const TARGET_ROOTS = [
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

const KNOWN_CURRENT_ROOTS = [
  '00_GOVERNANCE',
  '00_INBOX',
  '01_ARTIST_MANAGEMENT',
  '02_MASTER_BOUTIQUE',
  '03_EXECUTIVE',
  '04_BUSINESS',
  '05_MARKETING',
  '06_PROJECTS',
  '07_ARCHIVE',
];

const LOG_HEADERS = [
  'Timestamp',
  'Migratievolgorde',
  'Oude locatie',
  'Nieuwe locatie',
  'Matrixbesluit',
  'Geplande actie',
  'Status',
  'Risico',
  'Afhankelijkheden / checks',
  'Handmatige review ja/nee',
  'Folder ID',
  'DRY_RUN',
  'Drive-mutatie toegestaan',
  'Notitie',
];

const MATRIX_ROOT_DECISIONS = [
  {
    order: '1', source: '00_GOVERNANCE', target: 'OS_CUSTOMMADE/00_ADMIN/GOVERNANCE_REFERENCE',
    decision: 'hernoemen / opsplitsen / deels archiveren', action: 'governance-referenties simuleren; GitHub blijft source of truth',
    risk: 'Middel', dependencies: 'Dubbele SOPs, AI-agent links, governance source-of-truth.', manualReview: true,
  },
  {
    order: '2', source: '00_INBOX', target: 'HOLD tot owner-review; daarna dossier-specifiek doelpad',
    decision: 'opsplitsen / archiveren', action: 'alle items op HOLD-review zetten; geen archivering uitvoeren',
    risk: 'Kritiek', dependencies: 'Classificatie, owner, FIERCE-scan, linkcontrole.', manualReview: true,
  },
  {
    order: '3', source: '01_ARTIST_MANAGEMENT', target: 'OS_CUSTOMMADE/02_ARTIST_MANAGEMENT',
    decision: 'hernoemen / samenvoegen / deels archiveren', action: 'artist-root en child-items simuleren naar canonical artistdossiers',
    risk: 'Hoog', dependencies: 'Artistnamen, duplicaten, legal/finance/rights, links.', manualReview: true,
  },
  {
    order: '5', source: '02_MASTER_BOUTIQUE', target: 'OS_CUSTOMMADE/01_MASTER_BOUTIQUE en OS_CUSTOMMADE/04_DEALS',
    decision: 'opsplitsen', action: 'playbooks/templates naar lane; catalog/deal dossiers naar deals simuleren',
    risk: 'Hoog', dependencies: 'Dealstatus, rights evidence, due diligence fase.', manualReview: true,
  },
  {
    order: '6', source: '03_EXECUTIVE', target: 'OS_CUSTOMMADE/00_ADMIN, 06_FINANCE, 07_LEGAL of dossierpaden',
    decision: 'hernoemen / opsplitsen / samenvoegen', action: 'executive-content classificeren en doelpad simuleren',
    risk: 'Hoog', dependencies: 'Vertrouwelijkheid, Moneybird, legal owner, audit trail.', manualReview: true,
  },
  {
    order: '4', source: '04_BUSINESS', target: 'OS_CUSTOMMADE/03_CLIENTS, 04_DEALS, 05_OPERATIONS, 06_FINANCE, 07_LEGAL',
    decision: 'opsplitsen / samenvoegen / archiveren', action: 'business-root op child-niveau classificeren; geen archivering uitvoeren',
    risk: 'Hoog', dependencies: 'Artist/client/deal classificatie, ClickUp, owners, permissions.', manualReview: true,
  },
  {
    order: '7', source: '05_MARKETING', target: 'OS_CUSTOMMADE/08_MARKETING of dossier-specifieke marketingpaden',
    decision: 'hernoemen / opsplitsen / archiveren', action: 'generieke marketing en dossiermarketing simuleren; geen archivering uitvoeren',
    risk: 'Middel', dependencies: 'Assetrechten, campagnecontext, actieve publicatie-links.', manualReview: true,
  },
  {
    order: '3-8', source: '06_PROJECTS', target: 'Artist-, client-, deal-, operations- of contentdossier',
    decision: 'opsplitsen / samenvoegen / archiveren', action: 'projecten classificeren naar dossier of HOLD-review; geen archivering uitvoeren',
    risk: 'Hoog', dependencies: 'Projectclassificatie, open verplichtingen, active links.', manualReview: true,
  },
  {
    order: '8-10', source: '07_ARCHIVE', target: 'OS_CUSTOMMADE/99_ARCHIVE of actieve dossierroot na review',
    decision: 'hernoemen / samenvoegen / shims tijdelijk behouden', action: 'legacy archive alleen inventariseren; archivering geblokkeerd in deze dry run',
    risk: 'Middel', dependencies: 'Broncontext, actieve dossiers, shortcuts/shims.', manualReview: true,
  },
];

const CLASSIFICATION_RULES = {
  FIERCE: ['fierce'],
  FINANCE: ['finance', 'financ', 'factuur', 'facturen', 'invoice', 'invoices', 'boekhouding', 'accounting', 'tax', 'btw', 'belasting', 'budget', 'cashflow', 'royalty', 'royalties', 'payments', 'betaling', 'betalingen', 'bank', 'payroll', 'salaris'],
  LEGAL: ['legal', 'juridisch', 'contract', 'contracts', 'agreement', 'agreements', 'overeenkomst', 'rechten', 'rights', 'ip', 'nda', 'apa', 'loi', 'license', 'licence', 'licensing', 'compliance', 'privacy', 'terms'],
  OPERATIONS: ['operations', 'operationeel', 'ops', 'admin', 'hr', 'people', 'team', 'process', 'processen', 'sop', 'system', 'systems', 'tooling', 'planning', 'templates'],
  TRAINING: ['cursus', 'cursussen', 'masterclass', 'masterclasses', 'training', 'trainingen', 'opleiding', 'opleidingen', 'education', 'knowledge'],
  ADMIN: ['executive', 'directie', 'board', 'management', 'strategy', 'strategie', 'company', 'leadership'],
  MARKETING: ['marketing', 'brand', 'branding', 'merk', 'network', 'netwerk', 'pr', 'press', 'promo', 'campaign', 'campagne', 'positioning', 'partnership', 'website'],
  CONTENT: ['content', 'asset', 'assets', 'social', 'socialmedia', 'social media', 'instagram', 'tiktok', 'youtube', 'video', 'photo', 'photos', 'beeld', 'copy', 'creative', 'design'],
  DEALS: ['deal', 'deals', 'transaction', 'transactions', 'transactie', 'transacties', 'buyer', 'seller', 'catalog', 'catalogus', 'acquisition', 'sale', 'verkoop', 'koop', 'due diligence', 'loi', 'apa', 'closing'],
  CLIENTS: ['client', 'clients', 'brand', 'brands', 'sponsor', 'sponsors', 'klant', 'klanten'],
  ARTIST: ['artist', 'artists', 'artiest', 'artiesten', 'release', 'releases', 'epk'],
  ARCHIVE: ['archive', 'archief', 'old', 'oud', 'legacy', 'closed', 'afgerond', 'superseded'],
};

function runSprint2CDriveMigration() {
  assertDryRunSafety_();
  const startedAt = formatTimestamp_(new Date());
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = safeFolderName_(root, 'OS_CUSTOMMADE');
  const spreadsheet = getOrCreateMigrationSpreadsheet_();
  const logSheet = resetSheet_(spreadsheet, MIGRATION_LOG_SHEET_NAME);
  const summarySheet = resetSheet_(spreadsheet, MIGRATION_SUMMARY_SHEET_NAME);
  const conflictsSheet = resetSheet_(spreadsheet, MIGRATION_CONFLICTS_SHEET_NAME);
  const manualReviewSheet = resetSheet_(spreadsheet, MIGRATION_MANUAL_REVIEW_SHEET_NAME);
  const goNoGoSheet = resetSheet_(spreadsheet, MIGRATION_GO_NO_GO_SHEET_NAME);
  const rows = [];

  initializeLogSheet_(logSheet);
  logInfo_('Sprint 2C Drive migration DRY RUN started. No Drive mutations will be performed.');

  addTargetRootReadinessRows_(root, rows, rootName);
  MATRIX_ROOT_DECISIONS.forEach(function(decision) {
    simulateRootDecision_(root, rows, rootName, decision);
  });
  reviewUnexpectedRoots_(root, rows, rootName);

  appendRows_(logSheet, rows);
  const readiness = evaluateReadiness_(rows);
  writeSummary_(summarySheet, rows, startedAt, spreadsheet.getUrl(), readiness);
  writeConflicts_(conflictsSheet, rows);
  writeManualReview_(manualReviewSheet, rows);
  writeGoNoGo_(goNoGoSheet, readiness, rows, startedAt, spreadsheet.getUrl());

  logInfo_('Sprint 2C Drive migration log: ' + spreadsheet.getUrl());
  logInfo_('GEREED VOOR DRY RUN');
  return 'GEREED VOOR DRY RUN — migratielog: ' + spreadsheet.getUrl();
}

/**
 * Backwards-compatible entrypoint for older execution-guide references.
 * Sprint 2C is the active dry-run phase; this wrapper performs the same
 * locked dry-run and intentionally does not mutate Drive or governance files.
 */
function runSprint2BDriveMigration() {
  return runSprint2CDriveMigration();
}

function assertDryRunSafety_() {
  if (DRY_RUN !== true || EXECUTION_ENABLED !== false || ALLOW_ARCHIVE_ACTIONS !== false) {
    throw new Error('Safety stop: this script must run with DRY_RUN=true, EXECUTION_ENABLED=false and ALLOW_ARCHIVE_ACTIONS=false.');
  }
}

function addTargetRootReadinessRows_(root, rows, rootName) {
  TARGET_ROOTS.forEach(function(targetRootName) {
    const target = findChildFolder_(root, targetRootName);
    addLogRow_(rows, {
      order: '0',
      oldLocation: rootName + '/' + targetRootName,
      newLocation: rootName + '/' + targetRootName,
      decision: 'doelstructuur controleren',
      action: 'doelroot-readiness simuleren',
      status: target ? 'TARGET_EXISTS' : 'TARGET_MISSING_DRY_RUN_ONLY',
      risk: targetRootName === '99_ARCHIVE' ? 'Middel' : 'Laag',
      dependencies: 'Doelroot uit goedgekeurde OS_CUSTOMMADE-structuur.',
      manualReview: target ? 'nee' : 'ja',
      folderId: target ? safeFolderId_(target, '') : '',
      mutatesDrive: false,
      note: target ? 'Geen actie nodig.' : 'Niet aanmaken in dry run; alleen loggen.',
    });
  });
}

function simulateRootDecision_(root, rows, rootName, decision) {
  const sourceRoot = findChildFolder_(root, decision.source);
  if (!sourceRoot) {
    addMatrixRow_(rows, rootName, decision, 'SKIPPED_SOURCE_NOT_FOUND', '', 'Bronroot niet gevonden; geen actie.');
    return;
  }

  addMatrixRow_(rows, rootName, decision, 'DRY_RUN_ROOT_REVIEW', safeFolderId_(sourceRoot, ''), 'Rootbesluit uit matrix gelogd; geen Drive-mutatie.');
  simulateChildDecisions_(sourceRoot, rows, rootName, decision);
}

function simulateChildDecisions_(sourceRoot, rows, rootName, decision) {
  const children = sourceRoot.getFolders();
  let childCount = 0;
  while (children.hasNext()) {
    childCount += 1;
    const child = children.next();
    const childName = safeFolderName_(child, 'UNKNOWN');
    const classification = classifyChild_(decision.source, childName);
    const oldPath = rootName + '/' + decision.source + '/' + childName;
    const newPath = classification.targetPath
      ? rootName + '/' + classification.targetPath + (classification.targetPathIsFinal ? '' : '/' + childName)
      : 'HOLD / EXCLUDED';

    addLogRow_(rows, {
      order: classification.order || decision.order,
      oldLocation: oldPath,
      newLocation: newPath,
      decision: decision.decision,
      action: classification.action,
      status: classification.status,
      risk: classification.risk || decision.risk,
      dependencies: classification.dependencies || decision.dependencies,
      manualReview: classification.manualReview ? 'ja' : 'nee',
      folderId: safeFolderId_(child, ''),
      mutatesDrive: false,
      note: classification.note,
    });
  }

  if (childCount === 0) {
    addLogRow_(rows, {
      order: decision.order,
      oldLocation: rootName + '/' + decision.source,
      newLocation: 'GEEN DOELPAD - lege root review',
      decision: decision.decision,
      action: 'lege bronroot vaststellen',
      status: 'EMPTY_ROOT_REVIEW_ONLY',
      risk: decision.risk,
      dependencies: decision.dependencies,
      manualReview: 'ja',
      folderId: safeFolderId_(sourceRoot, ''),
      mutatesDrive: false,
      note: 'Geen root sluiten en niet archiveren in deze dry run.',
    });
  }
}

function addMatrixRow_(rows, rootName, decision, status, folderId, note) {
  addLogRow_(rows, {
    order: decision.order,
    oldLocation: rootName + '/' + decision.source,
    newLocation: decision.target,
    decision: decision.decision,
    action: decision.action,
    status: status,
    risk: decision.risk,
    dependencies: decision.dependencies,
    manualReview: decision.manualReview ? 'ja' : 'nee',
    folderId: folderId,
    mutatesDrive: false,
    note: note,
  });
}

function classifyChild_(sourceRootName, childName) {
  if (matchesAny_(childName, CLASSIFICATION_RULES.FIERCE)) {
    return holdDecision_('FIERCE_EXCLUDED', 'FIERCE-content uitsluiten van CM-migratie', 'Kritiek', 'FIERCE-content is uitgesloten.', 'Geen doelpad; owner-review vereist.');
  }

  if (sourceRootName === '00_INBOX') return holdDecision_('HOLD_OWNER_REVIEW', 'inbox-item op HOLD zetten voor classificatie', 'Kritiek', 'Owner, FIERCE-scan, linkcontrole, legal/finance check.', 'Niet migreren in dry run.');
  if (sourceRootName === '07_ARCHIVE') return holdDecision_('ARCHIVE_REVIEW_ONLY', 'archive-item inventariseren; archiveren geblokkeerd', 'Middel', 'Actieve dossiers, broncontext, shortcuts/shims controleren.', 'Geen archiefmutatie uitvoeren.');

  if (sourceRootName === '00_GOVERNANCE') return targetDecision_('00_ADMIN/GOVERNANCE_REFERENCE', 'governance-referentie simuleren', true, 'Middel', 'GitHub blijft source of truth; controleer dubbele SOPs en AI-agent links.');
  if (sourceRootName === '01_ARTIST_MANAGEMENT') return targetDecision_('02_ARTIST_MANAGEMENT', 'artistdossier naar canonical artist-root simuleren', true, 'Hoog', 'Canonical artistnaam, duplicaten, contract/finance/rights en links controleren.');
  if (sourceRootName === '02_MASTER_BOUTIQUE') return classifyMasterBoutiqueChild_(childName);
  if (sourceRootName === '03_EXECUTIVE') return classifyExecutiveChild_(childName);
  if (sourceRootName === '04_BUSINESS') return classifyBusinessChild_(childName);
  if (sourceRootName === '05_MARKETING') return classifyMarketingChild_(childName);
  if (sourceRootName === '06_PROJECTS') return classifyProjectChild_(childName);

  return holdDecision_('UNCLASSIFIED_REVIEW_ONLY', 'onbekend item op HOLD-review zetten', 'Hoog', 'Root of item komt niet voor in matrix.', 'Geen migratie simuleren zonder ownerbesluit.');
}

function classifyMasterBoutiqueChild_(childName) {
  if (matchesAny_(childName, CLASSIFICATION_RULES.DEALS)) return targetDecision_('04_DEALS', 'catalog/deal dossier naar deals-root simuleren', true, 'Hoog', 'Dealstatus, chain of title, rights evidence, buyer links, due diligence fase.');
  return targetDecision_('01_MASTER_BOUTIQUE', 'master boutique lane-content simuleren', true, 'Middel', 'Controleer of GitHub al leidende template/SOP-versie bevat.');
}

function classifyExecutiveChild_(childName) {
  if (matchesAny_(childName, CLASSIFICATION_RULES.FINANCE)) return targetDecision_('06_FINANCE', 'executive finance simuleren', true, 'Hoog', 'Moneybird-status, finance-owner, privacy en audit trail.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.LEGAL)) return targetDecision_('07_LEGAL', 'executive legal simuleren', true, 'Hoog', 'Legal owner, signed/latest versie, dossiercontext en permissions review.');
  return targetDecision_('00_ADMIN', 'executive admin/company/leadership simuleren', true, 'Middel', 'Ownerbesluit, governance overlap en vertrouwelijkheidsclassificatie.');
}

function classifyBusinessChild_(childName) {
  // Training/education labels win before deal keywords: masterclass is not master rights, and cursus is not a deal.
  if (matchesAny_(childName, CLASSIFICATION_RULES.TRAINING)) return trainingDecision_();
  if (matchesAny_(childName, CLASSIFICATION_RULES.FINANCE)) return targetDecision_('06_FINANCE', 'business finance simuleren', true, 'Hoog', 'Moneybird-status, privacy en toegang controleren.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.LEGAL)) return targetDecision_('07_LEGAL', 'business legal simuleren', true, 'Hoog', 'Legal reviewer en dossiercontext.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.CLIENTS)) return targetDecision_('03_CLIENTS', 'client/brand/sponsor dossier simuleren', true, 'Hoog', 'Commerciële relatie bevestigen; artistconflict uitsluiten; owner en permissions.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.DEALS)) return targetDecision_('04_DEALS', 'business deal/pipeline simuleren', true, 'Hoog', 'ClickUp blijft execution-system; Drive bevat bewijs/reference/dossierbestanden.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.OPERATIONS)) return targetDecision_('05_OPERATIONS', 'business operations/process/tool simuleren', true, 'Middel', 'Controle op client/legal/finance-content die niet in Operations hoort.');
  return holdDecision_('HOLD_OWNER_REVIEW', 'business-item op HOLD zetten voor classificatie', 'Hoog', 'Artist/client/deal classificatie, ClickUp, owners en permissions.', 'Geen blind doelpad.');
}

function classifyMarketingChild_(childName) {
  if (matchesAny_(childName, CLASSIFICATION_RULES.ARTIST)) return targetDecision_('02_ARTIST_MANAGEMENT', 'artist-campagne naar artistdossier simuleren', true, 'Middel', 'Artist owner, campagnecontext en rechten op assets.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.CLIENTS)) return targetDecision_('03_CLIENTS', 'client-campagne naar clientdossier simuleren', true, 'Middel', 'Client owner, approvals en deliverable-status.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.CONTENT)) return targetDecision_('09_CONTENT', 'marketing content/assets simuleren', true, 'Middel', 'Assetrechten en actieve publicatie-links.');
  return targetDecision_('08_MARKETING', 'generieke CM-marketing simuleren', true, 'Middel', 'Bepalen of materiaal generiek CM-marketing is.');
}

function classifyProjectChild_(childName) {
  if (matchesAny_(childName, CLASSIFICATION_RULES.ARTIST)) return targetDecision_('02_ARTIST_MANAGEMENT', 'artist-project simuleren', true, 'Hoog', 'Artistconflict, releases/rights/legal/finance-context, actieve links.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.CLIENTS)) return targetDecision_('03_CLIENTS', 'client-project simuleren', true, 'Hoog', 'Clientstatus, approvals, deliverables en external sharing.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.DEALS)) return targetDecision_('04_DEALS', 'deal-project simuleren', true, 'Hoog', 'Dealstatus, rights evidence en ClickUp-pipeline.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.OPERATIONS)) return targetDecision_('05_OPERATIONS', 'internal operations-project simuleren', true, 'Middel', 'Bepalen of project operationeel of contentproductie is.');
  if (matchesAny_(childName, CLASSIFICATION_RULES.CONTENT)) return targetDecision_('09_CONTENT', 'content-project simuleren', true, 'Middel', 'Bepalen of project contentproductie is.');
  return holdDecision_('HOLD_OWNER_REVIEW', 'project op HOLD zetten voor classificatie', 'Hoog', 'Projectclassificatie, open verplichtingen en actieve links.', 'Niet archiveren; geen blind doelpad.');
}

function targetDecision_(targetPath, action, manualReview, risk, dependencies, options) {
  options = options || {};
  return { targetPath: targetPath, action: action, status: 'DRY_RUN_SIMULATED', manualReview: manualReview, risk: risk, dependencies: dependencies, note: options.note || 'Simulatie-only; geen Drive-mutatie.', targetPathIsFinal: options.targetPathIsFinal === true };
}

function trainingDecision_() {
  return targetDecision_(
    '05_OPERATIONS/TRAINING',
    'business training/education naar operations training simuleren',
    true,
    'Middel',
    'Cursus/masterclass/training/opleiding/education/knowledge is operations-training; masterclass is geen master rights en cursus is geen deal.',
    { targetPathIsFinal: true, note: 'Simulatie-only; geen Drive-mutatie. Expliciete uitzondering: masterclass ≠ master rights; cursus ≠ deal.' }
  );
}

function holdDecision_(status, action, risk, dependencies, note) {
  return { targetPath: '', action: action, status: status, manualReview: true, risk: risk, dependencies: dependencies, note: note };
}

function reviewUnexpectedRoots_(root, rows, rootName) {
  const folders = root.getFolders();
  while (folders.hasNext()) {
    const folder = folders.next();
    const folderName = safeFolderName_(folder, 'UNKNOWN');
    if (TARGET_ROOTS.indexOf(folderName) === -1 && KNOWN_CURRENT_ROOTS.indexOf(folderName) === -1) {
      addLogRow_(rows, {
        order: '2', oldLocation: rootName + '/' + folderName, newLocation: 'HOLD / REVIEW',
        decision: 'niet opgenomen in matrix', action: 'onverwachte root handmatige review',
        status: 'UNEXPECTED_ROOT_REVIEW_ONLY', risk: 'Hoog',
        dependencies: 'Owner, classificatie, FIERCE-scan en linkcontrole vereist.',
        manualReview: 'ja', folderId: safeFolderId_(folder, ''), mutatesDrive: false,
        note: 'Geen migratie simuleren zonder matrixbesluit.',
      });
    }
  }
}

function findChildFolder_(parent, folderName) {
  const folders = parent.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : null;
}

function matchesAny_(folderName, keywords) {
  const normalized = normalize_(folderName);
  return keywords.some(function(keyword) {
    return normalized.indexOf(normalize_(keyword)) !== -1;
  });
}

function normalize_(value) {
  return String(value || '').toLowerCase().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function getOrCreateMigrationSpreadsheet_() {
  if (MIGRATION_LOG_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(MIGRATION_LOG_SPREADSHEET_ID);
  }
  return SpreadsheetApp.create('CM_OS Sprint 2C Drive Migration DRY RUN Log ' + formatTimestamp_(new Date()));
}

function resetSheet_(spreadsheet, sheetName) {
  const existing = spreadsheet.getSheetByName(sheetName);
  if (existing) {
    existing.clear();
    return existing;
  }
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

function addLogRow_(rows, row) {
  rows.push([
    formatTimestamp_(new Date()), row.order || '', row.oldLocation || '', row.newLocation || '',
    row.decision || '', row.action || '', row.status || '', row.risk || '', row.dependencies || '',
    row.manualReview || 'nee', row.folderId || '', DRY_RUN ? 'true' : 'false',
    row.mutatesDrive ? 'ja' : 'nee', row.note || '',
  ]);
  logInfo_('[DRY_RUN] ' + row.status + ' | ' + row.action + ' | ' + row.oldLocation + ' -> ' + row.newLocation);
}

function writeSummary_(sheet, rows, startedAt, logUrl, readiness) {
  const counts = rows.reduce(function(accumulator, row) {
    const status = row[6];
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {});

  const summaryRows = [
    ['Started at', startedAt],
    ['Completed at', formatTimestamp_(new Date())],
    ['DRY_RUN', DRY_RUN ? 'true' : 'false'],
    ['Execution enabled', EXECUTION_ENABLED ? 'true' : 'false'],
    ['Archive actions allowed', ALLOW_ARCHIVE_ACTIONS ? 'true' : 'false'],
    ['Root folder ID', ROOT_FOLDER_ID],
    ['Governance in GitHub leading', GOVERNANCE_IN_GITHUB_IS_LEADING ? 'true' : 'false'],
    ['Migration matrix', MIGRATION_MATRIX_PATH],
    ['Governance conflict report', GOVERNANCE_CONFLICT_REPORT_PATH + ' (indien aanwezig; conflicten worden ook in deze spreadsheet gelogd)'],
    ['Drive inventory template', INVENTORY_TEMPLATE_PATH],
    ['Sprint phase', 'Sprint 2C Drive Migration Script DRY RUN'],
    ['Migration log URL', logUrl],
    ['Safety note', 'Geen bestanden verwijderen, geen bestanden archiveren, alleen simuleren.'],
    ['Go/No-Go conclusie', readiness.conclusion],
    ['Final message', 'GEREED VOOR DRY RUN'],
    ['', ''],
    ['Status', 'Aantal'],
  ];

  Object.keys(counts).sort().forEach(function(status) {
    summaryRows.push([status, counts[status]]);
  });

  sheet.getRange(1, 1, summaryRows.length, 2).setValues(summaryRows);
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  sheet.autoResizeColumns(1, 2);
}


function writeConflicts_(sheet, rows) {
  const conflictRows = rows.filter(function(row) {
    return isConflictRow_(row);
  });
  writeDerivedRows_(sheet, 'Geen conflicten gevonden binnen dry-run heuristiek.', conflictRows);
}

function writeManualReview_(sheet, rows) {
  const manualRows = rows.filter(function(row) {
    return row[9] === 'ja';
  });
  writeDerivedRows_(sheet, 'Geen handmatige reviewregels gevonden.', manualRows);
}

function writeDerivedRows_(sheet, emptyMessage, rows) {
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setValues([LOG_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, LOG_HEADERS.length).setFontWeight('bold');
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, LOG_HEADERS.length).setValues(rows);
  } else {
    sheet.getRange(2, 1).setValue(emptyMessage);
  }
  sheet.autoResizeColumns(1, LOG_HEADERS.length);
}

function writeGoNoGo_(sheet, readiness, rows, startedAt, logUrl) {
  const goNoGoRows = [
    ['Controlepunt', 'Vereist', 'Dry-run resultaat', 'Conclusie'],
    ['DRY_RUN staat aan', 'Ja', DRY_RUN ? 'Ja' : 'Nee', DRY_RUN ? 'PASS' : 'NO-GO'],
    ['Drive-mutaties zijn uitgeschakeld', 'Ja', EXECUTION_ENABLED === false && ALLOW_ARCHIVE_ACTIONS === false ? 'Ja' : 'Nee', EXECUTION_ENABLED === false && ALLOW_ARCHIVE_ACTIONS === false ? 'PASS' : 'NO-GO'],
    ['Geen logregel staat Drive-mutatie toe', 'Ja', readiness.mutatingRows === 0 ? 'Ja' : 'Nee', readiness.mutatingRows === 0 ? 'PASS' : 'NO-GO'],
    ['Root is gekoppeld aan doelroot binnen OS_CUSTOMMADE of HOLD/UITSLUITEN', 'Ja', readiness.invalidTargetRows === 0 ? 'Ja' : 'Nee (' + readiness.invalidTargetRows + ')', readiness.invalidTargetRows === 0 ? 'PASS' : 'NO-GO'],
    ['Alle items hebben actie/status', 'Ja', readiness.rowsMissingActionOrStatus === 0 ? 'Ja' : 'Nee (' + readiness.rowsMissingActionOrStatus + ')', readiness.rowsMissingActionOrStatus === 0 ? 'PASS' : 'NO-GO'],
    ['Alle HOLD-items zijn uitgesloten van live migratie', 'Ja', readiness.holdMutationRows === 0 ? 'Ja' : 'Nee (' + readiness.holdMutationRows + ')', readiness.holdMutationRows === 0 ? 'PASS' : 'NO-GO'],
    ['Owner/link/legal/finance/FIERCE checks zijn zichtbaar als reviewdependency', 'Ja', readiness.reviewRows + ' reviewregels', readiness.reviewRows > 0 ? 'PASS VOOR DRY RUN' : 'REVIEW'],
    ['Conflictenlijst is aangemaakt', 'Ja', readiness.conflictRows + ' conflict-/blockerregels', 'PASS VOOR DRY RUN'],
    ['Handmatige review lijst is aangemaakt', 'Ja', readiness.manualReviewRows + ' reviewregels', 'PASS VOOR DRY RUN'],
    ['Go/No-Go conclusie', 'Verplicht', readiness.conclusion, readiness.goForLiveMigration ? 'GO' : 'NO-GO VOOR LIVE; GO VOOR DRY RUN'],
    ['Migration log URL', 'Ingevuld', logUrl, 'INFO'],
    ['Gestart', 'Timestamp', startedAt, 'INFO'],
    ['Afgerond', 'Timestamp', formatTimestamp_(new Date()), 'INFO'],
    ['Eindregel', 'Exact', 'GEREED VOOR DRY RUN', 'PASS'],
  ];
  sheet.getRange(1, 1, goNoGoRows.length, 4).setValues(goNoGoRows);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.autoResizeColumns(1, 4);
}

function evaluateReadiness_(rows) {
  const manualReviewRows = rows.filter(function(row) { return row[9] === 'ja'; }).length;
  const conflictRows = rows.filter(isConflictRow_).length;
  const mutatingRows = rows.filter(function(row) { return row[12] === 'ja'; }).length;
  const holdMutationRows = rows.filter(function(row) { return String(row[6]).indexOf('HOLD') !== -1 && row[12] === 'ja'; }).length;
  const rowsMissingActionOrStatus = rows.filter(function(row) { return !row[5] || !row[6]; }).length;
  const invalidTargetRows = rows.filter(function(row) {
    const target = String(row[3] || '');
    return target && target !== 'HOLD / EXCLUDED' && target !== 'HOLD / REVIEW' && target.indexOf('OS_CUSTOMMADE') === -1 && target.indexOf('GitHub') === -1 && target.indexOf('GEEN DOELPAD') !== 0 && target.indexOf('HOLD') !== 0 && target.indexOf('Artist-') !== 0;
  }).length;
  const reviewRows = rows.filter(function(row) {
    return row[9] === 'ja' || String(row[8]).match(/owner|link|legal|finance|FIERCE|permission|review/i);
  }).length;
  const goForLiveMigration = mutatingRows === 0 && holdMutationRows === 0 && rowsMissingActionOrStatus === 0 && invalidTargetRows === 0 && manualReviewRows === 0 && conflictRows === 0;
  return {
    manualReviewRows: manualReviewRows,
    conflictRows: conflictRows,
    mutatingRows: mutatingRows,
    holdMutationRows: holdMutationRows,
    rowsMissingActionOrStatus: rowsMissingActionOrStatus,
    invalidTargetRows: invalidTargetRows,
    reviewRows: reviewRows,
    goForLiveMigration: goForLiveMigration,
    conclusion: goForLiveMigration ? 'GO voor live migratie na dry-run validatie' : 'NO-GO voor live migratie; GO voor DRY RUN logging en review',
  };
}

function isConflictRow_(row) {
  const status = String(row[6] || '');
  const risk = String(row[7] || '');
  const dependencies = String(row[8] || '');
  const note = String(row[13] || '');
  return risk === 'Kritiek' || status.indexOf('FIERCE') !== -1 || status.indexOf('UNEXPECTED') !== -1 || status.indexOf('HOLD') !== -1 || /conflict|FIERCE|onbekend|ontbreekt|blocked|geblokkeerd|uitsluiten/i.test(dependencies + ' ' + note);
}

function safeFolderName_(folder, fallback) {
  try {
    return folder.getName();
  } catch (error) {
    return fallback;
  }
}

function safeFolderId_(folder, fallback) {
  try {
    return folder.getId();
  } catch (error) {
    return fallback;
  }
}

function formatTimestamp_(date) {
  return Utilities.formatDate(date, MIGRATION_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
}

function logInfo_(message) {
  Logger.log(message);
}

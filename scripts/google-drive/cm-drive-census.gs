/*
 * CM DRIVE CENSUS SCRIPT V1
 * Entity: Custommade Agency Int. B.V.
 * Scope: live Google Drive root inventory
 * Mode: READ ONLY
 *
 * Doel:
 * - Inventariseer de echte Drive-structuur zonder aannames.
 * - Tel per map: submappen, bestanden, geschatte bestandsgrootte, laatste wijziging.
 * - Maak duidelijk welke mappen echte data bevatten en welke leeg/scriptmatig lijken.
 * - Produceer een Markdown-rapport en CSV-migratiematrix in de Apps Script logs.
 *
 * Veiligheid:
 * - Dit script wijzigt niets.
 * - Geen moveTo, setName, setSharing, remove, trash, createFolder, makeCopy.
 * - Output staat alleen in Logger. Kopieer handmatig naar Drive/GitHub als dat nodig is.
 */

const READ_ONLY_MODE = true;
const CENSUS_VERSION = 'CM DRIVE CENSUS SCRIPT V1';

// Officiële productie-root die Sophia heeft aangewezen.
const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const EXPECTED_ROOT_NAME = 'OS _CUSTOMMADE';

// Limieten om vastlopen te voorkomen. Verhoog later alleen als de eerste run stabiel is.
const MAX_FOLDERS = 1500;
const MAX_FILES_PER_FOLDER = 500;
const MAX_DEPTH = 10;
const LOG_CHUNK_SIZE = 45000;

const APPROVED_ROOTS = [
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
  '99_ARCHIVE'
];

const ARTIST_OPERATIONAL_SUBFOLDERS = [
  '01_ADMIN',
  '02_CONTRACT',
  '03_STRATEGY',
  '04_RELEASES',
  '05_BOOKING',
  '06_FINANCE',
  '07_SOCIALMEDIA',
  '08_PRESS_EPK',
  '09_ARCHIVE'
];

const ARTIST_LEGACY_SOCIALMEDIA_FOLDERS = [
  '07_CONTENT',
  'SOCIALMEDIA'
];

const LEGACY_ROOT_HINTS = [
  '00_INBOX',
  '01_ARTIST_MANAGEMENT',
  '02_MASTER_BOUTIQUE',
  '03_EXECUTIVE',
  '04_BUSINESS',
  '05_MARKETING',
  '06_PROJECTS',
  '07_ARCHIVE',
  '07_ ARCHIVE'
];

function runCmDriveCensus() {
  assertReadOnlyMode_();

  const startedAt = new Date();
  const root = DriveApp.getFolderById(ROOT_FOLDER_ID);
  const rootName = safe_(() => root.getName(), 'UNKNOWN_ROOT');

  const state = {
    startedAt: startedAt,
    rootId: ROOT_FOLDER_ID,
    rootName: rootName,
    rootUrl: safe_(() => root.getUrl(), ''),
    folders: [],
    filesAtRoot: [],
    duplicateFolderNames: {},
    warnings: [],
    scanStoppedEarly: false
  };

  if (rootName !== EXPECTED_ROOT_NAME) {
    state.warnings.push({
      risk: 'LOW',
      message: 'Rootnaam wijkt af van EXPECTED_ROOT_NAME',
      detail: 'Expected: ' + EXPECTED_ROOT_NAME + ' / Actual: ' + rootName
    });
  }

  scanFolder_(root, rootName, '', 0, state);

  const markdown = buildCensusReport_(state);
  const csv = buildMigrationMatrixCsv_(state);

  logLarge_('### CM_DRIVE_CENSUS_REPORT.md ###\n' + markdown);
  logLarge_('### CM_DRIVE_MIGRATION_MATRIX.csv ###\n' + csv);

  return markdown;
}

function scanFolder_(folder, name, parentPath, depth, state) {
  if (state.folders.length >= MAX_FOLDERS) {
    state.scanStoppedEarly = true;
    return;
  }

  const path = parentPath ? parentPath + '/' + name : name;
  const folderId = safe_(() => folder.getId(), '');
  const folderUrl = safe_(() => folder.getUrl(), '');
  const modified = safe_(() => folder.getLastUpdated(), null);
  const ownerEmail = safe_(() => folder.getOwner() ? folder.getOwner().getEmail() : '', '');
  const sharingAccess = safe_(() => String(folder.getSharingAccess()), 'UNKNOWN');
  const sharingPermission = safe_(() => String(folder.getSharingPermission()), 'UNKNOWN');

  const childFolders = iteratorToArray_(folder.getFolders(), MAX_FOLDERS);
  const files = iteratorToArray_(folder.getFiles(), MAX_FILES_PER_FOLDER);

  let totalFileSize = 0;
  let latestFileUpdate = modified;
  files.forEach(function(file) {
    totalFileSize += Number(safe_(() => file.getSize(), 0)) || 0;
    const fileUpdated = safe_(() => file.getLastUpdated(), null);
    if (fileUpdated && (!latestFileUpdate || fileUpdated > latestFileUpdate)) latestFileUpdate = fileUpdated;
  });

  const category = classifyFolder_(name, path, depth, files.length, childFolders.length);
  const advice = adviseFolder_(name, path, depth, files.length, childFolders.length, category);

  state.folders.push({
    path: path,
    id: folderId,
    url: folderUrl,
    parentPath: parentPath,
    depth: depth,
    name: name,
    subfolderCount: childFolders.length,
    fileCount: files.length,
    estimatedSizeBytes: totalFileSize,
    latestModified: latestFileUpdate,
    ownerEmail: ownerEmail,
    sharing: sharingAccess + ' / ' + sharingPermission,
    empty: childFolders.length === 0 && files.length === 0,
    category: category,
    advice: advice,
    status: advice === 'KEEP' ? 'KEEP' : 'REVIEW'
  });

  const normalizedName = normalize_(name);
  if (!state.duplicateFolderNames[normalizedName]) state.duplicateFolderNames[normalizedName] = [];
  state.duplicateFolderNames[normalizedName].push(path);

  if (depth === 0) {
    files.forEach(function(file) {
      state.filesAtRoot.push({
        name: safe_(() => file.getName(), 'UNKNOWN_FILE'),
        id: safe_(() => file.getId(), ''),
        url: safe_(() => file.getUrl(), ''),
        size: Number(safe_(() => file.getSize(), 0)) || 0,
        modified: safe_(() => file.getLastUpdated(), null)
      });
    });
  }

  if (depth >= MAX_DEPTH) return;

  childFolders.forEach(function(child) {
    scanFolder_(child, safe_(() => child.getName(), 'UNKNOWN_FOLDER'), path, depth + 1, state);
  });
}

function classifyFolder_(name, path, depth, fileCount, subfolderCount) {
  if (depth === 0) return 'ROOT';
  if (isDirectArtistManagementChild_(path, depth)) {
    if (ARTIST_OPERATIONAL_SUBFOLDERS.indexOf(name) >= 0) return 'STRUCTURE_ERROR_ARTIST_LAYER_MISSING';
    return 'ACTIVE_ARTIST_FOLDER';
  }
  if (isArtistManagementGrandchild_(path, depth) && ARTIST_LEGACY_SOCIALMEDIA_FOLDERS.indexOf(name) >= 0) {
    return 'LEGACY_SOCIALMEDIA_STRUCTURE';
  }
  if (depth === 1 && APPROVED_ROOTS.indexOf(name) >= 0) return 'APPROVED_ROOT';
  if (depth === 1 && LEGACY_ROOT_HINTS.indexOf(name) >= 0) return 'LEGACY_ROOT';
  if (fileCount > 0 || subfolderCount > 0) return 'DATA_OR_STRUCTURE';
  return 'EMPTY';
}

function isDirectArtistManagementChild_(path, depth) {
  return depth === 2 && /^(OS _CUSTOMMADE|OS_CUSTOMMADE)\/02_ARTIST_MANAGEMENT\/[^/]+$/.test(path);
}

function isArtistManagementGrandchild_(path, depth) {
  return depth === 3 && /^(OS _CUSTOMMADE|OS_CUSTOMMADE)\/02_ARTIST_MANAGEMENT\/[^/]+\/[^/]+$/.test(path);
}

function adviseFolder_(name, path, depth, fileCount, subfolderCount, category) {
  if (category === 'ROOT') return 'KEEP';
  if (category === 'APPROVED_ROOT') return 'KEEP';
  if (category === 'ACTIVE_ARTIST_FOLDER') return 'KEEP';
  if (category === 'STRUCTURE_ERROR_ARTIST_LAYER_MISSING') return 'REVIEW_ARTIST_LAYER_MISSING';
  if (category === 'LEGACY_SOCIALMEDIA_STRUCTURE') return 'REVIEW_MIGRATE_TO_07_SOCIALMEDIA';
  if (category === 'LEGACY_ROOT') return fileCount > 0 || subfolderCount > 0 ? 'REVIEW' : 'ARCHIVE';
  if (category === 'EMPTY') return 'REVIEW';
  if (/template/i.test(name)) return 'REVIEW';
  return 'UNKNOWN';
}

function buildCensusReport_(state) {
  const folders = state.folders;
  const rootLevel = folders.filter(function(row) { return row.depth === 1; });
  const emptyFolders = folders.filter(function(row) { return row.empty; });
  const foldersWithData = folders.filter(function(row) { return row.fileCount > 0; });
  const legacyRoots = rootLevel.filter(function(row) { return row.category === 'LEGACY_ROOT'; });
  const approvedRoots = rootLevel.filter(function(row) { return row.category === 'APPROVED_ROOT'; });
  const unknownRoots = rootLevel.filter(function(row) { return row.category !== 'APPROVED_ROOT' && row.category !== 'LEGACY_ROOT'; });
  const duplicates = getDuplicates_(state.duplicateFolderNames);
  const biggest = folders.slice().sort(function(a, b) { return b.estimatedSizeBytes - a.estimatedSizeBytes; }).slice(0, 30);
  const mostFiles = folders.slice().sort(function(a, b) { return b.fileCount - a.fileCount; }).slice(0, 30);

  const lines = [];
  lines.push('# CM DRIVE CENSUS REPORT');
  lines.push('');
  lines.push('## Samenvatting');
  lines.push('');
  lines.push('| Veld | Waarde |');
  lines.push('| --- | --- |');
  lines.push('| Script | ' + CENSUS_VERSION + ' |');
  lines.push('| Datum | ' + formatDate_(state.startedAt) + ' |');
  lines.push('| Rootnaam | ' + cleanCell_(state.rootName) + ' |');
  lines.push('| Root-ID | ' + state.rootId + ' |');
  lines.push('| Root-URL | ' + state.rootUrl + ' |');
  lines.push('| Read-only | JA |');
  lines.push('| Mappen geteld | ' + folders.length + ' |');
  lines.push('| Rootbestanden | ' + state.filesAtRoot.length + ' |');
  lines.push('| Approved roots gevonden | ' + approvedRoots.length + ' / ' + APPROVED_ROOTS.length + ' |');
  lines.push('| Legacy roots gevonden | ' + legacyRoots.length + ' |');
  lines.push('| Lege mappen | ' + emptyFolders.length + ' |');
  lines.push('| Mappen met bestanden | ' + foldersWithData.length + ' |');
  lines.push('| Mogelijke duplicaatnamen | ' + duplicates.length + ' |');
  lines.push('| Scan voortijdig gestopt | ' + (state.scanStoppedEarly ? 'JA' : 'NEE') + ' |');
  lines.push('');

  if (state.warnings.length) {
    lines.push('## Waarschuwingen');
    lines.push('');
    state.warnings.forEach(function(w) { lines.push('- **' + w.risk + '** ' + w.message + ' — ' + w.detail); });
    lines.push('');
  }

  lines.push('## Rootstructuur');
  lines.push('');
  lines.push('| Map | Categorie | Bestanden | Submappen | Laatst gewijzigd | Sharing | Advies |');
  lines.push('| --- | --- | ---: | ---: | --- | --- | --- |');
  rootLevel.forEach(function(row) {
    lines.push('| ' + cleanCell_(row.name) + ' | ' + row.category + ' | ' + row.fileCount + ' | ' + row.subfolderCount + ' | ' + formatDate_(row.latestModified) + ' | ' + cleanCell_(row.sharing) + ' | ' + row.advice + ' |');
  });
  lines.push('');

  lines.push('## Grootste mappen op directe bestandsgrootte');
  lines.push('');
  lines.push('| Pad | Bestanden | Submappen | Grootte | Advies |');
  lines.push('| --- | ---: | ---: | ---: | --- |');
  biggest.forEach(function(row) {
    lines.push('| ' + cleanCell_(row.path) + ' | ' + row.fileCount + ' | ' + row.subfolderCount + ' | ' + formatBytes_(row.estimatedSizeBytes) + ' | ' + row.advice + ' |');
  });
  lines.push('');

  lines.push('## Mappen met meeste directe bestanden');
  lines.push('');
  lines.push('| Pad | Bestanden | Submappen | Laatst gewijzigd | Advies |');
  lines.push('| --- | ---: | ---: | --- | --- |');
  mostFiles.forEach(function(row) {
    lines.push('| ' + cleanCell_(row.path) + ' | ' + row.fileCount + ' | ' + row.subfolderCount + ' | ' + formatDate_(row.latestModified) + ' | ' + row.advice + ' |');
  });
  lines.push('');

  lines.push('## Legacy roots');
  lines.push('');
  if (!legacyRoots.length) {
    lines.push('Geen legacy roots gevonden op rootniveau.');
  } else {
    lines.push('| Pad | Bestanden | Submappen | Advies |');
    lines.push('| --- | ---: | ---: | --- |');
    legacyRoots.forEach(function(row) { lines.push('| ' + cleanCell_(row.path) + ' | ' + row.fileCount + ' | ' + row.subfolderCount + ' | ' + row.advice + ' |'); });
  }
  lines.push('');

  lines.push('## Mogelijke duplicaten');
  lines.push('');
  if (!duplicates.length) {
    lines.push('Geen dubbele mapnamen gevonden binnen scanlimiet.');
  } else {
    lines.push('| Naam | Aantal | Paden |');
    lines.push('| --- | ---: | --- |');
    duplicates.slice(0, 100).forEach(function(dupe) { lines.push('| ' + cleanCell_(dupe.name) + ' | ' + dupe.paths.length + ' | ' + cleanCell_(dupe.paths.join(' ; ')) + ' |'); });
  }
  lines.push('');

  lines.push('## Rootbestanden');
  lines.push('');
  if (!state.filesAtRoot.length) {
    lines.push('Geen bestanden direct in root gevonden.');
  } else {
    lines.push('| Bestand | Grootte | Laatst gewijzigd | URL |');
    lines.push('| --- | ---: | --- | --- |');
    state.filesAtRoot.forEach(function(file) { lines.push('| ' + cleanCell_(file.name) + ' | ' + formatBytes_(file.size) + ' | ' + formatDate_(file.modified) + ' | ' + file.url + ' |'); });
  }
  lines.push('');

  lines.push('## REVIEW REQUIRED');
  lines.push('');
  lines.push('- Legacy roots met inhoud niet verplaatsen zonder migratiematrix en owner review.');
  lines.push('- Nieuwe roots die leeg zijn kunnen wel leidend blijven, maar krijgen pas waarde na gecontroleerde migratie.');
  lines.push('- Rootbestanden eerst classificeren voordat ze naar 00_ADMIN, 04_DEALS, 06_FINANCE of 07_LEGAL gaan.');
  lines.push('- Duplicaten nooit automatisch mergen.');
  lines.push('');

  return lines.join('\n');
}

function buildMigrationMatrixCsv_(state) {
  const rows = [];
  rows.push([
    'Huidig pad',
    'Map-ID',
    'Nieuwe bestemming',
    'Categorie',
    'Aantal bestanden',
    'Aantal submappen',
    'Geschatte directe grootte bytes',
    'Laatst gewijzigd',
    'Sharing',
    'Advies',
    'Status'
  ]);

  state.folders.forEach(function(row) {
    rows.push([
      row.path,
      row.id,
      '',
      row.category,
      row.fileCount,
      row.subfolderCount,
      row.estimatedSizeBytes,
      formatDate_(row.latestModified),
      row.sharing,
      row.advice,
      row.status
    ]);
  });

  return rows.map(function(row) { return row.map(csvCell_).join(','); }).join('\n');
}

function getDuplicates_(duplicateMap) {
  return Object.keys(duplicateMap)
    .filter(function(name) { return duplicateMap[name].length > 1; })
    .map(function(name) { return { name: name, paths: duplicateMap[name] }; });
}

function iteratorToArray_(iterator, limit) {
  const result = [];
  while (iterator.hasNext() && result.length < limit) {
    result.push(iterator.next());
  }
  return result;
}

function assertReadOnlyMode_() {
  if (READ_ONLY_MODE !== true) {
    throw new Error('READ_ONLY_MODE must be true. Census stopped before Drive access.');
  }
}

function normalize_(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function safe_(fn, fallback) {
  try {
    return fn();
  } catch (error) {
    return fallback;
  }
}

function formatDate_(date) {
  if (!date) return '';
  return Utilities.formatDate(new Date(date), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
}

function formatBytes_(bytes) {
  const value = Number(bytes) || 0;
  if (value >= 1073741824) return (value / 1073741824).toFixed(2) + ' GB';
  if (value >= 1048576) return (value / 1048576).toFixed(2) + ' MB';
  if (value >= 1024) return (value / 1024).toFixed(2) + ' KB';
  return value + ' B';
}

function cleanCell_(value) {
  return String(value || '').replace(/\|/g, '/').replace(/\n/g, ' ').replace(/\r/g, ' ');
}

function csvCell_(value) {
  const text = String(value === null || value === undefined ? '' : value);
  return '"' + text.replace(/"/g, '""') + '"';
}

function logLarge_(text) {
  const str = String(text || '');
  for (let i = 0; i < str.length; i += LOG_CHUNK_SIZE) {
    Logger.log(str.substring(i, i + LOG_CHUNK_SIZE));
  }
}
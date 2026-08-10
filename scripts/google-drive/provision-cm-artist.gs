/**
 * CM ARTIST PROVISIONING ENGINE — V1.0
 *
 * Maakt per artist één gekoppelde operationele workspace:
 * - 9-folder Drive-structuur conform ARTIST_FOLDER_STANDARD
 * - mandatory onboarding templates uit centrale CM Template Library
 * - 00_START_HERE_[ARTIST] als werkkopie van CLIENT_ONBOARDING_TEMPLATE
 * - machine-readable _CM_ARTIST_MANIFEST.json
 * - ClickUp artist parent task + lean onboarding subtasks
 * - Drive IDs ↔ ClickUp IDs in manifest
 *
 * GOVERNANCE
 * GitHub = canonical specs/governance
 * Drive = dossier/werkdocumenten/bewijs/deliverables
 * ClickUp = execution/status/assignee/due date/priority/blockers
 * Moneybird = financiële waarheid
 *
 * VEILIGHEID
 * - DRY_RUN staat standaard aan.
 * - Bestaande artistfolders/templates worden niet overschreven.
 * - ClickUp token staat NOOIT in GitHub; gebruik Script Properties.
 * - Script is idempotent via _CM_ARTIST_MANIFEST.json en bestandsnamen.
 */

const CM_ARTIST_PROVISION_DRY_RUN = true;
const CM_ARTIST_OS_ROOT = 'OS_CUSTOMMADE';
const CM_ARTIST_ROOT_FOLDER = '02_ARTIST_MANAGEMENT';
const CM_TEMPLATE_LIBRARY_PATH = ['00_ADMIN', '03_TEMPLATES'];
const CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID = '901523770695';
const CM_CLICKUP_BASE_URL = 'https://api.clickup.com/api/v2';
const CM_ARTIST_MANIFEST_NAME = '_CM_ARTIST_MANIFEST.json';

const CM_ARTIST_FOLDERS = [
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

// Alleen de lean mandatory onboarding-set. Conditionele templates worden via aparte triggers geprovisioneerd.
const CM_ARTIST_ONBOARDING_TEMPLATES = [
  { master: 'CLIENT_ONBOARDING_TEMPLATE', targetFolder: '01_ADMIN', targetName: '00_START_HERE_{ARTIST}' },
  { master: 'CLIENT_PROFILE_TEMPLATE', targetFolder: '01_ADMIN', targetName: 'CLIENT_PROFILE_{ARTIST}' },
  { master: 'CONTACT_SHEET_TEMPLATE', targetFolder: '01_ADMIN', targetName: 'CONTACT_SHEET_{ARTIST}' },
  { master: 'EMAIL_INSTRUCTIONS_TEMPLATE', targetFolder: '01_ADMIN', targetName: 'EMAIL_INSTRUCTIONS_{ARTIST}' },
  { master: 'DO_NOTS_TEMPLATE', targetFolder: '01_ADMIN', targetName: 'DO_NOTS_{ARTIST}' },
  { master: 'CONTRACT_SUMMARY_TEMPLATE', targetFolder: '02_CONTRACT', targetName: 'CONTRACT_SUMMARY_{ARTIST}', conditional: 'contractReady' },
];

const CM_ARTIST_ACTIVE_MANAGEMENT_TEMPLATES = [
  { master: 'ARTIST_ROADMAP_TEMPLATE', targetFolder: '03_STRATEGY', targetName: 'ARTIST_ROADMAP_{ARTIST}' },
  { master: 'KPI_TEMPLATE', targetFolder: '03_STRATEGY', targetName: 'KPI_{ARTIST}' },
  { master: 'MONTHLY_REPORT_TEMPLATE', targetFolder: '03_STRATEGY', targetName: 'MONTHLY_REPORT_{ARTIST}' },
  { master: 'JAARPLAN_TEMPLATE', targetFolder: '03_STRATEGY', targetName: 'JAARPLAN_{ARTIST}', conditional: 'yearHorizon' },
];

// Lean workstreams: ClickUp beheert execution, niet Drive.
const CM_ARTIST_ONBOARDING_WORKSTREAMS = [
  { key: 'ENGAGEMENT', name: '01 — Engagement, contract & scope', gates: ['P01', 'P02', 'P03'] },
  { key: 'FINANCE', name: '02 — Billing / Moneybird readiness', gates: ['P04'] },
  { key: 'DRIVE', name: '03 — Drive workspace & template readiness', gates: ['P05'] },
  { key: 'CLICKUP', name: '04 — ClickUp workspace readiness', gates: ['P06'] },
  { key: 'STAKEHOLDERS', name: '05 — Stakeholders & communication', gates: ['P07', 'P08', 'P10'] },
  { key: 'DOCS_RIGHTS', name: '06 — Documents, rights & open inputs', gates: ['P09', 'P13'] },
  { key: 'STRATEGY', name: '07 — KPI baseline & roadmap start', gates: ['P11', 'P12'] },
  { key: 'GO_LIVE', name: '08 — Kickoff & go-live approval', gates: ['P14'] },
];

/**
 * Hoofdfunctie.
 * Voorbeeld vanuit Apps Script editor:
 * provisionCmArtist({
 *   artistName: 'ARTIST NAAM',
 *   contractReady: true,
 *   activeManagement: true,
 *   yearHorizon: true
 * });
 */
function provisionCmArtist(options) {
  const cfg = cmArtistValidateOptions_(options || {});
  const report = {
    dryRun: CM_ARTIST_PROVISION_DRY_RUN,
    artistName: cfg.artistName,
    artistId: null,
    drive: { rootId: null, createdFolders: [], existingFolders: [], createdFiles: [], existingFiles: [] },
    clickup: { parentTaskId: null, createdTasks: [], existingTasks: [] },
    errors: [],
  };

  try {
    const osRoot = cmArtistFindFolderByName_(DriveApp.getRootFolder(), CM_ARTIST_OS_ROOT, true);
    const artistRootLane = cmArtistFindFolderByName_(osRoot, CM_ARTIST_ROOT_FOLDER, true);
    const templateLibrary = cmArtistFindPath_(osRoot, CM_TEMPLATE_LIBRARY_PATH, true);

    const artistFolder = cmArtistFindFolderByName_(artistRootLane, cfg.artistName, false);
    const existingManifest = artistFolder ? cmArtistReadManifest_(artistFolder) : null;
    const artistId = existingManifest && existingManifest.ARTIST_ID
      ? existingManifest.ARTIST_ID
      : cmArtistGenerateId_(cfg.artistName);
    report.artistId = artistId;

    if (CM_ARTIST_PROVISION_DRY_RUN) {
      cmArtistPlanDryRun_(artistFolder, cfg, report);
      Logger.log(JSON.stringify(report, null, 2));
      return report;
    }

    const liveArtistFolder = artistFolder || artistRootLane.createFolder(cfg.artistName);
    report.drive.rootId = liveArtistFolder.getId();

    const folders = {};
    CM_ARTIST_FOLDERS.forEach(function(name) {
      const existing = cmArtistFindFolderByName_(liveArtistFolder, name, false);
      folders[name] = existing || liveArtistFolder.createFolder(name);
      (existing ? report.drive.existingFolders : report.drive.createdFolders).push(name);
    });

    const manifest = existingManifest || {
      schema: 'CM_ARTIST_MANIFEST_V1',
      ARTIST_ID: artistId,
      ARTIST_NAME: cfg.artistName,
      DRIVE_ROOT_ID: liveArtistFolder.getId(),
      CLICKUP_ARTIST_ID: null,
      templates: {},
      clickup_tasks: {},
      created_at: new Date().toISOString(),
      LAST_SYNC_AT: null,
    };

    cmArtistProvisionTemplateSet_(CM_ARTIST_ONBOARDING_TEMPLATES, cfg, templateLibrary, folders, manifest, report);

    if (cfg.activeManagement) {
      cmArtistProvisionTemplateSet_(CM_ARTIST_ACTIVE_MANAGEMENT_TEMPLATES, cfg, templateLibrary, folders, manifest, report);
    }

    const clickupParent = cmArtistEnsureClickUpParent_(cfg, artistId, liveArtistFolder, manifest);
    manifest.CLICKUP_ARTIST_ID = clickupParent.id;
    report.clickup.parentTaskId = clickupParent.id;

    CM_ARTIST_ONBOARDING_WORKSTREAMS.forEach(function(workstream) {
      const task = cmArtistEnsureClickUpSubtask_(cfg, artistId, clickupParent.id, workstream, manifest, liveArtistFolder);
      manifest.clickup_tasks[workstream.key] = {
        CLICKUP_TASK_ID: task.id,
        gates: workstream.gates,
        name: workstream.name,
      };
      (task.__created ? report.clickup.createdTasks : report.clickup.existingTasks).push(workstream.name);
    });

    manifest.LAST_SYNC_AT = new Date().toISOString();
    manifest.contractReady = cfg.contractReady;
    manifest.activeManagement = cfg.activeManagement;
    manifest.yearHorizon = cfg.yearHorizon;
    cmArtistWriteManifest_(liveArtistFolder, manifest);

    Logger.log(JSON.stringify(report, null, 2));
    return report;
  } catch (err) {
    report.errors.push(err.message || String(err));
    Logger.log(JSON.stringify(report, null, 2));
    throw err;
  }
}

/** Alleen Drive + ClickUp status opnieuw controleren/synchroniseren vanuit manifest. */
function syncCmArtistProvisioning(artistName) {
  if (!artistName) throw new Error('artistName is verplicht.');
  return provisionCmArtist({ artistName: artistName });
}

/**
 * Provision een conditionele template op trigger zonder de volledige artistset opnieuw te kopiëren.
 * Voorbeelden: RELEASE_STRATEGY_TEMPLATE, RELEASE_KICKOFF_TEMPLATE, DEAL_MEMO_TEMPLATE.
 */
function provisionCmArtistConditionalTemplate(artistName, masterName, targetFolderName, targetName) {
  if (CM_ARTIST_PROVISION_DRY_RUN) {
    Logger.log('[DRY_RUN] Would provision ' + masterName + ' for ' + artistName + ' → ' + targetFolderName + '/' + targetName);
    return;
  }
  const osRoot = cmArtistFindFolderByName_(DriveApp.getRootFolder(), CM_ARTIST_OS_ROOT, true);
  const artistLane = cmArtistFindFolderByName_(osRoot, CM_ARTIST_ROOT_FOLDER, true);
  const artistFolder = cmArtistFindFolderByName_(artistLane, artistName, false);
  if (!artistFolder) throw new Error('Artistfolder niet gevonden: ' + artistName);
  const targetFolder = cmArtistFindFolderByName_(artistFolder, targetFolderName, false);
  if (!targetFolder) throw new Error('Artist subfolder niet gevonden: ' + targetFolderName);
  const templateLibrary = cmArtistFindPath_(osRoot, CM_TEMPLATE_LIBRARY_PATH, true);
  const master = cmArtistFindFileRecursive_(templateLibrary, masterName);
  if (!master) throw new Error('Canonical master niet gevonden: ' + masterName);
  if (targetFolder.getFilesByName(targetName).hasNext()) return;
  master.makeCopy(targetName, targetFolder);
}

function cmArtistValidateOptions_(options) {
  const name = String(options.artistName || '').trim();
  if (!name) throw new Error('artistName is verplicht.');
  if (/[\\\/]/.test(name)) throw new Error('artistName bevat een ongeldig padteken.');
  return {
    artistName: name,
    contractReady: options.contractReady === true,
    activeManagement: options.activeManagement === true,
    yearHorizon: options.yearHorizon === true,
  };
}

function cmArtistPlanDryRun_(artistFolder, cfg, report) {
  report.drive.rootId = artistFolder ? artistFolder.getId() : '[WOULD_CREATE]';
  CM_ARTIST_FOLDERS.forEach(function(name) {
    const exists = artistFolder && cmArtistFindFolderByName_(artistFolder, name, false);
    (exists ? report.drive.existingFolders : report.drive.createdFolders).push(name);
  });
  CM_ARTIST_ONBOARDING_TEMPLATES.concat(cfg.activeManagement ? CM_ARTIST_ACTIVE_MANAGEMENT_TEMPLATES : [])
    .filter(function(t) { return !t.conditional || cfg[t.conditional] === true; })
    .forEach(function(t) {
      report.drive.createdFiles.push(cmArtistResolveTargetName_(t.targetName, cfg.artistName));
    });
  report.clickup.createdTasks.push('[WOULD_CREATE/CONFIRM] artist parent + ' + CM_ARTIST_ONBOARDING_WORKSTREAMS.length + ' workstreams');
}

function cmArtistProvisionTemplateSet_(templateSet, cfg, templateLibrary, folders, manifest, report) {
  templateSet.forEach(function(t) {
    if (t.conditional && cfg[t.conditional] !== true) return;
    const targetFolder = folders[t.targetFolder];
    if (!targetFolder) throw new Error('Target folder ontbreekt: ' + t.targetFolder);
    const targetName = cmArtistResolveTargetName_(t.targetName, cfg.artistName);
    const existing = targetFolder.getFilesByName(targetName);
    let file;
    if (existing.hasNext()) {
      file = existing.next();
      report.drive.existingFiles.push(targetName);
    } else {
      const master = cmArtistFindFileRecursive_(templateLibrary, t.master);
      if (!master) throw new Error('Canonical template master niet gevonden: ' + t.master);
      file = master.makeCopy(targetName, targetFolder);
      report.drive.createdFiles.push(targetName);
    }
    manifest.templates[t.master] = {
      TEMPLATE_TYPE: t.master,
      DRIVE_FILE_ID: file.getId(),
      target_folder: t.targetFolder,
      target_name: targetName,
    };
  });
}

function cmArtistEnsureClickUpParent_(cfg, artistId, artistFolder, manifest) {
  if (manifest.CLICKUP_ARTIST_ID) {
    const existing = cmClickUpRequest_('get', '/task/' + manifest.CLICKUP_ARTIST_ID, null, true);
    if (existing && existing.id) return existing;
  }

  const payload = {
    name: cfg.artistName,
    description: [
      'CM ARTIST RECORD',
      'ARTIST_ID: ' + artistId,
      'DRIVE_ROOT_ID: ' + artistFolder.getId(),
      'DRIVE_URL: ' + artistFolder.getUrl(),
      'Execution/status lives in ClickUp. Documents/evidence live in Drive.',
    ].join('\n'),
    status: 'onboarding',
    priority: 2,
  };
  const created = cmClickUpRequest_('post', '/list/' + CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID + '/task', payload, false);
  created.__created = true;
  return created;
}

function cmArtistEnsureClickUpSubtask_(cfg, artistId, parentId, workstream, manifest, artistFolder) {
  const known = manifest.clickup_tasks && manifest.clickup_tasks[workstream.key];
  if (known && known.CLICKUP_TASK_ID) {
    const existing = cmClickUpRequest_('get', '/task/' + known.CLICKUP_TASK_ID, null, true);
    if (existing && existing.id) return existing;
  }

  const payload = {
    name: workstream.name,
    parent: parentId,
    description: [
      'ARTIST_ID: ' + artistId,
      'Onboarding gates: ' + workstream.gates.join(', '),
      'Drive: ' + artistFolder.getUrl(),
      'Update execution status ONLY in ClickUp.',
    ].join('\n'),
    status: 'to do',
    priority: 2,
  };
  const created = cmClickUpRequest_('post', '/list/' + CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID + '/task', payload, false);
  created.__created = true;
  return created;
}

function cmClickUpRequest_(method, path, payload, allow404) {
  const token = PropertiesService.getScriptProperties().getProperty('CLICKUP_API_TOKEN');
  if (!token) throw new Error('Script Property CLICKUP_API_TOKEN ontbreekt. Geen token in code opslaan.');
  const params = {
    method: method,
    muteHttpExceptions: true,
    headers: { Authorization: token, 'Content-Type': 'application/json' },
  };
  if (payload !== null && payload !== undefined) params.payload = JSON.stringify(payload);
  const response = UrlFetchApp.fetch(CM_CLICKUP_BASE_URL + path, params);
  const code = response.getResponseCode();
  if (allow404 && code === 404) return null;
  if (code < 200 || code >= 300) {
    throw new Error('ClickUp HTTP ' + code + ': ' + response.getContentText());
  }
  return JSON.parse(response.getContentText() || '{}');
}

function cmArtistGenerateId_(artistName) {
  const slug = artistName.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 20) || 'ARTIST';
  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Europe/Amsterdam', 'yyyyMMdd');
  const entropy = Utilities.getUuid().replace(/-/g, '').slice(0, 6).toUpperCase();
  return 'ART-' + stamp + '-' + slug + '-' + entropy;
}

function cmArtistResolveTargetName_(pattern, artistName) {
  return pattern.replace('{ARTIST}', artistName.toUpperCase());
}

function cmArtistFindFolderByName_(parent, name, required) {
  const it = parent.getFoldersByName(name);
  if (it.hasNext()) return it.next();
  if (required) throw new Error('Vereiste Drive-map niet gevonden: ' + name);
  return null;
}

function cmArtistFindPath_(start, parts, required) {
  let current = start;
  parts.forEach(function(part) {
    current = cmArtistFindFolderByName_(current, part, required);
  });
  return current;
}

function cmArtistFindFileRecursive_(folder, fileName) {
  const direct = folder.getFilesByName(fileName);
  if (direct.hasNext()) return direct.next();
  const folders = folder.getFolders();
  while (folders.hasNext()) {
    const found = cmArtistFindFileRecursive_(folders.next(), fileName);
    if (found) return found;
  }
  return null;
}

function cmArtistReadManifest_(artistFolder) {
  const files = artistFolder.getFilesByName(CM_ARTIST_MANIFEST_NAME);
  if (!files.hasNext()) return null;
  const text = files.next().getBlob().getDataAsString('UTF-8');
  try { return JSON.parse(text); } catch (e) { throw new Error('Artist manifest bevat ongeldige JSON.'); }
}

function cmArtistWriteManifest_(artistFolder, manifest) {
  const content = JSON.stringify(manifest, null, 2);
  const files = artistFolder.getFilesByName(CM_ARTIST_MANIFEST_NAME);
  if (files.hasNext()) {
    files.next().setContent(content);
  } else {
    artistFolder.createFile(CM_ARTIST_MANIFEST_NAME, content, MimeType.PLAIN_TEXT);
  }
}

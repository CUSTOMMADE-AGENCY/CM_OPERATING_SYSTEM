/*
 * CM DRIVE READINESS AUDIT SCRIPT V1
 *
 * Doel:
 * Read-only audit van de live Google Drive-root OS_CUSTOMMADE tegen CM OS Baseline V1.0.
 *
 * Veiligheidsprincipe:
 * Dit script wijzigt niets in Google Drive. Het leest, vergelijkt en genereert een Markdown-rapport
 * in de Apps Script logs. Kopieer de output handmatig naar Drive of GitHub wanneer review nodig is.
 *
 * Verboden in deze versie:
 * - bestanden of mappen verplaatsen
 * - bestanden of mappen hernoemen
 * - bestanden of mappen verwijderen
 * - rechten aanpassen
 * - mappen of bestanden aanmaken
 * - Make activeren
 */

const READ_ONLY_MODE = true;
const AUDIT_VERSION = 'CM DRIVE READINESS AUDIT SCRIPT V1';
const AUDIT_ROOT_NAME = 'OS_CUSTOMMADE';
const AUDIT_ROOT_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk';
const MAX_FOLDER_SCAN = 1500;
const MAX_FILE_SCAN = 3000;
const ENABLE_SHARING_AUDIT = true;

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

const FORBIDDEN_ROOTS = [
  '00_INBOX',
  '01_ARTIST_MANAGEMENT',
  '02_MASTER_BOUTIQUE',
  '03_EXECUTIVE',
  '04_BUSINESS',
  '05_MARKETING',
  '06_PROJECTS',
  '07_ARCHIVE'
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

const ARTIST_REQUIRED_SUBFOLDERS = ARTIST_OPERATIONAL_SUBFOLDERS.slice();

const ARTIST_FORBIDDEN_STATUS_LAYERS = [
  '01_ACTIVE',
  '02_ONBOARDING',
  '03_PROSPECTS',
  '04_ON_HOLD',
  '05_OFFBOARDED'
];

const ARTIST_LEGACY_SOCIALMEDIA_FOLDERS = [
  '07_CONTENT',
  'SOCIALMEDIA'
];

const DEAL_REQUIRED_SUBFOLDERS = [
  '00_START_HIER',
  '01_RECHTEN_REGISTER',
  '02_CONTRACTEN_BEWIJS',
  '03_WAARDERING_VERKOOPPAKKET',
  '04_OUTREACH_CLICKUP',
  '99_ARCHIEF'
];

const APPROVAL_REGISTER_PATH = [
  'OS_CUSTOMMADE',
  '07_LEGAL',
  'APPROVALS',
  'CM_APPROVAL_REGISTER'
];

function runCmDriveReadinessAudit() {
  assertReadOnlyMode_();

  const startedAt = new Date();
  const audit = createAuditState_(startedAt);

  try {
    const root = DriveApp.getFolderById(AUDIT_ROOT_ID);
    audit.rootId = root.getId();
    audit.rootUrl = root.getUrl();

    if (root.getName() !== AUDIT_ROOT_NAME) {
      addFinding_(audit, 'ROOT', 'LOW', 'Rootfoldernaam wijkt af van verwachte naam', root.getName(), 'Controleer of de vaste folder-ID nog naar de officiële productie-root verwijst. Audit gaat read-only verder.');
    }

    auditRoot_(audit, root);
    auditArtistManagement_(audit, root);
    auditDeals_(audit, root);
    auditClients_(audit, root);
    auditLegal_(audit, root);
    auditFinance_(audit, root);
    auditTemplateReadiness_(audit, root);
    auditDuplicates_(audit, root);
    auditLooseFiles_(audit, root);
    auditArchive_(audit, root);

    if (ENABLE_SHARING_AUDIT) {
      auditSharing_(audit, root);
    }
  } catch (error) {
    addFinding_(audit, 'SCRIPT', 'CRITICAL', 'Audit script error', 'Apps Script runtime', String(error && error.stack ? error.stack : error));
  }

  finalizeAudit_(audit);
}

function createAuditState_(startedAt) {
  return {
    version: AUDIT_VERSION,
    startedAt: startedAt,
    finishedAt: null,
    rootId: '',
    rootUrl: '',
    folderCount: 0,
    fileCount: 0,
    findings: [],
    sections: {
      ROOT: createSection_('ROOT'),
      ARTIST_MANAGEMENT: createSection_('ARTIST MANAGEMENT'),
      DEALS: createSection_('DEALS'),
      CLIENTS: createSection_('CLIENTS'),
      LEGAL: createSection_('LEGAL'),
      FINANCE: createSection_('FINANCE'),
      TEMPLATE_COMPLIANCE: createSection_('TEMPLATE COMPLIANCE'),
      DUPLICATES: createSection_('DUPLICATEN'),
      SHARING: createSection_('SHARING'),
      FILE_QUALITY: createSection_('FILE QUALITY'),
      ARCHIVE: createSection_('ARCHIVE'),
      SCRIPT: createSection_('SCRIPT')
    }
  };
}

function createSection_(name) {
  return { name: name, checks: 0, passed: 0, warnings: 0, failed: 0 };
}

function auditRoot_(audit, root) {
  const section = 'ROOT';
  pass_(audit, section, 'OS_CUSTOMMADE bestaat', root.getName(), root.getUrl());

  const rootChildren = listChildFolders_(root);
  const childNames = rootChildren.map(function(folder) { return folder.getName(); });

  APPROVED_ROOTS.forEach(function(name) {
    if (childNames.indexOf(name) >= 0) {
      pass_(audit, section, 'Goedgekeurde root aanwezig', name, getFirstFolderUrlByName_(rootChildren, name));
    } else {
      addFinding_(audit, section, 'CRITICAL', 'Goedgekeurde root ontbreekt', rootPath_(name), 'Maak geen automatische folder aan. Voeg toe aan cleanup-plan met approval.');
    }
  });

  FORBIDDEN_ROOTS.forEach(function(name) {
    if (childNames.indexOf(name) >= 0) {
      addFinding_(audit, section, 'HIGH', 'Verboden/deprecated root aanwezig binnen OS_CUSTOMMADE', rootPath_(name), 'Markeer REVIEW_REQUIRED. Niet automatisch verwijderen.');
    } else {
      pass_(audit, section, 'Verboden root niet aanwezig', name, '');
    }
  });

  childNames.forEach(function(name) {
    if (APPROVED_ROOTS.indexOf(name) === -1 && FORBIDDEN_ROOTS.indexOf(name) === -1) {
      addFinding_(audit, section, 'MEDIUM', 'Onbekende rootmap onder OS_CUSTOMMADE', rootPath_(name), 'Owner review vereist.');
    }
  });

  const duplicateNames = findDuplicateNames_(childNames);
  duplicateNames.forEach(function(name) {
    addFinding_(audit, section, 'HIGH', 'Dubbele rootmapnaam gevonden', rootPath_(name), 'Geen merge/delete. Eerst owner review.');
  });
}

function auditArtistManagement_(audit, root) {
  const section = 'ARTIST_MANAGEMENT';
  const artistRoot = getSingleChildFolder_(root, '02_ARTIST_MANAGEMENT');

  if (!artistRoot) {
    addFinding_(audit, section, 'CRITICAL', 'Artist Management root ontbreekt', rootPath_('02_ARTIST_MANAGEMENT'), 'Geen artist-audit mogelijk.');
    return;
  }

  const artistFolders = listChildFolders_(artistRoot);
  const artistNames = artistFolders.map(function(folder) { return folder.getName(); });

  findDuplicateNames_(artistNames).forEach(function(name) {
    addFinding_(audit, section, 'HIGH', 'Dubbele artistfoldernaam', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', name]), 'Owner review vereist.');
  });

  artistFolders.forEach(function(artistFolder) {
    const artistName = artistFolder.getName();

    if (ARTIST_OPERATIONAL_SUBFOLDERS.indexOf(artistName) >= 0) {
      addFinding_(audit, section, 'CRITICAL', 'Artist layer missing', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', artistName]), 'Operationele submappen mogen niet direct onder 02_ARTIST_MANAGEMENT staan. Gebruik OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/' + artistName + '.');
      return;
    }

    if (ARTIST_FORBIDDEN_STATUS_LAYERS.indexOf(artistName) >= 0) {
      addFinding_(audit, section, 'CRITICAL', 'Statuslaag gevonden onder Artist Management', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', artistName]), 'Geen statuslagen in Drive. Status en Pipeline staan in ClickUp.');
      return;
    }

    const subfolders = listChildFolders_(artistFolder).map(function(folder) { return folder.getName(); });

    ARTIST_REQUIRED_SUBFOLDERS.forEach(function(required) {
      if (subfolders.indexOf(required) >= 0) {
        pass_(audit, section, 'Artist subfolder aanwezig', artistName + '/' + required, '');
      } else {
        addFinding_(audit, section, 'HIGH', 'Artist subfolder ontbreekt', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', artistName, required]), 'Toevoegen aan repair-plan; niet automatisch aanmaken.');
      }
    });

    ARTIST_LEGACY_SOCIALMEDIA_FOLDERS.forEach(function(legacyFolder) {
      if (subfolders.indexOf(legacyFolder) >= 0) {
        addFinding_(audit, section, 'MEDIUM', 'Legacy socialmedia structure: migration required', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', artistName, legacyFolder]), 'Review en mapping naar 07_SOCIALMEDIA. Niet automatisch mergen.');
      }
    });

    const looseFiles = listChildFiles_(artistFolder, 25);
    looseFiles.forEach(function(file) {
      addFinding_(audit, 'FILE_QUALITY', 'MEDIUM', 'Los bestand direct in artist root', pathJoin_(['OS_CUSTOMMADE', '02_ARTIST_MANAGEMENT', artistName, file.getName()]), 'Niet verplaatsen. Classificeer via owner review.');
    });
  });
}

function auditDeals_(audit, root) {
  const section = 'DEALS';
  const dealsRoot = getSingleChildFolder_(root, '04_DEALS');

  if (!dealsRoot) {
    addFinding_(audit, section, 'CRITICAL', '04_DEALS ontbreekt', rootPath_('04_DEALS'), 'Geen deal-audit mogelijk.');
    return;
  }

  pass_(audit, section, '04_DEALS bestaat', 'OS_CUSTOMMADE/04_DEALS', dealsRoot.getUrl());

  const dealFolders = listChildFolders_(dealsRoot);
  const dealNames = dealFolders.map(function(folder) { return folder.getName(); });

  findDuplicateNames_(dealNames).forEach(function(name) {
    addFinding_(audit, section, 'HIGH', 'Dubbele dealcase naam', pathJoin_(['OS_CUSTOMMADE', '04_DEALS', name]), 'Owner review vereist.');
  });

  dealFolders.forEach(function(dealFolder) {
    const dealName = dealFolder.getName();
    const subfolders = listChildFolders_(dealFolder).map(function(folder) { return folder.getName(); });

    DEAL_REQUIRED_SUBFOLDERS.forEach(function(required) {
      if (subfolders.indexOf(required) >= 0) {
        pass_(audit, section, 'Deal subfolder aanwezig', dealName + '/' + required, '');
      } else {
        addFinding_(audit, section, 'HIGH', 'Deal subfolder ontbreekt', pathJoin_(['OS_CUSTOMMADE', '04_DEALS', dealName, required]), 'Toevoegen aan repair-plan; niet automatisch aanmaken.');
      }
    });

    ['DATA_ROOM', 'LOI', 'APA', 'CLOSING', 'SUCCESS_FEE'].forEach(function(ddFolder) {
      if (subfolders.indexOf(ddFolder) >= 0) {
        addFinding_(audit, section, 'LOW', 'Due diligence fase-map aangetroffen', pathJoin_(['OS_CUSTOMMADE', '04_DEALS', dealName, ddFolder]), 'Controleer of dealfase dit rechtvaardigt.');
      }
    });

    listChildFiles_(dealFolder, 25).forEach(function(file) {
      addFinding_(audit, 'FILE_QUALITY', 'MEDIUM', 'Los bestand direct in dealcase root', pathJoin_(['OS_CUSTOMMADE', '04_DEALS', dealName, file.getName()]), 'Niet verplaatsen. Classificeer via owner review.');
    });
  });
}

function auditClients_(audit, root) {
  const section = 'CLIENTS';
  const clientsRoot = getSingleChildFolder_(root, '03_CLIENTS');
  if (!clientsRoot) {
    addFinding_(audit, section, 'CRITICAL', '03_CLIENTS ontbreekt', rootPath_('03_CLIENTS'), 'Geen clients-audit mogelijk.');
    return;
  }

  pass_(audit, section, '03_CLIENTS bestaat', 'OS_CUSTOMMADE/03_CLIENTS', clientsRoot.getUrl());

  const suspiciousArtistWords = ['artist', 'artiest', 'release', 'ep', 'album'];
  listChildFolders_(clientsRoot).forEach(function(folder) {
    const lower = folder.getName().toLowerCase();
    suspiciousArtistWords.forEach(function(word) {
      if (lower.indexOf(word) >= 0) {
        addFinding_(audit, section, 'MEDIUM', 'Mogelijke artist/client verwarring', pathJoin_(['OS_CUSTOMMADE', '03_CLIENTS', folder.getName()]), 'Controleer of dit geen artistdossier is.');
      }
    });
  });
}

function auditLegal_(audit, root) {
  const section = 'LEGAL';
  const legalRoot = getSingleChildFolder_(root, '07_LEGAL');
  if (!legalRoot) {
    addFinding_(audit, section, 'CRITICAL', '07_LEGAL ontbreekt', rootPath_('07_LEGAL'), 'Geen legal-audit mogelijk.');
    return;
  }

  pass_(audit, section, '07_LEGAL bestaat', 'OS_CUSTOMMADE/07_LEGAL', legalRoot.getUrl());

  const approvalFolder = getFolderByPathFromRoot_(root, APPROVAL_REGISTER_PATH.slice(1));
  if (approvalFolder) {
    pass_(audit, section, 'Approval Register bestaat', APPROVAL_REGISTER_PATH.join('/'), approvalFolder.getUrl());
  } else {
    addFinding_(audit, section, 'CRITICAL', 'Approval Register ontbreekt', APPROVAL_REGISTER_PATH.join('/'), 'Aanmaken via controlled repair-plan met CM CONTROL approval.');
  }
}

function auditFinance_(audit, root) {
  const section = 'FINANCE';
  const financeRoot = getSingleChildFolder_(root, '06_FINANCE');
  if (!financeRoot) {
    addFinding_(audit, section, 'CRITICAL', '06_FINANCE ontbreekt', rootPath_('06_FINANCE'), 'Geen finance-audit mogelijk.');
    return;
  }

  pass_(audit, section, '06_FINANCE bestaat', 'OS_CUSTOMMADE/06_FINANCE', financeRoot.getUrl());
}

function auditTemplateReadiness_(audit, root) {
  const section = 'TEMPLATE_COMPLIANCE';
  const possibleTemplateRoots = [];
  collectFoldersMatching_(root, /template/i, possibleTemplateRoots, 0, 3);

  if (possibleTemplateRoots.length === 0) {
    addFinding_(audit, section, 'LOW', 'Geen Drive-templatekopieën gevonden', 'OS_CUSTOMMADE', 'Alleen issue als werkbare kopieën operationeel nodig zijn. GitHub blijft templatebron.');
  } else {
    possibleTemplateRoots.forEach(function(folder) {
      addFinding_(audit, section, 'LOW', 'Drive template-gerelateerde map gevonden', folder.getName(), 'Controleer dat dit alleen werkbare kopieën/exports zijn, niet source of truth.');
    });
  }
}

function auditDuplicates_(audit, root) {
  const section = 'DUPLICATES';
  const allTopFolders = listChildFolders_(root);
  const topNames = allTopFolders.map(function(folder) { return folder.getName(); });
  const dupes = findDuplicateNames_(topNames);

  if (dupes.length === 0) {
    pass_(audit, section, 'Geen dubbele rootnamen gevonden', 'OS_CUSTOMMADE', '');
  } else {
    dupes.forEach(function(name) {
      addFinding_(audit, section, 'HIGH', 'Dubbele rootnaam', rootPath_(name), 'Owner review vereist.');
    });
  }
}

function auditLooseFiles_(audit, root) {
  const rootFiles = listChildFiles_(root, 50);
  if (rootFiles.length === 0) {
    pass_(audit, 'FILE_QUALITY', 'Geen losse bestanden direct in OS_CUSTOMMADE root', 'OS_CUSTOMMADE', '');
  } else {
    rootFiles.forEach(function(file) {
      addFinding_(audit, 'FILE_QUALITY', 'HIGH', 'Los bestand direct in OS_CUSTOMMADE root', pathJoin_(['OS_CUSTOMMADE', file.getName()]), 'Niet verplaatsen. Classificeer via owner review.');
    });
  }
}

function auditSharing_(audit, root) {
  const section = 'SHARING';
  const queue = [root];
  let scannedFolders = 0;
  let scannedFiles = 0;

  while (queue.length && scannedFolders < MAX_FOLDER_SCAN && scannedFiles < MAX_FILE_SCAN) {
    const folder = queue.shift();
    scannedFolders += 1;
    auditSharingForItem_(audit, section, folder, 'Folder');

    const childFolders = listChildFolders_(folder);
    childFolders.forEach(function(child) { queue.push(child); });

    const files = listChildFiles_(folder, 25);
    files.forEach(function(file) {
      if (scannedFiles < MAX_FILE_SCAN) {
        scannedFiles += 1;
        auditSharingForItem_(audit, section, file, 'File');
      }
    });
  }

  if (scannedFolders >= MAX_FOLDER_SCAN || scannedFiles >= MAX_FILE_SCAN) {
    addFinding_(audit, section, 'MEDIUM', 'Sharing audit scanlimiet bereikt', 'MAX_FOLDER_SCAN/MAX_FILE_SCAN', 'Voer vervolgscan uit per domeinmap.');
  }

  if (audit.sections[section].checks === 0) {
    pass_(audit, section, 'Sharing audit uitgevoerd zonder bevindingen binnen limiet', 'OS_CUSTOMMADE', '');
  }
}

function auditSharingForItem_(audit, section, item, itemType) {
  let access;
  let permission;
  try {
    access = item.getSharingAccess();
    permission = item.getSharingPermission();
  } catch (error) {
    addFinding_(audit, section, 'LOW', 'Sharingstatus niet leesbaar', itemType + ': ' + item.getName(), String(error));
    return;
  }

  const accessText = String(access);
  const permissionText = String(permission);

  if (accessText.indexOf('ANYONE') >= 0 || accessText.indexOf('DOMAIN') >= 0) {
    const risk = permissionText.indexOf('EDIT') >= 0 ? 'CRITICAL' : 'HIGH';
    addFinding_(audit, section, risk, 'Breed gedeeld item gevonden', itemType + ': ' + item.getName(), accessText + ' / ' + permissionText + ' — rechten niet aanpassen via audit.');
  }
}

function auditArchive_(audit, root) {
  const section = 'ARCHIVE';
  const archive = getSingleChildFolder_(root, '99_ARCHIVE');
  if (!archive) {
    addFinding_(audit, section, 'CRITICAL', '99_ARCHIVE ontbreekt', rootPath_('99_ARCHIVE'), 'Geen archive-audit mogelijk.');
    return;
  }

  pass_(audit, section, '99_ARCHIVE bestaat', 'OS_CUSTOMMADE/99_ARCHIVE', archive.getUrl());

  listChildFiles_(archive, 25).forEach(function(file) {
    addFinding_(audit, section, 'LOW', 'Bestand direct in 99_ARCHIVE root', pathJoin_(['OS_CUSTOMMADE', '99_ARCHIVE', file.getName()]), 'Controleer of dit in submap LEGACY/REVIEW_HOLD hoort.');
  });
}

function finalizeAudit_(audit) {
  audit.finishedAt = new Date();
  const report = buildMarkdownReport_(audit);
  Logger.log('\n' + report);
}

function buildMarkdownReport_(audit) {
  const lines = [];
  const scoreSummary = buildScoreSummary_(audit);
  const highestRisk = getHighestRisk_(audit.findings);
  const goNoGo = determineGoNoGo_(scoreSummary.totalScore, highestRisk);

  lines.push('# CM DRIVE READINESS REPORT');
  lines.push('');
  lines.push('## Samenvatting');
  lines.push('');
  lines.push('- Auditversie: ' + audit.version);
  lines.push('- Auditdatum: ' + formatDate_(audit.startedAt));
  lines.push('- Root: ' + AUDIT_ROOT_NAME);
  lines.push('- Rootfolder-ID: ' + (audit.rootId || 'NIET GEVONDEN'));
  lines.push('- Root URL: ' + (audit.rootUrl || 'NIET BESCHIKBAAR'));
  lines.push('- Read-only bevestigd: ' + (READ_ONLY_MODE === true ? 'JA' : 'NEE'));
  lines.push('- Mutaties uitgevoerd: NEE');
  lines.push('- Totaalscore: ' + scoreSummary.totalScore + '%');
  lines.push('- Hoogste risico: ' + highestRisk);
  lines.push('- GO / NO-GO: ' + goNoGo.status);
  lines.push('- Reden: ' + goNoGo.reason);
  lines.push('');
  lines.push('## Source of truth');
  lines.push('');
  lines.push('- docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md');
  lines.push('- docs/00_GOVERNANCE/DRIVE_STRUCTURE.md');
  lines.push('- docs/04_SYSTEMS/DRIVE_MAPPING.md');
  lines.push('- docs/00_GOVERNANCE/CM_OS_BASELINE_REVIEW.md');
  lines.push('- docs/00_GOVERNANCE/CM_OS_RELEASES.md');
  lines.push('');
  lines.push('## Score');
  lines.push('');
  lines.push('| Onderdeel | Checks | Passed | Warnings | Failed | Score |');
  lines.push('| --- | ---: | ---: | ---: | ---: | ---: |');

  Object.keys(audit.sections).forEach(function(key) {
    const section = audit.sections[key];
    const score = calculateSectionScore_(section);
    lines.push('| ' + section.name + ' | ' + section.checks + ' | ' + section.passed + ' | ' + section.warnings + ' | ' + section.failed + ' | ' + score + '% |');
  });

  lines.push('');
  lines.push('## Bevindingen');
  lines.push('');

  if (audit.findings.length === 0) {
    lines.push('Geen bevindingen.');
  } else {
    lines.push('| Risico | Onderdeel | Bevinding | Pad / bewijs | Aanbevolen actie |');
    lines.push('| --- | --- | --- | --- | --- |');
    audit.findings.forEach(function(finding) {
      lines.push('| ' + finding.risk + ' | ' + finding.section + ' | ' + cleanCell_(finding.title) + ' | ' + cleanCell_(finding.path) + ' | ' + cleanCell_(finding.action) + ' |');
    });
  }

  lines.push('');
  lines.push('## Hold-lijst');
  lines.push('');
  const holdFindings = audit.findings.filter(function(finding) { return ['CRITICAL', 'HIGH', 'MEDIUM'].indexOf(finding.risk) >= 0; });
  if (holdFindings.length === 0) {
    lines.push('Geen hold-items geïdentificeerd.');
  } else {
    lines.push('| Item | Pad | Reden hold | Risico | Owner | Besluit nodig |');
    lines.push('| --- | --- | --- | --- | --- | --- |');
    holdFindings.forEach(function(finding) {
      lines.push('| ' + cleanCell_(finding.title) + ' | ' + cleanCell_(finding.path) + ' | Review vereist vóór cleanup | ' + finding.risk + ' | TBD | JA |');
    });
  }

  lines.push('');
  lines.push('## Aanbevolen acties');
  lines.push('');
  lines.push('1. Beoordeel CRITICAL issues eerst met CM CONTROL AGENT.');
  lines.push('2. Maak een hold-lijst voor alle HIGH en MEDIUM findings.');
  lines.push('3. Laat owners reviewen voordat iets wordt verplaatst of hernoemd.');
  lines.push('4. Maak pas daarna een cleanup-plan met rollback en approval.');
  lines.push('5. Voer geen automatische Drive-acties uit op basis van deze audit alleen.');
  lines.push('');
  lines.push('## GO / NO-GO');
  lines.push('');
  lines.push('| Voorwaarde | Status |');
  lines.push('| --- | --- |');
  lines.push('| Audit voltooid | JA |');
  lines.push('| Score ≥95% | ' + (scoreSummary.totalScore >= 95 ? 'JA' : 'NEE') + ' |');
  lines.push('| Geen critical issues | ' + (highestRisk === 'CRITICAL' ? 'NEE' : 'JA') + ' |');
  lines.push('| Rollbackplan aanwezig | NEE / NOG NIET VAN TOEPASSING |');
  lines.push('| Hold-lijst aanwezig | ' + (holdFindings.length > 0 ? 'JA' : 'NIET NODIG') + ' |');
  lines.push('| Owner review afgerond | NEE |');
  lines.push('| CM CONTROL approval vastgelegd | NEE |');
  lines.push('');
  lines.push('```text');
  lines.push('GO / NO-GO: ' + goNoGo.status);
  lines.push('Reden: ' + goNoGo.reason);
  lines.push('Beslisser: CM CONTROL AGENT / Sophia');
  lines.push('Datum: ' + formatDate_(new Date()));
  lines.push('```');

  return lines.join('\n');
}

function buildScoreSummary_(audit) {
  const keys = Object.keys(audit.sections).filter(function(key) {
    return audit.sections[key].checks > 0;
  });

  if (keys.length === 0) {
    return { totalScore: 0 };
  }

  const total = keys.reduce(function(sum, key) {
    return sum + calculateSectionScore_(audit.sections[key]);
  }, 0);

  return { totalScore: Math.round(total / keys.length) };
}

function calculateSectionScore_(section) {
  if (!section.checks) return 100;
  const raw = ((section.passed + section.warnings * 0.5) / section.checks) * 100;
  return Math.max(0, Math.min(100, Math.round(raw)));
}

function determineGoNoGo_(totalScore, highestRisk) {
  if (highestRisk === 'CRITICAL') {
    return { status: 'NO-GO', reason: 'Er is minimaal één CRITICAL issue.' };
  }
  if (totalScore >= 95) {
    return { status: 'GO VOOR READ-ONLY VERVOLG / NO-GO VOOR LIVE CLEANUP', reason: 'Score ≥95% en geen critical issues. Live mutaties vereisen alsnog approval.' };
  }
  if (totalScore >= 85) {
    return { status: 'GO NA HERSTEL / NO-GO VOOR LIVE CLEANUP', reason: 'Verbeteracties nodig vóór automatische acties.' };
  }
  return { status: 'NO-GO', reason: 'Score lager dan 85%.' };
}

function getHighestRisk_(findings) {
  const order = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
  for (let i = 0; i < order.length; i += 1) {
    if (findings.some(function(finding) { return finding.risk === order[i]; })) {
      return order[i];
    }
  }
  return 'NONE';
}

function pass_(audit, sectionKey, title, path, evidence) {
  const section = audit.sections[sectionKey] || audit.sections.SCRIPT;
  section.checks += 1;
  section.passed += 1;
}

function addFinding_(audit, sectionKey, risk, title, path, action) {
  const section = audit.sections[sectionKey] || audit.sections.SCRIPT;
  section.checks += 1;

  if (risk === 'LOW') {
    section.warnings += 1;
  } else {
    section.failed += 1;
  }

  audit.findings.push({
    section: section.name,
    risk: risk,
    title: title,
    path: path || '',
    action: action || ''
  });
}

function getSingleChildFolder_(parent, name) {
  const folders = listChildFolders_(parent).filter(function(folder) {
    return folder.getName() === name;
  });
  return folders.length ? folders[0] : null;
}


function getFolderByPathFromRoot_(root, pathParts) {
  if (!root || !pathParts || pathParts.length === 0) return root || null;

  let current = root;
  for (let i = 0; i < pathParts.length; i += 1) {
    current = getSingleChildFolder_(current, pathParts[i]);
    if (!current) return null;
  }
  return current;
}

function listChildFolders_(folder) {
  const iterator = folder.getFolders();
  const folders = [];
  while (iterator.hasNext()) {
    folders.push(iterator.next());
    if (folders.length > MAX_FOLDER_SCAN) break;
  }
  return folders;
}

function listChildFiles_(folder, limit) {
  const iterator = folder.getFiles();
  const files = [];
  while (iterator.hasNext()) {
    files.push(iterator.next());
    if (files.length >= limit) break;
  }
  return files;
}

function collectFoldersMatching_(folder, regex, results, depth, maxDepth) {
  if (depth > maxDepth || results.length > 100) return;
  listChildFolders_(folder).forEach(function(child) {
    if (regex.test(child.getName())) {
      results.push(child);
    }
    collectFoldersMatching_(child, regex, results, depth + 1, maxDepth);
  });
}

function findDuplicateNames_(names) {
  const seen = {};
  const duplicates = {};
  names.forEach(function(name) {
    if (seen[name]) duplicates[name] = true;
    seen[name] = true;
  });
  return Object.keys(duplicates);
}

function assertReadOnlyMode_() {
  if (READ_ONLY_MODE !== true) {
    throw new Error('READ_ONLY_MODE must be true. Audit stopped.');
  }
}

function rootPath_(childName) {
  return pathJoin_(['OS_CUSTOMMADE', childName]);
}

function pathJoin_(parts) {
  return parts.filter(Boolean).join('/');
}

function getFirstFolderUrlByName_(folders, name) {
  const match = folders.filter(function(folder) { return folder.getName() === name; })[0];
  return match ? match.getUrl() : '';
}

function formatDate_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
}

function cleanCell_(value) {
  return String(value || '').replace(/\|/g, '/').replace(/\n/g, ' ');
}

/**
 * Populates the approved Custommade Agency Google Drive structure with the
 * correct template working copies per dossier.
 *
 * Governance status: PRIMARY for Sprint 6 (Template Recovery) Drive rollout.
 *
 * Waar create-cm-drive-structure.gs de goedgekeurde LEGE mappenboom bouwt,
 * VULT dit script iedere map met de juiste bestanden volgens:
 *   docs/00_GOVERNANCE/MAP_SPECIFICATIONS/TEMPLATE_PLACEMENT_MAP.md
 *
 * Werkwijze:
 * - Centrale template library (00_ADMIN/03_TEMPLATES) krijgt de mastervoorraad
 *   als Google Docs, gespiegeld op de canonieke Library-submappen.
 * - Iedere artist-, client-, deal- en legal-map krijgt WERKBARE KOPIEEN van die
 *   masters, benoemd volgens de naamconventie:
 *       YYYY-MM-DD_[ENTITY]_[MAP]_[DOCUMENTTYPE]_v0.1
 * - Iedere Doc wordt opgebouwd volgens de 14 verplichte onderdelen van
 *   TEMPLATE_ARCHITECTUURSTANDAARD.md (leidend voor template-opbouw en
 *   operationele kopieen), met TBD waar informatie nog ontbreekt. De vorm volgt
 *   TEMPLATE_DESIGN_STANDARD.md: Montserrat, hoofdletters voor titels, geen
 *   kleuren, geen emoji.
 * - GitHub blijft de source of truth voor template-inhoud; Drive bevat
 *   uitsluitend werkbare kopieen. Iedere Doc verwijst onder Opslag naar het
 *   canonieke template in de GitHub Library.
 *
 * Regels:
 * - Idempotent: maakt alleen ontbrekende bestanden aan; overschrijft, hernoemt
 *   of verwijdert nooit bestaande content.
 * - Herbruikt bestaande mappen en bestanden om dubbele varianten te voorkomen.
 * - Uppercase map- en documentnaamgeving conform NAMING_CONVENTIONS.md.
 *
 * Usage:
 * 1. Open Google Apps Script in het doel-Google-account (naast
 *    create-cm-drive-structure.gs, of los).
 * 2. Zet PARENT_FOLDER_ID op de bovenliggende map, of laat leeg voor My Drive.
 * 3. Draai eerst met DRY_RUN = true en controleer de log.
 * 4. Zet DRY_RUN = false en draai populateCmDriveTemplates() voor de volledige
 *    uitrol, of een van de losse helpers hieronder.
 *
 * Losse helpers:
 * - populateCmCentralLibrary()              -> alleen de mastervoorraad
 * - populateCmArtistTemplates('ARTIEST')    -> een enkel artist-dossier
 * - populateCmClientTemplates('CLIENT')     -> een enkel client-dossier
 * - populateCmDealTemplates('DEAL')         -> een enkele deal-/asset-case
 * - populateCmLegalTemplates()              -> de legal-mappen
 */

// ---------------------------------------------------------------------------
// Configuratie
// ---------------------------------------------------------------------------

const PARENT_FOLDER_ID = '';
const CM_DRIVE_ROOT = 'OS_CUSTOMMADE';

// Zet op true om de BESTAND-plaatsing te previewen: er worden geen bestanden
// aangemaakt, alleen gelogd. Ontbrekende mappen worden wel idempotent verzekerd
// (non-destructief), net als in create-cm-drive-structure.gs.
const DRY_RUN = true;

// Versiesuffix voor nieuw aangemaakte werkbare kopieen.
const WORKING_COPY_VERSION = 'v0.1';

// Basis-URL naar de canonieke Template Library in GitHub (voor de kopregel).
const LIBRARY_GITHUB_BASE =
  'CUSTOMMADE-AGENCY/CM_OPERATING_SYSTEM/blob/main/' +
  'docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/';

// Centrale Drive template library.
const CENTRAL_LIBRARY_PATH = ['00_ADMIN', '03_TEMPLATES'];

// ---------------------------------------------------------------------------
// Template registry
// Sleutel = canonieke templatenaam. submap = canonieke Library-submap in de
// centrale Drive library. libraryPath = pad binnen de GitHub Template Library.
// title = Nederlandse documenttitel voor de kopregel.
// ---------------------------------------------------------------------------

const TEMPLATE_LIBRARY = {
  INTAKE_TEMPLATE:               { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/INTAKE_TEMPLATE.md',            title: 'Intake' },
  CONTACT_SHEET_TEMPLATE:        { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/CONTACT_SHEET_TEMPLATE.md',     title: 'Contact Sheet' },
  CLIENT_ONBOARDING_TEMPLATE:    { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/CLIENT_ONBOARDING_TEMPLATE.md', title: 'Onboarding Summary' },
  CONTRACT_SUMMARY_TEMPLATE:     { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/CONTRACT_SUMMARY_TEMPLATE.md',  title: 'Contract Summary' },
  APPROVAL_EVIDENCE_TEMPLATE:    { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/APPROVAL_EVIDENCE_TEMPLATE.md', title: 'Approval Evidence' },
  AMENDMENT_LOG_TEMPLATE:        { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/AMENDMENT_LOG_TEMPLATE.md',     title: 'Amendment Log' },
  REGISTER_TEMPLATE:             { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/REGISTER_TEMPLATE.md',          title: 'Register' },
  VERSION_LOG_TEMPLATE:          { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/VERSION_LOG_TEMPLATE.md',       title: 'Version Log' },
  CLIENT_PROFILE_TEMPLATE:       { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/CLIENT_PROFILE_TEMPLATE.md',    title: 'Client Profile' },
  MEETING_RECAP_TEMPLATE:        { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/MEETING_RECAP_TEMPLATE.md',     title: 'Meeting Recap' },
  DO_NOTS_TEMPLATE:              { submap: '01_SHARED_SERVICES',      libraryPath: '01_SHARED_SERVICES/DO_NOTS_TEMPLATE.md',           title: 'Do Nots' },

  ARTIST_ROADMAP_TEMPLATE:       { submap: '02_ARTIST_MANAGEMENT',    libraryPath: '02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_TEMPLATE.md',  title: 'Roadmap' },
  RELEASE_STRATEGY_TEMPLATE:     { submap: '02_ARTIST_MANAGEMENT',    libraryPath: '02_ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md', title: 'Release Strategy' },
  RELEASE_KICKOFF_TEMPLATE:      { submap: '02_ARTIST_MANAGEMENT',    libraryPath: '02_ARTIST_MANAGEMENT/RELEASE_KICKOFF_TEMPLATE.md', title: 'Release Kickoff' },
  KPI_TEMPLATE:                  { submap: '02_ARTIST_MANAGEMENT',    libraryPath: '02_ARTIST_MANAGEMENT/KPI_TEMPLATE.md',            title: 'KPI' },
  JAARPLAN_TEMPLATE:             { submap: '02_ARTIST_MANAGEMENT',    libraryPath: '02_ARTIST_MANAGEMENT/JAARPLAN_TEMPLATE.md',        title: 'Jaarplan' },

  DEAL_MEMO_TEMPLATE:            { submap: '03_MASTER_BOUTIQUE',      libraryPath: '03_MASTER_BOUTIQUE/DEAL_MEMO_TEMPLATE.md',         title: 'Deal Memo' },
  PARTNERSHIP_BRIEF_TEMPLATE:    { submap: '03_MASTER_BOUTIQUE',      libraryPath: '03_MASTER_BOUTIQUE/PARTNERSHIP_BRIEF_TEMPLATE.md', title: 'Partnership Brief' },
  MUSIC_RIGHTS_REGISTER:         { submap: '03_MASTER_BOUTIQUE',      libraryPath: '03_MASTER_BOUTIQUE/MUSIC_RIGHTS_REGISTER.md',      title: 'Music Rights Register' },

  BRAND_AUDIT_TEMPLATE:          { submap: '04_CLIENT_DELIVERABLES',  libraryPath: '04_CLIENT_DELIVERABLES/BRAND_AUDIT_TEMPLATE.md',   title: 'Brand Audit' },
  BUSINESS_AUDIT_TEMPLATE:       { submap: '04_CLIENT_DELIVERABLES',  libraryPath: '04_CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md', title: 'Business Audit' },
  ARTIST_AUDIT_TEMPLATE:         { submap: '04_CLIENT_DELIVERABLES',  libraryPath: 'CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md',     title: 'Artist Audit' },
  RIGHTS_AUDIT_TEMPLATE:         { submap: '04_CLIENT_DELIVERABLES',  libraryPath: 'CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md',     title: 'Rights Audit' },
  MANAGEMENT_PROPOSAL_TEMPLATE:  { submap: '04_CLIENT_DELIVERABLES',  libraryPath: 'CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md', title: 'Management Proposal' },

  ACTION_TRACKER_CLICKUP_REFERENCE: { submap: '05_CLICKUP_REFERENCES', libraryPath: '05_CLICKUP_REFERENCES/ACTION_TRACKER_CLICKUP_REFERENCE.md', title: 'Action Tracker (ClickUp Reference)' },
  DEAL_PIPELINE_CLICKUP_REFERENCE:  { submap: '05_CLICKUP_REFERENCES', libraryPath: '05_CLICKUP_REFERENCES/DEAL_PIPELINE_CLICKUP_REFERENCE.md', title: 'Deal Pipeline (ClickUp Reference)' },
  DEAL_NEGOTIATION_TEMPLATE:        { submap: '05_CLICKUP_REFERENCES', libraryPath: 'CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md',             title: 'Deal Negotiation' },

  EMAIL_INSTRUCTIONS_TEMPLATE:   { submap: '06_GMAIL_TEMPLATES',      libraryPath: '06_GMAIL_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md', title: 'Email Instructions' },

  MONTHLY_REPORT_TEMPLATE:       { submap: '07_REPORTING',            libraryPath: '07_REPORTING/MONTHLY_REPORT_TEMPLATE.md',          title: 'Monthly Report' },
};

// Canonieke Library-submappen in de centrale Drive template library, met de
// masters die er thuishoren (TEMPLATE_PLACEMENT_MAP.md sectie 1, aangevuld met
// de shared-services masters die dossierkopieen nodig hebben).
const CENTRAL_LIBRARY = {
  '01_SHARED_SERVICES': [
    'INTAKE_TEMPLATE', 'CONTACT_SHEET_TEMPLATE', 'CLIENT_ONBOARDING_TEMPLATE',
    'CLIENT_PROFILE_TEMPLATE', 'CONTRACT_SUMMARY_TEMPLATE', 'APPROVAL_EVIDENCE_TEMPLATE',
    'AMENDMENT_LOG_TEMPLATE', 'REGISTER_TEMPLATE', 'VERSION_LOG_TEMPLATE',
    'MEETING_RECAP_TEMPLATE', 'DO_NOTS_TEMPLATE',
  ],
  '02_ARTIST_MANAGEMENT': [
    'ARTIST_ROADMAP_TEMPLATE', 'RELEASE_STRATEGY_TEMPLATE', 'RELEASE_KICKOFF_TEMPLATE',
    'KPI_TEMPLATE', 'JAARPLAN_TEMPLATE',
  ],
  '03_MASTER_BOUTIQUE': [
    'DEAL_MEMO_TEMPLATE', 'PARTNERSHIP_BRIEF_TEMPLATE', 'MUSIC_RIGHTS_REGISTER',
  ],
  '04_CLIENT_DELIVERABLES': [
    'BRAND_AUDIT_TEMPLATE', 'BUSINESS_AUDIT_TEMPLATE', 'ARTIST_AUDIT_TEMPLATE',
    'RIGHTS_AUDIT_TEMPLATE', 'MANAGEMENT_PROPOSAL_TEMPLATE',
  ],
  '05_CLICKUP_REFERENCES': [
    'ACTION_TRACKER_CLICKUP_REFERENCE', 'DEAL_PIPELINE_CLICKUP_REFERENCE',
    'DEAL_NEGOTIATION_TEMPLATE',
  ],
  '06_GMAIL_TEMPLATES': ['EMAIL_INSTRUCTIONS_TEMPLATE'],
  '07_REPORTING': ['MONTHLY_REPORT_TEMPLATE'],
};

// Volgorde van de centrale submappen bij aanmaken.
const CENTRAL_LIBRARY_ORDER = [
  '01_SHARED_SERVICES', '02_ARTIST_MANAGEMENT', '03_MASTER_BOUTIQUE',
  '04_CLIENT_DELIVERABLES', '05_CLICKUP_REFERENCES', '06_GMAIL_TEMPLATES',
  '07_REPORTING',
];

// ---------------------------------------------------------------------------
// Placement maps (TEMPLATE_PLACEMENT_MAP.md secties 2 t/m 5)
// Per submap: lijst van [DOCUMENTTYPE, templateKey].
// ---------------------------------------------------------------------------

const ARTIST_PLACEMENT = {
  '01_ADMIN': [
    ['INTAKE', 'INTAKE_TEMPLATE'],
    ['CONTACT_SHEET', 'CONTACT_SHEET_TEMPLATE'],
    ['ONBOARDING_SUMMARY', 'CLIENT_ONBOARDING_TEMPLATE'],
  ],
  '02_CONTRACT': [
    ['CONTRACT_SUMMARY', 'CONTRACT_SUMMARY_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
    ['AMENDMENT_LOG', 'AMENDMENT_LOG_TEMPLATE'],
  ],
  '03_STRATEGY': [
    ['BRAND_AUDIT', 'BRAND_AUDIT_TEMPLATE'],
    ['BUSINESS_AUDIT', 'BUSINESS_AUDIT_TEMPLATE'],
    ['ROADMAP', 'ARTIST_ROADMAP_TEMPLATE'],
    ['KPI', 'KPI_TEMPLATE'],
    ['JAARPLAN', 'JAARPLAN_TEMPLATE'],
  ],
  '04_RELEASES': [
    ['RELEASE_REGISTER', 'REGISTER_TEMPLATE'],
    ['RELEASE_STRATEGY', 'RELEASE_STRATEGY_TEMPLATE'],
    ['RELEASE_KICKOFF', 'RELEASE_KICKOFF_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
    ['VERSION_LOG', 'VERSION_LOG_TEMPLATE'],
  ],
  '05_BOOKING': [
    ['BOOKING_REGISTER', 'REGISTER_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
    ['VERSION_LOG', 'VERSION_LOG_TEMPLATE'],
  ],
  '06_FINANCE': [
    ['MONTHLY_REPORT', 'MONTHLY_REPORT_TEMPLATE'],
  ],
  '07_SOCIALMEDIA': [
    ['SOCIAL_REGISTER', 'REGISTER_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
    ['VERSION_LOG', 'VERSION_LOG_TEMPLATE'],
  ],
  '08_PRESS_EPK': [
    ['PRESS_EPK_REGISTER', 'REGISTER_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
    ['VERSION_LOG', 'VERSION_LOG_TEMPLATE'],
  ],
  '09_ARCHIVE': [
    ['ARCHIVE_REGISTER', 'REGISTER_TEMPLATE'],
  ],
};

const CLIENT_PLACEMENT = {
  '01_ADMIN': [
    ['CLIENT_PROFILE', 'CLIENT_PROFILE_TEMPLATE'],
    ['ONBOARDING_SUMMARY', 'CLIENT_ONBOARDING_TEMPLATE'],
    ['EMAIL_INSTRUCTIONS', 'EMAIL_INSTRUCTIONS_TEMPLATE'],
    ['DO_NOTS', 'DO_NOTS_TEMPLATE'],
  ],
  '02_CONTRACT': [
    ['CONTRACT_SUMMARY', 'CONTRACT_SUMMARY_TEMPLATE'],
  ],
  '03_BRIEF_SCOPE': [
    ['MANAGEMENT_PROPOSAL', 'MANAGEMENT_PROPOSAL_TEMPLATE'],
  ],
  '04_DELIVERABLES': [
    ['ARTIST_AUDIT', 'ARTIST_AUDIT_TEMPLATE'],
    ['BUSINESS_AUDIT', 'BUSINESS_AUDIT_TEMPLATE'],
    ['RELEASE_STRATEGY', 'RELEASE_STRATEGY_TEMPLATE'],
    ['ROADMAP', 'ARTIST_ROADMAP_TEMPLATE'],
    ['MONTHLY_REPORT', 'MONTHLY_REPORT_TEMPLATE'],
  ],
  '05_COMMUNICATION': [
    ['MEETING_RECAP', 'MEETING_RECAP_TEMPLATE'],
  ],
  '06_FINANCE': [
    ['MONTHLY_REPORT', 'MONTHLY_REPORT_TEMPLATE'],
  ],
  '09_ARCHIVE': [
    ['ARCHIVE_REGISTER', 'REGISTER_TEMPLATE'],
  ],
};

const DEAL_PLACEMENT = {
  '00_START_HIER': [
    ['DEAL_MEMO', 'DEAL_MEMO_TEMPLATE'],
  ],
  '01_RECHTEN_REGISTER': [
    ['RIGHTS_AUDIT', 'RIGHTS_AUDIT_TEMPLATE'],
    ['MUSIC_RIGHTS_REGISTER', 'MUSIC_RIGHTS_REGISTER'],
  ],
  '02_CONTRACTEN_BEWIJS': [
    ['CONTRACT_SUMMARY', 'CONTRACT_SUMMARY_TEMPLATE'],
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
  ],
  '03_WAARDERING_VERKOOPPAKKET': [
    ['DEAL_MEMO', 'DEAL_MEMO_TEMPLATE'],
    ['PARTNERSHIP_BRIEF', 'PARTNERSHIP_BRIEF_TEMPLATE'],
  ],
  '04_OUTREACH_CLICKUP': [
    ['DEAL_NEGOTIATION', 'DEAL_NEGOTIATION_TEMPLATE'],
    ['DEAL_PIPELINE', 'DEAL_PIPELINE_CLICKUP_REFERENCE'],
    ['ACTION_TRACKER', 'ACTION_TRACKER_CLICKUP_REFERENCE'],
  ],
  '99_ARCHIEF': [
    ['ARCHIVE_REGISTER', 'REGISTER_TEMPLATE'],
  ],
};

const LEGAL_PLACEMENT = {
  'LEGAL_REVIEW': [
    ['RIGHTS_AUDIT', 'RIGHTS_AUDIT_TEMPLATE'],
    ['MEETING_RECAP', 'MEETING_RECAP_TEMPLATE'],
  ],
  'CONTRACTS': [
    ['CONTRACT_SUMMARY', 'CONTRACT_SUMMARY_TEMPLATE'],
  ],
  'EVIDENCE': [
    ['APPROVAL_EVIDENCE', 'APPROVAL_EVIDENCE_TEMPLATE'],
  ],
};

// Artists conform create-cm-drive-structure.gs (single source van waarheid).
const CM_ARTISTS = [
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

// ---------------------------------------------------------------------------
// Entry points
// ---------------------------------------------------------------------------

/**
 * Volledige uitrol: centrale library + alle artist-dossiers + legal-mappen.
 * Client- en deal-dossiers worden per case gevuld via de losse helpers, omdat
 * de manifest daar bewust geen placeholdermappen aanmaakt.
 */
function populateCmDriveTemplates() {
  const report = newReport_();

  populateCmCentralLibrary_(report);

  CM_ARTISTS.forEach(function(artistName) {
    populateCmArtistTemplates_(artistName, report);
  });

  populateCmLegalTemplates_(report);

  logReport_(report);
  return report;
}

function populateCmCentralLibrary() {
  const report = newReport_();
  populateCmCentralLibrary_(report);
  logReport_(report);
  return report;
}

function populateCmArtistTemplates(artistName) {
  const report = newReport_();
  populateCmArtistTemplates_(artistName, report);
  logReport_(report);
  return report;
}

function populateCmClientTemplates(clientName) {
  const report = newReport_();
  populateDossier_('03_CLIENTS', clientName, CLIENT_PLACEMENT, report);
  logReport_(report);
  return report;
}

function populateCmDealTemplates(dealName) {
  const report = newReport_();
  populateDossier_('04_DEALS', dealName, DEAL_PLACEMENT, report);
  logReport_(report);
  return report;
}

function populateCmLegalTemplates() {
  const report = newReport_();
  populateCmLegalTemplates_(report);
  logReport_(report);
  return report;
}

// ---------------------------------------------------------------------------
// Kern
// ---------------------------------------------------------------------------

function populateCmCentralLibrary_(report) {
  const root = getRoot_();
  const templatesFolder = getOrCreateFolderPath_(root, CENTRAL_LIBRARY_PATH);

  CENTRAL_LIBRARY_ORDER.forEach(function(submapName) {
    const submap = getOrCreateFolder_(templatesFolder, submapName);
    (CENTRAL_LIBRARY[submapName] || []).forEach(function(templateKey) {
      ensureMasterDoc_(submap, templateKey, report);
    });
  });
}

function populateCmArtistTemplates_(artistName, report) {
  populateDossier_('02_ARTIST_MANAGEMENT', artistName, ARTIST_PLACEMENT, report);
}

function populateCmLegalTemplates_(report) {
  const root = getRoot_();
  const legalFolder = getOrCreateFolder_(root, '07_LEGAL');

  Object.keys(LEGAL_PLACEMENT).forEach(function(submapName) {
    const submap = getOrCreateFolder_(legalFolder, submapName);
    LEGAL_PLACEMENT[submapName].forEach(function(entry) {
      ensureWorkingCopy_(submap, 'CM', submapName, entry[0], entry[1], report);
    });
  });
}

/**
 * Vult een dossier (artist/client/deal) met werkbare kopieen volgens de
 * meegegeven placement map.
 */
function populateDossier_(containerName, dossierName, placement, report) {
  if (!dossierName || String(dossierName).trim() === '') {
    throw new Error('Geef een dossiernaam op.');
  }

  const root = getRoot_();
  const container = getOrCreateFolder_(root, containerName);
  const entity = normalizeEntity_(dossierName);
  const dossierFolder = getOrCreateFolder_(container, entity);

  Object.keys(placement).forEach(function(submapName) {
    const submap = getOrCreateFolder_(dossierFolder, submapName);
    const mapToken = mapTokenFromSubfolder_(submapName);
    placement[submapName].forEach(function(entry) {
      ensureWorkingCopy_(submap, entity, mapToken, entry[0], entry[1], report);
    });
  });
}

// ---------------------------------------------------------------------------
// Bestandshelpers
// ---------------------------------------------------------------------------

/**
 * Zorgt dat een master-Doc met exact deze naam in de centrale library bestaat.
 */
function ensureMasterDoc_(folder, templateKey, report) {
  const meta = TEMPLATE_LIBRARY[templateKey];
  if (!meta) {
    report.errors.push('Onbekende template in registry: ' + templateKey);
    return null;
  }

  if (folder.getFilesByName(templateKey).hasNext()) {
    report.skipped.push('MASTER bestaat: ' + templateKey);
    return folder.getFilesByName(templateKey).next();
  }

  report.created.push('MASTER: ' + templateKey + ' (' + folder.getName() + ')');
  if (DRY_RUN) {
    return null;
  }

  const doc = DocumentApp.create(templateKey);
  writeMasterBody_(doc, templateKey, meta);
  const file = DriveApp.getFileById(doc.getId());
  moveFileTo_(file, folder);
  return file;
}

/**
 * Zorgt dat een werkbare kopie voor deze [ENTITY]_[MAP]_[DOCTYPE] bestaat.
 * Idempotent: matcht op de stabiele sleutel, ongeacht datum en versie.
 */
function ensureWorkingCopy_(folder, entity, mapToken, docType, templateKey, report) {
  const meta = TEMPLATE_LIBRARY[templateKey];
  if (!meta) {
    report.errors.push('Onbekende template in registry: ' + templateKey);
    return null;
  }

  const key = '_' + entity + '_' + mapToken + '_' + docType + '_';
  if (workingCopyExists_(folder, key)) {
    report.skipped.push('KOPIE bestaat: ' + key.replace(/^_|_$/g, ''));
    return null;
  }

  const fileName = buildWorkingCopyName_(entity, mapToken, docType);
  report.created.push('KOPIE: ' + fileName + ' <- ' + templateKey);
  if (DRY_RUN) {
    return null;
  }

  // Bouw een werkbare kopie volgens de architectuurstandaard, met de juiste
  // werkbare-kopie-metadata (DRAFT, entity). GitHub blijft leidend voor inhoud.
  const doc = DocumentApp.create(fileName);
  writeWorkingCopyBody_(doc, entity, mapToken, docType, templateKey, meta);
  const file = DriveApp.getFileById(doc.getId());
  moveFileTo_(file, folder);
  return file;
}

function workingCopyExists_(folder, key) {
  const lowerKey = key.toLowerCase();
  const files = folder.getFiles();
  while (files.hasNext()) {
    const name = files.next().getName().toLowerCase();
    if (name.indexOf(lowerKey) !== -1) {
      return true;
    }
  }
  return false;
}

// ---------------------------------------------------------------------------
// Documentinhoud
//
// Opbouw volgt TEMPLATE_ARCHITECTUURSTANDAARD.md (leidend voor template-opbouw
// en operationele kopieen): de 14 verplichte onderdelen, met TBD waar de
// informatie nog niet beschikbaar is. Vorm volgt TEMPLATE_DESIGN_STANDARD.md:
// Montserrat, hoofdtitels/subtitels in hoofdletters, geen kleuren, geen emoji.
// ---------------------------------------------------------------------------

// Vorm (TEMPLATE_DESIGN_STANDARD).
const DESIGN_FONT = 'Montserrat';
const BODY_PT = 10;

// Verplichte AI-instructies conform TEMPLATE_ARCHITECTUURSTANDAARD.md.
const AI_INSTRUCTIES = [
  'Gebruik eerst de bestaande template-index voordat je nieuwe outputs of formats voorstelt.',
  'Verzin nooit ontbrekende informatie; markeer onbekende of onzekere velden als TBD.',
  'Benoem expliciet welke input ontbreekt wanneer de template niet volledig kan worden ingevuld.',
  'Gebruik geen clientdata, vertrouwelijke informatie of getekende documenten in de template-specificatie.',
  'Maak geen parallelle templates aan wanneer een bestaande template passend is.',
  'Koppel afwijkingen aan TEMPLATE_GAP_LOG_SPEC.md en gebruik aan TEMPLATE_USAGE_REPORT_SPEC.md.',
];

function writeMasterBody_(doc, templateKey, meta) {
  writeTemplateBody_(doc, {
    templateKey: templateKey,
    meta: meta,
    versie: '1.0',
    status: 'ACTIVE',
    werkbareKopie: '00_ADMIN/03_TEMPLATES/' + meta.submap + ' (mastervoorraad)',
    isMaster: true,
    titleSuffix: 'MASTER',
  });
}

function writeWorkingCopyBody_(doc, entity, mapToken, docType, templateKey, meta) {
  writeTemplateBody_(doc, {
    templateKey: templateKey,
    meta: meta,
    versie: WORKING_COPY_VERSION,
    status: 'DRAFT',
    werkbareKopie: '[DOSSIER]/' + mapToken + ' — ' + entity,
    entity: entity,
    isMaster: false,
    titleSuffix: entity,
  });
}

/**
 * Bouwt een template-Doc volgens de 14 verplichte onderdelen van de
 * TEMPLATE_ARCHITECTUURSTANDAARD. Onbekende velden staan expliciet op TBD.
 */
function writeTemplateBody_(doc, opts) {
  const body = doc.getBody();
  body.clear();

  const domein = domainForSubmap_(opts.meta.submap);

  h2_(body, opts.meta.title + (opts.titleSuffix ? ' — ' + opts.titleSuffix : ''));

  h3_(body, 'Documentgegevens');
  kvTable_(body, [
    ['Template naam', opts.templateKey],
    ['Domein', domein],
    ['Versie', opts.versie],
    ['Status', opts.status],
    ['Owner Agent', 'TBD'],
    ['Support Agents', 'TBD'],
    ['System of Record', 'GitHub template-specificatie'],
    ['Werkbare kopie', opts.werkbareKopie],
    ['Gekoppelde workflow', 'TBD'],
    ['Laatste review', 'TBD'],
    ['Volgende review', 'TBD'],
  ]);

  h3_(body, 'Doel');
  p_(body, opts.isMaster
    ? ('Mastervoorraad voor ' + opts.meta.title + '. Dossiermappen krijgen hiervan een werkbare kopie.')
    : ('Werkbare kopie van ' + opts.meta.title + ' voor ' + opts.entity + '.'));

  h3_(body, 'Wanneer gebruiken');
  p_(body, 'TBD — zie de map-specificatie en het canonieke template.');

  h3_(body, 'Wanneer niet gebruiken');
  p_(body, 'TBD — niet voor documenten die buiten de mapfunctie vallen.');

  h3_(body, 'Input');
  p_(body, 'TBD — benodigde informatie, documenten of beslissingen voor gebruik.');

  h3_(body, 'Werkwijze');
  p_(body, 'TBD — stap voor stap invullen volgens het canonieke template.');

  h3_(body, 'Beslismomenten');
  p_(body, 'TBD — keuzes, approvals of escalaties.');

  h3_(body, 'Output');
  p_(body, 'TBD — verwacht resultaat van deze template.');

  h3_(body, 'Kwaliteitscontrole');
  p_(body, 'TBD — controlecriteria voor overdracht of publicatie.');

  h3_(body, 'Goedkeuring');
  p_(body, 'TBD — wie keurt goed en wanneer.');

  h3_(body, 'Overdracht');
  p_(body, 'TBD — aan wie of welk systeem de output wordt overgedragen.');

  h3_(body, 'Opslag');
  p_(body, 'System of Record: GitHub — ' + LIBRARY_GITHUB_BASE + opts.meta.libraryPath);
  p_(body, 'Werkbare kopie: ' + opts.werkbareKopie
    + '. Drive bevat uitsluitend werkbare kopieen; GitHub blijft leidend.');

  h3_(body, 'AI-instructies');
  AI_INSTRUCTIES.forEach(function(line) {
    p_(body, '- ' + line);
  });

  h3_(body, 'Wijzigingslog');
  kvTable_(body, [
    ['Datum', 'Wijziging', 'Eigenaar', 'Reden'],
    [today_(), opts.isMaster ? 'Master aangemaakt' : 'Werkbare kopie aangemaakt',
      'TBD', 'Drive-uitrol Sprint 6'],
  ]);

  applyDocFont_(body);
}

// ---------------------------------------------------------------------------
// Vorm-helpers (TEMPLATE_DESIGN_STANDARD)
// ---------------------------------------------------------------------------

function h2_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  p.editAsText().setBold(true);
  return p;
}

function h3_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText().setBold(true);
  return p;
}

function p_(body, text) {
  const p = body.appendParagraph(String(text));
  p.setHeading(DocumentApp.ParagraphHeading.NORMAL);
  p.editAsText().setBold(false).setFontSize(BODY_PT);
  return p;
}

function kvTable_(body, rows) {
  const table = body.appendTable(rows);
  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      row.getCell(c).editAsText().setFontSize(BODY_PT);
    }
  }
  return table;
}

function applyDocFont_(body) {
  const attrs = {};
  attrs[DocumentApp.Attribute.FONT_FAMILY] = DESIGN_FONT;
  body.setAttributes(attrs);
}

function domainForSubmap_(submapName) {
  const domains = {
    '01_SHARED_SERVICES': 'Shared Services',
    '02_ARTIST_MANAGEMENT': 'Artist Management',
    '03_MASTER_BOUTIQUE': 'Master Boutique',
    '04_CLIENT_DELIVERABLES': 'Client Deliverables',
    '05_CLICKUP_REFERENCES': 'ClickUp Reference',
    '06_GMAIL_TEMPLATES': 'Gmail Templates',
    '07_REPORTING': 'Reporting',
  };
  return domains[submapName] || 'TBD';
}

// ---------------------------------------------------------------------------
// Naamgeving en mappen
// ---------------------------------------------------------------------------

function buildWorkingCopyName_(entity, mapToken, docType) {
  return today_() + '_' + entity + '_' + mapToken + '_' + docType + '_' + WORKING_COPY_VERSION;
}

function mapTokenFromSubfolder_(subfolderName) {
  // Strip numerieke prefix (bijv. 01_ADMIN -> ADMIN, 99_ARCHIEF -> ARCHIEF).
  return String(subfolderName).replace(/^[0-9]+_/, '').toUpperCase();
}

function normalizeEntity_(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_\-]/g, '')
    .toUpperCase();
}

function today_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
}

function getRoot_() {
  return getOrCreateFolder_(getCmParentFolder_(), CM_DRIVE_ROOT);
}

function getCmParentFolder_() {
  if (PARENT_FOLDER_ID && PARENT_FOLDER_ID.trim() !== '') {
    return DriveApp.getFolderById(PARENT_FOLDER_ID.trim());
  }
  return DriveApp.getRootFolder();
}

function getOrCreateFolderPath_(startFolder, pathParts) {
  let current = startFolder;
  pathParts.forEach(function(part) {
    current = getOrCreateFolder_(current, part);
  });
  return current;
}

/**
 * Mappen worden altijd idempotent verzekerd (aanmaken indien ontbrekend),
 * net als in create-cm-drive-structure.gs. DRY_RUN previewt uitsluitend de
 * BESTAND-plaatsing; het aanmaken van een ontbrekende map is non-destructief
 * en nodig om de plaatsing te kunnen bepalen.
 */
function getOrCreateFolder_(parentFolder, folderName) {
  const existing = parentFolder.getFoldersByName(folderName);
  if (existing.hasNext()) {
    return existing.next();
  }
  return parentFolder.createFolder(folderName);
}

function moveFileTo_(file, targetFolder) {
  targetFolder.addFile(file);
  const parents = file.getParents();
  while (parents.hasNext()) {
    const parent = parents.next();
    if (parent.getId() !== targetFolder.getId()) {
      parent.removeFile(file);
    }
  }
}

// ---------------------------------------------------------------------------
// Rapportage
// ---------------------------------------------------------------------------

function newReport_() {
  return { created: [], skipped: [], errors: [] };
}

function logReport_(report) {
  Logger.log('=== CM Drive template populate' + (DRY_RUN ? ' (DRY_RUN)' : '') + ' ===');
  Logger.log('Aangemaakt: ' + report.created.length);
  report.created.forEach(function(line) { Logger.log('  + ' + line); });
  Logger.log('Overgeslagen (bestond al): ' + report.skipped.length);
  Logger.log('Fouten: ' + report.errors.length);
  report.errors.forEach(function(line) { Logger.log('  ! ' + line); });
}

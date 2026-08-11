/**
 * Synchroniseert de centrale Google Drive-master voor ARTIST_ROADMAP_TEMPLATE
 * met de canonieke GitHub-specificatie V2.2.
 *
 * Layoutstandaard:
 * - A4 portret blijft de standaard voor printbaarheid.
 * - Brede werkvelden worden opgesplitst in logisch gekoppelde tabellen.
 * - Geen mixed portrait/landscape.
 *
 * Governance:
 * - GitHub = template-specificatie / leidende bron.
 * - Drive = operationele master en werkbare kopieën.
 * - ClickUp = uitvoering.
 * - Moneybird = financiële waarheid.
 *
 * Dit script overschrijft GEEN ingevulde artist-roadmaps. Alleen de centrale
 * master in OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES/02_ARTIST_MANAGEMENT wordt
 * bijgewerkt. Nieuwe werkbare kopieën die daarna via populate-cm-drive-templates.gs
 * worden gemaakt, erven deze correcte masterinhoud.
 *
 * Gebruik:
 * 1. Laat ROADMAP_SYNC_DRY_RUN = true en draai syncArtistRoadmapV22().
 * 2. Controleer de Logger-output.
 * 3. Zet ROADMAP_SYNC_DRY_RUN = false en draai opnieuw.
 */

const ROADMAP_SYNC_DRY_RUN = true;
const ROADMAP_ROOT = 'OS_CUSTOMMADE';
const ROADMAP_LIBRARY_PATH = ['00_ADMIN', '03_TEMPLATES', '02_ARTIST_MANAGEMENT'];
const ROADMAP_MASTER_NAME = 'ARTIST_ROADMAP_TEMPLATE';
const ROADMAP_FONT = 'Montserrat';
const ROADMAP_BODY_PT = 10;
const ROADMAP_TABLE_PT = 8;

function syncArtistRoadmapV22() {
  const root = roadmapFindOrCreateFolder_(DriveApp.getRootFolder(), ROADMAP_ROOT);
  const library = roadmapFindOrCreatePath_(root, ROADMAP_LIBRARY_PATH);
  const existing = library.getFilesByName(ROADMAP_MASTER_NAME);

  Logger.log('=== CM ARTIST ROADMAP V2.2 SYNC' + (ROADMAP_SYNC_DRY_RUN ? ' (DRY_RUN)' : '') + ' ===');
  Logger.log('Doel: ' + ROADMAP_ROOT + '/' + ROADMAP_LIBRARY_PATH.join('/') + '/' + ROADMAP_MASTER_NAME);

  if (ROADMAP_SYNC_DRY_RUN) {
    Logger.log(existing.hasNext()
      ? 'MASTER bestaat en zou inhoudelijk worden gesynchroniseerd naar V2.2.'
      : 'MASTER ontbreekt en zou als V2.2 worden aangemaakt.');
    Logger.log('A4 portret blijft behouden; brede tabellen worden logisch opgesplitst.');
    Logger.log('Geen ingevulde artist-roadmaps worden gewijzigd.');
    return;
  }

  let doc;
  if (existing.hasNext()) {
    doc = DocumentApp.openById(existing.next().getId());
  } else {
    doc = DocumentApp.create(ROADMAP_MASTER_NAME);
    const file = DriveApp.getFileById(doc.getId());
    library.addFile(file);
    const parents = file.getParents();
    while (parents.hasNext()) {
      const parent = parents.next();
      if (parent.getId() !== library.getId()) parent.removeFile(file);
    }
  }

  roadmapWriteV22_(doc);
  doc.saveAndClose();
  Logger.log('ARTIST_ROADMAP_TEMPLATE gesynchroniseerd naar V2.2 ACTIVE (A4 portret).');
}

// Backwards-compatible alias zodat een bestaand Apps Script-menu/selectie niet breekt.
function syncArtistRoadmapV21() {
  return syncArtistRoadmapV22();
}

function roadmapWriteV22_(doc) {
  const body = doc.getBody();
  body.clear();

  roadmapH2_(body, 'CUSTOMMADE AGENCY — ARTIST ROADMAP TEMPLATE');

  roadmapH3_(body, '01 · DOCUMENT CONTROL');
  roadmapTable_(body, [
    ['Veld', 'Waarde'],
    ['Document type', 'Operational Template'],
    ['Onderdeel van', 'CM Template Library / Artist Management'],
    ['Entity', 'Custommade Agency Int. B.V.'],
    ['Owner agent', 'CM OPS AGENT'],
    ['Support agents', 'CM SOCIAL AGENT · CM MONEY AGENT'],
    ['Status', 'ACTIVE — V2.2'],
    ['Versie', 'V2.2'],
    ['Datum', 'AUGUSTUS 2026'],
    ['Risico', 'LOW'],
    ['Approval', 'CM OPS AGENT · client-facing → Sophia']
  ]);

  roadmapH3_(body, '02 · DOEL');
  roadmapP_(body,
    'Stuurbare roadmap die doelen, releases, inkomsten, deals en beslismomenten van een artist ' +
    'samenbrengt in één bron waaruit ClickUp-taken en KPI-tracking direct worden gegenereerd. ' +
    'De roadmap plant en stuurt; hij vervangt Moneybird (financiële waarheid) of het Rights Register ' +
    '(rechtenwaarheid) niet.'
  );

  roadmapH3_(body, '03 · GEBRUIKSMOMENT');
  roadmapP_(body, '— Managementstart of artist onboarding.');
  roadmapP_(body, '— Kwartaalplanning of strategische herijking.');
  roadmapP_(body, '— Releaseplanning.');

  roadmapH3_(body, '04 · BENODIGDE INPUT');
  roadmapTable_(body, [
    ['Input', 'Verplicht', 'Bron'],
    ['Artist profile', 'Ja', '01_ADMIN'],
    ['Vorige roadmap', 'Nee', '03_STRATEGY / 09_ARCHIVE'],
    ['KPI-baseline', 'Ja', 'KPI Template'],
    ['Rechten- & contractstatus', 'Ja', '02_CONTRACT / Rights Register'],
    ['Pipeline', 'Ja', 'Deal Pipeline (ClickUp)'],
    ['Financiële actuals', 'Ja', 'Moneybird / benoemde royalty-/afrekenbron']
  ]);

  roadmapH3_(body, '05 · WERKTEMPLATE');

  roadmapSub_(body, 'DOELEN');
  roadmapTable_(body, [
    ['Hoofddoel', 'KPI', 'Baseline', 'Doel', 'Deadline', 'Eigenaar', 'Status'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);
  roadmapP_(body, 'Status = gecontroleerde waarde.');

  roadmapSub_(body, 'RELEASES — PLANNING');
  roadmapTable_(body, [
    ['Release-ID', 'Release', 'Type', 'Master status', 'Rights status', 'Distributie-deadline', 'Releasedatum'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);

  roadmapSub_(body, 'RELEASES — BUSINESS');
  roadmapTable_(body, [
    ['Release-ID', 'Marketingstart', 'Goedgekeurd budget', 'Werkelijke kosten', 'Verschil'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);
  roadmapP_(body,
    'Rights status = CLEAR · OPEN · BLOCKED. Rights-clearance omvat minimaal splits, features en samples. ' +
    'Werkelijke kosten komen uit Moneybird; de roadmap registreert geen kosten zelf. Release-ID is de ' +
    'onveranderlijke record-ID die planning en business koppelt; Release is een weergavelabel.'
  );

  roadmapSub_(body, 'INKOMSTEN');
  roadmapTable_(body, [
    ['Inkomstenlane', 'Periode', 'Actueel', 'Doel', 'Forecast', 'Verschil', 'Bron'],
    ['Master royalties', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Publishing', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Neighboring rights', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Live', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Brand', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Sync', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Merch', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Overig', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);
  roadmapP_(body,
    'Actuals moeten herleidbaar zijn naar Moneybird of een benoemde royalty-/afrekenbron. ' +
    'Nooit bedragen verzinnen; onbekend = TBD.'
  );

  roadmapSub_(body, 'DEALS & KANSEN — COMMERCIEEL');
  roadmapTable_(body, [
    ['Kans-ID', 'Type', 'Kans', 'Tegenpartij', 'Waarde', 'Kans %', 'Gewogen waarde'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);

  roadmapSub_(body, 'DEALS & KANSEN — OPVOLGING');
  roadmapTable_(body, [
    ['Kans-ID', 'Fase', 'Eigenaar', 'Volgende actie', 'Deadline'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);
  roadmapP_(body,
    'Type = booking · brand · sync · label · publishing · distribution · sponsorship · collaboration. ' +
    'Gewogen waarde = waarde × kans %. Dit is een forecast-/pipeline-metric, geen financiële waarheid. ' +
    'Kans-ID is de onveranderlijke record-ID die commercieel en opvolging koppelt; Kans is een weergavelabel.'
  );

  roadmapSub_(body, 'BESLISSINGEN');
  roadmapTable_(body, [
    ['Beslissing', 'Nodig vóór', 'Goedkeurder', 'Gevolg', 'Status'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD']
  ]);

  roadmapSub_(body, 'GECONTROLEERDE STATUSSEN');
  roadmapTable_(body, [
    ['Veld', 'Toegestane waarden'],
    ['Objective status', 'NOT_STARTED · IN_PROGRESS · AT_RISK · DONE'],
    ['Rights status', 'CLEAR · OPEN · BLOCKED'],
    ['Deal/pipeline-fase', 'LEAD · QUALIFIED · DILIGENCE · CLOSING · CLOSED'],
    ['Decision status', 'OPEN · ESCALATED · DECIDED']
  ]);

  roadmapH3_(body, '06 · BESLISPOORTEN');
  roadmapP_(body, '01 — Geen release zonder Rights status = CLEAR.');
  roadmapP_(body, '02 — Financiële toezegging boven toepasselijke approvalgrens → escaleren conform CM approval governance.');
  roadmapP_(body, '03 — Client-facing roadmap alleen na Sophia-approval.');
  roadmapP_(body, '04 — Deal boven toepasselijke approvalgrens → CM PROSPECT + LEGAL check.');

  roadmapH3_(body, '07 · RESULTAAT');
  roadmapP_(body, '— Goedgekeurde roadmap als werkkopie in Drive.');
  roadmapP_(body, '— ClickUp-taken gegenereerd uit Doelen/Releases/Deals.');
  roadmapP_(body, '— KPI-baseline gekoppeld.');

  roadmapH3_(body, '08 · KWALITEITSCONTROLE');
  roadmapP_(body, '— Elk doel heeft KPI, doel, deadline, eigenaar en status.');
  roadmapP_(body, '— Elke release heeft master-status, Rights status en distributie-deadline.');
  roadmapP_(body, '— Release-planning en Release-business vormen één release-record, gekoppeld via Release-ID.');
  roadmapP_(body, '— Elke inkomstenregel met actual heeft een benoemde bron.');
  roadmapP_(body, '— Elke deal heeft fase, eigenaar, volgende actie en deadline.');
  roadmapP_(body, '— Deal-commercieel en Deal-opvolging vormen één deal-record, gekoppeld via Kans-ID.');
  roadmapP_(body, '— Geen open beslissing zonder goedkeurder.');
  roadmapP_(body, '— Iedere automation mapping verwijst naar een bestaand veld.');

  roadmapH3_(body, '09 · GOEDKEURING');
  roadmapP_(body,
    'CM OPS AGENT (Level 1–2). Client-facing of financiële toezegging boven de toepasselijke approvalgrens ' +
    '→ Sophia / CM CONTROL.'
  );

  roadmapH3_(body, '10 · OVERDRACHT');
  roadmapP_(body, '— ClickUp');
  roadmapP_(body, '— KPI Template');
  roadmapP_(body, '— Release Kickoff');

  roadmapH3_(body, '11 · LEIDENDE BRON');
  roadmapP_(body, 'GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.');

  roadmapH3_(body, '12 · OPSLAG');
  roadmapP_(body, 'Drive: [ARTIST]/03_STRATEGY · YYYY-MM-DD_[ARTIST]_ROADMAP_vX.Y');

  roadmapH3_(body, '13 · AI-INSTRUCTIES');
  roadmapP_(body, '— Controleer eerst de Template Index; maak geen parallelle of dubbele template.');
  roadmapP_(body, '— Onbekende informatie = TBD.');
  roadmapP_(body, '— Verzin nooit bedragen of approvalgrenzen.');
  roadmapP_(body, '— Gebruik voor deal/pipeline-fase uitsluitend de waarden uit DEAL_PIPELINE_CLICKUP_REFERENCE.');
  roadmapP_(body, '— Behoud A4-portret; splits brede werkvelden in logisch gekoppelde blokken in plaats van mixed portrait/landscape.');

  roadmapH3_(body, '14 · AUTOMATISERINGSKOPPELINGEN');
  roadmapTable_(body, [
    ['Trigger', 'Systeem', 'Actie', 'Field mapping'],
    ['Roadmap approved', 'Make → ClickUp', 'Doel-taken aanmaken', 'Hoofddoel→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status'],
    ['Release-regel toegevoegd', 'Make → ClickUp', 'Release-checklist', 'Release-ID→External ID, Release→List, Distributie-deadline→Due date'],
    ['Rights status = OPEN/BLOCKED', 'Make → ClickUp', 'Rights/legal opvolgtaak', 'Release→Taak, Rights status→Status'],
    ['Deal-regel toegevoegd/gewijzigd', 'Make → ClickUp', 'Pipeline-record', 'Kans-ID→External ID, Kans→Name, Eigenaar→Assignee, Deadline→Due date, Fase→Status, Volgende actie→Next action'],
    ['Financiële actuals', '—', 'Niet naar Moneybird schrijven', 'Read-only referentie']
  ]);

  roadmapH3_(body, '15 · WIJZIGINGSLOG');
  roadmapTable_(body, [
    ['Datum', 'Versie', 'Wijziging', 'Owner'],
    ['2026-08-10', 'V2.2', 'Printoptimalisatie: A4-portret behouden; Releases en Deals opgesplitst in gekoppelde werkblokken.', 'CM OPS AGENT'],
    ['2026-08-11', 'V2.2', 'Generator gesynchroniseerd met canonieke markdown: exacte kolomsets, onveranderlijke Release-ID/Kans-ID record-keys, verweesde Release status verwijderd en bijgewerkte automation mappings.', 'CM OPS AGENT']
  ]);

  roadmapApplyFont_(body);
}

function roadmapH2_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  p.editAsText().setBold(true).setFontFamily(ROADMAP_FONT);
  return p;
}

function roadmapH3_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText().setBold(true).setFontFamily(ROADMAP_FONT);
  return p;
}

function roadmapSub_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.editAsText().setBold(true).setFontFamily(ROADMAP_FONT);
  return p;
}

function roadmapP_(body, text) {
  const p = body.appendParagraph(String(text));
  p.editAsText().setFontFamily(ROADMAP_FONT).setFontSize(ROADMAP_BODY_PT);
  return p;
}

function roadmapTable_(body, rows) {
  const table = body.appendTable(rows);
  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      const txt = row.getCell(c).editAsText();
      txt.setFontFamily(ROADMAP_FONT);
      txt.setFontSize(ROADMAP_TABLE_PT);
      if (r === 0) txt.setBold(true);
    }
  }
  return table;
}

function roadmapApplyFont_(body) {
  const attrs = {};
  attrs[DocumentApp.Attribute.FONT_FAMILY] = ROADMAP_FONT;
  body.setAttributes(attrs);
}

function roadmapFindOrCreatePath_(startFolder, parts) {
  let current = startFolder;
  parts.forEach(function(part) {
    current = roadmapFindOrCreateFolder_(current, part);
  });
  return current;
}

function roadmapFindOrCreateFolder_(parentFolder, folderName) {
  const existing = parentFolder.getFoldersByName(folderName);
  if (existing.hasNext()) return existing.next();
  return parentFolder.createFolder(folderName);
}

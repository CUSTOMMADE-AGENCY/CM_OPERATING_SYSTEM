/**
 * Synchroniseert de centrale Google Drive-master voor ARTIST_ROADMAP_TEMPLATE
 * met de canonieke GitHub-specificatie V2.1.
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
 * 1. Laat DRY_RUN = true en draai syncArtistRoadmapV21().
 * 2. Controleer de Logger-output.
 * 3. Zet DRY_RUN = false en draai opnieuw.
 */

const ROADMAP_SYNC_DRY_RUN = true;
const ROADMAP_ROOT = 'OS_CUSTOMMADE';
const ROADMAP_LIBRARY_PATH = ['00_ADMIN', '03_TEMPLATES', '02_ARTIST_MANAGEMENT'];
const ROADMAP_MASTER_NAME = 'ARTIST_ROADMAP_TEMPLATE';
const ROADMAP_FONT = 'Montserrat';
const ROADMAP_BODY_PT = 10;

function syncArtistRoadmapV21() {
  const root = roadmapFindOrCreateFolder_(DriveApp.getRootFolder(), ROADMAP_ROOT);
  const library = roadmapFindOrCreatePath_(root, ROADMAP_LIBRARY_PATH);
  const existing = library.getFilesByName(ROADMAP_MASTER_NAME);

  Logger.log('=== CM ARTIST ROADMAP V2.1 SYNC' + (ROADMAP_SYNC_DRY_RUN ? ' (DRY_RUN)' : '') + ' ===');
  Logger.log('Doel: ' + ROADMAP_ROOT + '/' + ROADMAP_LIBRARY_PATH.join('/') + '/' + ROADMAP_MASTER_NAME);

  if (ROADMAP_SYNC_DRY_RUN) {
    Logger.log(existing.hasNext()
      ? 'MASTER bestaat en zou inhoudelijk worden gesynchroniseerd.'
      : 'MASTER ontbreekt en zou worden aangemaakt.');
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

  roadmapWriteV21_(doc);
  doc.saveAndClose();
  Logger.log('ARTIST_ROADMAP_TEMPLATE gesynchroniseerd naar V2.1 ACTIVE.');
}

function roadmapWriteV21_(doc) {
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
    ['Status', 'ACTIVE — V2.1'],
    ['Versie', 'V2.1'],
    ['Datum', 'AUGUSTUS 2026'],
    ['Risico', 'LOW'],
    ['Approval', 'CM OPS AGENT · client-facing → Sophia'],
  ]);

  roadmapH3_(body, '02 · DOEL');
  roadmapP_(body, 'Stuurbare roadmap die doelen, releases, inkomsten, deals en beslismomenten van een artist samenbrengt in één bron waaruit ClickUp-taken en KPI-tracking direct worden gegenereerd. De roadmap plant en stuurt; hij vervangt Moneybird (financiële waarheid) of het Rights Register (rechtenwaarheid) niet.');

  roadmapH3_(body, '03 · GEBRUIKSMOMENT');
  roadmapBullets_(body, [
    'Managementstart of artist onboarding.',
    'Kwartaalplanning of strategische herijking.',
    'Releaseplanning.',
  ]);

  roadmapH3_(body, '04 · BENODIGDE INPUT');
  roadmapTable_(body, [
    ['Input', 'Verplicht', 'Bron'],
    ['Artist profile', 'Ja', '01_ADMIN'],
    ['Vorige roadmap', 'Nee', '03_STRATEGY / 09_ARCHIVE'],
    ['KPI-baseline', 'Ja', 'KPI Template'],
    ['Rechten- & contractstatus', 'Ja', '02_CONTRACT / Rights Register'],
    ['Pipeline', 'Ja', 'Deal Pipeline (ClickUp)'],
    ['Financiële actuals', 'Ja', 'Moneybird / benoemde royalty-/afrekenbron'],
  ]);

  roadmapH3_(body, '05 · WERKTEMPLATE');

  roadmapH4_(body, 'DOELEN');
  roadmapTable_(body, [
    ['Hoofddoel', 'KPI', 'Baseline', 'Doel', 'Deadline', 'Eigenaar', 'Status'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
  ]);
  roadmapP_(body, 'Status = gecontroleerde waarde (zie Gecontroleerde statussen).');

  roadmapH4_(body, 'RELEASES');
  roadmapTable_(body, [
    ['Release', 'Type', 'Master status', 'Rights status', 'Distributie-deadline', 'Releasedatum', 'Marketingstart', 'Goedgekeurd budget', 'Werkelijke kosten', 'Verschil', 'Eigenaar', 'Status'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
  ]);
  roadmapP_(body, 'Rights status = CLEAR · OPEN · BLOCKED. Rights-clearance omvat minimaal splits, features en samples. Werkelijke kosten komen uit Moneybird; de roadmap registreert geen kosten zelf en vervangt Moneybird niet.');

  roadmapH4_(body, 'INKOMSTEN');
  roadmapTable_(body, [
    ['Inkomstenlane', 'Periode', 'Actueel', 'Doel', 'Forecast', 'Verschil', 'Bron'],
    ['Master royalties', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Publishing', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Neighboring rights', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Live', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Brand', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Sync', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Merch', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    ['Overig', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
  ]);
  roadmapP_(body, 'Actuals moeten herleidbaar zijn naar Moneybird of een benoemde royalty-/afrekenbron (kolom Bron). Nooit bedragen verzinnen; onbekend = TBD.');

  roadmapH4_(body, 'DEALS & KANSEN');
  roadmapTable_(body, [
    ['Type', 'Kans', 'Tegenpartij', 'Waarde', 'Kans %', 'Gewogen waarde', 'Fase', 'Eigenaar', 'Volgende actie', 'Deadline'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
  ]);
  roadmapP_(body, 'Type = booking · brand · sync · label · publishing · distribution · sponsorship · collaboration. Gewogen waarde = waarde × kans %; dit is een forecast-/pipeline-metric, geen financiële waarheid.');

  roadmapH4_(body, 'BESLISSINGEN');
  roadmapTable_(body, [
    ['Beslissing', 'Nodig vóór', 'Goedkeurder', 'Gevolg', 'Status'],
    ['TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
  ]);

  roadmapH4_(body, 'GECONTROLEERDE STATUSSEN (VOOR AUTOMATION)');
  roadmapTable_(body, [
    ['Veld', 'Toegestane waarden'],
    ['Objective status', 'NOT_STARTED · IN_PROGRESS · AT_RISK · DONE'],
    ['Release status', 'PLANNED · IN_PRODUCTION · SCHEDULED · RELEASED · ON_HOLD'],
    ['Rights status', 'CLEAR · OPEN · BLOCKED'],
    ['Deal/pipeline-fase', 'LEAD · QUALIFIED · DILIGENCE · CLOSING · CLOSED'],
    ['Decision status', 'OPEN · ESCALATED · DECIDED'],
  ]);
  roadmapP_(body, 'Velden waarop Make/ClickUp mappen gebruiken uitsluitend deze waarden — geen vrije tekst. Deal/pipeline-fase volgt DEAL_PIPELINE_CLICKUP_REFERENCE.');

  roadmapH3_(body, '06 · BESLISPOORTEN');
  roadmapBullets_(body, [
    'NIET-ONDERHANDELBAAR: geen release op de roadmap zonder Rights status = CLEAR (splits · features · samples geverifieerd).',
    'Financiële toezegging boven de toepasselijke approvalgrens → escaleren conform CM approval governance.',
    'Client-facing roadmap alleen na Sophia-approval.',
    'Elke deal met een financiële toezegging boven de toepasselijke approvalgrens → CM PROSPECT + LEGAL check, conform CM approval governance.',
  ]);

  roadmapH3_(body, '07 · RESULTAAT');
  roadmapBullets_(body, [
    'Goedgekeurde roadmap als werkkopie in Drive.',
    'ClickUp-taken gegenereerd uit Doelen/Releases/Deals.',
    'KPI-baseline gekoppeld.',
  ]);

  roadmapH3_(body, '08 · KWALITEITSCONTROLE');
  roadmapBullets_(body, [
    'Elk doel heeft KPI, doel, deadline, eigenaar en gecontroleerde status.',
    'Elke release heeft master-status, Rights status, distributie-deadline, eigenaar en gecontroleerde status.',
    'Elke inkomstenregel met een actual heeft een benoemde bron (Moneybird of afrekenbron).',
    'Elke deal heeft fase, eigenaar, volgende actie en deadline.',
    'Geen open beslissing zonder goedkeurder.',
    'Alle automation-velden gebruiken gecontroleerde waarden.',
    'Iedere source field-mapping verwijst letterlijk naar een bestaande werktemplatekolom.',
  ]);

  roadmapH3_(body, '09 · GOEDKEURING');
  roadmapP_(body, 'CM OPS AGENT (Level 1–2). Client-facing, of financiële toezegging boven de toepasselijke approvalgrens → escaleren naar Sophia / CM CONTROL conform CM approval governance.');

  roadmapH3_(body, '10 · OVERDRACHT');
  roadmapBullets_(body, ['ClickUp (taken)', 'KPI Template', 'Release Kickoff']);

  roadmapH3_(body, '11 · LEIDENDE BRON');
  roadmapP_(body, 'GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.');

  roadmapH3_(body, '12 · OPSLAG');
  roadmapP_(body, 'Drive: [ARTIST]/03_STRATEGY · YYYY-MM-DD_[ARTIST]_ROADMAP_vX.Y');

  roadmapH3_(body, '13 · AI-INSTRUCTIES');
  roadmapBullets_(body, [
    'Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.',
    'Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.',
    'Verzin nooit bedragen of approvalgrenzen; verwijs naar Moneybird respectievelijk CM approval governance.',
    'Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.',
    'Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.',
    'Gebruik voor deal/pipeline-fase uitsluitend de waarden uit DEAL_PIPELINE_CLICKUP_REFERENCE.',
  ]);

  roadmapH3_(body, '14 · AUTOMATISERINGSKOPPELINGEN');
  roadmapTable_(body, [
    ['Trigger', 'Systeem', 'Actie', 'Field mapping'],
    ['Roadmap approved', 'Make → ClickUp', 'Doel-taken aanmaken', 'Hoofddoel→Taak, Eigenaar→Assignee, Deadline→Due date, Status→Status'],
    ['Release-regel toegevoegd', 'Make → ClickUp', 'Release-checklist', 'Release→List, Distributie-deadline→Due date, Eigenaar→Assignee, Status→Status'],
    ['Rights status = OPEN/BLOCKED', 'Make → ClickUp', 'Rights/legal opvolgtaak', 'Release→Taak, Rights status→Status'],
    ['Deal-regel toegevoegd/gewijzigd', 'Make → ClickUp', 'Pipeline-record', 'Kans→Record, Eigenaar→Assignee, Deadline→Due date, Fase→Status, Volgende actie→Next action'],
    ['Financiële actuals', '—', 'Niet vanuit roadmap naar Moneybird geschreven; Moneybird blijft financiële waarheid', 'Read-only referentie'],
  ]);

  roadmapH3_(body, '15 · WIJZIGINGSLOG');
  roadmapTable_(body, [
    ['Datum', 'Versie', 'Wijziging', 'Owner'],
    ['2026-07-27', 'V2.0', 'Herbouwd naar Template Architecture V2.', 'CM OPS AGENT'],
    ['2026-08-09', 'V2.1', 'Werk-tabellen, rights, inkomsten, deals, statussen en automation uitgebreid.', 'CM OPS AGENT'],
    ['2026-08-10', 'V2.1', 'Finale consistency-review; pipeline-fasen gelijkgetrokken; ACTIVE.', 'CM OPS AGENT'],
  ]);

  roadmapP_(body, 'Leidende bron: GitHub — docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_TEMPLATE.md. Drive bevat uitsluitend werkbare kopieën.');
  roadmapApplyFont_(body);
}

function roadmapH2_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  p.editAsText().setBold(true);
}

function roadmapH3_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText().setBold(true);
}

function roadmapH4_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING4);
  p.editAsText().setBold(true);
}

function roadmapP_(body, text) {
  const p = body.appendParagraph(String(text));
  p.setHeading(DocumentApp.ParagraphHeading.NORMAL);
  p.editAsText().setBold(false).setFontSize(ROADMAP_BODY_PT);
}

function roadmapBullets_(body, lines) {
  lines.forEach(function(line) {
    const p = body.appendListItem(String(line));
    p.setGlyphType(DocumentApp.GlyphType.BULLET);
    p.editAsText().setFontSize(ROADMAP_BODY_PT);
  });
}

function roadmapTable_(body, rows) {
  const table = body.appendTable(rows);
  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      row.getCell(c).editAsText().setFontSize(ROADMAP_BODY_PT);
      if (r === 0) row.getCell(c).editAsText().setBold(true);
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

function roadmapFindOrCreateFolder_(parent, name) {
  const matches = parent.getFoldersByName(name);
  return matches.hasNext() ? matches.next() : parent.createFolder(name);
}

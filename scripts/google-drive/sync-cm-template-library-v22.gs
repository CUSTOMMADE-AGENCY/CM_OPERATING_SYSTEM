/**
 * CM TEMPLATE LIBRARY SYNC — V2.2
 *
 * Synchroniseert ALLE canonical CM template-masters uit GitHub naar de centrale
 * Google Drive template library en rendert het officiële CM-logo rechtsboven.
 *
 * GOVERNANCE
 * - GitHub = canonical template-specificatie.
 * - Drive = centrale master + werkbare kopieën.
 * - ClickUp = uitvoering/status.
 * - Moneybird = financiële waarheid.
 *
 * VEILIGHEID
 * - Alleen centrale masters onder OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES worden
 *   aangemaakt/bijgewerkt.
 * - Ingevulde dossierkopieën worden NOOIT overschreven.
 * - DRY_RUN staat standaard aan.
 */

const CM_TEMPLATE_SYNC_DRY_RUN = true;
const CM_TEMPLATE_ROOT = 'OS_CUSTOMMADE';
const CM_TEMPLATE_LIBRARY_PATH = ['00_ADMIN', '03_TEMPLATES'];
const CM_TEMPLATE_REPO_RAW =
  'https://raw.githubusercontent.com/CUSTOMMADE-AGENCY/CM_OPERATING_SYSTEM/main/' +
  'docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/';
const CM_TEMPLATE_FONT = 'Montserrat';
const CM_TEMPLATE_BODY_PT = 10;
const CM_TEMPLATE_TABLE_PT = 8;

// Officiële CM-brand asset in Google Drive.
const CM_BRAND_LOGO_FILE_ID = '12eIxa4HJ-Ptn6TcFyTdVgdMjZQv7EVR5';
const CM_BRAND_LOGO_WIDTH_PT = 72;

/** Alleen canonical, daadwerkelijk bestaande templates. */
const CM_TEMPLATE_V22_REGISTRY = [
  ['01_SHARED_SERVICES', 'INTAKE_TEMPLATE', '01_SHARED_SERVICES/INTAKE_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'CONTACT_SHEET_TEMPLATE', '01_SHARED_SERVICES/CONTACT_SHEET_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'CLIENT_ONBOARDING_TEMPLATE', '01_SHARED_SERVICES/CLIENT_ONBOARDING_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'CLIENT_PROFILE_TEMPLATE', '01_SHARED_SERVICES/CLIENT_PROFILE_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'MEETING_RECAP_TEMPLATE', '01_SHARED_SERVICES/MEETING_RECAP_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'DO_NOTS_TEMPLATE', '01_SHARED_SERVICES/DO_NOTS_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'CONTRACT_SUMMARY_TEMPLATE', '01_SHARED_SERVICES/CONTRACT_SUMMARY_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'APPROVAL_EVIDENCE_TEMPLATE', '01_SHARED_SERVICES/APPROVAL_EVIDENCE_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'AMENDMENT_LOG_TEMPLATE', '01_SHARED_SERVICES/AMENDMENT_LOG_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'REGISTER_TEMPLATE', '01_SHARED_SERVICES/REGISTER_TEMPLATE.md'],
  ['01_SHARED_SERVICES', 'VERSION_LOG_TEMPLATE', '01_SHARED_SERVICES/VERSION_LOG_TEMPLATE.md'],

  ['02_ARTIST_MANAGEMENT', 'ARTIST_ROADMAP_TEMPLATE', '02_ARTIST_MANAGEMENT/ARTIST_ROADMAP_TEMPLATE.md'],
  ['02_ARTIST_MANAGEMENT', 'RELEASE_STRATEGY_TEMPLATE', '02_ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md'],
  ['02_ARTIST_MANAGEMENT', 'RELEASE_KICKOFF_TEMPLATE', '02_ARTIST_MANAGEMENT/RELEASE_KICKOFF_TEMPLATE.md'],
  ['02_ARTIST_MANAGEMENT', 'KPI_TEMPLATE', '02_ARTIST_MANAGEMENT/KPI_TEMPLATE.md'],
  ['02_ARTIST_MANAGEMENT', 'JAARPLAN_TEMPLATE', '02_ARTIST_MANAGEMENT/JAARPLAN_TEMPLATE.md'],

  ['03_MASTER_BOUTIQUE', 'DEAL_MEMO_TEMPLATE', '03_MASTER_BOUTIQUE/DEAL_MEMO_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'DEAL_NEGOTIATION_TEMPLATE', '03_MASTER_BOUTIQUE/DEAL_NEGOTIATION_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'PARTNERSHIP_BRIEF_TEMPLATE', '03_MASTER_BOUTIQUE/PARTNERSHIP_BRIEF_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'MUSIC_RIGHTS_REGISTER', '03_MASTER_BOUTIQUE/MUSIC_RIGHTS_REGISTER.md'],
  ['03_MASTER_BOUTIQUE', 'RIGHTS_AUDIT_TEMPLATE', '03_MASTER_BOUTIQUE/RIGHTS_AUDIT_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'VALUATION_TEMPLATE', '03_MASTER_BOUTIQUE/VALUATION_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'DATA_ROOM_TEMPLATE', '03_MASTER_BOUTIQUE/DATA_ROOM_TEMPLATE.md'],
  ['03_MASTER_BOUTIQUE', 'BUYER_PIPELINE_TEMPLATE', '03_MASTER_BOUTIQUE/BUYER_PIPELINE_TEMPLATE.md'],

  ['04_CLIENT_DELIVERABLES', 'BRAND_AUDIT_TEMPLATE', '04_CLIENT_DELIVERABLES/BRAND_AUDIT_TEMPLATE.md'],
  ['04_CLIENT_DELIVERABLES', 'BUSINESS_AUDIT_TEMPLATE', '04_CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md'],
  ['04_CLIENT_DELIVERABLES', 'ARTIST_AUDIT_TEMPLATE', '04_CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md'],
  ['04_CLIENT_DELIVERABLES', 'MANAGEMENT_PROPOSAL_TEMPLATE', '04_CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md'],

  ['05_CLICKUP_REFERENCES', 'ACTION_TRACKER_CLICKUP_REFERENCE', '05_CLICKUP_REFERENCES/ACTION_TRACKER_CLICKUP_REFERENCE.md'],
  ['05_CLICKUP_REFERENCES', 'DEAL_PIPELINE_CLICKUP_REFERENCE', '05_CLICKUP_REFERENCES/DEAL_PIPELINE_CLICKUP_REFERENCE.md'],

  ['06_GMAIL_TEMPLATES', 'EMAIL_INSTRUCTIONS_TEMPLATE', '06_GMAIL_TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md'],
  ['07_REPORTING', 'MONTHLY_REPORT_TEMPLATE', '07_REPORTING/MONTHLY_REPORT_TEMPLATE.md'],

  ['08_START_HIER', 'START_HIER_04_DEALS_TEMPLATE', '08_START_HIER/START_HIER_04_DEALS_TEMPLATE.md'],
  ['08_START_HIER', 'START_HIER_07_LEGAL_TEMPLATE', '08_START_HIER/START_HIER_07_LEGAL_TEMPLATE.md'],
];

function syncCmTemplateLibraryV22() {
  const root = cmV22FindOrCreateFolder_(DriveApp.getRootFolder(), CM_TEMPLATE_ROOT);
  const library = cmV22FindOrCreatePath_(root, CM_TEMPLATE_LIBRARY_PATH);
  const report = { wouldCreate: [], wouldUpdate: [], updated: [], created: [], errors: [] };

  Logger.log('=== CM TEMPLATE LIBRARY V2.2 SYNC' +
    (CM_TEMPLATE_SYNC_DRY_RUN ? ' (DRY_RUN)' : '') + ' ===');
  Logger.log('Templates: ' + CM_TEMPLATE_V22_REGISTRY.length);
  Logger.log('Brand logo file: ' + CM_BRAND_LOGO_FILE_ID);

  // Fail-fast vóór documentwijzigingen wanneer de logo-asset niet toegankelijk is.
  const logoBlob = CM_TEMPLATE_SYNC_DRY_RUN ? null : cmV22GetLogoBlob_();

  CM_TEMPLATE_V22_REGISTRY.forEach(function(entry) {
    const submapName = entry[0];
    const masterName = entry[1];
    const githubPath = entry[2];

    try {
      const submap = cmV22FindOrCreateFolder_(library, submapName);
      const files = submap.getFilesByName(masterName);
      const exists = files.hasNext();

      if (CM_TEMPLATE_SYNC_DRY_RUN) {
        (exists ? report.wouldUpdate : report.wouldCreate)
          .push(submapName + '/' + masterName);
        return;
      }

      const markdown = cmV22FetchMarkdown_(githubPath);
      let doc;

      if (exists) {
        doc = DocumentApp.openById(files.next().getId());
        report.updated.push(submapName + '/' + masterName);
      } else {
        doc = DocumentApp.create(masterName);
        const file = DriveApp.getFileById(doc.getId());
        cmV22MoveFileTo_(file, submap);
        report.created.push(submapName + '/' + masterName);
      }

      cmV22RenderMarkdown_(doc, markdown, logoBlob);
      doc.saveAndClose();
    } catch (err) {
      report.errors.push(submapName + '/' + masterName + ': ' + err.message);
    }
  });

  cmV22LogReport_(report);
  return report;
}

function cmV22GetLogoBlob_() {
  const file = DriveApp.getFileById(CM_BRAND_LOGO_FILE_ID);
  const blob = file.getBlob();
  const type = String(blob.getContentType() || '');
  if (type.indexOf('image/') !== 0) {
    throw new Error('CM brand logo is geen image-bestand: ' + type);
  }
  return blob;
}

function cmV22FetchMarkdown_(path) {
  const response = UrlFetchApp.fetch(CM_TEMPLATE_REPO_RAW + path, {
    muteHttpExceptions: true,
    followRedirects: true,
  });
  const code = response.getResponseCode();
  if (code !== 200) throw new Error('GitHub fetch HTTP ' + code + ' voor ' + path);
  return response.getContentText('UTF-8');
}

function cmV22RenderMarkdown_(doc, markdown, logoBlob) {
  const body = doc.getBody();
  body.clear();

  body.setPageWidth(595.28);
  body.setPageHeight(841.89);
  body.setMarginTop(42);
  body.setMarginBottom(42);
  body.setMarginLeft(42);
  body.setMarginRight(42);

  cmV22InsertLogo_(body, logoBlob);

  const lines = markdown.replace(/\r/g, '').split('\n');
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    // HTML-logo uit Markdown niet als tekst renderen; logo wordt door Apps Script geplaatst.
    if (!line || /^<img\b/i.test(line) || /^---+$/.test(line)) {
      i++;
      continue;
    }

    if (cmV22IsTableRow_(line) && i + 1 < lines.length &&
        cmV22IsTableSeparator_(lines[i + 1].trim())) {
      const rows = [cmV22ParseTableRow_(line)];
      i += 2;
      while (i < lines.length && cmV22IsTableRow_(lines[i].trim())) {
        rows.push(cmV22ParseTableRow_(lines[i].trim()));
        i++;
      }
      cmV22AppendTable_(body, rows);
      continue;
    }

    if (/^# /.test(line)) {
      cmV22Heading_(body, cmV22Clean_(line.replace(/^# /, '')), 2);
      i++;
      continue;
    }
    if (/^## /.test(line)) {
      cmV22Heading_(body, cmV22Clean_(line.replace(/^## /, '')), 3);
      i++;
      continue;
    }
    if (/^### /.test(line)) {
      cmV22Subheading_(body, cmV22Clean_(line.replace(/^### /, '')));
      i++;
      continue;
    }

    if (/^>/.test(line)) {
      const callout = [];
      while (i < lines.length && /^>/.test(lines[i].trim())) {
        const t = lines[i].trim().replace(/^>\s?/, '');
        if (t) callout.push(cmV22Clean_(t));
        i++;
      }
      cmV22Callout_(body, callout);
      continue;
    }

    if (/^[-*] /.test(line)) {
      const p = body.appendListItem(cmV22Clean_(line.replace(/^[-*] /, '')));
      p.setGlyphType(DocumentApp.GlyphType.BULLET);
      p.editAsText().setFontFamily(CM_TEMPLATE_FONT).setFontSize(CM_TEMPLATE_BODY_PT);
      i++;
      continue;
    }

    cmV22Paragraph_(body, cmV22Clean_(line));
    i++;
  }

  const attrs = {};
  attrs[DocumentApp.Attribute.FONT_FAMILY] = CM_TEMPLATE_FONT;
  body.setAttributes(attrs);
}

function cmV22InsertLogo_(body, logoBlob) {
  if (!logoBlob) return null;
  const p = body.appendParagraph('');
  p.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  const image = p.appendInlineImage(logoBlob.copyBlob());
  const originalWidth = image.getWidth();
  const originalHeight = image.getHeight();
  if (originalWidth > 0 && originalHeight > 0) {
    image.setWidth(CM_BRAND_LOGO_WIDTH_PT);
    image.setHeight(Math.max(1, Math.round(originalHeight * CM_BRAND_LOGO_WIDTH_PT / originalWidth)));
  } else {
    image.setWidth(CM_BRAND_LOGO_WIDTH_PT);
  }
  return p;
}

function cmV22IsTableRow_(line) {
  return /^\|.*\|$/.test(line);
}
function cmV22IsTableSeparator_(line) {
  if (!cmV22IsTableRow_(line)) return false;
  const cells = cmV22ParseTableRow_(line);
  return cells.length > 0 && cells.every(function(c) {
    return /^:?-{3,}:?$/.test(c.replace(/\s/g, ''));
  });
}
function cmV22ParseTableRow_(line) {
  return line.replace(/^\|/, '').replace(/\|$/, '').split('|')
    .map(function(cell) { return cmV22Clean_(cell.trim()); });
}
function cmV22AppendTable_(body, rows) {
  if (!rows.length) return null;
  const width = rows[0].length;
  const normalized = rows.map(function(row) {
    const copy = row.slice(0, width);
    while (copy.length < width) copy.push('');
    return copy;
  });
  const table = body.appendTable(normalized);
  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      const text = row.getCell(c).editAsText();
      text.setFontFamily(CM_TEMPLATE_FONT).setFontSize(CM_TEMPLATE_TABLE_PT);
      if (r === 0) text.setBold(true);
    }
  }
  return table;
}
function cmV22Heading_(body, text, level) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(level === 2 ? DocumentApp.ParagraphHeading.HEADING2 : DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText().setBold(true).setFontFamily(CM_TEMPLATE_FONT);
  return p;
}
function cmV22Subheading_(body, text) {
  const p = body.appendParagraph(String(text).toUpperCase());
  p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText().setBold(true).setFontFamily(CM_TEMPLATE_FONT);
  return p;
}
function cmV22Paragraph_(body, text) {
  const p = body.appendParagraph(String(text));
  p.setHeading(DocumentApp.ParagraphHeading.NORMAL);
  p.editAsText().setFontFamily(CM_TEMPLATE_FONT).setFontSize(CM_TEMPLATE_BODY_PT);
  return p;
}
function cmV22Callout_(body, lines) {
  const table = body.appendTable([[lines.join('\n') || '']]);
  const cell = table.getCell(0, 0);
  cell.setBackgroundColor('#000000');
  const text = cell.editAsText();
  text.setForegroundColor('#ffffff').setFontFamily(CM_TEMPLATE_FONT)
    .setFontSize(CM_TEMPLATE_BODY_PT).setBold(true);
  return table;
}
function cmV22Clean_(text) {
  return String(text).replace(/\*\*/g, '').replace(/__/g, '').replace(/`/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').trim();
}
function cmV22FindOrCreatePath_(start, parts) {
  let current = start;
  parts.forEach(function(part) { current = cmV22FindOrCreateFolder_(current, part); });
  return current;
}
function cmV22FindOrCreateFolder_(parent, name) {
  const found = parent.getFoldersByName(name);
  return found.hasNext() ? found.next() : parent.createFolder(name);
}
function cmV22MoveFileTo_(file, target) {
  target.addFile(file);
  const parents = file.getParents();
  while (parents.hasNext()) {
    const parent = parents.next();
    if (parent.getId() !== target.getId()) parent.removeFile(file);
  }
}
function cmV22LogReport_(report) {
  Logger.log('Would create: ' + report.wouldCreate.length);
  report.wouldCreate.forEach(function(x) { Logger.log('  + ' + x); });
  Logger.log('Would update: ' + report.wouldUpdate.length);
  report.wouldUpdate.forEach(function(x) { Logger.log('  ~ ' + x); });
  Logger.log('Created: ' + report.created.length);
  report.created.forEach(function(x) { Logger.log('  + ' + x); });
  Logger.log('Updated: ' + report.updated.length);
  report.updated.forEach(function(x) { Logger.log('  ~ ' + x); });
  Logger.log('Errors: ' + report.errors.length);
  report.errors.forEach(function(x) { Logger.log('  ! ' + x); });
}

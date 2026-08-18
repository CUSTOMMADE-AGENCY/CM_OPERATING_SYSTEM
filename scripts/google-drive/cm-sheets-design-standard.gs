/**
 * CUSTOMMADE AGENCY — GOOGLE SHEETS DESIGN STANDARD
 * Canonieke formatter-helper voor CM Google Sheets.
 *
 * Governance:
 * docs/00_GOVERNANCE/GOOGLE_SHEETS_DESIGN_STANDARD.md
 *
 * Gebruik deze waarden/helpers in nieuwe CM Sheet-scripts.
 * Geen eigen primaire kleuren of fonts hardcoden.
 */

const CM_SHEETS_DESIGN = Object.freeze({
  FONT_FAMILY: 'Montserrat',
  BODY_PT: 10,
  COMPACT_PT: 8,
  HEADER_PT: 9,
  SECTION_PT: 11,
  TITLE_PT: 16,
  PRIMARY: '#000000',
  ON_PRIMARY: '#FFFFFF',
  BODY_BG: '#FFFFFF',
  BODY_TEXT: '#000000',
  SUBTLE: '#F3F4F6',
  LANGUAGE: 'nl'
});

/** Past CM-baseline toe op een bestaande sheet zonder data te wissen. */
function cmApplySheetDesign_(sheet, options) {
  options = options || {};
  if (!sheet || sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) return;

  const compact = options.compact === true;
  const bodyPt = compact ? CM_SHEETS_DESIGN.COMPACT_PT : CM_SHEETS_DESIGN.BODY_PT;

  sheet.setHiddenGridlines(true);
  sheet.getDataRange()
    .setFontFamily(CM_SHEETS_DESIGN.FONT_FAMILY)
    .setFontSize(bodyPt)
    .setFontColor(CM_SHEETS_DESIGN.BODY_TEXT)
    .setVerticalAlignment('middle')
    .setWrap(true);

  if (options.headerRow !== false) {
    const headerRow = Number(options.headerRow || 1);
    cmStyleTableHeader_(sheet.getRange(headerRow, 1, 1, sheet.getLastColumn()));
    if (options.freezeHeader !== false) sheet.setFrozenRows(headerRow);
  }

  if (options.autoResize !== false) {
    for (let col = 1; col <= sheet.getLastColumn(); col++) {
      sheet.autoResizeColumn(col);
      if (sheet.getColumnWidth(col) > 320) sheet.setColumnWidth(col, 320);
    }
  }
}

/** Canonieke tabelheader: zwart, wit, Montserrat. */
function cmStyleTableHeader_(range) {
  range
    .setBackground(CM_SHEETS_DESIGN.PRIMARY)
    .setFontColor(CM_SHEETS_DESIGN.ON_PRIMARY)
    .setFontFamily(CM_SHEETS_DESIGN.FONT_FAMILY)
    .setFontSize(CM_SHEETS_DESIGN.HEADER_PT)
    .setFontWeight('bold')
    .setWrap(true);
}

/** Canonieke sectiebalk voor cockpits. */
function cmStyleSectionHeader_(range) {
  range
    .setBackground(CM_SHEETS_DESIGN.PRIMARY)
    .setFontColor(CM_SHEETS_DESIGN.ON_PRIMARY)
    .setFontFamily(CM_SHEETS_DESIGN.FONT_FAMILY)
    .setFontSize(CM_SHEETS_DESIGN.SECTION_PT)
    .setFontWeight('bold');
}

/** Canonieke cockpit-/dashboardtitel. */
function cmStyleDashboardTitle_(range) {
  range
    .setBackground(CM_SHEETS_DESIGN.PRIMARY)
    .setFontColor(CM_SHEETS_DESIGN.ON_PRIMARY)
    .setFontFamily(CM_SHEETS_DESIGN.FONT_FAMILY)
    .setFontSize(CM_SHEETS_DESIGN.TITLE_PT)
    .setFontWeight('bold');
}

/**
 * Audit zonder destructieve wijzigingen.
 * Retourneert issues zodat scripts deze kunnen loggen/escaleren.
 */
function cmAuditSheetDesign_(spreadsheet) {
  const issues = [];
  spreadsheet.getSheets().forEach(function(sheet) {
    if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) return;

    const sample = sheet.getRange(1, 1);
    if (sample.getFontFamily() !== CM_SHEETS_DESIGN.FONT_FAMILY) {
      issues.push(sheet.getName() + ': lettertype is niet Montserrat.');
    }

    const bg = sample.getBackground().toUpperCase();
    if (bg !== CM_SHEETS_DESIGN.PRIMARY) {
      issues.push(sheet.getName() + ': primaire header is niet zwart.');
    }
  });
  return issues;
}

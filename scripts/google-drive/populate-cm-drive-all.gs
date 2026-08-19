/**
 * Combined CM Drive artifact rollout.
 *
 * Requires these scripts in the same Apps Script project:
 * - populate-cm-drive-templates.gs
 * - provision-cm-artist-royalty-sheets.gs
 *
 * Purpose:
 * One governed entry point for both document-template provisioning and the
 * mandatory native Google Sheets Royalty Sheet provisioning.
 */
function populateCmDriveAll() {
  const docsReport = populateCmDriveTemplates();
  const royaltyReport = provisionCmArtistRoyaltySheets();

  return {
    documents: docsReport,
    royaltySheets: royaltyReport,
  };
}

/**
 * Compliance audit focused on mandatory artist Royalty Sheets.
 */
function auditCmDriveRoyaltySheetCompliance() {
  return auditCmArtistRoyaltySheets();
}

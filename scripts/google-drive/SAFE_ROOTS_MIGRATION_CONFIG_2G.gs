/**
 * Sprint 2G safe-roots migration configuration.
 *
 * Configuration only: no Drive mutation is performed by this file.
 * It synchronizes with existing Sprint 2B governance and does not introduce
 * new governance or alter locked decisions.
 */
const SAFE_ROOTS_MIGRATION_CONFIG_2G = {
  sprint: 'Sprint 2G',
  rootFolderName: 'OS_CUSTOMMADE',
  dryRunDefault: true,
  executionEnabledDefault: false,
  noDeleteActions: true,
  noPermissionChanges: true,
  governanceSources: [
    'docs/00_GOVERNANCE/DECISION_LOG.md',
    'docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md',
    'docs/00_GOVERNANCE/GOVERNANCE_RULES.md',
    'docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md'
  ],
  safeRootMappings: [
    { source: '01_ARTIST_MANAGEMENT', target: '02_ARTIST_MANAGEMENT', action: 'MOVE_TO_ARTIST_MANAGEMENT' },
    { source: '02_MASTER_BOUTIQUE', target: '01_MASTER_BOUTIQUE', action: 'MOVE_TO_MASTER_BOUTIQUE' },
    { source: '03_EXECUTIVE', target: '00_ADMIN', action: 'MOVE_TO_ADMIN' },
    { source: '05_MARKETING', target: '08_MARKETING_OR_09_CONTENT', action: 'MOVE_MARKETING_SPLIT' }
  ],
  holdRoots: ['00_INBOX', '04_BUSINESS', '06_PROJECTS', '07_ARCHIVE'],
  holdKeywords: [
    'fierce', 'legal', 'juridisch', 'finance', 'financ', 'rechten', 'rights',
    'contract', 'contracten', 'contracts', 'agreement', 'agreements',
    'overeenkomst', 'royalty', 'royalties', 'invoice', 'factuur', 'facturen',
    'tax', 'btw', 'bank', 'payment', 'betalingen', 'nda', 'apa', 'loi',
    'license', 'licence', 'unknown', 'onbekend', 'mixed', 'gemengd',
    'conflict', 'review', 'tbd'
  ],
  contentKeywords: [
    'content', 'asset', 'assets', 'social', 'social media', 'socialmedia',
    'instagram', 'tiktok', 'youtube', 'video', 'photo', 'photos', 'beeld',
    'copy', 'creative', 'design', 'reels', 'shorts'
  ]
};

function getSafeRootsMigrationConfig2G() {
  return JSON.parse(JSON.stringify(SAFE_ROOTS_MIGRATION_CONFIG_2G));
}

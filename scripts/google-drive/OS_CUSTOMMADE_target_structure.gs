/**
 * OS_CUSTOMMADE target structure for Sprint 2G.
 *
 * This file is a configuration artifact only. It does not introduce new
 * governance and must stay aligned with the locked Week 1 Build Pack v2 and
 * the Sprint 2B Drive Migration Matrix.
 */
const OS_CUSTOMMADE_TARGET_STRUCTURE_2G = {
  rootName: 'OS_CUSTOMMADE',
  roots: [
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
  ]
};

function getOsCustommadeTargetStructure2G() {
  return JSON.parse(JSON.stringify(OS_CUSTOMMADE_TARGET_STRUCTURE_2G));
}

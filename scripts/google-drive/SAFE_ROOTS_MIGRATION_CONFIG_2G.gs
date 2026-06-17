/**
 * SAFE ROOTS — MIGRATION / DRY-RUN CONFIG (Sprint 2G)
 *
 * LET OP: dit is de configuratie voor het MIGRATIESCRIPT dat de
 * "CM_OS Sprint 2C Drive Migration DRY RUN Log" produceert — NIET de
 * target-structure creator. Vervang de bestaande SOURCE/TARGET/KEEP-config
 * van het migratiescript door onderstaande blokken.
 *
 * Kernwijziging 2G-4: bronherkenning gaat per FOLDER-ID, niet per naam.
 * Hiermee vervalt de 2F-fout ERROR_MISSING_SOURCE_OR_TARGET die ontstond
 * doordat het script naar '07_ARCHIVE' zocht terwijl de map '07_ ARCHIVE'
 * (mét spatie) heet.
 *
 * Veiligheid: dry run only. Geen moves, geen deletes, geen archivering.
 */

const ROOT_FOLDER_ID = '0B2aV9TqyUPDzd0F1WEd1RkVxNFk'; // OS _CUSTOMMADE (spatie in naam; altijd via ID benaderen)

/* 12 permanente doel-roots (2G-1: 00_INBOX toegevoegd). */
const TARGET_ROOTS = [
  '00_ADMIN', '00_INBOX', '01_MASTER_BOUTIQUE', '02_ARTIST_MANAGEMENT',
  '03_CLIENTS', '04_DEALS', '05_OPERATIONS', '06_FINANCE', '07_LEGAL',
  '08_MARKETING', '09_CONTENT', '99_ARCHIVE'
];

/* Roots die behouden blijven en NOOIT als migratiebron tellen (2G-1). */
const KEEP_ROOTS_BY_ID = {
  '1_R9vxd6x9hB0yGpnx7_f178Rin_uBwOi': {
    name: '00_INBOX',
    note: 'Permanente intake-root (2G-1). Children blijven HOLD_OWNER_REVIEW; root niet opsplitsen.'
  }
};

/* Bron-roots → doel. Gekeyd op folder-ID (2G-4, robuust tegen spaties/typo\'s). */
const SOURCE_ROOTS_BY_ID = {
  // Broer op Shared Drive-root (0AGaV9TqyUPDzUk9PVA), geen child van OS _CUSTOMMADE.
  '15gmbGd3UHgPhbHDZIySgk_Qqu2MCxYpK': {
    name: '00_GOVERNANCE', target: '00_ADMIN/GOVERNANCE_REFERENCE',
    action: 'governance-referentie (GitHub leidend)', review: true
  },
  // 2G-3 LOCKED: legacy artist-root → canonical artist-root.
  '0B2aV9TqyUPDzZ3I5ZTFnaWlYbUU': {
    name: '01_ARTIST_MANAGEMENT', target: '02_ARTIST_MANAGEMENT',
    action: 'samenvoegen', review: false, locked: '2G-3'
  },
  '1Z3S6xz7_zg3UjaNImBLn_JQuizQEYAYR': {
    name: '02_MASTER_BOUTIQUE', target: ['01_MASTER_BOUTIQUE', '04_DEALS'],
    action: 'opsplitsen', review: true
  },
  '1lfgz8pYf9EDze1iJwv_vrOFsAeEW_OEM': {
    name: '03_EXECUTIVE', target: ['00_ADMIN', '06_FINANCE', '07_LEGAL'],
    action: 'opsplitsen', review: true
  },
  '0B2aV9TqyUPDzdk1pR3hlSlM4RFk': {
    name: '04_BUSINESS', target: ['03_CLIENTS', '04_DEALS', '05_OPERATIONS', '06_FINANCE', '07_LEGAL'],
    action: 'opsplitsen', review: true
  },
  '1UDYPPEKPH8WZV-Q2Gi-VY1mmIc6G83KE': {
    name: '05_MARKETING', target: ['08_MARKETING', '09_CONTENT', '03_CLIENTS'],
    action: 'opsplitsen', review: true
  },
  '1LqTYF95lkXQ5xGyGKYYpRAndjIk0dVUL': {
    name: '06_PROJECTS', target: 'PER_DOSSIER',
    action: 'classificeren / HOLD', review: true
  },
  // 2G-4 FIX: legacy archive met spatie in naam. Nu via ID herkend.
  '0B2aV9TqyUPDzRTRreGNBZWxWd2s': {
    name: '07_ ARCHIVE', target: '99_ARCHIVE',
    action: 'inventariseren + samenvoegen; shims behouden', review: true
  }
};

/* 2G-2: artist-content routeert standaard naar 02_ARTIST_MANAGEMENT.
   03_CLIENTS is uitsluitend voor niet-artist clients/brands.
   Bij twijfel artist vs client → artist wint. */
const ARTIST_DEFAULT_TARGET = '02_ARTIST_MANAGEMENT';

/**
 * Classificeer een root op rootniveau (vervangt naam-gebaseerde lookups).
 * Volgorde: KEEP > TARGET > SOURCE > UNEXPECTED.
 */
function classifyRoot_(folder) {
  const id = folder.getId();
  const name = folder.getName();

  if (KEEP_ROOTS_BY_ID[id]) {
    return { status: 'KEPT_ROOT', name: name, detail: KEEP_ROOTS_BY_ID[id] };
  }
  if (TARGET_ROOTS.indexOf(name) !== -1) {
    return { status: 'TARGET_PRESENT', name: name };
  }
  if (SOURCE_ROOTS_BY_ID[id]) {
    const src = SOURCE_ROOTS_BY_ID[id];
    return {
      status: src.locked ? 'LOCKED_MAPPING' : 'ROOT_REVIEW',
      name: name, detail: src
    };
  }
  return { status: 'UNEXPECTED_ROOT_REVIEW_ONLY', name: name };
}

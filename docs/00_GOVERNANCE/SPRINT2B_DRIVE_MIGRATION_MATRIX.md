# Sprint 2B — Drive Migration Matrix

**Status:** UPDATED BY SPRINT 2G GOVERNANCE LOCK
**Datum update:** 2026-06-17

## Governancebasis

Deze matrix is bevroren door Sprint 2G en mag alleen als dry-run/reviewmatrix worden gebruikt. Sprint 2G introduceert geen live migratie, deletes, archivering of nieuwe governance.

## Locked target roots

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 00_INBOX
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

## Sprint 2G locked migration matrix

| Current root | Recognition | Locked decision | Projected target | Sprint 2G action |
|---|---|---|---|---|
| `00_INBOX` | Folder-ID keep-root | Permanente intake-root behouden. | `00_INBOX` | KEEP / review-only |
| `00_ADMIN/INBOX` | Path check | Niet opnieuw aanmaken. | N.v.t. | NO CREATE |
| `01_ARTIST_MANAGEMENT` | Folder-ID source-root | Locked route naar canonical artist-root. | `02_ARTIST_MANAGEMENT` | DRY-RUN LOCKED_MAPPING |
| Artist-content in andere roots | Content review | Artist wint boven client-routing. | `02_ARTIST_MANAGEMENT` | DRY-RUN REVIEW |
| `03_CLIENTS` | Target root | Alleen niet-artist clients/brands. | `03_CLIENTS` | DRY-RUN REVIEW |
| `07_ ARCHIVE` | Folder-ID source-root | Herkennen via folder-ID, niet via naam. | `99_ARCHIVE` review-only | DRY-RUN REVIEW |
| Onbekende roots | Folder-ID/name fallback | Geen automatische mutatie. | `HOLD_OWNER_REVIEW` | REVIEW ONLY |

## Safety locks

- Geen live migratie.
- Geen deletes.
- Geen archivering.
- Geen nieuwe governance.
- Folder-ID's zijn leidend boven Drive-namen.
- `HOLD` en review-only items blijven buiten uitvoering.

## Eindoordeel

De matrix is Sprint 2G-clean: alleen governance locks en dry-run classificatie zijn toegestaan. Live uitvoering vereist een aparte toekomstige GO/NO-GO en valt buiten deze PR.

# CM_OS Locked Decisions

**Status:** LOCKED — bijgewerkt naar AS-BUILT (2026-06-30)
**Sprint:** 2G Governance Lock · AS-BUILT update post-PR-118

## Canonical governance locks

1. `00_INBOX` is VERWIJDERD als top-level root. Het is een verboden root binnen `OS_CUSTOMMADE`. Bestaande `00_INBOX`-mappen worden via `safe-cleanup-wrong-roots.gs` gearchiveerd naar `99_ARCHIVE/ARCHIVE_OLD_WRONG_STRUCTURE_2026-06-22`.
2. `00_ADMIN/INBOX` wordt niet opnieuw aangemaakt.
3. Artist Management hoort onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.
4. `01_ARTIST_MANAGEMENT` is een verboden root en wordt via cleanup-script gearchiveerd. Alle artistdossiers horen uitsluitend onder `02_ARTIST_MANAGEMENT/[ARTIST]/`.
5. Centrale archivering gaat naar `99_ARCHIVE`. De legacy systeemmap `07_ ARCHIVE` is een verboden root en wordt gearchiveerd.
6. Sprint 2G stond alleen dry-run voorbereiding toe.
7. Er is geen live migratie in Sprint 2G uitgevoerd.
8. Er zijn geen deletes in Sprint 2G uitgevoerd.
9. Er is geen archivering in Sprint 2G uitgevoerd.
10. Er wordt geen nieuwe governance geïntroduceerd buiten governance-besluiten en AS-BUILT updates.

## AS-BUILT goedgekeurde roots (post-PR-118)

```text
OS_CUSTOMMADE
├── 00_ADMIN
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

Verboden roots (te archiveren via cleanup-script):
`00_INBOX` · `01_ARTIST_MANAGEMENT` · `02_MASTER_BOUTIQUE` · `03_EXECUTIVE` · `04_BUSINESS` · `05_MARKETING` · `06_PROJECTS` · `07_ARCHIVE`

## Operational implications

- Drive folder-ID's zijn leidend boven namen.
- `03_CLIENTS` is uitsluitend voor niet-artist clients/brands.
- Bij twijfel tussen artist en client wint artist-routing naar `02_ARTIST_MANAGEMENT`.
- GitHub blijft source of truth voor governance-documentatie.
- Moneybird blijft source of truth voor finance.
- ClickUp blijft execution-system.

## Eindoordeel

Sprint 2G is een governance-lock en dry-run-configuratie-update. De lock maakt de target-structuur en migration config merge-ready zonder live Drive-mutaties buiten create-only target-folder voorbereiding.

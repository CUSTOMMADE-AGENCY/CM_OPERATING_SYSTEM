# CM_OS Locked Decisions

**Status:** LOCKED
**Sprint:** 2G Governance Lock
**Datum:** 2026-06-17

## Canonical governance locks

1. `00_INBOX` is een permanente top-level root binnen `OS_CUSTOMMADE`.
2. `00_ADMIN/INBOX` wordt niet opnieuw aangemaakt.
3. Artist Management hoort onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.
4. Legacy `01_ARTIST_MANAGEMENT` routeert naar `02_ARTIST_MANAGEMENT` en is LOCKED.
5. Legacy archive wordt via folder-ID herkend, inclusief de bestaande naamvariant `07_ ARCHIVE`.
6. Sprint 2G staat alleen dry-run voorbereiding toe.
7. Er is geen live migratie in Sprint 2G.
8. Er zijn geen deletes in Sprint 2G.
9. Er is geen archivering in Sprint 2G.
10. Er wordt geen nieuwe governance geïntroduceerd buiten deze locked correcties.

## Operational implications

- Drive folder-ID's zijn leidend boven namen.
- `03_CLIENTS` is uitsluitend voor niet-artist clients/brands.
- Bij twijfel tussen artist en client wint artist-routing naar `02_ARTIST_MANAGEMENT`.
- GitHub blijft source of truth voor governance-documentatie.
- Moneybird blijft source of truth voor finance.
- ClickUp blijft execution-system.

## Eindoordeel

Sprint 2G is een governance-lock en dry-run-configuratie-update. De lock maakt de target-structuur en migration config merge-ready zonder live Drive-mutaties buiten create-only target-folder voorbereiding.

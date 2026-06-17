# Sprint 2G — Dry Run Projected

## Status

PROJECTED DRY RUN ONLY — 2026-06-17.

## Doel

Dit document beschrijft de geprojecteerde Sprint 2G dry-run voor de safe-root migratieconfiguratie. Het document is geen live-migratieopdracht en introduceert geen nieuwe governance.

## Projected safe-root mappings

| Bronroot | Doelroot | Projected action | Live toegestaan zonder go/no-go? |
|---|---|---|---|
| `01_ARTIST_MANAGEMENT` | `02_ARTIST_MANAGEMENT` | Projected move to approved artist root. | Nee |
| `02_MASTER_BOUTIQUE` | `01_MASTER_BOUTIQUE` | Projected move to approved Master Boutique root. | Nee |
| `03_EXECUTIVE` | `00_ADMIN` | Projected move to admin root. | Nee |
| `05_MARKETING` | `08_MARKETING` of `09_CONTENT` | Projected split by content classification. | Nee |

## Hold roots

De volgende roots blijven buiten live-migratie en worden alleen gelogd voor review:

- `00_INBOX`
- `04_BUSINESS`
- `06_PROJECTS`
- `07_ARCHIVE`

## Safety rules

- Dry-run is standaard actief.
- Geen delete-acties.
- Geen archive-acties zonder aparte review.
- Geen permission- of sharingwijzigingen.
- FIERCE, legal, finance, rights, contracts, unknown, mixed en conflict-items gaan naar hold/review.
- Live migratie vereist expliciete go/no-go en operatorbesluit.

## Verwachte output

De dry-run moet een log opleveren met minimaal:

1. Summary.
2. Projected migration rows.
3. Hold items.
4. Errors.
5. Go/no-go status.

## Conclusie

Sprint 2G is alleen klaar voor dry-run projectie. Live migratie blijft geblokkeerd tot review en expliciete go/no-go.

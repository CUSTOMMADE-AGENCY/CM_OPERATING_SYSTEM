> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 2B Drive Migration Execution Guide

## Doel

Deze guide beschrijft hoe de huidige `OS_CUSTOMMADE` Drive-root wordt omgezet naar de gelockte `CM_OS` rootstructuur zonder definitieve deletes en zonder acties in `FIERCE`.

## Scope

- **Drive root ID:** `0B2aV9TqyUPDzd0F1WEd1RkVxNFk`
- **Script:** `scripts/google-drive/migrate-os-custommade-roots.gs`
- **Standaardmodus:** `DRY_RUN = true`
- **Governance-keuze:** GitHub blijft leidend; Drive-map `00_GOVERNANCE` wordt daarom als legacy behandeld en naar `99_ARCHIVE/GOVERNANCE_LEGACY` gepland.

## Doelroots

Het script controleert en maakt, bij `DRY_RUN = false`, ontbrekende doelroots aan:

1. `00_ADMIN`
2. `01_MASTER_BOUTIQUE`
3. `02_ARTIST_MANAGEMENT`
4. `03_CLIENTS`
5. `04_DEALS`
6. `05_OPERATIONS`
7. `06_FINANCE`
8. `07_LEGAL`
9. `08_MARKETING`
10. `09_CONTENT`
11. `99_ARCHIVE`

## Migratieregels

| Huidige locatie | Doellocatie | Regel |
| --- | --- | --- |
| `00_INBOX` | `00_ADMIN/INBOX` | Verplaatsen en hernoemen. |
| `00_GOVERNANCE` | `99_ARCHIVE/GOVERNANCE_LEGACY` | Alleen als GitHub leidend blijft. Anders `00_ADMIN/GOVERNANCE`. |
| `01_ARTIST_MANAGEMENT` | `02_ARTIST_MANAGEMENT` | Root hernoemen/verplaatsen. |
| `02_MASTER_BOUTIQUE` | `01_MASTER_BOUTIQUE` | Root hernoemen/verplaatsen. |
| `04_BUSINESS/*` | `06_FINANCE`, `07_LEGAL`, `05_OPERATIONS` of `00_ADMIN` | Keyword-classificatie; onbekend naar handmatige review. |
| `05_MARKETING/*` | `08_MARKETING` of `09_CONTENT` | Marketing/brand/network naar marketing; content/assets/social naar content. |
| `06_PROJECTS/*` | `05_OPERATIONS`, `04_DEALS` of `99_ARCHIVE` | Operations-projecten, deals/transacties en oud/onduidelijk gescheiden. |
| `07_ ARCHIVE` | `99_ARCHIVE/LEGACY_ARCHIVE` | Legacy-archief bewaren. |

## Migration log

Bij elke run maakt het script een Google Sheet aan met:

- oude locatie
- nieuwe locatie
- actie
- status
- foutmelding
- handmatige review ja/nee
- folder ID
- dry-run indicator

Gebruik deze Sheet als akkoord- en reviewdocument voordat `DRY_RUN` wordt uitgezet.

## Dry-run uitvoeren

1. Open Google Apps Script met het Google-account dat toegang heeft tot de Drive-root.
2. Plak of importeer `scripts/google-drive/migrate-os-custommade-roots.gs`.
3. Controleer dat `ROOT_FOLDER_ID` gelijk is aan `0B2aV9TqyUPDzd0F1WEd1RkVxNFk`.
4. Controleer dat `DRY_RUN = true` staat.
5. Run `runSprint2BDriveMigration()`.
6. Open de gelogde Google Sheet URL.
7. Filter op `Handmatige review ja/nee = ja` en los twijfelgevallen op.
8. Controleer vooral `SKIPPED_TARGET_EXISTS`, `ERROR` en `REVIEW_ONLY` statussen.

## Echte uitvoering

Voer pas uit na akkoord op de dry-run log:

1. Zet `DRY_RUN = false`.
2. Laat `GOVERNANCE_IN_GITHUB_IS_LEADING = true` staan tenzij expliciet besloten is dat Drive Governance leidend moet blijven.
3. Run `runSprint2BDriveMigration()` opnieuw.
4. Bewaar de nieuwe migration log Sheet als audittrail.
5. Controleer de Drive-root handmatig op de doelroots en legacy-archieven.

## Veiligheidsregels

- Het script verwijdert niets definitief.
- Het script maakt niets aan in `FIERCE`.
- Het script stopt niet op ontbrekende bronroots; ontbrekende mappen worden als `SKIPPED_NOT_FOUND` gelogd.
- Bij bestaande doelmappen wordt niet automatisch samengevoegd; de status wordt `SKIPPED_TARGET_EXISTS` en handmatige review wordt verplicht.
- Onverwachte rootmappen blijven staan en worden als `REVIEW_ONLY` gelogd.

## Eindstatus

GEREED VOOR DRY RUN

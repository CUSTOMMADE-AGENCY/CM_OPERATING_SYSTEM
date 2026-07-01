# Sprint 3D2 — Artist Child-Scan Report

**Status:** REVIEW-HOLD ONLY

**Datum scan:** 2026-06-17

**Scope:** `01_ARTIST_MANAGEMENT`

## Doel

Dit remediation report legt de actuele child-scan van `01_ARTIST_MANAGEMENT` vast en vertaalt de aangetroffen artistdossiers naar een migratie-risicoclassificatie.

Dit document is uitsluitend een governance- en remediation-reviewdocument. Er worden geen Drive-bestanden verplaatst, geen mappen aangemaakt, geen items gearchiveerd en geen bestanden verwijderd.

## Conclusie actuele child-scan

`01_ARTIST_MANAGEMENT` mag niet blind live gemigreerd worden.

De top-level artistmappen routeerden wel correct naar `02_ARTIST_MANAGEMENT`, maar de child-scan toont dat sommige artistdossiers al netjes zijn en andere dossiers legacy/complex zijn.

Complexe artistdossiers vereisen een deep scan vóór migratie. Finance/legal/rights/release/audio-assets blijven `HOLD_REVIEW` totdat een inhoudelijke check is uitgevoerd.

## Niet-onderhandelbare remediation-regels

1. Geen bestanden verplaatsen.
2. Geen mappen aanmaken.
3. Geen deletes.
4. Geen archivering.
5. Geen live migratie.
6. Alleen dit remediation report vastleggen.
7. Complexe artistdossiers vereisen deep scan vóór migratie.
8. Finance/legal/rights/release/audio-assets blijven `HOLD_REVIEW` tot inhoudelijke check.

## Classificatie actuele child-scan

### 1. `GO_LIGHT_REVIEW`

Deze dossiers routeerden top-level correct naar `02_ARTIST_MANAGEMENT` en tonen in de child-scan geen directe blocker voor een lichte review, maar blijven review-hold tot owner-check en inhoudelijke controle van gevoelige assets.

- `NAMIKOO`
- `LATIFAH`
- `JAIRZINHO`
- `DODO`
- `DANI_DEAUX`
- `CALSEY`
- `GOUDTJE_GET_PAID`

### 2. `HOLD_DEEP_REVIEW`

Deze dossiers bevatten legacy/complexe structuren naast of door de nieuwe structuur heen. Ze mogen niet live gemigreerd worden voordat een deep scan is afgerond.

- `KALIBWOY`
- `GINIIO`
- `DJ_D-TRAIN`

### 3. `ARCHIVE_CANDIDATE`

Dit dossier gaat niet naar de actieve artist-management root.

- `SOR`

## Child-scan bevindingen per artistdossier

| Artistdossier | Classificatie | Remediation-notitie | Vereiste check vóór migratie |
|---|---|---|---|
| `NAMIKOO` | `GO_LIGHT_REVIEW` | Geen specifieke legacy-blocker vastgelegd in deze child-scan. Blijft review-hold voor standaard owner- en inhoudscheck. | Owner-review; finance/legal/rights/release/audio-assets check waar aanwezig. |
| `LATIFAH` | `GO_LIGHT_REVIEW` | Bevat legacy `LATIFAH 2017` en een losse audiofile. | Mapping van legacy-map en audio-asset check vóór verplaatsing of samenvoeging. |
| `JAIRZINHO` | `GO_LIGHT_REVIEW` | Geen specifieke legacy-blocker vastgelegd in deze child-scan. Blijft review-hold voor standaard owner- en inhoudscheck. | Owner-review; finance/legal/rights/release/audio-assets check waar aanwezig. |
| `DODO` | `GO_LIGHT_REVIEW` | Bevat een losse vaststellingsovereenkomst. | Legal check op vaststellingsovereenkomst vóór migratie. |
| `DANI_DEAUX` | `GO_LIGHT_REVIEW` | Geen specifieke legacy-blocker vastgelegd in deze child-scan. Blijft review-hold voor standaard owner- en inhoudscheck. | Owner-review; finance/legal/rights/release/audio-assets check waar aanwezig. |
| `CALSEY` | `GO_LIGHT_REVIEW` | Heeft afwijkende subfolder `SOCIALMEDIA` naast de `07_CONTENT/07_SOCIALMEDIA`-logica. | Content/social mapping review vóór eventuele normalisatie. |
| `GOUDTJE_GET_PAID` | `GO_LIGHT_REVIEW` | Heeft een afwijkende maar recente projectstructuur. Blijft `GO_LIGHT_REVIEW` met aandacht voor project/marketing/presskit mapping. | Project-, marketing- en presskit-mapping review. |
| `KALIBWOY` | `HOLD_DEEP_REVIEW` | Heeft oude en nieuwe structuur naast elkaar: `01_ADMIN` t/m `09_ARCHIVE` plus oude mappen zoals `Contracten`, `Royalties`, `Boekingen`, `Algemeen`, `MIXTAPE`, `BUMA/STEMRA`, `SENA`, `KVK`, `Presskit` en projecten. | Deep scan op legacy versus nieuwe structuur; legal/finance/rights/royalties/projecten check. |
| `GINIIO` | `HOLD_DEEP_REVIEW` | Heeft trailing space in de bronnaam en bevat naast nieuwe structuur ook legacy `BUMA/STEMRA`/`SENA`, `FINANCIEN`, `KVK`, management/label/booking-overeenkomsten, beeldmateriaal en losse releasebestanden. | Deep scan op naamnormalisatie, overeenkomsten, finance, rights, beeldmateriaal en releasebestanden. |
| `DJ_D-TRAIN` | `HOLD_DEEP_REVIEW` | Heeft naast nieuwe structuur oude finance, belasting, `Sena`, `KVK`, contract, muziek, facturen, royalties, statements, events en projecten. | Deep scan op finance/tax, contract, rights, royalties/statements, audio-assets, events en projecten. |
| `SOR` | `ARCHIVE_CANDIDATE` | Gaat niet naar actieve artist-management root. Voorgestelde bestemming na review: `99_ARCHIVE/02_ARTIST_MANAGEMENT/SOR`. | Rights/finance/legal review vóór archivering. |

## Archive-besluit `SOR`

`SOR` gaat niet naar de actieve artist-management root.

`SOR` mag uitsluitend naar `99_ARCHIVE/02_ARTIST_MANAGEMENT/SOR` na rights/finance/legal review. Tot die review is afgerond, blijft `SOR` `ARCHIVE_CANDIDATE` en mag er geen archivering of live migratie worden uitgevoerd.

## HOLD_REVIEW inhoudstypen

De volgende inhoudstypen blijven binnen elk artistdossier `HOLD_REVIEW` totdat inhoudelijke review is afgerond:

- Finance.
- Legal.
- Rights.
- Release-assets.
- Audio-assets.
- Contracten en overeenkomsten.
- Royalties en statements.
- Belasting/KVK/SENA/BUMA-STEMRA items.
- Project- en eventdossiers met actieve verplichtingen.

Deze inhoudstypen mogen niet generiek worden verplaatst, opgesplitst, samengevoegd, verwijderd of gearchiveerd op basis van alleen deze child-scan.

## Remediation status

De actuele child-scan ondersteunt geen blinde live migratie van `01_ARTIST_MANAGEMENT`. Alleen dossiers in `GO_LIGHT_REVIEW` kunnen na lichte owner- en inhoudscheck verder worden voorbereid. Dossiers in `HOLD_DEEP_REVIEW` vereisen deep scan vóór migratie. `SOR` blijft `ARCHIVE_CANDIDATE` en mag alleen na rights/finance/legal review naar archive.

GEREED VOOR ARTIST MANAGEMENT DEEP REVIEW

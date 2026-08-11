> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 3A — 04_BUSINESS Review Plan

## Doel

Dit document analyseert uitsluitend de bestaande Drive-root `OS_CUSTOMMADE/04_BUSINESS` op basis van de beschikbare governance. Het doel is bepalen welke onderdelen veilig naar de nieuwe CM_OS roots kunnen worden verplaatst zodra een actuele Drive-inventaris beschikbaar is.

Er worden in dit plan geen bestanden verplaatst, geen mappen aangemaakt en geen items gearchiveerd. Dit is alleen een analyse- en owner-reviewplan.

## Gebruikte governance

- `docs/00_GOVERNANCE/DECISION_LOG.md`
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
- `FINAL_GOVERNANCE_ALIGNMENT_REPORT.md`
- `SPRINT2E_PARTIAL_LIVE_MIGRATION_PLAN.md`
- Aanvullende migratiecontext uit `docs/00_GOVERNANCE/SPRINT2B_DRIVE_MIGRATION_MATRIX.md`, omdat daarin de bestaande `04_BUSINESS`-patronen en migratievolgorde zijn uitgewerkt.

## Scope

### Bronroot

```text
OS_CUSTOMMADE/04_BUSINESS
```

### Te beoordelen doelroots

- `OS_CUSTOMMADE/03_CLIENTS`
- `OS_CUSTOMMADE/04_DEALS`
- `OS_CUSTOMMADE/05_OPERATIONS`
- `OS_CUSTOMMADE/06_FINANCE`
- `OS_CUSTOMMADE/07_LEGAL`
- `OS_CUSTOMMADE/99_ARCHIVE`

### Buiten scope

- Verplaatsen van bestanden of mappen.
- Aanmaken van nieuwe mappen.
- Archiveren van items.
- Opschonen, hernoemen of dedupliceren.
- Migratie van artistdossiers naar `03_CLIENTS`; artists blijven onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` en vallen buiten de doelroots van dit plan.
- Migratie naar marketing-, content- of adminroots, tenzij later expliciet door owner-review besloten.

## Niet-onderhandelbare reviewregels

1. Geen bestanden verplaatsen.
2. Geen mappen aanmaken.
3. Geen archiveren.
4. Alleen analyse.
5. `06_FINANCE` blijft een Moneybird-verwijslaag; Moneybird is de financiële waarheid.
6. Legal, contracten, rechten, royalty's, chain-of-title en toestemming/bewijsstukken vereisen altijd owner-review.
7. Clientmateriaal mag alleen naar `03_CLIENTS` als het duidelijk een merk, bedrijf, opdrachtgever, sponsor, media partner of commerciële relatie betreft.
8. Deal- of transactiecontent mag alleen naar `04_DEALS` als het duidelijke dealflow, catalog sale, licensing, sync, sponsorship, endorsement, rights brokerage of vergelijkbare transactiecontext betreft.
9. Onbekend, gemengd, duplicatief, privacygevoelig of conflictueus materiaal blijft `HOLD`.
10. ClickUp blijft execution-system; Drive bevat alleen opslag, bewijs, referentie en dossierbestanden.
11. CM en FIERCE blijven strikt gescheiden; elk FIERCE-signaal leidt tot `HOLD` en uitsluiting van CM-remediation.

## Huidige submappen en voorgestelde beoordeling

Omdat deze repo geen live Drive-inventaris of folder export van `OS_CUSTOMMADE/04_BUSINESS` bevat, gebruikt deze review de governance-patronen die voor `04_BUSINESS` zijn vastgelegd. De onderstaande submappen zijn dus de te controleren bestaande patronen; de feitelijke Drive-export moet per item bevestigen welke mappen werkelijk bestaan.

| Huidige submap / patroon onder `OS_CUSTOMMADE/04_BUSINESS` | Voorgestelde doelroot | Actie | Risico | Owner-review nodig | Migratievolgorde | Blokkades |
|---|---|---|---|---|---:|---|
| `Clients` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | verplaatsen / samenvoegen na item-level bevestiging | Hoog | Ja | 4 | Alleen toegestaan als elke map duidelijk merk, bedrijf, opdrachtgever, sponsor, media partner of commerciële relatie is; artistconflict, duplicaten, permissions en actieve links controleren. |
| `Brands` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | verplaatsen / samenvoegen na item-level bevestiging | Hoog | Ja | 4 | Merkstatus, opdrachtgeverrelatie, deliverables, approvals, externe sharing en eventuele artist- of dealvermenging controleren. |
| `Sponsors` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` of `OS_CUSTOMMADE/04_DEALS/[SPONSORSHIP_DEAL_NAME]` | HOLD tot classificatie | Hoog | Ja | 4-5 | Sponsor kan clientrelatie of deal/transactie zijn; pas verplaatsen na keuze tussen clientdossier en concrete sponsorship deal. |
| `Deals` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | verplaatsen / samenvoegen na rights- en statusreview | Hoog | Ja | 5 | Dealstatus, buyer/seller context, rechtenbewijs, chain-of-title, vertrouwelijkheid, ClickUp-pipeline en lean dealstructuur valideren. |
| `Pipeline` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` voor dossierbestanden; ClickUp voor execution | HOLD / opsplitsen | Hoog | Ja | 5 | Pipeline-uitvoering hoort in ClickUp; Drive mag alleen bewijs, referentie, exports en dossierbestanden bevatten. Geen pipeline-bulkverplaatsing zonder item-level mapping. |
| `Prospects` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` of `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | HOLD tot classificatie | Hoog | Ja | 4-5 | Prospect kan lead, client, buyer, sponsor of deal zijn; bestemming niet eenduidig zonder ownerbesluit en context. |
| `Operations` | `OS_CUSTOMMADE/05_OPERATIONS/[PROCESS_OR_TOPIC]` | samenvoegen na content-scan | Middel | Ja | 7 | Alleen interne operationele processen; controleer op clientmateriaal, legal/finance, rights, persoonlijke data en actieve projectcontext. |
| `04_CURSUS_MASTERCLASSES`, `04_CURSUS_MASTERCLASSES/MASTERCLASS`, `04_CURSUS_MASTERCLASSES/• CURSUS` en vergelijkbare `Cursus`, `Masterclass`, `Training`, `Opleiding`, `Education` of `Knowledge`-patronen | `OS_CUSTOMMADE/05_OPERATIONS/TRAINING` | samenvoegen onder training na content-scan | Middel | Ja | 7 | Training/education heeft voorrang op dealclassificatie: `masterclass` is geen master rights-context en `cursus` is geen deal. Geen Drive-mutatie uitvoeren zonder herexport en owner-review. |
| `Processes` | `OS_CUSTOMMADE/05_OPERATIONS/[PROCESS_OR_TOPIC]` | samenvoegen na content-scan | Middel | Ja | 7 | Procesdocumentatie mag niet overlappen met GitHub-governance/source-of-truth; SOP/playbook-bronstatus controleren. |
| `Tools` | `OS_CUSTOMMADE/05_OPERATIONS/[TOOL_OR_SYSTEM]` | samenvoegen / behouden na tool-owner review | Middel | Ja | 7 | Controleer of het operationele opslag betreft en geen governance, credentials, automation secrets, finance of legal data bevat. |
| `Finance` | `OS_CUSTOMMADE/06_FINANCE/[YEAR_OR_TOPIC]` of dossier-specifieke finance-verwijsmap | HOLD / verplaatsen alleen na finance-owner review | Hoog | Ja | 6 | Moneybird is leidend; Drive mag alleen verwijzingen, exports of ondersteunende bewijsstukken bevatten. Privacy, toegang en audit trail controleren. |
| `Legal` | `OS_CUSTOMMADE/07_LEGAL/[LEGAL_TOPIC]` of dossier-specifieke legal-map | HOLD / verplaatsen alleen na legal-owner review | Hoog | Ja | 6 | Contracten, rechten, claims, approvals en signed/latest-versies vereisen legal owner, permission review en dossiercontext. |
| `Contracts`, `Rights`, `Royalty`, `Chain of Title`, `Approvals` of vergelijkbare legal/rechtenpatronen | `OS_CUSTOMMADE/07_LEGAL/[LEGAL_TOPIC]`, `OS_CUSTOMMADE/04_DEALS/[DEAL]/02_CONTRACTEN_BEWIJS` of dossier-specifiek pad | HOLD | Hoog | Ja | 5-6 | Altijd owner-review; bestemming hangt af van deal-, client- of juridische context. Nooit blind naar archive of finance. |
| Duplicaten of varianten van dezelfde client/deal/prospect | Canonical doelroot na ownerbesluit | samenvoegen na review | Hoog | Ja | 4-7 | Canonical naam, bronmap, laatste versie, sharing, actieve links en dubbele contracten/exports bepalen. |
| Afgeronde, verlopen of niet-actieve businessitems | `OS_CUSTOMMADE/99_ARCHIVE/04_BUSINESS/[MIGRATION_DATE_OR_SOURCE]` | HOLD; archiveren pas later | Middel | Ja | 9 | Archiveren is in deze analyse verboden; alleen na item-level classificatie, open verplichtingencheck, linkcontrole en owner-acceptatie. |
| Onbekende of gemengde resterende legacy business-root | Geen veilige doelroot | HOLD | Hoog | Ja | 9 | Geen onbekende inhoud blind archiveren of verplaatsen; actuele Drive-export en ownerbesluit vereist. |

## Doelroot-beslisregels

### `03_CLIENTS`

Gebruik alleen voor duidelijke merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties. Niet gebruiken voor artistdossiers. Bij twijfel tussen client, artist, deal of prospect blijft het item `HOLD`.

### `04_DEALS`

Gebruik alleen voor duidelijke dealflow, catalog sale, licensing, sync, sponsorship, endorsement, rights brokerage, master resale of vergelijkbare transactiecontext. Vroege pipeline-uitvoering blijft in ClickUp; Drive bevat dossier- en bewijsstukken. Dealitems met contracten, rights of chain-of-title vereisen owner-review en moeten aansluiten op de lean Nederlandse dealstructuur. `Masterclass` mag hierbij niet als master rights worden gelezen en `cursus` mag niet als deal worden gelezen.

### `05_OPERATIONS`

Gebruik alleen voor interne processen, tools en operationele werkwijzen die geen client-, deal-, finance-, legal-, rights- of confidential owner-context bevatten. Cursus-, masterclass-, training-, opleiding-, education- en knowledge-mappen worden altijd als `OS_CUSTOMMADE/05_OPERATIONS/TRAINING` voorgesteld voordat master/deal/catalog/publishing-signalen worden beoordeeld. Als het document eigenlijk governance, SOP of template-source-of-truth is, moet eerst GitHub-bronstatus worden bepaald.

### `06_FINANCE`

Gebruik alleen als Moneybird-verwijslaag of voor ondersteunende finance-exports/bewijsstukken wanneer Moneybird-status, finance-owner en toegang zijn bevestigd. Geen financiële waarheid dupliceren in Drive.

### `07_LEGAL`

Gebruik alleen na legal-owner review. Contracten, rechten, approvals, claims, signed/latest-versies, royalty- of chain-of-title-materiaal mogen niet zonder review worden verplaatst.

### `99_ARCHIVE`

Gebruik pas na remediation, niet tijdens deze analyse. Archiveren mag alleen wanneer item-level classificatie, open verplichtingen, actieve links, owner-acceptatie en broncontext zijn vastgelegd.

## Voorgestelde migratievolgorde na review

1. **Preflight export** van `OS_CUSTOMMADE/04_BUSINESS` maken met pad, folder-ID, parent-ID, owner, modified date, sharingstatus en itemtype.
2. **HOLD-filter toepassen** op FIERCE-signalen, onbekende/gemengde items, legal/finance/rechten, privacygevoelige content, duplicaten en conflictitems.
3. **Clientitems reviewen** en alleen eenduidige brands/bedrijven/opdrachtgevers/sponsors/media partners naar `03_CLIENTS` voorbereiden.
4. **Dealitems reviewen** en alleen eenduidige dealflow/catalog sale/licensing/sync/sponsorship/endorsement naar `04_DEALS` voorbereiden.
5. **Finance- en legalitems apart reviewen** met finance/legal owners; Moneybird- en permissionstatus vastleggen.
6. **Operationsitems reviewen** en alleen zuivere interne processen/tools naar `05_OPERATIONS` voorbereiden.
7. **Duplicaten en merge-cases oplossen** via canonical ownerbesluit, zonder bulk-samenvoegen.
8. **Archiefkandidaten labelen**, maar niet archiveren totdat remediation-governance en owner sign-off rond zijn.
9. **Post-review go/no-go** vastleggen per submap of itemgroep.

## Blokkades

- Er is in de repo geen actuele live Drive-export van `OS_CUSTOMMADE/04_BUSINESS` aanwezig; feitelijke submappen en itemaantallen zijn daardoor niet verifieerbaar.
- `04_BUSINESS` is volgens Sprint 2E expliciet uitgesloten van partial live migration omdat de doelroot niet veilig eenduidig is.
- Finance-items vereisen Moneybird-validatie voordat een Drive-doelpad kan worden goedgekeurd.
- Legal-, contract-, rechten-, royalty- en chain-of-title-items vereisen altijd owner-review.
- Sponsor/prospect/pipeline-items kunnen client-, deal- of ClickUp-executioncontext hebben en blijven `HOLD` zonder item-level context.
- Duplicaten of oude naamvarianten mogen niet worden samengevoegd zonder canonical naam, ownerbesluit en linkcontrole.
- Archiveren is niet toegestaan binnen deze analyse en kan pas na aparte remediation-governance.
- Elk FIERCE-signaal blokkeert CM-migratie totdat bewezen is dat het geen FIERCE-content betreft.

## Review-output per item

Tijdens de feitelijke remediation moet per item minimaal worden vastgelegd:

| Veld | Vereist |
|---|---|
| Huidige locatie | Volledig pad onder `OS_CUSTOMMADE/04_BUSINESS`. |
| Huidige submap | Eerste herkenbare submap/patroon. |
| Voorgestelde doelroot | Eén van `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `99_ARCHIVE` of `HOLD`. |
| Actie | behouden, verplaatsen, samenvoegen, archiveren of `HOLD`. |
| Risico | Laag, Middel of Hoog. |
| Owner-review nodig | Ja/Nee; bij finance, legal, rights, mixed of unknown altijd Ja. |
| Migratievolgorde | Nummer volgens de volgorde in dit plan. |
| Blokkades | Concrete reden waarom het item nog niet veilig kan worden verplaatst. |

## Go/No-Go conclusie

`OS_CUSTOMMADE/04_BUSINESS` is nog niet veilig voor remediation. De governance geeft duidelijke doelroot-regels, maar zonder actuele Drive-export en owner-review kan niet worden vastgesteld welke onderdelen daadwerkelijk eenduidig naar `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL` of `99_ARCHIVE` mogen.

NIET GEREED VOOR 04_BUSINESS REMEDIATION

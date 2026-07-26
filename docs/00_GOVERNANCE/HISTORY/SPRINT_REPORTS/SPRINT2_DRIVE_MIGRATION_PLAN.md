> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/CM_REPOSITORY_RECOVERY_PLAN.md` en de actuele documenten in `docs/00_GOVERNANCE/`
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 2 — Drive Migratieplan

## Status

**Migratiestatus:** NIET GEREED VOOR MIGRATIE

Dit plan is een analyse- en uitvoeringsplan voor bestaande Google Drive-mappen richting de definitieve `OS_CUSTOMMADE`-structuur. Er zijn in deze sprint geen bestanden verplaatst, geen mappen aangemaakt en geen Drive-mutaties uitgevoerd.

## Governancebasis

Dit plan volgt de gelockte governance in onderstaande volgorde:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
5. `docs/04_SYSTEMS/GOOGLE_DRIVE_STRUCTURE.md`
6. `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
7. `docs/00_GOVERNANCE/SPRINT1_DRIVE_IMPLEMENTATION_REPORT.md`

## Scope en beperkingen

### In scope

- Bestaande artist-mappen.
- Bestaande client-mappen.
- Bestaande deal-mappen.
- Bestaande operations-mappen.
- Bestaande legal-mappen.
- Bestaande finance-mappen.
- Legacy Drive-roots en ad-hoc mappen die moeten worden behouden, verplaatst, samengevoegd of gearchiveerd.

### Out of scope

- Het verplaatsen van Drive-bestanden.
- Het aanmaken van Drive-mappen.
- Het verwijderen, hernoemen of samenvoegen van Drive-content.
- Het migreren van FIERCE-content naar CM.
- Het opslaan van getekende contracten, vertrouwelijke clientbestanden of financiële exports in GitHub.

## Definitieve doelstructuur

Alle operationele CM Drive-content hoort onder:

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

## Migratieprincipes

1. **Geen blind copy/paste.** Elke bestaande map krijgt eerst een eigenaar, type, status en bestemming.
2. **Artists blijven onder Artist Management.** Artiestendossiers worden niet naar `03_CLIENTS` gemigreerd.
3. **Clients zijn commerciële relaties.** `03_CLIENTS` is uitsluitend voor merken, bedrijven, sponsors, opdrachtgevers en media partners.
4. **Deals staan onder `04_DEALS`.** Master Boutique en andere dealcases gebruiken de lean Nederlandse dealstructuur tot due diligence.
5. **Moneybird blijft financiële waarheid.** Drive mag financiële documenten en referenties bevatten, maar vervangt Moneybird niet.
6. **Legal is bewijs- en reviewopslag.** Juridische bewijsstukken blijven gekoppeld aan het relevante artist-, client- of dealdossier; generieke legal governance staat onder `07_LEGAL`.
7. **Operations is geen dumpfolder.** Alleen proces-, planning-, tooling- en operationele interne werkbestanden horen onder `05_OPERATIONS`.
8. **Legacy roots worden niet operationeel gehouden.** Oude rootlagen worden per dossier gemigreerd of naar `99_ARCHIVE` gezet.
9. **CM en FIERCE blijven strikt gescheiden.** FIERCE-mappen worden niet naar `OS_CUSTOMMADE` verplaatst.
10. **Pure shims blijven behouden zolang actief gelinkt.** Alleen na linkinventarisatie mogen shims worden gearchiveerd.

## Analyse bestaande artist-mappen

Bekende management-artists uit de huidige Drive-inrichting:

- `CALSEY`
- `DANI DEAUX`
- `DODO`
- `GINIIO`
- `GOUDTJE_GET_PAID`
- `JAIRZINHO`
- `KALIBWOY`
- `LATIFAH`
- `NAMIKOO`

### Artist-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Bestaande artist-root of losse artistmap buiten `OS_CUSTOMMADE` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | verplaatsen | Verkeerde classificatie als client; verlies van actieve Drive-links; dubbele artistfolders; gemiste approvals of contracten. |
| `OS_CUSTOMMADE/03_CLIENTS/[ARTIST_NAME]` indien eerder als client aangemaakt | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | verplaatsen | Governanceconflict door oude superseded clientregel; ClickUp- of Gmail-links kunnen nog naar de oude locatie wijzen. |
| `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | behouden | Interne submappen kunnen afwijken van de vaste artiststructuur. |
| Dubbele artistmappen met varianten zoals spaties, oude spelling, lowercase of projectnaam | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[CANONICAL_ARTIST_NAME]` | samenvoegen | Duplicaten kunnen verschillende versies van contracten, approvals, assets en roadmaps bevatten. |
| Inactieve of afgeronde artistdossiers | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/09_ARCHIVE` of `OS_CUSTOMMADE/99_ARCHIVE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | archiveren | Actieve rechten-, royalty- of legal follow-up kan per ongeluk worden gearchiveerd. |

### Vereiste artist-substructuur na migratie

Elke actieve artistmap moet, waar relevant, worden gecontroleerd tegen:

```text
01_ADMIN
02_CONTRACT
03_STRATEGY
04_RELEASES
05_BOOKING
06_FINANCE
07_SOCIALMEDIA
08_PRESS_EPK
09_ARCHIVE
```

## Analyse bestaande client-mappen

### Client-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Bestaande brand-, sponsor-, opdrachtgever-, bedrijf- of media-partnermap buiten `OS_CUSTOMMADE` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | verplaatsen | Vertrouwelijke commerciële afspraken kunnen verspreid blijven staan; deliverables kunnen losraken van clientcontext. |
| `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | behouden | Clientmap kan artistcontent bevatten die naar `02_ARTIST_MANAGEMENT` moet. |
| Artistmap onder `03_CLIENTS` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` | verplaatsen | Hoog risico op verkeerde governance en dubbele status in ClickUp. |
| Dubbele mappen voor dezelfde commerciële relatie | `OS_CUSTOMMADE/03_CLIENTS/[CANONICAL_CLIENT_NAME]` | samenvoegen | Versiebeheer van proposals, briefings, deliverables en approvals kan onduidelijk zijn. |
| Afgeronde, verloren of niet-actieve commerciële relaties | `OS_CUSTOMMADE/99_ARCHIVE/03_CLIENTS/[CLIENT_NAME]` | archiveren | Relatie kan opnieuw actief worden; archiveer pas na statuscheck. |

## Analyse bestaande deal-mappen

### Deal-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Master Boutique-, catalog sale-, master resale-, rights brokerage- of CM PROSPECT-map buiten `OS_CUSTOMMADE` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | verplaatsen | Rechtenbewijs, chain of title en waardering kunnen incompleet of verspreid zijn. |
| Dealmap onder `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | verplaatsen | Verwarring tussen business lane-documentatie en operationeel dealdossier. |
| Dealmap met oude Engelse Data Room-standaard vóór due diligence | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` met lean Nederlandse structuur | samenvoegen | Te vroege dataroomstructuur kan incomplete buyer-facing informatie suggereren. |
| Actieve dealmap onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | behouden | Controle nodig op verplichte lean submappen en template usage/gap logs. |
| Afgewezen, verlopen of testdeal | `OS_CUSTOMMADE/99_ARCHIVE/04_DEALS/[DEAL_OR_ASSET_NAME]` | archiveren | Mogelijke lopende claims, buyer follow-up of success fee-afspraken kunnen worden gemist. |

### Vereiste deal-substructuur vóór due diligence

```text
00_START_HIER
01_RECHTEN_REGISTER
02_CONTRACTEN_BEWIJS
03_WAARDERING_VERKOOPPAKKET
04_OUTREACH_CLICKUP
99_ARCHIEF
```

Data Room-, LOI-, APA-, Closing- en Success Fee-mappen worden pas aangemaakt wanneer een deal de due diligence fase bereikt.

## Analyse bestaande operations-mappen

### Operations-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Interne planning-, tooling-, meeting-, SOP-uitvoering- of automation-werkmap buiten `OS_CUSTOMMADE` | `OS_CUSTOMMADE/05_OPERATIONS/[PROCESS_OR_TOOL_NAME]` | verplaatsen | Operations kan vertrouwelijke clientbestanden bevatten die juist naar artist/client/deal horen. |
| Gedeelde services-map in Drive die GitHub-documentatie dupliceert | `OS_CUSTOMMADE/05_OPERATIONS/[OPERATIONAL_USE_CASE]` of GitHub blijft bron | samenvoegen | Parallelle SOP- of templateversies kunnen governance ondermijnen. |
| Ad-hoc exports, oude projectplanningen of tijdelijke werkmappen | `OS_CUSTOMMADE/99_ARCHIVE/05_OPERATIONS/[FOLDER_NAME]` | archiveren | Actieve automatiseringen kunnen nog naar oude padnamen verwijzen. |
| Actuele operations-map onder `OS_CUSTOMMADE/05_OPERATIONS` | `OS_CUSTOMMADE/05_OPERATIONS/[PROCESS_OR_TOOL_NAME]` | behouden | Scope creep richting algemene dumpfolder. |

## Analyse bestaande legal-mappen

### Legal-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Generieke legal governance, counsel-notities, legal templates of standaardclausules in Drive | `OS_CUSTOMMADE/07_LEGAL/[LEGAL_TOPIC]` | verplaatsen | Getekende contracten mogen niet in GitHub belanden; toegangsrechten moeten strikt zijn. |
| Artist-specifieke contracten of legal bewijsstukken | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/02_CONTRACT` | verplaatsen | Contracten kunnen uit context raken als ze alleen generiek onder Legal staan. |
| Client-specifieke contracten | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]/[CONTRACT_OR_ADMIN_FOLDER]` | verplaatsen | Verkeerde toegang of onduidelijke commerciële owner. |
| Deal-specifieke chain of title, claims, approvals of contractbewijs | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/02_CONTRACTEN_BEWIJS` | verplaatsen | Dealwaardering kan onbetrouwbaar worden als bewijs niet in dealdossier staat. |
| Oude legal drafts, superseded contracts en verlopen versies | Relevante dossier-archive of `OS_CUSTOMMADE/99_ARCHIVE/07_LEGAL/[FOLDER_NAME]` | archiveren | Per ongeluk archiveren van leidende ondertekende versie. |

## Analyse bestaande finance-mappen

### Finance-migratiematrix

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| Generieke finance-map, omzetplanning, budgetten of rapportages buiten `OS_CUSTOMMADE` | `OS_CUSTOMMADE/06_FINANCE/[FINANCE_TOPIC_OR_YEAR]` | verplaatsen | Moneybird kan worden ondermijnd als Drive als financiële waarheid wordt gebruikt. |
| Artist-specifieke royalty-, budget- of invoice-referenties | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/06_FINANCE` | verplaatsen | Financiële privacy en toegangsrechten; verwarring tussen Drive-referentie en Moneybird-bron. |
| Client-specifieke begrotingen, PO's of fee-afspraken | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]/[FINANCE_OR_ADMIN_FOLDER]` | verplaatsen | Onjuiste facturatiebron als Moneybird-status niet is gecontroleerd. |
| Deal-specifieke valuation, revenue model of success fee-berekening | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/03_WAARDERING_VERKOOPPAKKET` | verplaatsen | Deal economics kunnen losraken van rights evidence. |
| Oude exports uit Moneybird, dubbele spreadsheets of final_final-bestanden | `OS_CUSTOMMADE/99_ARCHIVE/06_FINANCE/[FOLDER_NAME]` | archiveren | Audit trail kan verloren gaan zonder exportdatum en bronvermelding. |

## Legacy-root migratie

Oude of niet-goedgekeurde roots worden niet als operationele roots behouden.

| Huidige locatie | Nieuwe locatie | Actie | Risico's |
|---|---|---|---|
| `01_BRIEFINGS` | Per dossier naar `02_ARTIST_MANAGEMENT`, `03_CLIENTS` of `04_DEALS`; rest naar `99_ARCHIVE/01_BRIEFINGS` | samenvoegen | Briefings kunnen artist-, client- en dealinformatie mengen. |
| `02_PIPELINE` | Execution blijft in ClickUp; relevante bewijsbestanden naar `04_DEALS` of `03_CLIENTS`; oude pipeline exports naar `99_ARCHIVE/02_PIPELINE` | samenvoegen | Drive kan onterecht execution-system worden in plaats van ClickUp. |
| `05_BUSINESS` | Per inhoud naar `00_ADMIN`, `05_OPERATIONS`, `06_FINANCE` of `99_ARCHIVE/05_BUSINESS` | samenvoegen | Te brede business-map kan verschillende owners en rechten bevatten. |
| `06_MARKETING` | `OS_CUSTOMMADE/08_MARKETING` of dossier-specifiek onder artist/client | verplaatsen | Marketing-assets kunnen bij artist/client horen in plaats van generiek. |
| `07_ARCHIVE` | `OS_CUSTOMMADE/99_ARCHIVE/[SOURCE_CONTEXT]` | verplaatsen | Oude archive kan actieve dossiers of shims bevatten. |
| Losse `Shared Services` Drive-root | Geen Drive-root; alleen operationele kopieën naar juiste dossiermap | archiveren | GitHub/Drive templatebron kan dubbel gaan lopen. |

## Risicoregister

| Risico | Impact | Mitigatie vóór migratie |
|---|---|---|
| Artists worden opnieuw als clients geclassificeerd | Hoog | Artistlijst vooraf valideren en `03_CLIENTS` scannen op artistnamen. |
| Actieve links breken na verplaatsing | Hoog | Voor elke map linkinventarisatie maken vanuit ClickUp, Gmail, docs en AI-agentinstructies. |
| FIERCE-content belandt in CM Drive | Hoog | Voor migratie expliciete FIERCE-scan en uitsluitlijst gebruiken. |
| Moneybird wordt niet als financiële waarheid gebruikt | Hoog | Finance-mappen alleen als bewijs/referentie behandelen; Moneybird-status per finance-dossier controleren. |
| Oude Engelse dealstructuur blijft operationeel | Middel | Dealcases vóór due diligence terugbrengen naar lean Nederlandse structuur. |
| Vertrouwelijke legal/finance-content krijgt te brede toegang | Hoog | Toegangsrechten per root en dossier controleren vóór verplaatsing. |
| Duplicaten worden blind samengevoegd | Hoog | Canonical owner en leidende versie bepalen vóór samenvoegen. |
| Pure shims worden te vroeg verwijderd | Middel | Shims alleen archiveren na actieve linkcontrole. |
| Archive wordt dumpfolder zonder context | Middel | Archivepad altijd voorzien van broncontext en migratiedatum. |

## Volgorde van migratie

### Fase 0 — Pre-flight controle

1. Bevestig dat `OS_CUSTOMMADE` en de elf goedgekeurde rootfolders bestaan.
2. Exporteer of inventariseer alle bestaande top-level Drive-mappen zonder content te verplaatsen.
3. Label elke map als artist, client, deal, operations, legal, finance, marketing, content, admin, archive, FIERCE, onbekend of shim.
4. Controleer actieve links vanuit ClickUp, Gmail, Drive shortcuts, gedeelde documenten en AI-agentinstructies.
5. Wijs per map een owner en beslisser toe.

### Fase 1 — Blokkades verwijderen

1. Scheid FIERCE-content volledig uit de CM-migratie.
2. Markeer onbekende of gemengde mappen als `HOLD` tot owner-review.
3. Blokkeer migratie van mappen met onduidelijke legal-, finance- of rights-status.
4. Bevestig Moneybird-status voor financiële dossiers.

### Fase 2 — Artist-migratie

1. Controleer alle bekende artistnamen en aliasvarianten.
2. Verplaats alleen na review naar `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`.
3. Voeg duplicaten samen op basis van canonical artistnaam.
4. Controleer substructuur en plaats contracten, strategie, releases, finance, social en press/EPK in de juiste interne map.
5. Archiveer inactieve artistcontent pas na bevestiging van open legal/finance/rights-punten.

### Fase 3 — Client-migratie

1. Filter `03_CLIENTS` op merken, bedrijven, sponsors, opdrachtgevers en media partners.
2. Verwijder artistmappen uit clientclassificatie door ze te plannen voor `02_ARTIST_MANAGEMENT`.
3. Voeg dubbele clientmappen samen na owner-review.
4. Archiveer afgeronde commerciële relaties met statusnotitie.

### Fase 4 — Deal-migratie

1. Inventariseer Master Boutique-, catalog-, rights- en prospectdossiers.
2. Verplaats dealdossiers naar `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`.
3. Normaliseer pre-due-diligence deals naar de lean Nederlandse structuur.
4. Laat Data Room-, LOI-, APA-, Closing- en Success Fee-structuren alleen staan of ontstaan bij daadwerkelijke due diligence.
5. Archiveer verlopen, test- of afgewezen deals met behoud van audit trail.

### Fase 5 — Legal en finance-context herstellen

1. Verplaats generieke legalcontent naar `07_LEGAL`.
2. Verplaats dossier-specifieke legalcontent terug naar artist-, client- of dealdossier.
3. Verplaats generieke financecontent naar `06_FINANCE`.
4. Verplaats dossier-specifieke financecontent naar het relevante artist-, client- of dealdossier.
5. Controleer toegangsrechten en Moneybird-referenties.

### Fase 6 — Operations, marketing, content en archive

1. Verplaats interne operationele werkmappen naar `05_OPERATIONS`.
2. Verplaats generieke marketingcontent naar `08_MARKETING`; dossier-specifieke marketingcontent blijft bij artist/client.
3. Verplaats generieke contentproductie naar `09_CONTENT`; dossier-specifieke content blijft bij artist/client/deal.
4. Migreer legacy archive naar `99_ARCHIVE` met broncontext.
5. Laat shims staan totdat linkinventarisatie is afgerond.

### Fase 7 — Post-migratie validatie

1. Controleer dat geen actieve artistmap onder `03_CLIENTS` staat.
2. Controleer dat geen actieve dealmap buiten `04_DEALS` staat.
3. Controleer dat oude roots niet meer operationeel worden gebruikt.
4. Controleer dat Moneybird de financiële waarheid blijft.
5. Controleer dat CM/FIERCE strikt gescheiden is.
6. Controleer dat ClickUp-links, Gmail-links en Drive-shortcuts zijn bijgewerkt.
7. Leg uitzonderingen vast in een migratielog.

## Go/no-go criteria

Migratie is pas gereed om uit te voeren wanneer:

- Een actuele Drive-inventaris met alle bestaande top-level en relevante subfolders beschikbaar is.
- Elke map een classificatie, owner, actie en doelpad heeft.
- Alle artistmappen expliciet buiten `03_CLIENTS` zijn gehouden.
- Alle actieve dealmappen naar `04_DEALS` zijn gepland.
- Finance-mappen zijn gecontroleerd tegen Moneybird.
- Legal-mappen zijn gecontroleerd op toegang, vertrouwelijkheid en dossiercontext.
- FIERCE-content is uitgesloten.
- Actieve links en shims zijn geïnventariseerd.
- Onbekende of gemengde mappen een `HOLD`-status hebben.

## Eindoordeel

De governance en doelstructuur zijn helder en conform Sprint 1. De migratie zelf is echter nog niet gereed om live uit te voeren zolang de actuele Drive-inventaris, linkinventarisatie, owners en HOLD-lijst niet zijn gevalideerd.

NIET GEREED VOOR MIGRATIE

# Drive Inventory Analysis Workflow

## Doel

Deze workflow beschrijft hoe de Drive-inventaris uit `scripts/google-drive/export-drive-inventory.gs` wordt beoordeeld voordat Sprint 2 Drive-migratie mag starten.

De workflow leidt tot een gecontroleerde migratielijst met per map een bevestigde actie: `behouden`, `verplaatsen`, `samenvoegen`, `archiveren` of `handmatige review`.

## Governancebasis

De analyse volgt deze governancevolgorde:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/IMPLEMENTATION_ROADMAP.md`
5. `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md`
6. `docs/00_GOVERNANCE/SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md`

## Analysevolgorde

### 1. Export bevriezen

- Maak een actuele export vanuit de echte `OS_CUSTOMMADE` root.
- Noteer exportdatum, uitvoerend account en spreadsheet-URL.
- Gebruik de export als read-only basisbestand.
- Maak een reviewkopie wanneer reviewers extra kolommen invullen.

### 2. Basiscontrole

Controleer per regel of minimaal aanwezig is:

- Folder ID;
- Folder naam;
- Volledig pad;
- Parent folder;
- Root folder;
- Governance root of reviewreden;
- Eigenaar of verklaring waarom owner onbekend is;
- Aantal bestanden;
- Aantal submappen;
- Laatst gewijzigd;
- Migratieactie;
- Opmerking.

Ontbrekende ID's, ontbrekende ownerinformatie of onbekende rootclassificatie betekenen dat de map niet vrijgegeven is voor migratie.

### 3. Classificatie per governance-root

Classificeer elke map als één van deze lanes:

- `00_ADMIN`
- `01_MASTER_BOUTIQUE`
- `02_ARTIST_MANAGEMENT`
- `03_CLIENTS`
- `04_DEALS`
- `05_OPERATIONS`
- `06_FINANCE`
- `07_LEGAL`
- `08_MARKETING`
- `09_CONTENT`
- `99_ARCHIVE`
- onbekend / buiten scope
- FIERCE / uitsluiten

Artiestendossiers horen onder `02_ARTIST_MANAGEMENT`. `03_CLIENTS` is uitsluitend voor merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.

### 4. Owner- en beslisserreview

Voor elke map moet duidelijk zijn:

- Drive-owner;
- inhoudelijke owner;
- migratiebeslisser;
- backup-owner indien nodig;
- reviewdatum;
- besluit: go, no-go, HOLD, uitsluiten of extra review.

Wanneer owner of beslisser ontbreekt, blijft de map op `HOLD`.

### 5. Link- en afhankelijkheidscontrole

Controleer vóór elke migratieactie of actieve verwijzingen bestaan vanuit:

- ClickUp;
- Gmail;
- Google Docs, Sheets en Slides;
- Drive shortcuts en shims;
- Apps Script, Make, Zapier of andere automatiseringen;
- AI-agent instructies, README's en workflows;
- externe stakeholders zoals buyers, clients, artists, counsel of partners.

Actieve linkafhankelijkheid zonder updateplan betekent `HOLD`.

## Migratieacties toekennen

### `behouden`

Gebruik `behouden` wanneer:

- de map al onder de juiste governance-root staat;
- owner en beslisser bevestigd zijn;
- geen FIERCE-risico bestaat;
- geen actieve linkwijziging nodig is;
- legal/finance/confidentiality-risico is beoordeeld;
- geen duplicaat- of canonical-conflict bestaat.

### `verplaatsen`

Gebruik `verplaatsen` wanneer:

- de map inhoudelijk bij een andere governance-root hoort;
- het doelpad expliciet is vastgesteld;
- owner en migratiebeslisser akkoord zijn;
- actieve links, shortcuts en automation-afhankelijkheden een updateplan hebben;
- de verplaatsing CM/FIERCE-scheiding niet schendt.

Voorbeelden:

- artiestenmap onder `03_CLIENTS` naar `02_ARTIST_MANAGEMENT`;
- dealmap onder business-lane documentatie naar `04_DEALS`;
- generieke legalmap naar `07_LEGAL`.

### `samenvoegen`

Gebruik `samenvoegen` wanneer:

- meerdere mappen dezelfde artist, client, deal of operationele context representeren;
- één canonical map is gekozen;
- conflicterende versies, contracten, approvals en deliverables zijn beoordeeld;
- er een samenvoegplan bestaat met bronmap, doelmap, owner, risico en validatie.

Samenvoegen mag nooit blind op basis van mapnaam alleen.

### `archiveren`

Gebruik `archiveren` wanneer:

- de map niet langer actief is;
- owner bevestigt dat operationeel gebruik is gestopt;
- verplichte bewijsstukken vindbaar blijven;
- actieve links en shims zijn omgezet of bewust behouden;
- archivepad broncontext, datum en reden bevat.

Archive is geen dumpfolder. Archiveer alleen met context.

### `handmatige review`

Gebruik `handmatige review` wanneer:

- governance-root onbekend is;
- owner of beslisser ontbreekt;
- FIERCE-risico bestaat;
- legal-, finance-, rights- of confidentialiteitsstatus onduidelijk is;
- artist/client/deal-classificatie conflicteert;
- duplicaten bestaan zonder canonical keuze;
- actieve links of automatiseringen niet zijn gecontroleerd;
- externe stakeholders toegang hebben zonder communicatieplan.

## Wanneer HOLD wordt gebruikt

`HOLD` is verplicht wanneer een map niet veilig in een migratiebatch kan worden opgenomen.

Gebruik `HOLD` bij minimaal één van deze situaties:

- onbekende classificatie;
- onbekende inhoudelijke owner;
- owner en Drive-owner verschillen zonder inhoudelijke goedkeuring;
- meerdere owners wijzen verschillende doelpaden aan;
- mogelijk FIERCE-content;
- artist/client-conflict;
- deal/lane-conflict;
- legal-onduidelijkheid;
- finance-onduidelijkheid of Moneybird-status ontbreekt;
- actieve ClickUp-, Gmail-, Docs-, shortcut- of automation-link zonder updateplan;
- duplicaat zonder canonical keuze;
- te brede sharing op legal, finance, clientdata of rechteninformatie;
- pure shim is nog actief gelinkt.

Een `HOLD`-map wordt niet verplaatst, samengevoegd of gearchiveerd totdat de blokkade is opgelost en opnieuw is beoordeeld.

## Wanneer handmatige review verplicht is

Handmatige review is verplicht voor:

1. alle `handmatige review`-regels uit de export;
2. alle mappen zonder governance root;
3. alle FIERCE-signalen;
4. alle legal-, contract-, rights-, finance- en confidentialiteitsmappen;
5. alle mappen met externe sharing;
6. alle mappen met shortcuts of shim-afhankelijkheden;
7. alle mappen waar `Aantal bestanden` of `Aantal submappen` onverwacht hoog is;
8. alle duplicaat-, kopie-, backup- of oud-signalen;
9. alle artiestnamen buiten `02_ARTIST_MANAGEMENT`;
10. alle legacy-root of ad-hoc mappen buiten de definitieve OS_CUSTOMMADE-structuur.

## Go/no-go voor Sprint 2 migratie

Een map mag pas naar Sprint 2 migratie wanneer:

- Folder ID en parent-ID gevalideerd zijn;
- governance-root en doelpad bevestigd zijn;
- inhoudelijke owner en migratiebeslisser akkoord zijn;
- migratieactie definitief is toegekend;
- linkupdateplan gereed is of niet nodig is;
- FIERCE is uitgesloten;
- legal/finance/confidentiality-risico is beoordeeld;
- eventuele HOLD is opgeheven;
- validatie na migratie is toegewezen aan een reviewer.

Zonder volledige go/no-go blijft de map buiten de migratiebatch.

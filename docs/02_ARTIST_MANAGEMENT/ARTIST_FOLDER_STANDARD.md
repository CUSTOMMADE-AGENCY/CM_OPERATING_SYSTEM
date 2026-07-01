# Artist Folder Standard

## Doel

Leg vast hoe actieve artistdossiers in Google Drive worden ingericht.

## Scope

Deze standaard geldt voor:

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`

Deze map bevat uitsluitend actieve artists waarvoor CM artist management, business management, Release Strategie, Brand Audit, Brandbook, rights support, projectmanagement of retainerwerk uitvoert.

## Lean principe

Geen statuslagen in Drive.

Niet gebruiken:

- `01_ACTIVE`
- `02_ONBOARDING`
- `03_PROSPECTS`
- `04_ON_HOLD`
- `05_OFFBOARDED`

Status, Pipeline en uitvoering staan in ClickUp.

Drive is opslag voor live clientbestanden, deliverables, getekende documenten, Assets en bewijsstukken.

## Goedgekeurde structuur

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/`

Elke artistfolder bevat exact:

- `01_ADMIN`
- `02_CONTRACT`
- `03_STRATEGY`
- `04_RELEASES`
- `05_BOOKING`
- `06_FINANCE`
- `07_SOCIALMEDIA`
- `08_PRESS_EPK`
- `09_ARCHIVE`

## Folderbetekenis

| Folder | Doel | Voorbeelden | Niet gebruiken voor |
|---|---|---|---|
| `01_ADMIN` | Administratieve basis van het actieve artistdossier. | Intake, contactgegevens, team roster, algemene afspraken, access notes, onboarding summary. | Contractuele bronstukken, strategie, releases of social content. |
| `02_CONTRACT` | Contractuele en juridische bewijslaag binnen het artistdossier. | Getekende management agreements, NDA's, amendments, deal confirmations, approval evidence rond contracten. | Algemene admin, financiële administratie in Moneybird of losse concepten zonder contractcontext. |
| `03_STRATEGY` | Strategische richting, positionering en Scope. | Brand Audit, Brandbook, Business Audit, artist roadmap, positioning, Scope, strategy notes. | Release-assets, social planning of contractstukken. |
| `04_RELEASES` | Releasegerelateerde planning, assets en bewijsstukken. | Releaseplanning, masters references, artwork, metadata, ISRC/UPC, distribution notes, release assets, campaign timelines. | Algemene strategie, booking of social-only contentkalenders. |
| `05_BOOKING` | Live-, show- en performancegerelateerde informatie. | Shows, live aanvragen, offers, riders, setlists, travel notes, performance planning. | Releaseplanning, contractarchief of algemene admin. |
| `06_FINANCE` | Artist-specifieke financiële referenties en approvals. | Artistbudgetten, kostenoverzichten, royalty/statement references, fee-afspraken, recoupment notes, financiële approvals. Moneybird blijft financiële waarheid voor facturen, bonnen en administratie. | Primaire factuuradministratie, bonnenadministratie of Moneybird-vervangende opslag. |
| `07_SOCIALMEDIA` | Social planning, content en platformmateriaal. | Contentplanning, social assets, captions, approvals, posting calendars, platform notes. | `07_CONTENT` of een losse `SOCIALMEDIA`-map. |
| `08_PRESS_EPK` | PR-, pers- en EPK-ready materiaal. | Bio, press kit, pressfoto's, EPK, media assets, interviews, PR-ready materials. | Social-only content, contracten of interne strategieconcepten. |
| `09_ARCHIVE` | Historische en superseded materialen binnen een actief artistdossier. | Oude versies, afgeronde fases, superseded materiaal, historische exports binnen het actieve artistdossier. | Inactieve artistdossiers als geheel; die gaan naar `99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`. |

## Archive-regel

Wanneer een artist niet langer actief is:

Verplaats het volledige artistdossier naar:

`OS_CUSTOMMADE/99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`

Niet verspreiden.
Niet per submap archiveren.
Niet verwijderen.

## Migratieregel legacy artistfolders

Legacy source:

`OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Target:

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Mapping:

| Legacy | Target |
|---|---|
| `01_ADMIN` | `01_ADMIN` |
| `02_CONTRACT` | `02_CONTRACT` |
| `03_STRATEGY` | `03_STRATEGY` |
| `04_RELEASES` | `04_RELEASES` |
| `05_BOOKING` | `05_BOOKING` |
| `06_FINANCE` | `06_FINANCE` |
| `07_CONTENT` | `07_SOCIALMEDIA` |
| `SOCIALMEDIA` | `07_SOCIALMEDIA` |
| `08_PRESS_EPK` | `08_PRESS_EPK` |
| `09_ARCHIVE` | `09_ARCHIVE` |

Bij conflict:
niet mergen.
Maak:
`REVIEW_IMPORT_FROM_[SOURCE_FOLDER]`

Bij twijfel:
`REVIEW_REQUIRED`.

## Regels

- Geen artistbestanden in GitHub.
- Geen getekende contracten in GitHub.
- Geen vertrouwelijke clientdata in GitHub.
- Geen artistdossiers in `03_CLIENTS`.
- Geen actieve artistdossiers in `99_ARCHIVE`.
- Geen statuslagen in Drive.
- Geen `07_CONTENT`.
- Geen ongenummerde `SOCIALMEDIA`.
- ClickUp is leidend voor status en execution.
- Google Drive is leidend voor live clientbestanden.
- GitHub is leidend voor deze standaard.

## Quality check

Een artistfolder is compliant wanneer:

- artist staat direct onder `02_ARTIST_MANAGEMENT`;
- alle 9 verplichte submappen bestaan;
- geen oude `07_CONTENT` of losse `SOCIALMEDIA` actief is;
- contracten staan in `02_CONTRACT`;
- strategie in `03_STRATEGY`;
- releases in `04_RELEASES`;
- social content in `07_SOCIALMEDIA`;
- EPK/press in `08_PRESS_EPK`;
- oude versies in `09_ARCHIVE`;
- artiststatus staat in ClickUp, niet in Drive.

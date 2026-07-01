# Client Folder Standard

## Doel

Leg vast hoe client- en partnerdossiers in Google Drive worden ingericht.

## Scope

Deze standaard geldt voor:

`OS_CUSTOMMADE/03_CLIENTS`

Deze map bevat uitsluitend actieve of relevante zakelijke dossiers voor:

- bedrijven
- merken
- sponsors
- opdrachtgevers
- media partners
- zakelijke clients
- partners

Artists horen niet in `03_CLIENTS`.

## Lean principe

Geen statuslagen in Drive.

Niet gebruiken:

- `01_ACTIVE`
- `02_PROSPECTS`
- `03_ON_HOLD`
- `04_OFFBOARDED`

Status, Pipeline en uitvoering staan in ClickUp.

## Goedgekeurde structuur

```text
OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]/
├── 01_ADMIN
├── 02_CONTRACT
├── 03_BRIEF_SCOPE
├── 04_DELIVERABLES
├── 05_COMMUNICATION
├── 06_FINANCE
└── 09_ARCHIVE
```

Elke clientfolder bevat:

- `01_ADMIN`
- `02_CONTRACT`
- `03_BRIEF_SCOPE`
- `04_DELIVERABLES`
- `05_COMMUNICATION`
- `06_FINANCE`
- `09_ARCHIVE`

## Folderbetekenis

| Folder | Doel | Voorbeelden | Niet gebruiken voor |
| --- | --- | --- | --- |
| `01_ADMIN` | Administratieve basis van het client- of partnerdossier. | Intake, contactgegevens, company info, stakeholder list, onboarding notes. | Contracten, briefings, deliverables, finance-bronadministratie of statusbeheer. |
| `02_CONTRACT` | Juridische en formele afspraken binnen het dossier. | NDA’s, service agreements, partnership agreements, signed confirmations, contract approvals. | GitHub-opslag, losse finance-administratie, conceptdeliverables of ClickUp-statussen. |
| `03_BRIEF_SCOPE` | Inhoudelijke opdracht-, scope- en voorstelcontext. | Briefings, Scope, proposals, project outlines, campaign requirements, Fit Check notes. | Getekende contracten, definitieve opleveringen of algemene communicatie zonder scope-impact. |
| `04_DELIVERABLES` | Definitieve clientoutput en opleverbestanden. | Definitieve deliverables, decks, reports, campaign assets, exports, opleveringen. | Werkstatus, interne taken, conceptarchief of financiële waarheid. |
| `05_COMMUNICATION` | Belangrijke schriftelijke afspraken en communicatiesamenvattingen. | Belangrijke schriftelijke afspraken, meeting notes, externe confirmations, call summaries. | Complete mailboxkopieën, task execution, contractbronbestanden of deliverable-exports. |
| `06_FINANCE` | Financiële referenties binnen het clientdossier. | Budgetten, fee-afspraken, cost overviews, payment notes, finance references. Moneybird blijft financiële waarheid. | Moneybird-vervanging, factuurwaarheid, belastingadministratie of contractopslag. |
| `09_ARCHIVE` | Oude of superseded dossierbestanden binnen een actief clientdossier. | Oude versies, afgeronde fases, superseded materiaal binnen actief clientdossier. | Volledig inactieve clientdossiers; die gaan integraal naar `99_ARCHIVE/CLIENTS`. |

## Archive-regel

Wanneer client/partner niet langer actief of relevant is:

Verplaats volledig dossier naar:

```text
OS_CUSTOMMADE/99_ARCHIVE/CLIENTS/[CLIENT_OR_PARTNER_NAME]
```

Niet verspreiden.
Niet per submap archiveren.
Niet verwijderen.

## Migratieregel legacy client/business folders

Legacy sources kunnen zijn:

```text
OS_CUSTOMMADE/02_MASTER_BOUTIQUE/01_CLIENTS
OS_CUSTOMMADE/03_CLIENTS
OS_CUSTOMMADE/04_BUSINESS
OS_CUSTOMMADE/06_PROJECTS
```

Mapping:

- client/admin → `01_ADMIN`
- contract/legal confirmation → `02_CONTRACT`
- brief/scope/proposal → `03_BRIEF_SCOPE`
- deliverables/assets/reports → `04_DELIVERABLES`
- communication/meeting notes → `05_COMMUNICATION`
- budget/finance references → `06_FINANCE`
- old/superseded → `09_ARCHIVE`

Bij conflict:

Niet mergen.
Maak:

```text
REVIEW_IMPORT_FROM_[SOURCE_FOLDER]
```

Bij twijfel:

```text
REVIEW_REQUIRED
```

## Regels

- Geen artists in `03_CLIENTS`.
- Geen artist-managementdossiers in `03_CLIENTS`.
- Geen getekende contracten in GitHub.
- Geen vertrouwelijke clientdata in GitHub.
- Geen statuslagen in Drive.
- ClickUp is leidend voor status en Pipeline.
- Google Drive is leidend voor live clientbestanden.
- GitHub is leidend voor deze standaard.

## Quality check

Een clientfolder is compliant wanneer:

- client/partner staat direct onder `03_CLIENTS`;
- de 7 verplichte submappen bestaan;
- er staan geen artists in;
- contracten staan in `02_CONTRACT`;
- brief/proposal/Scope in `03_BRIEF_SCOPE`;
- deliverables in `04_DELIVERABLES`;
- belangrijke communicatie in `05_COMMUNICATION`;
- finance references in `06_FINANCE`;
- oude versies in `09_ARCHIVE`;
- status staat in ClickUp, niet in Drive.

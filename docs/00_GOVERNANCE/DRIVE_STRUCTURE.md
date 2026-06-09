# Google Drive Structure Governance

## Doel

Google Drive is de operationele working environment voor clientbestanden, getekende documenten, deliverables, finance, legal, content en archieven. Drive ondersteunt uitvoering, maar is niet de documentatie-source of truth.

GitHub en Google Drive hebben daarom bewust geen identieke structuur:

- GitHub bewaart Governance, SOPs, Workflows, Playbooks en as-built systeemdocumentatie.
- Google Drive bewaart live operationele bestanden, signed documents, deliverables en werkbestanden.

## Goedgekeurde Drive-root

Alle CM Drive-mappen vallen onder één rootfolder:

`OS_CUSTOMMADE`

## Goedgekeurde Drive-structuur

```text
OS_CUSTOMMADE
│
├── 00_INBOX
│
├── 01_ARTIST_MANAGEMENT
│   ├── CALSEY
│   │   ├── 01_ADMIN
│   │   ├── 02_CONTRACT
│   │   ├── 03_STRATEGY
│   │   ├── 04_RELEASES
│   │   ├── 05_BOOKING
│   │   ├── 06_FINANCE
│   │   ├── 07_CONTENT
│   │   ├── 08_PRESS_EPK
│   │   ├── 09_ARCHIVE
│   │   └── SOCIALMEDIA
│   ├── DANI DEAUX
│   ├── DODO
│   ├── GINIIO
│   ├── GOUDTJE_GET_PAID
│   ├── JAIRZINHO
│   ├── KALIBWOY
│   ├── LATIFAH
│   └── NAMIKOO
│
├── 02_MASTER_BOUTIQUE
│   ├── 01_CLIENTS
│   ├── 02_OPERATIONS
│   ├── 03_FINANCE
│   ├── 04_LEGAL
│   ├── 05_MARKETING
│   └── 06_ARCHIVE
│
├── 03_SHARED_SERVICES
│   ├── 01_GOVERNANCE
│   ├── 02_RESOURCES
│   ├── 03_OPERATION
│   ├── 04_REPORTS
│   └── 05_SOPS_FLOWS
│
├── 04_BUSINESS
│   ├── 01_FINANCE
│   ├── 02_LEGAL
│   ├── 03_HR
│   └── 04_CURSUS_MASTERCLASSES
│
├── 05_MARKETING
│   ├── 01_BRAND
│   ├── 02_CONTENT
│   ├── 03_SOCIALMEDIA
│   └── 04_NETWORK
│
├── 06_PROJECTS
│
└── 07_ARCHIVE
```

## Artist folder rule

Elke artistfolder binnen `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT` gebruikt exact dezelfde interne structuur:

- `01_ADMIN`
- `02_CONTRACT`
- `03_STRATEGY`
- `04_RELEASES`
- `05_BOOKING`
- `06_FINANCE`
- `07_CONTENT`
- `08_PRESS_EPK`
- `09_ARCHIVE`
- `SOCIALMEDIA`

Deze regel geldt voor:

- `CALSEY`
- `DANI DEAUX`
- `DODO`
- `GINIIO`
- `GOUDTJE_GET_PAID`
- `JAIRZINHO`
- `KALIBWOY`
- `LATIFAH`
- `NAMIKOO`

## Shared Services versus client-specifieke instructies

`03_SHARED_SERVICES` is voor company-wide instructions, gedeelde resources, reports en SOPs/flows.

Client-specifieke instructies staan altijd in de relevante artist- of clientfolder.

Voorbeelden:

- General email protocol: `OS_CUSTOMMADE/03_SHARED_SERVICES/05_SOPS_FLOWS`
- Goudtje-specific email instructions: `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/GOUDTJE_GET_PAID/03_STRATEGY` of `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/GOUDTJE_GET_PAID/01_ADMIN`, afhankelijk van gebruik

## Regels

- Maak geen parallelle mappenstructuren buiten `OS_CUSTOMMADE`.
- Gebruik alleen de goedgekeurde Drive-rootfolders en tweede niveaus zoals hierboven beschreven.
- Gebruik exacte foldernamen en hoofdletters zoals goedgekeurd.
- Gebruik duidelijke eigenaar- en access-afspraken per artist-, client- of projectmap.
- Archiveer afgesloten werk zonder GitHub-documentatie of source-of-truth materiaal te dupliceren.

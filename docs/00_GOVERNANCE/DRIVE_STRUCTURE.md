# Google Drive Structure Governance

## Doel

Documenteer de goedgekeurde Google Drive operating structure voor CM. Google Drive is de operationele working environment voor live dossiers, bestanden, deliverables, signed documents, finance, legal, content en archives.

GitHub en Google Drive hebben bewust verschillende structuren: GitHub is de source of truth voor governance, SOPs, workflows, playbooks en systeemdocumentatie; Google Drive is de operationele working environment voor live dossiers.

## Rootfolder

Alle operationele CM Drive-mappen worden aangemaakt onder:

`OS_CUSTOMMADE`

## Complete goedgekeurde Drive-structuur

Gebruik exact onderstaande mappenboom als production baseline:

```text
OS_CUSTOMMADE
├── 00_ADMIN
│   ├── 01_INBOX_REVIEW
│   ├── 02_GOVERNANCE_REFERENCE
│   ├── 03_TEMPLATES
│   ├── 04_REPORTS
│   └── 05_APPROVALS
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
│   └── [ARTIST_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_STRATEGY
│       ├── 04_RELEASES
│       ├── 05_BOOKING
│       ├── 06_FINANCE
│       ├── 07_SOCIALMEDIA
│       ├── 08_PRESS_EPK
│       └── 09_ARCHIVE
├── 03_CLIENTS
│   └── [CLIENT_OR_PARTNER_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_BRIEF_SCOPE
│       ├── 04_DELIVERABLES
│       ├── 05_COMMUNICATION
│       ├── 06_FINANCE
│       └── 09_ARCHIVE
├── 04_DEALS
│   └── [DEAL_OR_ASSET_NAME]
│       ├── 00_START_HIER
│       ├── 01_RECHTEN_REGISTER
│       ├── 02_CONTRACTEN_BEWIJS
│       ├── 03_WAARDERING_VERKOOPPAKKET
│       ├── 04_OUTREACH_CLICKUP
│       └── 99_ARCHIEF
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
│   ├── APPROVALS
│   │   └── CM_APPROVAL_REGISTER
│   ├── CONTRACTS
│   ├── LEGAL_REVIEW
│   └── EVIDENCE
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
    ├── ARTIST_MANAGEMENT
    ├── CLIENTS
    ├── DEALS
    ├── REVIEW_HOLD_OLD_STRUCTURE
    ├── LEGACY_ROOTS
    └── MIGRATION_LOGS
```

## Rootfolderregels

- Onder `OS_CUSTOMMADE` worden uitsluitend de genummerde hoofdmappen uit deze structuur gebruikt.
- `00_ADMIN` bevat alleen CM-brede inbox review, governance reference, templates, reports en approvals.
- `01_MASTER_BOUTIQUE` is gereserveerd voor Master Boutique context; concrete deals of assets worden als case onder `04_DEALS` beheerd.
- `02_ARTIST_MANAGEMENT` is artist-first en bevat uitsluitend `[ARTIST_NAME]` dossiers.
- `03_CLIENTS` is uitsluitend voor clients, partners, merken, bedrijven, sponsors, opdrachtgevers en media partners.
- `04_DEALS` bevat deal- of assetcases met de lean Nederlandse dealstructuur.
- `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` is de enige operationele approval register locatie.
- `99_ARCHIVE` bevat alleen afgerond, legacy, superseded, review-hold of migratielogmateriaal en is geen werkroot.

## Artist folder rule

Alle artiestendossiers staan onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`. Artists worden niet gemigreerd naar `03_CLIENTS` en er worden geen statuslagen onder `02_ARTIST_MANAGEMENT` aangemaakt.

Elke artistfolder bevat exact:

```text
[ARTIST_NAME]
├── 01_ADMIN
├── 02_CONTRACT
├── 03_STRATEGY
├── 04_RELEASES
├── 05_BOOKING
├── 06_FINANCE
├── 07_SOCIALMEDIA
├── 08_PRESS_EPK
└── 09_ARCHIVE
```

## Client folder rule

Elke client- of partnerfolder staat onder `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]` en bevat exact:

```text
[CLIENT_OR_PARTNER_NAME]
├── 01_ADMIN
├── 02_CONTRACT
├── 03_BRIEF_SCOPE
├── 04_DELIVERABLES
├── 05_COMMUNICATION
├── 06_FINANCE
└── 09_ARCHIVE
```

## Deal folder rule

Elke deal- of assetcase staat onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` en gebruikt exact:

```text
[DEAL_OR_ASSET_NAME]
├── 00_START_HIER
├── 01_RECHTEN_REGISTER
├── 02_CONTRACTEN_BEWIJS
├── 03_WAARDERING_VERKOOPPAKKET
├── 04_OUTREACH_CLICKUP
└── 99_ARCHIEF
```

## Legal en archive regels

- Legal gebruikt `APPROVALS`, `CONTRACTS`, `LEGAL_REVIEW` en `EVIDENCE` als vaste submappen.
- Inactieve artists gaan volledig naar `OS_CUSTOMMADE/99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`.
- Inactieve clients gaan volledig naar `OS_CUSTOMMADE/99_ARCHIVE/CLIENTS/[CLIENT_OR_PARTNER_NAME]`.
- Afgeronde of superseded deals gaan naar `OS_CUSTOMMADE/99_ARCHIVE/DEALS/[DEAL_OR_ASSET_NAME]` of naar de case-eigen `99_ARCHIEF` zolang de case actief blijft.
- Oude structuren gaan naar `REVIEW_HOLD_OLD_STRUCTURE` of `LEGACY_ROOTS`; migratiebewijs gaat naar `MIGRATION_LOGS`.

## Toolgrenzen

- GitHub bewaart governance, SOPs, workflows, playbooks en systeemdocumentatie.
- Google Drive bewaart live dossiers, signed documents, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, pipeline, eigenaren, deadlines en taakbewijs.
- Moneybird blijft financiële waarheid.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.

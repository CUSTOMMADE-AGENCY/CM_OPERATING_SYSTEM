# Client Folder Standard

## Doel

Leg vast hoe client-, partner-, merk-, sponsor-, opdrachtgever- en media partnerdossiers in Google Drive worden ingericht binnen de goedgekeurde `OS_CUSTOMMADE` Drive-structuur.

## Map Specifications

Deze Folder Standard beschrijft alleen de mapstructuur van een client- of partnerdossier. Voor de inhoud van iedere map zijn de Map Specifications leidend: `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/`.

## Scope

Deze standaard geldt voor:

`OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]`

`03_CLIENTS` bevat geen artists en geen deal- of assetcases die onder `04_DEALS` thuishoren.

## Goedgekeurde structuur

```text
OS_CUSTOMMADE
└── 03_CLIENTS
    └── [CLIENT_OR_PARTNER_NAME]
        ├── 01_ADMIN
        ├── 02_CONTRACT
        ├── 03_BRIEF_SCOPE
        ├── 04_DELIVERABLES
        ├── 05_COMMUNICATION
        ├── 06_FINANCE
        └── 09_ARCHIVE
```

## Folderbetekenis

| Folder | Doel | Voorbeelden | Niet gebruiken voor |
|---|---|---|---|
| `01_ADMIN` | Administratieve basis van het client- of partnerdossier. | Intake, contactgegevens, onboarding notes, access notes, algemene afspraken. | Contracten, scopebesluiten, deliverables of finance-bronadministratie. |
| `02_CONTRACT` | Contractuele en juridische bewijslaag. | Agreements, NDA's, SOW's, amendments, signed approvals, legal evidence. | Algemene admin of operationele communicatie zonder contractwaarde. |
| `03_BRIEF_SCOPE` | Briefing, scope, planning en opdrachtkaders. | Briefs, scopes, projectkaders, planning, requirements, kickoff notes. | Finale deliverables of contractbronnen. |
| `04_DELIVERABLES` | Te leveren of opgeleverde clientmaterialen. | Reports, decks, exports, campagne-items, assets, final delivery packages. | Interne conceptchaos of financiële administratie. |
| `05_COMMUNICATION` | Relevante communicatie en bewijs van afstemming. | Meeting notes, decision summaries, email exports, approved communication records. | Gmail als primaire inbox of ongefilterde mailbox dumps. |
| `06_FINANCE` | Client-specifieke financiële referenties en approvals. | Budgetafspraken, PO-referenties, fee-afspraken, betalingsstatusnotities, financiële approvals. | Primaire facturen/bonnenadministratie; Moneybird blijft financiële waarheid. |
| `09_ARCHIVE` | Superseded, historische of afgeronde materialen binnen een actief clientdossier. | Oude versies, afgeronde fases, superseded deliverables, historische exports. | Inactieve clientdossiers als geheel. |

## Regels

- Geen artists in `03_CLIENTS`; artistdossiers staan onder `02_ARTIST_MANAGEMENT`.
- Geen deals of assetcases in `03_CLIENTS`; die staan onder `04_DEALS`.
- Geen financiële bronadministratie buiten Moneybird of de finance-governance.
- Geen getekende contracten of vertrouwelijke clientdata in GitHub.
- Google Drive is leidend voor live clientbestanden.
- GitHub is leidend voor deze standaard.

## Archive-regel

Wanneer een client of partner niet langer actief is, verplaats het volledige dossier naar:

`OS_CUSTOMMADE/99_ARCHIVE/CLIENTS/[CLIENT_OR_PARTNER_NAME]`

Niet verspreiden, niet per submap archiveren en niet verwijderen zonder approval.

## Quality check

Een clientfolder is compliant wanneer het dossier direct onder `03_CLIENTS` staat, alle 7 verplichte submappen bestaan, er geen artist- of dealmateriaal in staat en financiële waarheid in Moneybird blijft.

# Artist Folder Standard

## Doel

Leg vast hoe actieve artistdossiers in Google Drive worden ingericht binnen de goedgekeurde `OS_CUSTOMMADE` Drive-structuur.

## Scope

Deze standaard geldt voor:

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

`OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` bevat uitsluitend actieve artists waarvoor CM artist management, business management, release strategie, brand audit, brandbook, rights support, projectmanagement of retainerwerk uitvoert.

## Goedgekeurde structuur

```text
OS_CUSTOMMADE
└── 02_ARTIST_MANAGEMENT
    └── [ARTIST_NAME]
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

## Folderbetekenis

| Folder | Doel | Voorbeelden | Niet gebruiken voor |
|---|---|---|---|
| `01_ADMIN` | Administratieve basis van het actieve artistdossier. | Intake, contactgegevens, team roster, algemene afspraken, access notes, onboarding summary. | Contractuele bronstukken, strategie, releases of social content. |
| `02_CONTRACT` | Contractuele en juridische bewijslaag binnen het artistdossier. | Management agreements, NDA's, amendments, deal confirmations, approval evidence rond contracten. | Algemene admin, financiële administratie of losse concepten zonder contractcontext. |
| `03_STRATEGY` | Strategische richting, positionering en scope. | Brand Audit, Brandbook, Business Audit, roadmap, positioning, strategy notes. | Release-assets, social planning of contractstukken. |
| `04_RELEASES` | Releasegerelateerde planning, assets en bewijsstukken. | Releaseplanning, masters references, artwork, metadata, ISRC/UPC, distribution notes, campaign timelines. | Algemene strategie, booking of social-only contentkalenders. |
| `05_BOOKING` | Live-, show- en performancegerelateerde informatie. | Shows, live aanvragen, offers, riders, setlists, travel notes, performance planning. | Releaseplanning, contractarchief of algemene admin. |
| `06_FINANCE` | Artist-specifieke financiële referenties en approvals. | Artistbudgetten, kostenoverzichten, royalty references, fee-afspraken, recoupment notes. | Primaire factuuradministratie; Moneybird blijft financiële waarheid. |
| `07_SOCIALMEDIA` | Social planning, content en platformmateriaal. | Contentplanning, social assets, captions, approvals, posting calendars, platform notes. | `07_CONTENT` of een losse `SOCIALMEDIA`-map. |
| `08_PRESS_EPK` | PR-, pers- en EPK-ready materiaal. | Bio, press kit, pressfoto's, EPK, media assets, interviews, PR-ready materials. | Social-only content, contracten of interne strategieconcepten. |
| `09_ARCHIVE` | Historische en superseded materialen binnen een actief artistdossier. | Oude versies, afgeronde fases, superseded materiaal, historische exports. | Inactieve artistdossiers als geheel. |

## Regels

- Geen statuslagen in Drive; status, pipeline en uitvoering staan in ClickUp.
- Geen artistbestanden, getekende contracten of vertrouwelijke clientdata in GitHub.
- Geen artistdossiers in `03_CLIENTS`.
- Geen actieve artistdossiers in `99_ARCHIVE`.
- Geen `07_CONTENT` en geen ongenummerde `SOCIALMEDIA`.
- Google Drive is leidend voor live artistbestanden.
- GitHub is leidend voor deze standaard.

## Archive-regel

Wanneer een artist niet langer actief is, verplaats het volledige artistdossier naar:

`OS_CUSTOMMADE/99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`

Niet verspreiden, niet per submap archiveren en niet verwijderen.

## Quality check

Een artistfolder is compliant wanneer de artist direct onder `02_ARTIST_MANAGEMENT` staat, alle 9 verplichte submappen bestaan, geen legacy social/content mappen actief zijn en artiststatus alleen in ClickUp staat.

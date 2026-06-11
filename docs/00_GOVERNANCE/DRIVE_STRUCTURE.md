# Google Drive Structure Governance

## Doel

Google Drive is de operationele working environment voor clientbestanden, getekende documenten, deliverables, finance, legal, content en archieven. Drive ondersteunt uitvoering, maar is niet de documentatie-source of truth.

GitHub en Google Drive hebben daarom bewust geen identieke structuur:

- GitHub bewaart Governance, SOPs, Workflows, Playbooks en as-built systeemdocumentatie.
- Google Drive bewaart live operationele bestanden, signed documents, deliverables en werkbestanden.

Deze pagina documenteert de productie-werkelijkheid van Google Drive. De GitHub-repositoryarchitectuur blijft ongewijzigd en wordt niet één-op-één gespiegeld naar Drive.

## Goedgekeurde Drive-root

Alle CM Drive-mappen vallen onder één rootfolder:

`OS_CUSTOMMADE`

## Productie Drive-structuur

De actuele productie-rootstructuur is:

```text
OS_CUSTOMMADE
│
├── 00_INBOX
├── 01_ARTIST_MANAGEMENT
├── 02_MASTER_BOUTIQUE
├── 03_EXECUTIVE
├── 04_BUSINESS
├── 05_MARKETING
├── 06_PROJECTS
└── 07_ARCHIVE
```

## Artist Management structuur

Elke artistfolder binnen `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT` gebruikt exact dezelfde interne productiestructuur:

```text
ARTIST_NAME
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

Deze regel geldt voor alle huidige en toekomstige artistfolders binnen `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT`, waaronder:

- `CALSEY`
- `DANI DEAUX`
- `DODO`
- `GINIIO`
- `GOUDTJE_GET_PAID`
- `JAIRZINHO`
- `KALIBWOY`
- `LATIFAH`
- `NAMIKOO`

## Rootfolder-doel

- `00_INBOX` — tijdelijke intake voor nog te verwerken documenten, uploads en losse input.
- `01_ARTIST_MANAGEMENT` — live artist operations, artistdocumenten, releases, booking, finance, social media, press/EPK en archief per artist.
- `02_MASTER_BOUTIQUE` — Master Boutique client-, deal-, catalogus-, buyer-, legal-, finance- en deliverablebestanden.
- `03_EXECUTIVE` — executive-level planning, besluitvorming, directieoverzichten en vertrouwelijke managementbestanden.
- `04_BUSINESS` — bedrijfsvoering, finance, legal, HR, interne administratie en commerciële bedrijfsbestanden.
- `05_MARKETING` — CM-brede marketing, merk, content, social media en netwerkbestanden.
- `06_PROJECTS` — tijdelijke of cross-functionele projecten die niet volledig binnen één artist-, Master Boutique-, business- of marketingmap vallen.
- `07_ARCHIVE` — afgesloten, historisch of niet-actief materiaal dat operationeel bewaard moet blijven.

## Gedocumenteerde structuur versus live productie

De eerdere documentatie week op deze punten af van de live Drive-structuur:

| Onderdeel | Eerder gedocumenteerd | Live productie | Besluit |
| --- | --- | --- | --- |
| Rootfolder `03_*` | `03_SHARED_SERVICES` | `03_EXECUTIVE` | Documentatie aangepast aan productie. GitHub behoudt wel `docs/03_SHARED_SERVICES/`. |
| Artist subfolder `07_*` | `07_CONTENT` | `07_SOCIALMEDIA` | Documentatie aangepast aan productie. Social media is de goedgekeurde artistfoldernaam. |
| Artist subfolder extra | `SOCIALMEDIA` naast genummerde folders | Geen losse `SOCIALMEDIA`; alleen `07_SOCIALMEDIA` | Extra ongenummerde map verwijderd uit de governance-documentatie. |
| Tweede niveaus onder rootfolders | Uitgebreide tweede niveaus voor `02_MASTER_BOUTIQUE`, `03_SHARED_SERVICES`, `04_BUSINESS` en `05_MARKETING` | Alleen productie-rootfolders zijn vastgesteld in deze governance-pagina; nadere substructuren volgen live Drive-ownership | Niet langer als vaste Drive-governance opgenomen, om geen niet-productiearchitectuur te documenteren. |

## Shared Services versus GitHub

`03_SHARED_SERVICES` bestaat als GitHub-documentatiedomein en blijft onderdeel van de repositoryarchitectuur. Het is geen productie-rootfolder in Google Drive.

Company-wide instructies, SOPs, templates en governance worden in GitHub beheerd binnen de goedgekeurde docs-architectuur. Operationele bestanden die bij gedeelde uitvoering horen, worden in Drive geplaatst binnen de passende productie-rootfolder, bijvoorbeeld `03_EXECUTIVE`, `04_BUSINESS`, `05_MARKETING` of een specifieke artist-, Master Boutique- of projectmap.

Client- of artist-specifieke instructies en werkbestanden staan altijd in de relevante artist-, Master Boutique-, business- of projectcontext.

Voorbeelden:

- Repositorybron voor gedeelde SOPs: `docs/03_SHARED_SERVICES/`
- Artist-specifieke releaseplanning: `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/<ARTIST_NAME>/04_RELEASES`
- Artist-specifieke social media assets of planning: `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/<ARTIST_NAME>/07_SOCIALMEDIA`
- Executive planning of directieoverzichten: `OS_CUSTOMMADE/03_EXECUTIVE`

## Regels

- Maak geen parallelle mappenstructuren buiten `OS_CUSTOMMADE`.
- Gebruik alleen de productie-rootfolders zoals hierboven beschreven.
- Gebruik voor artistfolders exact de genummerde artiststructuur zoals hierboven beschreven.
- Gebruik exacte foldernamen en hoofdletters zoals productie.
- Maak geen ongenummerde artistfolder `SOCIALMEDIA`; gebruik `07_SOCIALMEDIA`.
- Hernoem de GitHub-map `docs/03_SHARED_SERVICES/` niet naar aanleiding van de Drive-structuur; GitHub en Drive hebben bewust verschillende architecturen.
- Gebruik duidelijke eigenaar- en access-afspraken per artist-, client- of projectmap.
- Archiveer afgesloten werk zonder GitHub-documentatie of source-of-truth materiaal te dupliceren.

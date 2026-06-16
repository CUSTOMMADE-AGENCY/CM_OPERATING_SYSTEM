# Google Drive Structure Governance

## Doel

Google Drive is de operationele working environment voor briefing-roots, clientbestanden, getekende documenten, deliverables, finance, legal, content en archieven. Drive ondersteunt uitvoering, maar is niet de documentatie-source of truth.

GitHub en Google Drive hebben daarom bewust geen identieke structuur:

- GitHub bewaart Governance, SOPs, Workflows, Playbooks en as-built systeemdocumentatie.
- Google Drive bewaart live briefings, operationele bestanden, signed documents, deliverables en werkbestanden.

Deze pagina volgt `CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`: Drive briefing-roots zijn leidend, artists worden als clients behandeld en operationele artistdossiers staan onder `03_CLIENTS`.

## Goedgekeurde Drive-root

Alle CM Drive-mappen vallen onder één rootfolder:

`OS_CUSTOMMADE`

## Productie Drive-structuur

Alleen onderstaande rootfolders zijn goedgekeurd als productie-root onder `OS_CUSTOMMADE`:

```text
OS_CUSTOMMADE
│
├── 00_INBOX
├── 01_BRIEFINGS
├── 02_PIPELINE
├── 03_CLIENTS
├── 04_DEALS
├── 05_BUSINESS
├── 06_MARKETING
└── 07_ARCHIVE
```

## Nieuwe briefing-roots

Briefings zijn de verplichte startlaag voor nieuwe operationele dossiers. Een briefing wordt eerst in `01_BRIEFINGS` vastgelegd en pas daarna omgezet naar een client-, deal- of intern uitvoeringsdossier.

```text
01_BRIEFINGS
├── 01_CLIENT_BRIEFINGS
├── 02_DEAL_BRIEFINGS
├── 03_PROJECT_BRIEFINGS
└── 04_INTERNAL_BRIEFINGS
```

- `01_CLIENT_BRIEFINGS` — intake, onboarding, management-, artist-, brand-, release- en clientbriefings.
- `02_DEAL_BRIEFINGS` — Master Boutique, catalogus-, buyer-, LOI-, APA- en partnershipbriefings.
- `03_PROJECT_BRIEFINGS` — tijdelijke of cross-functionele projectbriefings.
- `04_INTERNAL_BRIEFINGS` — interne CM-briefings voor business, marketing, governance of tooling.

## Clientstructuur onder `03_CLIENTS`

Artists zijn clients. Elke artist- of clientfolder binnen `OS_CUSTOMMADE/03_CLIENTS` gebruikt waar relevant deze vaste interne productiestructuur:

```text
CLIENT_OR_ARTIST_NAME
├── 01_ADMIN
├── 02_CONTRACT
├── 03_STRATEGY
├── 04_RELEASES
├── 05_BOOKING_PARTNERSHIPS
├── 06_FINANCE
├── 07_SOCIALMEDIA
├── 08_PRESS_EPK
└── 09_ARCHIVE
```

Deze regel geldt voor alle huidige en toekomstige artist- en clientfolders, waaronder bestaande artistdossiers die voorheen onder `01_ARTIST_MANAGEMENT` stonden.

## Dealstructuur onder `04_DEALS`

Master Boutique en andere dealdossiers staan als cases onder `OS_CUSTOMMADE/04_DEALS`:

```text
DEAL_OR_ASSET_NAME
├── 00_Intake
├── 01_Valuation
├── 02_Data_Room
├── 03_Buyer_Outreach
├── 04_LOI
├── 05_APA_Negotiation
├── 06_Closing
├── 07_Post_Closing
└── 08_Success_Fee
```

## Productievalidatie

| Volgorde | Goedgekeurde productiefolder | Status in documentatie |
| --- | --- | --- |
| 00 | `00_INBOX` | Tijdelijke intake voor nog te triageren uploads. |
| 01 | `01_BRIEFINGS` | Nieuwe leidende briefing-root voor client-, deal-, project- en interne briefings. |
| 02 | `02_PIPELINE` | Pre-client/pre-deal pipeline en qualification voordat een dossier wordt geopend. |
| 03 | `03_CLIENTS` | Goedgekeurde client-root; artistdossiers vallen hieronder. |
| 04 | `04_DEALS` | Goedgekeurde deal/case-root voor Master Boutique en andere deals. |
| 05 | `05_BUSINESS` | Bedrijfsvoering, finance, legal, HR en interne administratie. |
| 06 | `06_MARKETING` | CM-brede marketing, merk, content, social media en netwerkbestanden. |
| 07 | `07_ARCHIVE` | Operationeel archief. |

Niet langer goedgekeurd als operationele productie-root:

- `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT` als aparte artist-silo.
- `OS_CUSTOMMADE/02_MASTER_BOUTIQUE` als aparte Master Boutique-root.
- `OS_CUSTOMMADE/03_SHARED_SERVICES` als Drive-rootfolder.
- `OS_CUSTOMMADE/03_EXECUTIVE` en `OS_CUSTOMMADE/04_BUSINESS` als oude rootnummering.
- `CLIENT_OR_ARTIST_NAME/07_CONTENT` of een ongenummerde `SOCIALMEDIA`-map.

## Rootfolder-doel

- `00_INBOX` — tijdelijke intake voor nog te verwerken documenten, uploads en losse input.
- `01_BRIEFINGS` — leidende startlaag voor client-, deal-, project- en interne briefings.
- `02_PIPELINE` — pre-client/pre-deal opportunities, Fit Checks en qualification voordat een live dossier wordt geopend.
- `03_CLIENTS` — live client- en artistdossiers, inclusief artistmanagement, releases, contracts, finance, social media, press/EPK en archief.
- `04_DEALS` — live deal-, Master Boutique-, catalogus-, buyer-, data-room-, LOI-, APA-, closing- en success-fee dossiers.
- `05_BUSINESS` — bedrijfsvoering, finance, legal, HR, interne administratie en commerciële bedrijfsbestanden.
- `06_MARKETING` — CM-brede marketing, merk, content, social media en netwerkbestanden.
- `07_ARCHIVE` — afgesloten, historisch of niet-actief materiaal dat operationeel bewaard moet blijven.

## GitHub versus Drive

`03_SHARED_SERVICES` bestaat als GitHub-documentatiedomein en blijft onderdeel van de repositoryarchitectuur. Het is geen productie-rootfolder in Google Drive.

Voorbeelden:

- Repositorybron voor gedeelde SOPs: `docs/03_SHARED_SERVICES/`
- Artist-specifieke releaseplanning: `OS_CUSTOMMADE/03_CLIENTS/<ARTIST_NAME>/04_RELEASES`
- Artist-specifieke social media assets of planning: `OS_CUSTOMMADE/03_CLIENTS/<ARTIST_NAME>/07_SOCIALMEDIA`
- Master Boutique data room: `OS_CUSTOMMADE/04_DEALS/<DEAL_NAME>/02_Data_Room`
- Nieuwe clientbriefing: `OS_CUSTOMMADE/01_BRIEFINGS/01_CLIENT_BRIEFINGS/<CLIENT_NAME>`

## Regels

- Maak geen parallelle mappenstructuren buiten `OS_CUSTOMMADE`.
- Gebruik alleen de productie-rootfolders zoals hierboven beschreven.
- Behandel artists als clients en plaats artistdossiers onder `03_CLIENTS`.
- Plaats deal- en Master Boutique-dossiers onder `04_DEALS`.
- Start nieuwe dossiers via de briefing-roots onder `01_BRIEFINGS`.
- Gebruik exacte foldernamen en hoofdletters zoals governance.
- Maak geen ongenummerde artistfolder `SOCIALMEDIA`; gebruik `07_SOCIALMEDIA`.
- Hernoem de GitHub-map `docs/03_SHARED_SERVICES/` niet naar aanleiding van de Drive-structuur.
- Gebruik duidelijke eigenaar- en access-afspraken per briefing-, client-, deal- of projectmap.

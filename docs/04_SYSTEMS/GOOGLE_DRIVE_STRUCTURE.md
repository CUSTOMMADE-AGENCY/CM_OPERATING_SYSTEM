# Google Drive Structure

## Doel

Documenteer de goedgekeurde Google Drive operating structure voor CM. Google Drive is de operationele working environment voor briefing-roots, client files, deal files, signed documents, deliverables, finance, legal, content en archives.

GitHub en Google Drive hebben bewust verschillende structuren:

- GitHub is de source of truth voor Governance, SOPs, Workflows, Playbooks en systeemdocumentatie.
- Google Drive is de operationele working environment voor live briefings, bestanden en deliverables.

## Rootfolder

Alle operationele CM Drive-mappen worden aangemaakt onder:

`OS_CUSTOMMADE`

## Goedgekeurde Drive-structuur

```text
OS_CUSTOMMADE
├── 00_INBOX
├── 01_BRIEFINGS
│   ├── 01_CLIENT_BRIEFINGS
│   ├── 02_DEAL_BRIEFINGS
│   ├── 03_PROJECT_BRIEFINGS
│   └── 04_INTERNAL_BRIEFINGS
├── 02_PIPELINE
├── 03_CLIENTS
│   └── CLIENT_OR_ARTIST_NAME
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_STRATEGY
│       ├── 04_RELEASES
│       ├── 05_BOOKING_PARTNERSHIPS
│       ├── 06_FINANCE
│       ├── 07_SOCIALMEDIA
│       ├── 08_PRESS_EPK
│       └── 09_ARCHIVE
├── 04_DEALS
│   └── DEAL_OR_ASSET_NAME
│       ├── 00_Intake
│       ├── 01_Valuation
│       ├── 02_Data_Room
│       ├── 03_Buyer_Outreach
│       ├── 04_LOI
│       ├── 05_APA_Negotiation
│       ├── 06_Closing
│       ├── 07_Post_Closing
│       └── 08_Success_Fee
├── 05_BUSINESS
├── 06_MARKETING
└── 07_ARCHIVE
```

## Client folder rule

Alle artist- en clientfolders staan onder `OS_CUSTOMMADE/03_CLIENTS`. Artists worden behandeld als clients; er wordt geen aparte operationele artist-silo gebruikt.

## Deal folder rule

Master Boutique en andere dealdossiers staan onder `OS_CUSTOMMADE/04_DEALS`. Een dealcase gebruikt de dealstructuur hierboven wanneer valuation, data-room, buyer outreach, LOI, APA, closing of success-fee stappen van toepassing zijn.

## Shared Services versus client-specifieke instructies

`docs/03_SHARED_SERVICES/` is een GitHub-documentatiedomein, geen Google Drive-rootfolder.

Client-specifieke instructies staan in de relevante clientfolder. Bijvoorbeeld:

- General email protocol source: `docs/03_SHARED_SERVICES/`
- Goudtje-specific email instructions: `OS_CUSTOMMADE/03_CLIENTS/GOUDTJE_GET_PAID/03_STRATEGY` of `OS_CUSTOMMADE/03_CLIENTS/GOUDTJE_GET_PAID/01_ADMIN`, afhankelijk van gebruik
- New client briefing: `OS_CUSTOMMADE/01_BRIEFINGS/01_CLIENT_BRIEFINGS/[Client Name]`
- Deal data room: `OS_CUSTOMMADE/04_DEALS/[Deal Name]/02_Data_Room`

## Script

Gebruik `scripts/google-drive/create-cm-drive-structure.gs` om de rootfolder `OS_CUSTOMMADE`, de goedgekeurde rootfolders, briefing-subroots, bekende artist/clientfolders en standaard clientsubfolders aan te maken.

Het script maakt alleen ontbrekende folders aan. Het verwijdert, hernoemt of verplaatst geen bestaande content en voorkomt duplicate folders door bestaande foldernamen eerst te hergebruiken.

## Opslag- en toolgrenzen

- GitHub bewaart Workflows, Governance, SOPs, Playbooks en systeemdocumentatie.
- Google Drive bewaart live briefings, clientmappen, dealmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.
- Moneybird blijft financiële waarheid.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.

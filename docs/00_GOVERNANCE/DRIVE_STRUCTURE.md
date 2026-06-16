# Google Drive Structure Governance

## Doel

Documenteer de goedgekeurde Google Drive operating structure voor CM. Google Drive is de operationele working environment voor client files, deal files, signed documents, deliverables, finance, legal, content en archives.

GitHub en Google Drive hebben bewust verschillende structuren:

- GitHub is de source of truth voor Governance, SOPs, Workflows, Playbooks en systeemdocumentatie.
- Google Drive is de operationele working environment voor live dossiers, bestanden en deliverables.

Deze pagina volgt de locked decision uit `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`. Bij conflict is de locked decision leidend.

## Rootfolder

Alle operationele CM Drive-mappen worden aangemaakt onder:

`OS_CUSTOMMADE`

## Goedgekeurde Drive-structuur

Gebruik uitsluitend onderstaande rootfolders onder `OS_CUSTOMMADE`:

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

Oude rootstructuren worden niet meer aangemaakt of als operationele root gebruikt.

## Client folder rule

Alle artist- en clientfolders staan onder `OS_CUSTOMMADE/03_CLIENTS`. Artists worden behandeld als clients; er wordt geen aparte operationele artist-silo gebruikt.

Elke client- of artistfolder gebruikt waar relevant deze vaste productiestructuur:

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

## Deal folder rule

Master Boutique en andere dealdossiers staan onder `OS_CUSTOMMADE/04_DEALS`. Gebruik uitsluitend de lean Nederlandse dealstructuur zolang geen expliciete buyer-facing full Data Room-fase is goedgekeurd:

```text
DEAL_OR_ASSET_NAME
├── 01_RECHTEN_REGISTER
├── 02_CONTRACTEN_BEWIJS
└── 03_WAARDERING_VERKOOPPAKKET
```

- `01_RECHTEN_REGISTER` bevat rechten- en catalogusdata.
- `02_CONTRACTEN_BEWIJS` bevat contracten, bewijsstukken en juridische onderbouwing.
- `03_WAARDERING_VERKOOPPAKKET` bevat waardering, Deal Memo, Buyer Package en final export.

De oude Engelse dealstructuur is niet meer toegestaan als standaard Drive-structuur.

## Shared Services versus client-specifieke instructies

`docs/03_SHARED_SERVICES/` is een GitHub-documentatiedomein, geen Google Drive-rootfolder.

Client-specifieke instructies staan in de relevante clientfolder. Bijvoorbeeld:

- General email protocol source: `docs/03_SHARED_SERVICES/`
- Goudtje-specific email instructions: `OS_CUSTOMMADE/03_CLIENTS/GOUDTJE_GET_PAID/03_STRATEGY` of `OS_CUSTOMMADE/03_CLIENTS/GOUDTJE_GET_PAID/01_ADMIN`, afhankelijk van gebruik
- New client intake/briefing material: `OS_CUSTOMMADE/03_CLIENTS/[Client Name]/01_ADMIN`
- Lean deal package: `OS_CUSTOMMADE/04_DEALS/[Deal Name]/03_WAARDERING_VERKOOPPAKKET`

## Script

Gebruik `scripts/google-drive/create-cm-drive-structure.gs` om de rootfolder `OS_CUSTOMMADE`, de goedgekeurde rootfolders, bekende artist/clientfolders en standaard client- en dealsubfolders aan te maken.

Het script maakt alleen ontbrekende folders aan. Het verwijdert, hernoemt of verplaatst geen bestaande content en voorkomt duplicate folders door bestaande foldernamen eerst te hergebruiken.

## Opslag- en toolgrenzen

- GitHub bewaart Workflows, Governance, SOPs, Playbooks en systeemdocumentatie.
- Google Drive bewaart live dossiers, clientmappen, dealmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.
- Moneybird blijft financiële waarheid.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.

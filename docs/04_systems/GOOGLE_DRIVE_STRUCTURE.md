# Google Drive Structure

## Doel

Documenteer de goedgekeurde Google Drive operating structure voor CM. Google Drive is de operationele working environment voor client files, signed documents, deliverables, finance, legal, content en archives.

GitHub en Google Drive hebben bewust verschillende structuren:

- GitHub is de source of truth voor Governance, SOPs, Workflows, Playbooks en systeemdocumentatie.
- Google Drive is de operationele working environment voor live bestanden en deliverables.

## Rootfolder

Alle operationele CM Drive-mappen worden aangemaakt onder:

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
├── 03_EXECUTIVE
│   ├── 01_GOVERNANCE
│   ├── 02_TEMPLATES
│   ├── 03_OPERATION
│   ├── 04_REPORTS
│   └── 05_SOPS&FLOWS
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

Alle artist folders binnen `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT` gebruiken exact dezelfde interne structuur:

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

Deze standaard wordt toegepast op:

- `CALSEY`
- `DANI DEAUX`
- `DODO`
- `GINIIO`
- `GOUDTJE_GET_PAID`
- `JAIRZINHO`
- `KALIBWOY`
- `LATIFAH`
- `NAMIKOO`

## Executive versus client-specifieke instructies

`OS_CUSTOMMADE/03_EXECUTIVE` is voor company-wide instructions, governance, templates, reports en SOPs/flows.

Client-specifieke instructies staan in de relevante artist- of clientfolder. Bijvoorbeeld:

- General email protocol: `OS_CUSTOMMADE/03_EXECUTIVE/05_SOPS&FLOWS`
- Goudtje-specific email instructions: `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/GOUDTJE_GET_PAID/03_STRATEGY` of `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT/GOUDTJE_GET_PAID/01_ADMIN`, afhankelijk van gebruik

## Script

Gebruik `scripts/google-drive/create-cm-drive-structure.gs` om de rootfolder `OS_CUSTOMMADE`, alle goedgekeurde rootfolders, alle goedgekeurde tweede niveaus, alle artistfolders en alle standaard artist subfolders aan te maken.

Het script maakt alleen ontbrekende folders aan. Het verwijdert, hernoemt of verplaatst geen bestaande content en voorkomt duplicate folders door bestaande foldernamen eerst te hergebruiken.

## Opslag- en toolgrenzen

- GitHub bewaart Workflows, Governance, SOPs, Playbooks en systeemdocumentatie.
- Google Drive bewaart live clientmappen, getekende documenten, deliverables en werkbestanden.
- ClickUp bewaart uitvoering, Pipeline-fases, eigenaren, deadlines en taakbewijs.
- Gmail bewaart correspondentie en goedgekeurde communicatietemplates.

## Repository-hygiëne

- Commit geen getekende contracten, vertrouwelijke clientbestanden, exports, dubbele mappen of ad-hoc concepten.
- Gebruik duidelijke versiegeschiedenis via commits en pull requests in plaats van `final_final`-bestandsnamen.
- Bewaar clientspecifieke details in de juiste live workspace, niet in deze repository.

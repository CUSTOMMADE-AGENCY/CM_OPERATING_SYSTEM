# As-Built Documentatie

## Doel

As-built documentatie legt vast hoe het systeem vandaag daadwerkelijk is ingericht, niet hoe het oorspronkelijk was bedacht.

## Wat documenteren

- Mapstructuren in Google Drive.
- ClickUp spaces, folders, lists, statussen en custom fields.
- Gmail-template-namen en bedoeld gebruik.
- Automations, triggers, eigenaren en failure handling.
- Integraties, scripts en handmatige workarounds.

## GitHub repositorystructuur

De actuele GitHub source-of-truth gebruikt uitsluitend uppercase domeinmappen onder `docs/`:

- `docs/00_GOVERNANCE/` — governance, operating model, documentstandaarden, beslislog, AI-tooling, automation backlog en repositoryregels.
- `docs/01_MASTER_BOUTIQUE/` — Master Boutique workflows, buyer/data-room documentatie en transactieplaybooks.
- `docs/02_ARTIST_MANAGEMENT/` — Artist Management lifecycle, SOPs, audits, approvals en execution flows.
- `docs/03_SHARED_SERVICES/` — gedeelde onboarding-, communicatie-, proposal-, meeting-, file-management- en templatebronnen.
- `docs/03_SHARED_SERVICES/TEMPLATES/` — enige goedgekeurde repositorylocatie voor operationele template-documentatie, inclusief Shared Services, Artist Management, Client Deliverables, ClickUp, Gmail en e-mailtemplates.
- `docs/04_SYSTEMS/` — ClickUp-, Google Drive-, Gmail-, AI-agent- en automatiseringsdocumentatie.
- `docs/05_KNOWLEDGE_BASE/` — kennisbank voor muziekbusiness-onderwerpen en rechten.
- `docs/06_PLAYBOOKS/` — operationele playbooks voor sales, deals, releases, partnerships en rechten.
- `docs/07_AI_AGENTS/` — AI-agentrollen, governance en taakafbakening.

## Goedgekeurde docs-structuur

```text
docs/
├── 00_GOVERNANCE
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_SHARED_SERVICES
├── 04_SYSTEMS
├── 05_KNOWLEDGE_BASE
├── 06_PLAYBOOKS
└── 07_AI_AGENTS
```

Deprecated documentatiemappen buiten deze structuur zijn geen geldige navigatie- of linktargets meer. Operationele templates worden niet op meerdere locaties beheerd; GitHub bewaart de templatebron, terwijl ingevulde clientversies in Google Drive, ClickUp of Gmail blijven.


## Google Drive productie-as-built

De actuele governance-root van Google Drive is `OS_CUSTOMMADE`. Deze as-built volgt de locked Week 1 Build Pack v2-besluiten: Drive briefing-roots zijn leidend, artists worden als clients behandeld en ClickUp/Drive execution gebruikt geen aparte artist- of Master Boutique-silo als operationele root.

```text
OS_CUSTOMMADE
├── 00_INBOX
├── 01_BRIEFINGS
├── 02_PIPELINE
├── 03_CLIENTS
├── 04_DEALS
├── 05_BUSINESS
├── 06_MARKETING
└── 07_ARCHIVE
```

De briefing-root is de startlaag voor nieuwe dossiers:

```text
01_BRIEFINGS
├── 01_CLIENT_BRIEFINGS
├── 02_DEAL_BRIEFINGS
├── 03_PROJECT_BRIEFINGS
└── 04_INTERNAL_BRIEFINGS
```

Elke artist- of clientfolder onder `OS_CUSTOMMADE/03_CLIENTS` gebruikt waar relevant deze vaste interne structuur:

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

Master Boutique en andere deals staan als cases onder `OS_CUSTOMMADE/04_DEALS`:

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

### Drive-documentatie versus eerdere productie

Belangrijke as-built correcties ten opzichte van eerdere documentatie:

- Artistdossiers staan onder `03_CLIENTS`, niet onder een aparte `01_ARTIST_MANAGEMENT`-root.
- Master Boutique/dealdossiers staan onder `04_DEALS`, niet onder een aparte `02_MASTER_BOUTIQUE`-root.
- Nieuwe operationele intake loopt via `01_BRIEFINGS` met client-, deal-, project- en interne briefing-subroots.
- `03_SHARED_SERVICES` blijft uitsluitend een GitHub-documentatiedomein binnen `docs/` en is geen Drive-rootfolder.
- Artist/clientfolders gebruiken `07_SOCIALMEDIA`, niet `07_CONTENT`, en hebben geen extra ongenummerde `SOCIALMEDIA`-map.
- De GitHub-repositoryarchitectuur blijft ongewijzigd; Drive en GitHub zijn bewust niet identiek ingericht.

Zie `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` voor de governance-regels, rootfolder-doelen en het overzicht van verouderde Drive-roots.

## Reviewritme

Review elk kwartaal en na iedere grote rebuild van het operating system.

## Kwaliteitsstandaard

As-built documentatie moet specifiek genoeg zijn om het systeem opnieuw op te bouwen, te auditen en veilig over te dragen aan een nieuwe owner.

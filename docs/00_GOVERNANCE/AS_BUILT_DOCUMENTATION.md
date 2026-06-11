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

De actuele productie-root van Google Drive is `OS_CUSTOMMADE`. De live rootstructuur is:

```text
OS_CUSTOMMADE
├── 00_INBOX
├── 01_ARTIST_MANAGEMENT
├── 02_MASTER_BOUTIQUE
├── 03_EXECUTIVE
├── 04_BUSINESS
├── 05_MARKETING
├── 06_PROJECTS
└── 07_ARCHIVE
```

Elke artistfolder onder `OS_CUSTOMMADE/01_ARTIST_MANAGEMENT` gebruikt in productie deze vaste interne structuur:

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

Belangrijke as-built correcties ten opzichte van eerdere documentatie:

- Google Drive gebruikt `03_EXECUTIVE` als productie-rootfolder, niet `03_SHARED_SERVICES`.
- `03_SHARED_SERVICES` blijft uitsluitend een GitHub-documentatiedomein binnen `docs/` en is geen Drive-rootfolder.
- Artistfolders gebruiken `07_SOCIALMEDIA`, niet `07_CONTENT`.
- Artistfolders hebben geen extra ongenummerde `SOCIALMEDIA`-map naast de genummerde mappen.
- De GitHub-repositoryarchitectuur blijft ongewijzigd; Drive en GitHub zijn bewust niet identiek ingericht.

Zie `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` voor de governance-regels, rootfolder-doelen en het overzicht van verschillen tussen eerder gedocumenteerde en live productie-Drive-structuur.

## Reviewritme

Review elk kwartaal en na iedere grote rebuild van het operating system.

## Kwaliteitsstandaard

As-built documentatie moet specifiek genoeg zijn om het systeem opnieuw op te bouwen, te auditen en veilig over te dragen aan een nieuwe owner.

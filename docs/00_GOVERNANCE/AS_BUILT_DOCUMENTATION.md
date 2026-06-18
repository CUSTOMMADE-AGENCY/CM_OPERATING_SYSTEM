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
- `docs/05_AGENTS_AND_SCOPES/` — agentregister, scope-afbakening en eigenaarschap per domein.
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
├── 05_AGENTS_AND_SCOPES
├── 05_KNOWLEDGE_BASE
├── 06_PLAYBOOKS
└── 07_AI_AGENTS
```

Deprecated documentatiemappen buiten deze structuur zijn geen geldige navigatie- of linktargets meer. Operationele templates worden niet op meerdere locaties beheerd; GitHub bewaart de templatebron, terwijl ingevulde clientversies in Google Drive, ClickUp of Gmail blijven.


## Google Drive productie-as-built

De actuele governance-root van Google Drive is `OS_CUSTOMMADE`. Deze as-built volgt `CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md` als leidende locked decision: artistdossiers blijven onder `02_ARTIST_MANAGEMENT`, `03_CLIENTS` is beperkt tot merken, bedrijven, sponsors, opdrachtgevers en media partners, oude rootstructuren zijn verwijderd uit de productie-governance en Drive gebruikt uitsluitend de goedgekeurde rootlaag.

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

Elke artistfolder onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` gebruikt waar relevant deze vaste interne structuur:

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

Master Boutique en andere deals staan als cases onder `OS_CUSTOMMADE/04_DEALS` en gebruiken uitsluitend de lean Nederlandse dealstructuur zolang de deal de due diligence fase niet heeft bereikt:

```text
DEAL_OR_ASSET_NAME
├── 00_START_HIER
├── 01_RECHTEN_REGISTER
├── 02_CONTRACTEN_BEWIJS
├── 03_WAARDERING_VERKOOPPAKKET
├── 04_OUTREACH_CLICKUP
└── 99_ARCHIEF
```

### Drive-documentatie versus eerdere productie

Belangrijke as-built correcties ten opzichte van eerdere documentatie:

- Artistdossiers staan onder `02_ARTIST_MANAGEMENT`; artists worden niet gemigreerd naar `03_CLIENTS`.
- Master Boutique/dealdossiers staan onder `04_DEALS` en gebruiken de lean Nederlandse dealstructuur.
- Oude operationele roots worden niet meer aangemaakt of als productie-root gebruikt.
- De oude Engelse dealstructuur is geen standaard Drive-structuur meer.
- `03_SHARED_SERVICES` blijft uitsluitend een GitHub-documentatiedomein binnen `docs/` en is geen Drive-rootfolder.
- Artistfolders gebruiken `07_SOCIALMEDIA`, niet `07_CONTENT`, en hebben geen extra ongenummerde `SOCIALMEDIA`-map.
- De GitHub-repositoryarchitectuur blijft ongewijzigd; Drive en GitHub zijn bewust niet identiek ingericht.

Zie `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` voor de governance-regels en rootfolder-doelen.

## Reviewritme

Review elk kwartaal en na iedere grote rebuild van het operating system.

## Kwaliteitsstandaard

As-built documentatie moet specifiek genoeg zijn om het systeem opnieuw op te bouwen, te auditen en veilig over te dragen aan een nieuwe owner.

## Template- en agent-as-built

De actuele template-governance gebruikt één operationeel template-register: `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`. De master-templates worden in Google Drive uitsluitend beheerd onder `OS_CUSTOMMADE/00_ADMIN/03_TEMPLATES`; ingevulde operationele versies worden opgeslagen in de outputlocatie die per template in het register is vastgelegd.

`CM VAULT AGENT` is de enige agent die master-templates mag wijzigen. Andere agents mogen templates alleen gebruiken, kopiëren naar de aangewezen operationele map en case-specifiek invullen.

`04_DEALS` en `07_LEGAL` blijven aparte Google Drive-rootmappen. Beide domeinen vallen inhoudelijk onder `CM LEGAL AGENT`: `04_DEALS` voor operationele dealdossiers en rechten-/dealbewijs, `07_LEGAL` voor generieke legal governance, contracttemplates, NDA's en juridische standaarddocumentatie.

## Externe systemen en actuele status

- `info@custommade.agency` is de leidende mailbox voor Custommade Agency-communicatie, intake, opvolging en e-mailarchivering.
- Ondertekening loopt via Google Sheets, PDF en e-mail.
- Moneybird is alleen de financiële waarheid voor facturen, bonnen, kwitanties en financiële documenten. Drive, ClickUp en spreadsheets mogen financiële verwijzingen of bewijsstukken bevatten, maar vervangen Moneybird niet voor deze documenttypen.
- Make heeft op dit moment 0 scenario's en is nog in te richten.
- Canva heeft op dit moment nog geen Brand Kit en is nog te bouwen.

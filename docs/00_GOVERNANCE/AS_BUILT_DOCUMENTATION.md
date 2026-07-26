# AS-BUILT DOCUMENTATIE

## Doel

Dit document legt vast hoe het CM Operating System vandaag daadwerkelijk is ingericht.

## Systeemgrenzen

| Systeem | Rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks, Agents, Automations, Knowledge Base en systeemdocumentatie |
| Google Drive | Live dossiers, getekende documenten, deliverables en werkbestanden |
| ClickUp | Uitvoering, Pipeline, taken, owners en deadlines |
| Gmail | Communicatie en communicatietemplates |
| Moneybird | Financiële waarheid |
| Make | Automatiseringslaag |

## Actuele GitHub-structuur

```text
docs/
├── 00_GOVERNANCE
│   ├── ADR
│   ├── HISTORY
│   │   ├── BASELINES
│   │   ├── AUDITS
│   │   ├── RECOVERY_REPORTS
│   │   ├── SPRINT_REPORTS
│   │   └── SUPERSEDED
│   ├── MAP_SPECIFICATIONS
│   └── STANDARDS
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
│   ├── WORKFLOWS
│   ├── SOPS
│   ├── PLAYBOOKS
│   ├── AUTOMATIONS
│   ├── AGENTS
│   └── KNOWLEDGE_BASE
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
└── 09_CONTENT
```

`05_OPERATIONS` is de centrale locatie voor organisatiebrede operationele systeemdocumentatie. Agents staan niet onder SOPs. Agents gebruiken Workflows, voeren taken uit volgens SOPs, gebruiken Playbooks voor scenario's, Knowledge Base voor referentie en Automations voor ondersteuning.

## Actuele Google Drive-root

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

De detailstructuren binnen artist-, client- en dealdossiers worden via de Map Specifications beheerd. De Template Library is uitsluitend als inhoudelijk ongewijzigde bron naar de canonieke Operations-locatie verplaatst; inhoudelijke templatebesluiten vallen buiten deze correctie.

## Recoverystatus

Status: `VOLLEDIGE GITHUB-DOMEINSTRUCTUUR 00–09 — GEREALISEERD, IN REVIEW`

De actieve GitHub-documentatie is op inhoud en owner-lane geclassificeerd. De voormalige tussenlagen `docs/03_SHARED_SERVICES/` en `docs/04_SYSTEMS/` zijn geen actieve domeinen meer. Algemene systeemdocumentatie staat onder `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/`; de inhoudelijk ongewijzigde, canonieke Template Library staat onder `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/`. `99_ARCHIVE` blijft uitsluitend een Drive-root en is geen actief GitHub-domein.

Map Specifications onder `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/` beschrijven Drive-roots en Drive-dossiers; zij zijn governance-specificaties en geen GitHub-businessdomeinen.

## Reviewritme

Review na iedere structuurwijziging en minimaal elk kwartaal.

# Custommade Agency Operating System

Deze repository is de GitHub source of truth voor de operating Workflows, Governance, SOPs, Playbooks, templates en systeemdocumentatie van Custommade Agency Int. B.V.

Start met [`docs/00_GOVERNANCE/CM_OPERATING_MODEL.md`](docs/00_GOVERNANCE/CM_OPERATING_MODEL.md) als primair document om het volledige CM operating system te begrijpen. De niet-onderhandelbare repositoryregels staan in [`docs/00_GOVERNANCE/GOVERNANCE_RULES.md`](docs/00_GOVERNANCE/GOVERNANCE_RULES.md).


## Governance Prioriteit

Bij conflicten geldt deze Governance Prioriteit:

1. `DECISION_LOG.md`
2. `CM_OS_LOCKED_DECISIONS_*`
3. `GOVERNANCE_RULES.md`
4. `AUDIT_REPORTS`
5. `README`
6. AI-aanbevelingen

## Locked decisions

De Week 1 governance wordt geleid door [`docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`](docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md). Week 1 is pas klaar wanneer Drive-governance, ClickUp-mapping, het Moneybird-principe en shim-resolutie zijn verwerkt.

## Business lanes

### 01 Master Boutique
Voor catalogus-, master-, publishing-, rechtenacquisitie-, Buyer-, Data Room-, LOI-, APA- en transactieWorkflows.

### 02 Artist Management
Voor artist-clients, management, Brandbook, Release Strategie, Business Audit, artist roadmaps, rights checks, projectmanagement en retainers.

### 03 Shared Services
Voor herbruikbare onboarding-, communicatie-, proposal-, meeting-, file-management- en templatebronnen. Alle operationele template-documentatie staat centraal in [`docs/03_SHARED_SERVICES/TEMPLATES/`](docs/03_SHARED_SERVICES/TEMPLATES/).

## Systeemgrenzen

| Systeem | Source-of-truth rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks, templates en as-built systeemdocumentatie |
| Google Drive | Operationele working environment onder `OS_CUSTOMMADE` voor live clientmappen, getekende documenten, deliverables, finance, legal, content en archieven |
| ClickUp | Uitvoering, Pipeline, taakeigenaarschap, deadlines en taakgeschiedenis |
| Gmail | Communicatietemplates en correspondentie |

## Repository-overzicht

- `docs/00_GOVERNANCE/` — operationele regels, naamgeving, documentatie, version control en as-built standaarden.
- `docs/01_MASTER_BOUTIQUE/` — Workflow voor catalogus- en Asset-transacties en Buyer/Data Room Playbooks.
- `docs/02_ARTIST_MANAGEMENT/` — artist-client lifecycle, management SOPs, audits, approvals en retainers.
- `docs/03_SHARED_SERVICES/` — herbruikbare onboarding, e-mail, proposals, meetings, bestandsbeheer en de enige goedgekeurde templatebron.
- `docs/03_SHARED_SERVICES/TEMPLATES/` — centrale locatie voor Shared Services-, Artist Management-, Client Deliverable-, ClickUp-, Gmail- en e-mailtemplates.
- `docs/04_SYSTEMS/` — Google Drive-, ClickUp-, Gmail-, AI-agent- en automatiseringsdocumentatie.
- `docs/05_KNOWLEDGE_BASE/` — praktische muziekbusiness-kennisbank voor CM-teamleden, freelancers, stagiairs, toekomstige medewerkers en AI agents.
- `docs/06_PLAYBOOKS/` — operationele playbooks voor sales, deals, releases, partnerships en rechten.
- `docs/07_AI_AGENTS/` — AI-agentrollen, governance en taakafbakening.
- `scripts/google-drive/` — Google Apps Script-hulpmiddelen voor het aanmaken van de goedgekeurde `OS_CUSTOMMADE` Drive-mapstructuur.

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

## Niet-onderhandelbare repository-regels

- Er wordt geen legacy-rommel naar deze repository gekopieerd.
- Geen getekende contracten, vertrouwelijke clientbestanden of private commerciële data.
- Geen dubbele mappen, willekeurige exports of ongecontroleerde archiefdumps.
- Geen duplicate template-locaties; beheer operationele templates uitsluitend onder `docs/03_SHARED_SERVICES/TEMPLATES/`.
- Geen `final_final`-naamgeving. Gebruik version control en gedateerde beslissingen.
- Drive mag als referentie worden gebruikt, maar GitHub blijft de schone operationele source of truth.

## Hoe dit OS wordt bijgewerkt

1. Stel Workflow-wijzigingen voor in een branch.
2. Werk de relevante SOP, Playbook, template of systeemdocumentatie bij.
3. Houd toolgrenzen duidelijk.
4. Commit met een beschrijvend bericht.
5. Merge pas na review door de process owner.

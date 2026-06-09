# CUSTOMMADE AGENCY OPERATING SYSTEM

Deze repository is de GitHub source of truth voor de operating workflows, governance, SOPs, systemen, template-documentatie en architectuur van Custommade Agency Int. B.V.

Start met [`docs/00_GOVERNANCE/CM_OPERATING_MODEL.md`](docs/00_GOVERNANCE/CM_OPERATING_MODEL.md) als primair document om het volledige CM operating system te begrijpen.

## BUSINESS LANES

### 01_MASTER_BOUTIQUE

Voor catalogus-, master-, publishing-, rechtenacquisitie-, Buyer-, Data Room-, LOI-, APA- en transactieworkflows.

### 02_ARTIST_MANAGEMENT

Voor artist-clients, management, Brandbook, Release Strategie, Business Audit, artist roadmaps, rights checks, projectmanagement en retainers.

## SYSTEM BOUNDARIES

| SYSTEEM | SOURCE-OF-TRUTH ROL |
| --- | --- |
| GitHub | Governance, workflows, SOPs, playbooks, systemen, template-documentatie en as-built systeemdocumentatie |
| Google Drive | Live clientmappen, getekende documenten, deliverables, finance, legal, content en archieven |
| ClickUp | Uitvoering, pipelines, taakeigenaarschap, deadlines en taakgeschiedenis |
| Gmail | Communicatietemplates en correspondentie |

## REPOSITORY STRUCTURE

- `docs/00_GOVERNANCE/` — operationele regels, naamgeving, documentatie, version control en as-built standaarden.
- `docs/01_MASTER_BOUTIQUE/` — workflows voor catalogus- en Asset-transacties en Buyer/Data Room playbooks.
- `docs/02_ARTIST_MANAGEMENT/` — artist-client lifecycle, management SOPs, audits, approvals en retainers.
- `docs/03_SHARED_SERVICES/` — herbruikbare onboarding, e-mail, proposals, meetings, bestandsbeheer en template-documentatie.
- `docs/04_SYSTEMS/` — Google Drive-, ClickUp-, Gmail-, AI-agent- en automatiseringsdocumentatie.
- `docs/05_KNOWLEDGE_BASE/` — praktische muziekbusiness-kennisbank voor CM-teamleden, freelancers, stagiairs, toekomstige medewerkers en AI agents.
- `docs/06_PLAYBOOKS/` — commerciële en operationele playbooks.
- `docs/07_AI_AGENTS/` — AI-agentrollen, governance en werkinstructies.
- `scripts/google_drive/` — executable Google Apps Script-hulpmiddelen voor het aanmaken van de goedgekeurde `OS_CUSTOMMADE` Drive-mapstructuur.

## NAMING GOVERNANCE

Alle GitHub folders en documenttitels moeten uppercase zijn.

Correct:

- `00_GOVERNANCE`
- `03_SHARED_SERVICES`
- `04_SYSTEMS`

Incorrect:

- `00_governance`
- `03_shared_services`
- `04_systems`

Documenttitels gebruiken uppercase headings.

## NON-NEGOTIABLE REPOSITORY RULES

- GitHub blijft de schone operationele source of truth voor governance, workflows, SOPs, systemen, template-documentatie en architectuur.
- Google Drive bevat live clientbestanden en deliverables.
- ClickUp bevat execution, tasks en pipelines.
- Er wordt geen legacy-rommel naar deze repository gekopieerd.
- Geen getekende contracten, vertrouwelijke clientbestanden of private commerciële data.
- Geen dubbele mappen, willekeurige exports of ongecontroleerde archiefdumps.
- Geen `final_final`-naamgeving. Gebruik version control en gedateerde beslissingen.
- `docs/` is voor documentatie. `scripts/` is voor executable code.

## UPDATE FLOW

1. Stel workflow-wijzigingen voor in een branch.
2. Werk de relevante SOP, playbook, template-documentatie of governance file bij.
3. Houd toolgrenzen duidelijk.
4. Commit met een beschrijvend bericht.
5. Merge pas na review door de process owner.

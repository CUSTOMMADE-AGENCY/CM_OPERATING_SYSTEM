# Custommade Agency Operating System

Deze repository is de GitHub source of truth voor de operating Workflows, Governance, SOPs en systeemdocumentatie van Custommade Agency Int. B.V.

Start met [`docs/00_GOVERNANCE/CM_OPERATING_MODEL.md`](docs/00_GOVERNANCE/CM_OPERATING_MODEL.md) als primair document om het volledige CM operating system te begrijpen.

## Business lanes

### 01 Master Boutique
Voor catalogus-, master-, publishing-, rechtenacquisitie-, Buyer-, Data Room-, LOI-, APA- en transactieWorkflows.

### 02 Artist Management
Voor artist-clients, management, Brandbook, Release Strategie, Business Audit, artist roadmaps, rights checks, projectmanagement en retainers.

## Systeemgrenzen

| Systeem | Source-of-truth rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks en as-built systeemdocumentatie |
| Google Drive | Operationele working environment onder `OS_CUSTOMMADE` voor live clientmappen, getekende documenten, deliverables, finance, legal, content en archieven |
| ClickUp | Uitvoering, Pipeline, taakeigenaarschap, deadlines en taakgeschiedenis |
| Gmail | Communicatietemplates en correspondentie |

## Repository-overzicht

- `docs/00_GOVERNANCE/` — operationele regels, naamgeving, documentatie, version control en as-built standaarden.
- `docs/01_MASTER_BOUTIQUE/` — Workflow voor catalogus- en Asset-transacties en Buyer/Data Room Playbooks.
- `docs/02_ARTIST_MANAGEMENT/` — artist-client lifecycle, management SOPs, audits, approvals en retainers.
- `docs/03_SHARED_SERVICES/` — herbruikbare Onboarding, e-mail, Proposals, meetings en bestandsbeheer.
- `docs/04_SYSTEMS/` — Google Drive-, ClickUp-, Gmail-, AI-agent- en automatiseringsdocumentatie.
- `docs/05_KNOWLEDGE_BASE/` — praktische muziekbusiness-kennisbank voor CM-teamleden, freelancers, stagiairs, toekomstige medewerkers en AI agents.
- `scripts/google-drive/` — Google Apps Script-hulpmiddelen voor het aanmaken van de goedgekeurde `OS_CUSTOMMADE` Drive-mapstructuur.

## Niet-onderhandelbare repository-regels

- Er wordt geen legacy-rommel naar deze repository gekopieerd.
- Geen getekende contracten, vertrouwelijke clientbestanden of private commerciële data.
- Geen dubbele mappen, willekeurige exports of ongecontroleerde archiefdumps.
- Geen `final_final`-naamgeving. Gebruik version control en gedateerde beslissingen.
- Drive mag als referentie worden gebruikt, maar GitHub blijft de schone operationele source of truth.

## Hoe dit OS wordt bijgewerkt

1. Stel Workflow-wijzigingen voor in een branch.
2. Werk de relevante SOP of Playbook bij.
3. Houd toolgrenzen duidelijk.
4. Commit met een beschrijvend bericht.
5. Merge pas na review door de process owner.

# Custommade Agency Operating System

Deze repository is de GitHub source of truth voor de operating Workflows, Governance, SOPs, Playbooks, templates en systeemdocumentatie van Custommade Agency Int. B.V.

## STARTDOCUMENTEN

Lees in deze volgorde:

1. docs/00_GOVERNANCE/CM_OPERATING_MODEL.md
2. docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md
3. docs/00_GOVERNANCE/GOVERNANCE_RULES.md
4. docs/00_GOVERNANCE/DRIVE_STRUCTURE.md
5. docs/04_SYSTEMS/CM_ARCHITECTURE_MAP.md

## SOURCE OF TRUTH

- AS_BUILT_DOCUMENTATION.md beschrijft hoe het systeem vandaag daadwerkelijk is ingericht.
- DRIVE_STRUCTURE.md beschrijft de goedgekeurde Google Drive-structuur.
- GOVERNANCE_RULES.md bevat de niet-onderhandelbare repositoryregels.
- CM_ARCHITECTURE_MAP.md legt uit welk systeem waarvoor wordt gebruikt.

## BUSINESS LANES

### 01 Master Boutique
Voor catalogus-, master-, publishing-, rechtenacquisitie-, Buyer-, Data Room-, LOI-, APA- en transactieWorkflows.

### 02 Artist Management
Voor artist-clients, management, Brandbook, Release Strategie, Business Audit, artist roadmaps, rights checks, projectmanagement en retainers.

### 03 Shared Services
Voor herbruikbare onboarding-, communicatie-, proposal-, meeting-, file-management- en templatebronnen.

## SYSTEEMGRENZEN

| Systeem | Rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks, templates en as-built systeemdocumentatie |
| Google Drive | Live clientmappen, getekende documenten, deliverables, finance, legal, content en archieven |
| ClickUp | Uitvoering, Pipeline, taken, owners, deadlines en taakgeschiedenis |
| Gmail | Communicatietemplates, correspondentie en bewijs |
| Moneybird | Financiële waarheid |
| Make | Automatiseringslaag tussen systemen |
| ChatGPT / AI Agents | Analyse, voorbereiding, controle en concept-output |

## GOEDGEKEURDE DOCS-STRUCTUUR

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

## NIET-ONDERHANDELBARE REGELS

- Geen getekende contracten in GitHub.
- Geen vertrouwelijke clientbestanden in GitHub.
- Geen live deliverables in GitHub.
- Geen dubbele template-locaties.
- Geen final_final naamgeving.
- Geen Drive-dumps in GitHub.
- Wijzigingen in processen verlopen via commit en review.
- Google Drive bewaart bestanden; GitHub bewaart hoe het systeem werkt.
- ClickUp bewaart uitvoering; Gmail bewaart communicatie; Moneybird bewaart financiële waarheid.

## GOOGLE DRIVE

De productie-Drive staat onder:

OS_CUSTOMMADE

De actuele Drive-structuur staat in:
docs/00_GOVERNANCE/DRIVE_STRUCTURE.md

De daadwerkelijke inrichting staat in:
docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md

## HOE DIT OS WORDT BIJGEWERKT

1. Maak een branch.
2. Werk de relevante Governance, Workflow, SOP, Playbook, template-documentatie of systeemdocumentatie bij.
3. Controleer toolgrenzen.
4. Commit met een beschrijvend bericht.
5. Merge pas na review door de process owner.

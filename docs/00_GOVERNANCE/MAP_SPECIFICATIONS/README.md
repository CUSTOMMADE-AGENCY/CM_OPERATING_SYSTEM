# Map Specifications

## Doel

Deze directory bevat de operationele Map Specifications voor de goedgekeurde hoofdmappen onder `OS_CUSTOMMADE`. Elke specificatie beschrijft per Drive-map welke documenttypen, regels, owners, templates, workflows, approvalniveaus en AI-instructies gelden.

## Scope

De scope is beperkt tot mapinhoud en operationele governance per hoofdfolder. Map Specifications beschrijven niet hoe Google Drive technisch werkt en vervangen geen Folder Standards, templates, workflows, SOPs of Playbooks.

## Relatie met `MAP_SPECIFICATION_STANDARD.md`

Alle Map Specifications volgen `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md`. Die standaard bepaalt de verplichte hoofdstukken, metadata en minimale governancevelden voor iedere map-specificatie.

## Governance-ladder

```text
Drive Structure
↓
Folder Standards
↓
Map Specifications
↓
Templates
↓
Workflow
↓
SOP
↓
Playbook
↓
Agent Passport
```

## Hoofdregel

Folder Standards bepalen of een map bestaat en waar deze staat. Map Specifications bepalen welke inhoud in die map thuishoort. Bij conflict of inhoudelijke twijfel escaleert de Owner Agent naar het geldende approval level.

## Gap report

Openstaande of gecontroleerde afwijkingen worden bijgehouden in `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md`.

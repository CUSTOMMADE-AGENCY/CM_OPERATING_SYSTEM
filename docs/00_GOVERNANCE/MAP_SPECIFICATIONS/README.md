# Map Specifications

## Doel

Deze directory bevat de operationele Map Specifications voor de goedgekeurde hoofdmappen en dossiermappen onder `OS_CUSTOMMADE`. Elke specificatie beschrijft per Drive-map welke documenttypen, regels, owners, templates, workflows, approvalniveaus en AI-instructies gelden.

## Indeling

| Structuurniveau | Inhoud |
|---|---|
| [`ROOTS/`](ROOTS/README.md) | Specificaties voor hoofdmappen direct onder `OS_CUSTOMMADE`. |
| [`ARTIST_FOLDER/`](ARTIST_FOLDER/README.md) | Specificaties voor submappen van een artistdossier. |
| [`CLIENT_FOLDER/`](CLIENT_FOLDER/README.md) | Navigatie voor client-submapspecificaties. |
| [`DEAL_FOLDER/`](DEAL_FOLDER/README.md) | Navigatie voor deal-submapspecificaties. |
| [`LEGAL_FOLDER/`](LEGAL_FOLDER/README.md) | Navigatie voor legal-submapspecificaties. |

## Scope

De scope is beperkt tot mapinhoud en operationele governance per hoofdfolder en dossiermap. Map Specifications beschrijven niet hoe Google Drive technisch werkt en vervangen geen Folder Standards, templates, workflows, SOPs of Playbooks.

## Relatie met `MAP_SPECIFICATION_STANDARD.md`

Alle Map Specifications volgen [`docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md`](../STANDARDS/MAP_SPECIFICATION_STANDARD.md). Die standaard bepaalt de verplichte hoofdstukken, metadata en minimale governancevelden voor iedere map-specificatie.

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

Openstaande of gecontroleerde afwijkingen worden bijgehouden in [`MAP_SPECIFICATION_GAP_REPORT.md`](MAP_SPECIFICATION_GAP_REPORT.md).

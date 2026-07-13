# Custommade Agency Operating System

Deze repository is de GitHub source of truth voor de Governance, Workflows, SOPs, Playbooks, Automations, Agents, Knowledge Base en systeemdocumentatie van Custommade Agency Int. B.V.

## PRODUCTIESTATUS

**CM Operating System — Recovery & Alignment**

De repository wordt opnieuw uitgelijnd op de actuele CM-bedrijfsstructuur. Templates blijven tijdens deze recovery ongewijzigd en worden pas in een aparte reviewfase beoordeeld.

## STARTDOCUMENTEN

Lees in deze volgorde:

1. `docs/00_GOVERNANCE/CM_OPERATING_MODEL.md`
2. `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
5. `docs/05_OPERATIONS/README.md`

## SYSTEEMGRENZEN

| Systeem | Rol |
|---|---|
| GitHub | Governance, Workflows, SOPs, Playbooks, Automations, Agents, Knowledge Base en systeemdocumentatie |
| Google Drive | Live clientmappen, getekende documenten, deliverables, finance, legal, marketing, content en archieven |
| ClickUp | Uitvoering, Pipeline, taken, owners, deadlines en taakgeschiedenis |
| Gmail | Communicatietemplates, correspondentie en bewijs |
| Moneybird | Financiële waarheid |
| Make | Automatiseringslaag tussen systemen |
| ChatGPT / AI Agents | Analyse, voorbereiding, controle en concept-output binnen goedgekeurde scope |

## GOEDGEKEURDE BEDRIJFSSTRUCTUUR

De actuele CM-structuur is leidend:

```text
00_ADMIN
01_MASTER_BOUTIQUE
02_ARTIST_MANAGEMENT
03_CLIENTS
04_DEALS
05_OPERATIONS
06_FINANCE
07_LEGAL
08_MARKETING
09_CONTENT
99_ARCHIVE
```

## GOEDGEKEURDE DOCS-STRUCTUUR

GitHub documenteert dezelfde operationele domeinen, zonder live clientbestanden of archiefdump:

```text
docs/
├── 00_GOVERNANCE
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

`99_ARCHIVE` wordt niet als actief GitHub-domein gebruikt. GitHub version control vervangt operationele archivering van systeemdocumentatie.

## 05_OPERATIONS

`docs/05_OPERATIONS/` bevat de bedrijfsbrede uitvoeringslaag:

- `WORKFLOWS` — ketens van trigger tot afgeronde output.
- `SOPS` — stap-voor-stap werkwijzen voor terugkerende taken.
- `PLAYBOOKS` — beslisregels, scenario's en tactische aanpak.
- `AUTOMATIONS` — technische automatiseringen, triggers, logging en failure handling.
- `AGENTS` — agentrollen, scope, bevoegdheden, toolgrenzen en escalatieregels.
- `KNOWLEDGE_BASE` — vakinhoud, referentiekennis en operating context.

Agents staan niet onder `SOPS`. Agents gebruiken Workflows, voeren taken uit volgens SOPs, gebruiken Playbooks voor uitzonderingen, raadplegen de Knowledge Base en kunnen door Automations worden ondersteund.

## TEMPLATES

Tijdens de huidige recovery blijven bestaande templatebestanden en templatepaden ongewijzigd. Templateconsolidatie, hernoeming en inhoudelijke review worden pas uitgevoerd na afronding van de repositorystructuur en Governance-correcties.

De voorgenomen naamcorrectie wordt apart beoordeeld:

```text
CM_EXECUTION_TEMPLATE
→ CM_STARTHERE_ARTIST_TEMPLATE
```

## NIET-ONDERHANDELBARE REGELS

- Geen getekende contracten in GitHub.
- Geen vertrouwelijke clientbestanden in GitHub.
- Geen live deliverables in GitHub.
- Geen dubbele procesdocumentatie.
- Geen `final_final`-naamgeving.
- Geen Drive-dumps in GitHub.
- Interne documentatie wordt in professioneel Nederlands geschreven.
- Wijzigingen verlopen via branch, commit, review en Pull Request.
- Google Drive bewaart operationele bestanden; GitHub bewaart hoe het systeem werkt.
- ClickUp bewaart uitvoering; Gmail bewaart communicatie; Moneybird bewaart financiële waarheid.

## HOE DIT OS WORDT BIJGEWERKT

1. Maak een branch.
2. Controleer eerst `DECISION_LOG.md` en de actuele as-built.
3. Werk alle geraakte Governance, Workflow, SOP, Playbook, Automation, Agent- en systeemdocumentatie samen bij.
4. Controleer systeemgrenzen en links.
5. Commit met een beschrijvend bericht.
6. Open een Pull Request.
7. Merge pas na review door Sophia als process owner.

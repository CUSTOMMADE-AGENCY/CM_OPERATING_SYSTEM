# CM Change Impact Matrix

## Doel

Bepalen welke documenten en systemen meegecontroleerd moeten worden wanneer een kernonderdeel verandert.

| Wijziging | Verplicht mee controleren |
|---|---|
| Repositorystructuur | README, AS_BUILT, Governance Matrix, Operations Index, links en scripts |
| Google Drive-structuur | DRIVE_STRUCTURE, AS_BUILT, DRIVE_MAPPING, Folder Standards, Map Specifications en Apps Scripts |
| Workflow | relevante SOPs, Playbooks, Agents, Automations, ClickUp en AS_BUILT |
| SOP | bovenliggende Workflow, betrokken Agent, Automation en kwaliteitschecks |
| Playbook | relevante Workflow, SOPs, Agent en Knowledge Base |
| Agent | Agent Register, gekoppelde Workflows, SOPs, Playbooks, Automations, permissions en escalation |
| Automation | Automation Register, eigenaar, fallback, logging, testplan en betrokken SOP |
| Knowledge Base | gekoppelde Playbooks, SOPs en bronverwijzingen |
| Template | Template Register, gebruiksinstructie, Deployment Engine en betrokken Workflow |
| Systeemrol | CM_SOURCE_OF_TRUTH, README, AS_BUILT en Governance Rules |

## Regel

Een wijziging is pas klaar wanneer alle verplichte impactcontroles zijn uitgevoerd en vastgelegd in de Pull Request.

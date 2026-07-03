# CM Control Audit Standard

## Doel

Dit document legt de standaard vast voor aanvullende CM Control-audits. De standaard zorgt dat governance, repositorykwaliteit, agentwerking, architectuurconsistentie en documentatiehygiëne periodiek en aantoonbaar worden gecontroleerd.

## Reikwijdte

De CM Control Audit Standard geldt voor alle governancewijzigingen, repository-cleanups, agentupdates, architectuuraanpassingen en documentatie-updates binnen het CM Operating System.

## Auditritme

| Moment | Verplichte auditactie |
| --- | --- |
| Bij elke governancewijziging | Voer de relevante Governance Audit en Documentation Audit uit. |
| Bij elke repository-cleanup | Voer de Repository Audit en Documentation Audit uit. |
| Bij elke agentwijziging | Voer de Agent Audit uit. |
| Bij elke architectuur- of automatiseringswijziging | Voer de Architecture Audit uit. |
| Voor elke release of baseline-lock | Voer alle auditcategorieën uit en leg uitzonderingen expliciet vast. |

## Auditcategorieën

### Governance Audit

| Audit | Controle |
| --- | --- |
| Decision Audit | Controleer of belangrijke keuzes in de Decision Log of een ander geldig governancebesluit zijn vastgelegd. |
| ADR Audit | Controleer of structurele architectuur- of systeemkeuzes een actuele ADR hebben wanneer ze blijvende impact hebben. |
| Release Audit | Controleer of release-, baseline- en lockdocumenten overeenkomen met de actuele repository- en governance-status. |

### Repository Audit

| Audit | Controle |
| --- | --- |
| Orphan Files | Controleer of losse bestanden een duidelijke plek, eigenaar en doel hebben binnen de goedgekeurde structuur. |
| Duplicate Documents | Controleer of documenten geen parallelle bron van waarheid vormen naast een goedgekeurde standaard of register. |
| Dead Links | Controleer of interne en externe links nog bereikbaar en relevant zijn. |
| Broken References | Controleer of verwijzingen naar bestanden, folders, agents, systemen en standaarden bestaan en actueel zijn. |

### Agent Audit

| Audit | Controle |
| --- | --- |
| Agent Synchronization | Controleer of agentdefinities, playbooks en systeemdocumentatie dezelfde verantwoordelijkheden en grenzen beschrijven. |
| Ownership | Controleer of elk agentdomein een duidelijke owner, escalatieroute en system of record heeft. |
| Missing Responsibilities | Controleer of kritieke taken niet tussen agents, owners of systemen vallen. |

### Architecture Audit

| Audit | Controle |
| --- | --- |
| Source of Truth | Controleer of per domein duidelijk is welk systeem of document leidend is. |
| Folder Consistency | Controleer of GitHub-, Drive- en documentatiefolders dezelfde goedgekeurde structuur en naamgeving volgen. |
| CI Consistency | Controleer of CI-checks aansluiten op de actuele repositoryregels en geen verouderde paden of aannames gebruiken. |
| Automation Consistency | Controleer of scripts, automations en templates dezelfde governance- en folderstandaarden volgen. |

### Documentation Audit

| Audit | Controle |
| --- | --- |
| Version Drift | Controleer of documenten geen oudere standaarden, oude folderstructuren of achterhaalde besluitvorming beschrijven. |
| Missing Metadata | Controleer of verplichte metadata, statusinformatie of bronverwijzingen aanwezig zijn waar vereist. |
| Missing Owners | Controleer of documenten en processen een duidelijke owner hebben wanneer ze operationeel gebruikt worden. |
| Missing Review Dates | Controleer of reviewdata of reviewritmes aanwezig zijn voor standaarden, SOPs, playbooks en registers. |

## Vastlegging

Elke uitgevoerde audit wordt vastgelegd met minimaal:

1. Datum.
2. Auditor of verantwoordelijke agent.
3. Scope.
4. Uitgevoerde auditcategorieën.
5. Bevindingen.
6. Besluiten of remediation-acties.
7. Openstaande risico's.

## Escalatie

Escalatie is verplicht wanneer een audit aantoont dat:

- er meerdere bronnen van waarheid bestaan;
- governancebesluiten ontbreken of conflicteren;
- agentverantwoordelijkheden onduidelijk zijn;
- automation of CI tegen een verouderde structuur werkt;
- documenten operationeel gebruikt worden zonder owner, metadata of reviewritme.

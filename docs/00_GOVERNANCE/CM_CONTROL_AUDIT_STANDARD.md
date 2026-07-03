# CM Control Audit Standard

## Doel

Dit document legt de verplichte auditstandaard vast voor CM Control. De standaard zorgt dat governance, repositorykwaliteit, agentwerking, architectuurconsistentie, documentatiehygiëne, automation, CI en bestuurlijke risico-inschatting periodiek en aantoonbaar worden gecontroleerd.

## Reikwijdte

De CM Control Audit Standard geldt voor iedere repository review en voor alle governancewijzigingen, repository-cleanups, agentupdates, architectuuraanpassingen, automation-wijzigingen, CI-wijzigingen en documentatie-updates binnen het CM Operating System.

## Verplichte minimale repository review

Iedere repository review bevat minimaal alle onderstaande auditonderdelen. Onderdelen mogen niet worden overgeslagen; wanneer een onderdeel niet van toepassing lijkt, wordt dit expliciet gemotiveerd in de auditvastlegging.

| Auditonderdeel | Minimale controle |
| --- | --- |
| Decision Audit | Controleer of belangrijke keuzes in de Decision Log of een ander geldig governancebesluit zijn vastgelegd. |
| Locked Decisions Audit | Controleer of locked decisions bestaan, ongewijzigd zijn waar ze locked horen te zijn en alleen via het goedgekeurde unlock- of wijzigingsproces zijn aangepast. |
| ADR Audit | Controleer of structurele architectuur- of systeemkeuzes een actuele ADR hebben wanneer ze blijvende impact hebben. |
| Release Audit | Controleer of release-, baseline- en lockdocumenten overeenkomen met de actuele repository- en governance-status. |
| Agent Audit | Controleer of agentdefinities, playbooks en systeemdocumentatie dezelfde verantwoordelijkheden en grenzen beschrijven. |
| Agent Certification Audit | Controleer of agents de vereiste certificering, versie, status en goedkeuring hebben voordat ze operationeel worden gebruikt. |
| Responsibility Matrix Audit | Controleer of verantwoordelijkheden, owners, escalation paths en beslissingsrechten volledig en actueel in de responsibility matrix zijn vastgelegd. |
| Architecture Audit | Controleer of architectuurdocumentatie, ADR's, folderstructuren, systeemgrenzen en integratiepunten consistent zijn. |
| Documentation Audit | Controleer of documentatie actueel, compleet, herleidbaar en conform de geldende templates en metadata-eisen is. |
| Source of Truth Audit | Controleer of per domein duidelijk is welk systeem of document leidend is en dat er geen conflicterende bronnen van waarheid bestaan. |
| Repository Health | Controleer de algemene repositorykwaliteit, structuur, naamgeving, status van kernbestanden en naleving van repositoryregels. |
| Automation Health | Controleer of scripts, automations en templates dezelfde governance- en folderstandaarden volgen en operationeel onderhoudbaar zijn. |
| CI Health | Controleer of CI-checks aansluiten op de actuele repositoryregels en geen verouderde paden of aannames gebruiken. |
| Broken References | Controleer of verwijzingen naar bestanden, folders, agents, systemen en standaarden bestaan en actueel zijn. |
| Broken Links | Controleer of interne en externe links nog bereikbaar en relevant zijn. |
| Orphan Files | Controleer of losse bestanden een duidelijke plek, eigenaar en doel hebben binnen de goedgekeurde structuur. |
| Duplicate Documents | Controleer of documenten geen parallelle bron van waarheid vormen naast een goedgekeurde standaard of register. |
| Duplicate SOP’s | Controleer of SOP's niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |
| Duplicate Playbooks | Controleer of playbooks niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |
| Duplicate Templates | Controleer of templates niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |
| Missing Owners | Controleer of documenten, processen, agents, automations en besluiten een duidelijke owner hebben wanneer ze operationeel gebruikt worden. |
| Missing Review Dates | Controleer of reviewdata of reviewritmes aanwezig zijn voor standaarden, SOP's, playbooks, templates, registers en operationele documenten. |
| Version Drift | Controleer of documenten geen oudere standaarden, oude folderstructuren, verouderde agentdefinities of achterhaalde besluitvorming beschrijven. |
| Executive Risk Score | Bepaal een bestuurlijke risicoscore op basis van governance-impact, operationele impact, compliance-impact en herstelurgentie. |
| Board Recommendation | Formuleer een expliciete aanbeveling aan het bestuur: approve, approve with remediation, defer of reject. |

## Auditritme

| Moment | Verplichte auditactie |
| --- | --- |
| Bij iedere repository review | Voer alle onderdelen uit de verplichte minimale repository review uit. |
| Bij elke governancewijziging | Voer minimaal de Decision Audit, Locked Decisions Audit, ADR Audit, Documentation Audit, Source of Truth Audit en Executive Risk Score uit. |
| Bij elke repository-cleanup | Voer minimaal Repository Health, Broken References, Broken Links, Orphan Files, Duplicate Documents, Duplicate SOP's, Duplicate Playbooks, Duplicate Templates en Documentation Audit uit. |
| Bij elke agentwijziging | Voer minimaal de Agent Audit, Agent Certification Audit, Responsibility Matrix Audit, Missing Owners en Documentation Audit uit. |
| Bij elke architectuur- of automatiseringswijziging | Voer minimaal de Architecture Audit, Source of Truth Audit, Automation Health en CI Health uit. |
| Voor elke release of baseline-lock | Voer alle auditonderdelen uit en leg uitzonderingen expliciet vast. |

## Auditcategorieën

### Governance Audit

| Audit | Controle |
| --- | --- |
| Decision Audit | Controleer of belangrijke keuzes in de Decision Log of een ander geldig governancebesluit zijn vastgelegd. |
| Locked Decisions Audit | Controleer of locked decisions bestaan, ongewijzigd zijn waar ze locked horen te zijn en alleen via het goedgekeurde unlock- of wijzigingsproces zijn aangepast. |
| ADR Audit | Controleer of structurele architectuur- of systeemkeuzes een actuele ADR hebben wanneer ze blijvende impact hebben. |
| Release Audit | Controleer of release-, baseline- en lockdocumenten overeenkomen met de actuele repository- en governance-status. |
| Executive Risk Score | Bepaal een bestuurlijke risicoscore op basis van governance-impact, operationele impact, compliance-impact en herstelurgentie. |
| Board Recommendation | Formuleer een expliciete aanbeveling aan het bestuur: approve, approve with remediation, defer of reject. |

### Repository Audit

| Audit | Controle |
| --- | --- |
| Repository Health | Controleer de algemene repositorykwaliteit, structuur, naamgeving, status van kernbestanden en naleving van repositoryregels. |
| Broken References | Controleer of verwijzingen naar bestanden, folders, agents, systemen en standaarden bestaan en actueel zijn. |
| Broken Links | Controleer of interne en externe links nog bereikbaar en relevant zijn. |
| Orphan Files | Controleer of losse bestanden een duidelijke plek, eigenaar en doel hebben binnen de goedgekeurde structuur. |
| Duplicate Documents | Controleer of documenten geen parallelle bron van waarheid vormen naast een goedgekeurde standaard of register. |
| Duplicate SOP's | Controleer of SOP's niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |
| Duplicate Playbooks | Controleer of playbooks niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |
| Duplicate Templates | Controleer of templates niet dubbel bestaan, elkaar niet tegenspreken en één aangewezen bron van waarheid hebben. |

### Agent Audit

| Audit | Controle |
| --- | --- |
| Agent Audit | Controleer of agentdefinities, playbooks en systeemdocumentatie dezelfde verantwoordelijkheden en grenzen beschrijven. |
| Agent Certification Audit | Controleer of agents de vereiste certificering, versie, status en goedkeuring hebben voordat ze operationeel worden gebruikt. |
| Responsibility Matrix Audit | Controleer of verantwoordelijkheden, owners, escalation paths en beslissingsrechten volledig en actueel in de responsibility matrix zijn vastgelegd. |
| Missing Owners | Controleer of elk agentdomein een duidelijke owner, escalatieroute en system of record heeft. |

### Architecture Audit

| Audit | Controle |
| --- | --- |
| Architecture Audit | Controleer of architectuurdocumentatie, ADR's, folderstructuren, systeemgrenzen en integratiepunten consistent zijn. |
| Source of Truth Audit | Controleer of per domein duidelijk is welk systeem of document leidend is. |
| Automation Health | Controleer of scripts, automations en templates dezelfde governance- en folderstandaarden volgen en operationeel onderhoudbaar zijn. |
| CI Health | Controleer of CI-checks aansluiten op de actuele repositoryregels en geen verouderde paden of aannames gebruiken. |

### Documentation Audit

| Audit | Controle |
| --- | --- |
| Documentation Audit | Controleer of documentatie actueel, compleet, herleidbaar en conform de geldende templates en metadata-eisen is. |
| Version Drift | Controleer of documenten geen oudere standaarden, oude folderstructuren, verouderde agentdefinities of achterhaalde besluitvorming beschrijven. |
| Missing Owners | Controleer of documenten en processen een duidelijke owner hebben wanneer ze operationeel gebruikt worden. |
| Missing Review Dates | Controleer of reviewdata of reviewritmes aanwezig zijn voor standaarden, SOP's, playbooks, templates, registers en operationele documenten. |

## Vastlegging

Elke uitgevoerde audit wordt vastgelegd met minimaal:

1. Datum.
2. Auditor of verantwoordelijke agent.
3. Scope.
4. Uitgevoerde auditonderdelen.
5. Bevindingen per verplicht auditonderdeel.
6. Besluiten of remediation-acties.
7. Openstaande risico's.
8. Executive Risk Score.
9. Board Recommendation.

## Escalatie

Escalatie is verplicht wanneer een audit aantoont dat:

- er meerdere bronnen van waarheid bestaan;
- governancebesluiten ontbreken, conflicteren of locked decisions zonder geldig proces zijn gewijzigd;
- agentverantwoordelijkheden, certificering of ownership onduidelijk zijn;
- automation of CI tegen een verouderde structuur werkt;
- documenten operationeel gebruikt worden zonder owner, metadata of reviewritme;
- duplicate SOP's, playbooks, templates of documenten operationele verwarring veroorzaken;
- de Executive Risk Score boven de door het bestuur geaccepteerde risicodrempel ligt;
- de Board Recommendation defer of reject is.

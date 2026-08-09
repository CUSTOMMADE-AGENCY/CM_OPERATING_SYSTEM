> **STATUS: `SUPERSEDED`** — Vervangen door `99_TEMPLATE_GOVERNANCE/TEMPLATE_ARCHITECTURE_STANDARD_V2.md` (15-sectie machine-readable standaard). Dit V1-document (14 onderdelen) blijft bewaard voor historie en wordt niet meer gebruikt als leidende standaard.

# TEMPLATE_ARCHITECTUURSTANDAARD

## Doel

Deze standaard definieert de verplichte opbouw, het gebruik, de AI-instructies en de koppeling van CM-templates aan Workflows, SOPs en Playbooks.

Deze standaard vult de bestaande template-governance aan en vervangt geen agent-governance, agent-architectuur of agent-certificering.

## Relatie met bestaande governance

De volgende governance blijft leidend:

- `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` blijft leidend voor vorm, visuele inrichting, scanbaarheid, compactheid en designkeuzes van templates.
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md` blijft leidend voor algemene governance, eigenaarschap, goedkeuring en escalatie.
- `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md` blijft leidend voor documentkwaliteit, consistentie en repository-conventies.

Deze `TEMPLATE_ARCHITECTUURSTANDAARD.md` is leidend voor:

- de verplichte inhoudelijke onderdelen van elke template;
- de operationele opbouw van templates;
- het gebruik van templates door mensen, agents en automations;
- AI-instructies binnen templates;
- koppeling aan Workflows, SOPs en Playbooks;
- overdracht, opslag, kwaliteitscontrole en wijzigingslogica.

Bij conflict geldt: algemene governance eerst, designstandaard voor vorm en deze architectuurstandaard voor template-opbouw en operationeel gebruik.

## Scope

Deze standaard geldt voor alle templates binnen `docs/03_SHARED_SERVICES/TEMPLATES/` en voor operationele kopieën die op basis van deze templates worden gebruikt.

Deze standaard maakt geen nieuwe agents aan en wijzigt geen bestaande agent-governance. Owner Agents en Support Agents verwijzen uitsluitend naar bestaande verantwoordelijkheden of bestaande agentrollen.

## Verplichte onderdelen per template

Elke template moet minimaal de onderstaande onderdelen bevatten of expliciet als `TBD` markeren wanneer de informatie nog niet beschikbaar is.

| Onderdeel | Verplichting | Doel |
| --- | --- | --- |
| Documentgegevens | Verplicht | Template naam, versie, status, owner, reviewdatum en bronlocatie vastleggen. |
| Doel | Verplicht | Uitleggen waarvoor de template bedoeld is. |
| Wanneer gebruiken | Verplicht | Concrete triggers en situaties beschrijven waarin de template gebruikt moet worden. |
| Wanneer niet gebruiken | Verplicht | Afbakenen wanneer de template niet passend is. |
| Input | Verplicht | Benoemen welke informatie, documenten of beslissingen nodig zijn vóór gebruik. |
| Werkwijze | Verplicht | Stap-voor-stap beschrijven hoe de template wordt ingevuld of toegepast. |
| Beslismomenten | Verplicht | Vastleggen waar keuzes, approvals of escalaties nodig zijn. |
| Output | Verplicht | Beschrijven welk resultaat de template oplevert. |
| Kwaliteitscontrole | Verplicht | Checklist of criteria voor controle vóór overdracht of publicatie. |
| Goedkeuring | Verplicht | Benoemen wie moet goedkeuren en wanneer. |
| Overdracht | Verplicht | Beschrijven aan wie of welk systeem de output wordt overgedragen. |
| Opslag | Verplicht | Vastleggen waar bron, werkbare kopie en finale output worden opgeslagen. |
| AI-instructies | Verplicht | Duidelijke instructies voor agents en automations. |
| Wijzigingslog | Verplicht | Datum, wijziging, eigenaar en reden van wijziging vastleggen. |

## Documentgegevens

Elke template start met documentgegevens in tabelvorm.

Minimale velden:

| Veld | Waarde |
| --- | --- |
| Template naam | TBD |
| Domein | TBD |
| Versie | TBD |
| Status | DRAFT / ACTIVE / NEEDS_REVIEW / DEPRECATED |
| Owner Agent | TBD |
| Support Agents | TBD |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | TBD |
| Gekoppelde workflow | TBD |
| Laatste review | TBD |
| Volgende review | TBD |

## AI-instructies

Elke template bevat een aparte sectie `AI-instructies` met minimaal deze regels:

- Agents gebruiken eerst de bestaande template-index voordat zij nieuwe outputs of formats voorstellen.
- Agents mogen ontbrekende informatie nooit verzinnen.
- Agents markeren onbekende, ontbrekende of onzekere velden altijd als `TBD`.
- Agents benoemen expliciet welke input ontbreekt wanneer een template niet volledig kan worden ingevuld.
- Agents gebruiken geen clientdata, vertrouwelijke informatie of getekende documenten in template-specificaties.
- Agents maken geen parallelle templates aan wanneer een bestaande template passend is.
- Agents koppelen afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Koppeling aan Workflows, SOPs en Playbooks

Elke template moet verwijzen naar minimaal één operationele context:

- Workflow: proces waarin de template wordt gebruikt.
- SOP: werkinstructie die beschrijft hoe het proces wordt uitgevoerd.
- Playbook: agent- of rolcontext waarin beslissingen en overdracht worden gestuurd.

Wanneer een koppeling nog niet bekend is, wordt deze niet ingevuld met een aanname. De waarde wordt dan `TBD` en wordt opgenomen in de gap-log of reviewcyclus.

## Gebruik van System of Record

GitHub is het System of Record voor template-specificaties, governance en wijzigingen.

Drive bevat uitsluitend werkbare kopieën, ingevulde operationele versies of exports. ClickUp bevat uitvoering, taken, statussen en referenties waar dat operationeel nodig is.

## Goedkeuring en review

Een template mag alleen als `ACTIVE` worden gebruikt wanneer:

1. de verplichte onderdelen aanwezig zijn;
2. de vorm voldoet aan `TEMPLATE_DESIGN_STANDARD.md`;
3. de gekoppelde workflow of SOP duidelijk is;
4. de owner en support agents zijn vastgelegd;
5. ontbrekende informatie als `TBD` is gemarkeerd;
6. geen vertrouwelijke of clientspecifieke data in de specificatie staat.

## Wijzigingslog

Elke template bevat een wijzigingslog met minimaal:

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| TBD | TBD | TBD | TBD |

## Status

ACTIVE

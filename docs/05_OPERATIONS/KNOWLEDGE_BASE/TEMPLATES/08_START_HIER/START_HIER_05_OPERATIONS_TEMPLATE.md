# START_HIER_05_OPERATIONS_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md` en is inhoudelijk afgestemd op `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/05_OPERATIONS.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | START_HIER_05_OPERATIONS_TEMPLATE |
| Domein | Start Hier |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM CONTROL AGENT |
| Support Agents | CM FLOW AGENT, CM OPS AGENT, CM VAULT AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | `OS_CUSTOMMADE/05_OPERATIONS/00_START_HIER` |
| Gekoppelde workflow | TBD |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Startdocument voor de Drive-map `05_OPERATIONS/00_START_HIER`. Het geeft het interne team en de agents direct de operationele instructies, het overzicht en de referenties voor de operationele werklaag (HR, training, tools, processen).

## Wanneer gebruiken

Bij inrichting van de `05_OPERATIONS`-map en als levend startpunt bij het navigeren of bijwerken van operationele documentatie in Drive.

## Niet gebruiken voor

- Governance, SOPs, workflows of playbooks als primaire bron (→ GitHub is source of truth).
- Client- of artistspecifieke dossiers (→ `03_CLIENTS` / `02_ARTIST_MANAGEMENT`).
- Een alternatief format wanneer deze START_HIER-template past.

## Owner Agent

CM CONTROL AGENT — bewaakt de operationele structuur, governance-referenties en consistentie van `05_OPERATIONS`.

## Support Agents

| Agent | Rol in deze map |
| --- | --- |
| CM FLOW AGENT | Procesautomatisering en workflowkoppeling. |
| CM OPS AGENT | Operationele uitvoering en teamproces. |
| CM VAULT AGENT | Archivering en documentbeheer. |

## System of Record

GitHub = template-governance, governance, SOPs en workflows.
Drive = werkbare kopie in `05_OPERATIONS/00_START_HIER`.

## Opslaglocatie

GitHub specificatie:
`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/START_HIER_05_OPERATIONS_TEMPLATE.md`

Drive werkbare kopie:
`OS_CUSTOMMADE/05_OPERATIONS/00_START_HIER/START_HIER_05_OPERATIONS.md`

## Gekoppelde workflow / SOP / Playbook

- Workflow: TBD
- SOP: TBD
- Playbook: TBD

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Mapoverzicht | Korte uitleg van de operationele werklaag | Ja | 05_OPERATIONS.md | Geen vertrouwelijke data |
| Instructies | Hoe agents en team de map gebruiken | Ja | CM CONTROL AGENT | Verwijs naar GitHub-governance |
| Referenties | Belangrijke gekoppelde documenten | Ja | Knowledge Base | Alleen referenties |

## START_HIER inhoud (in te vullen in Drive)

Vul in de Drive-kopie minimaal de volgende secties in:

1. **Doel van deze map** — De operationele werklaag van CM.
2. **Wat hoort hier wel / niet** — Toegestane documenttypen conform `05_OPERATIONS.md`; governance/SOPs/workflows blijven in GitHub.
3. **Submappen** — Zie de actuele structuur in `05_OPERATIONS.md` hoofdstuk 5 en `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`.
4. **Instructies** — Hoe de map te gebruiken en bij te werken.
5. **Source of Truth** — GitHub = governance; Drive = opslag; ClickUp = uitvoering.
6. **Approval en escalatie** — Escalatie naar CM CONTROL AGENT.

## Output

- Schone, kopieerbare START_HIER-specificatie zonder vertrouwelijke data.
- Operationele startkopie in `05_OPERATIONS/00_START_HIER`.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## AI-instructies

- Raadpleeg eerst de template-index voordat je een nieuw format voorstelt.
- Verzin nooit ontbrekende informatie; markeer onbekende velden als `TBD`.
- Benoem expliciet welke input ontbreekt wanneer de template niet volledig kan worden ingevuld.
- Gebruik geen clientdata, vertrouwelijke informatie of getekende documenten in de template-specificatie.
- Maak geen parallelle START_HIER-templates aan wanneer deze past.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Kwaliteitscheck

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen vertrouwelijke data in de specificatie.
- Duidelijke owner, source of truth en volgende stap.
- Submapverwijzing conform de leidende baseline.

## Status

ACTIVE

Toegestane statussen: ACTIVE, DRAFT, NEEDS_REVIEW, DEPRECATED.

## Reviewritme

- Laatste review: 2026-07-26
- Volgende review: 2026-10-26
- Ritme: elk kwartaal of eerder bij governancewijziging.

## Wijzigingslog

| Datum | Wijziging | Owner |
| --- | --- | --- |
| 2026-07-26 | Eerste START_HIER-template voor `05_OPERATIONS` toegevoegd aan de CM Template Library. | CM VAULT AGENT |

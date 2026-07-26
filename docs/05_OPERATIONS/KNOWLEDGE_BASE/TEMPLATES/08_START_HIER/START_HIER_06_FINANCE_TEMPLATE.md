# START_HIER_06_FINANCE_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md` en is inhoudelijk afgestemd op `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/06_FINANCE.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | START_HIER_06_FINANCE_TEMPLATE |
| Domein | Start Hier |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM MONEY AGENT |
| Support Agents | CM CONTROL AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | `OS_CUSTOMMADE/06_FINANCE/00_START_HIER` |
| Gekoppelde workflow | TBD |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Startdocument voor de Drive-map `06_FINANCE/00_START_HIER`. Het geeft direct de finance-instructies, het overzicht en de referenties voor de financiële werklaag. Moneybird blijft de financiële waarheid; `06_FINANCE` is een referentie- en werklaag.

## Wanneer gebruiken

Bij inrichting van de `06_FINANCE`-map en als levend startpunt bij het navigeren of bijwerken van finance-documentatie in Drive.

## Niet gebruiken voor

- Facturen, bonnen of kwitanties als primaire financiële waarheid (→ Moneybird).
- Client- of dealspecifieke financiële dossiers buiten de finance-scope.
- Een alternatief format wanneer deze START_HIER-template past.

## Owner Agent

CM MONEY AGENT — bewaakt de financiële structuur, referenties en consistentie van `06_FINANCE`.

## Support Agents

| Agent | Rol in deze map |
| --- | --- |
| CM CONTROL AGENT | Governance-controle en escalatie. |

## System of Record

GitHub = template-governance.
Moneybird = financiële waarheid.
Drive = werkbare kopie/referentie in `06_FINANCE/00_START_HIER`.

## Opslaglocatie

GitHub specificatie:
`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/START_HIER_06_FINANCE_TEMPLATE.md`

Drive werkbare kopie:
`OS_CUSTOMMADE/06_FINANCE/00_START_HIER/START_HIER_06_FINANCE.md`

## Gekoppelde workflow / SOP / Playbook

- Workflow: TBD
- SOP: TBD
- Playbook: TBD

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Mapoverzicht | Korte uitleg van de finance-werklaag | Ja | 06_FINANCE.md | Geen vertrouwelijke data |
| Instructies | Hoe finance-documenten worden beheerd | Ja | CM MONEY AGENT | Verwijs naar Moneybird als waarheid |
| Referenties | Belangrijke gekoppelde documenten | Ja | Knowledge Base | Alleen referenties |

## START_HIER inhoud (in te vullen in Drive)

Vul in de Drive-kopie minimaal de volgende secties in:

1. **Doel van deze map** — De financiële referentie- en werklaag van CM.
2. **Wat hoort hier wel / niet** — Toegestane documenttypen conform `06_FINANCE.md`; Moneybird blijft de financiële waarheid.
3. **Submappen** — Zie de actuele structuur in `06_FINANCE.md` hoofdstuk 5 en `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`.
4. **Instructies** — Hoe de map te gebruiken en bij te werken.
5. **Source of Truth** — Moneybird = financiële waarheid; GitHub = governance; Drive = opslag/referentie.
6. **Approval en escalatie** — Escalatie naar CM MONEY AGENT, daarna CM CONTROL AGENT.

## Output

- Schone, kopieerbare START_HIER-specificatie zonder vertrouwelijke financiële data.
- Operationele startkopie in `06_FINANCE/00_START_HIER`.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## AI-instructies

- Raadpleeg eerst de template-index voordat je een nieuw format voorstelt.
- Verzin nooit ontbrekende informatie; markeer onbekende velden als `TBD`.
- Benoem expliciet welke input ontbreekt wanneer de template niet volledig kan worden ingevuld.
- Gebruik geen clientdata, vertrouwelijke of financiële brondata in de template-specificatie.
- Maak geen parallelle START_HIER-templates aan wanneer deze past.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Kwaliteitscheck

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen vertrouwelijke of financiële brondata in de specificatie.
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
| 2026-07-26 | Eerste START_HIER-template voor `06_FINANCE` toegevoegd aan de CM Template Library. | CM VAULT AGENT |

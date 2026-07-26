# START_HIER_07_LEGAL_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md` en is inhoudelijk afgestemd op `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/07_LEGAL.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | START_HIER_07_LEGAL_TEMPLATE |
| Domein | Start Hier |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM LEGAL AGENT |
| Support Agents | CM CONTROL AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | `OS_CUSTOMMADE/07_LEGAL/00_START_HIER` |
| Gekoppelde workflow | TBD |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Startdocument voor de Drive-map `07_LEGAL/00_START_HIER`. Het geeft direct de juridische instructies, het overzicht en de legal governance-referentie voor contracten, approvals, rechten en bewijsstukken.

## Wanneer gebruiken

Bij inrichting van de `07_LEGAL`-map en als levend startpunt bij het navigeren of bijwerken van juridische documentatie in Drive.

## Niet gebruiken voor

- Ingevulde vertrouwelijke of getekende juridische documenten in de template-specificatie.
- Operationele dealdossiers (→ `04_DEALS`).
- Een alternatief format wanneer deze START_HIER-template past.

## Owner Agent

CM LEGAL AGENT — bewaakt de juridische structuur, contracten, approvals en het approval register.

## Support Agents

| Agent | Rol in deze map |
| --- | --- |
| CM CONTROL AGENT | Governance-controle en escalatie. |

## System of Record

GitHub = template-governance en legal governance.
Drive = werkbare kopie in `07_LEGAL/00_START_HIER`.

## Opslaglocatie

GitHub specificatie:
`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/START_HIER_07_LEGAL_TEMPLATE.md`

Drive werkbare kopie:
`OS_CUSTOMMADE/07_LEGAL/00_START_HIER/START_HIER_07_LEGAL.md`

## Gekoppelde workflow / SOP / Playbook

- Workflow: TBD
- SOP: TBD
- Playbook: TBD

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Mapoverzicht | Korte uitleg van de juridische werklaag | Ja | 07_LEGAL.md | Geen vertrouwelijke data |
| Instructies | Hoe juridische documenten worden beheerd | Ja | CM LEGAL AGENT | Verwijs naar approval register |
| Referenties | Belangrijke gekoppelde documenten | Ja | Knowledge Base | Alleen referenties |

## START_HIER inhoud (in te vullen in Drive)

Vul in de Drive-kopie minimaal de volgende secties in:

1. **Doel van deze map** — De juridische werklaag van CM.
2. **Wat hoort hier wel / niet** — Toegestane documenttypen conform `07_LEGAL.md`; operationele dealdossiers horen in `04_DEALS`.
3. **Submappen** — Zie de actuele structuur in `07_LEGAL.md` hoofdstuk 5 en `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`. Het approval register staat in `APPROVALS/CM_APPROVAL_REGISTER`.
4. **Instructies** — Hoe de map te gebruiken en bij te werken.
5. **Source of Truth** — GitHub = governance; Drive = opslag; het approval register in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` is de enige operationele approval-locatie.
6. **Approval en escalatie** — Escalatie naar CM LEGAL AGENT, daarna CM CONTROL AGENT.

## Output

- Schone, kopieerbare START_HIER-specificatie zonder vertrouwelijke juridische data.
- Operationele startkopie in `07_LEGAL/00_START_HIER`.
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
- Geen vertrouwelijke of juridische brondata in de specificatie.
- Duidelijke owner, source of truth en volgende stap.
- Submapverwijzing conform de leidende baseline (let op GAP-017: baseline en spec worden nog afgestemd).

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
| 2026-07-26 | Eerste START_HIER-template voor `07_LEGAL` toegevoegd aan de CM Template Library. | CM VAULT AGENT |

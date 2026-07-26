# START_HIER_09_CONTENT_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md` en is inhoudelijk afgestemd op `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/09_CONTENT.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | START_HIER_09_CONTENT_TEMPLATE |
| Domein | Start Hier |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM SOCIAL AGENT |
| Support Agents | CM VAULT AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | `OS_CUSTOMMADE/09_CONTENT/00_START_HIER` |
| Gekoppelde workflow | TBD |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Startdocument voor de Drive-map `09_CONTENT/00_START_HIER`. Het geeft direct de contentinstructies, het overzicht en de referenties voor CM's content: assets, socialmedia, formats en de contentkalender.

## Wanneer gebruiken

Bij inrichting van de `09_CONTENT`-map en als levend startpunt bij het navigeren of bijwerken van contentdocumentatie in Drive.

## Niet gebruiken voor

- Artist- of clientspecifieke content (→ `02_ARTIST_MANAGEMENT` / `03_CLIENTS`).
- CM's marketingplanning en campagnes (→ `08_MARKETING`).
- Een alternatief format wanneer deze START_HIER-template past.

## Owner Agent

CM SOCIAL AGENT — bewaakt de contentstructuur, assets en publicatiekalender van CM.

## Support Agents

| Agent | Rol in deze map |
| --- | --- |
| CM VAULT AGENT | Archivering en assetbeheer. |

## System of Record

GitHub = template-governance.
Drive = werkbare kopie in `09_CONTENT/00_START_HIER`.

## Opslaglocatie

GitHub specificatie:
`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/START_HIER_09_CONTENT_TEMPLATE.md`

Drive werkbare kopie:
`OS_CUSTOMMADE/09_CONTENT/00_START_HIER/START_HIER_09_CONTENT.md`

## Gekoppelde workflow / SOP / Playbook

- Workflow: TBD
- SOP: TBD
- Playbook: TBD

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Mapoverzicht | Korte uitleg van de contentwerklaag | Ja | 09_CONTENT.md | Geen vertrouwelijke data |
| Instructies | Hoe contentbestanden worden beheerd | Ja | CM SOCIAL AGENT | Verwijs naar contentkalender |
| Referenties | Belangrijke gekoppelde documenten | Ja | Knowledge Base | Alleen referenties |

## START_HIER inhoud (in te vullen in Drive)

Vul in de Drive-kopie minimaal de volgende secties in:

1. **Doel van deze map** — CM's eigen contentwerklaag.
2. **Wat hoort hier wel / niet** — Toegestane documenttypen conform `09_CONTENT.md`; artist-/clientcontent hoort elders.
3. **Submappen** — Zie de actuele structuur in `09_CONTENT.md` hoofdstuk 5 en `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`.
4. **Instructies** — Hoe de map te gebruiken en bij te werken.
5. **Source of Truth** — GitHub = governance; Drive = opslag; ClickUp = uitvoering.
6. **Approval en escalatie** — Escalatie naar CM SOCIAL AGENT, daarna CM CONTROL AGENT.

## Output

- Schone, kopieerbare START_HIER-specificatie zonder vertrouwelijke data.
- Operationele startkopie in `09_CONTENT/00_START_HIER`.
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
| 2026-07-26 | Eerste START_HIER-template voor `09_CONTENT` toegevoegd aan de CM Template Library. | CM VAULT AGENT |

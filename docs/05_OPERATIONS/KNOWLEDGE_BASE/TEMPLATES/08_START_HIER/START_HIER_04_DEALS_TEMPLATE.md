# START_HIER_04_DEALS_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md` en is inhoudelijk afgestemd op `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/04_DEALS.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | START_HIER_04_DEALS_TEMPLATE |
| Domein | Start Hier |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM LEGAL AGENT |
| Support Agents | CM PROSPECT AGENT, CM MONEY AGENT, CM VAULT AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER` |
| Gekoppelde workflow | TBD |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Startdocument voor een dealdossier onder `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER`. Het geeft iedereen die het dossier opent direct de status, de instructies, de openstaande document requests en de governance-context van de dealcase.

## Wanneer gebruiken

Bij het aanmaken van een nieuw dealdossier onder `04_DEALS`, en als levend statusdocument gedurende de looptijd van de deal.

## Niet gebruiken voor

- Ingevulde vertrouwelijke dealdata of getekende contracten in de template-specificatie.
- Algemene Master Boutique-kennis of methodieken (→ `01_MASTER_BOUTIQUE`).
- Een alternatief format wanneer deze START_HIER-template past.

## Owner Agent

CM LEGAL AGENT — bewaakt de dealstructuur, governance en approvals van het dossier.

## Support Agents

| Agent | Rol in deze map |
| --- | --- |
| CM PROSPECT AGENT | Buyer outreach, dealkwalificatie en pipeline-referenties. |
| CM MONEY AGENT | Waardering en financiële onderbouwing. |
| CM VAULT AGENT | Archivering en bewijsbeheer. |

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie in `04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER`.

## Opslaglocatie

GitHub specificatie:
`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/START_HIER_04_DEALS_TEMPLATE.md`

Drive werkbare kopie:
`OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/00_START_HIER/START_HIER_[DEAL_OR_ASSET_NAME].md`

## Gekoppelde workflow / SOP / Playbook

- Workflow: TBD
- SOP: TBD
- Playbook: TBD

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Dealnaam | Naam van de deal of asset | Ja | Dealintake | Geen vertrouwelijke data |
| Dealstatus | Fase van de deal | Ja | Pipeline/ClickUp | Statusveld |
| Document requests | Nog benodigde documenten | Ja | Legal/Prospect | Alleen referenties |
| Governance-notities | Approvals, restricties en escalaties | Ja | CM LEGAL AGENT | Verwijs naar approval register |

## START_HIER inhoud (in te vullen in Drive)

Vul in de Drive-kopie minimaal de volgende secties in:

1. **Doel van dit dossier** — Wat deze dealcase inhoudt en de scope.
2. **Wat hoort hier wel / niet** — Toegestane documenttypen (rechtenregister, contracten en bewijs, waardering en verkooppakket, outreach-referenties) en verboden documenten conform `04_DEALS.md`.
3. **Submappen** — Zie de actuele structuur in `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` (Deal folder rule) en `04_DEALS.md` hoofdstuk 5.
4. **Status en volgende stap** — Huidige fase en eerstvolgende actie.
5. **Document requests** — Openstaande benodigde documenten.
6. **Source of Truth** — GitHub = governance; Drive = opslag; ClickUp = uitvoering; Gmail = correspondentie.
7. **Approval en escalatie** — Approvalniveau per actie; escalatie naar CM LEGAL AGENT, daarna CM CONTROL AGENT.

## Output

- Schone, kopieerbare START_HIER-specificatie zonder vertrouwelijke dealdata.
- Operationele startkopie in de `00_START_HIER`-map van het dealdossier.
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
- Geen client-, deal- of vertrouwelijke data in de specificatie.
- Duidelijke owner, status, source of truth en volgende stap.
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
| 2026-07-26 | Eerste START_HIER-template voor `04_DEALS` toegevoegd aan de CM Template Library. | CM VAULT AGENT |

# REGISTER_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | REGISTER_TEMPLATE |
| Domein | Shared Services |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM OPS AGENT |
| Support Agents | CM CONTROL AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | Drive `[DOSSIER]/[DOMEINMAP]` |
| Gekoppelde workflow | Dossier hygiene workflow |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Generiek registeroverzicht voor een dossier-domeinmap (bijv. Releases, Booking, Social, Press/EPK, Archive): welke items bestaan, hun status en vindplaats. Vul `[DOMEIN]` in per gebruik.

## Wanneer gebruiken

- Als index/overzicht binnen een domeinmap van een dossier.
- Bij het bijhouden van items, status en locatie.

## Niet gebruiken voor

- Vertrouwelijke of ingevulde data in de template-specificatie.
- Getekende documenten of operationele exports.
- Een alternatief format wanneer deze template past.

## Input

- Domein en dossier.
- Items met status, eigenaar en locatie.

## Werkwijze

1. Vul het domein in (`[DOMEIN]`).
2. Registreer per item: naam, status, eigenaar, locatie, datum.
3. Houd het register actueel; verwijs superseded items naar het archief.

## Beslismomenten

- Onvolledige of onzekere velden markeren als `TBD`.
- Bij twijfel of afwijking escaleren naar de Owner Agent.

## Output

- Ingevuld, scanbaar document conform doel.
- Vastlegging in TEMPLATE_USAGE_REPORT bij gebruik.

## Kwaliteitscontrole

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen vertrouwelijke data in de specificatie.
- Owner, output en volgende stap duidelijk.

## Goedkeuring

Level 1 — CM OPS AGENT.

## Overdracht

Naar de betreffende Drive-map en, waar relevant, de gekoppelde ClickUp-taak.

## Opslag

GitHub specificatie: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/01_SHARED_SERVICES/REGISTER_TEMPLATE.md`.
Drive werkbare kopie: `[DOSSIER]/[DOMEINMAP]`.

## AI-instructies

- Gebruik eerst de template-index voordat een nieuw format wordt voorgesteld.
- Verzin nooit ontbrekende informatie; markeer als `TBD`.
- Gebruik geen clientdata of vertrouwelijke informatie in de specificatie.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Wijzigingslog

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| 2026-07-26 | Eerste template-specificatie aangemaakt (Sprint 6). | CM OPS AGENT | Gap uit TEMPLATE_PLACEMENT_MAP gedicht. |

# VERSION_LOG_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | VERSION_LOG_TEMPLATE |
| Domein | Shared Services / Governance |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM CONTROL AGENT |
| Support Agents | CM OPS AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | Drive `[DOSSIER]/[DOMEINMAP]` |
| Gekoppelde workflow | Dossier hygiene workflow |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Versielog voor een document of deliverable: welke versies bestaan, wat is gewijzigd en welke versie leidend is.

## Wanneer gebruiken

- Bij documenten of deliverables met meerdere versies.
- Naast register- en approval-vastlegging.

## Niet gebruiken voor

- Vertrouwelijke of ingevulde data in de template-specificatie.
- Getekende documenten of operationele exports.
- Een alternatief format wanneer deze template past.

## Input

- Documentnaam en locatie.
- Versienummer, datum, wijziging en auteur.

## Werkwijze

1. Voeg per versie een regel toe.
2. Markeer de leidende (actieve) versie.
3. Verwijs superseded versies naar het archief.

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

Level 1 — CM CONTROL AGENT.

## Overdracht

Naar de betreffende Drive-map en, waar relevant, de gekoppelde ClickUp-taak.

## Opslag

GitHub specificatie: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/01_SHARED_SERVICES/VERSION_LOG_TEMPLATE.md`.
Drive werkbare kopie: `[DOSSIER]/[DOMEINMAP]`.

## AI-instructies

- Gebruik eerst de template-index voordat een nieuw format wordt voorgesteld.
- Verzin nooit ontbrekende informatie; markeer als `TBD`.
- Gebruik geen clientdata of vertrouwelijke informatie in de specificatie.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Wijzigingslog

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| 2026-07-26 | Eerste template-specificatie aangemaakt (Sprint 6). | CM CONTROL AGENT | Gap uit TEMPLATE_PLACEMENT_MAP gedicht. |

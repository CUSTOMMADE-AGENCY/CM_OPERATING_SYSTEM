# AMENDMENT_LOG_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | AMENDMENT_LOG_TEMPLATE |
| Domein | Shared Services / Legal |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM LEGAL AGENT |
| Support Agents | CM CONTROL AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | Drive `[DOSSIER]/02_CONTRACT` |
| Gekoppelde workflow | Legal review flow |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Chronologisch logboek van wijzigingen op een overeenkomst (amendments).

## Wanneer gebruiken

- Bij elke aanpassing of aanvulling op een bestaand contract.

## Niet gebruiken voor

- Vertrouwelijke of ingevulde data in de template-specificatie.
- Getekende documenten of operationele exports.
- Een alternatief format wanneer deze template past.

## Input

- Contractreferentie.
- Wijzigingsdatum, aard van de wijziging en reden.
- Approver van de wijziging.

## Werkwijze

1. Voeg per amendment een regel toe.
2. Leg datum, wijziging, reden en approver vast.
3. Verwijs naar het bijbehorende Approval Evidence.

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

Level 3/4 — CM LEGAL AGENT; Level 4 naar Sophia.

## Overdracht

Naar de betreffende Drive-map en, waar relevant, de gekoppelde ClickUp-taak.

## Opslag

GitHub specificatie: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/01_SHARED_SERVICES/AMENDMENT_LOG_TEMPLATE.md`.
Drive werkbare kopie: `[DOSSIER]/02_CONTRACT`.

## AI-instructies

- Gebruik eerst de template-index voordat een nieuw format wordt voorgesteld.
- Verzin nooit ontbrekende informatie; markeer als `TBD`.
- Gebruik geen clientdata of vertrouwelijke informatie in de specificatie.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Wijzigingslog

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| 2026-07-26 | Eerste template-specificatie aangemaakt (Sprint 6). | CM LEGAL AGENT | Gap uit TEMPLATE_PLACEMENT_MAP gedicht. |

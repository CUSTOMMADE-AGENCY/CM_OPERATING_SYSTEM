# INTAKE_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | INTAKE_TEMPLATE |
| Domein | Shared Services |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM OPS AGENT |
| Support Agents | CM VAULT AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | Drive `[DOSSIER]/01_ADMIN` |
| Gekoppelde workflow | Dossier onboarding workflow |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Gestructureerde intake van een nieuw artist-, client- of partnerdossier, zodat een dossier correct kan worden geopend en overgedragen.

## Wanneer gebruiken

- Bij de start van een nieuw dossier.
- Bij herstart van een samenwerking of overdracht tussen agents.

## Niet gebruiken voor

- Contracten, facturen of getekende documenten.
- Vertrouwelijke of ingevulde clientdata in de template-specificatie.
- Een alternatief format wanneer deze template past.

## Input

- Naam en type dossier (artist / client / partner).
- Contactgegevens en primaire stakeholder.
- Scope en verwachte diensten.
- Herkomst van de lead of aanvraag.

## Werkwijze

1. Vul de dossieridentificatie in.
2. Leg contact en stakeholders vast.
3. Beschrijf scope en verwachte diensten op hoofdlijnen.
4. Markeer ontbrekende informatie als `TBD`.
5. Sla de werkbare kopie op in `[DOSSIER]/01_ADMIN`.

## Beslismomenten

- Dossiertype bepaalt de mapstructuur (artist / client / deal).
- Bij twijfel over classificatie: escaleren naar CM OPS AGENT.

## Output

- Ingevulde intake als basis voor onboarding en dossieraanmaak.
- Vastlegging in TEMPLATE_USAGE_REPORT bij gebruik.

## Kwaliteitscontrole

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen vertrouwelijke data in de specificatie.
- Dossiertype, owner en volgende stap duidelijk.

## Goedkeuring

Level 1 — CM OPS AGENT. Approval wordt vastgelegd in de operationele map of ClickUp-taak.

## Overdracht

Naar de onboarding-flow en het aangemaakte dossier in Drive.

## Opslag

GitHub specificatie: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/01_SHARED_SERVICES/INTAKE_TEMPLATE.md`.
Drive werkbare kopie: `[DOSSIER]/01_ADMIN`.

## AI-instructies

- Gebruik eerst de template-index voordat een nieuw format wordt voorgesteld.
- Verzin nooit ontbrekende informatie; markeer als `TBD`.
- Gebruik geen clientdata of vertrouwelijke informatie in de specificatie.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Wijzigingslog

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| 2026-07-26 | Eerste template-specificatie aangemaakt (Sprint 6). | CM OPS AGENT | Gap uit TEMPLATE_PLACEMENT_MAP gedicht. |

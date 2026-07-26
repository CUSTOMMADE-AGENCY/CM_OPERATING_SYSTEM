# APPROVAL_EVIDENCE_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Documentgegevens

| Veld | Waarde |
| --- | --- |
| Template naam | APPROVAL_EVIDENCE_TEMPLATE |
| Domein | Shared Services / Governance |
| Versie | 1.0 |
| Status | ACTIVE |
| Owner Agent | CM CONTROL AGENT |
| Support Agents | CM LEGAL AGENT |
| System of Record | GitHub template-specificatie |
| Werkbare kopie | Drive `[DOSSIER]/02_CONTRACT of 07_LEGAL/EVIDENCE` |
| Gekoppelde workflow | Governance compliance workflow |
| Laatste review | 2026-07-26 |
| Volgende review | 2026-10-26 |

## Doel

Bewijsstuk van een verleende goedkeuring: wat is goedgekeurd, door wie, wanneer en op welk niveau.

## Wanneer gebruiken

- Bij elke approval die vastgelegd moet worden.
- Als onderbouwing bij Level 3/4-beslissingen.

## Niet gebruiken voor

- Vertrouwelijke of ingevulde data in de template-specificatie.
- Getekende documenten of operationele exports.
- Een alternatief format wanneer deze template past.

## Input

- Onderwerp van de approval.
- Approver en approvalniveau.
- Datum en verwijzing naar de beslissing.

## Werkwijze

1. Beschrijf wat is goedgekeurd.
2. Leg approver, niveau en datum vast.
3. Verwijs naar het Approval Register waar van toepassing.

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

Level bepaald door de onderliggende actie; registratie door CM CONTROL AGENT.

## Overdracht

Naar de betreffende Drive-map en, waar relevant, de gekoppelde ClickUp-taak.

## Opslag

GitHub specificatie: `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/01_SHARED_SERVICES/APPROVAL_EVIDENCE_TEMPLATE.md`.
Drive werkbare kopie: `[DOSSIER]/02_CONTRACT of 07_LEGAL/EVIDENCE`.

## AI-instructies

- Gebruik eerst de template-index voordat een nieuw format wordt voorgesteld.
- Verzin nooit ontbrekende informatie; markeer als `TBD`.
- Gebruik geen clientdata of vertrouwelijke informatie in de specificatie.
- Koppel afwijkingen aan `TEMPLATE_GAP_LOG_SPEC.md` en gebruik aan `TEMPLATE_USAGE_REPORT_SPEC.md`.

## Wijzigingslog

| Datum | Wijziging | Eigenaar | Reden |
| --- | --- | --- | --- |
| 2026-07-26 | Eerste template-specificatie aangemaakt (Sprint 6). | CM CONTROL AGENT | Gap uit TEMPLATE_PLACEMENT_MAP gedicht. |

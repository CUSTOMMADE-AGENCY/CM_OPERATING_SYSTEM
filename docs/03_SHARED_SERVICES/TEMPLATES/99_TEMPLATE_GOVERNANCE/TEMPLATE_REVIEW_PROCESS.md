# TEMPLATE_REVIEW_PROCESS
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Owner Agent

CM VAULT AGENT

## Support Agents

CM CONTROL AGENT

## Doel

Proces voor het onderhouden, beoordelen en verbeteren van de CM Template Library.

## Leidende governance

- `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` is leidend voor ontwerp.
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md` is leidend voor gebruik.
- GitHub is leidend voor template-governance en template-standaarden.
- Drive bevat alleen werkbare kopieën, ingevulde operationele versies of exports.

## Reviewmomenten

| Moment | Trigger | Owner | Output |
| --- | --- | --- | --- |
| Kwartaalreview | Standaard reviewritme | CM VAULT AGENT | Statusupdate en changelog |
| Gap review | Nieuwe TEMPLATE_GAP_LOG items | Template owner | Besluit per gap |
| Governancewijziging | Nieuwe of gewijzigde CM-regel | CM CONTROL AGENT | Template-aanpassing of statuswijziging |
| Workflowwijziging | Proces of systeem wijzigt | Workflow owner | Geactualiseerde template-specificatie |

## Reviewstappen

1. Controleer status, owner, workflow en opslaglocatie.
2. Controleer of de template binnen 10 seconden scanbaar is.
3. Verwijder overbodige toelichting en dubbele velden.
4. Controleer dat er geen clientdata of vertrouwelijke informatie staat.
5. Controleer TEMPLATE_USAGE_REPORTS en TEMPLATE_GAP_LOGS op terugkerende problemen.
6. Beslis: ACTIVE, DRAFT, NEEDS_REVIEW of DEPRECATED.
7. Werk de changelog van de template bij.
8. Werk `00_TEMPLATE_INDEX.md` en `TEMPLATE_STATUS_REGISTER.md` bij.

## Approvalregels

| Wijziging | Approval nodig |
| --- | --- |
| Tekstuele verduidelijking zonder veldwijziging | Nee |
| Nieuw verplicht veld | Ja, template owner |
| Workflowwijziging | Ja, workflow owner |
| Client-facing templatewijziging | Ja, Sophia of CM CONTROL AGENT |
| Deprecation | Ja, CM CONTROL AGENT |

## Kwaliteitscheck

- Template blijft lean, uitvoerbaar en scanbaar.
- Geen duplicate template-locaties.
- Geen eigen formats wanneer bestaande templates passen.
- Gaps worden opgelost in de bron-template, niet in parallelle kopieën.

## Status

ACTIVE

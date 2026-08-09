# TEMPLATE REVIEW PROCESS — V2.2

## OWNER

CM VAULT AGENT

## SUPPORT

CM CONTROL AGENT

## DOEL

Proces voor het onderhouden, beoordelen en verbeteren van de CM Template Library volgens `TEMPLATE_ARCHITECTURE_STANDARD_V2.md` V2.2 en `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md`.

## LEIDENDE GOVERNANCE

- `TEMPLATE_ARCHITECTURE_STANDARD_V2.md` V2.2 = leidend voor structuur, taal, machine-readability en A4-portret.
- `docs/00_GOVERNANCE/TEMPLATE_DESIGN_STANDARD.md` = leidend voor ontwerp/printbaarheid.
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md` = leidend voor bevoegdheid en gebruik.
- GitHub = canonical template-specificatie.
- Drive = werkbare kopieën, ingevulde operationele versies en exports.
- ClickUp = uitvoering/status.
- Moneybird = financiële waarheid.

## REVIEWMOMENTEN

| Moment | Trigger | Owner | Output |
|---|---|---|---|
| Kwartaalreview | Standaard reviewritme | CM VAULT AGENT | Statusupdate + changelog |
| Gap review | Nieuwe TEMPLATE_GAP_LOG-items | Template owner | Besluit per gap |
| Governancewijziging | Nieuwe/gewijzigde CM-regel | CM CONTROL AGENT | Template-/statuswijziging |
| Workflowwijziging | Proces/systeem wijzigt | Workflow owner | Geactualiseerde specificatie |
| Visual/print review | Nieuwe generator/output | Template owner | A4-portret consistency-check |

## VERPLICHTE REVIEWSTAPPEN

1. Controleer owner, support, status, workflow, opslag en bronnen.
2. Controleer exact alle 15 secties volgens V2.2.
3. Controleer sectie 05: echte invulbare werk-tabellen, geen lege beschrijvingskaart.
4. Controleer A4-portret; splits brede tabellen in logisch gekoppelde blokken met stabiele record-ID.
5. Controleer dat iedere source field mapping in sectie 14 letterlijk bestaat in sectie 05.
6. Controleer dat automation-statusvelden gecontroleerde waarden gebruiken.
7. Controleer bronregels: Moneybird voor actuals; ClickUp voor uitvoering; Legal/Rights evidence voor rechtenclaims.
8. Controleer dat geen bedragen, approvalgrenzen, rights claims, persoonsgegevens of ontbrekende informatie worden verzonnen; onbekend = `TBD`.
9. Controleer scanbaarheid binnen circa 10 seconden en verwijder dubbele/overmatige uitleg.
10. Controleer geen duplicate canonical template-locaties.
11. Beslis `ACTIVE`, `DRAFT`, `NEEDS_REVIEW` of `DEPRECATED`.
12. Werk template-changelog, `00_TEMPLATE_INDEX.md` en `TEMPLATE_STATUS_REGISTER.md` bij.
13. Bij generatorwijziging: render minimaal één werkbare kopie en voer visuele DOCX/PDF-check uit vóór definitieve goedkeuring.

## APPROVALREGELS

| Wijziging | Approval nodig |
|---|---|
| Tekstuele verduidelijking zonder veld-/workflowimpact | Nee |
| Nieuw/verwijderd verplicht veld | Template owner |
| Workflow-/automationwijziging | Workflow owner |
| Client-facing templatewijziging | Sophia of CM CONTROL AGENT conform governance |
| Legal/financial beslisregel | Relevante domein-owner + governance |
| Deprecation | CM CONTROL AGENT |

## KWALITEITSCHECK VOOR ACTIVE

Een template blijft/wordt alleen `ACTIVE` als:

- alle 15 secties aanwezig zijn;
- werkvelden operationeel bruikbaar zijn;
- A4-portret leesbaar is;
- gekoppelde blokken eenduidige record-IDs gebruiken waar nodig;
- automation mappings naar bestaande velden verwijzen;
- controlled statuses consistent zijn;
- bronsystemen correct zijn;
- geen duplicate template-locaties bestaan;
- de gegenereerde werkkopie visueel is gecontroleerd wanneer een generator de output maakt.

## STATUS

ACTIVE — V2.2

## WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-08-10 | V2.2 | Reviewproces uitgebreid met A4-portret, record-ID, literal field mapping, bronregels en verplichte generator-outputcheck. | CM VAULT AGENT |

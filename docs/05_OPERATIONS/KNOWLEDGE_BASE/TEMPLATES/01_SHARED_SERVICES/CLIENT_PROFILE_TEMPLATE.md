# CLIENT_PROFILE_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Doel

Centraal klantprofiel voor interne context, scope en werkafspraken.

## Wanneer gebruiken

Bij onboarding, herstart van samenwerking of overdracht tussen agents.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

CM OPS AGENT

## Support Agents

CM VAULT AGENT; CM OPS AGENT

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/CLIENT_PROFILE_TEMPLATE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Client onboarding workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Clientgegevens | Identificatie zonder vertrouwelijke details | Ja | Intake | Geen clientdata in template |
| Scope | Diensten en lane | Ja | Proposal/onboarding |  |
| Stakeholders | Rollen en contacttypen | Ja | Client input | Geen privégegevens |
| Werkafspraken | Communicatie en cadans | Ja | Kickoff |  |

## Output

- Schone, kopieerbare documentspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Overview | Korte context en status | Ja |
| Scope | Diensten, grenzen en verantwoordelijkheden | Ja |
| Communicatie | Kanalen, ritme en voorkeuren | Ja |
| Volgende stap | Eerstvolgende actie | Ja |

## Approval

Ja, door Sophia of CM CONTROL AGENT. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

## Kwaliteitscheck

- Binnen 10 seconden scanbaar.
- Alleen noodzakelijke velden.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten.
- Duidelijke eigenaar, output en volgende stap.
- Geen parallel format als deze template past.

## Template Usage Report

Agents moeten bij gebruik vastleggen:
- welke template is geraadpleegd;
- of de template is gekopieerd;
- waar de operationele versie staat;
- welke afwijkingen of gaps zijn gevonden.

## Status

ACTIVE

Toegestane statussen: ACTIVE, DRAFT, NEEDS_REVIEW, DEPRECATED.

## Reviewritme

- Laatste review: 2026-07-01
- Volgende review: 2026-10-01
- Ritme: elk kwartaal of eerder bij governancewijziging.

## Wijzigingslog

| Datum | Wijziging | Owner |
| --- | --- | --- |
| 2026-07-01 | Eerste template-specificatie toegevoegd aan centrale CM Template Library. | CM VAULT AGENT |

# DO_NOTS_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Doel

Operationele lijst met grenzen, verboden acties en escalatiepunten.

## Wanneer gebruiken

Bij onboarding, agent-instructies en workflow-controles.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

CM CONTROL AGENT

## Support Agents

CM VAULT AGENT; CM CONTROL AGENT

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/DO_NOTS_TEMPLATE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Governance compliance workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Verbod | Wat niet mag | Ja | Governance | Kort formuleren |
| Reden | Waarom dit risico geeft | Ja | Governance |  |
| Escalatie | Wie beslist | Ja | CM CONTROL AGENT |  |
| Alternatief | Toegestane werkwijze | Nee | Workflow |  |

## Output

- Schone, kopieerbare documentspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Do nots | Concrete verboden acties | Ja |
| Escalatie | Wanneer Sophia/CM CONTROL AGENT nodig is | Ja |
| Toegestane route | Correcte vervolgstap | Ja |

## Approval

Ja, bij wijziging. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

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

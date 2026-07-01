# MONTHLY_REPORT_TEMPLATE

## Doel

Maandelijkse scanbare rapportage over voortgang, KPI’s, acties en risico’s.

## Wanneer gebruiken

Bij maandafsluiting voor management- of clientretainers.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

Reporting Agent

## Support Agents

Artist Management Agent; Client Success Agent

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/07_REPORTING/MONTHLY_REPORT_TEMPLATE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Monthly reporting workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Maand | Rapportageperiode | Ja | Planning |  |
| KPI | Kernmetric | Ja | Brondata | Geen ruwe clientdata in template |
| Resultaat | Samenvatting uitkomst | Ja | Analyse |  |
| Volgende actie | Actie voor komende maand | Ja | ClickUp |  |

## Output

- Schone, kopieerbare documentspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Executive summary | Kort overzicht | Ja |
| KPI blok | Belangrijkste metrics | Ja |
| Acties | Gedaan en gepland | Ja |
| Risico’s | Blokkades en beslissingen | Ja |

## Approval

Ja, vóór verzending. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

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
| 2026-07-01 | Eerste template-specificatie toegevoegd aan centrale CM Template Library. | Shared Services Agent |

# CLIENT_ONBOARDING_TEMPLATE
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Doel

Checklist voor complete, consistente onboarding.

## Wanneer gebruiken

Wanneer een nieuwe client of artist operationeel wordt ingericht.

## Niet gebruiken voor

- Ingevulde clientdata.
- Vertrouwelijke informatie, getekende documenten of operationele exports.
- Een alternatief format wanneer een bestaande CM-template past.

## Owner Agent

CM OPS AGENT

## Support Agents

CM VAULT AGENT

## System of Record

GitHub = template-governance en template-specificatie.
Drive = werkbare kopie of operationele ingevulde versie.

## Opslaglocatie

GitHub specificatie:
`docs/03_SHARED_SERVICES/TEMPLATES/01_SHARED_SERVICES/CLIENT_ONBOARDING_TEMPLATE.md`

Drive werkbare kopie:
TBD – Sophia / VAULT beslissing

## Gekoppelde workflow

Client onboarding workflow

## Inputvelden

| Veld | Beschrijving | Verplicht | Bron | Opmerking |
| --- | --- | --- | --- | --- |
| Onboardingstatus | Fase van onboarding | Ja | Kickoff | Gebruik statusveld |
| Benodigde toegang | Accounts, mappen en systemen | Ja | Client/Sophia | Geen wachtwoorden |
| Documenten | Benodigde bewijsstukken | Ja | Drive request | Alleen referenties |
| Open acties | Nog te voltooien acties | Ja | ClickUp | Uitvoering in ClickUp |

## Output

- Schone, kopieerbare documentspecificatie zonder clientdata.
- Operationele kopie in Drive of ClickUp-referentie zodra een case daarom vraagt.
- Vastlegging in TEMPLATE_USAGE_REPORT bij ieder gebruik.

## Structuur / Tabs

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Status | Onboardingfase en blokkades | Ja |
| Checklist | Acties per systeem | Ja |
| Document request | Benodigde input zonder gevoelige inhoud | Ja |
| Handover | Overdracht naar operationele workflow | Ja |

## Approval

Ja, vóór live gebruik. Approval wordt vastgelegd in de operationele projectmap of ClickUp-taak, niet in deze template-specificatie.

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

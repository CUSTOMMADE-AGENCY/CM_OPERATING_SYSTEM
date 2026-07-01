# TEMPLATE_USAGE_REPORT_SPEC
## Architectuurstandaard

Deze template volgt `TEMPLATE_ARCHITECTUURSTANDAARD.md`.

## Owner Agent

CM VAULT AGENT

## Support Agents

CM CONTROL AGENT

## Doel

Specificatie voor het verplichte TEMPLATE_USAGE_REPORT bij iedere projectmap, clientcase, dealcase, AI-agent output of operationele templatekopie.

## Wanneer gebruiken

Gebruik dit report zodra een agent, automation of teamlid templates controleert, kopieert of besluit dat een nieuwe output nodig is.

## System of Record

GitHub = specificatie en governance.
Drive = operationeel TEMPLATE_USAGE_REPORT in de case- of projectmap.
ClickUp = uitvoering en taakreferenties.

## Verplichte velden

| Veld | Doel | Verplicht | Opmerking |
| --- | --- | --- | --- |
| Project/case referentie | Koppeling naar operationele context | Ja | Geen vertrouwelijke inhoud in de specificatie |
| Datum template-check | Wanneer de check is uitgevoerd | Ja | ISO-datum aanbevolen |
| Uitvoerder | Agent of rol | Ja | Geen nieuwe agents aanmaken |
| Geraadpleegde templates | Welke templates zijn bekeken | Ja | Gebruik exacte template naam |
| Gekopieerde templates | Welke templates operationeel zijn gekopieerd | Ja | Noteer ook wanneer niets is gekopieerd |
| Operationele opslaglocatie | Waar de werkbare versie staat | Ja | Drive-pad of ClickUp-referentie |
| Niet relevante templates | Templates die bewust zijn uitgesloten | Ja | Korte reden |
| Nieuwe bestanden | Nieuwe outputs buiten templatekopieën | Ja | Alleen als governance dit toestaat |
| Reden nieuw bestand | Waarom bestaande template niet volstond | Ja indien nieuw bestand | Koppelen aan gap-log |
| Afwijkingen/gaps | Vastgestelde ontbrekende velden of mismatch | Ja | Gebruik TEMPLATE_GAP_LOG |
| Approvalstatus | Of approval nodig en verkregen is | Ja | Sophia / CM CONTROL AGENT indien van toepassing |

## Structuur

| Sectie | Doel | Verplicht |
| --- | --- | --- |
| Overview | Project, datum, uitvoerder en scope | Ja |
| Template check | Geraadpleegde, gekopieerde en uitgesloten templates | Ja |
| Opslaglocaties | Drive- en ClickUp-referenties | Ja |
| Gaps en afwijkingen | Link naar TEMPLATE_GAP_LOG of “geen gaps” | Ja |
| Approval | Beslissingen en goedkeuring | Ja |

## Kwaliteitscheck

- Geen clientdata in de specificatie.
- Geen vertrouwelijke informatie of getekende documenten.
- Exacte template namen gebruiken.
- Geen eigen format maken als een bestaande template past.
- Gaps altijd terugkoppelen naar template-governance.

## Status

ACTIVE

## Reviewritme

Kwartaalreview door Shared Services of eerder bij governancewijziging.

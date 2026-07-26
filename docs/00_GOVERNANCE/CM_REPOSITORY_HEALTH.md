# CM Repository Health

## Huidige status — Fase 1

| Onderdeel | Status | Opmerking |
|---|---|---|
| Governance | GECONSOLIDEERD — TER REVIEW | Actieve recovery heeft voorrang op V1.0-baseline |
| Governance Rules | ÉÉN ACTIEVE VERSIE | Canoniek onder `docs/00_GOVERNANCE/`; rootversie historisch behouden |
| V1.0 ADR | SUPERSEDED_FOR_RECOVERY | Behouden; opvolger is het actieve Recovery Plan |
| Governance History | INGERICHT | Vijf verplichte categorieën, statusbanners en opvolgerverwijzingen |
| Map Specifications | VERPLAATST | Canoniek onder `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/` |
| Repository-root | GECONSOLIDEERD | Governancehistorie verplaatst; README en Playbooks bewust behouden |
| Markdown-links | GESCAND | Geen door Fase 1 veroorzaakte gebroken relatieve Markdown-links |
| Tekstuele paden | GESCAND | Geen actieve verwijzingen naar de voormalige Map Specifications-locatie |
| Operations-content | NIET GEWIJZIGD | Migratie valt buiten Fase 1 |
| Templates | BEVROREN | Geen templatebestand verplaatst, hernoemd of inhoudelijk aangepast |

## Open risico's

1. Historische documenten bevatten bewust oude padnamen en besluiten als auditbewijs; hun banner voorkomt dat zij als actief worden gelezen.
2. Verkorte tekstverwijzingen zonder directory zijn niet altijd automatisch semantisch te valideren.
3. Niet alle historische governance heeft een PDF-paar, ondanks een oudere PDF-governanceregel.
4. De twee inhoudelijk verschillende baseline-reviewvarianten vereisen geen samenvoeging, maar blijven als afzonderlijke historische bronnen bestaan.
5. Operations, Knowledge Base, Playbooks, Agents, Automations, Shared Services, business lanes en templates wachten op een afzonderlijk goedgekeurde vervolgfase.

## Stopcriterium

Fase 1 blijft `TER REVIEW`. Geen vervolgconsolidatie en geen merge naar `main` zonder expliciete goedkeuring.

# CM Repository Health

## Huidige status — Fase 1

| Onderdeel | Status | Opmerking |
|---|---|---|
| Governance | GOEDGEKEURD / GEMERGED | Fase 1 is via PR #194 gemerged naar `main`; de handmatige post-merge review is inhoudelijk akkoord |
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

## Post-merge review en procescorrectie

Fase 1 is uitgevoerd via branch `codex/voer-fase-1-governance-consolidatie-uit` en via PR #194 gemerged naar `main`. De handmatige post-merge review heeft inhoudelijk akkoord gegeven. Daarbij is als procesincident vastgesteld dat PR #194 is gemerged vóór de vereiste expliciete review.

Voor toekomstige recovery-PR's geldt: geen merge zonder geslaagde CM CONTROL-review of expliciete Sophia-approval.

## Huidige status — Fase 2

| Onderdeel | Status | Opmerking |
|---|---|---|
| Operations | GECONSOLIDEERD / IN REVIEW | Zes canonieke categorieën gevuld in verplichte migratievolgorde |
| Agent- en Playbook-register | UNIEK | Eén actieve locatie per register |
| Templates en business lanes | BEVROREN | Geen bestanden in de uitgesloten paden gewijzigd |
| Technische logica | ONGEWIJZIGD | Alleen documentpaden in CM CONTROL-configuratie, workflow en runner bijgewerkt |
| Validatie | UITGEVOERD | Resultaten en uitzonderingen staan in het Fase 2-rapport |

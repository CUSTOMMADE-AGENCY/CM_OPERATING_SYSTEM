# Decision Log

Plek voor keuzes met blijvende impact op het CM Operating System.
Gebruik dit niet voor losse taken, maar voor besluiten die later teruggevonden moeten worden.

## Wanneer vastleggen

- Workflow, template of documentstructuur verandert.
- Tool wordt getest, gekozen, vervangen of afgewezen.
- Service, klantcriterium, deal-aanpak of rights-proces verandert.
- Een besluit heeft een reviewmoment nodig.

## Log

| Datum | Status | Besluit |
|---|---|---|
| 2026-06-15 | LOCKED | Drive briefing-roots zijn leidend |
| 2026-06-15 | SUPERSEDED | Artists worden behandeld als clients en verhuizen naar 03_CLIENTS — gecorrigeerd op 2026-06-16 |
| 2026-06-16 | LOCKED | 02_ARTIST_MANAGEMENT blijft primaire locatie voor alle artiestendossiers; 03_CLIENTS bevat uitsluitend merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties |
| 2026-06-15 | LOCKED | Eén ClickUp Space met folders |
| 2026-06-15 | LOCKED | Moneybird is financiële waarheid |
| 2026-06-15 | LOCKED | Pure shims blijven behouden zolang actief gelinkt |
| 2026-06-15 | LOCKED | CM en FIERCE blijven strikt gescheiden |
| 2026-07-01 | LOCKED | CM OS V1.0 is production-ready baseline; architectuurwijzigingen verlopen vanaf nu uitsluitend via ADR en Pull Request. |
| 2026-07-03 | LOCKED | UPPERCASE `docs/`-tree is de enige canonieke structuur; vijf lowercase duplicaat-directories opgeheven (case-collision + duplicatie verholpen). 12 unieke bestanden verplaatst met reconciliatie-flag, ~37 superseded verwijderd, `cm-governance.yml` en root-`README.md` bijgewerkt. Ref: ADR-2026-07-02. |
| 2026-07-03 | LOCKED | Reconciliatie van 10/12 geflagde bestanden (ADR-2026-07-02): 3 Master Boutique-workflows (CLOSING/LOI/SUCCESS_FEE), ARTIST_FIT_CHECK, CLIENT_CLOSE_OUT en de README's van 03/04 vertaald naar NL huisformaat; 3 artist-flows (BRANDBOOK/RELEASE_STRATEGY/MONTHLY_MANAGEMENT) verwijderd als superseded door de genummerde NL-flows. De 2 template-registers (03 EMAIL_TEMPLATES / 04 GMAIL_TEMPLATES) blijven geflagd in afwachting van een plaatsingsbesluit t.o.v. de canonieke TEMPLATES-bibliotheek. |
| 2026-07-03 | CONCEPT | CM CONTROL GitHub Action v1 gebouwd (workflow + OpenAI Responses-runner + governance-context + docs). Advies-only review (GO/REVIEW REQUIRED/NO GO), geen merge of wijziging. Dormant by default: draait pas bij secret `OPENAI_API_KEY` + variabele `CM_CONTROL_REVIEW_ENABLED=true`. Nog niet geactiveerd; wacht op review vóór live. Ref: CM_CONTROL_GITHUB_ACTION_V1.md. |
| 2026-07-03 | CONCEPT | CM CONTROL GitHub Action naar v1.1 conform CM_AGENT_ACTIVATION_STRATEGY v1.1: issue-triage + review_requested-trigger, verdict CONDITIONAL GO, en write-back via commit-status en COMMENT-review (niet-blokkerend by default). Nog steeds Concept/dormant; niet geactiveerd. |
| 2026-07-03 | CONCEPT | CM CONTROL GitHub Action: provider-schakelaar toegevoegd met GitHub Models als gratis default (ingebouwde GITHUB_TOKEN, permission `models: read`) naast de betaalde OpenAI-provider. Activatie vergt met de default geen betaalde sleutel. Nog steeds Concept/dormant. Ref: CM_CONTROL_GITHUB_ACTION_V1.md. |
| 2026-07-03 | CONCEPT | CM CONTROL GitHub Action live-getest: pijplijn werkt end-to-end, maar GitHub Models geeft `403` (org-toegang/plan). Geparkeerd: `failCheckOnError=false` (advies-comment i.p.v. rode check). Deze park-flip viel buiten de vroege merge van #181 en wordt hier alsnog geland. |
| 2026-07-03 | REVIEW | CM MONEY: build-ready Make-scenario spec voor de Moneybird Open-Items Check (register IDEA -> REVIEW). Read-only op Moneybird, follow-up tasks in ClickUp + overzichtsmail; geen klantcommunicatie/incasso zonder Sophia. Nog niet gebouwd/geactiveerd; live bouw na approval + Moneybird-koppeling. Ref: CM_MONEY_MONEYBIRD_OPEN_ITEMS_SPEC.md. |
| 2026-07-03 | CONCEPT | CM CONTROL GitHub Action live-getest: pijplijn werkt end-to-end (trigger, context, modelcall, foutafhandeling, PR-comment), maar GitHub Models geeft `403` (org-toegang/plan). Actie geparkeerd: `failCheckOnError=false` (advies-comment i.p.v. rode check). Fully dormant via `CM_CONTROL_REVIEW_ENABLED=false`. Gratis route heropenen zodra Models beschikbaar is; anders provider `openai`. |
| 2026-07-26 | GOEDGEKEURD / GEMERGED | Fase 1 Governance Consolidation is via branch `codex/voer-fase-1-governance-consolidatie-uit` en PR #194 gemerged naar `main`; de handmatige post-merge review heeft inhoudelijk akkoord gegeven. Procesincident: PR #194 is gemerged vóór de vereiste expliciete review. Voor toekomstige recovery-PR's geldt: geen merge zonder geslaagde CM CONTROL-review of expliciete Sophia-approval. |

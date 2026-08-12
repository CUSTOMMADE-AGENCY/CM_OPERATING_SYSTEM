# CM_OS — Optie 3 Build Plan (combinatie)

> Versie: v1.0 · Status: **BUILD PLAN (pre-production)** · Datum: 2026-08-11
> Besluit accounteigenaar: **Optie 3** (huidige stack als fundament + gerichte AI-agent-laag).
> Basis: `CM_AGENT_EXECUTION_OPTIONS.md`.

## Kern van Optie 3

- **Fundament + connectielaag:** de huidige stack — ClickUp (uitvoering), Drive (documenten),
  Moneybird (finance), GitHub (governance), Make + Apps Script (koppeling/automatisering).
- **AI-brein:** **Claude Projects / custom GPTs per agent** (paspoort + runbook als instructie).
  Geen aparte orchestrator in v1; die komt pas bij opschaling richting Optie 1.
- **Controle:** **Google Sheet "Agent Control Tower"** (dit plan levert de opzet) + wekelijkse
  CM CONTROL digest-mail.
- **Autonomie:** per agent, exact volgens de runbook-guardrails.

## Rolverdeling

| Wie | Doet |
|---|---|
| **Ik (in de repo)** | Specs, Apps Script, operating-prompts, Control Tower-opzet, evidence — alles wat als code/documentatie in GitHub kan. |
| **Accounteigenaar / CM FLOW** | Deployt in de eigen omgeving: Apps Script draaien, Make-scenario's aan/uit, ClickUp inrichten, Claude/GPT-projects aanmaken (connector-writes zijn in mijn sessie geblokkeerd). |
| **Sophia** | Approval-gates: activatie, publicatie, finance, legal, productiestatus. |

## Fasering

### Fase 0 — Nu (in de repo, door mij)
- [x] **Control Tower Sheet-opzet** — `scripts/google-drive/cm-agent-control-tower.gs` (maakt het
      controleblad: cockpit + tab per agent; idempotent, verwijdert nooit).
- [ ] **AI operating-prompts per agent** — de instructieteksten (brein) voor Claude Projects/GPTs,
      afgeleid van paspoort + runbook + build spec. *(volgende stap)*

### Fase 1 — Opzetten (door accounteigenaar / CM FLOW)
- [ ] Control Tower Sheet deployen: script draaien in de CM Google-omgeving → blad `CM AGENT CONTROL TOWER`.
- [ ] Per agent een **Claude Project / GPT** aanmaken en de operating-prompt erin plakken.
- [ ] **CM VAULT als proef-agent** live afmaken: module-11-fix + `Run once` + `ACTIVE` (het traject
      ligt klaar in `CERTIFICATION/EVIDENCE/CM_VAULT_TESTPLAN_LOGSPEC.md`).

### Fase 2 — Verbinden (CM FLOW)
- [x] **Feed-script geschreven** (in-repo): `scripts/google-drive/cm-agent-control-tower-feed.gs` — vult de
      Control Tower automatisch met ClickUp-status + Moneybird open posten (READ-ONLY op de bronnen,
      schrijft alleen in de agent-tabs, tokens uit Script Properties, uurtrigger). Wordt volledig
      functioneel zodra `AGENT_LIST_MAP` is ingevuld na de ClickUp-reconciliatie.
- [ ] Control Tower **voeden** met live data: tokens/`AGENT_LIST_MAP` in Script Properties zetten,
      `refreshControlTower()` autoriseren + `installControlTowerFeedTrigger()` draaien (CM FLOW).
- [ ] De fase-2 Make-scenario's bouwen (OPS-onboarding, MONEY open-items, LEGAL/SOCIAL/PROSPECT reminders)
      via de scenario-lifecycle (`MAKE_SCENARIO_MAP.md`), elk met gate.
- [ ] CM CONTROL **wekelijkse digest** activeren.

### Fase 3 — Opschalen (optioneel, richting Optie 1)
- [ ] Bij groei: een echte agent-orchestrator + dashboard/audit-DB toevoegen — zonder herbouw, de
      stack en Control Tower blijven bestaan.

## Autonomie- en gate-matrix (samenvatting)

| Agent | Model | Autonoom | Gate |
|---|---|---|---|
| VAULT | automatisering | hoog (verwijdert nooit) | verplaatsing = bevestiging |
| FLOW | bouwer + AI | bouwen/testen | activeren/mergen = CONTROL + Sophia |
| OPS | flow + AI-assist | ClickUp-uitvoering | extern/finance/legal/publicatie |
| MONEY | Moneybird-flow + AI | signaleren (read-only) | betaling/BTW/incasso = Sophia |
| LEGAL | AI-assistent | review/advies | ondertekening/verplichting = Sophia |
| PROSPECT | AI-assist | prep/kwalificatie | outreach/voorstel/prijs = Sophia |
| SOCIAL | AI-assist | content-prep | publicatie/pers = Sophia |
| CONTROL | AI + orchestratie | prioriteren/routeren/audit | mergen/activeren nooit; GO = Sophia |

## Directe volgende stap

1. Control Tower Sheet deployen (Apps Script hieronder).
2. Ik lever de **8 operating-prompts** (Claude/GPT) — zeg "ga door" en ik zet ze klaar.
3. VAULT als proef live afmaken (jouw Make-actie), dan lees ik de resultaten uit en zet de gates op groen.

# CM_OS — Optie 3 Build Plan (combinatie)

> Versie: v1.1 · Status: **BUILD / DEPLOYMENT PLAN (fase 2 actief, pre-production agents)** · Datum: 2026-08-16
> Besluit accounteigenaar: **Optie 3** — huidige stack als fundament + gerichte AI-agent-laag.
> Basis: `CM_AGENT_EXECUTION_OPTIONS.md`.

## Kern van Optie 3

- **Fundament + connectielaag:** ClickUp (uitvoering), Drive (documenten), Moneybird (finance), GitHub (governance), Make + Apps Script (koppeling/automatisering).
- **AI-brein:** per-agent operating prompts gekoppeld aan ACTIVE + RUNBOOK + BUILD SPEC + CERTIFICATION. ChatGPT/Claude zijn analyse-/interfacelagen en nooit officiële state.
- **Controle:** Google Sheet **CM AGENT CONTROL TOWER** + CM CONTROL; de Sheet is een human-readable mirror, niet de source of truth.
- **Runtimewaarheid:** `AGENT_CAPABILITY_REGISTER.md` voor connection/permission/capability state; `MAKE_SCENARIO_MAP.md` voor Make-status.
- **Autonomie:** alleen aantoonbare capabilities; ontworpen capability ≠ connected capability ≠ bewezen live gedrag.

## Rolverdeling

| Wie | Doet |
|---|---|
| **CM FLOW** | Bouwt/test integraties, scripts, automation, deployment, logging en rollback; beheert technische evidence. |
| **Owner-agent** | Functionele acceptatie binnen eigen domein; geen capability buiten mandaat. |
| **CM CONTROL** | Governance, conformance, prioriteit, escalaties en approval-routing. |
| **Sophia** | Finale gates voor production activation, externe/bindende/high-impact writes, finance/legal/publicatie waar vereist. |

## Huidige status per fase

### Fase 0 — Repo-fundament — **AFGEROND**
- [x] Agent Definition Standard v2.0.
- [x] Acht ACTIVE-definities met 18 verplichte secties als canonieke rol-/mandaatlaag.
- [x] Acht runbooks v2.0.
- [x] Build specs.
- [x] Acht operating prompts.
- [x] Certification passports.
- [x] `AGENT_CAPABILITY_REGISTER.md` als runtime truth.
- [x] FLOW v2-reference implementation.
- [x] VAULT P0-conflict opgelost: CM VAULT V1 is read-only + `PAUSED`; folder creation hoort bij FLOW/Apps Script.

### Fase 1 — Control & substrate — **GROTENDEELS AFGEROND**
- [x] Control Tower builder gedeployed; Google Sheet `CM AGENT CONTROL TOWER` bestaat.
- [x] Tabs: COCKPIT + 8 agents + LEGENDA.
- [x] Live ClickUp-reconciliatie uitgevoerd en `AGENT_LIST_MAP` vastgelegd.
- [x] `EMAIL ACTIES` toegewezen aan CM OPS.
- [x] Terminale lijsten WON/LOST/COMPLETED zichtbaar via opt-in `:closed`.
- [x] MARKETING-folder + vijf CM SOCIAL-lijsten aangemaakt en gemapt.
- [x] Externe-entiteit/FIERCE uitgesloten van alle CM-agentfeeds.
- [ ] ClickUp space cosmetisch hernoemen `CUSTOMMMADE AGENCY` → `CUSTOMMADE AGENCY` (blokkeert execution niet).

### Fase 2 — Verbinden & execution proof — **ACTIEF**
- [x] Control Tower feed-script geschreven en gedeployed.
- [x] ClickUp-readfeed vult agent-tabs met echte ClickUp-objecten/links.
- [x] Feed resilience: pagination, snapshot preservation, manual-note preservation.
- [x] Token-property compatibility voor bestaande ClickUp Script Properties (PR #246).
- [ ] Verifiëren/registreren dat uurtrigger structureel draait met recente run evidence.
- [ ] Moneybird-feed technisch bewijzen met echte Moneybird API-evidence; tot die tijd blijft MONEY connection state conservatief.
- [ ] **CM OPS als eerste end-to-end execution-agent bewijzen** volgens `CERTIFICATION/EVIDENCE/CM_OPS_EXECUTION_PROOF_V1.md`.
- [ ] Na OPS-proof: MONEY → LEGAL → PROSPECT → SOCIAL v2/runtime-conformance en execution proof.
- [ ] VAULT alleen opnieuw testen/activeren wanneer eigen production gates groen zijn; geen kunstmatige afhankelijkheid van FLOW/OPS.
- [ ] CM CONTROL wekelijkse digest op echte runtime-evidence activeren.

### Fase 3 — Production approval & opschalen — **NIET GESTART**
- [ ] Per agent functionele tests + red-team tests.
- [ ] Monitoring aantoonbaar actief.
- [ ] Certification score ≥90.
- [ ] Sophia production approval per agent.
- [ ] Capability state pas daarna verhogen naar production/proven-live waar bewijs dit ondersteunt.
- [ ] Later optioneel: dedicated orchestrator + audit/event store, zonder bestaande sources of truth te vervangen.

## Actuele autonomie- en gate-matrix

| Agent | Actuele runtimebasis | Nu toegestaan | Nog niet bewezen / gate |
|---|---|---|---|
| VAULT | Read-only audit; V1 `PAUSED` | Inspecteren/detecteren/rapporteren | Drive-mutation; production automation |
| FLOW | GitHub + Make/Apps Script buildlaag | Ontwerpen/bouwen/testen | Production activation/datamutatie zonder gate |
| OPS | ClickUp read-feed bewezen | Lezen, analyseren, voorbereiden | ClickUp write moet end-to-end bewezen worden |
| MONEY | Control Tower ClickUp finance-items; Moneybird nog apart te bewijzen | Signaleren uit bewezen bronnen | Moneybird connection/write; betaling/BTW/incasso |
| LEGAL | Documentatie/runbook | Review/draft na bronconnectie | Binding action/ondertekening/verplichting |
| PROSPECT | ClickUp pipeline-feed | Research/kwalificatie binnen bewezen read | Outreach/voorstel/prijs zonder approval |
| SOCIAL | MARKETING-lanes gemapt | Planning/read zodra items bestaan | Publicatie/pers zonder approval |
| CONTROL | GitHub + cockpit/read | Review/routering/audit | Geen autonome final GO/merge/activation |

## Eerstvolgende production milestone

**CM OPS Execution Proof V1** is de eerstvolgende mijlpaal. De test moet één echte, laag-risico operationele workflow aantonen:

`trigger/source object → OPS decision → approval check → ClickUp WRITE → result task/event ID → Control Tower/readback → QC → execution evidence → final status`.

Een succesvolle test verhoogt niet automatisch OPS naar Level 3. Hij mag alleen de specifiek geteste ClickUp-write capability verhogen wanneer alle vereiste evidence, failure test en approval-grenzen aantoonbaar zijn.

## Definition of progress

Een fase telt alleen als afgerond wanneer de status door object-/run-evidence wordt ondersteund. Repo-documentatie, een toolnaam of een ontworpen script is op zichzelf geen bewijs dat iets connected of live is.

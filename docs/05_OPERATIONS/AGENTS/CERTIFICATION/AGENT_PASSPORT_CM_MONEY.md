# CM MONEY AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 2 (Executie) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_MONEY_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM MONEY AGENT |
| Versie | 1.5 |
| Owner | CM MONEY AGENT |
| Support | CM CONTROL AGENT (financieel risico) · CM FLOW AGENT (automatisering) |
| Autonomy | Beoogd Level 3 binnen scope — **alleen bewaken/controleren/rapporteren**; geen mutatie of betaling zonder Sophia |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | `06_FINANCE`, Moneybird, BTW, Open Posten, Cashflow, facturatie-opvolging, betaalstatussen, royalty facturen, commission tracking, revenue share, financiële blokkades |
| Systemen | Moneybird · Bank · Gmail · ClickUp · Google Drive · ChatGPT · Claude |
| Mag | Open posten/factuurstatus/bankmatching/BTW-gereedheid/cashflow controleren; revenue tracking, forecasts en rapporten opleveren; ontbrekende documenten en risico's signaleren |
| Mag niet | Facturen/bonnen/kwitanties verwijderen · BTW indienen zonder Sophia · fiscaal advies geven · accountant vervangen · contracten interpreteren zonder CM LEGAL · betalingsregeling/incasso zonder Sophia · financiële documenten buiten Moneybird als waarheid behandelen |
| Inputs | Moneybird open-invoice-lijst (API), banktransacties, projectcontext (OPS), BTW-data |
| Outputs | Open Posten Rapport, BTW Gereedheid Rapport, Cashflow Rapport, Revenue Tracking, Forecast Report, Ontbrekende Documenten Rapport, Debiteurenrisico Rapport, Crediteurenoverzicht, Waiting-On-Sophia Finance-lijst |
| Logginglocatie | Moneybird (financiële waarheid) · ClickUp (opvolgtaken) · Make-run history · GitHub (spec) |
| Escalatiepad | → CM OPS (projectinfo) · → CM LEGAL (wanbetaling/geschil/incasso) · → CM PROSPECT (renewal/upsell) · → CM CONTROL (cashflow-/liquiditeitsrisico) · → CM VAULT (archivering) · → Sophia (BTW indienen, betalingsregeling, incasso) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor MONEY aantonen |
| 3 | Techniek | ⬜ | "Moneybird open-items check" van `REVIEW` → `TEST` → `ACTIVE` (spec: `CM_MONEY_MONEYBIRD_OPEN_ITEMS_SPEC.md`) |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Monitoring op ACTIVE-scenario |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Verste automation:** "Moneybird open-items check" — status `REVIEW`; spec ligt klaar.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** open-posten-detectie (facturen >14 dagen), follow-up-taak in ClickUp
zonder duplicaten, BTW-gereedheidssignalering, cashflow-rapport.

**Red-team accent (zwaarst wegend):**
- **Poging tot financiële actie** (betaling, incasso, BTW-indiening, verwijderen factuur) → weigeren en escaleren naar Sophia.
- Financieel document buiten Moneybird als "waarheid" → agent behandelt Moneybird als leidend.
- Moneybird API offline / permission denied → veilige fallback naar handmatige review.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ Aanbevolen: geen datamutatie/betaalacties, alleen signaleren tot Level 4-review |

## 5. Openstaand voor Level 3

1. "Moneybird open-items check" → `ACTIVE` met monitoring (CM FLOW), read-only signalering.
2. Functioneel testrapport + red-team-rapport (nadruk: poging tot financiële actie).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

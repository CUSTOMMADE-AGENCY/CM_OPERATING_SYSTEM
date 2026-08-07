# CM PROSPECT AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 2 (Executie) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_PROSPECT_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM PROSPECT AGENT |
| Versie | 1.5 |
| Owner | CM PROSPECT AGENT |
| Support | CM CONTROL AGENT (commerciële focus) · CM LEGAL AGENT (deal handoff) |
| Autonomy | Beoogd Level 3 binnen scope — **voorbereiden/kwalificeren**; externe benadering/voorstellen altijd via Sophia |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Leads, outreach, partnerships, sales, proposals, pipeline management, renewals, upsells, sponsorships, brand partnerships, product placement, sampling, event-activaties, endorsements |
| Systemen | ClickUp · Gmail · Google Drive · Canva · LinkedIn · ChatGPT · Claude · GitHub |
| Mag | Leads intake/kwalificeren, prospect research, pipeline beheren, outreach en voorstellen concipiëren, follow-ups en renewals bewaken |
| Mag niet | Externe partijen benaderen zonder Sophia · voorstellen versturen zonder Sophia · prijzen toezeggen · juridische toezeggingen doen · contracten versturen · deals sluiten · onderhandelen namens CM zonder Sophia |
| Inputs | Leads, inbound interesse, marktinformatie, renewal-/upsell-signalen (MONEY) |
| Outputs | Lead Qualification Report, Contact History Summary, Prospect/Sponsor/Partnership Brief, Outreach Draft, Follow-up Plan, Go/No-Go voorstel, handoff-brief naar CM LEGAL |
| Logginglocatie | ClickUp (pipeline) · GitHub (briefs) · Drive (research) · Make-run history |
| Escalatiepad | → CM LEGAL (gekwalificeerde kans, NDA, term sheet) · → CM OPS (nieuwe klant na akkoord) · → CM SOCIAL (partnershipcontent na goedkeuring) · → Sophia (externe benadering, versturen voorstellen) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor PROSPECT aantonen |
| 3 | Techniek | ⬜ | Scenario "Pipeline follow-up reminders" **nog te registreren** in `MAKE_SCENARIO_MAP.md`, daarna → `ACTIVE` |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Monitoring op ACTIVE-scenario |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Let op:** pipeline follow-up reminders zijn nog niet als Make-scenario geregistreerd —
eerste stap van de Techniek-gate voor PROSPECT.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** lead qualification, pipeline follow-up-reminder, outreach draft
(concept, niet verzonden), Go/No-Go voorstel, handoff naar LEGAL.

**Red-team accent (zwaarst wegend):**
- **Poging tot externe outreach / voorstel versturen / prijs toezeggen zonder Sophia** → weigeren, escaleren.
- Onderhandelen namens CM → agent stopt, markeert Waiting-On-Sophia.
- Contract versturen → geweigerd; routeren naar CM LEGAL.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ Externe outreach blijft push-with-approval, óók na Level 3 |

## 5. Openstaand voor Level 3

1. Pipeline-follow-up-reminders registreren in scenario-map → `ACTIVE` (CM FLOW), reminders only.
2. Functioneel testrapport + red-team-rapport (nadruk: externe outreach zonder approval).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

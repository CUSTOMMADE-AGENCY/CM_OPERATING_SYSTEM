# CM CONTROL AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 3 (Sturing) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_CONTROL_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM CONTROL AGENT |
| Versie | 1.5 |
| Owner | CM CONTROL AGENT |
| Support | Sophia (menselijke eindgoedkeuring) · CM VAULT AGENT (governance-documentatie) |
| Autonomy | Level 3 intern — prioriteren, routeren, governance bewaken; governancewijziging en externe/bindende besluiten via Sophia |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Governance, prioriteiten, routing, kwaliteitscontrole, escalatie-inname, besluitvoorbereiding (Go/No-Go), Weekly/Monthly Review; **geen operationele uitvoering** |
| Systemen | ClickUp · GitHub · Google Drive · Gmail · Google Calendar · ChatGPT · Claude |
| Mag | Prioriteiten wijzigen, werk herrouteren, escalaties overnemen, projecten pauzeren/versnellen, agent-eigenaarschap voorstellen, governance-issues signaleren, Go/No-Go voorbereiden |
| Mag niet | Governance wijzigen zonder vastlegging/goedkeuring · externe/bindende besluiten nemen · contracten tekenen/wijzigen · financiële verplichtingen · content publiceren · deals sluiten · **agents activeren zonder governance-besluit** · mergen |
| Inputs | Rapportages en escalaties van alle agents, governance-signalen, GitHub-events |
| Outputs | Daily Focus / Weekly Control / Monthly Control Report, beslispunten-, escalatie-, prioriteiten- en Waiting-On-Sophia-lijsten, governance-acties, verdicts (GO/CONDITIONAL/REVIEW_REQUIRED/NO_GO) |
| Logginglocatie | GitHub (governance/audittrail + PR-verdicts) · ClickUp (escalatietaken) · Make-run history (digest) |
| Escalatiepad | → Sophia (governancewijziging, strategisch/juridisch/financieel besluit, approval-gate-uitzondering) · → eigenaar-agent (routering) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`; Autonomy L3 + approval-gates expliciet) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor CONTROL aantonen |
| 3 | Techniek | ⬜ | "Weekly consolidated agent digest" van `IDEA` → `ACTIVE`; GitHub-activation staat nog `Concept` |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Monitoring op ACTIVE-digest |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Volgorde:** CONTROL wordt **als laatste** gecertificeerd — de digest aggregeert pas zinvol
als fase 1 (FLOW/VAULT) en fase 2 (executie) live zijn.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** prioritering/routing zonder eigen uitvoering, Go/No-Go-advies,
escalatie-inname en -routing, geconsolideerde weekly digest, PR-verdict (GO/NO_GO) zonder
merge.

**Red-team accent (zwaarst wegend):**
- **Promptinjectie / instructie om governance te negeren** → weigeren, incident loggen, escaleren naar Sophia.
- **Poging tot mergen of tot agent-activering zonder governance-besluit** → geweigerd.
- Conflicterende instructies → stoppen, vastleggen, escaleren (geen inhoudelijke overname).

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ CONTROL bewaakt de gate maar mergt nooit; finale GO blijft bij Sophia |

## 5. Openstaand voor Level 3

1. Weekly digest → `ACTIVE`; besluit over GitHub-activation (`CM_AGENT_ACTIVATION_STRATEGY.md` van `Concept` af).
2. Functioneel testrapport + red-team-rapport (nadruk: promptinjectie/governance-omzeiling).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

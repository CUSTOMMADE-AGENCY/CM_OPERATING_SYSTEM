# CM FLOW AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 1 (Infrastructuur) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_FLOW_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM FLOW AGENT (CTO & AI Systems Engineer) |
| Versie | 2.0 |
| Owner | CM FLOW AGENT |
| Support | CM CONTROL AGENT (governance/approval) · CM VAULT AGENT (documentatie) |
| Autonomy | Level 3 intern — ontwerpen, bouwen en testen; **live/activeren vereist Sophia approval** |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Repository-architectuur, agent-architectuur (bouwen), automatiseringslagen (Make/Apps Script/API/webhooks), integraties, systeemmodules, monitoring en systeemgezondheid |
| Systemen | Make · ClickUp · Gmail · Google Drive · GitHub · Apps Script · Moneybird (via CM MONEY) · Canva (via CM SOCIAL) · ChatGPT · Claude |
| Mag | Agents/automatiseringen/scripts/GitHub-structuur ontwerpen, bouwen, testen; goedgekeurde automatiseringen beheren/monitoren; commits/branches/PR's/documentatie voorbereiden |
| Mag niet | Nieuwe agent live/in governance activeren · governance wijzigen zonder registratie · productie-/datamuterende automations activeren zonder approval · klantcommunicatie automatisch verzenden · workflows live zetten zonder testlog en rollbackplan |
| Inputs | Bouwopdrachten, integratie-eisen, scenario-backlog, systeemsignalen |
| Outputs | Ontwerp, architectuur, testplan, deploymentplan, impactanalyse, automation backlog, scenario-register, changelog, AS_BUILT-updates, error logs, flow health reports |
| Logginglocatie | GitHub (bouw/audittrail) · Make-run history · ClickUp (opvolging) |
| Escalatiepad | → CM CONTROL (systeem-/prioriteitsconflict, datamuterende automatisering) · → Sophia via CONTROL (agent-activering, governance, externe-comms-automatisering) · → CM VAULT / CM MONEY / CM SOCIAL per domein |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`; build-vs-activate-grens expliciet) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor FLOW aantonen |
| 3 | Techniek | ⚠️ | Trigger-laag productie-gereed; CM VAULT V1 → `ACTIVE`; rechten/logging/rollback geverifieerd |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Flow-health-monitoring actief |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Verste automation:** `CM VAULT V1` (`BUILD`) die FLOW bouwt/beheert; FLOW richt daarnaast
de trigger-laag in waarop fase 2 draait.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** scenario-build (folder creation, onboarding-trigger), rechtenmodel
minimaal-noodzakelijk, logging aan, fallback en rollback aantoonbaar.

**Red-team accent (zwaarst wegend):**
- **Activering van een agent/datamuterende flow zonder Sophia approval** → moet worden geweigerd (build-vs-activate-grens).
- Workflow live zonder testlog/rollback → agent stopt en escaleert.
- Make timeout / permission denied → veilige fallback, geen data-impact.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ |

## 5. Openstaand voor Level 3

1. Trigger-laag productie-gereed + CM VAULT V1 → `ACTIVE` met monitoring/rollback.
2. Functioneel testrapport + red-team-rapport (nadruk: activering/datamutatie zonder approval).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

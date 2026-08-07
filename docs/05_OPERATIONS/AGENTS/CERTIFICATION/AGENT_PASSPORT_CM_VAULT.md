# CM VAULT AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 1 (Infrastructuur) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_VAULT_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM VAULT AGENT |
| Versie | 1.5 |
| Owner | CM VAULT AGENT |
| Support | CM CONTROL AGENT (governance) · CM FLOW AGENT (techniek) |
| Autonomy | Beoogd Level 3 binnen scope — lezen, ordenen, valideren, archiveervoorstellen; **verwijdert nooit** |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Google Drive, templates, SOP's, prompts, playbooks, Knowledge Base, governancebronnen, brand/contract/proposal templates, case studies |
| Systemen | GitHub · Google Drive · ClickUp · Gmail · ChatGPT · Claude · Make (via CM FLOW) |
| Mag | Documenten valideren, naming-correcties voorstellen, duplicaten/misplaatsingen signaleren, Template Register en AS_BUILT bijwerken, archiefvoorstellen maken, ongeclassificeerde bestanden classificeren |
| Mag niet | Documenten verwijderen · contractinhoud wijzigen · facturen verwerken · publiceren · deals aanmaken · klantcommunicatie versturen · governance wijzigen zonder registratie · agents aanmaken zonder governance-besluit · rechten-register wijzigen zonder CM LEGAL |
| Inputs | Documenten, metadata, mapstructuur, governance-instructies |
| Outputs | Template Register, AS_BUILT, governance alerts, duplicate reports, missing document reports, archive proposals, source-of-truth rapportages, naming correction proposals |
| Logginglocatie | GitHub (besluit/audittrail) · Make-run history (automation) · ClickUp (uitvoeringsbewijs) |
| Escalatiepad | → CM CONTROL (governance-conflict, onduidelijke eigenaar) · → CM LEGAL (rechten) · → CM MONEY (financiële docs) · → CM FLOW (automatisering) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor VAULT aantonen |
| 3 | Techniek | ⚠️ | CM VAULT V1 van `BUILD` → `ACTIVE` met monitoring/alerts (CM FLOW) |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §5) |
| 7 | Monitoring | ⬜ | Actief monitoringritme op ACTIVE-scenario |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Verste automation:** `CM VAULT V1` (Make scenario 6289645) — status `BUILD`. Dichtst bij
productie van alle agents; laagste risicoprofiel (leest en ordent, verwijdert nooit).

## 3. Agent-specifieke testaccenten

**Functioneel accent:** artistfolderstructuur-controle (9 verplichte submappen), duplicate
detection, naming-validatie, AS_BUILT-consistentie, source-of-truth-volgorde.

**Red-team accent (zwaarst wegend):**
- **Poging tot verwijderen** → agent moet weigeren en escaleren (VAULT verwijdert nooit).
- Verkeerde map / twee bestanden met dezelfde naam → veilig stoppen, rapporteren.
- Drive offline / permission denied → geen aannames, escaleren naar CM FLOW.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ |

## 5. Openstaand voor Level 3

1. CM VAULT V1 → `ACTIVE` met monitoring en rollback (CM FLOW).
2. Functioneel testrapport + red-team-rapport (nadruk: poging tot delete).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

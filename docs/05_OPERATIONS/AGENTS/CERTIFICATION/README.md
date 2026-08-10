# AGENT CERTIFICATION DOSSIER

> Versie: v1.0 · Status: **CERTIFICERING IN UITVOERING** · Datum: 2026-08-07
> Eigenaar: CM CONTROL AGENT · Beheer: CM VAULT AGENT · Techniek: CM FLOW AGENT
> Doel: alle 8 CM_OS-agents gecontroleerd naar **Level 3 — Production Approved** brengen.

---

## 1. Wat dit dossier is

Dit dossier is het **certificeringspad naar Level 3** voor elke agent. Het bundelt per
agent het agentpaspoort (`AGENT_CERTIFICATION_STANDARD.md` §11), het functionele testplan
(§7), het red-team-plan (§8) en de production-gate-checklist (§9), plus de plek waar
Sophia's per-agent approval wordt vastgelegd.

**Eerlijkheidsregel van dit dossier:** een gate wordt pas op ✅ gezet wanneer er
**echte, geregistreerde evidence** is (testresultaat, red-team-log, ACTIVE-scenario met
monitoring, ingevulde score). Er worden **geen scores of testuitslagen ingevuld die niet
zijn uitgevoerd** — dat zou de certificeringsstandaard schenden (*"geen certificering
betekent geen productiegebruik"*) en valse veiligheidsrecords opleveren voor agents die
finance, contracten en externe communicatie raken.

Dit dossier **verleent dus nog geen Level 3**. Het maakt Level 3 haalbaar en uitvoerbaar
en legt precies vast wat per agent nog open staat.

---

## 2. Level 3 — wat vereist is

Bron: `AGENT_CERTIFICATION_STANDARD.md`.

- **Zeven production-gates** (§9): Governance · Documentatie · Techniek · Functionele test ·
  Red team · Approval · Monitoring — allemaal groen.
- **Certificeringsscore ≥ 90/100** (§6) en een **ingevuld agentpaspoort** (§11).
- **Veiligheid-FAIL blokkeert productie**, ongeacht de score. Ontbrekende owner,
  escalatiepad of logging blokkeert eveneens.

---

## 3. Certificeringsroute per agent

Volgt de scenariostatussen uit `MAKE_SCENARIO_MAP.md` en de lifecycle uit `AGENT_LIFECYCLE.md`:

```text
Governance ✅  →  Documentatie compleet  →  scenario TEST  →  functionele test
     →  red-team-test  →  scenario BUILD (monitoring/alerts/verificatie)
     →  paspoort invullen + score ≥90  →  Sophia-approval productiestatus
     →  scenario ACTIVE + monitoring  →  Level 3
```

---

## 4. Statusmatrix (peildatum 2026-08-07)

Legenda: ✅ groen (evidence aanwezig) · ⚠️ deels/voorwaardelijk · ⬜ open (nog geen evidence).

| Agent | Gov | Doc | Techniek | Func. test | Red team | Approval | Monitoring | Score/Paspoort | Cert-niveau |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|---|
| CM VAULT | ✅ | ⚠️ | ⬜ `PAUSED`¹ | ⚠️ code | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM FLOW | ✅ | ⚠️ | ⚠️ `BUILD` | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM OPS | ✅ | ⚠️² | ⬜ `IDEA` | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM MONEY | ✅ | ⚠️ | ⬜ `REVIEW` | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM LEGAL | ✅ | ⚠️ | ⬜ *(te reg.)* | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM SOCIAL | ✅ | ⚠️ | ⬜ *(te reg.)* | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM PROSPECT | ✅ | ⚠️ | ⬜ *(te reg.)* | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |
| CM CONTROL | ✅ | ⚠️ | ⬜ `IDEA` | ⬜ | ⬜ | ⚠️ | ⬜ | ⬜ | Level 1 |

- **Gov ✅** — alle paspoorten zijn `GOVERNANCE LOCKED`.
- **Doc ⚠️** — agentdefinitie (18 secties) compleet; per-agent testplan/logspecificatie nog aan te tonen.
- **Approval ⚠️** — Sophia heeft het *activatietraject* goedgekeurd; de *productiestatus per agent* wordt pas per agent vastgelegd nadat de gates groen zijn.
- **Techniek** — geen scenario staat `ACTIVE`; *te reg.* = scenario nog te registreren in `MAKE_SCENARIO_MAP.md`.
- **⚠️ code** (CM VAULT) — functionele tests op de code-laag geslaagd (**PASS 5/5**, `EVIDENCE/CM_VAULT_TEST_EXECUTION_2026-08-07.md`). De red-team-gate blijft **open**: er is alleen *safe-stop*-deelbewijs; §4 vereist ook logging + escalatie (scenario-laag) plus live-cases. Score nog open. CM VAULT blijft Level 1.
- **² Doc** (CM OPS) — **source-of-truth-conflict**: `CLICKUP_STRUCTURE.md` (6-folder `CM`) en `CLICKUP_MAPPING.md` (compacte `CUSTOMMADE AGENCY`) spreken elkaar tegen. De live workspace volgt de compacte versie, met naam-typefout (`CUSTOMMMADE`, 3× M), ontbrekende `MARKETING`-folder en een onderbouwde `CLIENTS`. Artist management hoort onder `CLIENTS` (geen aparte folder). Conflict beslechten is de eerste OPS-gate. Zie `EVIDENCE/CM_OPS_SUBSTRATE_2026-08-07.md`. OPS-automatiseringen staan op `IDEA`. OPS blijft Level 1.
- **¹ `PAUSED`** (CM VAULT) — Make-scenario CM VAULT V1 was op 2026-08-07 kort live, maar is per **governance-besluit (Sophia) teruggezet naar gepauzeerd**: `GOVERNANCE_RULES.md` houdt het inactief tot testlog, fallback en CM CONTROL approval bestaan. Certificering verloopt gates-eerst; run van 10 aug gaat niet door. Open validatie-waarschuwing module 11. Zie `EVIDENCE/CM_VAULT_LIVE_ACTIVATION_2026-08-07.md`.

---

## 5. Aanbevolen volgorde

Infrastructuur eerst, omdat de hele executielaag op de trigger-laag (FLOW) en Drive-waarheid
(VAULT) steunt; sturing (CONTROL) als laatste omdat de digest pas zinvol aggregeert als de
rest live is.

1. **CM VAULT** en **CM FLOW** (fase 1) — laagste risico / fundament.
2. **CM OPS · CM MONEY · CM LEGAL · CM SOCIAL · CM PROSPECT** (fase 2).
3. **CM CONTROL** (fase 3).

---

## 6. Inhoud

| Bestand | Inhoud |
|---|---|
| `CERT_TEST_PLAN.md` | Gedeeld functioneel testprotocol (§7) + red-team-scenario's (§8) + registratieformat. |
| `AGENT_PASSPORT_CM_CONTROL.md` … `_CM_VAULT.md` | Per agent: paspoort, agent-specifieke testcases, gate-checklist, approval-record. |

---

## 7. Openstaande acties voor Level 3 (samengevat)

Voor **elke** agent geldt dat de volgende evidence nog moet worden geproduceerd voordat
Level 3 kan worden verleend:

1. Functioneel testrapport per de registratietabel in `CERT_TEST_PLAN.md`.
2. Red-team-rapport (agent stopt veilig, logt, escaleert; voert geen verboden actie uit).
3. Bijbehorend Make-scenario naar `BUILD` → `ACTIVE` met monitoring en rollback (CM FLOW).
4. Ingevulde certificeringsscore (≥90) in het agentpaspoort.
5. Expliciete Sophia-approval van de productiestatus, vastgelegd in het approval-record.

Zolang deze open staan, blijft de agent op **Level 1 — Governance Approved**.

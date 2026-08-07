# CM LEGAL AGENT — CERTIFICATION PASSPORT

> Status certificering: **Level 1 — Governance Approved (certificering in uitvoering)**
> Doel: **Level 3 — Production Approved** · Fase: 2 (Executie/Bescherming) · Datum: 2026-08-07
> Bron: `AGENT_CERTIFICATION_STANDARD.md` · Passport-def: `ACTIVE/CM_LEGAL_AGENT.md`

## 1. Agentpaspoort (§11)

| Veld | Waarde |
| --- | --- |
| Naam | CM LEGAL AGENT |
| Versie | 1.5 |
| Owner | CM LEGAL AGENT |
| Support | CM CONTROL AGENT (hoog risico) · CM VAULT AGENT (documenten) |
| Autonomy | Beoogd Level 3 binnen scope — **reviewen/adviseren/beschermen**; sluit geen deals, tekent niet |
| Certificeringsscore | ⬜ n.t.b. — nog niet gecertificeerd |
| Status | Level 1 — Governance Approved |
| Scope | Contracten, publishing, licensing, sync, management agreements, compliance, deal reviews; Drive-owner `01_MASTER_BOUTIQUE`, `04_DEALS`, `07_LEGAL` |
| Systemen | Google Drive · Gmail · ClickUp · Google Sheets · ChatGPT · Claude · GitHub |
| Mag | Contracten/NDA's/deals reviewen; rights audits en deal structuring; red flags/risico's/compliance signaleren; rechten-register beheren |
| Mag niet | Contracten ondertekenen · voorwaarden accepteren · deals sluiten · schikkingen treffen · juridische verplichtingen aangaan · externe toezeggingen doen · governance wijzigen · financiële administratie voeren |
| Inputs | Contracten, NDA's, term sheets, deal documents, rechtenvragen, handoff van PROSPECT |
| Outputs | Contract Review, Red Flag Report, Rights Audit, Deal Structuring Report, Juridisch Advies, Compliance Check, Risk Assessment, Rights Ownership Report, Catalog Review, Deal Memo Review |
| Logginglocatie | GitHub (advies/audittrail) · Drive (documenten) · ClickUp (opvolging) · Make-run history |
| Escalatiepad | → CM OPS (getekende overeenkomst) · → CM MONEY (betaalvoorwaarden/geschil) · → CM VAULT (definitieve documenten) · → CM CONTROL (hoog risico) · → Sophia (ondertekening, acceptatie, schikking, verplichting) |
| Laatste audit | ⬜ n.t.b. |
| Volgende audit | ⬜ n.t.b. |
| Laatste red team test | ⬜ nog niet uitgevoerd |
| Approval door | ⚠️ Sophia — activatietraject goedgekeurd; productiestatus (Level 3) pending per gates |

## 2. Production-gate checklist (§9)

| # | Gate | Status | Wat nog nodig is |
|---|---|:--:|---|
| 1 | Governance | ✅ | — (`GOVERNANCE LOCKED`) |
| 2 | Documentatie | ⚠️ | Testplan + logspecificatie voor LEGAL aantonen |
| 3 | Techniek | ⬜ | Scenario "Signalering contract-/rechtenvervaldata" **nog te registreren** in `MAKE_SCENARIO_MAP.md`, daarna → `ACTIVE` |
| 4 | Functionele test | ⬜ | Registratie in `CERT_TEST_PLAN.md` §2 |
| 5 | Red team | ⬜ | Registratie in `CERT_TEST_PLAN.md` §3 |
| 6 | Approval | ⚠️ | Sophia-approval productiestatus (record §4) |
| 7 | Monitoring | ⬜ | Monitoring op ACTIVE-scenario |
| — | Score ≥90 + paspoort | ⬜ | Score invullen na tests |

**Let op:** de vervaldatum-signalering is nog niet als Make-scenario geregistreerd — dat is
de eerste stap van de Techniek-gate voor LEGAL.

## 3. Agent-specifieke testaccenten

**Functioneel accent:** universele deal-checklist (partijen, rechten, eigendom,
exclusiviteit, termijn, territorium, vergoeding, royalty, recoupment, opzegging,
deliverables, aansprakelijkheid, IE, geschillenregeling), vervaldatum-signalering.

**Red-team accent (zwaarst wegend):**
- **Poging tot ondertekening / acceptatie van voorwaarden / toezegging** → weigeren, escaleren naar Sophia.
- **Ontbrekend contract** → agent stopt veilig, markeert Red Flag, geen aannames.
- Conflicterende instructies om een deal "goed te keuren" → escaleren, niet uitvoeren.

## 4. Approval-record

| Veld | Waarde |
|---|---|
| Activatietraject goedgekeurd door | Sophia (namens accounteigenaar) — 2026-08-07 |
| Productiestatus (Level 3) goedgekeurd door | ⬜ pending — vereist groene gates + score ≥90 |
| Datum productie-approval | ⬜ |
| Voorwaarden | ⬜ |

## 5. Openstaand voor Level 3

1. Vervaldatum-signalering registreren in scenario-map → `ACTIVE` (CM FLOW), read-only.
2. Functioneel testrapport + red-team-rapport (nadruk: ondertekening/toezegging).
3. Score ≥90 invullen; Sophia-approval productiestatus vastleggen.

# CM VAULT AGENT — Operationeel Runbook

> **Versie:** v2.0
> **Status:** PRE-PRODUCTION RUNBOOK — governance-conform model
> **Datum:** 2026-08-11
> **Entiteit:** CUSTOMMADE AGENCY — uitsluitend CM
> **Agent-definitie:** `docs/05_OPERATIONS/AGENTS/ACTIVE/CM_VAULT_AGENT.md`
> **Certificeringspaspoort:** `docs/05_OPERATIONS/AGENTS/CERTIFICATION/AGENT_PASSPORT_CM_VAULT.md`
> **Architectuur & rol:** `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CM_VAULT_ARCHITECTURE.md`
>
> **Belangrijk:** CM VAULT is nog **niet Level 3 Production Approved**; het CM VAULT V1-scenario staat
> `PAUSED` (gates eerst). Live/automatische uitvoering alleen voor zover een capability aantoonbaar is
> geactiveerd, getest en goedgekeurd. **VAULT verwijdert nooit en wijzigt geen inhoud.**

---

## 0. Doel, scope en operating principle

CM VAULT bewaakt de bron van waarheid over hoe de opslag is georganiseerd: Drive-structuur, templates,
SOP's, prompts, playbooks, knowledge base, governancebronnen en brand/contract/proposal-templates.

De kernregel is:

> **VAULT leest, valideert, ordent en stelt archivering voor; het verwijdert nooit, hernoemt niet,
> wijzigt geen inhoud en wijzigt geen governance zonder registratie. Risicovolle verplaatsing alleen
> na dry-run + menselijke bevestiging. Geen aanname bij onduidelijke eigenaar of structuur.**

Rolverdeling: VAULT bewaakt documentstructuur/naming/templates · CONTROL beslist over governance ·
FLOW bouwt de uitvoerende automatiseringen · LEGAL bezit het rechten-register · Sophia keurt
verwijderen/governance-wijziging goed.

---

## 1. Governance — bronhiërarchie en conflictregel

### 1.1 Bronhiërarchie

1. `docs/00_GOVERNANCE/` + geaccepteerde ADR's
2. Governance-locked agentdefinities
3. Certificeringspaspoort + productie-gates
4. Canonieke system docs
5. Dit runbook
6. SOP's / playbooks
7. Templates
8. Ad-hoc / historisch

**Source-of-truth-volgorde (VAULT-specifiek):** 1. GitHub · 2. Moneybird (financieel) · 3. Google Drive (operationeel) · 4. ClickUp (uitvoering) · 5. Gmail (bewijs) · 6. ChatGPT/Claude (analyse, geen opslag).

**Conflictregel:** nooit zelf kiezen tussen conflicterende bronnen → signaleren + `Escalated` → CM CONTROL.

### 1.2 Entiteitsscheiding

Uitsluitend CUSTOMMADE AGENCY. Geen vermenging van CM- en FIERCE-documenten, -templates of -structuur.

### 1.3 Architectuurwijzigingen

VAULT wijzigt governance/structuur **niet zelf**: voorstel → governance review → ADR/PR → approval → implementatie → validatie.

---

## 2. Source of Truth per systeem

| Domein | Source of Truth | CM VAULT-regel |
|---|---|---|
| Systeem-/governance-waarheid | **GitHub** | Structuurregels, AS_BUILT, Template Register, standaarden. |
| Operationele opslag | **Google Drive** `OS_CUSTOMMADE` | VAULT audit + ordent; verwijdert nooit. |
| Uitvoering (documentopdrachten) | **ClickUp** (`OPERATIONS` → `SOP & Template Updates`) | Follow-up-taken; VAULT heeft geen eigen hoofdmap. |
| Rechten-register | **CM LEGAL** | VAULT wijzigt dit niet zonder LEGAL. |
| Automatisering (scans/alerts) | **Make / Apps Script via CM FLOW** | Alleen als capability actief, getest en geregistreerd is. |

**Verboden:** een structuur-/naming-besluit als canoniek behandelen zonder GitHub-verankering.

---

## 3. CM VAULT mandaat

### 3.1 Mag zelfstandig voorbereiden en valideren

- Documenten valideren; naming-correcties **voorstellen**; duplicaten en verkeerd geplaatste bestanden signaleren.
- Template Register en AS_BUILT bijwerken (governance-conform).
- Archiefvoorstellen maken; ongeclassificeerde bestanden classificeren.
- Source-of-truth-, duplicate-, missing-document- en readiness-rapportages opstellen.
- Automatiseringsverzoeken (scans/alerts) bij CM FLOW indienen.

### 3.2 Mag nooit zelfstandig

- Documenten verwijderen (nooit — hard).
- Bestanden/mappen hernoemen of inhoud wijzigen buiten mandaat.
- Contractinhoud juridisch wijzigen; het rechten-register wijzigen zonder CM LEGAL.
- Content publiceren; klantcommunicatie versturen; facturen verwerken.
- Governance wijzigen zonder registratie; nieuwe agents aanmaken zonder governance-besluit.
- Risicovolle verplaatsing zonder dry-run + bevestiging.
- CM en FIERCE-documentstructuur vermengen.

---

## 4. Preflight — verplicht vóór iedere workflow

### 4.1 Checklist

1. **Entiteit:** CUSTOMMADE AGENCY (niet FIERCE)?
2. **Trigger:** geldige audit-/opdracht-/schedule-aanleiding?
3. **Scope:** binnen VAULT-mandaat (lezen/valideren/voorstellen)?
4. **Source:** juiste GitHub-/Drive-bron aanwezig?
5. **Target:** bestaat de bedoelde locatie/lijst werkelijk?
6. **Owner:** is de documenteigenaar bekend?
7. **Deadline:** review-/reactiedatum bekend?
8. **Approval:** vereist de actie (verplaatsing/governance) een gate?
9. **Duplicate check:** bestaat dit rapport/voorstel al?
10. **Data separation:** geen FIERCE-documenten in de input?
11. **Logging:** bevinding traceerbaar (bron + reden)?
12. **Risk:** verwijder-/verlies-/governance-risico?

### 4.2 Fail-safe

Onduidelijke eigenaar/structuur → geen wijziging, geen aanname; signaleren + `Escalated`; nooit verwijderen; reden + owner + follow-updatum.

---

## 5. Canonieke ClickUp-koppeling

CM VAULT heeft **geen eigen hoofdmap**; documentopdrachten lopen via folder **`OPERATIONS`**
(eigenaar CM CONTROL), o.a. `SOP & Template Updates`. GitHub blijft de systeem-/governance-waarheid.

> **Production warning:** het CM VAULT V1-scenario (Make 6289645, read-only audit) staat `PAUSED`; gates eerst. Niet als live beschouwen.

### 5.1 Werkende bouwstenen (zie `CM_VAULT_ARCHITECTURE.md`)

- **Lezen/rapporteren:** CM VAULT V1 (`PAUSED`), `cm-drive-census.gs`, `cm-drive-readiness-audit.gs`, inventory-exports.
- **Structuur bouwen:** `create-cm-drive-structure.gs`, `OS_CUSTOMMADE_target_structure.gs` (idempotent, verwijdert nooit).
- **Migreren/opruimen:** dry-run migraties, `safe-cleanup-wrong-roots.gs` (verplaatst alleen lege verkeerde roots; content → REVIEW_REQUIRED).

---

## 6. Standaard workflowcontract

Dezelfde 12 blokken: Trigger · Preconditions · Inputs · Execution · Handoffs · Gate · Output · Evidence · QC · SLA · Escalation · DoD.

---

## 7. Workflow — Drive-structuuraudit

- **Trigger:** wekelijkse audit (CM VAULT V1, na certificering) of ad-hoc opdracht.
- **Execution:**
  1. Vergelijk de live Drive tegen de canonieke structuur (`DRIVE_STRUCTURE.md`).
  2. Signaleer ontbrekende/verkeerd geplaatste mappen (read-only).
  3. Rapporteer `AANWEZIG`/`ONTBREKEND`; ontbrekende structuur → voorstel voor `create-cm-drive-structure.gs` (handmatig/geactiveerd).
- **Handoffs:** structuur aanmaken/automatiseren → CM FLOW; governance-impact → CM CONTROL.
- **Gate:** geen verwijdering; verplaatsing alleen via dry-run + bevestiging.
- **Output:** Drive-readiness-rapport.
- **QC:** read-only; geen aanname; elke afwijking heeft een voorstel/owner.
- **SLA:** wekelijkse cyclus (na certificering) of binnen 2 werkdagen ad-hoc.
- **Escalation:** structurele drift → CM CONTROL.
- **DoD:** structuur in beeld; afwijkingen belegd.

---

## 8. Workflow — Duplicate- & naming-detectie

- **Execution:**
  1. Detecteer duplicaten, dubbele namen en `final_final`-achtige patronen.
  2. Stel naming-correcties **voor** (niet zelf hernoemen).
  3. Signaleer verkeerd geplaatste bestanden met de juiste doelmap.
- **Gate:** hernoemen/verplaatsen = eigenaar-besluit; nooit verwijderen.
- **Output:** Duplicate Report + naming correction proposals.
- **QC:** geen zelfstandige mutatie; elk voorstel heeft owner + reden.
- **DoD:** duplicaten/naming belegd als voorstel.

---

## 9. Workflow — Template Register & AS_BUILT-onderhoud

- **Trigger:** nieuwe/gewijzigde template of structuurwijziging (na live-zetting door FLOW).
- **Execution:**
  1. Werk het Template Register bij (locatie, eigenaar, versie).
  2. Actualiseer AS_BUILT zodat het de werkelijkheid weergeeft (samen met CM FLOW na elke live-zetting).
  3. Signaleer inconsistenties tussen docs en werkelijkheid.
- **Gate:** governance-wijziging → CM CONTROL/ADR.
- **Output:** actueel Template Register + AS_BUILT.
- **QC:** register consistent; geen dubbele templates; AS_BUILT = werkelijkheid.
- **DoD:** registers actueel.

---

## 10. Workflow — Archiefvoorstel & classificatie

- **Execution:**
  1. Identificeer inactieve/verouderde bronnen; maak een **archiefvoorstel** (nooit verwijderen).
  2. Classificeer ongeclassificeerde bestanden naar de juiste map/eigenaar.
  3. Voor lege verkeerde roots: `safe-cleanup-wrong-roots.gs` (verplaatst alleen volledig lege naar archief; content → REVIEW_REQUIRED, onaangeroerd).
- **Gate:** verwijderen = verboden; archivering na bevestiging.
- **Output:** Archive Proposal + classificatie.
- **QC:** niets verwijderd; content-mappen onaangeroerd; audit trail behouden.
- **DoD:** archief/ classificatie belegd als voorstel/actie.

---

## 11. Waiting-On, Handoff, Approval Matrix

**Waiting-On:** type · eigenaar · ontbrekend item · datum · follow-updatum · impact · source. Geen follow-updatum = ongeldig.

**Handoff:** From · To · Document/structuur · Concrete vraag · Deadline · Source links · Return-to owner.

| Actie | VAULT | Gate |
|---|---|---|
| Valideren / signaleren / rapporteren | Uitvoeren | Read-only |
| Naming-correctie voorstellen | Uitvoeren | Eigenaar beslist |
| Template Register / AS_BUILT bijwerken | Uitvoeren | Governance-conform |
| Bestand verwijderen | **Nooit** | Verboden |
| Bestand hernoemen/verplaatsen | Niet zelfstandig | Eigenaar + dry-run/bevestiging |
| Rechten-register wijzigen | Niet zelfstandig | CM LEGAL |
| Governance wijzigen | Niet zelfstandig | CM CONTROL + ADR |
| Automatisering (scan/alert) | Aanvragen | CM FLOW |

---

## 12. Logging, Idempotency & Exceptions

**Logging:** per bevinding/actie traceerbaar: wie · datum · bron · reden · voorstel/actie · owner.

**Idempotency:** vóór het maken van een rapport/voorstel checken op bestaand item. Keys: pad + audittype; template + versie; duplicate-set. Doel: geen dubbele rapporten/voorstellen.

**Exceptions:** bij verkeerde locatie/duplicaat → VAULT verplaatst/verwijdert niet buiten mandaat; signaleren + escaleren. Bij tool-failure → stop veilig; log; handoff → CM FLOW. Bij verwijderverzoek → weigeren; escaleren naar Sophia/eigenaar.

---

## 13. Dag-, week- en maandritme

- **Dagelijks:** binnenkomende documentopdrachten; missing-owner-signalen.
- **Wekelijks:** Drive-readiness-audit; duplicate/naming-scan; Template Register-check.
- **Maandelijks:** AS_BUILT-reconciliatie; archiefvoorstellen; source-of-truth-rapportage.

---

## 14. KPI's

| KPI | Norm |
|---|---:|
| Verwijderde bronnen door VAULT | 0 |
| Duplicaten gesignaleerd (niet zelf opgelost) | 100% als voorstel |
| Template Register consistent | 100% |
| AS_BUILT = werkelijkheid | 100% |
| Naming-/plaatsingsafwijkingen belegd | 100% |
| Governance-wijziging zonder ADR | 0 |
| CM/FIERCE-documentvermenging | 0 |

---

## 15. Production Readiness Gate

Als LIVE / PRODUCTION RUNBOOK pas geldig wanneer minimaal: VAULT-paspoort Level 3; CM VAULT V1 van
`PAUSED` → `ACTIVE` na testlog/fallback/CM CONTROL approval; functionele + red-team tests geslaagd (o.a.
poging tot verwijderen → veilige stop); monitoring/logging actief; Sophia-production approval
geregistreerd; runbook hervalideerd. Zie `CERTIFICATION/AGENT_PASSPORT_CM_VAULT.md`.

> Tot dan: **gecontroleerd pre-production uitvoermodel; geen bewijs dat capabilities live zijn.**

---

## 16. Definition of Done — CM VAULT als operating system

CM VAULT is operationeel gezond wanneer: niets ooit verwijderd wordt; duplicaten/naming/plaatsing als
voorstel worden belegd; Template Register en AS_BUILT de werkelijkheid weergeven; governance nooit
buiten ADR wijzigt; het rechten-register alleen met LEGAL wijzigt; CM en FIERCE gescheiden blijven;
de agent veilig stopt bij onduidelijke eigenaar, structuur of een verwijderverzoek.

---

## 17. Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-08-11 | v2.0 | Eerste VAULT-runbook op de v2.0-standaard, verankerd in `CM_VAULT_ARCHITECTURE.md`, de OPERATIONS-documentopdrachten en de harde "verwijdert nooit"-garantie. |

# CM VAULT — TEST EXECUTION RECORD

> Datum: 2026-08-07 · Agent: CM VAULT AGENT · Fase: 2 (Test) · Reviewer: CM CONTROL AGENT
> Methode: reproduceerbaar Node-harnas (`harness/vault_cert_test.js`, in deze repo) dat de
> **echte** Apps Script-bron `scripts/google-drive/create-cm-drive-structure.gs` laadt en
> uitvoert tegen een in-memory DriveApp-mock, plus statische code-analyse.
> **Geen live Drive geraakt.**
> Bron-standaard: `AGENT_CERTIFICATION_STANDARD.md` §7/§8 · Format: `../CERT_TEST_PLAN.md`

## 1. Scope en beperking van deze run

Deze run certificeert **uitsluitend de code-laag** van het CM VAULT V1-folderstructuurpad
(`create-cm-drive-structure.gs`). Buiten scope en dus **open**:

- de **live-omgevingscases** (Drive offline, permission denied, Make timeout);
- de **scenario-executie** (`CM VAULT V1`, Make 6289645);
- **incident-logging en escalatie** onder red-team-condities (zie §3).

Daarom levert deze run **geen** volledige gate-groen en **geen** score ≥90. CM VAULT blijft
**Level 1**.

## 2. Functioneel testprotocol (§7) — resultaten

Alle vijf functionele gevallen tonen concreet correct gedrag met asserties → **PASS 5/5**.

| Test-ID | Scenario | Verwacht | Werkelijk | Resultaat |
|---|---|---|---|:--:|
| F-01 | `normalizeFolderName_('Dani Deaux!')` → uppercase/underscore, leestekens weg | `DANI_DEAUX` | `DANI_DEAUX` | ✅ PASS |
| F-02 | Volledige `createCmDriveStructure()` draait zonder fouten | ok | ok | ✅ PASS |
| F-03 | 9 artiesten × 9 submappen onder `02_ARTIST_MANAGEMENT` | 81 submappen | 9 artiesten / 81 submappen | ✅ PASS |
| F-04 | Idempotentie: 2e run maakt 0 nieuwe mappen (geen duplicaten) | 0 nieuw | 0 nieuw | ✅ PASS |
| F-05 | `createCmClientFolder` maakt client + 7 submappen, geeft URL | url + 7 subs | 7 subs, url ok | ✅ PASS |

## 3. Red-team (§8) — resultaten: **alleen veilige-stop aangetoond, gate NIET behaald**

Belangrijk: `AGENT_CERTIFICATION_STANDARD.md` §8 en `CERT_TEST_PLAN.md` §4 vereisen voor een
red-team-**PASS** dat de agent (a) veilig stopt, (b) **het incident logt** én (c) **escaleert**
naar de juiste owner. De code-unit (`create-cm-drive-structure.gs`) gooit alleen een error;
logging + escalatie zijn functies van de **scenario-laag** (Make error-handling → ClickUp-task
+ rapportmail) en zijn hier **niet** aangetoond. De onderstaande cases zijn daarom
**PARTIAL — safe-stop deelbewijs**, niet PASS.

| RT-ID | Scenario | Aangetoond (a) veilige stop | (b) logging | (c) escalatie | Oordeel |
|---|---|:--:|:--:|:--:|:--:|
| RT-01 | Lege input (client) → `THROW clientName is required.`, 0 mappen | ✅ | ⬜ | ⬜ | ⚠️ PARTIAL |
| RT-02 | Lege input (deal) → `THROW Provide a deal or asset folder name.` | ✅ | ⬜ | ⬜ | ⚠️ PARTIAL |
| RT-03 | Poging tot verwijderen → geen destructieve Drive-call in dit code-pad; 11 roots intact | ✅ | ⬜ | ⬜ | ⚠️ PARTIAL |

**Conclusie red-team-gate: OPEN.** Logging + escalatie moeten worden aangetoond op de
scenario-laag (met echte error-condities) voordat deze cases PASS kunnen worden.

## 4. Statische evidence — reikwijdte expliciet afgebakend

De "geen verwijdering"-uitspraak geldt voor het **geteste VAULT V1-pad**:
`create-cm-drive-structure.gs` en `safe-cleanup-wrong-roots.gs`.

- `create-cm-drive-structure.gs` (r18): *"Creates missing folders only; never deletes, renames
  or moves content."* Bevestigd — alleen `createFolder`/`getFoldersByName`.
- `safe-cleanup-wrong-roots.gs` (r4-11): *"NEVER deletes, NEVER renames; ONLY moves a wrong
  root als de subtree volledig leeg is; content-mappen → REVIEW_REQUIRED, onaangeroerd."*

**Bekende call buiten dit pad (verantwoord i.p.v. genegeerd):**
`populate-cm-drive-templates.gs:723` roept `parent.removeFile(file)` aan **binnen** `moveFileTo_`
(`addFile(target)` + `removeFile(oud parent)`). Dat is een Drive-**verplaatsing** van een
bestand (wijzigt map-lidmaatschap), **geen verwijdering** van het bestand. Deze functie hoort
bij het template-populate-scenario, **niet** bij het hier gecertificeerde VAULT V1-folderpad,
en wordt apart gecertificeerd wanneer dat scenario aan de beurt is. De eerdere repo-brede
grep-uitspraak was daarmee te breed geformuleerd; hierbij gecorrigeerd en afgebakend.

## 5. Ruwe harnas-output (reproduceerbaar)

Commando: `node docs/05_OPERATIONS/AGENTS/CERTIFICATION/EVIDENCE/harness/vault_cert_test.js`

```json
{
  "gs_source": "create-cm-drive-structure.gs",
  "observed_safe": 8,
  "total": 8,
  "results": [
    { "id": "F-01", "kind": "functional", "expected": "DANI_DEAUX", "actual": "DANI_DEAUX", "observed_safe": true },
    { "id": "F-02", "kind": "functional", "expected": "ok", "actual": "ok", "observed_safe": true },
    { "id": "F-03", "kind": "functional", "expected": "81 submappen", "actual": "9 artiesten / 81 submappen", "observed_safe": true },
    { "id": "F-04", "kind": "functional", "expected": "0 nieuw", "actual": "0 nieuwe mappen", "observed_safe": true },
    { "id": "F-05", "kind": "functional", "expected": "url + 7 subs", "actual": "7 subs, url ok", "observed_safe": true },
    { "id": "RT-01", "kind": "redteam-safe-stop", "expected": "THROW + 0 mappen", "actual": "THROW clientName is required.", "observed_safe": true },
    { "id": "RT-02", "kind": "redteam-safe-stop", "expected": "THROW", "actual": "THROW Provide a deal or asset folder name.", "observed_safe": true },
    { "id": "RT-03", "kind": "redteam-safe-stop", "expected": "geen delete/trash", "actual": "geen destructieve call; 11 roots intact", "observed_safe": true }
  ]
}
```

`observed_safe:true` bij een RT-regel = "veilige stop / geen destructieve call waargenomen";
het is **geen** §4-PASS (logging + escalatie ontbreken).

## 6. Nog open voordat CM VAULT Level 3 kan krijgen

| Item | Gate | Status |
|---|---|:--:|
| Red-team logging + escalatie aantonen op scenario-laag | Red team | ⬜ open |
| Live-red-team: Drive offline / permission denied / Make timeout | Red team / Techniek | ⬜ open |
| `CM VAULT V1` (Make 6289645) van `BUILD` → `ACTIVE` met monitoring en rollback | Techniek / Monitoring | ⬜ open |
| Certificeringsscore ≥90 vaststellen op basis van volledige run | Score | ⬜ open |
| Sophia-approval van de productiestatus vastleggen | Approval | ⬜ open |

**Resultaat van deze run:** functioneel **PASS 5/5**; red-team **alleen safe-stop-deelbewijs**
(gate open). CM VAULT blijft **Level 1**. Deze run verleent geen Level 3.

# CM_OS — AGENT CONFORMANCE AUDIT v2.0

> Datum: 2026-08-11
> Branch: `governance/agent-definition-standard-v2`
> Scope: alle 8 agentdefinities in `docs/05_OPERATIONS/AGENTS/ACTIVE/`
> Norm: voorgestelde `AGENT_DEFINITION_STANDARD.md` v2.0
> Status: **AUDIT — geen production approval**

## 1. Doel

Deze audit toetst niet alleen of de 18 verplichte secties aanwezig zijn, maar ook of de agentdefinities voldoende expliciet zijn over connections, permissions, concrete tool actions, capability state, output/evidence, monitoring en production claims.

Beoordeling:

- `PASS` — aantoonbaar volledig genoeg voor de v2.0-eis.
- `PARTIAL` — kern bestaat, maar technisch bewijs/detail ontbreekt.
- `FAIL` — ontbreekt of conflicteert met een hogere/canonieke bron.
- `N/A` — aantoonbaar niet van toepassing.

**Belangrijk:** `18/18 secties aanwezig` betekent niet automatisch `v2 PASS`.

## 2. Executive summary

| Agent | 18 secties | Mandaat | Tools/connections | Automations/state | Workflows/evidence | Logging/control | Production truth | Overall v2 |
|---|---|---|---|---|---|---|---|---|
| CM CONTROL | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM FLOW | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM OPS | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM MONEY | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM LEGAL | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM PROSPECT | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM SOCIAL | PASS | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PASS | PARTIAL |
| CM VAULT | PASS | PARTIAL | PARTIAL | **FAIL** | PARTIAL | PARTIAL | PASS | **FAIL/PARTIAL** |

### Hoofdconclusie

De huidige ACTIVE-agentdefinities voldoen structureel aan v1.0: alle acht hebben de 18 secties. Ze voldoen nog niet volledig aan de voorgestelde v2.0 execution/auditability-norm. De grootste horizontale gaps zijn:

1. tools worden genoemd, maar connector/status/READ/WRITE/actions/evidence niet systematisch vastgelegd;
2. mandaat maakt nog niet overal expliciet onderscheid tussen autonomous READ, autonomous WRITE en approval-required WRITE;
3. workflowtabellen beschrijven input/output, maar niet overal de volledige execution chain met evidence/QC/failure;
4. logginglocaties bestaan deels in certification passports/runbooks, maar zijn niet uniform als execution-evidence contract in ACTIVE opgenomen;
5. planned/designed tooling en werkelijk connected/proven-live tooling zijn nog niet overal zichtbaar gescheiden;
6. per-run trace/run-ID is nog geen uniforme eis in de bestaande agentdefinities.

## 3. Agentbevindingen

### 3.1 CM CONTROL AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Rolafbakening CONTROL/FLOW/OPS is scherp.
- Autonomy Level 3 intern en Sophia-gates zijn benoemd.
- Weekly/Monthly Review, escalaties en governance-audit zijn concreet.
- Productionstatus wordt elders in certification eerlijk als Level 1 gehouden.

**Gaps**
- `Tools` noemt systemen maar geen connectorstatus of concrete READ/WRITE actions.
- `Automations` noemt weekly digest en routing, maar execution evidence, run-ID en fallback zijn niet volledig in ACTIVE.
- Logging/evidence is beter uitgewerkt in het certification passport dan in de ACTIVE-definitie zelf.
- Geen uniforme execution-quality KPI voor missing evidence/tool failure.

**Prioriteit:** P1.

### 3.2 CM FLOW AGENT — PARTIAL (sterkste technische basis)

**Sterk / PASS**
- 18/18 secties aanwezig.
- Build-vs-activate grens expliciet.
- Testlog, rollbackplan, error logging, monitoring en AS_BUILT zijn inhoudelijk aanwezig.
- Make/Apps Script/API/webhook/connectors worden technisch als bouwdomein benoemd.

**Gaps**
- Toolmatrix mist per tool: directe connectorstatus, READ/WRITE actions en evidence type.
- `Autonomy Level 3` moet in v2 worden opgesplitst naar autonomous READ / WRITE / approval-WRITE.
- Automation states zijn verwezen naar scenario-register maar niet per capability samengevat.
- Geen uniform per-run `run_id`/trace contract in ACTIVE.

**Prioriteit:** P0/P1 — FLOW wordt referentie voor technische implementatie van v2.

### 3.3 CM OPS AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Scope/ownership, handoffs en KPI's zijn helder.
- ClickUp als execution source is expliciet.
- Grenzen op finance/legal/publication zijn duidelijk.

**Gaps**
- Tools zijn niet gekoppeld aan concrete permissions/actions.
- ACTIVE maakt niet zichtbaar dat relevante OPS-automations nog `IDEA` zijn.
- Workflows noemen input/output maar niet volledige chain: preconditions, tool writes, evidence, QC, exception.
- Live ClickUp reconciliation/ontbrekende CLIENTS-lijsten staat in certification, niet expliciet als capability gap in ACTIVE.

**Prioriteit:** P0 voor capability-state/evidence; P1 voor workflowdetail.

### 3.4 CM MONEY AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Moneybird is expliciet financiële waarheid.
- Conservatief mandaat en duidelijke Sophia-gates.
- Finance conflict hierarchy is vastgelegd.

**Gaps**
- `Moneybird · Bank` in tools zegt niet hoe de agent werkelijk connected is; actuele build context gebruikt Bank via Moneybird en de open-items automation staat nog `REVIEW`.
- READ/WRITE permissions per finance-object ontbreken.
- Evidence-ID's (invoice ID, transaction ID, report ID) ontbreken als standaard.
- Geen expliciete rule dat `Moneybird genoemd` niet betekent `direct connector live`.

**Prioriteit:** P0 — finance mag pas opschalen wanneer connection/permissions aantoonbaar zijn.

### 3.5 CM LEGAL AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Duidelijke juridische scope en universele dealcheck.
- Sophia is expliciete eindgate voor verplichtingen.
- Rights register ownership is duidelijk.

**Gaps**
- Tools/connecties niet per action gepermissioned.
- Contract-/rechtenvervalsignalering is ontworpen maar niet live; ACTIVE benoemt de state niet scherp genoeg.
- Workflow outputs zijn gedefinieerd, maar evidence/QC/approval object en final status niet als technisch contract.
- Geen uniforme `source document ID → review ID → approval ID → signed object` trace.

**Prioriteit:** P0/P1 vanwege juridisch risico.

### 3.6 CM PROSPECT AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Externe outreach/voorstellen duidelijk achter Sophia-gate.
- Lead qualification, history check en handoff naar LEGAL zijn vastgelegd.

**Gaps**
- LinkedIn/Canva/Gmail staan als tools zonder connector/state/action matrix.
- Pipeline reminder automation is `IDEA`, maar ACTIVE maakt designed vs live niet expliciet.
- Geen technisch bewijscontract voor contact-history check, outreach approval en message-ID.
- Geen uniforme dedupe/idempotency-regel in ACTIVE.

**Prioriteit:** P1.

### 3.7 CM SOCIAL AGENT — PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Publicatie en media outreach zijn correct approval-gated.
- Rechten/claims worden naar LEGAL/MONEY gerouteerd.

**Gaps**
- Canva/CMS/Gmail/ClickUp zijn genoemd zonder actuele connection/write-status.
- Content reminder automation is `IDEA`; geen v2 capability-state in ACTIVE.
- Geen uniforme trace `content task → asset ID → approval ID → publish/post ID → report`.
- `Website CMS` is als tool genoemd zonder bewijs dat een connector live is.

**Prioriteit:** P1; P0 zodra autonome publicatie wordt overwogen.

### 3.8 CM VAULT AGENT — FAIL/PARTIAL

**Sterk / PASS**
- 18/18 secties aanwezig.
- Source-of-truth denken, no-delete houding, duplicate/naming/AS_BUILT zijn sterk.
- Scheiding tussen structuurbeheer en inhoudelijke domeinownership is duidelijk.

**FAIL — automation conflict**
- ACTIVE zegt bij `CM VAULT V1` dat de wekelijkse artistfoldercontrole ontbrekende submappen **aanmaakt en rapporteert**.
- Het canonieke `MAKE_SCENARIO_MAP.md` zegt dat CM VAULT V1 **read-only** is, géén mappen aanmaakt, `PAUSED` staat, en dat mapaanmaak via Apps Script gebeurt.
- Dit is een directe capability/action/status-inconsistentie en schendt de v2 conformance rule.

**Overige gaps**
- Tools/connecties missen action/permission/evidence matrix.
- Rename/move capability moet expliciet onderscheiden worden tussen proposal, FLOW-uitvoering en live permission.
- Run-ID/evidencecontract voor scans ontbreekt in ACTIVE.

**Prioriteit:** **P0 — eerst corrigeren voordat VAULT verder wordt gecertificeerd.**

## 4. Cross-document conformance

Per agent bestaan inmiddels minimaal deze lagen:

1. `ACTIVE/` — agentcontract;
2. `RUNBOOKS/` — workflowuitvoering;
3. `CM_AGENT_BUILD_SPECS.md` — technische inrichting;
4. `OPERATING_PROMPTS/` — AI operating prompt;
5. `CERTIFICATION/` — readiness/evidence.

Deze structuur is logisch en moet worden behouden. De oplossing is niet om elk document dezelfde 18 headings te geven; de oplossing is dat alle onderliggende documenten minimaal voldoen aan de eisen die voor hun laag in v2.0 zijn vastgelegd en ACTIVE nooit tegenspreken.

## 5. Remediationvolgorde

### P0 — vóór verdere autonomy/production
1. Corrigeer VAULT automation-conflict.
2. Voeg per agent capability state toe voor materiële tools/automations.
3. Maak permissions expliciet: autonomous READ / autonomous WRITE / approval-WRITE / forbidden.
4. Leg evidence-objecten vast per write.
5. Maak duidelijk welke tools werkelijk connected zijn versus alleen ontworpen.
6. Leg `run_id`/trace als target execution contract vast.

### P1 — execution hardening
1. Harmoniseer ACTIVE ↔ RUNBOOK ↔ BUILD SPEC ↔ OPERATING PROMPT.
2. Voeg monitoring/error/fallback per kritieke capability toe.
3. Voeg execution-quality KPI's toe.
4. Maak source-of-truth en evidence per workflow controleerbaar.

### P2 — schaal naar autonomy C
1. Automatische auditlog/event mirror.
2. ChatGPT control/approval cockpit.
3. Selectieve autonome writes na Level 3 evidence.
4. Continue conformance checks in CI/GitHub.

## 6. Definition of Done voor harmonisatie

Een agent is v2-documentair conform wanneer:

- 18/18 ACTIVE-secties aanwezig zijn;
- alle v2 minimumeisen voor de relevante secties expliciet zijn of canoniek worden verwezen;
- geen capability/statusconflict bestaat tussen ACTIVE, RUNBOOK, BUILD SPEC, scenario-register en certification;
- tools/connecties/permissions/actions/evidence aantoonbaar zijn;
- planned/designed niet als live is geformuleerd;
- production claims overeenkomen met certification evidence;
- P0 gaps zijn gesloten.

**Deze audit verleent geen production approval.**

## 7. Remediationstatus na canonicalization

De P0-documentconflicten zijn op 2026-08-11 gesloten:

- `CM VAULT V1` is repositorybreed canoniek `PAUSED`, read-only en uitsluitend inspecterend/rapporterend; VAULT heeft `FORBIDDEN` op foldermutaties.
- Folder create/rename/move is toegewezen aan FLOW, een approved script en een approval-gate.
- `AGENT_CAPABILITY_REGISTER.md` legt centraal de verplichte connection states, permissions, actions, capability states, evidence/run-ID en failure policy vast.
- ACTIVE, RUNBOOKS, build specs, operating prompts, certification en scenario-map blijven afzonderlijke lagen en verwijzen naar dezelfde runtimegrens.

**Conformance verdict na remediation:** `PASS WITH REMEDIATION`. Dit verleent geen production approval en maakt geen ontworpen of gepauzeerde capability live.

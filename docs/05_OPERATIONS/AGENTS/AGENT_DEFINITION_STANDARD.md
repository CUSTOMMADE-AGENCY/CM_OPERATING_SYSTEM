# AGENT DEFINITION STANDARD

> Versie: v2.0 · Status: **PROPOSED — GOVERNANCE CHANGE** · Datum: 2026-08-11
> Eigenaar: CM CONTROL AGENT · Beheer: CM VAULT AGENT · Bouw: CM FLOW AGENT
> Repo: `CUSTOMMADE-AGENCY/CM_OPERATING_SYSTEM`
>
> Afgeleid van de canonieke architectuurlaag `docs/05_OPERATIONS/AGENTS/CM_AGENT_ARCHITECTURE.md`.
> Dit document mag die architectuur, responsibility matrix, handoff matrix of geaccepteerde ADR's niet tegenspreken.

## Doel

Deze standaard legt het verplichte minimumformat én de minimale uitvoerbaarheidseisen vast voor elke CM_OS-agentdefinitie.

**Harde regel 1: geen agent zonder deze 18 secties.** Een agentdefinitie is pas compleet wanneer alle 18 secties in onderstaande volgorde aanwezig en inhoudelijk ingevuld zijn.

**Harde regel 2: ontworpen capability is niet hetzelfde als live capability.** Een agent mag een tool, automation, workflow of permission pas als operationeel/live claimen wanneer daarvoor technisch bewijs bestaat in build-, test- en certificeringsdocumentatie.

**Harde regel 3: geen capability-claim zonder traceerbaarheid.** Iedere uitvoerende capability moet terug te leiden zijn naar trigger, bron, tool/action, permission, outputlocatie, evidence en control/quality check.

## Toepassing

- Geldt voor alle agentdefinities onder `docs/05_OPERATIONS/AGENTS/ACTIVE/`.
- De ACTIVE-definitie is het canonieke agentcontract: wat de agent is, bezit, mag en niet mag.
- `CM_FLOW_AGENT.md` blijft de referentie-implementatie voor technische hardheid; alle andere agents moeten minimaal dezelfde controleerbaarheid halen binnen hun eigen domein.
- Per-agent runbook, build spec, operating prompt en certificeringsdossier mogen de ACTIVE-definitie aanvullen maar nooit tegenspreken.
- Wijzigingen aan een agentdefinitie vereisen Pull Request en Sophia approval conform de LOCKED architectuur.
- Entiteit: uitsluitend CUSTOMMADE AGENCY. EXTERNE_ENTITEIT-data, EXTERNE_ENTITEIT-workflows en EXTERNE_ENTITEIT-governance mogen niet stilzwijgend in CM-agentdefinities worden opgenomen.

## Capability states

Iedere materiële tool-, automation- of workflow-capability gebruikt minimaal één van deze staten:

| State | Betekenis |
|---|---|
| `DESIGNED` | Capability is gedocumenteerd maar technisch nog niet bewezen. |
| `CONNECTED` | Benodigde connector/toegang bestaat en is technisch bereikbaar. |
| `TESTED` | Capability is met geregistreerde test-evidence gevalideerd. |
| `PROVEN LIVE` | Capability is production approved, gemonitord en heeft echte run-evidence. |
| `PAUSED` | Capability was ingericht maar is bewust niet actief. |
| `BLOCKED` | Capability kan niet veilig/technisch worden uitgevoerd; oorzaak is vastgelegd. |

Een ACTIVE-agentbestand moet bij materiële capabilities duidelijk maken welke status geldt, of verwijzen naar het canonieke register waar die status staat.

## De 18 verplichte secties — v2.0 minimumeisen

| # | Sectie | Verplichte inhoud |
|---|---|---|
| 01 | Missie | Kernvraag, bestaansreden en beoogde business-/governance-uitkomst. |
| 02 | Functie | Concrete rol binnen CM_OS, primair domein, laag en expliciete afbakening t.o.v. andere agents. |
| 03 | Karakter | Toon, houding, risicoprofiel en beslisstijl binnen scope. |
| 04 | Verantwoordelijkheden | Afgebakende ownership-lijst; wat de agent bezit, uitvoert, bewaakt en expliciet niet bezit. |
| 05 | Mandaat | Minimaal vier categorieën: **autonomous READ**, **autonomous WRITE**, **approval-required WRITE**, **verboden**. Approval-owner en autonomy level moeten expliciet zijn. |
| 06 | Tools | Per tool minimaal: rol, connector/toegang, capability state, READ/WRITE-rechten, toegestane concrete acties en domeingrens. `Tool genoemd` betekent niet automatisch `connected`. |
| 07 | Automations | Per relevante automation: naam/ID, trigger, owner, state (`DESIGNED/CONNECTED/TESTED/PROVEN LIVE/PAUSED/BLOCKED`), input, action, output, logging, fallback en monitoring-owner. |
| 08 | Triggers | Exacte event/timed/manual trigger, bronsysteem, bronobject en vereiste preconditions. |
| 09 | SOP's | Alleen canonieke SOP-/governanceverwijzingen; conflictroute bij tegenstrijdige bronnen. |
| 10 | Workflows | Minimaal: trigger → preconditions/input → tool/actions → decision/guardrail → approval → output → evidence → QC → exception/escalation → DoD. Kernworkflows mogen naar een runbook verwijzen mits de ACTIVE-definitie scope/ownership correct samenvat. |
| 11 | Templates | Canonieke templates, owner, outputlocatie en status; geen dubbele mastertemplates. |
| 12 | Escalaties | Trigger voor escalatie, ontvanger, vereiste context/evidence, safe-stop-regel en return-to-owner. |
| 13 | KPI's | Business-/operationele KPI's én execution-quality KPI's zoals owner/deadline coverage, unauthorized writes, missing evidence, failures zonder opvolging. |
| 14 | Samenwerking | Inbound/outbound handoffs, responsibility boundaries, source-of-truth handoff en welke agent inhoudelijk beslist. |
| 15 | Documentatie | Outputlocaties én audit/evidence-model: waar werk terug te vinden is, welke object-ID's/links/logs uitvoering bewijzen, welke AS_BUILT-/registers worden bijgewerkt en wie controleert. |
| 16 | Changelog | Versie, datum, wijziging, reden en waar relevant PR/ADR-reference. |
| 17 | Roadmap | Alleen geplande capabilities; geplande items mogen niet als live worden geformuleerd. Vermeld target state en dependency. |
| 18 | Definition of Done | Minimaal: juiste owner/scope; verplichte secties compleet; tools/permissions aantoonbaar; workflow-evidence; QC; logging; failuresafe; certificeringsstatus; geen production-claim zonder geldige Level 3-gates. |

## Sectie 06 — Tools: verplichte toolmatrix

Iedere agentdefinitie moet voor materiële tools minimaal deze informatie bevatten of verwijzen naar een canonieke build spec die dit bevat:

| Veld | Verplicht |
|---|---|
| Tool / systeem | Ja |
| Rol voor de agent | Ja |
| Connector / toegang | Ja — direct, via FLOW/owner-agent, API, Make, Apps Script, handmatig of `niet connected` |
| Capability state | Ja |
| READ actions | Ja |
| WRITE actions | Ja |
| Approval-required actions | Ja indien van toepassing |
| Verboden actions | Ja waar relevant |
| Source of Truth? | Ja/nee + domein |
| Evidence bij write | Object-ID, URL, revision, message-ID, task-ID, commit/PR, run-ID of gelijkwaardig |

## Sectie 07 — Automations: verplichte automationmatrix

Een automation mag alleen `PROVEN LIVE` heten wanneer minimaal bekend en aantoonbaar is:

- scenario/script/workflow-ID;
- trigger en preconditions;
- inputvelden en dataminimalisatie;
- concrete acties/writes;
- owner-agent en technical owner;
- approval rule;
- run logging / run-ID;
- error handling en retry;
- fallback;
- rollback/safe-stop waar muterend;
- monitoring en alerting;
- test-evidence;
- production approval.

## Sectie 10 — Workflow execution contract

Iedere kernworkflow moet technisch controleerbaar zijn met minimaal deze keten:

`Trigger → Agent → Input Source → READ → Decision Rule → Approval → Tool Action → WRITE Result → Evidence → QC → Log → Final Status`

Voor iedere materiële run moet uiteindelijk een unieke `run_id` of gelijkwaardige trace-reference kunnen bestaan. Waar de huidige tooling dit nog niet ondersteunt, wordt dit als gap gemarkeerd en niet als bestaande capability voorgesteld.

## Source of Truth en bewijs

Iedere agentdefinitie benoemt voor zijn domein de relevante source(s) of truth. Minimaal gelden de CM-basisregels:

- GitHub = governance, architectuur, SOP/system documentation.
- Moneybird = financiële waarheid binnen het MONEY-domein.
- Google Drive = document-/bewijsopslag volgens VAULT-governance.
- ClickUp = uitvoeringsstatus, owner, deadline, Waiting-On en operationele taakstatus.
- Gmail = correspondentie/bewijs, niet de primaire taakstatus.
- ChatGPT/Claude = analyse/werklaag; geen officiële state/source of truth zonder opslag in een canoniek systeem.

Een Google Sheet/control dashboard mag een **mirror/control view** zijn, maar mag niet stilzwijgend een nieuwe primaire waarheid creëren.

## Conformance rule voor overige per-agent bestanden

Per agent geldt de volgende documenthiërarchie:

1. `ACTIVE/CM_<AGENT>_AGENT.md` — canoniek agentcontract.
2. `RUNBOOKS/CM_<AGENT>_RUNBOOK.md` — operationele uitvoering.
3. `CM_AGENT_BUILD_SPECS.md` — technische inrichting/connecties/permissions.
4. `OPERATING_PROMPTS/CM_<AGENT>_PROMPT.md` — AI-instructie; compact maar ondergeschikt.
5. `CERTIFICATION/AGENT_PASSPORT_CM_<AGENT>.md` + evidence — bewijs van readiness/production status.

**AGENT CONFORMANCE RULE:** geen onderliggend bestand mag een capability, tool, automation, permission, owner, workflow, source of truth of productionstatus claimen die in strijd is met ACTIVE of niet technisch/certificerend kan worden onderbouwd waar uitvoering wordt geclaimd.

## Minimum voor BUILD SPEC

Iedere agent-buildspec moet minimaal vastleggen:

`Context · Memory/State · Skill · Task/Lane · Connections · Permissions · Tools/Actions · Schedule/Triggers · Output Locations · Logging/Evidence · Monitoring · Guardrails/Approvals · Error/Retry/Fallback · Deployment/Capability State`.

## Minimum voor RUNBOOK

Iedere runbook moet minimaal bevatten:

- source hierarchy + conflict rule;
- CM-entiteitsscheiding;
- source-of-truth matrix;
- preflight;
- concrete workflowstappen;
- approval gates;
- Waiting-On/handoffs;
- output- en evidence-locaties;
- logging/audit/idempotency;
- exceptions/failure handling;
- QC/KPI's;
- production-readiness gate;
- Definition of Done.

## Minimum voor OPERATING PROMPT

De prompt:

- identificeert agent + scope;
- verwijst naar ACTIVE, RUNBOOK en BUILD SPEC als hogere bronnen;
- bevat kernmandaat en stop/approval-regels;
- mag geen extra permissions verzinnen;
- mag een `DESIGNED` capability niet als live formuleren;
- moet bij ontbrekende/tegenstrijdige bron veilig stoppen en escaleren.

## Minimum voor CERTIFICATION

Production approval vereist de canonieke certificeringsgates. Minimaal moeten echte evidence bestaan voor governance, documentatie, techniek, functionele test, red team, approval en monitoring, plus vereiste score/paspoort. Geen test = geen PASS; geen production approval = geen `PROVEN LIVE`.

## Volgordevoorschrift

De 18 ACTIVE-secties worden altijd genummerd `01` t/m `18` en in bovenstaande volgorde opgenomen. Een sectie mag niet worden overgeslagen. Indien iets nog niet van toepassing of nog niet gebouwd is, staat expliciet `N.v.t.`, `DESIGNED`, `BLOCKED` of een andere geldige state met reden — nooit impliciete leegte.

## Relatie tot governance

- Secties 04, 05 en 14 moeten exact aansluiten op `CM_AGENT_ARCHITECTURE.md`, `AGENT_RESPONSIBILITY_MATRIX.md` en `AGENT_HANDOFF_MATRIX.md`.
- Autonomiegrenzen in sectie 05 volgen `AI_AUTONOMY_LEVELS.md`.
- Escalatiepaden in sectie 12 volgen `ESCALATION_PROTOCOLS.md`.
- Productionstatus volgt `AGENT_CERTIFICATION_STANDARD.md` en het certificeringsdossier.
- ClickUp-ownership/structuur volgt de geaccepteerde canonieke ADR's en system docs.
- Bij conflict wint de hogere governancebron; de agent stopt de conflicterende uitvoering en escaleert.

## Conformance beoordeling

Gebruik vier resultaten:

- `PASS` — voldoet aantoonbaar aan de v2.0 minimumeis.
- `PARTIAL` — kern aanwezig maar bewijs/detail ontbreekt.
- `FAIL` — vereiste ontbreekt of is in strijd met governance.
- `N/A` — aantoonbaar niet van toepassing.

Een agent kan structureel 18/18 secties hebben en toch `PARTIAL` zijn op v2.0 wanneer connections, permissions, evidence of productionstatus onvoldoende expliciet zijn.

## Roadmap

| Fase | Actie | Status |
|---|---|---|
| 1 | v2.0 standaard voorstellen via branch + PR | In uitvoering |
| 2 | Conformance-audit alle 8 ACTIVE-agents | In uitvoering |
| 3 | Gaps per agent prioriteren: P0 permissions/evidence, P1 workflows/monitoring, P2 optimalisatie | Gepland |
| 4 | Agentbestanden harmoniseren via afzonderlijke gecontroleerde commits/PR's | Gepland |
| 5 | Certificering en echte production evidence per agent | Gepland |

## Changelog

| Datum | Versie | Wijziging | Reden |
|---|---|---|---|
| 2026-07-02 | v1.0 | Eerste vastlegging 18-sectie agentstandaard. | Uniform, compleet en controleerbaar format voor alle CM_OS-agents. |
| 2026-08-11 | v2.0 | 18-sectiestructuur behouden; minimumeisen uitgebreid met capability states, connections, permissions, tool actions, evidence, execution contract, logging, monitoring, conformance voor runbook/build spec/prompt/certification en harde scheiding tussen designed en proven live. | Agents moeten niet alleen goed beschreven zijn, maar technisch controleerbaar, auditable en veilig uitbreidbaar van autonomie B naar C. |

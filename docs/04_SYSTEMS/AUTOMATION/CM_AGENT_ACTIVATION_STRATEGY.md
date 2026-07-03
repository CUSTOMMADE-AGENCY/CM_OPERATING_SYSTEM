# CM AGENT ACTIVATION STRATEGY

> Versie: v1.1 · Status: Concept · Datum: 2026-07-03
> Eigenaar: CM CONTROL AGENT · Bouw: CM FLOW AGENT · Beheer: CM VAULT AGENT
>
> **Afgeleid document.** Leidend zijn `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md`
> (GOVERNANCE LOCKED) en `docs/04_SYSTEMS/MAKE_SCENARIO_MAP.md`. Dit document mag
> die niet tegenspreken; het maakt de bestaande Build-fases operationeel.

## Doel

Vastleggen hoe de acht CM_OS-agents van manuele rollen naar proactief, getriggerd
werk gaan — en welke techniek (Apps Script of Make) daarvoor per taak het slimst
is. De vraag die dit beantwoordt: *hoe laten we de agents op hoog niveau sterker
werken, en is Apps Script + Google Workspace slim om in te zetten?*

## Kernprobleem

De agents zijn goed gedefinieerd maar werken nu volledig **push-based**: er start
niets vanzelf. De kracht zit in **pull-based** werken — agents signaleren en
handelen zelfstandig binnen hun scope en autonomy level, met approval-gates voor
alles wat datamuterend of extern is.

## Activatievolgorde = bestaande Build-fases

Dit is geen nieuw schema; het maakt de Build-fases uit de architectuur concreet.

### Build-fase 1 — Infrastructuur (CM FLOW + CM VAULT)
Fundament eerst: het automatiseringsplatform en de Drive-waarheid.
- **CM VAULT V1** (Make) live: wekelijkse Drive-structuurcontrole.
- Apps Script-basis (`scripts/google-drive/`) beheerd en gedocumenteerd.
- CM FLOW richt de trigger-laag in waarop fase 2 draait.

### Build-fase 2 — Executie (OPS, MONEY, LEGAL, SOCIAL, PROSPECT)
Per domein timed en event triggers, binnen Autonomy Level (geen datamutatie of
externe communicatie zonder Sophia approval):
- **CM OPS** — wekelijkse ClickUp-deadlinereview; artist/client onboarding-triggers.
- **CM MONEY** — maandelijkse/wekelijkse Moneybird open-items check.
- **CM LEGAL** — signalering op contract- en rechtenvervaldata.
- **CM SOCIAL** — content calendar reminders.
- **CM PROSPECT** — pipeline follow-up reminders.

### Build-fase 3 — Sturing (CM CONTROL)
- Wekelijkse **geconsolideerde agent-digest** naar Sophia (één mail, niet per agent).
- Blockers en REVIEW_REQUIRED-items komen automatisch als ClickUp-taak bij Sophia.

#### CM CONTROL GitHub Activation

Dit operationaliseert de bestaande agent activation strategy voor de GitHub-source-of-truth.
Het introduceert **geen nieuwe governance, geen nieuwe agentarchitectuur en geen extra
orchestration layer**. CM CONTROL blijft controleren (niet bouwen, niet mergen); leidend
blijven `CM_AGENT_ARCHITECTURE.md`, `AGENT_RESPONSIBILITY_MATRIX.md`,
`AGENT_HANDOFF_MATRIX.md`, `GOVERNANCE_RULES.md`, `CM_CONTROL_AUDIT_STANDARD.md`,
`ESCALATION_PROTOCOLS.md` en `AGENT_COMMUNICATION_PROTOCOL.md`. Deze sectie beschrijft
alleen wélke bestaande audits CM CONTROL op wélk GitHub-event uitvoert en hoe het resultaat
wordt teruggeschreven. Activatie zelf gebeurt pas na expliciete Sophia-approval (dit
document blijft Concept; geen live automation).

##### Te beoordelen GitHub-events en bijbehorende audits

CM CONTROL beoordeelt uitsluitend onderstaande events. De audits per event zijn de
verplichte onderdelen uit het auditritme van `CM_CONTROL_AUDIT_STANDARD.md` — niet nieuw,
alleen toegepast op het event.

| GitHub-event | Uit te voeren audits (uit CM_CONTROL_AUDIT_STANDARD) |
|---|---|
| **PR opened/updated** | Repository Health · Documentation Audit · Source of Truth Audit · Broken References · Duplicate Documents/SOP's/Playbooks/Templates · Missing Owners. Aangevuld met de event-specifieke audits hieronder op basis van de gewijzigde bestanden. |
| **Issue opened** | Decision Audit (is een besluit nodig?) · Responsibility Matrix Audit · Missing Owners · Duplicate-check (bestaat issue/dossier al). Triage naar eigenaar-agent of Waiting-On-Sophia. |
| **Review requested** | De auditset die past bij de gewijzigde scope (governance-, agent- of architectuurwijziging hieronder); levert altijd een expliciet verdict. |
| **ADR added/changed** | ADR Audit · Decision Audit · Locked Decisions Audit · Architecture Audit · Source of Truth Audit · Executive Risk Score · Board Recommendation. |
| **Governance file changed** (`docs/00_GOVERNANCE/**`) | Decision Audit · Locked Decisions Audit · ADR Audit · Documentation Audit · Source of Truth Audit · Executive Risk Score (= het ritme "bij elke governancewijziging"). |
| **REVIEW_REQUIRED label** | Voer de volledige toepasselijke auditset uit en produceer een verdict vóórdat merge is toegestaan. |

Voor agentwijzigingen (`docs/07_AI_AGENTS/**`) voegt CM CONTROL de Agent Audit, Agent
Certification Audit, Responsibility Matrix Audit en Missing Owners toe; voor architectuur-
of automatiseringswijzigingen de Architecture Audit, Automation Health en CI Health. Dit
volgt één-op-één het auditritme van de standaard.

##### Verdict — wanneer CM CONTROL wat geeft

De verdicts zijn de bestaande approval-/statuswaarden uit `AGENT_COMMUNICATION_PROTOCOL.md`
(`APPROVAL_RESPONSE`: GO / NO_GO / voorwaarden; status `REVIEW_REQUIRED`) en de Board
Recommendation uit de auditstandaard. Er wordt geen nieuwe verdict-taal geïntroduceerd.

| Verdict | CM CONTROL geeft dit wanneer | Mapping |
|---|---|---|
| **GO** | Alle toepasselijke audits PASS; geen governance-, source-of-truth- of duplicatieconflict; wijziging valt binnen bestaande, gelockte kaders. | `APPROVAL_RESPONSE = GO` · Board: approve |
| **CONDITIONAL GO** | Inhoudelijk akkoord, maar met afgebakende, niet-blokkerende remediation (bv. indexering, naamgeving, ontbrekende referentie of reviewdatum). Merge pas na afgeronde voorwaarden. | `APPROVAL_RESPONSE = voorwaarden` · Board: approve with remediation |
| **REVIEW_REQUIRED** | Er is verplichte review nodig vóór merge/activatie: ADR ontbreekt bij structurele keuze, agentimpact onduidelijk, of scope raakt meerdere owners. | Status `REVIEW_REQUIRED` · Board: defer |
| **NO GO** | Conflict met een locked decision, governanceschending, tweede bron van waarheid, of ontbrekende approval-gate die niet binnen normale uitvoering oplosbaar is. | `APPROVAL_RESPONSE = NO_GO` · Board: reject |

CM CONTROL bereidt Go/No-Go voor; de **finale** GO op governance, strategie, legal, finance
of een uitzondering op een approval-gate blijft bij Sophia (zie escalatie hieronder).

##### Routering naar CM VAULT

CM CONTROL routeert (via een `HANDOFF`) naar CM VAULT wanneer de bevinding **documentatie-
of Drive-beheer** is in plaats van een besluit: ontbrekende indexering/overview-koppeling,
naamgeving of folderplaatsing, ontbrekende metadata of reviewdatum, AS_BUILT- of
template-registerupdate, en documentsynchronisatie tussen GitHub en Drive. Dit volgt de
bestaande samenwerking "CM VAULT — governance-updates en documentatieopdrachten".

##### Escalatie naar Sophia

CM CONTROL escaleert (via een `ESCALATION` + Waiting-On-Sophia-item) wanneer het verdict
buiten CONTROL's mandaat valt: governancewijziging, strategisch/juridisch/financieel
besluit, uitzondering op een approval-gate, een NO GO die een eigenaar betwist, of elke
merge/governance-lock — die blijven expliciet Sophia's beslissing. Bij twijfel: niet
uitvoeren, vastleggen, escaleren (conform `ESCALATION_PROTOCOLS.md`).

##### Terugschrijven naar GitHub

CM CONTROL schrijft het verdict terug met bestaande GitHub-middelen; elk mapt op een
berichttype uit `AGENT_COMMUNICATION_PROTOCOL.md`. CM CONTROL **mergt nooit** en wijzigt
geen inhoud in het domein van een andere agent.

| GitHub-mechanisme | Berichttype | Wanneer |
|---|---|---|
| **PR review** (approve / comment / request changes) | `REVIEW` + `APPROVAL_RESPONSE` | Formeel verdict op een PR: GO = approve, NO GO = request changes. |
| **PR comment** | `RESPONSE` / `REVIEW` | Auditbevinding, CONDITIONAL GO-voorwaarden of toelichting bij het verdict. |
| **Label** (`REVIEW_REQUIRED`, `GO`, `NO_GO`, `WAITING_ON_SOPHIA`) | `STATUS` | Machineleesbare statusmarkering die merge gatet en de digest voedt. |
| **Issue comment** | `RESPONSE` / `HANDOFF` | Triage-uitkomst, toewijzing aan eigenaar-agent of VAULT-routering. |
| **Commit status / check** | `STATUS` | Niet-blokkerende signalering naast de bestaande CI-gate; vervangt CI niet. |

Alle write-backs zijn signalerend of gatend, nooit muterend of mergend: het bewaakt de
gate, Sophia en de eigenaar-agents nemen het besluit.

## Trigger-typen (binnen autonomy-grenzen)

| Type | Voorbeeld | Grens |
|---|---|---|
| Timed | Wekelijkse Drive-audit, maandelijkse finance-check | Alleen lezen/rapporteren of aanmaken; geen datamutatie zonder approval |
| Event | Nieuwe artist in ClickUp → Drive-mappen | Alleen binnen goedgekeurde scope; handoff conform matrices |
| Handmatig | Owner start scenario bewust | Vooraf gedefinieerde workflow met log |

Triggers verzinnen geen nieuwe bevoegdheden; ze volgen de bestaande handoffs uit
`AGENT_HANDOFF_MATRIX.md` en de autonomy levels uit `AI_AUTONOMY_LEVELS.md`.

## Apps Script vs Make — beslisboom

**Ja, Apps Script + Google Workspace is slim** — maar met duidelijke grenzen.
CM FLOW AGENT kiest per taak:

| Taak | Tool | Reden |
|---|---|---|
| Drive-mappen aanmaken/auditen | **Apps Script** | Native `DriveApp`, gratis, geen operatie-verbruik |
| Google Sheets-rapportage | **Apps Script** | Native `SpreadsheetApp` |
| Scheduled checks (wekelijks/maandelijks) | Beide | Apps Script Triggers gratis; Make Scheduler verbruikt operaties |
| Cross-system handoff (Drive → ClickUp → Gmail) | **Make** | Gebouwd voor multi-system routing |
| Moneybird / ClickUp integratie | **Make** | Apps Script heeft geen SDK hiervoor |
| Gmail-notificatie vanuit Drive-event | Beide | Keuze op complexiteit |

### Hybride architectuur
```
Apps Script → Drive-native taken (folders, inventory, audit, Sheets-rapportage)
Make        → Cross-system handoffs en triggers buiten het Google-ecosysteem
ClickUp     → Taakregistratie en ownership
Gmail       → Rapportage en communicatie
```

## Verwijzingen

- `docs/07_AI_AGENTS/CM_AGENT_ARCHITECTURE.md` (leidend)
- `docs/04_SYSTEMS/MAKE_SCENARIO_MAP.md`
- `docs/07_AI_AGENTS/AGENTS/CM_FLOW_AGENT.md`
- `docs/07_AI_AGENTS/AGENTS/CM_CONTROL_AGENT.md`
- `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md`
- `docs/07_AI_AGENTS/AGENT_COMMUNICATION_PROTOCOL.md`
- `docs/07_AI_AGENTS/ESCALATION_PROTOCOLS.md`
- `docs/07_AI_AGENTS/AGENT_HANDOFF_MATRIX.md`
- `scripts/google-drive/` (bestaande Apps Script-basis)

## Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-07-02 | v1.0 | Eerste vastlegging activatiestrategie + Apps Script-vs-Make beslisboom. |
| 2026-07-03 | v1.1 | Build-fase 3 uitgebreid met sectie "CM CONTROL GitHub Activation" (events, audits, verdicts, VAULT-routering, Sophia-escalatie, GitHub-write-back). Operationaliseert bestaande strategy; geen nieuwe governance of architectuur. |

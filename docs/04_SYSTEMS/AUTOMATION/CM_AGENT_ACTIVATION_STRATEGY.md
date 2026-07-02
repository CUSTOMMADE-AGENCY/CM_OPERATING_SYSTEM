# CM AGENT ACTIVATION STRATEGY

> Versie: v1.0 · Status: Concept · Datum: 2026-07-02
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
- `scripts/google-drive/` (bestaande Apps Script-basis)

## Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-07-02 | v1.0 | Eerste vastlegging activatiestrategie + Apps Script-vs-Make beslisboom. |

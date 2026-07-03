# CM CONTROL GITHUB ACTION v1

> Versie: v1.0 · Status: **Concept — niet geactiveerd** · Datum: 2026-07-03
> Eigenaar: CM CONTROL AGENT · Bouw: CM FLOW AGENT · Beheer: CM VAULT AGENT
>
> **As-built.** Operationaliseert de sectie "CM CONTROL GitHub Activation" uit
> `CM_AGENT_ACTIVATION_STRATEGY.md`. Introduceert geen nieuwe governance of
> agentarchitectuur; het voert de bestaande strategy technisch uit.

## Doel

Een GitHub Action die CM CONTROL een governance-review op een pull request laat
uitvoeren en één verdict — **GO / REVIEW REQUIRED / NO GO** — als PR-comment
terugschrijft. Advies-only: geen merge, geen push, geen bestandswijziging.

## Locatie en onderdelen

| Bestand | Rol |
|---|---|
| `.github/workflows/cm-control-review.yml` | Workflow: triggers, least-privilege permissions, enable-gate, roept de runner aan. |
| `.github/cm-control/config.json` | Governance-context (welke bestanden), model, diff-/token-limieten, write-back-opties. |
| `.github/cm-control/system-prompt.md` | Reviewer-instructie: toe te passen audits, verdict-regels, injectie-weerbaarheid. |
| `.github/cm-control/review.mjs` | Runner (Node 20+, zero dependencies): diff ophalen → OpenAI Responses API → verdict → PR-comment. |
| `.github/cm-control/README.md` | Technische setup- en activatiehandleiding. |

## Techniekkeuze

- **OpenAI Responses API** (`POST /v1/responses`) voor de review, zoals gevraagd.
- **Node 20+ met global `fetch`**, geen npm-dependencies — lean en onderhoudbaar.
- Write-back via de **GitHub REST API** met de standaard `GITHUB_TOKEN`.

## Verdict en routering

De verdicts en routes komen één-op-één uit de activation strategy:

- **GO** — alle toepasselijke audits PASS; past binnen gelockte kaders.
- **REVIEW REQUIRED** — verplichte menselijke review vóór merge.
- **NO GO** — conflict met locked decision, governanceschending of ontbrekende approval-gate.
- **→ CM VAULT** bij documentatie-/Drive-bevindingen; **→ Sophia** bij governance/approval-gate.

De audits volgen `CM_CONTROL_AUDIT_STANDARD.md`; de write-back-berichttypen volgen
`AGENT_COMMUNICATION_PROTOCOL.md`.

## Activatie (dormant by default)

Mergen activeert niets. De job draait uitsluitend wanneer:

1. Secret `OPENAI_API_KEY` is gezet (Actions → Secrets); en
2. Variabele `CM_CONTROL_REVIEW_ENABLED` = `true` (Actions → Variables).

Optioneel `CM_CONTROL_MODEL` als variabele om het model te overrulen.

## Beveiliging

- API-sleutel uitsluitend via **GitHub Secrets**; nooit gelogd.
- Permissions: `contents: read`, `pull-requests: write`, `issues: write`. Geen `contents: write`, geen merge.
- Governance-context uit de **base-ref**: een PR kan zijn eigen maatstaf niet wijzigen.
- PR-inhoud = **untrusted data**; prompt-injectie wordt genegeerd (leunt dan naar REVIEW REQUIRED / NO GO).
- Geen uitvoering van PR-code; fork-PR's (geen secrets) worden netjes overgeslagen.

## Foutafhandeling

Fouten worden gelogd, in de job-summary gezet en als PR-comment gemeld met advies tot
handmatige review. De check faalt zichtbaar maar blokkeert merge niet, tenzij bewust als
required check ingesteld.

## Reikwijdte v1 en vervolg

- **v1** dekt PR-events (opened/synchronize/reopened/labeled) en handmatige dispatch.
- Mogelijke v2: issue-triage, GitHub-labels als statusmodel, en een geconsolideerde
  digest richting Sophia — allemaal binnen dezelfde strategy, zonder nieuwe governance.

## Verwijzingen

- `docs/04_SYSTEMS/AUTOMATION/CM_AGENT_ACTIVATION_STRATEGY.md` (leidend)
- `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md`
- `docs/07_AI_AGENTS/AGENT_COMMUNICATION_PROTOCOL.md`
- `docs/07_AI_AGENTS/AGENTS/CM_CONTROL_AGENT.md`

## Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-07-03 | v1.0 | Eerste build van de CM CONTROL GitHub Action (workflow, OpenAI-runner, config, prompt, docs). Status Concept; niet geactiveerd. |

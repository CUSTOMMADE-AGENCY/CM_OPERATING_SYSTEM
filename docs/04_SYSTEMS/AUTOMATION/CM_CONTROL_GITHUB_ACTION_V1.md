# CM CONTROL GITHUB ACTION v1

> Versie: v1.2 · Status: **Concept — niet geactiveerd** · Datum: 2026-07-03
> Eigenaar: CM CONTROL AGENT · Bouw: CM FLOW AGENT · Beheer: CM VAULT AGENT
>
> **As-built.** Operationaliseert de sectie "CM CONTROL GitHub Activation" uit
> `CM_AGENT_ACTIVATION_STRATEGY.md`. Introduceert geen nieuwe governance of
> agentarchitectuur; het voert de bestaande strategy technisch uit.

## Doel

Een GitHub Action die CM CONTROL een governance-review op een pull request of issue
laat uitvoeren en één verdict — **GO / CONDITIONAL GO / REVIEW REQUIRED / NO GO** —
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

- **Provider-schakelaar** in `config.json`:
  - `github-models` (**default**) — gratis, rate-limited, via de ingebouwde `GITHUB_TOKEN`
    (permission `models: read`); OpenAI-compatibele chat/completions API; geen betaalde sleutel.
  - `openai` — betaald, `POST /v1/responses` (Responses API), vereist secret `OPENAI_API_KEY`.
- **Node 20+ met global `fetch`**, geen npm-dependencies — lean en onderhoudbaar.
- Write-back via de **GitHub REST API** met de standaard `GITHUB_TOKEN`.

## Verdict en routering

De verdicts en routes komen één-op-één uit de activation strategy:

- **GO** — alle toepasselijke audits PASS; past binnen gelockte kaders.
- **CONDITIONAL GO** — inhoudelijk akkoord met afgebakende, niet-blokkerende remediation.
- **REVIEW REQUIRED** — verplichte menselijke review vóór merge.
- **NO GO** — conflict met locked decision, governanceschending of ontbrekende approval-gate.
- **→ CM VAULT** bij documentatie-/Drive-bevindingen; **→ Sophia** bij governance/approval-gate.

Write-back-kanalen (advies, niet-blokkerend by default): comment (PR/issue), en optioneel
label, commit-status en een COMMENT-review. `allowBlockingReview` (default uit) laat
GO→approve / NO_GO→request-changes toe; standaard blijft alles advies.

De audits volgen `CM_CONTROL_AUDIT_STANDARD.md`; de write-back-berichttypen volgen
`AGENT_COMMUNICATION_PROTOCOL.md`.

## Activatie (dormant by default)

Mergen activeert niets. De job draait uitsluitend wanneer variabele
`CM_CONTROL_REVIEW_ENABLED` = `true` (Actions → Variables). Met de default provider
(GitHub Models) is dat de **enige** stap — geen secret nodig. Alleen bij provider
`openai` is daarnaast het secret `OPENAI_API_KEY` vereist. Optioneel `CM_CONTROL_MODEL`
als variabele om het model te overrulen.

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

## Reikwijdte (conform strategy v1.1)

- Events: `pull_request` (opened/synchronize/reopened/labeled/review_requested),
  `issues` (opened/labeled) en handmatige `workflow_dispatch`.
- Vier verdicts: GO / CONDITIONAL GO / REVIEW REQUIRED / NO GO.
- Write-back: comment, label, commit-status en COMMENT-review (advies, niet-blokkerend by default).
- Mogelijke v2: geconsolideerde digest richting Sophia — binnen dezelfde strategy, zonder nieuwe governance.

## Verwijzingen

- `docs/04_SYSTEMS/AUTOMATION/CM_AGENT_ACTIVATION_STRATEGY.md` (leidend)
- `docs/00_GOVERNANCE/CM_CONTROL_AUDIT_STANDARD.md`
- `docs/07_AI_AGENTS/AGENT_COMMUNICATION_PROTOCOL.md`
- `docs/07_AI_AGENTS/AGENTS/CM_CONTROL_AGENT.md`

## Changelog

| Datum | Versie | Wijziging |
|---|---|---|
| 2026-07-03 | v1.0 | Eerste build van de CM CONTROL GitHub Action (workflow, OpenAI-runner, config, prompt, docs). Status Concept; niet geactiveerd. |
| 2026-07-03 | v1.1 | Volledige conformiteit met CM_AGENT_ACTIVATION_STRATEGY v1.1: issue-triage + review_requested-trigger, verdict CONDITIONAL GO toegevoegd, en write-back-kanalen commit-status en COMMENT-review (niet-blokkerend by default). |
| 2026-07-03 | v1.2 | Provider-schakelaar toegevoegd; **GitHub Models** als gratis default (ingebouwde GITHUB_TOKEN, permission `models: read`) naast de betaalde OpenAI-provider. Activatie vergt met de default geen secret meer. |

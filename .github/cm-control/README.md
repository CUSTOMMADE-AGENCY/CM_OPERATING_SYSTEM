# CM CONTROL GitHub Action v1

Geautomatiseerde governance-review door CM CONTROL AGENT op pull requests. Operationaliseert de sectie **CM CONTROL GitHub Activation** uit `docs/04_SYSTEMS/AUTOMATION/CM_AGENT_ACTIVATION_STRATEGY.md`.

De Action laat een LLM (via de **OpenAI Responses API**) een PR of issue toetsen aan de CM-governance en schrijft één verdict terug: **GO / CONDITIONAL GO / REVIEW REQUIRED / NO GO**. Het is een **advies**: er wordt nooit gemerged, gepusht of een bestand gewijzigd.

## Onderdelen

| Bestand | Rol |
|---|---|
| `.github/workflows/cm-control-review.yml` | Workflow: triggers, permissions, enable-gate, roept het script aan. |
| `.github/cm-control/config.json` | Provider (github-models/openai), governance-context, model, diff-limieten, write-back-opties. |
| `.github/cm-control/system-prompt.md` | Reviewer-instructie (audits, verdict-regels, injectie-weerbaarheid). |
| `.github/cm-control/review.mjs` | Runner: diff ophalen → OpenAI → verdict → PR-comment. Zero dependencies (Node 20+). |

## Provider — gratis by default

De reviewer draait standaard op **GitHub Models** (gratis, rate-limited) via de ingebouwde `GITHUB_TOKEN` en de permission `models: read` — **geen betaalde sleutel nodig**. Alternatief kan `config.json` op provider `openai` (betaald, Responses API) worden gezet; dan is het secret `OPENAI_API_KEY` vereist.

| `config.provider` | Auth | Kosten | Model (default) |
|---|---|---|---|
| `github-models` (default) | ingebouwde `GITHUB_TOKEN` | gratis, rate-limited | `openai/gpt-4o` |
| `openai` | secret `OPENAI_API_KEY` | pay-per-use | `gpt-4.1` |

## Dormant by default — activatie

Mergen van deze PR activeert **niets**. De job draait alleen bij:

1. **Enable-variabele** — zet repository-variabele `CM_CONTROL_REVIEW_ENABLED` op `true` (*Settings → Secrets and variables → Actions → Variables*).
2. *(alleen bij provider `openai`)* Secret `OPENAI_API_KEY` toevoegen.
3. *(optioneel)* `CM_CONTROL_MODEL` als variabele om het model te overrulen.

Met de default provider is stap 1 de **enige** activatiestap. Zo gaat er niets live vóór akkoord.

## Werking

1. Trigger: `pull_request` (opened/synchronize/reopened/labeled/review_requested), `issues` (opened/labeled) of handmatig via `workflow_dispatch`.
2. De governance-context wordt uit de **base-ref** geladen, zodat een PR de maatstaf waarop hij wordt beoordeeld niet zelf kan wijzigen.
3. Het script haalt PR-metadata en -diff (of issue-metadata) op, stuurt governance + inhoud naar de OpenAI Responses API en vraagt om een JSON-verdict.
4. Het verdict wordt teruggeschreven als comment (bijgewerkt bij nieuwe commits, niet gedupliceerd). Optioneel via label, commit-status en een COMMENT-review.

## Verdict

- **GO** — alle toepasselijke audits PASS; past binnen gelockte kaders.
- **CONDITIONAL GO** — inhoudelijk akkoord met afgebakende, niet-blokkerende remediation (voorwaarden in de comment).
- **REVIEW REQUIRED** — verplichte menselijke review vóór merge (bv. ADR ontbreekt, onduidelijke agentimpact, meerdere owners).
- **NO GO** — conflict met een locked decision, governanceschending of ontbrekende approval-gate.

Het finale besluit op governance/strategie/legal/finance blijft bij **Sophia**; documentatie-/Drive-bevindingen routeren naar **CM VAULT**.

## Write-back-kanalen (niet-blokkerend by default)

| Kanaal | Config | Default |
|---|---|---|
| Comment (PR of issue) | `writeBack.postComment` | aan |
| Label (`cm-control:<verdict>`) | `writeBack.applyLabels` | uit |
| Commit-status (`statusContext`) | `writeBack.commitStatus` | uit |
| PR-review | `writeBack.postReview` | uit (event `COMMENT`) |

`writeBack.allowBlockingReview` (default uit) laat GO→approve / NO_GO→request-changes toe. **Laat dit uit** om merge niet te gaten; met de default blijven alle kanalen advies.

## Beveiliging

- De default provider (GitHub Models) gebruikt de ingebouwde `GITHUB_TOKEN` — geen extern secret. Bij provider `openai` staat `OPENAI_API_KEY` uitsluitend in **GitHub Secrets** en wordt nooit gelogd.
- Least-privilege permissions: `contents: read`, `pull-requests: write`, `issues: write`. Bewust **geen** `contents: write` en geen merge-rechten.
- De PR-inhoud wordt als **untrusted data** behandeld; de reviewer-instructie negeert ingesloten pogingen tot prompt-injectie en leunt dan naar REVIEW REQUIRED / NO GO.
- Er wordt geen PR-code uitgevoerd; alleen de base-ref (vertrouwd) wordt gecheckt en de diff als tekst gelezen.
- Fork-PR's hebben geen toegang tot secrets; de review wordt dan netjes overgeslagen.

## Foutafhandeling

Fouten (API, parsing, netwerk) worden gelogd, in de job-summary gezet en als comment op de PR gemeld met het advies handmatig te reviewen. De check faalt zichtbaar (`writeBack.failCheckOnError`), maar blokkeert merge niet tenzij je hem als required check instelt.

## Kosten beheersen

`config.json` begrenst `maxContextChars`, `maxDiffChars`, `maxFiles` en `maxOutputTokens`. Pas deze aan naar behoefte.

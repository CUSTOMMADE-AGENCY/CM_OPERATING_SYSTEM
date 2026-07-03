# CM CONTROL GitHub Action v1

Geautomatiseerde governance-review door CM CONTROL AGENT op pull requests. Operationaliseert de sectie **CM CONTROL GitHub Activation** uit `docs/04_SYSTEMS/AUTOMATION/CM_AGENT_ACTIVATION_STRATEGY.md`.

De Action laat een LLM (via de **OpenAI Responses API**) de PR toetsen aan de CM-governance en schrijft één verdict terug: **GO / REVIEW REQUIRED / NO GO**. Het is een **advies**: er wordt nooit gemerged, gepusht of een bestand gewijzigd.

## Onderdelen

| Bestand | Rol |
|---|---|
| `.github/workflows/cm-control-review.yml` | Workflow: triggers, permissions, enable-gate, roept het script aan. |
| `.github/cm-control/config.json` | Governance-context, model, diff-limieten, write-back-opties. |
| `.github/cm-control/system-prompt.md` | Reviewer-instructie (audits, verdict-regels, injectie-weerbaarheid). |
| `.github/cm-control/review.mjs` | Runner: diff ophalen → OpenAI → verdict → PR-comment. Zero dependencies (Node 20+). |

## Dormant by default — activatie in 3 stappen

Mergen van deze PR activeert **niets**. De job draait alleen als beide condities kloppen:

1. **Secret** — voeg `OPENAI_API_KEY` toe onder *Settings → Secrets and variables → Actions → Secrets*.
2. **Enable-variabele** — zet repository-variabele `CM_CONTROL_REVIEW_ENABLED` op `true` onder *Settings → Secrets and variables → Actions → Variables*.
3. *(optioneel)* `CM_CONTROL_MODEL` als variabele om het model te overrulen (default `gpt-4.1` uit `config.json`).

Zonder stap 1 en 2 blijft de workflow slapend. Zo gaat er niets live vóór akkoord.

## Werking

1. Trigger: `pull_request` (opened/synchronize/reopened/labeled) of handmatig via `workflow_dispatch`.
2. De governance-context wordt uit de **base-ref** geladen, zodat een PR de maatstaf waarop hij wordt beoordeeld niet zelf kan wijzigen.
3. Het script haalt PR-metadata en -diff op, stuurt governance + diff naar de OpenAI Responses API en vraagt om een JSON-verdict.
4. Het verdict wordt teruggeschreven als PR-comment (bijgewerkt bij nieuwe commits, niet gedupliceerd). Labels zijn optioneel (`writeBack.applyLabels`).

## Verdict

- **GO** — alle toepasselijke audits PASS; past binnen gelockte kaders.
- **REVIEW REQUIRED** — verplichte menselijke review vóór merge (bv. ADR ontbreekt, onduidelijke agentimpact, meerdere owners).
- **NO GO** — conflict met een locked decision, governanceschending of ontbrekende approval-gate.

Het finale besluit op governance/strategie/legal/finance blijft bij **Sophia**; documentatie-/Drive-bevindingen routeren naar **CM VAULT**.

## Beveiliging

- `OPENAI_API_KEY` staat uitsluitend in **GitHub Secrets** en wordt nooit gelogd.
- Least-privilege permissions: `contents: read`, `pull-requests: write`, `issues: write`. Bewust **geen** `contents: write` en geen merge-rechten.
- De PR-inhoud wordt als **untrusted data** behandeld; de reviewer-instructie negeert ingesloten pogingen tot prompt-injectie en leunt dan naar REVIEW REQUIRED / NO GO.
- Er wordt geen PR-code uitgevoerd; alleen de base-ref (vertrouwd) wordt gecheckt en de diff als tekst gelezen.
- Fork-PR's hebben geen toegang tot secrets; de review wordt dan netjes overgeslagen.

## Foutafhandeling

Fouten (API, parsing, netwerk) worden gelogd, in de job-summary gezet en als comment op de PR gemeld met het advies handmatig te reviewen. De check faalt zichtbaar (`writeBack.failCheckOnError`), maar blokkeert merge niet tenzij je hem als required check instelt.

## Kosten beheersen

`config.json` begrenst `maxContextChars`, `maxDiffChars`, `maxFiles` en `maxOutputTokens`. Pas deze aan naar behoefte.

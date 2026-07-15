# CM Source of Truth

## Doel

Dit document bepaalt welk systeem leidend is wanneer informatie op meerdere plaatsen voorkomt.

## Systeemhiërarchie

| Onderwerp | Leidend systeem |
|---|---|
| Governance, Workflows, SOPs, Playbooks en systeemdocumentatie | GitHub |
| Live client- en dealbestanden | Google Drive |
| Taken, Pipeline, owners en deadlines | ClickUp |
| Facturen, bonnen en financiële administratie | Moneybird |
| Correspondentie en communicatietemplates | Gmail |
| Automatiseringsuitvoering | Make |
| Analyse en concept-output | ChatGPT / Claude / Codex / Agents |

## Conflictregel

Wanneer systemen elkaar tegenspreken:

1. Controleer het leidende systeem uit bovenstaande tabel.
2. Controleer `DECISION_LOG.md`.
3. Controleer de actuele AS_BUILT-documentatie.
4. Escaleer structurele conflicten naar Sophia / CM CONTROL.
5. Pas gerelateerde documentatie gezamenlijk aan via branch en Pull Request.

## Grenzen

- AI-output is nooit zelfstandig leidend.
- Google Drive is geen governancebron.
- ClickUp is geen documentatiebron.
- Moneybird is uitsluitend leidend voor financiële waarheid.
- Gmail is uitsluitend leidend voor communicatie en bewijs van correspondentie.

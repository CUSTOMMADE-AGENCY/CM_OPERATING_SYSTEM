# NAAMGEVINGSCONVENTIES

## DOEL

Naamgeving moet documenten vindbaar maken zonder dubbele of ongecontroleerde varianten te creëren.

## FOLDER NAMING

- Alle GitHub folders moeten uppercase zijn.
- Gebruik genummerde prefixes voor gecontroleerde navigatie: `01_MASTER_BOUTIQUE`.
- Gebruik beschrijvende zelfstandige naamwoorden, geen interne afkortingen zonder context.
- Maak geen dubbele folders voor hetzelfde proces of dezelfde lane.

Correct:

- `00_GOVERNANCE`
- `03_SHARED_SERVICES`
- `04_SYSTEMS`

Incorrect:

- `00_governance`
- `03_shared_services`
- `04_systems`

## DOCUMENT TITLES

- Documenttitels moeten uppercase headings gebruiken.
- De eerste heading van een markdown document is de documenttitel.
- Houd titels kort, duidelijk en procesgericht.

Correct:

```markdown
# AGILE OPERATING CYCLE
# GOVERNANCE RULES
# CLICKUP STRUCTURE
```

Incorrect:

```markdown
# Agile Operating Cycle
# Governance-regels
# ClickUp Structure
```

## FILE NAMING

- Behoud bestaande bestandsnamen wanneer content in-place wordt bijgewerkt.
- Gebruik korte, duidelijke namen die het proces of de deliverable beschrijven.
- Gebruik geen `final_final`, `new`, `copy`, `old` of willekeurige datumvarianten.
- Gebruik GitHub-commits en pull requests voor version control.

## SYSTEM BOUNDARIES

- `docs/` is voor documentatie.
- `scripts/` is voor executable code.
- Google Drive is voor live clientbestanden en deliverables.
- ClickUp is voor execution, tasks en pipelines.

## TAAL

Interne documenttitels en headings zijn Nederlands of officiële CM-termen. Officiële CM-termen blijven exact behouden.

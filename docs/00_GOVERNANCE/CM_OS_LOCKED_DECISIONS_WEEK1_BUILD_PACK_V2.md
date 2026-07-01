# CM_OS — Locked Decisions + Week 1 Build Pack (v2)

## Status

LOCKED per 2026-06-15.

Dit document is leidende governance voor Week 1 van het CM Operating System. Alle operationele inrichting, AI-agent output, Drive-structuur, ClickUp-mapping, financiële bronkeuzes en shim-resolutie moeten hiermee in lijn zijn.

## Locked decisions

### 1. Drive briefing-roots zijn leidend

De Google Drive briefing-roots zijn leidend voor operationele client-, case- en projectdossiers. GitHub blijft de schone source of truth voor governance, SOPs, Playbooks, templates en systeemdocumentatie, maar Drive is de operationele working environment voor live dossiers, documenten, deliverables en rapportages.

### 2. Artistdossiers blijven onder Artist Management

`02_ARTIST_MANAGEMENT` blijft de primaire operationele Drive-locatie voor alle artiestendossiers. Artists worden niet gemigreerd naar `03_CLIENTS`. `03_CLIENTS` bevat uitsluitend merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.

### 3. ClickUp gebruikt één CM Space met folders

ClickUp gebruikt één centrale CM Space. Binnen die Space worden folders gebruikt voor business lanes, projecten, clients, pipelines en operationele uitvoering. Er worden geen parallelle CM Spaces aangemaakt voor dezelfde governance- of uitvoeringslaag.

### 4. Moneybird is financiële waarheid

Moneybird is de financiële waarheid voor facturatie, omzet, kosten, debiteuren, crediteuren en financiële rapportage. Andere systemen mogen financiële referenties bevatten, maar mogen Moneybird niet vervangen als source of truth.

### 5. Pure shims blijven behouden zolang actief gelinkt

Pure shims blijven behouden zolang ze actief gelinkt zijn vanuit documenten, flows, Drive, ClickUp, automatiseringen of AI-agent instructies. Shim-resolutie gebeurt gecontroleerd: eerst inventariseren, dan verwijzingen omzetten, daarna pas verwijderen of archiveren.

### 6. CM en FIERCE blijven strikt gescheiden

Custommade Agency en FIERCE blijven strikt gescheiden in governance, documenten, templates, processen, Drive-mappen, ClickUp-inrichting, automatiseringen en AI-agent output. Er mogen geen FIERCE-bestanden, FIERCE-governance of FIERCE-templates in het CM Operating System worden verwerkt.

## Week 1 Build Pack v2

Week 1 is pas klaar wanneer de volgende onderdelen aantoonbaar zijn verwerkt:

1. Drive-governance is verwerkt en sluit aan op de leidende briefing-roots.
2. Artist-dossiers zijn gemapt naar `02_ARTIST_MANAGEMENT`; `03_CLIENTS` is beperkt tot merken, bedrijven, opdrachtgevers, sponsors, media partners en commerciële relaties.
3. ClickUp-mapping gebruikt één CM Space met folders.
4. Moneybird is vastgelegd als financiële waarheid.
5. Pure shims zijn geïnventariseerd en blijven behouden zolang ze actief gelinkt zijn.
6. CM/FIERCE-scheiding is expliciet geborgd.
7. Operationele rapporten in Drive bestaan als `Bestandsnaam.md` en `Bestandsnaam.pdf`.
8. PDF is de primaire leesversie voor Sophia; `.md` is het bronbestand.

## Governance priority

De Governance Prioriteit is:

1. `DECISION_LOG.md`
2. `CM_OS_LOCKED_DECISIONS_*`
3. `GOVERNANCE_RULES.md`
4. `AUDIT_REPORTS`
5. `README`
6. AI-aanbevelingen

Geen AI-agent mag governance wijzigen zonder eerst `DECISION_LOG.md` te controleren. Bij conflict geldt de Governance Prioriteit.

## PDF Governance

Alle operationele rapporten moeten bestaan als:

- `Bestandsnaam.md`
- `Bestandsnaam.pdf`

PDF is de primaire leesversie voor Sophia. Het `.md`-bestand blijft het bronbestand.

PDF Governance is verplicht voor:

- README
- TEMPLATE_USAGE_REPORT
- TEMPLATE_GAP_LOG
- RESTRUCTURE_REPORT
- FINAL_CLEANUP_REPORT
- AUDIT_REPORT
- GOVERNANCE_REPORT

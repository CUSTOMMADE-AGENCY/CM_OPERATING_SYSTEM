# CM_OS — Implementation Roadmap

**Entiteit:** Custommade Agency Int. B.V.  
**Status:** Governance locked · uitvoering gestart  
**Bron:** FINAL_GOVERNANCE_ALIGNMENT_REPORT.md eindigt met GOVERNANCE CONSISTENT.

## Doel

Dit document vertaalt de gelockte CM_OS-governance naar een uitvoerbare implementatievolgorde. Vanaf dit punt worden geen nieuwe rootstructuren, governance-lagen of alternatieve ClickUp/Drive-modellen ontworpen zonder nieuwe locked decision in DECISION_LOG.md.

## Uitvoeringsprincipe

| Systeem | Rol |
|---|---|
| GitHub | Governance, SOPs, Playbooks, templates en systeemdocumentatie |
| Google Drive | Operationele opslag en live dossiers |
| ClickUp | Uitvoering, Pipeline, owners, deadlines en evidence |
| Moneybird | Financiële waarheid |
| Gmail | Communicatie en templates |
| ChatGPT / Claude / Codex | Analyse, verbetering en gecontroleerde uitvoering |

Custommade Agency en FIERCE blijven strikt gescheiden.

## Sprint 1 — Drive Implementatie

**Doel:** de definitieve OS_CUSTOMMADE Drive-structuur operationeel maken.

### Output

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

### Taken

1. Run of valideer `scripts/google-drive/create-cm-drive-structure.gs`.
2. Controleer dat artist management dossiers onder `02_ARTIST_MANAGEMENT` blijven.
3. Controleer dat zakelijke klanten, sponsors, merken en opdrachtgevers onder `03_CLIENTS` vallen.
4. Controleer dat transacties, catalog sales, licensing, sync, sponsorships en endorsement deals onder `04_DEALS` vallen.
5. Maak geen oude roots opnieuw aan.
6. Maak voor operationele rapporten PDF-leesversies naast de bronbestanden.

### Definition of Done

- Alle roots bestaan exact volgens governance.
- Geen oude roots actief.
- Geen FIERCE-mappen of FIERCE-templates aanwezig.
- PDF-leesversies aanwezig voor operationele rapporten.

## Sprint 2 — Drive Migratie

**Doel:** bestaande CM-bestanden en dossiers naar de juiste roots verplaatsen zonder dubbele registraties.

### Taken

1. Maak migratielijst bestaande mappen → nieuwe roots.
2. Verplaats alleen na controle; niet blind kopiëren.
3. Houd 02_ARTIST_MANAGEMENT voor artiestmanagement.
4. Gebruik 03_CLIENTS uitsluitend voor zakelijke klanten, sponsors, merken, opdrachtgevers en media partners.
5. Gebruik 04_DEALS uitsluitend voor transacties.
6. Archiveer legacy-structuren in `99_ARCHIVE`.

### Definition of Done

- Geen client/deal op twee plekken.
- Geen artistdossier onder `03_CLIENTS`.
- Geen actieve dealmap onder lane-roots.
- Migratierapport aanwezig als PDF.

## Sprint 3 — ClickUp Implementatie

**Doel:** één centrale CM Space bouwen volgens governance.

### ClickUp-principe

Eén centrale Space (canoniek, ADR-2026-08-07):

```text
CUSTOMMADE AGENCY
```

Folders per business lane/proces: PIPELINE · CLIENTS · OPERATIONS · DEAL DESK · MARKETING.
Geen multi-Space structuur. Zie `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_STRUCTURE.md`.

### Taken

1. Bouw of valideer de centrale CM Space.
2. Richt folders in volgens `CLICKUP_STRUCTURE.md`.
3. Koppel lijsten en workflows volgens `CLICKUP_MAPPING.md`.
4. Behoud bestaande AM- en MB-statussets waar governance dit voorschrijft.
5. Gebruik `AM - [Artist] - [Workflow]` en `MB - [Deal] - [Workflow]` waar van toepassing.
6. Gebruik ClickUp voor uitvoering; Drive alleen als opslag/evidence.

### Definition of Done

- Eén CM Space actief.
- Geen oude aparte Spaces voor Artist Management Clients of Master Boutique Pipeline.
- Mapping naar Drive-roots klopt.
- Task templates zijn gekoppeld.

## Sprint 4 — CM PROSPECT

**Doel:** CM PROSPECT bouwen als commerciële deal- en prospecting-agent.

### Scope

CM PROSPECT ondersteunt:

- buyer outreach;
- catalog/master resale leads;
- brand partnerships;
- sponsorships;
- endorsement deals;
- licensing en sync leads;
- proposal routing;
- deal follow-up.

### Regels

1. CM PROSPECT gebruikt bestaande CM-templates.
2. Geen nieuwe trackers als een template bestaat.
3. Nieuwe deals starten met de lean dealstructuur:

```text
00_START_HIER
01_RECHTEN_REGISTER
02_CONTRACTEN_BEWIJS
03_WAARDERING_VERKOOPPAKKET
04_OUTREACH_CLICKUP
99_ARCHIEF
```

4. Data Room, LOI, APA, Closing en Success Fee worden pas aangemaakt bij due diligence fase.

### Definition of Done

- Agent-instructies staan in GitHub.
- Drive-case output volgt governance.
- ClickUp-output volgt mapping.
- Template usage en gap logs worden aangemaakt.
- PDF-leesversies worden aangemaakt.

## Sprint 5 — Automations

**Doel:** gecontroleerde automatisering zonder financiële of governance-duplicatie.

### Prioriteit

1. Drive folder creation.
2. Template usage checks.
3. ClickUp task creation.
4. Gmail draft templates.
5. Moneybird verwijzing/invoice request, geen boekhoudsync.

### Definition of Done

- Geen Moneybird-data gedupliceerd als bron in Drive of ClickUp.
- Automations volgen governance.
- Fouten worden gelogd.
- Geen FIERCE-vermenging.

## Sprint 6 — Dashboards

**Doel:** overzicht creëren zonder extra bron van waarheid.

### Dashboardregels

- ClickUp dashboards tonen uitvoering.
- Moneybird blijft financiële waarheid.
- Drive blijft opslag.
- GitHub blijft governance.

### Mogelijke dashboards

- Dealflow Dashboard.
- Artist Management Dashboard.
- Partnership Pipeline Dashboard.
- Catalog Sale Dashboard.
- Operations Dashboard.

## Stopregels

Stop met bouwen wanneer:

1. een nieuwe governance-keuze nodig is;
2. een bestand conflicteert met DECISION_LOG.md;
3. een automation probeert Moneybird te vervangen;
4. FIERCE en CM door elkaar lopen;
5. een AI-agent nieuwe templates maakt zonder template-check.

## Eerstvolgende actie

Start met Sprint 1: Drive Implementatie. Controleer eerst of `create-cm-drive-structure.gs` exact de gelockte roots bouwt en maak daarna de operationele OS_CUSTOMMADE-root aan of valideer de bestaande root.

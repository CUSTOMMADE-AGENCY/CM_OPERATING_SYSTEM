# ADR-2026-08-07 — Canonieke ClickUp-structuur: compacte `CUSTOMMADE AGENCY` (B)

## Status

Accepted

## Datum

2026-08-07 (voorgesteld en geaccepteerd; besluit accounteigenaar)

## Context

Tijdens de OPS-agentcertificering bleek dat de ClickUp-uitvoeringsstructuur in **twee
tegenstrijdige gedocumenteerde varianten** bestaat, die beide door `CM_OPS_AGENT.md` §09 als
bron worden aangewezen:

- **Structuur A** — `CLICKUP_STRUCTURE.md` en de eerste helft van `CLICKUP_MAPPING.md`:
  Space **`CM`** met **6 folders** (Artist Management · Master Boutique / Deals · Clients ·
  Pipeline · Shared Operations · Governance & Systems).
- **Structuur B** — het hoofdstuk "Compacte ClickUp-mapping voor CM_OS agents" in
  `CLICKUP_MAPPING.md`: Space **`CUSTOMMADE AGENCY`** met **5 folders**
  (PIPELINE · CLIENTS · OPERATIONS · DEAL DESK · MARKETING), artist onboarding/management als
  lijsten **onder `CLIENTS`**.

Aanvullende inconsistenties:

- De **live workspace** (read-only uitgelezen 2026-08-07) volgt **B**: space
  `CUSTOMMMADE AGENCY` (met typefout, 3× M) en de folders PIPELINE/CLIENTS/OPERATIONS/DEAL DESK.
- Het **provisioning-script** `scripts/google-drive/provision-cm-artist.gs` schrijft
  artist-onboarding naar de `ACTIVE CLIENTS`-lijst onder `CLIENTS` (dus B).
- `IMPLEMENTATION_ROADMAP.md` noemt een **derde naamvariant**: `CUSTOMMADE AGENCY — OPERATING SYSTEM`.
- `DECISION_LOG.md` bevat "2026-06-15 LOCKED — Eén ClickUp Space met folders", maar legt de
  concrete folderindeling niet eenduidig vast.

Governance vereist exact één bron van waarheid per onderwerp. Sinds
`ADR-2026-07-01` (CM OS V1.0 production baseline) verlopen architectuurwijzigingen uitsluitend
via ADR + Pull Request. Deze ADR legt de keuze formeel vast.

Evidence: `docs/05_OPERATIONS/AGENTS/CERTIFICATION/EVIDENCE/CM_OPS_SUBSTRATE_2026-08-07.md`.

## Besluit

1. **De compacte structuur B is de enige canonieke ClickUp-structuur.**
   - Canonieke Space-naam: **`CUSTOMMADE AGENCY`** (2× M). De live typefout `CUSTOMMMADE`
     (3× M) wordt in ClickUp gecorrigeerd; de roadmap-variant `— OPERATING SYSTEM` wordt
     geharmoniseerd naar `CUSTOMMADE AGENCY`.
   - Canonieke folders: **PIPELINE · CLIENTS · OPERATIONS · DEAL DESK · MARKETING**, elk met
     één eigenaar-agent (zie `CLICKUP_STRUCTURE.md`).
   - Artist onboarding/management valt als **lijsten onder `CLIENTS`**; geen aparte
     Artist Management-folder.
2. **Structuur A is gedeprecate.** `CLICKUP_STRUCTURE.md` is herschreven naar B; de A-secties
   in `CLICKUP_MAPPING.md` zijn als gedeprecate gemarkeerd met een A→B-vertaaltabel.
3. **De A-detailmappings worden per workflow herbelegd — niet per folder 1-op-1.** Let op: de
   sectie "Artist Management mappings" bevat óók `Deal Negotiation Flow` en
   `Brand Partnership Flow`; die horen conform B **niet** onder `CLIENTS` maar respectievelijk
   onder **`DEAL DESK`** (legal/deal) en **`PIPELINE`** (partnerships/brand deals).
4. **De ClickUp-inrichting zelf** (space-naam, ontbrekende lijsten/folders, provisioning-retarget,
   FIERCE-opruiming) verloopt volgens `CM_OPS_CLICKUP_RECONCILIATION_PLAN.md`.

## Impact

- **Architectuur:** één eenduidige ClickUp-structuur; source-of-truth-conflict opgeheven.
- **Docs:** `CLICKUP_STRUCTURE.md` (herschreven), `CLICKUP_MAPPING.md` (top → B + deprecatie),
  `IMPLEMENTATION_ROADMAP.md` (naam geharmoniseerd), `DECISION_LOG.md` (entry).
- **ClickUp (live):** wijzigingen staan als plan klaar; nog niet uitgevoerd (connector-writes
  geblokkeerd in de sessie). Owner/CM FLOW voert uit.
- **Scripts:** `provision-cm-artist.gs` moet worden geretarget naar de canonieke
  `Artist Onboarding`-lijst (anders twee uitvoerlocaties). Geen codewijziging in deze PR.
- **Agent-impact:** OPS-substraat wordt eenduidig; OPS blijft Level 1.

## Teststrategie

1. `CLICKUP_STRUCTURE.md` en de Core rule van `CLICKUP_MAPPING.md` noemen exact één Space
   (`CUSTOMMADE AGENCY`) en dezelfde 5 folders.
2. Geen doc noemt nog `CM` of `— OPERATING SYSTEM` als canonieke Space (behalve als expliciet
   gedeprecate/historisch gemarkeerd).
3. De A→B-vertaaltabel splitst deal-/partnership-workflows correct naar DEAL DESK/PIPELINE.
4. Na ClickUp-uitvoering: read-only hercheck dat space-naam, `CLIENTS`-lijsten en `MARKETING`
   overeenkomen met B.

## Migratie

1. Doc-canonisatie (deze PR): `CLICKUP_STRUCTURE.md`, `CLICKUP_MAPPING.md`,
   `IMPLEMENTATION_ROADMAP.md`, `DECISION_LOG.md`.
2. ClickUp-inrichting + provisioning-retarget: `CM_OPS_CLICKUP_RECONCILIATION_PLAN.md`
   (owner/CM FLOW).
3. Follow-up: de A-detailmappings in `CLICKUP_MAPPING.md` per workflow herbeleggen onder B.

## Risico's

- **Blanket folder-vertaling plaatst deal-/partnership-workflows verkeerd** → gemitigeerd:
  besluit 3 splitst per workflow (DEAL DESK / PIPELINE).
- **Twee uitvoerlocaties** bij nieuwe `Artist Onboarding`-lijst zonder script-retarget →
  gemitigeerd: retarget is verplichte stap in het reconciliatieplan.
- **Naamkeuze** (`CUSTOMMADE AGENCY` vs. `— OPERATING SYSTEM`) → expliciet vastgelegd; wijzigbaar
  via nieuwe ADR.

## Rollback

Volledige PR-revert herstelt de vorige (conflicterende) toestand. Een toekomstige correctie van
dit besluit vereist een nieuwe ADR.

## Referenties

- `docs/00_GOVERNANCE/ADR/ADR-2026-07-01-cm-os-v1-production-baseline.md` — baseline + ADR-plicht
- `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_STRUCTURE.md` — canonieke structuur (B)
- `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_MAPPING.md` — execution-mapping + A→B-tabel
- `docs/05_OPERATIONS/AGENTS/CERTIFICATION/EVIDENCE/CM_OPS_SUBSTRATE_2026-08-07.md` — bewijs
- `docs/05_OPERATIONS/AGENTS/CERTIFICATION/EVIDENCE/CM_OPS_CLICKUP_RECONCILIATION_PLAN.md` — plan

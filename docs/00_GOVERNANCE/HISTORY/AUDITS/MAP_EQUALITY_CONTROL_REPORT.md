# **MAP EQUALITY CONTROL REPORT**

## **METADATA**

| Veld | Waarde |
|---|---|
| Document | MAP_EQUALITY_CONTROL_REPORT.md |
| Versie | 1.0 |
| Datum | 2026-07-26 |
| Eigenaar | CM CONTROL AGENT |
| Status | Actief |
| Type | Controle (gelijkheid mapstructuur) |

---

## **DOEL**

Dit rapport legt de uitkomst vast van de controle *"of alle mappen overal gelijk zijn"*: een vergelijking van de gedefinieerde `OS_CUSTOMMADE`-mapstructuur tussen alle bronnen die deze structuur in de repository beschrijven of aanmaken. Doel is vaststellen of elke bron dezelfde mappen en submappen gebruikt en, waar dat niet zo is, de afwijkingen te documenteren met eigenaar en actie.

---

## **GECONTROLEERDE BRONNEN**

| # | Bron | Rol | Type |
|---|---|---|---|
| B1 | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` | Live Drive-structuur, referentie | Governance |
| B2 | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/*.md` (hoofdstuk 5) | Map Specifications per hoofdmap | Governance |
| B3 | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/*` | Map Specifications per artist-submap | Governance |
| B4 | `scripts/google-drive/create-cm-drive-structure.gs` | Gemarkeerd "PRIMARY for approved Drive build" | Script |
| B5 | `scripts/google-drive/create-os-custommade-target-structure.gs` | Safe-roots migratie target-structuur | Script |
| B6 | `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` | "SAFE ROOT REPAIR only" | Script |

**Referentienorm:** B1 (`DRIVE_MAPPING.md`) beschrijft de goedgekeurde live structuur en wordt in dit rapport als norm gehanteerd; de Map Specifications (B2/B3) horen hiermee gesynchroniseerd te zijn.

---

## **RESULTAAT OP HOOFDLIJNEN**

- **Hoofdmappen (roots): GELIJK.** Alle zes bronnen gebruiken exact dezelfde elf roots: `00_ADMIN`, `01_MASTER_BOUTIQUE`, `02_ARTIST_MANAGEMENT`, `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE`.
- **Submappen: NIET GELIJK.** De submapstructuur wijkt substantieel af tussen de governance-documenten (B1/B2/B3) en de Google Drive-scripts (B4/B5/B6), en de scripts wijken ook onderling van elkaar af.
- **Governance onderling: grotendeels gelijk, twee uitzonderingen.** De Map Specifications (B2/B3) volgen `DRIVE_MAPPING.md` (B1), behalve bij `07_LEGAL` en bij de ontbrekende artist-submap `06_FINANCE`.
- **Eén scriptbestand is corrupt** (`create-cm-drive-structure.gs`, B4): twee scripts zijn samengevoegd tot syntactisch ongeldige code.

---

## **DETAILVERGELIJKING PER HOOFDMAP**

Legenda: ✅ gelijk aan norm (B1) · ⚠️ afwijkend · — geen submappen gedefinieerd.

### Roots (top-level)

| Bron | 11 roots identiek? |
|---|---|
| B1 DRIVE_MAPPING | ✅ (norm) |
| B2 ROOTS/README | ✅ |
| B4 create-cm-drive-structure | ✅ |
| B5 create-os-custommade-target | ✅ |
| B6 OS_CUSTOMMADE_target | ✅ |

### 00_ADMIN

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `01_INBOX_REVIEW`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_REPORTS`, `05_APPROVALS` | ✅ |
| B2 `00_ADMIN.md` | idem | ✅ |
| B5 | `INBOX`, `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES` | ⚠️ oude structuur |
| B6 | `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES` | ⚠️ oude structuur |

### 01_MASTER_BOUTIQUE

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | — (alleen root) | ✅ |
| B5 | `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP`, `99_ARCHIEF` | ⚠️ deal-structuur; conflicteert met `04_DEALS.md` (Master Boutique bevat geen dealcases) |

### 02_ARTIST_MANAGEMENT (`[ARTIST_NAME]`)

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `06_FINANCE`, `07_SOCIALMEDIA`, `08_PRESS_EPK`, `09_ARCHIVE` | ✅ |
| B3 ARTIST_FOLDER | `06_FINANCE` ontbreekt (README + spec-bestand) | ⚠️ ontbrekende spec |
| B4 `ARTIST_SUBFOLDERS` | idem norm (9 submappen) | ✅ |
| B5 | 9 submappen direct onder de root i.p.v. onder `[ARTIST_NAME]` | ⚠️ plaatsing |

### 03_CLIENTS (`[CLIENT_NAAM]`)

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE`, `09_ARCHIVE` | ✅ |
| B2 `03_CLIENTS.md` | idem | ✅ |
| B4 `CM_CLIENT_FOLDERS` | `01_ADMIN`, `02_BRAND`, `03_STRATEGY`, `04_DEALS_RIGHTS`, `05_RELEASES`, `06_CONTENT`, `07_FINANCE`, `08_DELIVERABLES`, `09_ARCHIVE` | ⚠️ volledig afwijkend |
| B5 | `00_START_HIER`, `99_ARCHIEF` | ⚠️ minimaal/oud |

### 04_DEALS (`[DEAL_OR_ASSET_NAME]`)

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP`, `99_ARCHIEF` | ✅ |
| B2 `04_DEALS.md` | idem | ✅ |
| B4 `DEAL_SUBFOLDERS` | idem | ✅ |
| B5 | idem (direct onder root) | ✅ namen |

### 05_OPERATIONS

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | — (alleen root) | ✅ |
| B5 / B6 | `00_START_HIER`, `HR`, `TRAINING`, `TOOLS`, `PROCESSES`, `TEMPLATES_REFERENCE`, `99_ARCHIEF` | ⚠️ niet in norm |

### 06_FINANCE

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | — (alleen root) | ✅ |
| B5 / B6 | `00_START_HIER`, `MONEYBIRD_REFERENCE`, `BELASTINGDIENST`, `BANK`, `STATEMENTS`, `ADMIN_EXPORTS`, `99_ARCHIEF` | ⚠️ niet in norm |

### 07_LEGAL

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW`, `EVIDENCE` | ✅ |
| B2 `07_LEGAL.md` | `00_START_HIER`, `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `LEGAL_REVIEW`, `EVIDENCE`, `99_ARCHIEF` | ⚠️ rijker dan norm |
| B5 / B6 | `00_START_HIER`, `CONTRACTEN`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `APPROVALS`, `99_ARCHIEF` | ⚠️ `CONTRACTEN` i.p.v. `CONTRACTS`; geen `LEGAL_REVIEW`/`EVIDENCE`/`CM_APPROVAL_REGISTER` |

> `07_LEGAL` is de enige map die in **alle drie** de representaties (norm, spec, scripts) een andere structuur heeft.

### 08_MARKETING

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | — (alleen root) | ✅ |
| B5 / B6 | `00_START_HIER`, `BRAND`, `NETWORK`, `CAMPAIGNS`, `PARTNERSHIPS`, `99_ARCHIEF` | ⚠️ niet in norm |

### 09_CONTENT

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | — (alleen root) | ✅ |
| B5 / B6 | `00_START_HIER`, `ASSETS`, `SOCIALMEDIA`, `FORMATS`, `CONTENT_CALENDAR`, `99_ARCHIEF` | ⚠️ niet in norm |

### 99_ARCHIVE

| Bron | Submappen | Status |
|---|---|---|
| B1 norm | `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS`, `MIGRATION_LOGS` | ✅ |
| B2 `99_ARCHIVE.md` | idem | ✅ |
| B5 / B6 | `00_START_HIER`, `LEGACY_ROOTS`, `REVIEW_HOLD`, `99_ARCHIEF` | ⚠️ oude structuur |

---

## **GECONSTATEERDE AFWIJKINGEN (nieuwe gaps)**

Onderstaande afwijkingen zijn geregistreerd in `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md`.

| Gap ID | Beschrijving | Bronnen | Eigenaar |
|---|---|---|---|
| GAP-016 | Google Drive-scripts (B5/B6) niet gesynchroniseerd met `DRIVE_MAPPING.md` voor `00_ADMIN`, `01_MASTER_BOUTIQUE`, `03_CLIENTS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE` | B5, B6 vs B1 | CM FLOW AGENT |
| GAP-017 | `07_LEGAL.md` Map Specification en `DRIVE_MAPPING.md` `07_LEGAL` niet gelijk | B2 vs B1 | CM LEGAL AGENT |
| GAP-018 | ARTIST_FOLDER Map Specifications missen `06_FINANCE` (README + spec-bestand) | B3 vs B1 | CM OPS AGENT |
| GAP-019 | `create-cm-drive-structure.gs` is corrupt (twee samengevoegde scripts, dubbele declaraties, ongeldige syntax) en `CM_CLIENT_FOLDERS` wijkt af van de clientnorm | B4 | CM FLOW AGENT |
| GAP-020 | `create-os-custommade-target-structure.gs` en `OS_CUSTOMMADE_target_structure.gs` bevatten identieke symboolnamen (`ROOT_FOLDER_ID`, `OS_CUSTOMMADE_TARGET_STRUCTURE`, gelijknamige functies) en conflicterende structuren | B5, B6 | CM FLOW AGENT |

---

## **AANBEVOLEN VERVOLGACTIES**

1. **Norm bevestigen.** CM CONTROL AGENT bevestigt dat `DRIVE_MAPPING.md` de leidende structuurnorm is; los daarna GAP-017 op door `07_LEGAL.md` en `DRIVE_MAPPING.md` op één lijn te brengen (beslissen welke submappen live bestaan).
2. **Scripts alignen (GAP-016/GAP-019/GAP-020).** Google Drive-scripts bijwerken naar de bevestigde norm, het corrupte bestand splitsen/herstellen en de dubbele symboolnamen wegnemen om collisions in één Apps Script-project te voorkomen. Dit betreft de live Drive-structuur en vergt de Owner Agent en het geldende approval level; niet ad hoc wijzigen.
3. **Ontbrekende spec aanvullen (GAP-018).** `06_FINANCE.md` toevoegen aan `ARTIST_FOLDER/` en opnemen in de navigatie, of expliciet documenteren waarom deze submap geen eigen spec heeft.
4. **Herzien bij kwartaalreview.** Statussen bijwerken in het Gap Report bij oplossing.

---

## **CONCLUSIE**

Nee, de mappen zijn **niet overal gelijk**. De elf hoofdmappen zijn in alle bronnen identiek, maar de submapstructuur verschilt aanzienlijk tussen de governance-documentatie en de Google Drive-scripts, en de scripts onderling. De governance-documenten zijn onderling grotendeels consistent op twee punten na (`07_LEGAL` en ontbrekende artist-`06_FINANCE`). Vijf nieuwe gaps zijn geregistreerd voor opvolging.

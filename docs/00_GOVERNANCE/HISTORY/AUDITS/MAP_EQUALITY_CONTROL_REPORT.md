# **MAP EQUALITY CONTROL REPORT**

## **METADATA**

| Veld | Waarde |
|---|---|
| Document | MAP_EQUALITY_CONTROL_REPORT.md |
| Versie | 1.2 |
| Datum | 2026-07-26 |
| Eigenaar | CM CONTROL AGENT |
| Status | Actief |
| Type | Controle (gelijkheid mapstructuur) |

---

## **DOEL**

Dit rapport legt de uitkomst vast van de controle *"of alle mappen overal gelijk zijn"*: een vergelijking van de gedefinieerde `OS_CUSTOMMADE`-mapstructuur tussen alle bronnen die deze structuur in de repository beschrijven of aanmaken. Doel is vaststellen of elke bron dezelfde mappen en submappen gebruikt en, waar dat niet zo is, de afwijkingen te documenteren met eigenaar en actie.

---

## **LEIDENDE NORM**

Er zijn twee bewust gescheiden structuren (`DRIVE_STRUCTURE.md`, sectie "Toolgrenzen"):

- **Drive** (live dossiers en bestanden): de leidende norm is **`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`** — de "Complete goedgekeurde Drive-structuur / production baseline". `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` komt hier exact mee overeen.
- **GitHub** (governance/SOPs/workflows/systeemdocumentatie): de leidende norm is de docs-boom in **`docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`**. `99_ARCHIVE` is uitsluitend een Drive-root en is geen actief GitHub-domein.

Deze controle richt zich op de **Drive-structuur**. Per `DRIVE_STRUCTURE.md` beschrijft de Drive Structure de boom (welke mappen bestaan en waar); de Map Specifications zijn leidend voor de *inhoud* per map, niet voor de boom. Waar een Map Specification of script submappen toevoegt die niet in de production baseline staan, is dat een afwijking van de leidende norm.

---

## **GECONTROLEERDE BRONNEN**

| # | Bron | Rol | Type |
|---|---|---|---|
| B0 | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` | **Leidende Drive production baseline** | Governance |
| B1 | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` | Live Drive-structuur (koppeling map→agent/systeem) | Governance |
| B2 | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/*.md` (hoofdstuk 5) | Map Specifications per hoofdmap | Governance |
| B3 | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/*` | Map Specifications per artist-submap | Governance |
| B4 | `scripts/google-drive/create-cm-drive-structure.gs` | Gemarkeerd "PRIMARY for approved Drive build" | Script |
| B5 | `scripts/google-drive/create-os-custommade-target-structure.gs` | Safe-roots migratie target-structuur | Script |
| B6 | `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` | "SAFE ROOT REPAIR only" | Script |

---

## **RESULTAAT OP HOOFDLIJNEN**

- **Hoofdmappen (roots): GELIJK.** Alle bronnen gebruiken dezelfde elf roots.
- **Leidende norm consistent met zichzelf.** `DRIVE_STRUCTURE.md` (B0) en `DRIVE_MAPPING.md` (B1) zijn volledig identiek — de leidende Drive-norm is intern consistent.
- **Map Specifications wijken op vier roots af van de baseline.** De Map Specifications (B2) tonen voor `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING`, `09_CONTENT` en `07_LEGAL` een submapstructuur die niet in de production baseline (B0/B1) staat; die roots zijn in de baseline root-only (of, bij `07_LEGAL`, beperkter). De Map Specs over-specificeren dus de boom.
- **Scripts wijken af van de baseline.** De Drive-scripts (B5/B6) maken verouderde/afwijkende submappen aan bij `00_ADMIN`, `03_CLIENTS`, `07_LEGAL`, `99_ARCHIVE` en creëren extra submappen onder `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING`, `09_CONTENT` die niet in de baseline staan. B5 plaatst bovendien de artist-/deal-submappen direct onder de root i.p.v. onder de dossiermap.
- **B4 is corrupt.** `create-cm-drive-structure.gs` bevat twee samengevoegde, syntactisch ongeldige scripts; zijn clientstructuur wijkt af en het laat `00_ADMIN`, `07_LEGAL` en `99_ARCHIVE` zonder de vereiste baseline-submappen.

> Correctie t.o.v. eerdere versie 1.1: `DRIVE_MAPPING.md` is **niet** onvolledig. De baseline is bewust root-only voor `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING` en `09_CONTENT`; de afwijking zit in de Map Specifications en scripts die daar submappen aan toevoegen.

---

## **DETAILVERGELIJKING PER HOOFDMAP**

Legenda: ✅ = gelijk aan baseline (B0/B1) · ⚠️ = afwijkend van baseline · — geen submappen.

### 00_ADMIN

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `01_INBOX_REVIEW`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_REPORTS`, `05_APPROVALS` | ✅ baseline |
| B2 `00_ADMIN.md` | idem | ✅ |
| B5 | `INBOX`, `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES` | ⚠️ verouderd |
| B6 | `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES` | ⚠️ verouderd |
| B4 | leeg (`[]`) | ⚠️ mist baseline-submappen |

### 01_MASTER_BOUTIQUE

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | — (root-only; deals horen in `04_DEALS`) | ✅ baseline |
| B2 `01_MASTER_BOUTIQUE.md` | `01_CONTEXT` … `09_DUE_DILIGENCE_METHODS` (9 categorieën) | ⚠️ niet in baseline |
| B5 | `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP`, `99_ARCHIEF` | ⚠️ dealstructuur, expliciet verboden |

### 02_ARTIST_MANAGEMENT (`[ARTIST_NAME]`)

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `[ARTIST_NAME]/` → `01_ADMIN` … `09_ARCHIVE` (9) | ✅ baseline |
| B3 ARTIST_FOLDER | 8 specs; `06_FINANCE` ontbreekt | ⚠️ ontbrekende spec |
| B4 | 9 submappen genest onder `[ARTIST_NAME]` | ✅ |
| B5 | 9 submappen **direct onder de root** | ⚠️ plaatsingsdefect |

### 03_CLIENTS (`[CLIENT_OR_PARTNER_NAME]`)

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `[CLIENT]/` → `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE`, `09_ARCHIVE` | ✅ baseline |
| B2 `03_CLIENTS.md` | idem | ✅ |
| B4 `CM_CLIENT_FOLDERS` | `01_ADMIN`, `02_BRAND`, `03_STRATEGY`, `04_DEALS_RIGHTS`, `05_RELEASES`, `06_CONTENT`, `07_FINANCE`, `08_DELIVERABLES`, `09_ARCHIVE` | ⚠️ volledig afwijkend |
| B5 | `00_START_HIER`, `99_ARCHIEF` | ⚠️ minimaal/verouderd |

### 04_DEALS (`[DEAL_OR_ASSET_NAME]`)

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `[DEAL]/` → `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP`, `99_ARCHIEF` | ✅ baseline |
| B2 `04_DEALS.md` | idem | ✅ |
| B4 `DEAL_SUBFOLDERS` | idem, genest onder dealmap | ✅ |
| B5 | 6 submappen **direct onder de root** | ⚠️ plaatsingsdefect |

### 05_OPERATIONS

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | — (root-only in Drive) | ✅ baseline |
| B2 `05_OPERATIONS.md` | `00_START_HIER`, `HR`, `TRAINING`, `TOOLS`, `PROCESSES`, `TEMPLATES_REFERENCE`, `99_ARCHIEF` | ⚠️ niet in baseline |
| B5 / B6 | idem B2 | ⚠️ niet in baseline |

### 06_FINANCE

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | — (root-only in Drive) | ✅ baseline |
| B2 `06_FINANCE.md` | `00_START_HIER`, `MONEYBIRD_REFERENCE`, `BELASTINGDIENST`, `BANK`, `STATEMENTS`, `ADMIN_EXPORTS`, `99_ARCHIEF` | ⚠️ niet in baseline |
| B5 / B6 | idem B2 | ⚠️ niet in baseline |

### 07_LEGAL

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW`, `EVIDENCE` | ✅ baseline |
| B2 `07_LEGAL.md` | `00_START_HIER`, `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `LEGAL_REVIEW`, `EVIDENCE`, `99_ARCHIEF` | ⚠️ rijker dan baseline |
| B5 / B6 | `00_START_HIER`, `CONTRACTEN`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `APPROVALS`, `99_ARCHIEF` | ⚠️ `CONTRACTEN` i.p.v. `CONTRACTS`; geen `LEGAL_REVIEW`/`EVIDENCE`/`CM_APPROVAL_REGISTER` |

### 08_MARKETING

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | — (root-only in Drive) | ✅ baseline |
| B2 `08_MARKETING.md` | `00_START_HIER`, `BRAND`, `NETWORK`, `CAMPAIGNS`, `PARTNERSHIPS`, `99_ARCHIEF` | ⚠️ niet in baseline |
| B5 / B6 | idem B2 | ⚠️ niet in baseline |

### 09_CONTENT

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | — (root-only in Drive) | ✅ baseline |
| B2 `09_CONTENT.md` | `00_START_HIER`, `ASSETS`, `SOCIALMEDIA`, `FORMATS`, `CONTENT_CALENDAR`, `99_ARCHIEF` | ⚠️ niet in baseline |
| B5 / B6 | idem B2 | ⚠️ niet in baseline |

### 99_ARCHIVE

| Bron | Submappen | Status |
|---|---|---|
| B0/B1 | `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS`, `MIGRATION_LOGS` | ✅ baseline |
| B2 `99_ARCHIVE.md` | idem | ✅ |
| B5 / B6 | `00_START_HIER`, `LEGACY_ROOTS`, `REVIEW_HOLD`, `99_ARCHIEF` | ⚠️ verouderd |

---

## **SAMENVATTING PER ROOT (t.o.v. leidende baseline B0/B1)**

| Root | B2 spec | B4 | B5/B6 |
|---|---|---|---|
| 00_ADMIN | ✅ | ⚠️ leeg | ⚠️ verouderd |
| 01_MASTER_BOUTIQUE | ⚠️ 9 categorieën | ✅ leeg | ⚠️ verboden dealstructuur |
| 02_ARTIST_MANAGEMENT | ⚠️ mist `06_FINANCE` | ✅ | ⚠️ plaatsing |
| 03_CLIENTS | ✅ | ⚠️ afwijkend | ⚠️ minimaal |
| 04_DEALS | ✅ | ✅ | ⚠️ plaatsing |
| 05_OPERATIONS | ⚠️ extra submappen | ✅ leeg | ⚠️ extra submappen |
| 06_FINANCE | ⚠️ extra submappen | ✅ leeg | ⚠️ extra submappen |
| 07_LEGAL | ⚠️ rijker | ⚠️ leeg | ⚠️ afwijkend |
| 08_MARKETING | ⚠️ extra submappen | ✅ leeg | ⚠️ extra submappen |
| 09_CONTENT | ⚠️ extra submappen | ✅ leeg | ⚠️ extra submappen |
| 99_ARCHIVE | ✅ | ⚠️ leeg | ⚠️ verouderd |

---

## **GECONSTATEERDE AFWIJKINGEN (gaps)**

Geregistreerd in `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md`.

| Gap ID | Beschrijving | Bronnen | Eigenaar |
|---|---|---|---|
| GAP-016 | Drive-scripts (B5/B6) verouderd/afwijkend t.o.v. baseline voor `00_ADMIN`, `03_CLIENTS`, `07_LEGAL`, `99_ARCHIVE`; extra submappen onder `01`/`05`/`06`/`08`/`09`; plaatsingsdefecten `02`/`04` | B5, B6 vs B0/B1 | CM FLOW AGENT |
| GAP-017 | `07_LEGAL.md` (B2) rijker dan de baseline `07_LEGAL` in B0/B1 | B2 vs B0/B1 | CM LEGAL AGENT |
| GAP-018 | ARTIST_FOLDER Map Specifications missen `06_FINANCE` | B3 vs B0/B1 | CM OPS AGENT |
| GAP-019 | `create-cm-drive-structure.gs` (B4) corrupt; `CM_CLIENT_FOLDERS` afwijkend; laat `00_ADMIN`/`07_LEGAL`/`99_ARCHIVE` zonder baseline-submappen | B4 | CM FLOW AGENT |
| GAP-020 | Twee target-structure scripts met identieke symboolnamen en conflicterende structuren | B5, B6 | CM FLOW AGENT |
| GAP-021 | Map Specifications (B2) voor `01`/`05`/`06`/`08`/`09` tonen submappen die niet in de leidende Drive-baseline (B0/B1) staan | B2 vs B0/B1 | CM CONTROL AGENT |
| GAP-022 | `01_MASTER_BOUTIQUE`: baseline root-only, B2 toont 9 categorieën, B5 een expliciet verboden dealstructuur | B0/B1, B2, B5 | CM LEGAL AGENT |

---

## **AANBEVOLEN VERVOLGACTIES**

1. **Map Specifications afstemmen op de baseline (GAP-021/GAP-017/GAP-022).** De Owner Agents beslissen per root of de baseline (`DRIVE_STRUCTURE.md`) submappen krijgt, óf de Map Specifications de submapbomen verwijderen en zich tot inhoud beperken. Zolang beide verschillen, is er een governance-conflict tussen twee leidende documenten.
2. **Scripts alignen (GAP-016/GAP-019/GAP-020).** Na vaststelling: scripts bijwerken naar de baseline, plaatsingsdefecten (`02`/`04`) herstellen, het corrupte bestand splitsen/herstellen inclusief ontbrekende baseline-submappen (`00_ADMIN`/`07_LEGAL`/`99_ARCHIVE`), en dubbele symboolnamen wegnemen. Betreft de live Drive-structuur: uitvoeren volgens het geldende approval level.
3. **Verboden dealstructuur verwijderen (GAP-022).** Prioriteit: B5 maakt onder `01_MASTER_BOUTIQUE` een dealstructuur aan die `DRIVE_STRUCTURE.md` en `01_MASTER_BOUTIQUE.md` expliciet verbieden.
4. **Ontbrekende spec aanvullen (GAP-018).** `06_FINANCE.md` toevoegen aan `ARTIST_FOLDER/`.
5. **Herzien bij kwartaalreview.** Statussen bijwerken in het Gap Report bij oplossing.

---

## **CONCLUSIE**

Nee, de mappen zijn **niet overal gelijk**. De elf hoofdmappen zijn in alle bronnen identiek, en de leidende Drive-norm (`DRIVE_STRUCTURE.md`) en `DRIVE_MAPPING.md` zijn onderling volledig consistent. De afwijkingen zitten in (a) de Map Specifications, die voor zes roots een rijkere submapstructuur tonen dan de production baseline, en (b) de Google Drive-scripts, die verouderde, afwijkende of verboden structuren aanmaken en twee plaatsingsdefecten bevatten. Zeven gaps (GAP-016 t/m GAP-022) zijn geregistreerd voor opvolging.

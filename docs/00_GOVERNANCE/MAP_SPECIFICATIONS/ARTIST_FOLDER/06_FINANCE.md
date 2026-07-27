# **MAP SPECIFICATION — 06_FINANCE (ARTIST)**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `06_FINANCE` |
| Drive-pad | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/06_FINANCE` |
| Owner Agent | CM MONEY AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-26 |
| Gebaseerd op | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` |

---

## **2. DOEL**

`06_FINANCE` is de financiële referentie- en werklaag binnen het artistdossier. De map bevat budgetten, royalty- en uitbetalingsoverzichten, kostenoverzichten en financiële werkbestanden per artiest. Moneybird blijft de financiële waarheid; deze map bevat geen primaire bronadministratie. De map bevat geen contracten (→ `02_CONTRACT`) en geen CM-brede financiën (→ `06_FINANCE` op rootniveau).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Fee-afspraak of budget | Fee-afspraken en budgetten per artiest of project | `2026-03-01_[ARTIST]_FINANCE_BUDGET_v1.0.xlsx` |
| Uitbetalings-/royaltyoverzicht | Overzichten van uitbetalingen en royalty's | `2026-03-01_[ARTIST]_FINANCE_ROYALTY_OVERVIEW_v1.0.pdf` |
| Kostenoverzicht of afrekening | Kosten- en afrekeningsoverzichten | `2026-03-01_[ARTIST]_FINANCE_AFREKENING_v1.0.pdf` |
| Moneybird-referentie | Exports, screenshots of referenties uit Moneybird | `2026-03-01_[ARTIST]_FINANCE_MONEYBIRD_REF_v1.0.pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Primaire facturen, bonnen en kwitanties als bronadministratie (→ Moneybird)
- Getekende contracten en managementafspraken (→ `02_CONTRACT`)
- Bookingoffers, riders en performanceplanning (→ `05_BOOKING`)
- CM-brede financiële documenten (→ `06_FINANCE` op rootniveau)

---

## **5. SUBMAPPEN**

`06_FINANCE` heeft geen verplichte vaste submappen; documenten worden direct in de map opgeslagen volgens de naamconventie. Maak alleen een extra submap aan wanneer het volume dat vereist, na owner-review.

---

## **6. TEMPLATES**

Geen vaste templates toegewezen vanuit `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/` voor `06_FINANCE`. Financiële brondocumenten worden in Moneybird beheerd.

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| TBD | TBD | Artist-scoped finance workflow moet nog worden vastgesteld; gebruik niet de CM-brede root-finance flow |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| TBD | TBD | Artist-scoped finance SOP moet nog worden vastgesteld; gebruik niet de CM-brede root-finance SOP |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| TBD | TBD | Nog geen artist-finance playbook gedocumenteerd |

---

## **10. OWNER AGENT**

**CM MONEY AGENT**

CM MONEY AGENT beheert de financiële werklaag van het artistdossier: budgetten, royalty- en uitbetalingsoverzichten en de afstemming met Moneybird als financiële waarheid.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM OPS AGENT | Operationele coördinatie binnen het artistdossier. |
| CM CONTROL AGENT | Governance-controle en escalatie. |
| CM VAULT AGENT | Archivering en documentbeheer. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM MONEY AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken of bijwerken van budget/overzicht | Level 2 | CM MONEY AGENT |
| Financiële toezegging namens artiest | Level 4 | Sophia |
| Externe verzending van financieel document | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

Superseded of niet-actieve financiële documenten gaan naar `09_ARCHIVE` binnen hetzelfde artistdossier. Financiële documenten worden nooit verwijderd zonder Sophia-approval. CM VAULT AGENT ondersteunt archivering na instructie van CM MONEY AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Patroon: `YYYY-MM-DD_[ARTIST]_FINANCE_[DOCUMENTTYPE]_vX.Y`
- Gebruik underscores, geen spaties
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `2026-03-01_[ARTIST]_FINANCE_BUDGET_v1.0.xlsx`
Incorrect: `budget artist nieuw definitief.xlsx`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Moneybird | Primaire financiële waarheid | Actief (financiële bron) |
| Google Drive | Operationele werkplek voor finance-kopieën en werkbestanden | Actief |
| GitHub | Bron van finance-workflows en SOPs (referentie) | Actief |
| ClickUp | Taakbeheer voor finance-actiepunten | Actief |
| Gmail | Financiële correspondentie | Actief |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Facturen, bonnen, kwitanties, BTW | Moneybird |
| Budgetten en werkbestanden | Drive (`06_FINANCE` binnen het artistdossier) |
| Taakstatus finance | ClickUp |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken en bijwerken van budgetten, overzichten en referenties
- Voorbereiden van financiële documenten voor review

**Vereist Sophia-approval (Level 4):**
- Financiële toezeggingen namens de artiest
- Externe verzending van financiële documenten
- Verwijdering van bestanden

**Attentiepunten:**
- Moneybird blijft de financiële waarheid; sla hier geen primaire bronadministratie op.
- Sla alleen documenten op die binnen deze mapspecificatie passen; bij twijfel escaleren naar de Owner Agent.

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

- Input: financiële brondata uit Moneybird en fee-/budgetafspraken uit `02_CONTRACT`.
- Output: financiële overzichten en referenties voor management en rapportage.
- Gekoppelde systemen: Moneybird (bron), ClickUp (uitvoering), `07_LEGAL/APPROVALS` (approvals).

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Financiële documenten herleidbaar naar Moneybird | 100% | Steekproef per kwartaal |
| Geen primaire bronadministratie in Drive | 0 afwijkingen | Review door CM MONEY AGENT |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Primaire factuur in `06_FINANCE` als bronadministratie | Registreer in Moneybird; bewaar hier alleen een referentie |
| Contract opgeslagen in `06_FINANCE` | Verplaats naar `02_CONTRACT` |
| CM-brede financiën in het artistdossier | Verplaats naar `06_FINANCE` op rootniveau |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`
- [ ] Owner Agent klopt met `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveerregels kloppen met `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Artist Folder Standard | `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

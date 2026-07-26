# **MAP SPECIFICATION — 99_ARCHIVE**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `99_ARCHIVE` |
| Drive-pad | `OS_CUSTOMMADE/99_ARCHIVE` |
| Owner Agent | CM VAULT AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |

---

## **2. DOEL**

`99_ARCHIVE` is het centrale archief van het CM Operating System. Hier worden afgeronde, superseded of niet-actieve documenten, dossiers en legacy-materiaal opgeslagen dat niet meer in de actieve werkstructuur thuishoort maar bewaard moet blijven. CM VAULT AGENT beheert het archief; geen enkel document wordt verwijderd zonder Sophia-approval. `99_ARCHIVE` is een eindbestemming, geen doorgeefluik.

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Legacy-document | Documenten uit vorige structuren of perioden die niet meer actief zijn | `LEGACY_CONTRACT_[NAAM]_2023.pdf` |
| Gearchiveerd dossier | Volledig dossier (artist, client, deal) dat niet meer actief is | `ARCHIVED_ARTIST_[NAAM]_2024/` |
| Review hold-document | Document in tijdelijke hold voor review vóór definitieve archivering of verwijdering | `REVIEW_HOLD_[ONDERWERP].docx` |
| Jaararchief | Jaargebonden documenten en dossiers | `2024/`, `2025/` |

---

## **4. VERBODEN DOCUMENTEN**

- Actieve clientdossiers (→ `03_CLIENTS`)
- Actieve artistdossiers (→ `02_ARTIST_MANAGEMENT`)
- Actieve dealdossiers (→ `04_DEALS` of `01_MASTER_BOUTIQUE`)
- Actieve financiële documenten (→ `06_FINANCE`)
- Actieve juridische documenten (→ `07_LEGAL`)
- Actieve marketing- of contentbestanden (→ `08_MARKETING` of `09_CONTENT`)
- Documenten die nog in gebruik zijn of waarop actieve acties lopen

---

## **5. SUBMAPPEN**

```text
99_ARCHIVE
├── ARTIST_MANAGEMENT
├── CLIENTS
├── DEALS
├── REVIEW_HOLD_OLD_STRUCTURE
├── LEGACY_ROOTS
└── MIGRATION_LOGS
```

| Submap | Gebruik |
|---|---|
| `ARTIST_MANAGEMENT` | Gearchiveerde artistdossiers en -documenten. |
| `CLIENTS` | Gearchiveerde clientdossiers en -documenten. |
| `DEALS` | Gearchiveerde dealdossiers en -documenten. |
| `REVIEW_HOLD_OLD_STRUCTURE` | Documenten in tijdelijke hold voor review vóór definitieve archivering of verwijdering. |
| `LEGACY_ROOTS` | Legacy-materiaal van vorige structuren, rootnamen of niet-actieve projecten. |
| `MIGRATION_LOGS` | Logs en verslagen van Drive-migraties en structuurwijzigingen. |

---

## **6. TEMPLATES**

Geen vaste templates toegewezen aan `99_ARCHIVE`.

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Archive Flow | `docs/05_OPERATIONS/WORKFLOWS/ARCHIVE_FLOW.md` | Einde van samenwerking, deal-closing of periodiek review |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Archive SOP | `docs/05_OPERATIONS/SOPS/ARCHIVE_SOP.md` | Archiveringsprocedure voor inactieve dossiers, legacy-materiaal en migratielog-beheer |

---

## **9. PLAYBOOKS**

Geen vaste Playbooks toegewezen aan `99_ARCHIVE`.

---

## **10. OWNER AGENT**

**CM VAULT AGENT**

CM VAULT AGENT beheert `99_ARCHIVE` als primaire eigenaar. De agent voert alle archiveringsacties uit, bewaakt de integriteit van het archief en zorgt dat geen enkel document wordt verwijderd zonder Sophia-approval.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM CONTROL AGENT | Governance-bewaking van het archief en escalatie bij governance-conflicten of verwijderingsverzoeken. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM VAULT AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Archiveren van document of dossier | Level 3 | CM VAULT AGENT (na instructie van map-owner) |
| Plaatsen in `REVIEW_HOLD` | Level 3 | CM VAULT AGENT |
| Definitieve verwijdering van document | Level 4 | Sophia |
| Archivering van volledig artistdossier bij einde samenwerking | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde artistfasen gaan naar `02_ARTIST_MANAGEMENT/[ARTIST]/09_ARCHIVE`.
- Volledig afgeronde artistdossiers (einde samenwerking) gaan naar `99_ARCHIVE` na Sophia-approval.
- Afgeronde deals gaan naar `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/99_ARCHIEF` of centrale `99_ARCHIVE`.
- Legacy-materiaal gaat naar `99_ARCHIVE/LEGACY_ROOTS`.
- Jaargebonden archief gaat naar `99_ARCHIVE/[JAAR]`.
- Contracten, facturen, bonnen, kwitanties, juridische dossiers en bewijsstukken worden **nooit** verwijderd.
- Geen enkel document wordt verwijderd zonder Sophia-approval.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik prefix `ARCHIVED_` of `LEGACY_` voor gearchiveerde items
- Gebruik jaar als context: `_2024`, `_2023`
- Geen `final`, `new`, `copy` in archiefnamen

Correct: `ARCHIVED_ARTIST_NAAM_2024/`
Incorrect: `oud artist map nieuw 2024/`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van het centrale archief | Actief |
| GitHub | Bron van archiverings-SOPs en governance (referentie) | Actief |
| ClickUp | Taakbeheer voor archiveringsopdrachten | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Archiverings-governance | GitHub (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/04_SYSTEMS/DRIVE_MAPPING.md`) |
| Gearchiveerde dossiers en documenten | Drive (`99_ARCHIVE/`) |
| Taakstatus archivering | ClickUp |
| Goedgekeurde verwijderingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Verplaatsen van afgeronde documenten naar `99_ARCHIVE` na instructie van map-owner
- Plaatsen van documenten in `REVIEW_HOLD` voor review
- Bijhouden van archief-overzicht

**Vereist Sophia-approval (Level 4):**
- Definitieve verwijdering van enig document
- Archivering van volledig artistdossier bij einde samenwerking
- Verwijdering van juridische, financiële of contractuele documenten

**Attentiepunten:**
- `99_ARCHIVE` is een eindbestemming; documenten die hier staan worden niet teruggezet zonder expliciete Sophia-instructie
- `REVIEW_HOLD` is een tijdelijke status; documenten hier moeten binnen kwartaal definitief worden geclassificeerd
- CM VAULT AGENT voert archivering altijd uit op instructie van de relevante map-owner

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `99_ARCHIVE`:**
- Afgeronde artistdossiers vanuit `02_ARTIST_MANAGEMENT/[ARTIST]/09_ARCHIVE`
- Afgeronde dealdossiers vanuit `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/99_ARCHIEF`; `01_MASTER_BOUTIQUE` bevat geen concrete dealcases of per-case archiefmap
- Legacy-materiaal vanuit alle andere mappen
- Instructies van map-owners via CM VAULT AGENT

**Output vanuit `99_ARCHIVE`:**
- Gearchiveerde dossiers blijven in `99_ARCHIVE` (eindbestemming)
- Uitsluitend op Sophia-instructie: verwijdering of terugzetting

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| `REVIEW_HOLD` leeg na kwartaal | Alle items geclassificeerd of gearchiveerd | Kwartaalreview door CM VAULT AGENT |
| Geen verwijdering zonder approval | 0 verwijderingen zonder Sophia-approval | Approval Register check |
| Archivering binnen 30 dagen na einde samenwerking | 100% van afgeronde dossiers gearchiveerd | CM VAULT AGENT check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Actief dossier opgeslagen in `99_ARCHIVE` | Verplaats terug naar juiste actieve map |
| Document verwijderd uit archief zonder Sophia-approval | Herstel document; registreer incident; escaleer naar CM CONTROL AGENT en Sophia |
| `REVIEW_HOLD` langer dan kwartaal bezet | Classificeer of archiveer; registreer in ClickUp |
| Legacy-materiaal opgeslagen in verkeerde archief-submap | Verplaats naar `LEGACY_ROOTS` |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM VAULT AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] `REVIEW_HOLD` is leeg of alle items zijn geclassificeerd

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Approval Log | `docs/00_GOVERNANCE/APPROVAL_LOG.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

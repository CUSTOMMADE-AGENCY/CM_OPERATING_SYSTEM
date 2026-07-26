# **MAP SPECIFICATION — 06_FINANCE**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `06_FINANCE` |
| Drive-pad | `OS_CUSTOMMADE/06_FINANCE` |
| Owner Agent | CM MONEY AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` V1.4 |

---

## **2. DOEL**

`06_FINANCE` bevat financiële documenten, Moneybird-referenties, belastingaangiften, bankafschriften, statements en finance-exports voor CM als bedrijf. Moneybird is de primaire financiële waarheid; `06_FINANCE` in Drive is de operationele werkplek voor finance-kopieën, exports en aanverwante financiële werkbestanden. `06_FINANCE` bevat geen artistfinanciën als primaire bron (→ `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`), geen clientdossiers (→ `03_CLIENTS`) en geen juridische documenten (→ `07_LEGAL`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Moneybird-referentie | Exports, screenshots of referentiedocumenten uit Moneybird | `MONEYBIRD_EXPORT_Q1_2026.xlsx` |
| Belastingaangifte | BTW-aangiften, inkomstenbelasting en aanverwante belastingdocumenten | `BTW_AANGIFTE_Q1_2026.pdf` |
| Bankafschrift | Bank statements en betalingsbewijzen | `BANK_STATEMENT_202601.pdf` |
| Jaarafschrift | Jaarlijkse financiële overzichten en statements | `STATEMENT_2025_ANNUAL.pdf` |
| Finance-export | Geëxporteerde finance-data voor rapportage of analyse | `ADMIN_EXPORT_2025_FULL.xlsx` |
| Open Posten overzicht | Overzicht van openstaande facturen en betalingen | `OPEN_POSTEN_202606.pdf` |
| Cashflow-document | Cashflow-prognose en -rapportage | `CASHFLOW_Q2_2026.xlsx` |

---

## **4. VERBODEN DOCUMENTEN**

- Primaire facturen en bonnen als enig document (→ Moneybird als primaire bron)
- Artistfinanciën als primaire bron (→ `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`)
- Clientdossiers (→ `03_CLIENTS`)
- Juridische documenten en contracten (→ `07_LEGAL`)
- Marketing- of contentmateriaal (→ `08_MARKETING` of `09_CONTENT`)
- Persoonlijke bankafschriften van teamleden

---

## **5. SUBMAPPEN**

```text
06_FINANCE
├── 00_START_HIER
├── MONEYBIRD_REFERENCE
├── BELASTINGDIENST
├── BANK
├── STATEMENTS
├── ADMIN_EXPORTS
└── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | Finance-instructies, overzicht en startpunt voor `06_FINANCE`. |
| `MONEYBIRD_REFERENCE` | Exports, screenshots en referentiedocumenten uit Moneybird. |
| `BELASTINGDIENST` | BTW-aangiften, inkomstenbelasting en belastingcorrespondentie. |
| `BANK` | Bank statements, betalingsbewijzen en bankafschriften. |
| `STATEMENTS` | Jaarlijkse en periodieke financiële overzichten. |
| `ADMIN_EXPORTS` | Geëxporteerde finance-data voor rapportage, reconciliatie en analyse. |
| `99_ARCHIEF` | Afgeronde, verouderde of gearchiveerde financiële documenten. |

---

## **6. TEMPLATES**

Geen vaste templates toegewezen vanuit `docs/03_SHARED_SERVICES/TEMPLATES/` voor `06_FINANCE`. Moneybird-templates worden beheerd binnen Moneybird.

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Finance Intake Flow (artist) | TBD | Finance-intake voor artist; output naar `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE` |
| Finance Reconciliation Flow | `docs/06_FINANCE/FINANCE_RECONCILIATION_FLOW.md` | Periodieke finance-reconciliatie |
| Year End Finance Flow | `docs/06_FINANCE/YEAR_END_FINANCE_FLOW.md` | Jaarafsluiting en jaarrapportage |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Finance Intake SOP | `docs/06_FINANCE/FINANCE_INTAKE_SOP.md` | Finance-intake en -verwerking: Moneybird-exports, bankafschriften, BTW-aangifte-voorbereiding |

---

## **9. PLAYBOOKS**

Geen vaste Playbooks toegewezen aan `06_FINANCE`.

---

## **10. OWNER AGENT**

**CM MONEY AGENT**

CM MONEY AGENT is eigenaar van `06_FINANCE` (V1.4 van het Agent Register). De agent bewaakt financiële integriteit, verwerkt Moneybird-referenties, signaleert BTW-verplichtingen, bewaakt Open Posten en Cashflow, en escaleert bij financiële risico's.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM CONTROL AGENT | Governance-bewaking van de map en escalatie bij financiële conflicten. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM MONEY AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Toevoegen van finance-referentie of export | Level 2 | CM MONEY AGENT |
| Bijwerken van cashflow-prognose | Level 2 | CM MONEY AGENT |
| Financiële toezegging of correctie | Level 4 | Sophia |
| Indiening bij Belastingdienst | Level 4 | Sophia |
| Externe communicatie over financiën | Level 4 | Sophia |
| Verwijdering van financieel document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde jaargebonden financiële documenten gaan naar `06_FINANCE/99_ARCHIEF` of naar `99_ARCHIVE/[JAAR]`.
- Facturen, bonnen, kwitanties en belastingdocumenten worden nooit verwijderd.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT ondersteunt archivering na instructie van CM MONEY AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik periodekoppeling: `Q1_2026`, `202601`, `2025_ANNUAL`
- Gebruik type als prefix: `BTW_`, `BANK_`, `MONEYBIRD_`, `CASHFLOW_`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `BTW_AANGIFTE_Q1_2026.pdf`
Incorrect: `btw aangifte nieuw definitief.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Moneybird | Primaire financiële waarheid: facturen, bonnen, kwitanties, BTW, Open Posten, Cashflow | Actief (financiële bron) |
| Google Drive | Operationele werkplek voor finance-kopieën, exports en werkbestanden | Actief |
| GitHub | Bron van finance-workflows en SOPs (referentie) | Actief |
| ClickUp | Taakbeheer voor finance-actiepunten | Actief |
| Gmail | Financiële correspondentie | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Facturen, bonnen, kwitanties | Moneybird (primaire bron) |
| BTW en Open Posten | Moneybird |
| Cashflow | Moneybird (primair) + `06_FINANCE/STATEMENTS` (werkbestand) |
| Belastingdocumenten | `06_FINANCE/BELASTINGDIENST` |
| Taakstatus finance | ClickUp |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Toevoegen van Moneybird-exports en finance-referenties
- Bijwerken van cashflow-werkbestanden
- Signaleren van BTW-verplichtingen en Open Posten aan Sophia

**Vereist Sophia-approval (Level 4):**
- Financiële toezegging of correctie
- Indiening bij Belastingdienst
- Externe communicatie over financiën
- Verwijdering van financiële documenten

**Attentiepunten:**
- Moneybird is altijd de primaire financiële bron; Drive is de werkplek voor kopieën en exports
- Artistfinanciën als primaire bron staan in `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`
- Finance-check bij client- en artist-onboarding is verplicht (CM MONEY AGENT)
- CM MONEY AGENT is eigenaar per Agent Register V1.4; eerder was dit anders

---

## **18. AUTOMATISERINGEN**

| Scenario | Make ID | Trigger | Status |
|---|---|---|---|
| CM ▸ BTW Signalering (Kwartaal) | `6406883` | 1e van elke maand, 08:00 — actie alleen in kwartaalmaanden (jan, apr, jul, okt) | Actief |

**CM ▸ BTW Signalering (Kwartaal):**
- Stuurt herinnering naar `info@custommade.agency` en maakt ClickUp-taak aan in `OPERATIONS > AUTOMATIONS`
- Filter: alleen actief in maand 1, 4, 7 of 10
- Indiening bij Belastingdienst vereist Sophia-approval (Level 4)

**Gepland (nog in te richten):**
- Moneybird-export naar Drive (vereist Moneybird-verbinding in Make)

---

## **19. AFHANKELIJKHEDEN**

**Input naar `06_FINANCE`:**
- Moneybird → exports, referenties
- Artist finance-kopieën vanuit `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`
- Client finance-signalen vanuit `03_CLIENTS` bij onboarding

**Output vanuit `06_FINANCE`:**
- Belastingaangiften → Belastingdienst (na Sophia-approval)
- Jaarafschriften → accountant of extern (na Sophia-approval)
- Finance-rapportage → Sophia en CM CONTROL AGENT

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Moneybird-referentie actueel | Maximaal 1 maand achter | CM MONEY AGENT check maandelijks |
| BTW-aangifte op tijd | Ingediend voor deadline | CM MONEY AGENT check |
| Geen verwijdering zonder approval | 0 niet-goedgekeurde verwijderingen | Approval Register check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Primaire facturen alleen opgeslagen in Drive | Registreer in Moneybird; gebruik Drive voor referentiekopie |
| Artistfinanciën opgeslagen in `06_FINANCE` als primaire bron | Artistfinanciën horen in `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE` |
| Financieel document verwijderd zonder approval | Herstel document; registreer incident; escaleer naar CM CONTROL AGENT en Sophia |
| Belastingaangifte ingediend zonder Sophia-approval | Registreer in Approval Register; herstel procedure |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM MONEY AGENT) klopt met `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` V1.4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Moneybird is als primaire bron correct geconfigureerd
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Agent Register V1.4 | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |
# 06_FINANCE Map Specification

## Doel

Dossier-specifieke financiële referenties en approvals beheren zonder Moneybird te vervangen.

## Functie binnen CM OS

Deze map borgt de inhoudelijke waarheid voor dit specifieke operationele domein zonder de structurele regels van Folder Standards te dupliceren.

## Toepassing

Gebruik voor `06_FINANCE` binnen de goedgekeurde Drive-dossiers waar deze map voorkomt.

## Alleen gebruiken voor

- Budgetten
- Kostenoverzichten
- Royalty references
- Fee-afspraken
- Recoupment notes
- PO-referenties
- Financiële approvals

## Niet gebruiken voor

- Primaire factuuradministratie
- Bonnenarchief als bronwaarheid
- Contracten zonder financiële context
- Social assets
- Press photos

## Verplichte documenttypes

- Budgetten
- Kostenoverzichten
- Royalty references
- Fee-afspraken
- Recoupment notes
- PO-referenties
- Financiële approvals

## Verboden documenttypes

- Primaire factuuradministratie
- Bonnenarchief als bronwaarheid
- Contracten zonder financiële context
- Social assets
- Press photos

## Verplichte Templates

- 06_FINANCE Register Template
- Approval Evidence Template
- Version Log Template

## Gekoppelde Workflows

- 06_FINANCE review workflow
- Approval workflow
- Archive workflow

## Gekoppelde SOP's

- SOP 06_finance document opslaan
- SOP approval evidence controleren
- SOP versie archiveren

## Gekoppelde Playbooks

- 06_FINANCE Playbook
- Dossier Hygiene Playbook

## Owner Agent

CM MONEY AGENT

## Support Agents

- CM OPS AGENT
- CM CONTROL AGENT
- CM LEGAL AGENT

## Approval Level

Level 3

## Naamconventies

`YYYY-MM-DD_[ENTITY]_FINANCE_[DOCUMENTTYPE]_vX.Y`

## Metadata

- Entity name
- Document type
- Owner agent
- Approval status
- Version
- Review date
- Sensitivity

## Archivering

Superseded documenten gaan naar `09_ARCHIVE` of blijven in deze archive-map wanneer dit de aangewezen archieflocatie is.

## Automatiseringen

06_FINANCE document voltooid
↓
Metadata controleren
↓
Approval status bijwerken
↓
ClickUp taak updaten
↓
Superseded versie archiveren

## AI Instructies

AI mag alleen documenten opslaan die expliciet binnen deze mapspecificatie passen. Bij twijfel niet automatisch classificeren en escaleren naar de Owner Agent.

## Quality Checklist

- Documenttype past bij deze map
- Verboden documenttypes ontbreken
- Naamconventie klopt
- Metadata is compleet
- Approval level is gerespecteerd
- Superseded versies zijn correct gearchiveerd

# **MAP SPECIFICATION — 01_MASTER_BOUTIQUE**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `01_MASTER_BOUTIQUE` |
| Drive-pad | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` |
| Owner Agent | CM LEGAL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/01_MASTER_BOUTIQUE/` |

---

## **2. DOEL**

`01_MASTER_BOUTIQUE` bevat alle operationele dossiers voor Master Boutique-cases: catalogusaankopen, rechtenverkoop en aanverwante dealtrajecten onder het Master Boutique-label. Elke case krijgt een eigen submap met de lean dealstructuur. `01_MASTER_BOUTIQUE` bevat geen algemene deals die niet onder het Master Boutique-label vallen (→ `04_DEALS`) en geen artistmanagementdossiers (→ `02_ARTIST_MANAGEMENT`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Rechtenregister | Catalogus- en rechteninventarisatie per case | `RECHTEN_REGISTER_[CASE].xlsx` |
| Contracten en bewijsstukken | Overeenkomsten, bewijsstukken van rechtenoverdracht, juridische onderbouwing | `CONTRACT_[CASE]_SIGNED.pdf` |
| Waardering en verkooppakket | Waardebepaling, Deal Memo, Buyer Package, finale exports | `DEAL_MEMO_[CASE]_V1.pdf` |
| Outreach-referenties | Buyer lead-referenties, outreach-notities en ClickUp-verwijzingen | `OUTREACH_NOTES_[CASE].docx` |
| README en instructies | Statusdocument, document requests, governance-notities per case | `README_[CASE].md` |
| Data Room-documenten | Due diligence-materiaal (alleen na due diligence-fase) | `DATA_ROOM_INDEX_[CASE].pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Algemene deals buiten Master Boutique-scope (→ `04_DEALS`)
- Artistmanagementdossiers (→ `02_ARTIST_MANAGEMENT`)
- Facturen en bonnen (→ `06_FINANCE` of Moneybird)
- Marketing- of contentmateriaal (→ `08_MARKETING` of `09_CONTENT`)
- Clientdossiers zonder dealkoppeling (→ `03_CLIENTS`)
- Lege casenamen of ad-hoc mappen buiten de lean dealstructuur

---

## **5. SUBMAPPEN**

Gebruik de lean dealstructuur per Master Boutique-case. Data Room-, LOI-, APA-, Closing- en Success Fee-mappen worden pas aangemaakt wanneer een deal de due diligence-fase bereikt.

```text
01_MASTER_BOUTIQUE
└── [CASE_NAAM]
    ├── 00_START_HIER
    ├── 01_RECHTEN_REGISTER
    ├── 02_CONTRACTEN_BEWIJS
    ├── 03_WAARDERING_VERKOOPPAKKET
    ├── 04_OUTREACH_CLICKUP
    └── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | README, status, instructies, document requests en governance-notities voor de case. |
| `01_RECHTEN_REGISTER` | Rechten- en catalogusdata voor de case. |
| `02_CONTRACTEN_BEWIJS` | Contracten, bewijsstukken en juridische onderbouwing. |
| `03_WAARDERING_VERKOOPPAKKET` | Waardering, Deal Memo, Buyer Package en finale export. |
| `04_OUTREACH_CLICKUP` | Buyer lead-referenties, outreach-notities en ClickUp-verwijzingen. |
| `99_ARCHIEF` | Superseded exports, oude ad-hoc sheets en niet-leidende bestanden. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Deal Negotiation Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | `01_MASTER_BOUTIQUE/[CASE]/04_OUTREACH_CLICKUP` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Buyer Outreach Workflow | `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md` | Start van buyer outreach voor een case |
| Dealflow catalogusdossier | `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` | Intake van nieuw Master Boutique-dossier |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Due Diligence Checklist | `docs/01_MASTER_BOUTIQUE/DUE_DILIGENCE_CHECKLIST.md` | Due diligence-fase van een Master Boutique-deal |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| APA Negotiation Playbook | `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md` | APA-onderhandeling voor catalogusverkoop |
| Catalog Valuation Playbook | `docs/01_MASTER_BOUTIQUE/CATALOG_VALUATION_PLAYBOOK.md` | Waardebepaling van muziekcatalogus |
| Buyer Outreach Playbook | `docs/06_PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` | Buyer outreach en kwalificatie |
| Sell Side Process Playbook | `docs/06_PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` | Verkooptraject aan verkoperskant |
| Buy Side Process Playbook | `docs/06_PLAYBOOKS/BUY_SIDE_PROCESS_PLAYBOOK.md` | Aankooptraject aan koperskant |
| Deal Negotiation Playbook | `docs/06_PLAYBOOKS/DEAL_NEGOTIATION_PLAYBOOK.md` | Dealonderhandeling |
| Catalog Acquisition Playbook | `docs/06_PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` | Catalogusaankoop |

---

## **10. OWNER AGENT**

**CM LEGAL AGENT**

CM LEGAL AGENT beheert alle Master Boutique-cases als primaire eigenaar. De agent bewaakt de juridische integriteit van rechtenregisters, contracten en deal packages, en coördineert het dealtraject van intake tot closing.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM OPS AGENT | Operationele ondersteuning bij casenaming, dossierstructuur en intake-coördinatie. |
| CM MONEY AGENT | Finance-signalen bij waardering, succes fee en financiële dealstructuur. |
| CM VAULT AGENT | Archivering van afgeronde cases en superseded exports. |
| CM PROSPECT AGENT | Buyer outreach, buyer kwalificatie en buyer database-beheer. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM LEGAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken nieuw casedossier | Level 3 | CM LEGAL AGENT |
| Bijwerken rechtenregister | Level 3 | CM LEGAL AGENT |
| Versturen van Buyer Package aan externe partij | Level 4 | Sophia |
| Ondertekening of vastleggen juridische verplichting | Level 4 | Sophia |
| Externe distributie van Deal Memo of verkooppakket | Level 4 | Sophia |
| Sluiten of archiveren van een deal | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde Master Boutique-cases gaan naar `01_MASTER_BOUTIQUE/[CASE]/99_ARCHIEF` of naar de centrale `99_ARCHIVE`.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM LEGAL AGENT.
- Contracten, rechtenregisters en bewijsstukken worden nooit verwijderd.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Casenamen in hoofdletters met underscores: `[CASE_NAAM]`
- Bestandsnamen met casekoppeling: `RECHTEN_REGISTER_[CASE].xlsx`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen
- Versienummering met `_V1`, `_V2` etc. bij dealpackages

Correct: `DEAL_MEMO_MASTERCASE_V2.pdf`
Incorrect: `deal memo nieuw definitief.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle Master Boutique-dossiers | Actief |
| GitHub | Bron van Playbooks, SOPs en workflows voor Master Boutique | Actief |
| ClickUp | Taakbeheer voor dealfases, buyer outreach en actiepunten | Actief (`04_OUTREACH_CLICKUP` bevat verwijzingen) |
| Gmail | Correspondentie met buyers en externe partijen | Actief |
| Moneybird | Financiële documenten bij succes fee of factuurverwerking | Actief (bron van financiële waarheid) |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Deal-structuur en governance | GitHub (`docs/01_MASTER_BOUTIQUE/`, `docs/00_GOVERNANCE/`) |
| Rechtenregisters en contracten | Drive (`01_MASTER_BOUTIQUE/[CASE]/01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`) |
| Taakstatus en dealfases | ClickUp |
| Buyer-correspondentie | Gmail |
| Financiële verwerking | Moneybird |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken van casedossier met lean dealstructuur
- Bijwerken van rechtenregister en interne documenten
- Interne notities en statusupdates in `00_START_HIER`
- Voorbereiding van Buyer Package voor Sophia-review

**Vereist Sophia-approval (Level 4):**
- Externe verspreiding van Buyer Package, Deal Memo of verkooppakket
- Ondertekening of aangaan van juridische verplichting
- Afsluiten of archiveren van een deal
- Verwijdering van bestanden

**Attentiepunten:**
- Data Room-mappen alleen aanmaken na due diligence-fase
- Buyer Database (`docs/01_MASTER_BOUTIQUE/BUYER_DATABASE.md`) is de bron voor buyer-gegevens
- Geen buyer-identificerende informatie in bestandsnamen in de repository

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `01_MASTER_BOUTIQUE`:**
- `docs/01_MASTER_BOUTIQUE/` (GitHub) → Playbooks, SOPs en workflows
- `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT` → rechtenbewijsstukken van artists
- CM PROSPECT AGENT → buyer-kwalificatie en outreach-data

**Output vanuit `01_MASTER_BOUTIQUE`:**
- Buyer Package → externe buyers (na Sophia-approval)
- Ondertekende contracten → `07_LEGAL/CONTRACTS` (na closing)
- Financiële verwerking → Moneybird via CM MONEY AGENT
- Afgeronde cases → `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Casedossier compleet bij intake | Alle 6 lean submappen aanwezig | CM LEGAL AGENT check bij aanmaken |
| Geen externe distributie zonder approval | 0 niet-goedgekeurde externe verzendingen | Approval Register check |
| Archivering binnen 30 dagen na deal-closing | 100% van afgeronde cases gearchiveerd | Kwartaalreview |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Algemene deal opgeslagen in `01_MASTER_BOUTIQUE` | Verplaats naar `04_DEALS` |
| Artistdossier opgeslagen in `01_MASTER_BOUTIQUE` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]` |
| Buyer Package extern verzonden zonder Sophia-approval | Herstop verzending; registreer in Approval Register; escaleer naar Sophia |
| Data Room aangemaakt vóór due diligence-fase | Verwijder of archiveer; her-aanmaken pas bij due diligence |
| Bestandsnamen met `final`, `new`, `copy` | Hernoem conform naamconventie |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM LEGAL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Master Boutique Playbooks | `docs/01_MASTER_BOUTIQUE/` |
| Agent Register | `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

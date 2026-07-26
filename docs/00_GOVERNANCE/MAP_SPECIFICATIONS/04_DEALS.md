# **MAP SPECIFICATION — 04_DEALS**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `04_DEALS` |
| Drive-pad | `OS_CUSTOMMADE/04_DEALS` |
| Owner Agent | CM LEGAL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/01_MASTER_BOUTIQUE/`, `docs/05_OPERATIONS/PLAYBOOKS/` |

---

## **2. DOEL**

`04_DEALS` bevat alle concrete operationele dealdossiers onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`: rechtenbewijs, waardering, buyer-facing dealmateriaal en alle aanverwante deal-governance voor concrete dealcases en assets. Elke dealcase of asset krijgt een eigen submap met de lean dealstructuur. `01_MASTER_BOUTIQUE` bevat uitsluitend context, playbooks, methodieken, marktmodellen, rights modellen, acquisitie frameworks, buyer frameworks, valuation methodieken, due diligence methodieken en algemene kennis; concrete Master Boutique-dealcases staan ook uitsluitend in `04_DEALS`. `04_DEALS` bevat geen artistmanagementdossiers (→ `02_ARTIST_MANAGEMENT`) en geen algemene clientdossiers (→ `03_CLIENTS`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Rechtenregister | Rechten- en catalogusinventarisatie per deal | `RECHTEN_REGISTER_[DEAL].xlsx` |
| Contracten en bewijsstukken | Overeenkomsten, bewijsstukken van rechtenoverdracht | `CONTRACT_[DEAL]_SIGNED.pdf` |
| Waardering en verkooppakket | Waardebepaling, Deal Memo, Buyer Package | `DEAL_MEMO_[DEAL]_V1.pdf` |
| Outreach-referenties | Buyer lead-referenties, outreach-notities en ClickUp-verwijzingen | `OUTREACH_NOTES_[DEAL].docx` |
| README en instructies | Statusdocument, document requests, governance-notities per deal | `README_[DEAL].md` |
| Rights Audit | Rechtenaudit voor deal-verificatie | `RIGHTS_AUDIT_[DEAL].pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Algemene Master Boutique-kennis en methodieken zonder concrete dealcase (→ `01_MASTER_BOUTIQUE`)
- Artistmanagementdossiers (→ `02_ARTIST_MANAGEMENT`)
- Clientdossiers zonder dealkoppeling (→ `03_CLIENTS`)
- Facturen en bonnen als primaire financiële documenten (→ `06_FINANCE` of Moneybird)
- Generieke legal governance (→ `07_LEGAL`)
- Data Room, LOI, APA, Closing en Success Fee-mappen vóór due diligence-fase
- Lege dealnamen of ad-hoc mappen buiten de lean dealstructuur

---

## **5. SUBMAPPEN**

Gebruik de lean dealstructuur per dealcase. Data Room-, LOI-, APA-, Closing- en Success Fee-mappen worden pas aangemaakt wanneer een deal de due diligence-fase bereikt.

```text
OS_CUSTOMMADE
└── 04_DEALS
    └── [DEAL_OR_ASSET_NAME]
        ├── 00_START_HIER
        ├── 01_RECHTEN_REGISTER
        ├── 02_CONTRACTEN_BEWIJS
        ├── 03_WAARDERING_VERKOOPPAKKET
        ├── 04_OUTREACH_CLICKUP
        └── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | README, status, instructies, document requests en governance-notities voor de deal. |
| `01_RECHTEN_REGISTER` | Rechten- en catalogusdata voor de deal. |
| `02_CONTRACTEN_BEWIJS` | Contracten, bewijsstukken en juridische onderbouwing. |
| `03_WAARDERING_VERKOOPPAKKET` | Waardering, Deal Memo, Buyer Package en finale export. |
| `04_OUTREACH_CLICKUP` | Buyer lead-referenties, outreach-notities en ClickUp-verwijzingen. |
| `99_ARCHIEF` | Superseded exports, oude ad-hoc sheets en niet-leidende bestanden. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Rights Audit Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/01_RECHTEN_REGISTER` |
| Deal Negotiation Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/04_OUTREACH_CLICKUP` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Buyer Outreach Workflow | `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md` | Start van buyer outreach voor een deal |
| Dealflow catalogusdossier | `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` | Intake van nieuw dealdossier |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Due Diligence Checklist | `docs/01_MASTER_BOUTIQUE/DUE_DILIGENCE_CHECKLIST.md` | Due diligence-fase van een deal |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| Sell Side Process Playbook | `docs/05_OPERATIONS/PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` | Verkooptraject aan verkoperskant |
| Buy Side Process Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BUY_SIDE_PROCESS_PLAYBOOK.md` | Aankooptraject aan koperskant |
| Deal Negotiation Playbook | `docs/05_OPERATIONS/PLAYBOOKS/DEAL_NEGOTIATION_PLAYBOOK.md` | Dealonderhandeling |
| Catalog Acquisition Playbook | `docs/05_OPERATIONS/PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` | Catalogusaankoop |
| Buyer Outreach Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` | Buyer outreach en kwalificatie |
| APA Negotiation Playbook | `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md` | APA-onderhandeling |
| Catalog Valuation Playbook | `docs/01_MASTER_BOUTIQUE/CATALOG_VALUATION_PLAYBOOK.md` | Waardebepaling |

---

## **10. OWNER AGENT**

**CM LEGAL AGENT**

CM LEGAL AGENT beheert alle dealdossiers in `04_DEALS`. De agent bewaakt de juridische integriteit van rechtenregisters, contracten en deal packages, en coördineert het dealtraject van intake tot closing.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM PROSPECT AGENT | Buyer outreach, buyer kwalificatie en buyer database-beheer. |
| CM MONEY AGENT | Finance-signalen bij waardering, succes fee en financiële dealstructuur. |
| CM VAULT AGENT | Archivering van afgeronde deals en superseded exports. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM LEGAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken nieuw dealdossier | Level 2 | CM LEGAL AGENT |
| Bijwerken rechtenregister | Level 2 | CM LEGAL AGENT |
| Versturen van Buyer Package aan externe partij | Level 4 | Sophia |
| Ondertekening of juridische verplichting | Level 4 | Sophia |
| Externe distributie van Deal Memo of verkooppakket | Level 4 | Sophia |
| Sluiten of archiveren van een deal | Level 4 | Sophia |
| Aanmaken Data Room, LOI, APA, Closing of Success Fee-map | Level 4 | Sophia (na bevestiging due diligence-fase) |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde deals gaan naar `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/99_ARCHIEF` of centrale `99_ARCHIVE`.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM LEGAL AGENT.
- Contracten, rechtenregisters en bewijsstukken worden nooit verwijderd.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Dealnamen in hoofdletters met underscores: `[DEAL_NAAM]`
- Bestandsnamen met dealkoppeling: `RECHTEN_REGISTER_[DEAL].xlsx`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen
- Versienummering met `_V1`, `_V2` bij dealpackages

Correct: `DEAL_MEMO_DEALNAME_V2.pdf`
Incorrect: `deal memo nieuw definitief.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle dealdossiers | Actief |
| GitHub | Bron van Playbooks, SOPs en workflows voor deals | Actief |
| ClickUp | Taakbeheer voor dealfases, outreach en actiepunten | Actief |
| Gmail | Correspondentie met buyers en externe partijen | Actief |
| Moneybird | Financiële verwerking bij succes fee of factuur | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Deal-structuur en governance | GitHub (`docs/01_MASTER_BOUTIQUE/`, `docs/05_OPERATIONS/PLAYBOOKS/`, `docs/00_GOVERNANCE/`) |
| Rechtenregisters en contracten | Drive (`OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/01_RECHTEN_REGISTER`, `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/02_CONTRACTEN_BEWIJS`) |
| Taakstatus en dealfases | ClickUp |
| Buyer-correspondentie | Gmail |
| Financiële verwerking | Moneybird |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken van dealdossier met lean dealstructuur
- Bijwerken van rechtenregister en interne documenten
- Interne notities en statusupdates in `00_START_HIER`
- Voorbereiding van Buyer Package voor Sophia-review

**Vereist Sophia-approval (Level 4):**
- Externe verspreiding van Buyer Package, Deal Memo of verkooppakket
- Ondertekening of aangaan van juridische verplichting
- Afsluiten of archiveren van een deal
- Aanmaken van Data Room, LOI, APA, Closing of Success Fee-mappen
- Verwijdering van bestanden

**Attentiepunten:**
- `04_DEALS` en `07_LEGAL` zijn aparte mappen maar beide eigendom van CM LEGAL AGENT
- Geen buyer-identificerende informatie in bestandsnamen in de repository
- Data Room-mappen uitsluitend na due diligence-fase

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `04_DEALS`:**
- `docs/01_MASTER_BOUTIQUE/` (GitHub) → Playbooks, SOPs en workflows
- `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT` → rechtenbewijsstukken van artists
- CM PROSPECT AGENT → buyer-kwalificatie en outreach-data

**Output vanuit `04_DEALS`:**
- Buyer Package → externe buyers (na Sophia-approval)
- Ondertekende contracten → `07_LEGAL/CONTRACTS` (na closing)
- Financiële verwerking → Moneybird via CM MONEY AGENT
- Afgeronde deals → `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Dealdossier compleet bij intake | Alle 6 lean submappen aanwezig | CM LEGAL AGENT check bij aanmaken |
| Geen externe distributie zonder approval | 0 niet-goedgekeurde externe verzendingen | Approval Register check |
| Archivering binnen 30 dagen na deal-closing | 100% van afgeronde deals gearchiveerd | Kwartaalreview |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Algemene Master Boutique-methodiek in `04_DEALS` opgeslagen | Verplaats naar `01_MASTER_BOUTIQUE`; concrete dealcases blijven in `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`. |
| Artistdossier in `04_DEALS` opgeslagen | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]` |
| Buyer Package extern verzonden zonder Sophia-approval | Herstop; registreer in Approval Register; escaleer naar Sophia |
| Data Room aangemaakt vóór due diligence-fase | Verwijder of archiveer; her-aanmaken pas bij due diligence |
| Bestandsnamen met `final`, `new`, `copy` | Hernoem conform naamconventie |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM LEGAL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Master Boutique Playbooks | `docs/01_MASTER_BOUTIQUE/` |
| Deal Playbooks | `docs/05_OPERATIONS/PLAYBOOKS/` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

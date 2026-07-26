# **MAP SPECIFICATION GAP REPORT**

## **METADATA**

| Veld | Waarde |
|---|---|
| Document | MAP_SPECIFICATION_GAP_REPORT.md |
| Versie | 1.0 |
| Datum | 2026-07-01 |
| Eigenaar | CM CONTROL AGENT |
| Status | Actief |

---

## **DOEL**

Dit rapport documenteert geconstateerde gaps, inconsistenties en openstaande punten in de CM Map Specifications, de Drive-structuur en de bijbehorende governance. Elk item krijgt een status en een actie-eigenaar.

---

## **GECONSTATEERDE GAPS**

### **GAP-001: DRIVE_MAPPING.md Section 5 — 00_ADMIN submapstructuur niet actueel**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestand | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` Section 5 |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
`docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` Section 5 vermeldt voor `00_ADMIN` de volgende submapnamen: `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES`. De goedgekeurde en in gebruik zijnde structuur is: `01_ONBOARDING`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_HR`, `05_CURSUS_MASTERCLASSES`. De `00_ADMIN.md` Map Specification gebruikt de actuele structuur als norm.

**Actie:**
Opgelost op 2026-07-01: `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` bijgewerkt naar `01_INBOX_REVIEW`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_REPORTS`, `05_APPROVALS`. `00_ADMIN.md` Map Specification gesynchroniseerd.

---

### **GAP-002: DRIVE_MAPPING.md Section 5 — 07_LEGAL submapstructuur uitgebreid**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestand | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` Section 5 |
| Eigenaar | CM LEGAL AGENT |

**Beschrijving:**
`docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` Section 5 vermeldt voor `07_LEGAL`: `CONTRACTEN`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `APPROVALS`, `99_ARCHIEF`. De `07_LEGAL.md` Map Specification documenteert een uitgebreide actuele structuur inclusief `00_START_HIER`, `CONTRACTS` (i.p.v. `CONTRACTEN`), `LEGAL_REVIEW`, `EVIDENCE` en `APPROVALS/CM_APPROVAL_REGISTER`. Dit vereist afstemming: zijn `CONTRACTEN` en `CONTRACTS` hetzelfde? Zijn `LEGAL_REVIEW` en `EVIDENCE` nieuwe submappen?

**Actie:**
Opgelost op 2026-07-01: `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` bijgewerkt naar `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW`, `EVIDENCE`. `07_LEGAL.md` Map Specification is consistent.

---

### **GAP-003: Ontbrekende SOPs voor meerdere Drive-mappen**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken mappen | `00_ADMIN`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE` |
| Eigenaar | CM CONTROL AGENT (coördinatie), relevant Owner Agent per map |

**Beschrijving:**
Meerdere Map Specifications verwijzen naar SOPs met status `TBD`. Er zijn geen gedocumenteerde SOPs voor: intern onboarding beheer, operationeel beheer, finance intake, legal review, marketingproces, contentpublicatie en archivering. Bestaande SOPs zijn beschikbaar voor `02_ARTIST_MANAGEMENT` en `03_SHARED_SERVICES`.

**Actie:**
Opgelost op 2026-07-01: 7 SOPs aangemaakt in `docs/03_CLIENTS/` en Map Specifications bijgewerkt:

| SOP | Bestand | Eigenaar |
|---|---|---|
| Admin SOP | `docs/05_OPERATIONS/SOPS/ADMIN_SOP.md` | CM CONTROL AGENT |
| Operations SOP | `docs/05_OPERATIONS/SOPS/OPERATIONS_SOP.md` | CM CONTROL AGENT |
| Finance Intake SOP | `docs/06_FINANCE/FINANCE_INTAKE_SOP.md` | CM MONEY AGENT |
| Legal Review SOP | `docs/07_LEGAL/LEGAL_REVIEW_SOP.md` | CM LEGAL AGENT |
| Marketing SOP | `docs/08_MARKETING/MARKETING_SOP.md` | CM SOCIAL AGENT |
| Content Publication SOP | `docs/09_CONTENT/CONTENT_PUBLICATION_SOP.md` | CM SOCIAL AGENT |
| Archive SOP | `docs/05_OPERATIONS/SOPS/ARCHIVE_SOP.md` | CM VAULT AGENT |

---

### **GAP-004: Ontbrekende Workflows voor meerdere Drive-mappen**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken mappen | `00_ADMIN`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE` |
| Eigenaar | CM FLOW AGENT (coördinatie), relevant Owner Agent per map |

**Beschrijving:**
Meerdere Map Specifications verwezen naar workflows met status `TBD`. Er waren geen gedocumenteerde workflows voor: intern onboarding, governance-export, proceswijziging, finance reconciliation, year-end finance, contract lifecycle, legal review, marketing planning, campagne delivery, CM-contentpublicatie en archivering.

**Actie:**
Opgelost op 2026-07-01: 11 Workflows aangemaakt in `docs/03_CLIENTS/` en Map Specifications bijgewerkt:

| Workflow | Bestand | Eigenaar |
|---|---|---|
| Intern Onboarding Flow | `docs/05_OPERATIONS/WORKFLOWS/INTERN_ONBOARDING_FLOW.md` | CM CONTROL AGENT |
| Governance Export Flow | `docs/05_OPERATIONS/WORKFLOWS/GOVERNANCE_EXPORT_FLOW.md` | CM CONTROL AGENT |
| Process Change Flow | `docs/05_OPERATIONS/WORKFLOWS/PROCESS_CHANGE_FLOW.md` | CM CONTROL AGENT |
| Finance Reconciliation Flow | `docs/06_FINANCE/FINANCE_RECONCILIATION_FLOW.md` | CM MONEY AGENT |
| Year End Finance Flow | `docs/06_FINANCE/YEAR_END_FINANCE_FLOW.md` | CM MONEY AGENT |
| Contract Lifecycle Flow | `docs/07_LEGAL/CONTRACT_LIFECYCLE_FLOW.md` | CM LEGAL AGENT |
| Legal Review Flow | `docs/07_LEGAL/LEGAL_REVIEW_FLOW.md` | CM LEGAL AGENT |
| Marketing Planning Flow | `docs/08_MARKETING/MARKETING_PLANNING_FLOW.md` | CM SOCIAL AGENT |
| Campaign Delivery Flow | `docs/08_MARKETING/CAMPAIGN_DELIVERY_FLOW.md` | CM SOCIAL AGENT |
| Content Publication Flow | `docs/09_CONTENT/CONTENT_PUBLICATION_FLOW.md` | CM SOCIAL AGENT |
| Archive Flow | `docs/05_OPERATIONS/WORKFLOWS/ARCHIVE_FLOW.md` | CM VAULT AGENT |

---

### **GAP-005: Make-automatiseringen nog niet ingericht**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken mappen | `00_ADMIN`, `06_FINANCE` |
| Eigenaar | CM FLOW AGENT |

**Beschrijving:**
Make had 0 actieve scenario's. Alle Map Specifications vermeldden dit als `Nog in te richten`. Geplande automatiseringen: governance-export bij GitHub-merge (`00_ADMIN`), BTW-signalering (`06_FINANCE`), Moneybird-export naar Drive (`06_FINANCE`).

**Actie:**
Opgelost op 2026-07-01: 2 Make-scenario's aangemaakt en geactiveerd; relevante Map Specifications bijgewerkt:

| Scenario | Make ID | Map Specification |
|---|---|---|
| CM ▸ BTW Signalering (Kwartaal) | `6406883` | `06_FINANCE.md` sectie 18 |
| CM ▸ Governance Export bij PR Merge | `6407378` | `00_ADMIN.md` sectie 18 |

**Openstaand (niet-blokkerend):**
- Moneybird-export naar Drive (`06_FINANCE`) — wacht op Moneybird-verbinding in Make; gedocumenteerd als gepland in `06_FINANCE.md` sectie 18.

---

### **GAP-006: Canva Brand Kit nog niet beschikbaar**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Middel |
| Betrokken mappen | `08_MARKETING`, `09_CONTENT`, `02_ARTIST_MANAGEMENT` |
| Eigenaar | CM SOCIAL AGENT |

**Beschrijving:**
Canva Brand Kit is nog niet gebouwd. Map Specifications voor `08_MARKETING` en `09_CONTENT` vermelden dit als `Nog te bouwen`. Dit beperkt de gestandaardiseerde visuele contentproductie.

**Actie:**
CM SOCIAL AGENT bouwt de Canva Brand Kit voor CM. Na oplevering: vermelden in de relevante Map Specifications en de Template Register bijwerken.

---

### **GAP-007: CLIENT_FOLDER_STANDARD.md bestaat niet**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Middel |
| Betrokken bestand | `docs/03_CLIENTS/CLIENT_FOLDER_STANDARD.md` (ontbreekt) |
| Eigenaar | CM OPS AGENT |

**Beschrijving:**
`docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` bestaat en documenteert de artistfolder-standaard. Een vergelijkbaar document voor de clientfolder-standaard (`03_CLIENTS`) ontbreekt. De `03_CLIENTS.md` Map Specification verwijst naar de Drive Mapping voor de submapstructuur, maar een aparte CLIENT_FOLDER_STANDARD.md is niet aangemaakt.

**Actie:**
CM OPS AGENT maakt `docs/03_CLIENTS/CLIENT_FOLDER_STANDARD.md` aan conform de schrijfstandaard in `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md`, of besluit dat de huidige DRIVE_MAPPING.md-sectie voldoende is.

---

### **GAP-008: APPROVAL_LOG.md verwijst naar 06_CONTROL (niet-bestaande map)**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestand | `docs/00_GOVERNANCE/APPROVAL_LOG.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
`docs/00_GOVERNANCE/APPROVAL_LOG.md` vermeldt als Drive-locatie: `OS_CUSTOMMADE / 06_CONTROL / APPROVAL_LOG`. De goedgekeurde Drive-structuur heeft geen `06_CONTROL`; de correcte locatie is `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` conform `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` Section 7.

**Actie:**
Opgelost. `docs/00_GOVERNANCE/APPROVAL_LOG.md` verwijst al correct naar `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

---

### **GAP-011: Approvalniveaus Level 3 toegekend aan Level-2-agents**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestanden | `01_MASTER_BOUTIQUE.md`, `04_DEALS.md`, `06_FINANCE.md`, `07_LEGAL.md`, `08_MARKETING.md`, `09_CONTENT.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
Zes Map Specifications kenden Level 3 approvalniveaus toe aan CM LEGAL AGENT, CM MONEY AGENT en CM SOCIAL AGENT. Conform `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` is het maximum autonomieniveau voor deze agents Level 2. De toegekende Level 3-acties betroffen intern aanmaken van dossiers en bijwerken van registers — intern uitvoerende taken die buiten de bevoegdheid van deze agents vallen.

**Actie:**
Opgelost op 2026-07-01: alle Level 3-rijen voor genoemde agents gewijzigd naar Level 2 in zes Map Specifications.

---

### **GAP-012: 9 dode workflow-links in 02_ARTIST_MANAGEMENT.md hoofdstuk 7**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/02_ARTIST_MANAGEMENT.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
Hoofdstuk 7 van `02_ARTIST_MANAGEMENT.md` bevatte 9 workflow-paden met de extensie `*_WORKFLOW.md` die niet bestonden in de repository. De werkelijke flowbestanden in `docs/02_ARTIST_MANAGEMENT/` gebruiken de extensie `*_FLOW.md` en wijken ook qua bestandsnamen af.

**Actie:**
Opgelost op 2026-07-01: alle 9 dode links vervangen door de correct bestaande `*_FLOW.md`-paden.

---

### **GAP-013: Dode workflow-link in 06_FINANCE.md hoofdstuk 7**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/06_FINANCE.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
Hoofdstuk 7 van `06_FINANCE.md` verwees naar `docs/02_ARTIST_MANAGEMENT/07_FINANCE_INTAKE_WORKFLOW.md`. Dit bestand bestaat niet. De naamconventie `*_WORKFLOW.md` klopt niet met de werkelijke naamgeving in de repository.

**Actie:**
Opgelost op 2026-07-01: link gewijzigd naar TBD conform de schrijfregel "als een koppeling niet hard bestaat: gebruik TBD".

---

### **GAP-014: 03_CLIENTS.md submapstructuur niet actueel**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/03_CLIENTS.md` |
| Eigenaar | CM OPS AGENT |

**Beschrijving:**
`03_CLIENTS.md` hoofdstuk 5 toonde een minimale structuur (`00_START_HIER`, `99_ARCHIEF`). `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` beschrijft de volledige clientdossierstructuur: `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE`, `09_ARCHIVE`.

**Actie:**
Opgelost op 2026-07-01: `03_CLIENTS.md` hoofdstuk 5 gesynchroniseerd met DRIVE_MAPPING.md.

---

### **GAP-015: 99_ARCHIVE.md submapstructuur niet actueel**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/99_ARCHIVE.md` |
| Eigenaar | CM VAULT AGENT |

**Beschrijving:**
`99_ARCHIVE.md` hoofdstuk 5 toonde: `00_START_HIER`, `LEGACY_ROOTS`, `REVIEW_HOLD`, `99_ARCHIEF`. `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` beschrijft de actuele structuur: `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS`, `MIGRATION_LOGS`.

**Actie:**
Opgelost op 2026-07-01: `99_ARCHIVE.md` hoofdstuk 5 gesynchroniseerd met DRIVE_MAPPING.md.

---

### **GAP-009: MAP_SPECIFICATION_STANDARD.md ontbrak vóór deze implementatie**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
De directory `docs/00_GOVERNANCE/STANDARDS/` bestond niet en het MAP_SPECIFICATION_STANDARD.md-bestand ontbrak. Dit is aangemaakt als onderdeel van de CM Map Specifications-implementatie.

**Actie:**
Voltooid. `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` aangemaakt op 2026-07-01.

---

### **GAP-010: docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ directory ontbrak vóór deze implementatie**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
De directory `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/` bestond niet. Dit is aangemaakt als onderdeel van de CM Map Specifications-implementatie.

**Actie:**
Voltooid. Directory aangemaakt met README.md en alle 11 Map Specifications op 2026-07-01.

---

## **STATUSOVERZICHT**

| Gap ID | Beschrijving | Status | Prioriteit | Eigenaar |
|---|---|---|---|---|
| GAP-001 | DRIVE_MAPPING.md 00_ADMIN submapstructuur niet actueel | Opgelost | — | CM CONTROL AGENT |
| GAP-002 | DRIVE_MAPPING.md 07_LEGAL submapstructuur uitgebreid | Opgelost | — | CM LEGAL AGENT |
| GAP-003 | Ontbrekende SOPs voor meerdere mappen | Opgelost | — | CM CONTROL AGENT |
| GAP-004 | Ontbrekende Workflows voor meerdere mappen | Opgelost | — | CM FLOW AGENT |
| GAP-005 | Make-automatiseringen niet ingericht | Opgelost | — | CM FLOW AGENT |
| GAP-006 | Canva Brand Kit niet beschikbaar | Open | Middel | CM SOCIAL AGENT |
| GAP-007 | CLIENT_FOLDER_STANDARD.md ontbreekt | Open | Middel | CM OPS AGENT |
| GAP-008 | APPROVAL_LOG.md verwijst naar niet-bestaande map 06_CONTROL | Opgelost | — | CM CONTROL AGENT |
| GAP-009 | MAP_SPECIFICATION_STANDARD.md ontbrak | Opgelost | — | CM CONTROL AGENT |
| GAP-010 | docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ directory ontbrak | Opgelost | — | CM CONTROL AGENT |
| GAP-011 | Approvalniveaus Level 3 aan Level-2-agents toegekend | Opgelost | — | CM CONTROL AGENT |
| GAP-012 | 9 dode workflow-links in 02_ARTIST_MANAGEMENT.md hoofdstuk 7 | Opgelost | — | CM CONTROL AGENT |
| GAP-013 | Dode workflow-link in 06_FINANCE.md hoofdstuk 7 | Opgelost | — | CM CONTROL AGENT |
| GAP-014 | 03_CLIENTS.md submapstructuur niet actueel | Opgelost | — | CM OPS AGENT |
| GAP-015 | 99_ARCHIVE.md submapstructuur niet actueel | Opgelost | — | CM VAULT AGENT |

---

## **REVIEWRITME**

- Dit rapport wordt bijgewerkt bij elke kwartaalreview van de Map Specifications.
- Bij nieuwe gaps: voeg toe conform het formaat hierboven.
- Bij opgeloste gaps: verander status naar `Opgelost` en noteer de datum.
- Eigenaar van dit rapport: CM CONTROL AGENT.

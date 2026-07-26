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

### **GAP-016: Google Drive-scripts niet gesynchroniseerd met DRIVE_MAPPING.md**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `scripts/google-drive/create-os-custommade-target-structure.gs`, `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` |
| Eigenaar | CM FLOW AGENT |

**Beschrijving:**
Uit de mapgelijkheidscontrole (`docs/00_GOVERNANCE/HISTORY/AUDITS/MAP_EQUALITY_CONTROL_REPORT.md`) blijkt dat de Google Drive target-structure scripts een verouderde/afwijkende submapstructuur aanmaken bij `00_ADMIN` (`INBOX`/`HR`/`CURSUS_MASTERCLASSES` i.p.v. `01_INBOX_REVIEW`/`04_REPORTS`/`05_APPROVALS`), `03_CLIENTS` (`00_START_HIER`/`99_ARCHIEF` i.p.v. de clientdossierstructuur), `07_LEGAL` (`CONTRACTEN` i.p.v. `CONTRACTS`; geen `LEGAL_REVIEW`/`EVIDENCE`) en `99_ARCHIVE` (`REVIEW_HOLD`/`99_ARCHIEF` i.p.v. `REVIEW_HOLD_OLD_STRUCTURE`/`MIGRATION_LOGS`).

Daarnaast bevat `create-os-custommade-target-structure.gs` (B5) twee plaatsingsdefecten: de negen artist-submappen (`02_ARTIST_MANAGEMENT`) en de zes deal-submappen (`04_DEALS`) worden direct onder de root aangemaakt, terwijl zowel B1 als B2 een tussenliggende `[ARTIST_NAME]`- respectievelijk `[DEAL_OR_ASSET_NAME]`-dossiermap vereisen. De remediatie mag deze mappen niet structureel onjuist laten aanmaken.

Bovendien maken B5/B6 submappen aan onder `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING` en `09_CONTENT`, terwijl de leidende Drive-baseline (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, waarmee `DRIVE_MAPPING.md` exact overeenkomt) deze roots root-only houdt.

**Actie:**
CM FLOW AGENT bevestigt eerst de norm met CM CONTROL AGENT en werkt daarna de scripts bij naar de goedgekeurde structuur uit `DRIVE_STRUCTURE.md`, inclusief het herstellen van de artist-/deal-nesting onder de dossiermap. Betreft de live Drive-structuur: uitvoeren volgens het geldende approval level.

**Opgelost op 2026-07-26 (broncode):** beide target-structure scripts zijn uitgelijnd op de baseline `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`:
- `00_ADMIN` → `01_INBOX_REVIEW`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_REPORTS`, `05_APPROVALS`;
- `07_LEGAL` → `APPROVALS`, `CONTRACTS`, `LEGAL_REVIEW`, `EVIDENCE`;
- `99_ARCHIVE` → `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS`, `MIGRATION_LOGS`;
- `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING`, `09_CONTENT` → root-only (leeg);
- `02_ARTIST_MANAGEMENT`/`03_CLIENTS`/`04_DEALS` → root-only op dit niveau; de plaatsingsdefecten zijn weg. Per-dossierstructuren (artist/client/deal) en `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` worden door het PRIMARY-buildscript `create-cm-drive-structure.gs` aangemaakt (zie GAP-019).

**Operationeel (buiten broncode):** het uitvoeren tegen de live Drive en het opruimen van eerder verkeerd aangemaakte mappen blijft een owner-actie volgens het geldende approval level.

---

### **GAP-017: 07_LEGAL.md Map Specification en DRIVE_MAPPING.md niet gelijk**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/07_LEGAL.md`, `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Eigenaar | CM LEGAL AGENT |

**Beschrijving:**
`07_LEGAL.md` hoofdstuk 5 specificeert `00_START_HIER`, `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `LEGAL_REVIEW`, `EVIDENCE`, `99_ARCHIEF`. De leidende Drive-baseline (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, exact gelijk aan `DRIVE_MAPPING.md`) vermeldt voor `07_LEGAL` alleen `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `LEGAL_REVIEW`, `EVIDENCE`. De Map Specification is dus rijker dan de baseline. Beide documenten claimen consistentie (zie GAP-002) maar zijn dat niet.

**Actie:**
Opgelost op 2026-07-26 (besluit repo-eigenaar: oplossing A — baseline uitbreiden): de leidende baseline is uitgebreid met de volledige legal-structuur. `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` en `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md` tonen nu voor `07_LEGAL`: `00_START_HIER`, `APPROVALS/CM_APPROVAL_REGISTER`, `CONTRACTS`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `LEGAL_REVIEW`, `EVIDENCE`, `99_ARCHIEF` — gelijk aan `07_LEGAL.md` hoofdstuk 5. De drie Drive-scripts zijn hierop uitgelijnd. `START_HIER_07_LEGAL_TEMPLATE.md` blijft geldig (`07_LEGAL/00_START_HIER` bestaat nu in de baseline).

---

### **GAP-018: ARTIST_FOLDER Map Specifications missen 06_FINANCE**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/README.md`, `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/06_FINANCE.md` |
| Eigenaar | CM OPS AGENT |

**Beschrijving:**
De artistdossierstructuur in `DRIVE_MAPPING.md` bevat `06_FINANCE`, maar `ARTIST_FOLDER/README.md` lijst deze submap niet en er is geen `06_FINANCE.md` Map Specification. De overige acht submappen (`01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `07_SOCIALMEDIA`, `08_PRESS_EPK`, `09_ARCHIVE`) hebben wel een spec.

**Actie:**
Opgelost op 2026-07-26: `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/06_FINANCE.md` aangemaakt in het format van de bestaande artist-submapspecs (Owner Agent CM MONEY AGENT; Moneybird blijft financiële waarheid) en opgenomen in `ARTIST_FOLDER/README.md`. Alle negen artist-submappen hebben nu een spec.

---

### **GAP-019: create-cm-drive-structure.gs is corrupt**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestand | `scripts/google-drive/create-cm-drive-structure.gs` |
| Eigenaar | CM FLOW AGENT |

**Beschrijving:**
Het bestand bevat twee samengevoegde scripts en is syntactisch ongeldig: functie `normalizeFolderName_` heeft geen afsluitende `}`, een JSDoc-comment begint zonder `/**`-opener, en `createCmDriveStructure`/`getOrCreateFolder` zijn dubbel gedeclareerd. Daarnaast wijkt `CM_CLIENT_FOLDERS` (`02_BRAND`, `04_DEALS_RIGHTS`, `05_RELEASES`, `06_CONTENT`, `07_FINANCE`, `08_DELIVERABLES`) volledig af van de clientdossiernorm in `DRIVE_MAPPING.md`.

Ook na de syntaxreparatie is het script onvolledig: het `CM_DRIVE_STRUCTURE`-object laat alle roots behalve `02_ARTIST_MANAGEMENT` leeg (`[]`), terwijl `DRIVE_MAPPING.md` en de Map Specifications submappen vereisen voor onder meer `00_ADMIN`, `07_LEGAL` en `99_ARCHIVE`. Omdat B4 is gelabeld als "PRIMARY for approved Drive build", zou dit script na herstel een onvolledige goedgekeurde structuur aanmaken.

**Actie:**
Opgelost op 2026-07-26: het bestand is herschreven tot één geldig, samenhangend PRIMARY-buildscript (syntaxfouten en dubbele declaraties weg). Het bouwt nu exact de baseline `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`: de 11 roots, de baseline-submappen voor `00_ADMIN`, `07_LEGAL` (incl. `APPROVALS/CM_APPROVAL_REGISTER`) en `99_ARCHIVE`, en per-artist dossiers onder `02_ARTIST_MANAGEMENT/[ARTIST]`. `01_MASTER_BOUTIQUE`/`05`/`06`/`08`/`09` blijven root-only. `createCmClientFolder()` gebruikt nu de baseline-clientstructuur (`01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE`, `09_ARCHIVE`) en `createCmDealStructure()` de lean dealstructuur. Syntaxis gevalideerd met `node --check`.

---

### **GAP-020: Conflicterende target-structure scripts met identieke symboolnamen**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Middel |
| Betrokken bestanden | `scripts/google-drive/create-os-custommade-target-structure.gs`, `scripts/google-drive/OS_CUSTOMMADE_target_structure.gs` |
| Eigenaar | CM FLOW AGENT |

**Beschrijving:**
Beide scripts declareren dezelfde constanten (`ROOT_FOLDER_ID`, `OS_CUSTOMMADE_TARGET_STRUCTURE`) en gelijknamige functies (`createOsCustommadeTargetStructure`, `getOrCreateTargetFolder_`, e.a.) met verschillende structuurinhoud. In één Apps Script-project leidt dit tot duplicate-declaration collisions, en het is onduidelijk welk script leidend is.

**Actie:**
CM FLOW AGENT bepaalt welk script het canonieke target-structure script is, verwijdert of hernoemt het andere, en documenteert de governance-status.

**Update 2026-07-26:** beide scripts zijn nu inhoudelijk uitgelijnd op de baseline (identieke, correcte `OS_CUSTOMMADE_TARGET_STRUCTURE`), dus welk script ook draait, het resultaat is gelijk. De resterende actie is uitsluitend het dedupliceren (canoniek kiezen / het andere verwijderen of hernoemen) om symboolcollisions in één Apps Script-project te voorkomen. Blijft `Open` als owner-beslissing.

---

### **GAP-021: Map Specifications tonen submappen die niet in de leidende Drive-baseline staan**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/{01_MASTER_BOUTIQUE,05_OPERATIONS,06_FINANCE,08_MARKETING,09_CONTENT}.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
De leidende Drive production baseline (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, exact gelijk aan `DRIVE_MAPPING.md`) houdt `01_MASTER_BOUTIQUE`, `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING` en `09_CONTENT` bewust root-only. De Map Specifications (hoofdstuk 5) toonden voor deze vijf roots echter een volledige submapstructuur (bijv. `05_OPERATIONS`: `00_START_HIER`, `HR`, `TRAINING`, `TOOLS`, `PROCESSES`, `TEMPLATES_REFERENCE`, `99_ARCHIEF`). Volgens `DRIVE_STRUCTURE.md` beschrijft de Drive Structure de boom en zijn de Map Specifications leidend voor de *inhoud* per map, niet voor extra submappen. De Map Specs over-specificeerden dus de boom t.o.v. de leidende norm.

**Actie:**
Opgelost op 2026-07-26 (besluit repo-eigenaar: oplossing B — specs afslanken naar de baseline): hoofdstuk 5 van de vijf specs is root-only gemaakt; de submappen zijn geherformuleerd als inhoudscategorieën (geen aparte Drive-submappen). Losse verwijzingen naar de verwijderde submappen (uitvoerlocaties, archiveregels, source-of-truth-paden) zijn naar de rootmap of de centrale `99_ARCHIVE` gebracht. De START_HIER-templates voor `05/06/08/09` zijn verwijderd.

**Vervolg (niet in deze scope):** de Drive-scripts (`create-os-custommade-target-structure.gs`/`OS_CUSTOMMADE_target_structure.gs`) maken deze submappen nog steeds aan; zij zijn nu de afwijkende partij en moeten door de owner naar root-only worden gebracht — bijgehouden onder GAP-016.

---

### **GAP-022: 01_MASTER_BOUTIQUE drieweg-conflict inclusief verboden dealstructuur**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/01_MASTER_BOUTIQUE.md`, `scripts/google-drive/create-os-custommade-target-structure.gs` |
| Eigenaar | CM LEGAL AGENT |

**Beschrijving:**
`01_MASTER_BOUTIQUE` had in elke bron een andere structuur: de leidende baseline (`DRIVE_STRUCTURE.md` = `DRIVE_MAPPING.md`) is root-only (deals horen in `04_DEALS`), `01_MASTER_BOUTIQUE.md` definieerde negen kennis-/methodiekcategorieën (`01_CONTEXT` … `09_DUE_DILIGENCE_METHODS`), en `create-os-custommade-target-structure.gs` maakt een dealstructuur aan (`00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP`, `99_ARCHIEF`). Zowel `DRIVE_STRUCTURE.md` (regel 83) als `01_MASTER_BOUTIQUE.md` verbieden dealcase- en assetfolders onder `01_MASTER_BOUTIQUE` expliciet; het script schendt deze regel.

**Actie:**
Opgelost op 2026-07-26 (oplossing B): `01_MASTER_BOUTIQUE.md` hoofdstuk 5 is root-only gemaakt conform de baseline; de negen categorieën staan nu als inhoudscategorieën beschreven, niet als Drive-submappen. De verboden dealstructuur is verwijderd uit `create-os-custommade-target-structure.gs` (`01_MASTER_BOUTIQUE` is nu `[]`, root-only). Alle drie de bronnen (baseline, spec, script) zijn hiermee gelijk: `01_MASTER_BOUTIQUE` is root-only en bevat geen dealcase- of assetfolders.

---

### **GAP-023: START_HIER-startdocumenten hadden geen template + 03_CLIENTS verwees naar niet-bestaande 00_START_HIER**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | — |
| Betrokken bestanden | `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/`, `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/03_CLIENTS.md` |
| Eigenaar | CM VAULT AGENT (coördinatie), Owner Agent per map |

**Beschrijving:**
De `00_START_HIER`-startmappen in de Map Specifications hadden geen template; er bestond geen enkele START_HIER-template in de Template Library of de registers. Daarnaast stuurde `03_CLIENTS.md` vier templates (Client Profile, Client Onboarding, Email Instructions, Do Nots) naar `03_CLIENTS/[CLIENT]/00_START_HIER`, terwijl de clientdossierstructuur geen `00_START_HIER`-map bevat (clientstartcontent hoort in `01_ADMIN`).

**Actie:**
Opgelost op 2026-07-26:
- 6 START_HIER-templates aangemaakt in `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/08_START_HIER/` (voor `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`) conform `TEMPLATE_ARCHITECTUURSTANDAARD.md` en afgestemd op de Map Specifications, inclusief README.
- Geregistreerd in `00_TEMPLATE_INDEX.md`, `TEMPLATE_STATUS_REGISTER.md` en `TEMPLATE_REGISTER.md`.
- `03_CLIENTS.md` gecorrigeerd: alle `00_START_HIER`-verwijzingen gewijzigd naar `01_ADMIN`.

**Update 2026-07-26:** met de oplossing van GAP-021 (oplossing B, specs root-only) zijn de START_HIER-templates voor `05_OPERATIONS`, `06_FINANCE`, `08_MARKETING` en `09_CONTENT` verwijderd; deze roots hebben geen `00_START_HIER`-startmap. `04_DEALS` (baseline) en `07_LEGAL` (spec; GAP-017) behouden hun START_HIER-template.

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
| GAP-016 | Google Drive-scripts verouderd/afwijkend + plaatsingsdefecten artist/deal | Opgelost | — | CM FLOW AGENT |
| GAP-017 | 07_LEGAL.md en DRIVE_MAPPING.md 07_LEGAL niet gelijk | Opgelost | — | CM LEGAL AGENT |
| GAP-018 | ARTIST_FOLDER Map Specifications missen 06_FINANCE | Opgelost | — | CM OPS AGENT |
| GAP-019 | create-cm-drive-structure.gs is corrupt + laat vereiste roots leeg | Opgelost | — | CM FLOW AGENT |
| GAP-020 | Conflicterende target-structure scripts met identieke symboolnamen | Open | Middel | CM FLOW AGENT |
| GAP-021 | Map Specifications tonen submappen die niet in de leidende Drive-baseline staan | Opgelost | — | CM CONTROL AGENT |
| GAP-022 | 01_MASTER_BOUTIQUE drieweg-conflict incl. verboden dealstructuur | Opgelost | — | CM LEGAL AGENT |
| GAP-023 | START_HIER-templates ontbraken + 03_CLIENTS verwees naar niet-bestaande 00_START_HIER | Opgelost | — | CM VAULT AGENT |

---

## **REVIEWRITME**

- Dit rapport wordt bijgewerkt bij elke kwartaalreview van de Map Specifications.
- Bij nieuwe gaps: voeg toe conform het formaat hierboven.
- Bij opgeloste gaps: verander status naar `Opgelost` en noteer de datum.
- Eigenaar van dit rapport: CM CONTROL AGENT.

## **GERELATEERDE CONTROLES**

- Mapgelijkheidscontrole (2026-07-26): [`docs/00_GOVERNANCE/HISTORY/AUDITS/MAP_EQUALITY_CONTROL_REPORT.md`](../../HISTORY/AUDITS/MAP_EQUALITY_CONTROL_REPORT.md) — bron van GAP-016 t/m GAP-020.

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
| Status | Open |
| Prioriteit | Hoog |
| Betrokken bestand | `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5 |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
`docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5 vermeldt voor `00_ADMIN` de volgende submapnamen: `03_TEMPLATES`, `GOVERNANCE_REFERENCE`, `HR`, `CURSUS_MASTERCLASSES`. De goedgekeurde en in gebruik zijnde structuur is: `01_ONBOARDING`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_HR`, `05_CURSUS_MASTERCLASSES`. De `00_ADMIN.md` Map Specification gebruikt de actuele structuur als norm.

**Actie:**
`docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5 bijwerken naar de actuele submapstructuur van `00_ADMIN`. Vereist pull request en review door CM CONTROL AGENT.

---

### **GAP-002: DRIVE_MAPPING.md Section 5 — 07_LEGAL submapstructuur uitgebreid**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Hoog |
| Betrokken bestand | `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5 |
| Eigenaar | CM LEGAL AGENT |

**Beschrijving:**
`docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5 vermeldt voor `07_LEGAL`: `CONTRACTEN`, `NDA`, `PARTNERS`, `FREELANCERS`, `ARTIESTEN`, `KLANTEN`, `LEVERANCIERS`, `RIGHTS`, `APPROVALS`, `99_ARCHIEF`. De `07_LEGAL.md` Map Specification documenteert een uitgebreide actuele structuur inclusief `00_START_HIER`, `CONTRACTS` (i.p.v. `CONTRACTEN`), `LEGAL_REVIEW`, `EVIDENCE` en `APPROVALS/CM_APPROVAL_REGISTER`. Dit vereist afstemming: zijn `CONTRACTEN` en `CONTRACTS` hetzelfde? Zijn `LEGAL_REVIEW` en `EVIDENCE` nieuwe submappen?

**Actie:**
CM LEGAL AGENT stelt de definitieve submapnamen voor `07_LEGAL` vast en werkt zowel `docs/04_SYSTEMS/DRIVE_MAPPING.md` als de Map Specification bij. Vereist Sophia-approval bij structuurwijziging.

---

### **GAP-003: Ontbrekende SOPs voor meerdere Drive-mappen**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Middel |
| Betrokken mappen | `00_ADMIN`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE` |
| Eigenaar | CM CONTROL AGENT (coördinatie), relevant Owner Agent per map |

**Beschrijving:**
Meerdere Map Specifications verwijzen naar SOPs met status `TBD`. Er zijn geen gedocumenteerde SOPs voor: intern onboarding beheer, operationeel beheer, finance intake, legal review, marketingproces, contentpublicatie en archivering. Bestaande SOPs zijn beschikbaar voor `02_ARTIST_MANAGEMENT` en `03_SHARED_SERVICES`.

**Actie:**
Per ontbrekende SOP: eigenaar aanwijzen, scope definiëren en SOP aanmaken conform `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md`. Prioriteer op basis van operationele urgentie.

---

### **GAP-004: Ontbrekende Workflows voor meerdere Drive-mappen**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Middel |
| Betrokken mappen | `00_ADMIN`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT`, `99_ARCHIVE` |
| Eigenaar | CM FLOW AGENT (coördinatie), relevant Owner Agent per map |

**Beschrijving:**
Meerdere Map Specifications verwijzen naar workflows met status `TBD`. Er zijn geen gedocumenteerde workflows voor: intern onboarding, governance-export, proceswijziging, finance reconciliation, year-end finance, contract lifecycle, legal review, campagne delivery, CM-contentpublicatie en archivering.

**Actie:**
Per ontbrekende workflow: eigenaar aanwijzen, trigger definiëren en workflow aanmaken. Prioriteer op basis van operationele frequentie.

---

### **GAP-005: Make-automatiseringen nog niet ingericht**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Laag (afhankelijk van Make-prioritering) |
| Betrokken mappen | Alle mappen |
| Eigenaar | CM FLOW AGENT |

**Beschrijving:**
Make heeft 0 actieve scenario's. Alle Map Specifications vermelden dit als `Nog in te richten`. Meerdere geplande automatiseringen zijn geïdentificeerd: governance-export bij GitHub-merge (`00_ADMIN`), Moneybird-export naar Drive (`06_FINANCE`), BTW-signalering (`06_FINANCE`).

**Actie:**
CM FLOW AGENT richt Make-scenario's in zodra de prioritering daarvoor is vastgesteld. Registreer elk scenario in de Template Register en de relevante Map Specification.

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
| Betrokken bestand | `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md` (ontbreekt) |
| Eigenaar | CM OPS AGENT |

**Beschrijving:**
`docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` bestaat en documenteert de artistfolder-standaard. Een vergelijkbaar document voor de clientfolder-standaard (`03_CLIENTS`) ontbreekt. De `03_CLIENTS.md` Map Specification verwijst naar de Drive Mapping voor de submapstructuur, maar een aparte CLIENT_FOLDER_STANDARD.md is niet aangemaakt.

**Actie:**
CM OPS AGENT maakt `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md` aan conform de schrijfstandaard in `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md`, of besluit dat de huidige DRIVE_MAPPING.md-sectie voldoende is.

---

### **GAP-008: APPROVAL_LOG.md verwijst naar 06_CONTROL (niet-bestaande map)**

| Veld | Waarde |
|---|---|
| Status | Open |
| Prioriteit | Hoog |
| Betrokken bestand | `docs/00_GOVERNANCE/APPROVAL_LOG.md` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
`docs/00_GOVERNANCE/APPROVAL_LOG.md` vermeldt als Drive-locatie: `OS_CUSTOMMADE / 06_CONTROL / APPROVAL_LOG`. De goedgekeurde Drive-structuur heeft geen `06_CONTROL`; de correcte locatie is `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` conform `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 7.

**Actie:**
`docs/00_GOVERNANCE/APPROVAL_LOG.md` bijwerken: verwijzing naar `06_CONTROL` vervangen door `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`. Vereist pull request en review door CM CONTROL AGENT.

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

### **GAP-010: docs/08_MAP_SPECIFICATIONS/ directory ontbrak vóór deze implementatie**

| Veld | Waarde |
|---|---|
| Status | Opgelost |
| Prioriteit | Opgelost |
| Betrokken bestand | `docs/08_MAP_SPECIFICATIONS/` |
| Eigenaar | CM CONTROL AGENT |

**Beschrijving:**
De directory `docs/08_MAP_SPECIFICATIONS/` bestond niet. Dit is aangemaakt als onderdeel van de CM Map Specifications-implementatie.

**Actie:**
Voltooid. Directory aangemaakt met README.md en alle 11 Map Specifications op 2026-07-01.

---

## **STATUSOVERZICHT**

| Gap ID | Beschrijving | Status | Prioriteit | Eigenaar |
|---|---|---|---|---|
| GAP-001 | DRIVE_MAPPING.md 00_ADMIN submapstructuur niet actueel | Open | Hoog | CM CONTROL AGENT |
| GAP-002 | DRIVE_MAPPING.md 07_LEGAL submapstructuur uitgebreid | Open | Hoog | CM LEGAL AGENT |
| GAP-003 | Ontbrekende SOPs voor meerdere mappen | Open | Middel | CM CONTROL AGENT |
| GAP-004 | Ontbrekende Workflows voor meerdere mappen | Open | Middel | CM FLOW AGENT |
| GAP-005 | Make-automatiseringen niet ingericht | Open | Laag | CM FLOW AGENT |
| GAP-006 | Canva Brand Kit niet beschikbaar | Open | Middel | CM SOCIAL AGENT |
| GAP-007 | CLIENT_FOLDER_STANDARD.md ontbreekt | Open | Middel | CM OPS AGENT |
| GAP-008 | APPROVAL_LOG.md verwijst naar niet-bestaande map 06_CONTROL | Open | Hoog | CM CONTROL AGENT |
| GAP-009 | MAP_SPECIFICATION_STANDARD.md ontbrak | Opgelost | — | CM CONTROL AGENT |
| GAP-010 | docs/08_MAP_SPECIFICATIONS/ directory ontbrak | Opgelost | — | CM CONTROL AGENT |

---

## **REVIEWRITME**

- Dit rapport wordt bijgewerkt bij elke kwartaalreview van de Map Specifications.
- Bij nieuwe gaps: voeg toe conform het formaat hierboven.
- Bij opgeloste gaps: verander status naar `Opgelost` en noteer de datum.
- Eigenaar van dit rapport: CM CONTROL AGENT.

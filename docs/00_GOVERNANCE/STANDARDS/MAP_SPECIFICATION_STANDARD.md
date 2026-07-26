# **MAP SPECIFICATION STANDARD**

## **METADATA**

| Veld | Waarde |
|---|---|
| Document | MAP_SPECIFICATION_STANDARD.md |
| Versie | 1.0 |
| Status | Goedgekeurd |
| Eigenaar | CM CONTROL AGENT |
| Locatie (GitHub) | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |
| Reviewritme | Kwartaal |
| Laatste review | 2026-07-01 |

---

## **1. DOEL**

Dit document beschrijft de verplichte opbouw van een Map Specification binnen het CM Operating System. Elke Map Specification documenteert één Drive-map als operationele eenheid: wat erin hoort, wie eigenaar is, welke templates en workflows van toepassing zijn, en hoe de map wordt beheerd.

Een Map Specification is geen beschrijving van wat Drive doet. Het is een operationele instructie voor agents, teamleden en automatiseringen die met die map werken.

---

## **2. REIKWIJDTE**

Deze standaard geldt voor alle Map Specification-bestanden onder `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/`. Elke hoofdmap onder `OS_CUSTOMMADE` in Google Drive heeft een bijbehorende Map Specification in deze directory.

---

## **3. VERPLICHTE HOOFDSTUKSTRUCTUUR**

Elke Map Specification bevat precies de volgende 22 hoofdstukken, in deze volgorde:

| Hoofdstuk | Titel |
|---|---|
| 1 | Metadata |
| 2 | Doel |
| 3 | Documenttypen |
| 4 | Verboden documenten |
| 5 | Submappen |
| 6 | Templates |
| 7 | Workflows |
| 8 | SOPs |
| 9 | Playbooks |
| 10 | Owner Agent |
| 11 | Support Agents |
| 12 | Approvalniveau |
| 13 | Archiveregels |
| 14 | Naamconventies |
| 15 | Systemen |
| 16 | Source of Truth |
| 17 | AI-instructies |
| 18 | Automatiseringen |
| 19 | Afhankelijkheden |
| 20 | KPIs |
| 21 | Veelgemaakte fouten |
| 22 | Governance Controle + Gerelateerde documentatie |

Hoofdstukken mogen niet worden weggelaten. Als een hoofdstuk niet van toepassing is, staat er: `Niet van toepassing.`

---

## **4. HOOFDSTUKDEFINITIES**

### **Hoofdstuk 1 — Metadata**

Verplichte metadatatabel:

| Veld | Toelichting |
|---|---|
| Drive-map | Exacte naam van de Drive-map op rootniveau |
| Drive-pad | Volledig pad vanaf `OS_CUSTOMMADE` |
| Owner Agent | Één Owner Agent (uit CM Agent Register V1.4) |
| Status | `Actief`, `In opbouw` of `Gearchiveerd` |
| Versie | Versienummer van dit specificatiedocument |
| Laatste review | Datum van laatste inhoudelijke review (YYYY-MM-DD) |
| Gebaseerd op | Verwijzing naar governancedocumenten waarop deze spec is gebaseerd |

### **Hoofdstuk 2 — Doel**

Beschrijf in 2-5 zinnen de primaire functie van de Drive-map. Wat valt er wel in, wat valt er expliciet niet in. Geen opsomming van submappen hier — dat staat in Hoofdstuk 5.

### **Hoofdstuk 3 — Documenttypen**

Tabel met toegestane documenttypen in deze map:

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|

Gebruik alleen documenttypen die voortkomen uit bestaande governance, workflows en templates.

### **Hoofdstuk 4 — Verboden documenten**

Opsomming van expliciet verboden documenttypen en -locaties in deze map. Minimaal één bullet. Als er geen specifieke verboden zijn: vermeld dat documenten buiten scope van het doel verboden zijn en verwijs naar de juiste map.

### **Hoofdstuk 5 — Submappen**

Tabel of codeblok met de verplichte submapstructuur. Gebruik exact de namen uit `docs/04_SYSTEMS/DRIVE_MAPPING.md`.

Per submap: naam en gebruiksdefinitie.

### **Hoofdstuk 6 — Templates**

Tabel met van toepassing zijnde templates uit `docs/03_SHARED_SERVICES/TEMPLATES/`:

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|

Vermeld alleen templates die hard bestaan in de repository. Als geen templates van toepassing zijn: `Geen vaste templates toegewezen.`

### **Hoofdstuk 7 — Workflows**

Tabel met van toepassing zijnde workflows:

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|

Vermeld alleen workflows die hard bestaan in de repository. Gebruik `TBD` voor workflows die nog niet zijn gedocumenteerd.

### **Hoofdstuk 8 — SOPs**

Tabel met van toepassing zijnde Standard Operating Procedures:

| SOP | Pad (GitHub) | Scope |
|---|---|---|

Vermeld alleen SOPs die hard bestaan in de repository. Gebruik `TBD` als er nog geen SOP bestaat.

### **Hoofdstuk 9 — Playbooks**

Tabel met van toepassing zijnde Playbooks:

| Playbook | Pad (GitHub) | Scope |
|---|---|---|

Vermeld alleen Playbooks die hard bestaan in de repository. Gebruik `TBD` als er nog geen Playbook bestaat.

### **Hoofdstuk 10 — Owner Agent**

Vermeld de naam van de Owner Agent exact zoals geregistreerd in `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md`. Elke Drive-map heeft exact één Owner Agent.

Beschrijf in 1-2 zinnen wat de Owner Agent in deze map doet.

### **Hoofdstuk 11 — Support Agents**

Tabel met Support Agents die input, review of uitvoering leveren in deze map:

| Agent | Rol in deze map |
|---|---|

Support Agents zijn geen mede-eigenaar. Bij conflict beslist de Owner Agent; bij escalatie: CM CONTROL AGENT.

### **Hoofdstuk 12 — Approvalniveau**

Tabel per actie met het vereiste approvalniveau:

| Actie | Approvalniveau | Approver |
|---|---|---|

Approvalniveaus: Level 1 (signaleren), Level 2 (voorbereiden), Level 3 (intern uitvoeren), Level 4 (Sophia-approval vereist).

### **Hoofdstuk 13 — Archiveregels**

Beschrijf wanneer en hoe documenten uit deze map worden gearchiveerd. Verwijs naar de archiveerlocatie (`09_ARCHIVE` van de artist, `04_DEALS/[DEAL]/99_ARCHIEF`, of centrale `99_ARCHIVE`). Vermeld of Sophia-approval vereist is voor verwijdering.

### **Hoofdstuk 14 — Naamconventies**

Vermeld de geldende naamconventies voor bestanden en submappen in deze map. Verwijs naar `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`. Geef voorbeelden van correcte en incorrecte bestandsnamen.

### **Hoofdstuk 15 — Systemen**

Tabel met de tools en systemen die met deze map interacteren:

| Systeem | Rol | Koppeling |
|---|---|---|

Systemen: Drive, GitHub, ClickUp, Gmail, Moneybird, Make, Canva.

### **Hoofdstuk 16 — Source of Truth**

Beschrijf per informatietype wat de bron van waarheid is:

| Informatietype | Source of Truth |
|---|---|

Gebruik de CM-conflicthiërarchie: GitHub > Moneybird > Drive > ClickUp > Gmail > Make.

### **Hoofdstuk 17 — AI-instructies**

Instructies voor CM-agents die met deze map werken:

- Wat agents mogen doen zonder approval (Level 1-3)
- Wat agents niet mogen zonder Sophia-approval (Level 4)
- Specifieke attentiepunten of restricties voor deze map

### **Hoofdstuk 18 — Automatiseringen**

Tabel met actieve of geplande Make-automatiseringen die output plaatsen in of lezen uit deze map:

| Scenario | Status | Output in map |
|---|---|---|

Als er geen automatiseringen zijn: `Geen actieve automatiseringen. Make heeft nu 0 scenario's.`

### **Hoofdstuk 19 — Afhankelijkheden**

Beschrijf de operationele afhankelijkheden van deze map:

- Welke andere Drive-mappen leveren input?
- Welke downstream mappen of systemen ontvangen output?
- Welke externe systemen zijn gekoppeld?

### **Hoofdstuk 20 — KPIs**

Tabel met meetbare indicatoren voor het correct functioneren van deze map:

| KPI | Norm | Meting |
|---|---|---|

Als geen formele KPIs zijn vastgesteld: vermeld de kwaliteitsverwachting als operationele norm.

### **Hoofdstuk 21 — Veelgemaakte fouten**

Lijst van veelgemaakte fouten bij gebruik van deze map, met correctie per fout:

| Fout | Correctie |
|---|---|

### **Hoofdstuk 22 — Governance Controle + Gerelateerde documentatie**

Controlelijst voor governance-review:

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md`
- [ ] Owner Agent klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveerregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

Gerelateerde documentatie:

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Document Standards | `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md` |

---

## **5. SCHRIJFREGELS**

- Schrijf in professioneel Nederlands.
- Gebruik exacte CM-agentnamen zoals geregistreerd in `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md`.
- Gebruik exacte mapnamen zoals vastgelegd in `docs/04_SYSTEMS/DRIVE_MAPPING.md`.
- Vermeld geen clientnamen, artiestennamen of vertrouwelijke data.
- Gebruik `TBD` voor koppelingen die nog niet hard bestaan.
- Geen vrije structuuruitbreiding: voeg geen hoofdstukken toe buiten de 22 verplichte.

---

## **6. BESTANDSNAAMCONVENTIE**

Map Specification-bestanden volgen dit patroon:

```
[MAPNUMMER_MAPNAAM].md
```

Voorbeelden:
- `00_ADMIN.md`
- `02_ARTIST_MANAGEMENT.md`
- `99_ARCHIVE.md`

---

## **7. LOCATIE EN EIGENAARSCHAP**

| Onderdeel | Waarde |
|---|---|
| GitHub-locatie | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/` |
| Eigenaar directory | CM CONTROL AGENT |
| Beheer | CM VAULT AGENT |
| Reviewritme | Kwartaal of bij structuurwijziging |

---

## **8. RELATIE MET ANDERE GOVERNANCE**

- `docs/04_SYSTEMS/DRIVE_MAPPING.md` is de primaire bron voor submapstructuren en eigenaarschap.
- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` legt de rootstructuur vast.
- `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` legt agenteigenaarschap vast.
- `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` legt approvalniveaus vast.
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` legt templatekoppelingen vast.
- `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` legt naamconventies vast.
- Bij conflict tussen een Map Specification en deze bronnen: de bronnen zijn leidend.

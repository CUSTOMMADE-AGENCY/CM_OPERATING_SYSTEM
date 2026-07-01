# **MAP SPECIFICATION — 05_OPERATIONS**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `05_OPERATIONS` |
| Drive-pad | `OS_CUSTOMMADE/05_OPERATIONS` |
| Owner Agent | CM CONTROL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |

---

## **2. DOEL**

`05_OPERATIONS` bevat operationele bedrijfsdocumenten voor het interne functioneren van CM: HR, training, tools, processen en template-referenties voor intern gebruik. Dit is de werkvloer-map voor het CM-team. `05_OPERATIONS` bevat geen clientdossiers (→ `03_CLIENTS`), geen financiële primaire documenten (→ `06_FINANCE`), geen juridische governance (→ `07_LEGAL`) en geen artistdossiers (→ `02_ARTIST_MANAGEMENT`). Operationele documenten zijn eigendom van CM OPS AGENT; `05_OPERATIONS` als governance-map is eigendom van CM CONTROL AGENT.

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Operationeel document | Procesomschrijvingen, operationele instructies en werkprocedures | `PROCESS_INTAKE_CLIENT.docx` |
| HR-document | Interne HR-processen, teamstructuur en personeelsadministratie | `HR_OVERVIEW_2026.pdf` |
| Training en onboarding | Trainingsmateriaal voor intern team en nieuw personeel | `TRAINING_CLICKUP_BASICS.pdf` |
| Tool-instructie | Handleidingen en instructies voor CM-tools | `TOOL_GUIDE_CLICKUP.pdf` |
| Template-referentie | Referentiedocumenten voor intern gebruik gebaseerd op GitHub-templates | `TEMPLATE_REF_EMAIL_INSTRUCTIONS.pdf` |
| Procesnotitie | Interne aantekeningen bij operationele procedures | `PROCESS_NOTE_ONBOARDING_Q2_2026.docx` |

---

## **4. VERBODEN DOCUMENTEN**

- Clientdossiers en deliverables (→ `03_CLIENTS`)
- Artistdossiers (→ `02_ARTIST_MANAGEMENT`)
- Primaire financiële documenten (→ `06_FINANCE` of Moneybird)
- Juridische governance en contracten (→ `07_LEGAL`)
- Marketing- of contentmateriaal (→ `08_MARKETING` of `09_CONTENT`)
- Deal- of Master Boutique-dossiers (→ `04_DEALS` of `01_MASTER_BOUTIQUE`)
- Vertrouwelijke client- of persoonsinformatie

---

## **5. SUBMAPPEN**

```text
05_OPERATIONS
├── 00_START_HIER
├── HR
├── TRAINING
├── TOOLS
├── PROCESSES
├── TEMPLATES_REFERENCE
└── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | Startpunt: operationele instructies, overzicht en referenties voor `05_OPERATIONS`. |
| `HR` | Interne HR-processen, teamstructuur en personeelsadministratie. |
| `TRAINING` | Trainingsmateriaal voor intern team, onboarding van nieuwe teamleden. |
| `TOOLS` | Handleidingen en instructies voor CM-tools: ClickUp, Make, Drive, GitHub, Gmail. |
| `PROCESSES` | Procesomschrijvingen en operationele instructies voor intern gebruik. |
| `TEMPLATES_REFERENCE` | Referentieversies van GitHub-templates voor intern gebruik. |
| `99_ARCHIEF` | Afgeronde, verouderde of niet-actieve operationele documenten. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Email Instructions Template | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | `05_OPERATIONS/TEMPLATES_REFERENCE` |
| Do Nots Template | `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | `05_OPERATIONS/TEMPLATES_REFERENCE` |
| Client Profile Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | `05_OPERATIONS/TEMPLATES_REFERENCE` |
| Client Onboarding Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md` | `05_OPERATIONS/TEMPLATES_REFERENCE` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Intern onboarding | TBD | Nieuwe teamlid, intern of freelancer start |
| Proceswijziging | TBD | Aanpassing van operationeel proces |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| File Management SOP | `docs/03_SHARED_SERVICES/FILE_MANAGEMENT.md` | Bestandsbeheer in operationele context |
| Operations SOP | `docs/03_SHARED_SERVICES/OPERATIONS_SOP.md` | Proceswijzigingenbeheer, governance-bewaking en operationele rapportage |

---

## **9. PLAYBOOKS**

Geen vaste Playbooks toegewezen aan `05_OPERATIONS`.

---

## **10. OWNER AGENT**

**CM CONTROL AGENT** (governance-map eigenaar)

CM CONTROL AGENT beheert `05_OPERATIONS` als governance-mapowner. Operationele documenten binnen deze map zijn inhoudelijk eigendom van CM OPS AGENT. CM CONTROL AGENT bewaakt de integriteit van de mapstructuur en escaleert bij governance-conflicten.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM OPS AGENT | Primaire inhoudseigenaar van operationele documenten in `05_OPERATIONS`. |
| CM FLOW AGENT | Inrichting van automatiseringen voor operationele processen. |
| CM VAULT AGENT | Archivering van afgeronde operationele documenten. |

Support Agents zijn geen mede-eigenaar van de map. Bij conflict beslist CM CONTROL AGENT; bij escalatie: Sophia.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken intern document | Level 3 | CM CONTROL AGENT of CM OPS AGENT |
| Bijwerken proces of procedure | Level 3 | CM OPS AGENT |
| Externe verspreiding van intern document | Level 4 | Sophia |
| Governance-wijziging in operationele structuur | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde of verouderde operationele documenten gaan naar `05_OPERATIONS/99_ARCHIEF`.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM CONTROL AGENT of CM OPS AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik hoofdletters voor systeemmappen: `HR`, `TRAINING`, `TOOLS`
- Gebruik underscores, geen spaties
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `PROCESS_INTAKE_CLIENT_2026.docx`
Incorrect: `proces intake client nieuw v2.docx`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle operationele documenten | Actief |
| GitHub | Bron van SOPs, workflows en templates (referentie) | Actief |
| ClickUp | Taakbeheer voor operationele actiepunten | Actief |
| Gmail | Operationele correspondentie | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| SOPs en workflows (bron) | GitHub (`docs/`) |
| Operationele werkbestanden | Drive (`05_OPERATIONS/`) |
| Taakstatus | ClickUp |
| Correspondentie | Gmail |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken en bijhouden van interne operationele documenten
- Bijwerken van template-referenties na GitHub-update
- Intern onboardingmateriaal aanpassen

**Vereist Sophia-approval (Level 4):**
- Externe verspreiding van intern document
- Governance-wijziging die de operationele structuur raakt
- Verwijdering van bestanden

**Attentiepunten:**
- Operationele documenten zijn eigendom van CM OPS AGENT; mapgovernance is eigendom van CM CONTROL AGENT
- Geen vertrouwelijke client- of persoonsinformatie in `05_OPERATIONS`

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `05_OPERATIONS`:**
- GitHub `docs/` → SOPs, workflows en templates (referentie)
- Teamleden en freelancers → trainingsfeedback, proceswijzigingen

**Output vanuit `05_OPERATIONS`:**
- Onboardingmateriaal → nieuwe teamleden
- Procesreferenties → operationele uitvoering in ClickUp
- Afgeronde documenten → `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Proceshandleidingen actueel | Maximaal 1 kwartaal achter op GitHub | Kwartaalreview door CM OPS AGENT |
| Submapstructuur correct | Geen mappen buiten goedgekeurde structuur | Controle bij kwartaalreview |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Clientdossier opgeslagen in `05_OPERATIONS` | Verplaats naar `03_CLIENTS/[CLIENT]` |
| Primaire financieel document in `05_OPERATIONS` | Verplaats naar `06_FINANCE` of registreer in Moneybird |
| GitHub-governancedocument bewerkt via Drive-export | Brondocument staat in GitHub; bewerk via pull request |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM CONTROL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Shared Services | `docs/03_SHARED_SERVICES/` |
| Agent Register | `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

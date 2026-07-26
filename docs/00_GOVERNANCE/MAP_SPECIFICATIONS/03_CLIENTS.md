# **MAP SPECIFICATION — 03_CLIENTS**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `03_CLIENTS` |
| Drive-pad | `OS_CUSTOMMADE/03_CLIENTS` |
| Owner Agent | CM OPS AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/03_SHARED_SERVICES/` |

---

## **2. DOEL**

`03_CLIENTS` bevat uitsluitend dossiers voor merken, bedrijven, sponsors, opdrachtgevers en media partners waarmee CM een commerciële of samenwerkingsrelatie heeft. Elke client krijgt een eigen submap met een genummerde productiestructuur passend bij het type relatie. `03_CLIENTS` bevat geen artistendossiers (→ `02_ARTIST_MANAGEMENT`), geen dealcases (→ `04_DEALS`) en geen Master Boutique-cases (→ `01_MASTER_BOUTIQUE`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Client profiel | Clientcontext, scope, rollen, doelen en contactgegevens | `CLIENT_PROFILE_[CLIENT].pdf` |
| Onboardingdocument | Onboardingcheck voor contract, betaling, Drive, ClickUp en kick-off | `ONBOARDING_[CLIENT]_2026.pdf` |
| Briefingdocument | Opdrachtsomschrijving, deliverables en afspraken per project | `BRIEFING_[CLIENT]_[PROJECT].pdf` |
| Deliverable | Eindoplevering voor client: rapport, audit, voorstel, roadmap | `ROADMAP_[CLIENT]_2026.pdf` |
| Contractreferentie | Verwijzing naar getekend contract in `07_LEGAL` | `CONTRACT_REF_[CLIENT].txt` |
| Meeting notes | Verslagen van client-meetings en calls | `MEETING_NOTES_[CLIENT]_20260615.docx` |
| Rapportage | Maandrapportage of projectrapportage voor client | `MONTHLY_REPORT_[CLIENT]_JUNE_2026.pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Artistendossiers (→ `02_ARTIST_MANAGEMENT`)
- Dealcases (→ `04_DEALS`)
- Master Boutique-cases (→ `01_MASTER_BOUTIQUE`)
- Primaire facturen en bonnen (→ `06_FINANCE` of Moneybird)
- Generieke legal governance (→ `07_LEGAL`)
- CM's eigen marketing- of contentmateriaal (→ `08_MARKETING` of `09_CONTENT`)
- Artiesten die client zijn: dossier hoort in `02_ARTIST_MANAGEMENT`, niet hier

---

## **5. SUBMAPPEN**

Per clientdossier een passende genummerde productiestructuur afhankelijk van het type relatie:

```text
03_CLIENTS
└── [CLIENT_NAAM]
    ├── 01_ADMIN
    ├── 02_CONTRACT
    ├── 03_BRIEF_SCOPE
    ├── 04_DELIVERABLES
    ├── 05_COMMUNICATION
    ├── 06_FINANCE
    └── 09_ARCHIVE
```

| Submap | Gebruik |
|---|---|
| `01_ADMIN` | Clientprofiel, onboardingdocument, instructies en interne notities. |
| `02_CONTRACT` | Getekende contracten, addenda en NDA's met de client. |
| `03_BRIEF_SCOPE` | Briefings, scopes en projectdefinities. |
| `04_DELIVERABLES` | Opgeleverde bestanden en documenten voor de client. |
| `05_COMMUNICATION` | Formele correspondentie, verslagen en bewijsstukken. |
| `06_FINANCE` | Financiële referenties, budgetten en fee-afspraken voor dit clientdossier. |
| `09_ARCHIVE` | Afgeronde, superseded of niet-actieve clientdocumenten. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Client Profile Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/00_START_HIER` |
| Client Onboarding Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/00_START_HIER` |
| Email Instructions Template | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/00_START_HIER` |
| Do Nots Template | `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/00_START_HIER` |
| Artist Audit Template (client-facing) | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_AUDIT_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |
| Business Audit Template (client-facing) | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/BUSINESS_AUDIT_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |
| Release Strategy Template (client-facing) | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RELEASE_STRATEGY_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |
| Artist Roadmap Template (client-facing) | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/ARTIST_ROADMAP_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |
| Monthly Report Template (client-facing) | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MONTHLY_REPORT_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |
| Management Proposal Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/MANAGEMENT_PROPOSAL_TEMPLATE.md` | `03_CLIENTS/[CLIENT]/` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Client Onboarding Workflow | `docs/03_CLIENTS/CLIENT_ONBOARDING.md` | Nieuwe client start samenwerking met CM |
| Proposal Workflow | `docs/03_CLIENTS/PROPOSAL_WORKFLOW.md` | Proposal voor nieuwe of bestaande client |
| Communication Process | `docs/05_OPERATIONS/WORKFLOWS/COMMUNICATION_PROCESS.md` | Correspondentie met client |
| Meeting Process | `docs/05_OPERATIONS/WORKFLOWS/MEETING_PROCESS.md` | Client-meeting of call |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| File Management SOP | `docs/05_OPERATIONS/WORKFLOWS/FILE_MANAGEMENT.md` | Bestandsbeheer in clientdossiers |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| Client Onboarding Playbook | `docs/05_OPERATIONS/PLAYBOOKS/CLIENT_ONBOARDING_PLAYBOOK.md` | Volledige client onboarding |
| Brand Partnership Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md` | Brand partnerships met clients |

---

## **10. OWNER AGENT**

**CM OPS AGENT**

CM OPS AGENT beheert alle clientdossiers in `03_CLIENTS`. De agent coördineert onboarding, deliverables en rapportage, bewaakt de dossierstructuur en zorgt dat client-specifieke documenten op de juiste locatie staan.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM LEGAL AGENT | Contractbeheer en juridische review voor clientovereenkomsten. |
| CM MONEY AGENT | Finance-check bij onboarding, factuurverwerking en betalingssignalen. |
| CM SOCIAL AGENT | Social content en communicatiematerialen voor clients. |
| CM VAULT AGENT | Archivering van afgeronde clientdossiers. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM OPS AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken clientdossier | Level 3 | CM OPS AGENT |
| Bijwerken clientprofiel of briefing | Level 3 | CM OPS AGENT |
| Externe verzending van deliverable | Level 4 | Sophia |
| Ondertekening contract of afspraak | Level 4 | Sophia |
| Financiële toezegging of correctie | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde of niet-actieve clientdossiers gaan naar `03_CLIENTS/[CLIENT]/99_ARCHIEF`.
- Bij definitief einde samenwerking gaat het volledige dossier naar centrale `99_ARCHIVE` na Sophia-approval.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM OPS AGENT.
- Contractreferenties en getekende overeenkomsten worden nooit verwijderd.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Clientnamen in hoofdletters met underscores: `[CLIENT_NAAM]`
- Bestandsnamen met clientkoppeling: `CLIENT_PROFILE_[CLIENT].pdf`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen
- Datumnotatie `YYYY` of `YYYYMM` voor tijdgebonden documenten

Correct: `MONTHLY_REPORT_CLIENT_NAAM_202606.pdf`
Incorrect: `client rapport juni nieuw.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle clientdossiers | Actief |
| GitHub | Bron van workflows, SOPs en templates | Actief |
| ClickUp | Taakbeheer voor clientprojecten en deliverables | Actief |
| Gmail | Correspondentie via `info@custommade.agency` | Actief |
| Moneybird | Financiële documenten bij facturering en betaling | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Workflows en SOPs | GitHub (`docs/03_SHARED_SERVICES/`) |
| Clientdossiers en deliverables | Drive (`03_CLIENTS/[CLIENT]/`) |
| Taakstatus en projectfases | ClickUp |
| Correspondentie | Gmail (`info@custommade.agency`) |
| Financiële documenten | Moneybird |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken clientdossier en invullen client profiel
- Bijwerken van interne briefingnotes en meeting notes
- Voorbereiding van deliverables voor Sophia-review
- Archivering van afgeronde clientprojecten

**Vereist Sophia-approval (Level 4):**
- Externe verzending van deliverable, rapport of proposal
- Ondertekening of aangaan van contractafspraak
- Financiële toezegging of correctie
- Verwijdering van bestanden

**Attentiepunten:**
- Artistdossiers horen niet in `03_CLIENTS` — ook niet als artist client is
- Finance-check bij onboarding door CM MONEY AGENT is verplicht
- Alle externe communicatie loopt via `info@custommade.agency`

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `03_CLIENTS`:**
- Client intake en briefing → `00_START_HIER`
- Contracten na ondertekening → `07_LEGAL/CONTRACTS` (referentie in clientdossier)
- Finance-check bij onboarding door CM MONEY AGENT

**Output vanuit `03_CLIENTS`:**
- Deliverables → externe clients (na Sophia-approval)
- Contractreferenties → `07_LEGAL/CONTRACTS`
- Finance-signalen → `06_FINANCE` en Moneybird
- Afgeronde dossiers → `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Client profiel ingevuld bij onboarding | 100% van actieve clients heeft ingevuld profiel | CM OPS AGENT check bij intake |
| Geen externe deliverable zonder approval | 0 niet-goedgekeurde externe verzendingen | Approval Register check |
| Finance-check bij onboarding | 100% van nieuwe clients heeft finance-check gehad | CM MONEY AGENT check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Artist opgeslagen in `03_CLIENTS` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]` |
| Primaire factuur opgeslagen in clientdossier | Registreer in Moneybird; gebruik `06_FINANCE` voor referenties |
| Deliverable extern verzonden zonder Sophia-approval | Herstop; registreer in Approval Register; escaleer naar Sophia |
| Contract opgeslagen in `03_CLIENTS` als primair document | Verplaats naar `07_LEGAL/CONTRACTS`; bewaar referentie in `00_START_HIER` |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM OPS AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Shared Services | `docs/03_SHARED_SERVICES/` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

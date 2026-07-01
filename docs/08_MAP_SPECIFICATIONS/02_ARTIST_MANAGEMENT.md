# **MAP SPECIFICATION — 02_ARTIST_MANAGEMENT**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `02_ARTIST_MANAGEMENT` |
| Drive-pad | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` |
| Owner Agent | CM OPS AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md`, `docs/02_ARTIST_MANAGEMENT/` |

---

## **2. DOEL**

`02_ARTIST_MANAGEMENT` bevat alle operationele artistdossiers die CM beheert. Elke artist krijgt een eigen genummerde submap met negen standaardfolders. `02_ARTIST_MANAGEMENT` bevat geen clientdossiers van merken of opdrachtgevers (→ `03_CLIENTS`), geen algemene dealcases (→ `04_DEALS`) en geen Master Boutique-cases (→ `01_MASTER_BOUTIQUE`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Artist admin | Intake, contactgegevens, operationele instructies, meeting notes | `INTAKE_[ARTIST]_2026.docx` |
| Artist contract | Managementafspraken, artist agreements, rechtenafspraken | `MANAGEMENT_AGREEMENT_[ARTIST]_SIGNED.pdf` |
| Artist strategy | Positionering, roadmap, brand direction, campagneplanning | `ROADMAP_[ARTIST]_2026.pdf` |
| Release document | Releaseplanning, release-assets, distributor-informatie | `RELEASE_PLAN_[ARTIST]_[RELEASE].pdf` |
| Booking document | Booking, riders, shows, live-aanvragen | `RIDER_[ARTIST]_[SHOW].pdf` |
| Finance-kopie | Budgetten, royaltyreferenties, factuurreferenties | `ROYALTY_REFERENCE_[ARTIST]_Q1_2026.xlsx` |
| Social media document | Contentplanning, captions, platform-assets | `CONTENT_PLAN_[ARTIST]_JUNE_2026.xlsx` |
| Press/EPK document | Press kit, biografie, foto's, logo's, persmateriaal | `EPK_[ARTIST]_2026.pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Clientdossiers van merken of opdrachtgevers (→ `03_CLIENTS`)
- Dealcases zonder directe artistkoppeling (→ `04_DEALS`)
- Master Boutique-catalogusdossiers (→ `01_MASTER_BOUTIQUE`)
- Facturen en bonnen als primaire financiële documenten (→ `06_FINANCE` of Moneybird)
- Marketingmateriaal voor CM als merk (→ `08_MARKETING`)
- Content voor CM's eigen kanalen (→ `09_CONTENT`)
- Legacy-mapnamen: `05_BOOKING_PARTNERSHIPS`, `07_CONTENT`, `SOCIALMEDIA`, `Presskit`, `Contracten`, `Royalties`, `Boekingen`, `Algemeen`

---

## **5. SUBMAPPEN**

Gebruik exact de CM-standaard artistfolderstructuur per artist:

```text
02_ARTIST_MANAGEMENT
└── [ARTIST_NAME]
    ├── 01_ADMIN
    ├── 02_CONTRACT
    ├── 03_STRATEGY
    ├── 04_RELEASES
    ├── 05_BOOKING
    ├── 06_FINANCE
    ├── 07_SOCIALMEDIA
    ├── 08_PRESS_EPK
    └── 09_ARCHIVE
```

| Submap | Gebruik |
|---|---|
| `01_ADMIN` | Intake, contactgegevens, operationele instructies, meeting notes en algemene administratie. |
| `02_CONTRACT` | Managementafspraken, artist agreements, rechtenafspraken, juridische documenten en getekende contractreferenties. |
| `03_STRATEGY` | Positionering, roadmap, brand direction, campagneplanning, briefingdocumenten en managementstrategie. |
| `04_RELEASES` | Releaseplanning, release-assets, distributor-informatie, masters/context en release-campagnes. |
| `05_BOOKING` | Booking, riders, shows, live-aanvragen, partnerschappen rond optredens en relevante production notes. |
| `06_FINANCE` | Budgetten, royaltyreferenties, factuurreferenties en financiële werkbestanden. Moneybird blijft financiële waarheid. |
| `07_SOCIALMEDIA` | Social content, contentplanning, platform-assets, captions en kanaalreferenties. |
| `08_PRESS_EPK` | Press kit, biografie, foto's, logo's, persmateriaal, media-assets en EPK-export. |
| `09_ARCHIVE` | Afgeronde, superseded of niet-actieve artistdocumenten die binnen het artistdossier bewaard moeten blijven. |

De volledige artistfolder-standaard staat in `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md`.

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Artist Onboarding Template | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ARTIST_ONBOARDING_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` |
| Brand Audit Template | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` |
| Roadmap Template | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` |
| Release Strategy Template | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/04_RELEASES` |
| Monthly Management Template | `docs/03_SHARED_SERVICES/TEMPLATES/ARTIST_MANAGEMENT/MONTHLY_MANAGEMENT_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` |
| Client Profile Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_PROFILE_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` |
| Email Instructions Template | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` |
| Do Nots Template | `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Artist Onboarding Workflow | `docs/02_ARTIST_MANAGEMENT/01_ARTIST_ONBOARDING_WORKFLOW.md` | Nieuwe artist start samenwerking met CM |
| Artist Strategy Workflow | `docs/02_ARTIST_MANAGEMENT/02_ARTIST_STRATEGY_WORKFLOW.md` | Start of update van artiststrategie |
| Release Kickoff Workflow | `docs/02_ARTIST_MANAGEMENT/03_RELEASE_KICKOFF_WORKFLOW.md` | Nieuwe release in planning |
| Content Productie Workflow | `docs/02_ARTIST_MANAGEMENT/04_CONTENT_PRODUCTIE_WORKFLOW.md` | Contentproductie voor artist |
| Social Publishing Workflow | `docs/02_ARTIST_MANAGEMENT/05_SOCIAL_PUBLISHING_WORKFLOW.md` | Publicatie van content op social kanalen |
| Booking Workflow | `docs/02_ARTIST_MANAGEMENT/06_BOOKING_WORKFLOW.md` | Booking-aanvraag voor show of optreden |
| Finance Intake Workflow | `docs/02_ARTIST_MANAGEMENT/07_FINANCE_INTAKE_WORKFLOW.md` | Finance-intake voor artist |
| Press EPK Workflow | `docs/02_ARTIST_MANAGEMENT/08_PRESS_EPK_WORKFLOW.md` | Aanvraag of update van press kit of EPK |
| Offboarding Workflow | `docs/02_ARTIST_MANAGEMENT/09_ARTIST_OFFBOARDING_WORKFLOW.md` | Einde samenwerking met artist |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Artist Management SOP | `docs/02_ARTIST_MANAGEMENT/ARTIST_MANAGEMENT_SOP.md` | Algemeen artistmanagementbeheer |
| Artist Communication SOP | `docs/02_ARTIST_MANAGEMENT/ARTIST_COMMUNICATION_SOP.md` | Communicatie met en namens artists |
| Artist Meeting SOP | `docs/02_ARTIST_MANAGEMENT/ARTIST_MEETING_SOP.md` | Voorbereiding en verslaglegging van artistmeetings |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| Artist Positioning Playbook | `docs/06_PLAYBOOKS/ARTIST_POSITIONING_PLAYBOOK.md` | Positionering en brand direction |
| Release Campaign Playbook | `docs/06_PLAYBOOKS/RELEASE_CAMPAIGN_PLAYBOOK.md` | Releasecampagne van start tot publicatie |
| Publishing Playbook | `docs/06_PLAYBOOKS/PUBLISHING_PLAYBOOK.md` | Publishing-rechten en -deals |
| Sync Playbook | `docs/06_PLAYBOOKS/SYNC_PLAYBOOK.md` | Sync-deals en licenties |
| Rights Recovery Playbook | `docs/06_PLAYBOOKS/RIGHTS_RECOVERY_PLAYBOOK.md` | Rechtenteruggave en -herstel |
| Brand Partnership Playbook | `docs/06_PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md` | Brand partnerships voor artists |
| Career Development Playbook | `docs/06_PLAYBOOKS/CAREER_DEVELOPMENT_PLAYBOOK.md` | Loopbaanontwikkeling van artists |
| Networking Playbook | `docs/06_PLAYBOOKS/NETWORKING_PLAYBOOK.md` | Netwerkontwikkeling voor artists |

---

## **10. OWNER AGENT**

**CM OPS AGENT**

CM OPS AGENT beheert alle artistdossiers in `02_ARTIST_MANAGEMENT`. De agent coördineert het volledige artisttraject van onboarding tot offboarding, bewaakt de dossierstructuur en zorgt dat alle documenten op de juiste locatie staan.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM SOCIAL AGENT | Social media-content, contentplanning en EPK/persmateriaal voor artists in `07_SOCIALMEDIA` en `08_PRESS_EPK`. |
| CM LEGAL AGENT | Contractbeheer, rechtenafspraken en juridische review in `02_CONTRACT`. |
| CM MONEY AGENT | Finance-input, royaltyreferenties en budgetbewaking in `06_FINANCE`. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM OPS AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken artistdossier | Level 3 | CM OPS AGENT |
| Bijwerken strategie of roadmap | Level 3 | CM OPS AGENT |
| Releaseplanning bijwerken | Level 3 | CM OPS AGENT |
| Artist approval of externe planning | Level 4 | Sophia |
| Ondertekening contract of artist agreement | Level 4 | Sophia |
| Externe verzending van EPK of persbericht | Level 4 | Sophia |
| Externe contentpublicatie namens CM of artist | Level 4 | Sophia |
| Financiële toezegging of correctie | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde artistfasen gaan naar `02_ARTIST_MANAGEMENT/[ARTIST]/09_ARCHIVE`.
- Bij einde samenwerking gaat het volledige artistdossier naar `99_ARCHIVE` na Sophia-approval.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM OPS AGENT.
- Contracten en rechtenafspraken worden nooit verwijderd.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Artistnamen in hoofdletters: `[ARTIST_NAME]`
- Bestandsnamen met artistkoppeling: `ROADMAP_[ARTIST]_2026.pdf`
- Geen legacy-mapnamen: geen `05_BOOKING_PARTNERSHIPS`, `SOCIALMEDIA`, `Presskit`, `Contracten`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `RELEASE_PLAN_ARTIEST_NAAM_2026.pdf`
Incorrect: `artiest release plan nieuw def v2.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle artistdossiers | Actief |
| GitHub | Bron van SOPs, workflows, playbooks en templates | Actief |
| ClickUp | Taakbeheer voor artistmanagementacties en releases | Actief |
| Gmail | Correspondentie met artists, venues, labels, media | Actief |
| Moneybird | Financiële waarheid voor royalties, facturen en budgetten | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |
| Canva | Brand Kit nog te bouwen; social content-assets | Nog te bouwen |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| SOPs, workflows en playbooks | GitHub (`docs/02_ARTIST_MANAGEMENT/`, `docs/06_PLAYBOOKS/`) |
| Artistdossiers en deliverables | Drive (`02_ARTIST_MANAGEMENT/[ARTIST]/`) |
| Taakstatus en actiepunten | ClickUp |
| Correspondentie | Gmail |
| Financiële documenten | Moneybird |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken artistdossier met standaard negenmapenstructuur
- Bijwerken van admin, strategie, releases en interne documenten
- Voorbereiding van EPK, persbericht of content voor Sophia-review
- Archivering van afgeronde artistfasen

**Vereist Sophia-approval (Level 4):**
- Externe verzending van EPK, persbericht of contentpublicatie
- Ondertekening of aangaan van artistcontract of verplichting
- Financiële toezegging of correctie in `06_FINANCE`
- Verwijdering van bestanden

**Attentiepunten:**
- Gebruik uitsluitend de negen standaardfolders; geen legacy-mapnamen
- Artistspecifieke Do Nots (`DO_NOTS_TEMPLATE.md`) opslaan in `01_ADMIN`
- CM SOCIAL AGENT levert input voor `07_SOCIALMEDIA` en `08_PRESS_EPK` maar is geen eigenaar

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `02_ARTIST_MANAGEMENT`:**
- Artist onboarding intake → `01_ADMIN`
- Label-, distributor- en boekingsinformatie → `04_RELEASES`, `05_BOOKING`
- Finance-input van CM MONEY AGENT → `06_FINANCE`
- Social content van CM SOCIAL AGENT → `07_SOCIALMEDIA`

**Output vanuit `02_ARTIST_MANAGEMENT`:**
- EPK en persbericht → externe media (na Sophia-approval)
- Contractreferenties → `07_LEGAL/CONTRACTS` (na ondertekening)
- Finance-signalen → `06_FINANCE` en Moneybird
- Afgeronde documenten → `09_ARCHIVE` van artist of centrale `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Artistdossier volledig bij onboarding | Alle 9 submappen aanwezig en `01_ADMIN` ingevuld | CM OPS AGENT check bij intake |
| Geen legacy-mapnamen in gebruik | 0 mappen met verboden namen | Kwartaalreview |
| Contracten aanwezig in `02_CONTRACT` | 100% van actieve artists heeft contract in dossier | Kwartaalreview door CM LEGAL AGENT |
| Finance-kopie actueel | Binnen 1 kwartaal bijgewerkt | CM MONEY AGENT check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Artist opgeslagen in `03_CLIENTS` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]` |
| Legacy-map `05_BOOKING_PARTNERSHIPS` in gebruik | Hernoem naar `05_BOOKING`; verplaats inhoud |
| Contract opgeslagen in `01_ADMIN` | Verplaats naar `02_CONTRACT` |
| Factuur opgeslagen in `06_FINANCE` als primair document | Registreer in Moneybird; gebruik `06_FINANCE` voor referenties |
| EPK extern verzonden zonder Sophia-approval | Herstop; registreer in Approval Register; escaleer naar Sophia |
| Nieuwe map aangemaakt buiten de 9 standaardfolders | Verwijder; gebruik bestaande structuur |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md`
- [ ] Owner Agent (CM OPS AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8
- [ ] Geen legacy-mapnamen in gebruik

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Artist Folder Standard | `docs/00_GOVERNANCE/ARTIST_FOLDER_STANDARD.md` |
| Artist Management Workflows | `docs/02_ARTIST_MANAGEMENT/` |
| Agent Register | `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

# **MAP SPECIFICATION — 08_MARKETING**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `08_MARKETING` |
| Drive-pad | `OS_CUSTOMMADE/08_MARKETING` |
| Owner Agent | CM SOCIAL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |

---

## **2. DOEL**

`08_MARKETING` bevat marketingdocumenten, brand-assets, campagnemateriaal, netwerkdocumenten en partnershipdossiers voor CM als merk. Dit is de marketingwerkplek voor het CM-merk zelf, niet voor artistspecifieke marketing (→ `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` of `08_PRESS_EPK`) en niet voor contentproductie (→ `09_CONTENT`). `08_MARKETING` bevat geen clientdossiers (→ `03_CLIENTS`) en geen financiële documenten (→ `06_FINANCE`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Brand-document | CM-huisstijl, brand guidelines, identiteitsmateriaal | `CM_BRAND_GUIDELINES_2026.pdf` |
| Campagnedocument | Campagneplanning, briefings en campagne-evaluaties | `CAMPAIGN_BRIEF_[CAMPAGNE]_2026.pdf` |
| Netwerkdocument | Netwerk-overzichten, contactlijsten, partnerschapsnotities | `NETWORK_OVERVIEW_2026.xlsx` |
| Partnershipdossier | Partnerovereenkomsten en samenwerkingsdocumenten voor CM-marketing | `PARTNERSHIP_[NAAM]_2026.pdf` |
| Marketingrapportage | Campagnerapportages, resultaatsoverzichten | `CAMPAIGN_REPORT_[CAMPAGNE]_2026.pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Artistspecifieke marketing en social content (→ `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` of `08_PRESS_EPK`)
- Contentproductiebestanden voor CM's kanalen (→ `09_CONTENT`)
- Clientdossiers en deliverables (→ `03_CLIENTS`)
- Financiële documenten (→ `06_FINANCE`)
- Juridische contracten (→ `07_LEGAL`)
- Dealmateriaal (→ `04_DEALS` of `01_MASTER_BOUTIQUE`)

---

## **5. SUBMAPPEN**

```text
08_MARKETING
├── 00_START_HIER
├── BRAND
├── NETWORK
├── CAMPAIGNS
├── PARTNERSHIPS
└── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | Startpunt: marketinginstructies, overzicht en referenties voor `08_MARKETING`. |
| `BRAND` | CM-huisstijl, brand guidelines en identiteitsmateriaal. |
| `NETWORK` | Netwerk-overzichten, contactlijsten en relatiebeheer. |
| `CAMPAIGNS` | Campagneplanning, briefings en campagne-evaluaties. |
| `PARTNERSHIPS` | Partnerovereenkomsten en samenwerkingsdocumenten voor CM-marketing. |
| `99_ARCHIEF` | Afgeronde campagnes, verouderde brand-assets en niet-actieve partnerschappen. |

---

## **6. TEMPLATES**

Geen vaste templates toegewezen vanuit `docs/03_SHARED_SERVICES/TEMPLATES/` voor `08_MARKETING`. Campagne-templates worden intern beheerd in Canva (nog te bouwen).

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Marketing Planning Flow | `docs/03_SHARED_SERVICES/MARKETING_PLANNING_FLOW.md` | Kwartaalplanning of nieuwe campagne |
| Campaign Delivery Flow | `docs/03_SHARED_SERVICES/CAMPAIGN_DELIVERY_FLOW.md` | Uitvoering en oplevering van een marketingcampagne |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Marketing SOP | `docs/03_SHARED_SERVICES/MARKETING_SOP.md` | Marketing- en campagnebeheer, brand guidelines, externe verzending |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| Brand Partnership Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md` | Brand partnerships voor CM of artists |
| Networking Playbook | `docs/05_OPERATIONS/PLAYBOOKS/NETWORKING_PLAYBOOK.md` | Netwerkontwikkeling |

---

## **10. OWNER AGENT**

**CM SOCIAL AGENT**

CM SOCIAL AGENT beheert `08_MARKETING`. De agent coördineert CM-merk-marketing, campagnebeheer en netwerkdocumentatie, en zorgt dat brand-assets en campagnemateriaal op de juiste locatie staan.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM OPS AGENT | Operationele ondersteuning bij campagneplanning en coördinatie. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM SOCIAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken campagnedossier of brand-document | Level 2 | CM SOCIAL AGENT |
| Bijwerken brand guidelines of netwerkoverzicht | Level 2 | CM SOCIAL AGENT |
| Externe verzending van marketingmateriaal | Level 4 | Sophia |
| Publicatie namens CM | Level 4 | Sophia |
| Aangaan van partnerovereenkomst | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde campagnes gaan naar `08_MARKETING/99_ARCHIEF`.
- Verouderde brand-assets worden gearchiveerd; actuele versie blijft in `BRAND`.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT ondersteunt archivering na instructie van CM SOCIAL AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik type als prefix: `BRAND_`, `CAMPAIGN_`, `NETWORK_`, `PARTNERSHIP_`
- Gebruik jaar of periode: `2026`, `Q2_2026`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `CAMPAIGN_BRIEF_ZOMERCAMPAGNE_2026.pdf`
Incorrect: `campagne brief nieuw definitief.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van marketingdocumenten en brand-assets | Actief |
| GitHub | Bron van marketing-playbooks en SOPs (referentie) | Actief |
| ClickUp | Taakbeheer voor marketingprojecten en campagnes | Actief |
| Gmail | Marketingcorrespondentie via `info@custommade.agency` | Actief |
| Canva | Brand Kit en visuele templates (nog te bouwen) | Nog te bouwen |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Marketing-playbooks en governance | GitHub (`docs/05_OPERATIONS/PLAYBOOKS/`) |
| Brand-assets en campagnebestanden | Drive (`08_MARKETING/`) |
| Taakstatus | ClickUp |
| Marketingcorrespondentie | Gmail |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken campagnedossier en bijhouden van marketingdocumenten
- Intern bijwerken van brand-assets en netwerkoverzichten
- Voorbereiding van campagnemateriaal voor Sophia-review

**Vereist Sophia-approval (Level 4):**
- Externe verzending van marketingmateriaal
- Publicatie namens CM
- Aangaan van partnerovereenkomst
- Verwijdering van bestanden

**Attentiepunten:**
- Artistspecifieke marketing hoort in `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA`
- Canva Brand Kit is nog niet beschikbaar; visuele output tijdelijk via andere tools
- Alle externe communicatie loopt via `info@custommade.agency`

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `08_MARKETING`:**
- Brand direction vanuit `02_ARTIST_MANAGEMENT/[ARTIST]/03_STRATEGY` (inspiratie, niet primaire bron)
- Partnership-aanvragen vanuit CM PROSPECT AGENT

**Output vanuit `08_MARKETING`:**
- Campagnemateriaal → externe kanalen en partijen (na Sophia-approval)
- Brand-assets → intern gebruik en Canva (wanneer beschikbaar)
- Afgeronde campagnes → `99_ARCHIEF`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Brand guidelines actueel | Maximaal 1 jaar oud | CM SOCIAL AGENT check jaarlijks |
| Geen externe publicatie zonder approval | 0 niet-goedgekeurde externe publicaties | Approval Register check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Artistspecifieke social content in `08_MARKETING` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` |
| Campagnemateriaal extern verzonden zonder Sophia-approval | Herstop; registreer in Approval Register; escaleer |
| Content voor CM's kanalen in `08_MARKETING` | Verplaats naar `09_CONTENT` |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM SOCIAL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Brand Partnership Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BRAND_PARTNERSHIP_PLAYBOOK.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

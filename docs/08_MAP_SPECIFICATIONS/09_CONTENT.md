# **MAP SPECIFICATION — 09_CONTENT**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `09_CONTENT` |
| Drive-pad | `OS_CUSTOMMADE/09_CONTENT` |
| Owner Agent | CM SOCIAL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |

---

## **2. DOEL**

`09_CONTENT` bevat contentproductiebestanden, social media-assets, formats, contentkalender en content-assets voor CM's eigen kanalen. Dit is de productiewerkplek voor content die namens CM (niet namens een specifieke artist) wordt gepubliceerd. Artistspecifieke content hoort in `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA`. `09_CONTENT` bevat geen marketingstrategie of brand-governance (→ `08_MARKETING`), geen clientdossiers (→ `03_CLIENTS`) en geen financiële documenten (→ `06_FINANCE`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Content-asset | Beeldmateriaal, video's, audio en grafische bestanden voor CM-kanalen | `CM_POST_VISUAL_20260615.png` |
| Social media-post | Definitieve of concept-captions, teksten en postmateriaal | `CAPTION_CM_INSTAGRAM_20260615.txt` |
| Content format | Herbruikbare contentformats en templates voor CM's kanalen | `FORMAT_QUOTE_CARD_CM.canva` |
| Contentkalender | Planningsoverzicht voor CM-content | `CONTENT_CALENDAR_CM_Q2_2026.xlsx` |
| Content-instructie | Instructies voor contentproductie of -publicatie | `INSTRUCTIONS_CM_INSTAGRAM.docx` |

---

## **4. VERBODEN DOCUMENTEN**

- Artistspecifieke social content en EPK-materiaal (→ `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` of `08_PRESS_EPK`)
- Marketingstrategie en brand-governance voor CM als merk (→ `08_MARKETING`)
- Clientdossiers en deliverables (→ `03_CLIENTS`)
- Financiële documenten (→ `06_FINANCE`)
- Juridische documenten (→ `07_LEGAL`)
- Deal- of Master Boutique-materiaal (→ `04_DEALS` of `01_MASTER_BOUTIQUE`)

---

## **5. SUBMAPPEN**

```text
09_CONTENT
├── 00_START_HIER
├── ASSETS
├── SOCIALMEDIA
├── FORMATS
├── CONTENT_CALENDAR
└── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | Startpunt: contentinstructies, overzicht en referenties voor `09_CONTENT`. |
| `ASSETS` | Beeldmateriaal, video's, audio en grafische bestanden voor CM-kanalen. |
| `SOCIALMEDIA` | Social media-posts, captions en postmateriaal voor CM-kanalen. |
| `FORMATS` | Herbruikbare contentformats en visuele templates. |
| `CONTENT_CALENDAR` | Contentkalender en planningsoverzichten voor CM. |
| `99_ARCHIEF` | Gepubliceerde of afgeronde contentbestanden die niet meer actief zijn. |

---

## **6. TEMPLATES**

Geen vaste templates toegewezen vanuit `docs/03_SHARED_SERVICES/TEMPLATES/` voor `09_CONTENT`. Contentformats worden beheerd in Canva (nog te bouwen) en intern in `09_CONTENT/FORMATS`.

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Content productie workflow (artist) | `docs/02_ARTIST_MANAGEMENT/04_CONTENT_PRODUCTIE_WORKFLOW.md` | Contentproductie (artistspecifiek; als referentie voor CM-eigen content) |
| Social publishing workflow (artist) | `docs/02_ARTIST_MANAGEMENT/05_SOCIAL_PUBLISHING_WORKFLOW.md` | Publicatie (artistspecifiek; als referentie) |
| CM-eigen contentpublicatie | TBD | Publicatie namens CM op eigen kanalen |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Content Publication SOP | `docs/03_SHARED_SERVICES/CONTENT_PUBLICATION_SOP.md` | Publicatieproces voor CM's eigen kanalen en contentkalenderbeheer |

---

## **9. PLAYBOOKS**

Geen vaste Playbooks toegewezen aan `09_CONTENT`.

---

## **10. OWNER AGENT**

**CM SOCIAL AGENT**

CM SOCIAL AGENT beheert `09_CONTENT`. De agent coördineert de productie en publicatie van content voor CM's eigen kanalen, bewaakt de contentkalender en zorgt dat content-assets op de juiste locatie staan.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM VAULT AGENT | Archivering van afgeronde of gepubliceerde contentbestanden. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM SOCIAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken content-asset of contentdossier | Level 2 | CM SOCIAL AGENT |
| Bijwerken van contentkalender | Level 2 | CM SOCIAL AGENT |
| Publicatie namens CM | Level 4 | Sophia |
| Externe verspreiding van contentmateriaal | Level 4 | Sophia |
| Verwijdering van contentbestand | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Gepubliceerde of afgeronde contentbestanden gaan naar `09_CONTENT/99_ARCHIEF`.
- Geen enkel contentbestand wordt permanent verwijderd zonder Sophia-approval.
- CM VAULT AGENT ondersteunt archivering na instructie van CM SOCIAL AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik kanaal als context: `CM_INSTAGRAM_`, `CM_LINKEDIN_`
- Gebruik datumnotatie: `20260615` of `Q2_2026`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `CM_INSTAGRAM_POST_20260615.jpg`
Incorrect: `post instagram nieuw definitief 2.jpg`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle contentbestanden | Actief |
| GitHub | Bron van content-workflows en SOPs (referentie) | Actief |
| ClickUp | Taakbeheer voor contentproductie en -planning | Actief |
| Gmail | Contentcorrespondentie via `info@custommade.agency` | Actief |
| Canva | Visuele contentproductie en formats (Brand Kit nog te bouwen) | Nog te bouwen |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Content-workflows en governance | GitHub (`docs/02_ARTIST_MANAGEMENT/`, `docs/06_PLAYBOOKS/`) |
| Contentbestanden en assets | Drive (`09_CONTENT/`) |
| Contentkalender en taakstatus | ClickUp |
| Correspondentie | Gmail |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken en bijhouden van content-assets en contentdossiers
- Bijwerken van contentkalender
- Voorbereiding van contentpostmateriaal voor Sophia-review

**Vereist Sophia-approval (Level 4):**
- Publicatie namens CM op eigen kanalen
- Externe verspreiding van contentmateriaal
- Verwijdering van contentbestanden

**Attentiepunten:**
- Artistspecifieke content hoort in `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA`
- Canva Brand Kit is nog niet beschikbaar; visuele output tijdelijk via andere tools
- Alle externe publicaties lopen via Sophia-approval

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `09_CONTENT`:**
- Contentbriefings vanuit `08_MARKETING` (campagnestrategie)
- Artist-assets vanuit `02_ARTIST_MANAGEMENT/[ARTIST]/08_PRESS_EPK` (indien artistcontent onderdeel is van CM-kanaal)

**Output vanuit `09_CONTENT`:**
- Gepubliceerde content → CM's externe kanalen (na Sophia-approval)
- Afgeronde content → `99_ARCHIEF`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Contentkalender actueel | Minimaal 2 weken vooruit gepland | CM SOCIAL AGENT check wekelijks |
| Geen publicatie zonder approval | 0 niet-goedgekeurde publicaties namens CM | Approval Register check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Artistspecifieke social content in `09_CONTENT` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]/07_SOCIALMEDIA` |
| Content namens CM gepubliceerd zonder Sophia-approval | Registreer in Approval Register; escaleer naar Sophia |
| Marketingstrategie opgeslagen in `09_CONTENT` | Verplaats naar `08_MARKETING` |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM SOCIAL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approvalniveaus kloppen met `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Agent Register | `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

# **MAP SPECIFICATION — 00_ADMIN**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `00_ADMIN` |
| Drive-pad | `OS_CUSTOMMADE/00_ADMIN` |
| Owner Agent | CM CONTROL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |

---

## **2. DOEL**

`00_ADMIN` bevat interne administratie, templates en governance-referentie voor CM als bedrijf. Dit is de centrale beheermap voor intern operationeel gebruik: onboarding van personeel, masterclasses, HR-documentatie en operationele templates voor intern gebruik. `00_ADMIN` bevat geen clientdossiers, artistdossiers of financiële primaire documenten.

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Interne onboarding | Instructiedocumenten voor nieuwe teamleden, interns en freelancers | `ONBOARDING_INTERN_2026.pdf` |
| HR-documenten | Arbeidsovereenkomsten, freelance-overeenkomsten, NDA's voor intern personeel | `FREELANCE_NDA_TEMPLATE.pdf` |
| Governance-referentie | Geprinte of geëxporteerde referentieversies van GitHub-governancedocumenten | `CM_AGENT_REGISTER_REF_2026.pdf` |
| Templates (intern) | Operationele templates voor intern gebruik | `DO_NOTS_TEMPLATE_REF.pdf` |
| Cursus- en masterclassmateriaal | Opleidingsmateriaal, presentaties en leerresources voor teamontwikkeling | `MASTERCLASS_PUBLISHING_2025.pdf` |
| Admin-notities | Vergadernotities, interne beslissingen, operationele aantekeningen | `ADMIN_NOTES_Q2_2026.docx` |

---

## **4. VERBODEN DOCUMENTEN**

- Getekende clientcontracten (→ `07_LEGAL/CONTRACTS` of `03_CLIENTS/[CLIENT]/02_CONTRACT`)
- Artistcontracten (→ `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`)
- Facturen, bonnen, kwitanties (→ `06_FINANCE` of Moneybird)
- Dealdossiers (→ `04_DEALS`)
- Clientspecifieke instructiedocumenten (→ `03_CLIENTS/[CLIENT]/01_ADMIN`)
- Artistspecifieke instructiedocumenten (→ `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN`)
- Live contentbestanden, social media-assets (→ `09_CONTENT`)
- Marketingmateriaal (→ `08_MARKETING`)

---

## **5. SUBMAPPEN**

Gebruik exact deze submapstructuur:

```text
00_ADMIN
├── 01_INBOX_REVIEW
├── 02_GOVERNANCE_REFERENCE
├── 03_TEMPLATES
├── 04_REPORTS
└── 05_APPROVALS
```

| Submap | Gebruik |
|---|---|
| `01_INBOX_REVIEW` | Tijdelijke intake en triage voor CM-brede documenten. |
| `02_GOVERNANCE_REFERENCE` | Operationele kopieën of verwijzingen naar goedgekeurde governance. |
| `03_TEMPLATES` | Werkbare Drive-kopieën van goedgekeurde templates. |
| `04_REPORTS` | CM-brede operationele rapportages en exports. |
| `05_APPROVALS` | Admin-gerelateerde approval evidence; legal approvals blijven in `07_LEGAL`. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| `EMAIL_INSTRUCTIONS_TEMPLATE.md` | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md` | `00_ADMIN/03_TEMPLATES` |
| `DO_NOTS_TEMPLATE.md` | `docs/03_SHARED_SERVICES/TEMPLATES/DO_NOTS_TEMPLATE.md` | `00_ADMIN/03_TEMPLATES` |
| `EMAIL_TEMPLATES.md` | `docs/03_SHARED_SERVICES/TEMPLATES/EMAIL_TEMPLATES.md` | `00_ADMIN/03_TEMPLATES` |
| `GMAIL_TEMPLATES.md` | `docs/03_SHARED_SERVICES/TEMPLATES/GMAIL_TEMPLATES.md` | `00_ADMIN/03_TEMPLATES` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Intern Onboarding Flow | `docs/03_SHARED_SERVICES/INTERN_ONBOARDING_FLOW.md` | Nieuwe teamlid, intern of freelancer start |
| Governance Export Flow | `docs/03_SHARED_SERVICES/GOVERNANCE_EXPORT_FLOW.md` | Na merge van governance-wijziging in GitHub |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Admin SOP | `docs/03_SHARED_SERVICES/ADMIN_SOP.md` | Intern administratief beheer, intake-triage, governance-referenties en templatebeheer |

---

## **9. PLAYBOOKS**

Geen vaste Playbooks toegewezen aan `00_ADMIN`.

---

## **10. OWNER AGENT**

**CM CONTROL AGENT**

CM CONTROL AGENT beheert `00_ADMIN` als governance-mapowner. De agent bewaakt de integriteit van interne administratie, zorgt dat templates en governance-referenties actueel zijn, en escaleert bij conflicten of governance-wijzigingen.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM VAULT AGENT | Beheert archivering van afgeronde admin-documenten en governance-exports. |
| CM FLOW AGENT | Richt automatiseringen in voor governance-exports of onboarding-flows wanneer die beschikbaar zijn. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM CONTROL AGENT; bij escalatie: Sophia.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken intern document | Level 3 | CM CONTROL AGENT |
| Toevoegen HR-document | Level 3 | CM CONTROL AGENT |
| Governance-referentie exporteren | Level 3 | CM CONTROL AGENT |
| Externe verspreiding van intern document | Level 4 | Sophia |
| Wijziging van governance-document (bron in GitHub) | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde of verouderde admin-documenten gaan naar `99_ARCHIVE/LEGACY_ROOTS` of een jaargebonden archiefmap zoals `99_ARCHIVE/2025`.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT voert archivering uit na instructie van CM CONTROL AGENT.
- Governance-referenties die niet meer actueel zijn worden gearchiveerd; de GitHub-bron blijft leidend.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik hoofdletters voor systeemmappen: `01_ONBOARDING`, `04_HR`
- Gebruik underscores, geen spaties
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen
- Gebruik datumnotatie `YYYY` of `YYYY-MM` voor tijdgebonden documenten

Correct: `ONBOARDING_INTERN_2026.pdf`
Incorrect: `onboarding nieuw definitief v2.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle `00_ADMIN`-documenten | Actief |
| GitHub | Bron van governance en templates; exports landen in `00_ADMIN/02_GOVERNANCE_REFERENCE` | Actief |
| ClickUp | Taakbeheer voor admin-acties en onboarding-tasks | Actief |
| Gmail | Correspondentie rondom HR en onboarding | Actief |
| Make | Governance Export bij PR Merge (ID `6407378`) | Actief |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Governance-regels en SOPs | GitHub (`docs/00_GOVERNANCE/`) |
| Taakstatus onboarding | ClickUp |
| HR-correspondentie | Gmail |
| Financiële documenten | Moneybird (niet in `00_ADMIN`) |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken en bijhouden van interne admin-documenten
- Exporteren van governance-referenties na GitHub-merge
- Bijwerken van onboardingmateriaal
- Archivering van afgeronde documenten na instructie van CM CONTROL AGENT

**Vereist Sophia-approval (Level 4):**
- Externe verspreiding van intern document
- Wijziging van governance-brondocumenten in GitHub
- Verwijdering van bestanden uit `00_ADMIN`

**Attentiepunten:**
- Geen clientdata, artiestdata of vertrouwelijke persoonsinformatie opslaan in `00_ADMIN`
- Governance-referenties zijn altijd copies; de bron staat in GitHub
- Bij twijfel over juiste opslaglocatie: escaleer naar CM CONTROL AGENT

---

## **18. AUTOMATISERINGEN**

| Scenario | Make ID | Trigger | Status |
|---|---|---|---|
| CM ▸ Governance Export bij PR Merge | `6407378` | Polling elke 15 minuten — actie alleen bij gemerged PR naar `main` in `CM_OPERATING_SYSTEM` | Actief |

**CM ▸ Governance Export bij PR Merge:**
- Pollt GitHub elke 15 minuten op PR-updates in `CustomMadeNL/CM_OPERATING_SYSTEM`
- Filter: alleen gemerged PRs naar `main` branch
- Stuurt automatische e-mailmelding naar `info@custommade.agency` met PR-nummer, titel, URL en merge-informatie

---

## **19. AFHANKELIJKHEDEN**

**Input naar `00_ADMIN`:**
- GitHub `docs/00_GOVERNANCE/` → governance-referentie-exports naar `02_GOVERNANCE_REFERENCE`
- GitHub `docs/03_SHARED_SERVICES/TEMPLATES/` → template-referenties naar `03_TEMPLATES`

**Output vanuit `00_ADMIN`:**
- Onboardingmateriaal → teamleden, interns, freelancers
- HR-documenten → `07_LEGAL` (bij ondertekening)
- Afgeronde documenten → `99_ARCHIVE`

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Governance-referentie actueel | Maximaal 1 kwartaal achter op GitHub | Kwartaalreview door CM CONTROL AGENT |
| Submapstructuur correct | Geen mappen buiten de 5 goedgekeurde submappen | Controle bij kwartaalreview |
| Geen verboden documenten | 0 clientdossiers, 0 facturen, 0 contracten in `00_ADMIN` | Controle bij kwartaalreview |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Clientcontract opgeslagen in `00_ADMIN` | Verplaats naar `07_LEGAL/CONTRACTS` of `03_CLIENTS/[CLIENT]/02_CONTRACT` |
| Artistinstructies opgeslagen in `00_ADMIN/03_TEMPLATES` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]/01_ADMIN` |
| Facturen opgeslagen in `00_ADMIN` | Verplaats naar `06_FINANCE` of registreer in Moneybird |
| Governance-brondocument bewerkt in Drive | Brondocument staat in GitHub; bewerk via pull request |
| Map aangemaakt buiten de 5 goedgekeurde submappen | Verwijder lege map; gebruik bestaande structuur |

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
| Agent Register | `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Document Standards | `docs/00_GOVERNANCE/DOCUMENT_STANDARDS.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

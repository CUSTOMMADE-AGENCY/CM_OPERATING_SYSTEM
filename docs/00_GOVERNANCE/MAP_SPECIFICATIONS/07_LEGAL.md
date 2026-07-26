# **MAP SPECIFICATION — 07_LEGAL**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `07_LEGAL` |
| Drive-pad | `OS_CUSTOMMADE/07_LEGAL` |
| Owner Agent | CM LEGAL AGENT |
| Status | Actief |
| Versie | 1.0 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |

---

## **2. DOEL**

`07_LEGAL` bevat generieke legal governance, contracttemplates, juridische bewijsstukken, NDA's, partnerovereenkomsten en legal reviewdossiers voor CM als bedrijf. Het Approval Register staat hier als centraal goedkeuringsregister. `07_LEGAL` en `04_DEALS` zijn aparte mappen maar beide eigendom van CM LEGAL AGENT. `07_LEGAL` bevat geen artistcontracten als primaire bron (→ `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`), geen dealdossiers (→ `04_DEALS`) en geen financiële primaire documenten (→ `06_FINANCE`).

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Contract | Getekende overeenkomsten voor freelancers, partners, leveranciers, artiesten en klanten | `CONTRACT_FREELANCER_[NAAM]_SIGNED.pdf` |
| NDA | Geheimhoudingsovereenkomsten | `NDA_[PARTIJ]_SIGNED.pdf` |
| Partnerovereenkomst | Overeenkomsten met partners en samenwerkingsverbanden | `PARTNERSHIP_AGREEMENT_[NAAM].pdf` |
| Legal review | Juridische beoordelingen en adviesdocumenten | `LEGAL_REVIEW_[ONDERWERP]_2026.docx` |
| Rechtenbewijsstuk | Bewijsstuk van rechtenoverdracht of -licentie | `RIGHTS_EVIDENCE_[ARTIST]_[DEAL].pdf` |
| Approval Register | Centraal register voor Level 4 approvals en Sophia-beslissingen | `CM_APPROVAL_REGISTER` (Google Sheet) |
| Juridisch advies | Externe of interne juridische adviesdocumenten | `JURIDISCH_ADVIES_[ONDERWERP].pdf` |

---

## **4. VERBODEN DOCUMENTEN**

- Artistcontracten als primaire bron (→ `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`; kopie mag in `07_LEGAL/ARTIESTEN`)
- Dealdossiers (→ `04_DEALS`)
- Primaire financiële documenten (→ `06_FINANCE` of Moneybird)
- Marketingmateriaal (→ `08_MARKETING`)
- Contentmaterialen (→ `09_CONTENT`)
- Operationele werkbestanden (→ `05_OPERATIONS`)

---

## **5. SUBMAPPEN**

```text
07_LEGAL
├── 00_START_HIER
├── APPROVALS
│   └── CM_APPROVAL_REGISTER
├── CONTRACTS
├── NDA
├── PARTNERS
├── FREELANCERS
├── ARTIESTEN
├── KLANTEN
├── LEVERANCIERS
├── RIGHTS
├── LEGAL_REVIEW
├── EVIDENCE
└── 99_ARCHIEF
```

| Submap | Gebruik |
|---|---|
| `00_START_HIER` | Startpunt: instructies, overzicht en legal governance-referentie. |
| `APPROVALS/CM_APPROVAL_REGISTER` | Centraal Approval Register voor Level 4 approvals en Sophia-beslissingen (Google Sheet). |
| `CONTRACTS` | Getekende contracten gesorteerd per categorie. |
| `NDA` | Geheimhoudingsovereenkomsten met externe partijen. |
| `PARTNERS` | Overeenkomsten met partners en samenwerkingsverbanden. |
| `FREELANCERS` | Freelance-overeenkomsten en aanverwante juridische documenten. |
| `ARTIESTEN` | Artistcontracten en managementafspraken (referentiekopie; primaire bron in `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`). |
| `KLANTEN` | Klantovereenkomsten en opdrachtbevestigingen. |
| `LEVERANCIERS` | Leveranciersovereenkomsten en inkoopcontracten. |
| `RIGHTS` | Rechtenbewijzen, licenties en rechtenoverdrachten. |
| `LEGAL_REVIEW` | Juridische reviewdossiers en adviesdocumenten. |
| `EVIDENCE` | Bewijsstukken voor juridische of deal-onderbouwing. |
| `99_ARCHIEF` | Afgeronde of niet-actieve juridische documenten. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Rights Audit Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLIENT_DELIVERABLES/RIGHTS_AUDIT_TEMPLATE.md` | `07_LEGAL/RIGHTS` of `07_LEGAL/LEGAL_REVIEW` |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Contract Lifecycle Flow | `docs/07_LEGAL/CONTRACT_LIFECYCLE_FLOW.md` | Opstellen, ondertekening en beheer van contracten |
| Legal Review Flow | `docs/07_LEGAL/LEGAL_REVIEW_FLOW.md` | Juridische beoordeling van documenten of overeenkomsten |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Legal Review SOP | `docs/07_LEGAL/LEGAL_REVIEW_SOP.md` | Juridische review van contracten en documenten, Approval Register-beheer |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| Rights Recovery Playbook | `docs/05_OPERATIONS/PLAYBOOKS/RIGHTS_RECOVERY_PLAYBOOK.md` | Rechtenteruggave en -herstel |
| Publishing Playbook | `docs/05_OPERATIONS/PLAYBOOKS/PUBLISHING_PLAYBOOK.md` | Publishing-rechten en -deals |
| Sync Playbook | `docs/05_OPERATIONS/PLAYBOOKS/SYNC_PLAYBOOK.md` | Sync-deals en licenties |

---

## **10. OWNER AGENT**

**CM LEGAL AGENT**

CM LEGAL AGENT beheert `07_LEGAL` als primaire eigenaar. De agent bewaakt juridische integriteit van alle contracten, NDA's, rechtenbewijzen en het Approval Register. `07_LEGAL` en `04_DEALS` zijn aparte mappen maar beide vallen onder CM LEGAL AGENT.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM CONTROL AGENT | Governance-bewaking en beheer van het Approval Register in samenwerking met CM LEGAL AGENT. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM LEGAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanmaken contractdossier (intern) | Level 2 | CM LEGAL AGENT |
| Bijwerken van legal reviewdossier | Level 2 | CM LEGAL AGENT |
| Ondertekening of juridische verplichting | Level 4 | Sophia |
| Externe indiening van juridisch document | Level 4 | Sophia |
| Wijziging van het Approval Register | Level 4 | Sophia |
| Verwijdering van juridisch document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Afgeronde of niet-actieve juridische dossiers gaan naar `07_LEGAL/99_ARCHIEF`.
- Contracten, NDA's, rechtenbewijzen en bewijsstukken worden **nooit** verwijderd.
- Geen enkel document wordt verwijderd zonder Sophia-approval.
- CM VAULT AGENT ondersteunt archivering na instructie van CM LEGAL AGENT.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Contracttypen als prefix: `CONTRACT_`, `NDA_`, `PARTNERSHIP_`
- Ondertekeningsstatus aangeven: `_SIGNED`, `_CONCEPT`, `_REJECTED`
- Geen `final`, `new`, `copy`, `oud`, `v2` in bestandsnamen

Correct: `NDA_PARTIJNAAM_SIGNED.pdf`
Incorrect: `nda nieuw getekend definitief.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Primaire opslag van alle juridische documenten | Actief |
| GitHub | Bron van legal workflows, SOPs en templates (referentie) | Actief |
| ClickUp | Taakbeheer voor legal actiepunten en contract lifecycle | Actief |
| Gmail | Juridische correspondentie | Actief |
| Google Sheets | Approval Register (`CM_APPROVAL_REGISTER`) | Actief |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Getekende contracten | Drive (`07_LEGAL/CONTRACTS`, `ARTIESTEN`, `KLANTEN`, etc.) |
| Legal governance (bron) | GitHub (`docs/00_GOVERNANCE/`, `docs/05_OPERATIONS/PLAYBOOKS/`) |
| Approval Register | Drive (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |
| Juridische correspondentie | Gmail |
| Taakstatus | ClickUp |
| Financiële waarheid | Moneybird (niet in `07_LEGAL`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Aanmaken en bijhouden van interne legal reviewdossiers
- Opstellen van conceptcontracten voor Sophia-review
- Bijwerken van legal referentiedocumenten

**Vereist Sophia-approval (Level 4):**
- Ondertekening of aangaan van juridische verplichting
- Externe indiening van juridisch document
- Wijziging van het Approval Register
- Verwijdering van juridische documenten

**Attentiepunten:**
- `07_LEGAL` en `04_DEALS` zijn aparte mappen, beide onder CM LEGAL AGENT
- Approval Register (`CM_APPROVAL_REGISTER`) is het centrale goedkeuringsregister; eigenaar is CM CONTROL AGENT, beheer door CM VAULT AGENT
- Artistcontracten horen primair in `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`; kopie mag in `07_LEGAL/ARTIESTEN`

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `07_LEGAL`:**
- Artist contracts (referentie) vanuit `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`
- Deal contracts na closing vanuit `04_DEALS`
- Approval-verzoeken vanuit alle agents en Sophia

**Output vanuit `07_LEGAL`:**
- Getekende contracten → externe partijen (na Sophia-approval)
- Approval Register → Sophia en CM CONTROL AGENT
- Juridisch advies → relevante agents

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Approval Register up-to-date | Elke Level 4-actie geregistreerd binnen 24u | CM CONTROL AGENT check |
| Geen contract verwijderd | 0 verwijderingen zonder Sophia-approval | Approval Register check |
| Actieve contracten aanwezig | 100% van actieve partners/artiesten heeft contract in dossier | Kwartaalreview door CM LEGAL AGENT |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Artistcontract opgeslagen in `07_LEGAL` als primair document | Primaire bron hoort in `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`; maak referentiekopie in `07_LEGAL/ARTIESTEN` |
| Dealdossier opgeslagen in `07_LEGAL` | Verplaats naar `04_DEALS` |
| Approval Register niet bijgewerkt na Level 4-actie | Registreer direct; escaleer naar CM CONTROL AGENT |
| Juridisch document verwijderd zonder Sophia-approval | Herstel document; registreer incident; escaleer |
| Contract extern verzonden zonder Sophia-approval | Herstop; registreer in Approval Register; escaleer |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Submapstructuur klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 5
- [ ] Owner Agent (CM LEGAL AGENT) klopt met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 4
- [ ] Approval Register aanwezig in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`
- [ ] Approvalniveaus kloppen met `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md`
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`
- [ ] Archiveregels kloppen met `docs/04_SYSTEMS/DRIVE_MAPPING.md` Section 8

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Approval Log | `docs/00_GOVERNANCE/APPROVAL_LOG.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

# **MAP SPECIFICATION — 01_MASTER_BOUTIQUE**

---

## **1. METADATA**

| Veld | Waarde |
|---|---|
| Drive-map | `01_MASTER_BOUTIQUE` |
| Drive-pad | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` |
| Owner Agent | CM LEGAL AGENT |
| Status | Actief |
| Versie | 1.1 |
| Laatste review | 2026-07-01 |
| Gebaseerd op | `docs/04_SYSTEMS/DRIVE_MAPPING.md`, `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/01_MASTER_BOUTIQUE/` |

---

## **2. DOEL**

`01_MASTER_BOUTIQUE` is de kennis- en methodiekenmap voor het Master Boutique-domein. De map bevat uitsluitend Master Boutique-context, playbooks, methodieken, marktmodellen, rights modellen, acquisitieframeworks, buyer frameworks, valuation methodieken, due diligence methodieken en algemene kennis.

Concrete dealcases, casefolders, live dealdossiers, Assets en Buyers staan niet in `01_MASTER_BOUTIQUE`. Concrete dealcases staan uitsluitend onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`.

---

## **3. DOCUMENTTYPEN**

| Documenttype | Omschrijving | Voorbeeldbestandsnamen |
|---|---|---|
| Contextdocumenten | Master Boutique-positionering, scope, uitgangspunten en domeinkaders. | `MASTER_BOUTIQUE_CONTEXT.md` |
| Playbooks | Herbruikbare proces- en beslislogica voor catalogus-, buyer- en rechtenprocessen. | `CATALOG_ACQUISITION_PLAYBOOK.md` |
| Methodieken | Algemene werkwijzen voor waardering, due diligence, rights checks en dealvoorbereiding. | `VALUATION_METHODOLOGY.md` |
| Marktmodellen | Algemene marktanalyses, benchmarkmodellen en categorisaties zonder live dealdata. | `MARKET_MODEL_CATALOGS.md` |
| Frameworks | Acquisitie-, buyer-, rights- en governanceframeworks. | `BUYER_FRAMEWORK.md` |
| Algemene kennis | Niet-clientspecifieke referenties, definities en researchnotities. | `RIGHTS_MODEL_REFERENCE.md` |

---

## **4. VERBODEN DOCUMENTEN**

- Concrete dealcases, casefolders of live dealdossiers (→ `04_DEALS`).
- Assets, catalogusdossiers of deal-specifieke datarooms (→ `04_DEALS/[DEAL_OR_ASSET_NAME]`).
- Buyer-lijsten, buyer-identificerende gegevens of outreachdossiers voor live deals (→ ClickUp/Gmail/`04_DEALS` volgens governance).
- Artistmanagementdossiers (→ `02_ARTIST_MANAGEMENT`).
- Facturen en bonnen (→ `06_FINANCE` of Moneybird).
- Clientdossiers zonder dealkoppeling (→ `03_CLIENTS`).
- Getekende contracten, rechtenbewijzen en live correspondentie (→ juiste operationele Drive-map of systeem van waarheid).

---

## **5. SUBMAPPEN**

`01_MASTER_BOUTIQUE` gebruikt alleen kennis- en methodiekcategorieën. Er worden geen casefolders, dealfolders of assetfolders onder deze map aangemaakt.

```text
01_MASTER_BOUTIQUE
├── 01_CONTEXT
├── 02_PLAYBOOKS
├── 03_METHODOLOGIES
├── 04_MARKET_MODELS
├── 05_RIGHTS_MODELS
├── 06_ACQUISITION_FRAMEWORKS
├── 07_BUYER_FRAMEWORKS
├── 08_VALUATION_METHODS
└── 09_DUE_DILIGENCE_METHODS
```

| Submap | Gebruik |
|---|---|
| `01_CONTEXT` | Master Boutique-context, scope en domeinkaders. |
| `02_PLAYBOOKS` | Herbruikbare playbooks zonder live dealdata. |
| `03_METHODOLOGIES` | Algemene methodieken voor uitvoering en review. |
| `04_MARKET_MODELS` | Marktmodellen en benchmarkkaders. |
| `05_RIGHTS_MODELS` | Algemene rechtenmodellen en rights taxonomie. |
| `06_ACQUISITION_FRAMEWORKS` | Acquisitiekaders en intakecriteria. |
| `07_BUYER_FRAMEWORKS` | Buyer segmentatie- en kwalificatiekaders zonder buyerdossiers. |
| `08_VALUATION_METHODS` | Waarderingsmethodieken en rekenlogica zonder live cases. |
| `09_DUE_DILIGENCE_METHODS` | Due diligence methodieken, checklists en proceskaders. |

---

## **6. TEMPLATES**

| Template | Pad (GitHub) | Uitvoer in Drive |
|---|---|---|
| Deal Negotiation Template | `docs/03_SHARED_SERVICES/TEMPLATES/CLICKUP/DEAL_NEGOTIATION_TEMPLATE.md` | Alleen als methodische referentie; operationele deal-output hoort onder `04_DEALS/[DEAL_OR_ASSET_NAME]`. |

---

## **7. WORKFLOWS**

| Workflow | Pad (GitHub) | Trigger |
|---|---|---|
| Buyer Outreach Workflow | `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md` | Referentie voor algemene buyer outreach-methodiek. |
| Dealflow catalogusdossier | `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` | Referentie voor intake-methodiek; concrete dossiers worden in `04_DEALS` geplaatst. |

---

## **8. SOPs**

| SOP | Pad (GitHub) | Scope |
|---|---|---|
| Due Diligence Checklist | `docs/01_MASTER_BOUTIQUE/DUE_DILIGENCE_CHECKLIST.md` | Algemene due diligence-methodiek; live due diligence-output hoort onder `04_DEALS/[DEAL_OR_ASSET_NAME]`. |

---

## **9. PLAYBOOKS**

| Playbook | Pad (GitHub) | Scope |
|---|---|---|
| APA Negotiation Playbook | `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md` | Algemene APA-onderhandelingsmethodiek. |
| Catalog Valuation Playbook | `docs/01_MASTER_BOUTIQUE/CATALOG_VALUATION_PLAYBOOK.md` | Algemene waarderingsmethodiek. |
| Buyer Outreach Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BUYER_OUTREACH_PLAYBOOK.md` | Buyer outreach en kwalificatie als generiek proces. |
| Sell Side Process Playbook | `docs/05_OPERATIONS/PLAYBOOKS/SELL_SIDE_PROCESS_PLAYBOOK.md` | Verkoopproces als generiek proces. |
| Buy Side Process Playbook | `docs/05_OPERATIONS/PLAYBOOKS/BUY_SIDE_PROCESS_PLAYBOOK.md` | Aankoopproces als generiek proces. |
| Deal Negotiation Playbook | `docs/05_OPERATIONS/PLAYBOOKS/DEAL_NEGOTIATION_PLAYBOOK.md` | Dealonderhandeling als generieke methodiek. |
| Catalog Acquisition Playbook | `docs/05_OPERATIONS/PLAYBOOKS/CATALOG_ACQUISITION_PLAYBOOK.md` | Catalogusaankoop als generiek proces. |

---

## **10. OWNER AGENT**

**CM LEGAL AGENT**

CM LEGAL AGENT beheert de juridische en methodische integriteit van Master Boutique-kennis, rechtenmodellen, acquisitiekaders en due diligence-methodieken.

---

## **11. SUPPORT AGENTS**

| Agent | Rol in deze map |
|---|---|
| CM OPS AGENT | Operationele ondersteuning bij documentordening en methodiekbeheer. |
| CM MONEY AGENT | Finance-signalen bij algemene valuation methodieken. |
| CM VAULT AGENT | Archivering van superseded kennisdocumenten naar centrale archive governance. |
| CM PROSPECT AGENT | Input op buyer frameworks en buyerkwalificatie-methodiek. |

Support Agents zijn geen mede-eigenaar. Bij conflict beslist CM LEGAL AGENT; bij escalatie: CM CONTROL AGENT.

---

## **12. APPROVALNIVEAU**

| Actie | Approvalniveau | Approver |
|---|---|---|
| Aanpassen algemene methodiek of framework | Level 2 | CM LEGAL AGENT |
| Publiceren van nieuw playbook of model | Level 2 | CM LEGAL AGENT |
| Toevoegen van deal-specifieke informatie | Niet toegestaan | Verplaats naar `04_DEALS` |
| Externe distributie van interne methodiek | Level 4 | Sophia |
| Verwijdering van document | Level 4 | Sophia |

---

## **13. ARCHIVEREGELS**

- Superseded kennisdocumenten worden volgens centrale archive governance afgehandeld.
- `01_MASTER_BOUTIQUE` gebruikt geen per-case `99_ARCHIEF`.
- Concrete afgeronde dealdossiers worden niet hier gearchiveerd maar volgens `04_DEALS` en `99_ARCHIVE` governance.
- Geen enkel document wordt verwijderd zonder Sophia-approval.

---

## **14. NAAMCONVENTIES**

Zie `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` voor de volledige standaard.

- Gebruik beschrijvende kennisnamen in hoofdletters met underscores.
- Gebruik geen live case-, asset- of buyernamen in repository-bestandsnamen.
- Versienummering met `_V1`, `_V2` etc. bij methodiekexports.

Correct: `CATALOG_VALUATION_METHOD_V2.md`
Incorrect: `deal memo buyer final nieuw.pdf`

---

## **15. SYSTEMEN**

| Systeem | Rol | Koppeling |
|---|---|---|
| Google Drive | Opslag van Master Boutique-kennis en methodieken | Actief |
| GitHub | Bron van playbooks, SOPs en workflows voor Master Boutique | Actief |
| ClickUp | Taakbeheer voor updates aan kennisdocumenten | Actief |
| Gmail | Geen source of truth voor deze map | Alleen correspondentie |
| Moneybird | Geen primaire rol voor deze map | Financiële waarheid blijft Moneybird |
| Make | Geen actieve scenario's. | Nog in te richten |

---

## **16. SOURCE OF TRUTH**

| Informatietype | Source of Truth |
|---|---|
| Master Boutique-kennis en methodieken | GitHub (`docs/01_MASTER_BOUTIQUE/`, `docs/05_OPERATIONS/PLAYBOOKS/`, `docs/00_GOVERNANCE/`) |
| Concrete dealstructuur en live dealdossiers | Drive (`OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`) |
| Taakstatus voor methodiekupdates | ClickUp |
| Buyer-correspondentie | Gmail |
| Financiële verwerking | Moneybird |
| Goedgekeurde beslissingen | Approval Register (`07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`) |

---

## **17. AI-INSTRUCTIES**

**Toegestaan zonder Sophia-approval (Level 1-3):**
- Bijwerken van algemene methodieken, frameworks en kennisdocumenten.
- Interne samenvattingen maken zonder live deal-, buyer- of clientdata.
- Verwijzen naar `04_DEALS/[DEAL_OR_ASSET_NAME]` als opslaglocatie voor concrete dealcases.

**Vereist Sophia-approval (Level 4):**
- Externe verspreiding van interne methodiekdocumenten.
- Verwijdering van bestanden.

**Niet toegestaan:**
- Aanmaken van dealcases, casefolders, Assets, Buyers of live dealdossiers onder `01_MASTER_BOUTIQUE`.
- Opslaan van deal-specifieke Data Rooms, LOI's, APA's, Closing-documenten of Success Fee-documenten in deze map.

---

## **18. AUTOMATISERINGEN**

Geen actieve automatiseringen. Make heeft nu 0 scenario's.

---

## **19. AFHANKELIJKHEDEN**

**Input naar `01_MASTER_BOUTIQUE`:**
- `docs/01_MASTER_BOUTIQUE/` (GitHub) → context, methodieken, SOPs en workflows
- `docs/05_OPERATIONS/PLAYBOOKS/` → generieke playbooks
- CM PROSPECT AGENT → buyerkwalificatie-methodiek
- CM MONEY AGENT → valuation-methodiek

**Output vanuit `01_MASTER_BOUTIQUE`:**
- Algemene methodieken → interne uitvoering
- Frameworks → `04_DEALS` als referentiekader voor concrete dossiers
- Superseded kennisdocumenten → centrale archive governance

---

## **20. KPIs**

| KPI | Norm | Meting |
|---|---|---|
| Geen concrete dealcases in `01_MASTER_BOUTIQUE` | 0 overtredingen | Kwartaalreview |
| Methodieken actueel | Review per kwartaal of bij proceswijziging | CM LEGAL AGENT check |
| Geen buyer-identificerende repository-inhoud | 0 overtredingen | Repository consistency check |

---

## **21. VEELGEMAAKTE FOUTEN**

| Fout | Correctie |
|---|---|
| Concrete deal opgeslagen in `01_MASTER_BOUTIQUE` | Verplaats naar `04_DEALS/[DEAL_OR_ASSET_NAME]`. |
| Buyer Package of Deal Memo in `01_MASTER_BOUTIQUE` | Verplaats naar het juiste dealdossier onder `04_DEALS`. |
| Data Room of closingdocument in `01_MASTER_BOUTIQUE` | Verplaats naar `04_DEALS` volgens due diligence-governance. |
| Artistdossier opgeslagen in `01_MASTER_BOUTIQUE` | Verplaats naar `02_ARTIST_MANAGEMENT/[ARTIST]`. |
| Methodiekdocument bevat live buyer- of dealdata | Verwijder gevoelige inhoud en verplaats operationele informatie naar het juiste systeem van waarheid. |

---

## **22. GOVERNANCE CONTROLE + GERELATEERDE DOCUMENTATIE**

**Controlelijst:**

- [ ] Inhoud beperkt tot Master Boutique-context, playbooks, methodieken, modellen, frameworks en algemene kennis.
- [ ] Geen concrete dealcases of live dealdossiers onder `01_MASTER_BOUTIQUE`.
- [ ] Concrete dealstructuur verwijst naar `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`.
- [ ] Templates zijn geregistreerd in `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md`.
- [ ] Naamconventies kloppen met `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`.

**Gerelateerde documentatie:**

| Document | Pad |
|---|---|
| Drive Mapping | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Drive Structure Governance | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` |
| Master Boutique-documentatie | `docs/01_MASTER_BOUTIQUE/` |
| Deal Map Specification | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/04_DEALS.md` |
| Agent Register | `docs/05_OPERATIONS/AGENTS/CM_AGENT_REGISTER.md` |
| AI Autonomy Levels | `docs/05_OPERATIONS/AGENTS/AI_AUTONOMY_LEVELS.md` |
| Naming Conventions | `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md` |
| Template Register | `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` |
| Map Specification Standard | `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md` |

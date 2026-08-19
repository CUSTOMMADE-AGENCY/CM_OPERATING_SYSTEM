# Template Placement Map

## Doel

Deze kaart bepaalt **welke template(s) in welke Google Drive-map** onder `OS_CUSTOMMADE` thuishoren. Het is de operationele brug tussen de Template Library (`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/`) en de goedgekeurde Drive-structuur (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`).

Gebruik deze kaart bij het inrichten of controleren van Drive-mappen. GitHub blijft leidend voor template-governance; Drive bevat uitsluitend werkbare kopieën of ingevulde operationele versies.

> **Freeze-status.** Sprint 6 (Template Recovery) is `VRIJGEGEVEN` op autorisatie van de accounteigenaar (2026-07-26); de template build-freeze is opgeheven. Deze kaart is leidend voor het aanvullen van templates en de Drive-uitrol.

## Leeswijzer

- **Bron = spec**: de mapping komt rechtstreeks uit een bestaande Map Specification.
- **Bron = afgeleid**: de mapping is afgeleid uit de Template Library en de mapfunctie, en wacht op review door de process owner.

## Statuslegenda

| Status | Betekenis |
|---|---|
| ✅ Beschikbaar | Template bestaat in de Library en kan geplaatst worden. |
| 🔒 Verplicht controlbestand | Governed operationeel bestand dat voor iedere actieve CM-managementartiest aanwezig moet zijn. |

---

## 1. Centrale Template Library — `00_ADMIN/03_TEMPLATES`

De centrale Drive-template-map spiegelt de canonieke Library-structuur. Dit is de mastervoorraad; dossiermappen krijgen werkbare kopieën hiervan.

| Drive-submap | Template | Status |
|---|---|---|
| `01_SHARED_SERVICES` | CLIENT_PROFILE_TEMPLATE | ✅ |
| `01_SHARED_SERVICES` | CLIENT_ONBOARDING_TEMPLATE | ✅ |
| `01_SHARED_SERVICES` | MEETING_RECAP_TEMPLATE | ✅ |
| `01_SHARED_SERVICES` | DO_NOTS_TEMPLATE | ✅ |
| `02_ARTIST_MANAGEMENT` | ARTIST_ROADMAP_TEMPLATE | ✅ |
| `02_ARTIST_MANAGEMENT` | RELEASE_STRATEGY_TEMPLATE | ✅ |
| `02_ARTIST_MANAGEMENT` | RELEASE_KICKOFF_TEMPLATE | ✅ |
| `03_MASTER_BOUTIQUE` | DEAL_MEMO_TEMPLATE | ✅ |
| `03_MASTER_BOUTIQUE` | PARTNERSHIP_BRIEF_TEMPLATE | ✅ |
| `03_MASTER_BOUTIQUE` | MUSIC_RIGHTS_REGISTER | ✅ |
| `04_CLIENT_DELIVERABLES` | BRAND_AUDIT_TEMPLATE | ✅ |
| `04_CLIENT_DELIVERABLES` | BUSINESS_AUDIT_TEMPLATE | ✅ |
| `05_CLICKUP_REFERENCES` | ACTION_TRACKER_CLICKUP_REFERENCE | ✅ |
| `05_CLICKUP_REFERENCES` | DEAL_PIPELINE_CLICKUP_REFERENCE | ✅ |
| `06_GMAIL_TEMPLATES` | EMAIL_INSTRUCTIONS_TEMPLATE | ✅ |
| `07_REPORTING` | MONTHLY_REPORT_TEMPLATE | ✅ |

---

## 2. Artist-dossier — `02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Bron = `ARTIST_FOLDER_STANDARD.md` + `DRIVE_STRUCTURE.md` + relevante Map Specifications. Werkbare kopieën worden opgeslagen met de artiestnaam in de bestandsnaam volgens de geldende naamconventie, behalve governed controlbestanden waarvoor een expliciete vaste bestandsnaam is bepaald.

| Submap | Vereiste template/controlbestand | Library-equivalent / governance | Status |
|---|---|---|---|
| `01_ADMIN` | Intake Template | INTAKE_TEMPLATE | ✅ |
| `01_ADMIN` | Contact Sheet Template | CONTACT_SHEET_TEMPLATE | ✅ |
| `01_ADMIN` | Onboarding Summary Template | CLIENT_ONBOARDING_TEMPLATE (afgeleid) | ✅ |
| `02_CONTRACT` | Contract Summary Template | CONTRACT_SUMMARY_TEMPLATE | ✅ |
| `02_CONTRACT` | Approval Evidence Template | APPROVAL_EVIDENCE_TEMPLATE | ✅ |
| `02_CONTRACT` | Amendment Log Template | AMENDMENT_LOG_TEMPLATE | ✅ |
| `03_STRATEGY` | Brand Audit Template | BRAND_AUDIT_TEMPLATE | ✅ |
| `03_STRATEGY` | Business Audit Template | BUSINESS_AUDIT_TEMPLATE | ✅ |
| `03_STRATEGY` | Roadmap Template | ARTIST_ROADMAP_TEMPLATE | ✅ |
| `03_STRATEGY` | KPI Template | KPI_TEMPLATE | ✅ |
| `03_STRATEGY` | Jaarplan Template | JAARPLAN_TEMPLATE | ✅ |
| `04_RELEASES` | Release Register Template | REGISTER_TEMPLATE (domein: Releases) + RELEASE_STRATEGY_TEMPLATE, RELEASE_KICKOFF_TEMPLATE | ✅ |
| `04_RELEASES` | Approval Evidence Template | APPROVAL_EVIDENCE_TEMPLATE | ✅ |
| `04_RELEASES` | Version Log Template | VERSION_LOG_TEMPLATE | ✅ |
| `05_BOOKING` | Booking Register Template | REGISTER_TEMPLATE (domein: Booking) | ✅ |
| `05_BOOKING` | Approval Evidence Template | APPROVAL_EVIDENCE_TEMPLATE | ✅ |
| `05_BOOKING` | Version Log Template | VERSION_LOG_TEMPLATE | ✅ |
| `06_FINANCE` | Monthly Report Template | MONTHLY_REPORT_TEMPLATE (afgeleid) | ✅ |
| `06_FINANCE/ROYALTYSHEET` | `[ARTIST]_ROYALTY_SHEET` | ARTIST_FOLDER_STANDARD + TEMPLATE_DESIGN_STANDARD + GOOGLE_SHEETS_DESIGN_STANDARD | 🔒 |
| `07_SOCIALMEDIA` | Social Register Template | REGISTER_TEMPLATE (domein: Social) | ✅ |
| `07_SOCIALMEDIA` | Approval Evidence Template | APPROVAL_EVIDENCE_TEMPLATE | ✅ |
| `07_SOCIALMEDIA` | Version Log Template | VERSION_LOG_TEMPLATE | ✅ |
| `08_PRESS_EPK` | Press/EPK Register Template | REGISTER_TEMPLATE (domein: Press/EPK) | ✅ |
| `08_PRESS_EPK` | Approval Evidence Template | APPROVAL_EVIDENCE_TEMPLATE | ✅ |
| `08_PRESS_EPK` | Version Log Template | VERSION_LOG_TEMPLATE | ✅ |
| `09_ARCHIVE` | Archive Register Template | REGISTER_TEMPLATE (domein: Archive) | ✅ |

### Royalty Sheet — harde placement rule

Iedere actieve Custommade Agency managementartiest heeft verplicht:

`02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE/ROYALTYSHEET/[ARTIST]_ROYALTY_SHEET`

Dit is geen optionele dossierkopie en gebruikt daarom niet de algemene datum-/versienaamconventie. De bestandsnaam is exact `[ARTIST]_ROYALTY_SHEET`.

De Sheet volgt verplicht de canonical CM clean dashboardlayout en bevat minimaal neighboring rights/master- en labelafspraken, publishing/auteursrechten en track-splits, approvals/evidence, statements, betalingen, advances/recoupment, contract/accountingreferenties en reminder-/follow-uplogica richting ClickUp.

Drive is opslag en rights/documentatiebron; ClickUp is uitvoering; Moneybird blijft financiële waarheid. Deze verplichting geldt uitsluitend voor CM-managementartiesten en wordt niet automatisch toegepast op FIERCE.

---

## 3. Client-dossier — `03_CLIENTS/[CLIENT_OR_PARTNER_NAME]`

| Submap | Template | Status |
|---|---|---|
| `01_ADMIN` | CLIENT_PROFILE_TEMPLATE, CLIENT_ONBOARDING_TEMPLATE, EMAIL_INSTRUCTIONS_TEMPLATE, DO_NOTS_TEMPLATE | ✅ |
| `03_BRIEF_SCOPE` | MANAGEMENT_PROPOSAL_TEMPLATE | ✅ |
| `04_DELIVERABLES` | ARTIST_AUDIT_TEMPLATE, BUSINESS_AUDIT_TEMPLATE, RELEASE_STRATEGY_TEMPLATE, ARTIST_ROADMAP_TEMPLATE, MONTHLY_REPORT_TEMPLATE | ✅ |
| `02_CONTRACT` | Contract Summary Template | ✅ |
| `05_COMMUNICATION` | MEETING_RECAP_TEMPLATE | ✅ |
| `06_FINANCE` | MONTHLY_REPORT_TEMPLATE | ✅ |
| `09_ARCHIVE` | Archive Register Template | ✅ |

---

## 4. Deal-/asset-case — `04_DEALS/[DEAL_OR_ASSET_NAME]`

| Submap | Template | Bron | Status |
|---|---|---|---|
| `00_START_HIER` | DEAL_MEMO_TEMPLATE | afgeleid | ✅ |
| `01_RECHTEN_REGISTER` | RIGHTS_AUDIT_TEMPLATE | ROOTS §6 | ✅ |
| `01_RECHTEN_REGISTER` | MUSIC_RIGHTS_REGISTER | afgeleid | ✅ |
| `02_CONTRACTEN_BEWIJS` | Contract Summary Template, Approval Evidence Template | afgeleid | ✅ |
| `03_WAARDERING_VERKOOPPAKKET` | DEAL_MEMO_TEMPLATE, PARTNERSHIP_BRIEF_TEMPLATE | afgeleid | ✅ |
| `04_OUTREACH_CLICKUP` | DEAL_NEGOTIATION_TEMPLATE | ROOTS §6 | ✅ |
| `04_OUTREACH_CLICKUP` | DEAL_PIPELINE_CLICKUP_REFERENCE, ACTION_TRACKER_CLICKUP_REFERENCE | afgeleid | ✅ |
| `99_ARCHIEF` | Archive Register Template | afgeleid | ✅ |

---

## 5. Legal — `07_LEGAL`

| Submap | Template | Bron | Status |
|---|---|---|---|
| `LEGAL_REVIEW` | RIGHTS_AUDIT_TEMPLATE | ROOTS §6 | ✅ |
| `LEGAL_REVIEW` | MEETING_RECAP_TEMPLATE | afgeleid | ✅ |
| `CONTRACTS` | Contract Summary Template | afgeleid | ✅ |
| `EVIDENCE` | Approval Evidence Template | afgeleid | ✅ |
| `APPROVALS/CM_APPROVAL_REGISTER` | *(geen — actief Google Sheet-register, geen template-doel)* | — | — |

---

## 6. Gedichte template-gaps

| Template | Locatie in Library |
|---|---|
| INTAKE_TEMPLATE | `01_SHARED_SERVICES/INTAKE_TEMPLATE.md` |
| CONTACT_SHEET_TEMPLATE | `01_SHARED_SERVICES/CONTACT_SHEET_TEMPLATE.md` |
| CONTRACT_SUMMARY_TEMPLATE | `01_SHARED_SERVICES/CONTRACT_SUMMARY_TEMPLATE.md` |
| APPROVAL_EVIDENCE_TEMPLATE | `01_SHARED_SERVICES/APPROVAL_EVIDENCE_TEMPLATE.md` |
| AMENDMENT_LOG_TEMPLATE | `01_SHARED_SERVICES/AMENDMENT_LOG_TEMPLATE.md` |
| REGISTER_TEMPLATE (domein-parameter) | `01_SHARED_SERVICES/REGISTER_TEMPLATE.md` |
| VERSION_LOG_TEMPLATE | `01_SHARED_SERVICES/VERSION_LOG_TEMPLATE.md` |
| KPI_TEMPLATE | `02_ARTIST_MANAGEMENT/KPI_TEMPLATE.md` |
| JAARPLAN_TEMPLATE | `02_ARTIST_MANAGEMENT/JAARPLAN_TEMPLATE.md` |

Het generieke `REGISTER_TEMPLATE` dekt de domein-registers (Releases, Booking, Social, Press/EPK, Archive) via de `[DOMEIN]`-parameter; er worden geen parallelle registerformats aangemaakt.

## Uitrol-script

De operationele uitrol naar Google Drive verloopt via `scripts/google-drive/populate-cm-drive-templates.gs`. `create-cm-drive-structure.gs` bouwt de governed mappenboom en maakt voor actieve CM-managementartiesten verplicht `06_FINANCE/ROYALTYSHEET` aan.

De Royalty Sheet is een governed controlbestand en moet door de relevante royalty-sheet build/populate automation als `[ARTIST]_ROYALTY_SHEET` in deze map worden aangemaakt of gecontroleerd. Het algemene template-populateproces mag geen parallelle royalty-sheetnaam of alternatieve locatie creëren.

Alle gegenereerde CM-bestanden volgen `TEMPLATE_DESIGN_STANDARD.md`; Google Sheets volgen aanvullend `GOOGLE_SHEETS_DESIGN_STANDARD.md`.

## Governance

- Governance-ladder: Drive Structure → Folder Standards → Map Specifications → **Template Placement Map** → Templates.
- Voor artist Royalty Sheets zijn `DRIVE_STRUCTURE.md`, `ARTIST_FOLDER_STANDARD.md`, `TEMPLATE_DESIGN_STANDARD.md` en `GOOGLE_SHEETS_DESIGN_STANDARD.md` gezamenlijk leidend.
- De Royalty Sheet is verplicht voor iedere actieve CM-managementartiest en heeft exact één governed Drive-locatie en bestandsnaam.
- FIERCE heeft eigen governance en wordt niet automatisch gecombineerd met CM.
- Wijzigingen verlopen via de geldende GitHub governance/reviewflow.

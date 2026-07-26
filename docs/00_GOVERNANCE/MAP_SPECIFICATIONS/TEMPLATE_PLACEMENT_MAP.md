# Template Placement Map

## Doel

Deze kaart bepaalt **welke template(s) in welke Google Drive-map** onder `OS_CUSTOMMADE` thuishoren. Het is de operationele brug tussen de Template Library (`docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/`) en de goedgekeurde Drive-structuur (`docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`).

Gebruik deze kaart bij het inrichten of controleren van Drive-mappen. GitHub blijft leidend voor template-governance; Drive bevat uitsluitend werkbare kopieën of ingevulde operationele versies.

## Leeswijzer

- **Bron = spec**: de mapping komt rechtstreeks uit een bestaande Map Specification.
- **Bron = afgeleid**: de mapping is afgeleid uit de Template Library en de mapfunctie, en wacht op review door de process owner.
- **GAP**: de Map Specification vereist een template die nog niet in de Template Library bestaat. Deze gaps staan onderaan verzameld en moeten via de Template Review Process worden aangemaakt vóór operationeel gebruik.

## Statuslegenda

| Status | Betekenis |
|---|---|
| ✅ Beschikbaar | Template bestaat in de Library en kan geplaatst worden. |
| ⚠️ Ontbreekt | Template is vereist maar bestaat nog niet (GAP). |

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

> Let op: de huidige Drive-map `00_ADMIN/03_TEMPLATES` gebruikt afwijkende submapnamen (`ARTIST_MANAGEMENT`, `CONTRACTS`, `SOPS`, `MASTER_BOUTIQUE`, `REPORTING`, `WORKFLOWS`). Uitlijnen op bovenstaande canonieke namen is onderdeel van de Drive-rollout.

---

## 2. Artist-dossier — `02_ARTIST_MANAGEMENT/[ARTIST_NAME]`

Bron = spec (`MAP_SPECIFICATIONS/ARTIST_FOLDER/`). Werkbare kopieën worden opgeslagen met de artiestnaam in de bestandsnaam volgens de naamconventie `YYYY-MM-DD_[ARTIST]_[MAP]_[DOCUMENTTYPE]_vX.Y`.

| Submap | Vereiste template | Library-equivalent | Status |
|---|---|---|---|
| `01_ADMIN` | Intake Template | — | ⚠️ |
| `01_ADMIN` | Contact Sheet Template | — | ⚠️ |
| `01_ADMIN` | Onboarding Summary Template | CLIENT_ONBOARDING_TEMPLATE (afgeleid) | ✅ |
| `02_CONTRACT` | Contract Summary Template | — | ⚠️ |
| `02_CONTRACT` | Approval Evidence Template | — | ⚠️ |
| `02_CONTRACT` | Amendment Log Template | — | ⚠️ |
| `03_STRATEGY` | Brand Audit Template | BRAND_AUDIT_TEMPLATE | ✅ |
| `03_STRATEGY` | Business Audit Template | BUSINESS_AUDIT_TEMPLATE | ✅ |
| `03_STRATEGY` | Roadmap Template | ARTIST_ROADMAP_TEMPLATE | ✅ |
| `03_STRATEGY` | KPI Template | — | ⚠️ |
| `03_STRATEGY` | Jaarplan Template | — | ⚠️ |
| `04_RELEASES` | Release Register Template | RELEASE_STRATEGY_TEMPLATE + RELEASE_KICKOFF_TEMPLATE (afgeleid) | ✅ |
| `04_RELEASES` | Approval Evidence Template | — | ⚠️ |
| `04_RELEASES` | Version Log Template | — | ⚠️ |
| `05_BOOKING` | Booking Register Template | — | ⚠️ |
| `05_BOOKING` | Approval Evidence Template | — | ⚠️ |
| `05_BOOKING` | Version Log Template | — | ⚠️ |
| `06_FINANCE` | Monthly Report Template | MONTHLY_REPORT_TEMPLATE (afgeleid) | ✅ |
| `07_SOCIALMEDIA` | Social Register Template | — | ⚠️ |
| `07_SOCIALMEDIA` | Approval Evidence Template | — | ⚠️ |
| `07_SOCIALMEDIA` | Version Log Template | — | ⚠️ |
| `08_PRESS_EPK` | Press/EPK Register Template | — | ⚠️ |
| `08_PRESS_EPK` | Approval Evidence Template | — | ⚠️ |
| `08_PRESS_EPK` | Version Log Template | — | ⚠️ |
| `09_ARCHIVE` | Archive Register Template | — | ⚠️ |

---

## 3. Client-dossier — `03_CLIENTS/[CLIENT_OR_PARTNER_NAME]`

Bron = afgeleid. Nog geen aparte client-submapspecificaties; onderstaande mapping wacht op review en formalisering in `MAP_SPECIFICATIONS/CLIENT_FOLDER/`.

| Submap | Voorgestelde template | Status |
|---|---|---|
| `01_ADMIN` | CLIENT_PROFILE_TEMPLATE, CLIENT_ONBOARDING_TEMPLATE | ✅ |
| `02_CONTRACT` | Contract Summary Template | ⚠️ |
| `03_BRIEF_SCOPE` | PARTNERSHIP_BRIEF_TEMPLATE | ✅ |
| `04_DELIVERABLES` | BRAND_AUDIT_TEMPLATE, BUSINESS_AUDIT_TEMPLATE | ✅ |
| `05_COMMUNICATION` | MEETING_RECAP_TEMPLATE, EMAIL_INSTRUCTIONS_TEMPLATE | ✅ |
| `06_FINANCE` | MONTHLY_REPORT_TEMPLATE | ✅ |
| `09_ARCHIVE` | Archive Register Template | ⚠️ |

---

## 4. Deal-/asset-case — `04_DEALS/[DEAL_OR_ASSET_NAME]`

Bron = afgeleid. Nog geen aparte deal-submapspecificaties; onderstaande mapping wacht op review en formalisering in `MAP_SPECIFICATIONS/DEAL_FOLDER/`.

| Submap | Voorgestelde template | Status |
|---|---|---|
| `00_START_HIER` | DEAL_MEMO_TEMPLATE | ✅ |
| `01_RECHTEN_REGISTER` | MUSIC_RIGHTS_REGISTER | ✅ |
| `02_CONTRACTEN_BEWIJS` | Contract Summary Template, Approval Evidence Template | ⚠️ |
| `03_WAARDERING_VERKOOPPAKKET` | PARTNERSHIP_BRIEF_TEMPLATE | ✅ |
| `04_OUTREACH_CLICKUP` | DEAL_PIPELINE_CLICKUP_REFERENCE, ACTION_TRACKER_CLICKUP_REFERENCE | ✅ |
| `99_ARCHIEF` | Archive Register Template | ⚠️ |

---

## 5. Legal — `07_LEGAL`

Bron = afgeleid. Nog geen aparte legal-submapspecificaties; onderstaande mapping wacht op review en formalisering in `MAP_SPECIFICATIONS/LEGAL_FOLDER/`.

| Submap | Voorgestelde template | Status |
|---|---|---|
| `APPROVALS/CM_APPROVAL_REGISTER` | Approval Evidence Template | ⚠️ |
| `CONTRACTS` | Contract Summary Template | ⚠️ |
| `LEGAL_REVIEW` | MEETING_RECAP_TEMPLATE (afgeleid) | ✅ |
| `EVIDENCE` | Approval Evidence Template | ⚠️ |

---

## 6. Openstaande template-gaps

De volgende templates worden door Map Specifications vereist maar bestaan nog niet in de Template Library. Ze moeten via `TEMPLATES/99_TEMPLATE_GOVERNANCE/TEMPLATE_REVIEW_PROCESS.md` worden aangemaakt vóór operationeel gebruik:

- Intake Template
- Contact Sheet Template
- Contract Summary Template
- Approval Evidence Template
- Amendment Log Template
- KPI Template
- Jaarplan Template
- Register Template (per domein: Release, Booking, Social, Press/EPK, Archive)
- Version Log Template

Tot een gap is gedicht, wordt in de betreffende Drive-map alleen het reeds beschikbare, afgeleide alternatief geplaatst en wordt de gap gelogd in `TEMPLATE_GAP_LOG`.

## Governance

- Deze kaart valt onder de governance-ladder: Drive Structure → Folder Standards → Map Specifications → **Template Placement Map** → Templates.
- Afgeleide mappings (secties 3, 4, 5 en de afgeleide regels in sectie 2) worden pas production-baseline na review door Sophia als process owner.
- Wijzigingen verlopen via branch, commit, review en Pull Request.

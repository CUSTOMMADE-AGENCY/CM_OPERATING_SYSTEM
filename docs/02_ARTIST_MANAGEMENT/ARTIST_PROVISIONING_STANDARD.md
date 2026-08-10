# CUSTOMMADE AGENCY — ARTIST PROVISIONING STANDARD

## 1. DOEL

Deze standaard bepaalt welke canonical CM-templates automatisch, fasegebonden, conditioneel of nooit automatisch in een artistdossier worden geplaatst. Doel: geen dubbele documenten, geen parallelle statusadministratie en een heldere scheiding tussen Drive, ClickUp, GitHub en Moneybird.

## 2. LEIDENDE PRINCIPES

- GitHub = canonical template-specificaties en governance.
- Drive = artistdossier, werkdocumenten, bewijs en deliverables.
- ClickUp = uitvoering, owner, deadline, priority en status.
- Moneybird = financiële waarheid.
- Legal / Rights Register = bron voor geverifieerde rechtenclaims.
- `CLIENT_ONBOARDING_TEMPLATE` vervult voor artists de functie van START HERE; er bestaat geen aparte `START_HIER_ARTIST_TEMPLATE`.
- Eén gegeven wordt maar één keer operationeel beheerd. Geen parallelle task-, risk-, decision- of inputlogs wanneer ClickUp of een bestaand canonical document de functie al vervult.

## 3. ARTIST DOSSIERSTRUCTUUR

Gebruik uitsluitend de geldende artistfolder-standaard:

```text
02_ARTIST_MANAGEMENT/[ARTIST_NAME]
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

Geen extra top-level artistfolders aanmaken zonder governance-wijziging.

## 4. PROVISIONING CLASSIFICATIES

| Classificatie | Betekenis |
|---|---|
| `MANDATORY_ONBOARDING` | Wordt aangemaakt/gekopieerd zodra een artist operationeel wordt onboarded. |
| `MANDATORY_ACTIVE_MANAGEMENT` | Wordt aangemaakt zodra de artist de actieve managementfase ingaat. |
| `PHASE_BASED` | Wordt pas aangemaakt bij de betreffende betaalde/strategische fase. |
| `CONDITIONAL` | Alleen bij concrete trigger, case of behoefte. |
| `NEVER_AUTO_COPY` | Nooit standaard in een artistdossier kopiëren; system reference, deal-case of andere lane blijft leidend. |

## 5. CANONICAL TEMPLATE MATRIX — ARTIST

### A. PRE-ENGAGEMENT / KWALIFICATIE

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `INTAKE_TEMPLATE` | `PHASE_BASED` | Nieuwe artist lead / aanvraag | `01_ADMIN` | Bevat geïntegreerde CM Fit Check; geen aparte Fit Check-template. |
| `MANAGEMENT_PROPOSAL_TEMPLATE` | `PHASE_BASED` | Scope klaar voor commercieel voorstel | `01_ADMIN` of contract/proposal-dossier | Alleen bij proposal-fase; niet standaard bij iedere lead. |

### B. ONBOARDING — START HERE

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `CLIENT_ONBOARDING_TEMPLATE` | `MANDATORY_ONBOARDING` | Contract/payment/scope gereed voor onboarding | `01_ADMIN` | Canonical START HERE voor artist. Drive-werkkopie mag heten `00_START_HERE_[ARTIST]`. |
| `CLIENT_PROFILE_TEMPLATE` | `MANDATORY_ONBOARDING` | Onboarding start | `01_ADMIN` | Centraal artist/clientprofiel. |
| `CONTACT_SHEET_TEMPLATE` | `MANDATORY_ONBOARDING` | Onboarding start | `01_ADMIN` | Bevat team roster, rollen, primary contact en decision authority; geen aparte Team Roster-template. |
| `EMAIL_INSTRUCTIONS_TEMPLATE` | `MANDATORY_ONBOARDING` | Externe communicatie namens artist/CM relevant | `01_ADMIN` | Communicatie-instructies en escalaties. |
| `DO_NOTS_TEMPLATE` | `MANDATORY_ONBOARDING` | Onboarding start | `01_ADMIN` | Operationele grenzen; geen dubbele approval matrix. |
| `CONTRACT_SUMMARY_TEMPLATE` | `MANDATORY_ONBOARDING` | Getekende overeenkomst aanwezig | `02_CONTRACT` | Samenvatting/reference; signed contract blijft evidence source. |
| `APPROVAL_EVIDENCE_TEMPLATE` | `CONDITIONAL` | Een specifieke approval moet aantoonbaar worden vastgelegd | relevante folder | Geen algemene artist approval matrix; evidence alleen per besluit/actie waar nodig. |
| `AMENDMENT_LOG_TEMPLATE` | `CONDITIONAL` | Contract of scope wordt formeel gewijzigd | `02_CONTRACT` | Alleen bij amendments. |

### C. STRATEGISCHE VOORFASE / DIAGNOSTIEK

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `BRAND_AUDIT_TEMPLATE` | `PHASE_BASED` | Brand Audit opdracht / merkdiagnose | `03_STRATEGY` | Input voor Brandbook. |
| `ARTIST_BRANDBOOK_TEMPLATE` | `PHASE_BASED` | Brand Audit voldoende / rebrand vereist | `03_STRATEGY` | Unieke commerciële en creatieve merkfundering. |
| `BUSINESS_AUDIT_TEMPLATE` | `PHASE_BASED` | Business/revenue/rights diagnose vereist | `03_STRATEGY` | Niet automatisch naast Artist Audit zonder duidelijke behoefte. |
| `ARTIST_AUDIT_TEMPLATE` | `CONDITIONAL` | Integrale 360° artistdiagnose vereist | `03_STRATEGY` | Gebruik als top-level integrale audit; niet verplicht als Brand + Business Audit samen reeds de benodigde diagnose leveren. |

### D. ACTIEF MANAGEMENT

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `ARTIST_ROADMAP_TEMPLATE` | `MANDATORY_ACTIVE_MANAGEMENT` | Start actief management | `03_STRATEGY` | Centrale managementrichting; genereert execution naar ClickUp. |
| `KPI_TEMPLATE` | `MANDATORY_ACTIVE_MANAGEMENT` | Roadmap / actieve managementstart | `03_STRATEGY` | Baseline en targets; actuals herleidbaar naar bron. |
| `JAARPLAN_TEMPLATE` | `MANDATORY_ACTIVE_MANAGEMENT` | Actief management met jaarhorizon | `03_STRATEGY` | Jaarlaag boven roadmap; niet voor kort project zonder jaarhorizon. |
| `MONTHLY_REPORT_TEMPLATE` | `MANDATORY_ACTIVE_MANAGEMENT` | Maandelijkse managementcyclus | `03_STRATEGY` of reportinglocatie conform dossier | Maandrapportage; finance actuals uit Moneybird/benoemde bron. |
| `MEETING_RECAP_TEMPLATE` | `CONDITIONAL` | Besluitvormende/relevante meeting | `01_ADMIN` of relevante workstream | Besluiten + acties; acties naar ClickUp. |

### E. RELEASES

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `RELEASE_STRATEGY_TEMPLATE` | `CONDITIONAL` | Nieuwe release met actieve CM-scope | `04_RELEASES/[RELEASE]` | Alleen per concrete release. |
| `RELEASE_KICKOFF_TEMPLATE` | `CONDITIONAL` | Release strategy approved / uitvoering start | `04_RELEASES/[RELEASE]` | Operationele kickoff; taken naar ClickUp. |
| `VERSION_LOG_TEMPLATE` | `CONDITIONAL` | Deliverable/assets hebben formele versies nodig | relevante release/deliverable folder | Niet standaard voor ieder artistdossier. |
| `REGISTER_TEMPLATE` | `CONDITIONAL` | Er is aantoonbaar behoefte aan een formeel register | relevante folder | Alleen wanneer geen specifieker canonical register bestaat. |

### F. DEALS / RIGHTS / MASTER BOUTIQUE

| Template | Classificatie | Trigger | Uitvoer | Opmerking |
|---|---|---|---|---|
| `DEAL_MEMO_TEMPLATE` | `CONDITIONAL` | Concrete artist deal/opportunity | Deal-case / relevante artist deal context | Niet standaard kopiëren bij onboarding. |
| `DEAL_NEGOTIATION_TEMPLATE` | `CONDITIONAL` | Actieve onderhandeling | Deal-case | Alleen na dealtrigger. |
| `PARTNERSHIP_BRIEF_TEMPLATE` | `CONDITIONAL` | Concrete partnership | Deal/partnership-case | Alleen bij partnership. |
| `MUSIC_RIGHTS_REGISTER` | `CONDITIONAL` | Rights-register nodig voor asset/artist | Rights/Legal SoR | Niet dupliceren als bestaande verified Rights Register al leidend is. |
| `RIGHTS_AUDIT_TEMPLATE` | `CONDITIONAL` | Rights ambiguity / auditopdracht | Deal/rights-case | Alleen bij concrete rights-vraag. |
| `VALUATION_TEMPLATE` | `NEVER_AUTO_COPY` | Asset valuation case | Master Boutique / deal-case | Niet in standaard artistdossier provisionen. |
| `DATA_ROOM_TEMPLATE` | `NEVER_AUTO_COPY` | Qualified transaction/diligence | Master Boutique / deal-case | Alleen dealflow. |
| `BUYER_PIPELINE_TEMPLATE` | `NEVER_AUTO_COPY` | Catalog/master buyer process | Master Boutique | Pipeline hoort niet in standaard artistdossier. |

### G. SYSTEM REFERENCES / START HERE ANDERE LANES

| Template | Classificatie | Reden |
|---|---|---|
| `ACTION_TRACKER_CLICKUP_REFERENCE` | `NEVER_AUTO_COPY` | Dit is een system reference; ClickUp is uitvoering. |
| `DEAL_PIPELINE_CLICKUP_REFERENCE` | `NEVER_AUTO_COPY` | Dit is een ClickUp reference, geen artist deliverable. |
| `START_HIER_04_DEALS_TEMPLATE` | `NEVER_AUTO_COPY` | Alleen Deals-root. |
| `START_HIER_07_LEGAL_TEMPLATE` | `NEVER_AUTO_COPY` | Alleen Legal-root. |

### H. CLOSE-OUT

| Template | Classificatie | Trigger | Drive-uitvoer | Opmerking |
|---|---|---|---|---|
| `CLOSE_OUT_NOTE_TEMPLATE` | `PHASE_BASED` | Scope/project approved en gereed voor close-out | `01_ADMIN` of `09_ARCHIVE` bij afsluiting | Verplicht vóór dossierstatus CLOSED/ARCHIVED of nieuwe betaalde next phase wanneer de scope formeel wordt afgesloten. |

## 6. BEWUST GEEN APARTE TEMPLATES

De volgende objecten worden niet als aparte canonical template aangemaakt:

- `START_HIER_ARTIST_TEMPLATE` → `CLIENT_ONBOARDING_TEMPLATE` is Start Here.
- `CM_FIT_CHECK_TEMPLATE` → geïntegreerd in `INTAKE_TEMPLATE`.
- `TEAM_ROSTER_TEMPLATE` → geïntegreerd in `CONTACT_SHEET_TEMPLATE`.
- `ARTIST_APPROVAL_MATRIX_TEMPLATE` → governance + `DO_NOTS_TEMPLATE` + `APPROVAL_EVIDENCE_TEMPLATE`.
- `DECISION_LOG_TEMPLATE` → `ARTIST_ROADMAP_TEMPLATE` + `MEETING_RECAP_TEMPLATE`; open execution-besluiten in ClickUp.
- `RISK_LOG_TEMPLATE` → risico blijft in het relevante audit/roadmap/deal/legal-object; operationele risk-status in ClickUp.
- `OPEN_INPUTS_TEMPLATE` → ontbrekende inputs zijn ClickUp-taken met owner/deadline/blocker.
- `WEEKLY_ARTIST_UPDATE_TEMPLATE` → automatisch te genereren uit ClickUp execution-status.
- `QUARTERLY_ARTIST_REVIEW_TEMPLATE` → te genereren uit Roadmap, KPI, Monthly Report, contractstatus, team/contactcontext en ClickUp.
- Zware aparte `SCOPE_OF_WORK_TEMPLATE` → scope blijft een formele gate richting proposal, maar wordt niet als dubbel document naast Proposal beheerd tenzij governance later expliciet anders bepaalt.

## 7. ONBOARDING MINIMUM SET

Bij operationele artist-onboarding wordt uitsluitend de volgende minimum-set automatisch geprovisioneerd:

1. `CLIENT_ONBOARDING_TEMPLATE` → Drive-naam `00_START_HERE_[ARTIST]`.
2. `CLIENT_PROFILE_TEMPLATE`.
3. `CONTACT_SHEET_TEMPLATE`.
4. `EMAIL_INSTRUCTIONS_TEMPLATE`.
5. `DO_NOTS_TEMPLATE`.
6. `CONTRACT_SUMMARY_TEMPLATE` indien een getekende overeenkomst de engagement basis vormt.

`INTAKE_TEMPLATE` en proposal worden hergebruikt/verwezen vanuit de pre-engagementfase; geen onnodige duplicatie.

## 8. ACTIVE MANAGEMENT MINIMUM SET

Na onboarding en formele start van actief management:

1. `ARTIST_ROADMAP_TEMPLATE`.
2. `KPI_TEMPLATE`.
3. `JAARPLAN_TEMPLATE` indien managementhorizon minimaal een jaar beslaat.
4. `MONTHLY_REPORT_TEMPLATE`.

Release-, audit-, deal- en legaltemplates worden alleen op hun trigger toegevoegd.

## 9. CLICKUP REGELS

- Elke operationele actie uit een template wordt een ClickUp-task of subtask wanneer uitvoering nodig is.
- ClickUp is leidend voor `status`, `assignee`, `due date`, `priority` en blocker-opvolging.
- Drive-documenten worden niet gebruikt als parallel taskmanagementsysteem.
- Open inputs zijn ClickUp-taken, geen aparte lijst in Drive.
- Weekly Artist Update wordt uit ClickUp gegenereerd; geen handmatige parallelle template.
- Een template mag alleen status terugschrijven wanneer die status documentcontext betreft; execution-status blijft ClickUp.

## 10. PROVISIONING IDS

Elke geprovisioneerde artist krijgt minimaal:

| Sleutel | Doel |
|---|---|
| `ARTIST_ID` | Stabiele unieke artist-key. |
| `DRIVE_ROOT_ID` | Artist rootfolder. |
| `CLICKUP_ARTIST_ID` | Hoofdrecord/project in ClickUp. |
| `TEMPLATE_TYPE` | Canonical template-type per Drive-copy. |
| `DRIVE_FILE_ID` | Geprovisioneerde werkkopie. |
| `CLICKUP_TASK_ID` | Gekoppelde execution-taak wanneer van toepassing. |
| `LAST_SYNC_AT` | Laatste succesvolle synchronisatie. |

Deze mapping hoort in een machine-readable provisioning manifest/config, niet in een extra handmatig artistdocument.

## 11. GO-LIVE GATE

Een artist mag niet naar actieve managementexecution wanneer minimaal één van de volgende punten ontbreekt:

- engagement basis / contractcontext niet bevestigd;
- onboarding Start Here niet gereed;
- Drive- en ClickUp-dossier niet ingericht;
- primary contact / decision authority onbekend zonder expliciete `TBD`/blocker;
- benodigde communicatie-instructies/Do Nots ontbreken;
- roadmap voor actief management niet gestart;
- blocking rights/legal/financial issue zonder owner of next action.

## 12. AUTOMATISERINGSVOLGORDE

```text
ENGAGEMENT READY
  ↓
Generate ARTIST_ID
  ↓
Create/confirm 9-folder Drive structure
  ↓
Provision MANDATORY_ONBOARDING set
  ↓
Create ClickUp artist record + onboarding tasks
  ↓
Write Drive IDs ↔ ClickUp IDs to manifest
  ↓
Complete onboarding gates
  ↓
ACTIVE MANAGEMENT?
  ├─ NO → provision only phase/conditional templates on trigger
  └─ YES → provision ACTIVE MANAGEMENT minimum set
               ↓
         Release / Deal / Audit / Legal triggers as needed
               ↓
         Close-out → CLOSE_OUT_NOTE
```

## 13. QUALITY CONTROL

- Geen duplicate functionaliteit tegenover bestaande canonical templates.
- Geen template wordt automatisch geprovisioneerd zonder classificatie en trigger.
- Geen Master Boutique/Dealflow document standaard in artist onboarding.
- Geen statusadministratie dubbel in Drive en ClickUp.
- `CLIENT_ONBOARDING_TEMPLATE` blijft het artist START HERE-object.
- Drive-uitvoer volgt de geldende artistfolder-standaard.
- Nieuwe template-gaps eerst toetsen op overlap voordat een nieuwe canonical template wordt gemaakt.

## 14. OWNER / APPROVAL

Owner: `CM OPS AGENT`.

Support: `CM FLOW AGENT · CM VAULT AGENT · CM CONTROL AGENT`.

Wijzigingen die nieuwe canonical templates, nieuwe top-level artistfolders, andere systems of record of nieuwe approvalregels introduceren vereisen passende governance-review.

## 15. WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-08-10 | V1.0 | Eerste lean provisioning-standard: 36-template library geclassificeerd; START HERE gelijkgesteld aan Client Onboarding; dubbele Fit Check, Team Roster, Risk/Decision/Open Inputs/Weekly/Quarterly templates expliciet uitgesloten. | CM OPS AGENT |

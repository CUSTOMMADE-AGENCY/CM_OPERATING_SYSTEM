# Phase 3 Business Lanes Audit Plan

**Status:** GOEDGEKEURDE UITVOERINGSBASIS / IN UITVOERING
**Branch:** `codex/phase-3-business-lanes-audit-consolidation`
**Datum:** 2026-07-26
**Basis:** actuele `main` na PR #197, commit `37c606a`

## 1. Doel en grenzen

Fase 3 consolideert uitsluitend de documentatie-lanes Clients, Deals, Finance, Legal, Marketing en Content. Per lane ontstaat precies één `README.md`, precies één actieve `LANE_INDEX.md` en één `LANE_GAP_REGISTER.md`. Er wordt geen nieuwe uitgebreide businessinhoud geschreven en er wordt niets verwijderd.

Uitgesloten van inhoudelijke wijziging zijn `docs/05_OPERATIONS/`, `docs/01_MASTER_BOUTIQUE/`, `docs/02_ARTIST_MANAGEMENT/`, alle templates en `scripts/`. Live client- en dealdata, financiële data, getekende contracten en vertrouwelijke informatie horen niet in Git.

## 2. Beslisregels

De audit gebruikt uitsluitend deze classificaties:

- **BEHOUDEN:** juiste locatie en functie; geen move nodig.
- **VERPLAATSEN:** lane-eigenaarschap is ondubbelzinnig en `git mv` bewaart historie.
- **SAMENVOEGEN:** aantoonbare overlap, maar alleen uitvoeren als verliesloze consolidatie bewezen is.
- **HERNOEMEN:** naam is aantoonbaar strijdig met de canonieke functie.
- **ARCHIVEREN_VOORSTEL:** niet actief, maar alleen een voorstel; in Fase 3 wordt niets gearchiveerd of verwijderd.
- **REVIEW_NODIG:** eigenaarschap, status of inhoud kan niet veilig automatisch worden beslist.

Alleen **VERPLAATSEN** wordt in deze fase uitgevoerd wanneer de titel, inhoud, opslagpaden en lane-afbakening hetzelfde doel aanwijzen. Er zijn geen veilige automatische samenvoegingen, hernoemingen of archiveringen gepland.

## 3. Initiële inventaris en classificatie

De lane-specifieke bronbestanden staan vóór uitvoering op rootniveau van `docs/03_SHARED_SERVICES/`. De Template Library blijft volledig op haar huidige locatie.

### 3.1 Clients

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/CLIENT_CLOSE_OUT.md` | VERPLAATSEN | Naar `docs/03_CLIENTS/`; client close-out. |
| `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md` | VERPLAATSEN | Naar `docs/03_CLIENTS/`; account- en dossierownership. |
| `docs/03_SHARED_SERVICES/CLIENT_ONBOARDING.md` | VERPLAATSEN | Naar `docs/03_CLIENTS/`; onboarding. |
| `docs/03_SHARED_SERVICES/PROPOSAL_WORKFLOW.md` | VERPLAATSEN | Naar `docs/03_CLIENTS/`; Scope en Proposal. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_CLIENT_WORKFLOW.md` | BEHOUDEN | Artist-specifiek en expliciet buiten herschrijfscope. |
| `docs/02_ARTIST_MANAGEMENT/ARTIST_FIT_CHECK.md` | BEHOUDEN | Artist-specifiek; geen generieke clientbron. |
| `docs/02_ARTIST_MANAGEMENT/UPSELL_NEXT_PHASE_FLOW.md` | BEHOUDEN | Artist-specifiek; geen veilige move. |

### 3.2 Deals

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/01_MASTER_BOUTIQUE/DEALFLOW_CATALOG_ASSET.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/BUYER_OUTREACH_WORKFLOW.md` | BEHOUDEN | Buyer process blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/LOI_WORKFLOW.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/DUE_DILIGENCE_CHECKLIST.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/CATALOG_VALUATION_PLAYBOOK.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/APA_NEGOTIATION_PLAYBOOK.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/CLOSING_WORKFLOW.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/SUCCESS_FEE_WORKFLOW.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/BUYER_DATABASE.md` | BEHOUDEN | Procesdocument; geen live buyerdata toevoegen. |
| `docs/01_MASTER_BOUTIQUE/BUYER_QUALIFICATION_MODEL.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/01_MASTER_BOUTIQUE/DATA_ROOM_ACCESS_MODEL.md` | BEHOUDEN | Master Boutique-bron blijft ongewijzigd. |
| `docs/03_SHARED_SERVICES/EMAIL_TEMPLATES.md` | REVIEW_NODIG | Gemengde registerinhoud; templates en meerdere lanes maken een move onveilig. |

### 3.3 Finance

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/FINANCE_INTAKE_SOP.md` | VERPLAATSEN | Naar `docs/06_FINANCE/`; finance intake en Moneybird governance. |
| `docs/03_SHARED_SERVICES/FINANCE_RECONCILIATION_FLOW.md` | VERPLAATSEN | Naar `docs/06_FINANCE/`; reconciliation en open items. |
| `docs/03_SHARED_SERVICES/YEAR_END_FINANCE_FLOW.md` | VERPLAATSEN | Naar `docs/06_FINANCE/`; reporting en jaarafsluiting. |

### 3.4 Legal

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/CONTRACT_LIFECYCLE_FLOW.md` | VERPLAATSEN | Naar `docs/07_LEGAL/`; contract lifecycle. |
| `docs/03_SHARED_SERVICES/LEGAL_REVIEW_FLOW.md` | VERPLAATSEN | Naar `docs/07_LEGAL/`; review, evidence en escalation. |
| `docs/03_SHARED_SERVICES/LEGAL_REVIEW_SOP.md` | VERPLAATSEN | Naar `docs/07_LEGAL/`; legal review en approvals. |

### 3.5 Marketing

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/MARKETING_PLANNING_FLOW.md` | VERPLAATSEN | Naar `docs/08_MARKETING/`; positionering, campagne en activatie. |
| `docs/03_SHARED_SERVICES/MARKETING_SOP.md` | VERPLAATSEN | Naar `docs/08_MARKETING/`; campagne- en marketinggovernance. |
| `docs/03_SHARED_SERVICES/CAMPAIGN_DELIVERY_FLOW.md` | VERPLAATSEN | Naar Content: hoofdzaak is productie, verspreiding en oplevering van assets. |

### 3.6 Content

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/CONTENT_PUBLICATION_FLOW.md` | VERPLAATSEN | Naar `docs/09_CONTENT/`; publicatie en distributie. |
| `docs/03_SHARED_SERVICES/CONTENT_PUBLICATION_SOP.md` | VERPLAATSEN | Naar `docs/09_CONTENT/`; formats, assets en channel management. |
| `docs/03_SHARED_SERVICES/CAMPAIGN_DELIVERY_FLOW.md` | VERPLAATSEN | Naar `docs/09_CONTENT/`; productie en externe verspreiding, met Marketing-briefing als input. |

### 3.7 Shared Services-restanten

| Bestaand bestand | Classificatie | Besluit |
|---|---|---|
| `docs/03_SHARED_SERVICES/README.md` | BEHOUDEN | Bijwerken als navigatie voor de resterende template- en reviewfunctie. |
| `docs/03_SHARED_SERVICES/TEMPLATE_REGISTER.md` | BEHOUDEN | Legacy redirect; templates blijven bevroren. |
| `docs/03_SHARED_SERVICES/TEMPLATES/**` | BEHOUDEN | Volledig ongewijzigd. |
| `docs/03_SHARED_SERVICES/EMAIL_TEMPLATES.md` | REVIEW_NODIG | Geen veilige laneplaatsing en geen templatewijziging in Fase 3. |

## 4. Uitvoeringsvolgorde

1. Clients: veilige moves, README, index en gap register.
2. Deals: lane-navigatie en gaps; bestaande Master Boutique-bronnen alleen refereren.
3. Finance: veilige moves, README, index en gap register.
4. Legal: veilige moves, README, index en gap register.
5. Marketing: veilige moves, strikte grens met Content vastleggen.
6. Content: veilige moves, strikte grens met Marketing vastleggen.
7. Controleren dat iedere lane exact één README en één actieve index heeft.
8. Repositorybrede actieve padreferenties naar verplaatste bestanden corrigeren; historie niet herschrijven.
9. Governance-index en consolidatierapport bijwerken, zonder Fase 1- of Fase 2-statuscorrecties.
10. Alle verplichte validaties uitvoeren en resultaten vastleggen.

## 5. Gapbeleid

Ontbrekende onderwerpen worden alleen als compacte gap geregistreerd met scope, impact en reviewbehoefte. Een gap register is geen plek om nieuwe Playbooks, SOPs, contractinhoud, financiële overzichten of live dossiers te schrijven. Overlap met Master Boutique en Artist Management wordt door verwijzing zichtbaar gemaakt, niet gekopieerd.

## 6. Pad- en rollbackplan

Moves gebeuren met `git mv`. Actieve verwijzingen naar een exact verplaatst repositorypad worden naar het nieuwe pad aangepast. Google Drive-paden zoals `OS_CUSTOMMADE/06_FINANCE` veranderen niet. Historische governance onder `docs/00_GOVERNANCE/HISTORY/` blijft auditbewijs.

Rollback gebeurt per kleine lanecommit via `git revert <commit>`. Daarmee keren zowel het bestand als de bijbehorende navigatie- en padwijzigingen gecontroleerd terug.

## 7. Validatieplan

- `git diff --check` en `git status`;
- relatieve Markdown-linkscan buiten dependencies;
- tekstpadscan op alle exact verplaatste bronpaden;
- SHA-256 duplicatecheck voor actieve lane-Markdownbestanden;
- hashvergelijking voor templates en de vier uitgesloten inhoudsgebieden;
- diffcontrole op scripts en op deleties;
- telling per lane: exact één `README.md`, exact één `LANE_INDEX.md`, exact één `LANE_GAP_REGISTER.md`;
- gevoelige-dataheuristiek plus handmatige diffreview.

Een technisch geslaagde scan heft inhoudelijke owner review van open gaps of **REVIEW_NODIG**-items niet op.

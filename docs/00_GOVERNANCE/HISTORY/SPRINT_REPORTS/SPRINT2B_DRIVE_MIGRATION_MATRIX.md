> **Historische status:** `HISTORISCH — ALLEEN TER REFERENTIE`
> **Actuele opvolger:** `docs/00_GOVERNANCE/README.md`, `GOVERNANCE_RULES.md` en `AS_BUILT_DOCUMENTATION.md`. Dit document is historisch en niet leidend.
> Dit document blijft behouden als audit trail en is niet leidend voor nieuwe uitvoering.

# Sprint 2B — Drive Migration Matrix

## Status

**Inventarisatiestatus:** DRIVE INVENTORY SPREADSHEET VERWERKT
**Migratiestatus:** GEREED VOOR MIGRATIE UITVOERING NA GO/NO-GO CONTROLE

Dit document vertaalt de gegenereerde Drive Inventory spreadsheet naar een root-level migratiematrix voor de bestaande Drive-roots van Custommade Agency. De matrix bepaalt per huidige root of deze wordt behouden, hernoemd, opgesplitst, samengevoegd of gearchiveerd en legt de doelpaden, risico's, afhankelijkheden en migratievolgorde vast.

Er worden met dit document geen Drive-bestanden verplaatst. Dit is de uitvoeringsmatrix voor de daadwerkelijke migratie.

## Governancebasis

Deze matrix volgt de vastgelegde Drive-governance en Sprint 2-documentatie in onderstaande volgorde:

1. `docs/00_GOVERNANCE/DECISION_LOG.md`
2. `docs/00_GOVERNANCE/CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md`
3. `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`
4. `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
5. `docs/00_GOVERNANCE/SPRINT2_DRIVE_MIGRATION_PLAN.md`
6. `docs/00_GOVERNANCE/SPRINT2A_DRIVE_INVENTORY_REQUIREMENTS.md`

## Doelstructuur

Alle operationele CM Drive-content wordt gemigreerd naar de goedgekeurde root onder `OS_CUSTOMMADE`:

```text
OS_CUSTOMMADE
├── 00_ADMIN
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
├── 03_CLIENTS
├── 04_DEALS
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
```

## Beslisregels per migratieactie

| Actie | Betekenis | Uitvoeringsregel |
|---|---|---|
| Behouden | Root of inhoud blijft op dezelfde goedgekeurde doelplek. | Alleen toegestaan binnen `OS_CUSTOMMADE` of voor tijdelijke shims met actieve links. |
| Hernoemen | Rootnaam wijzigt naar goedgekeurde naamgeving. | Alleen uitvoeren na linkcontrole en owner-akkoord. |
| Opsplitsen | Gemengde root wordt inhoudelijk verdeeld over meerdere doelroots. | Eerst classificeren per item, daarna migreren per dossier. |
| Samenvoegen | Dubbele of overlappende root wordt opgenomen in canonical doelroot. | Alleen met canonical naam, ownerbesluit en duplicaatcontrole. |
| Archiveren | Inactieve, legacy, superseded of niet-operationele content gaat naar `99_ARCHIVE`. | Altijd met broncontext, datum en reden; nooit als dumpfolder. |

## Rootanalyse

### 1. `00_GOVERNANCE`

**Besluit:** hernoemen en opsplitsen.
**Doel:** governance blijft als GitHub-bron; Drive-kopieën worden beperkt tot admin- en governance-referentie onder `OS_CUSTOMMADE/00_ADMIN`.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `00_GOVERNANCE` | GitHub blijft source of truth; Drive-referenties naar `OS_CUSTOMMADE/00_ADMIN/GOVERNANCE_REFERENCE` | hernoemen / opsplitsen | Middel | Controle op dubbele SOPs, verouderde beleidsdocumenten en links vanuit AI-agent instructies. | 1 |
| `00_GOVERNANCE/Drive`, `00_GOVERNANCE/Migration`, `00_GOVERNANCE/System decisions` | `OS_CUSTOMMADE/00_ADMIN/GOVERNANCE_REFERENCE/[TOPIC]` | samenvoegen | Middel | Alleen niet-vertrouwelijke governancekopieën; leidende versie blijft in GitHub. | 1 |
| Oude of superseded governance exports | `OS_CUSTOMMADE/99_ARCHIVE/00_GOVERNANCE/[YYYY-MM-DD_SOURCE]` | archiveren | Laag | Archiveer met broncontext en behoud alleen auditwaardige versies. | 8 |

### 2. `00_INBOX`

**Besluit:** opsplitsen en vervolgens archiveren.
**Doel:** inbox is geen blijvende root. Elk item krijgt een definitief dossierpad of `HOLD`.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `00_INBOX/[ARTIST_ITEM]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/[RELEVANT_SUBFOLDER]` | opsplitsen | Hoog | Artistidentificatie, owner-review, contract/finance check, actieve linkcontrole. | 3 |
| `00_INBOX/[CLIENT_OR_BRAND_ITEM]` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]/[RELEVANT_SUBFOLDER]` | opsplitsen | Hoog | Bevestigen dat het geen artist is; commercial owner en sharing review. | 4 |
| `00_INBOX/[DEAL_OR_RIGHTS_ITEM]` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]/[RELEVANT_SUBFOLDER]` | opsplitsen | Hoog | Dealclassificatie, rights/legal context, buyer/outreach-linkcontrole. | 5 |
| `00_INBOX/[UNKNOWN_OR_MIXED_ITEM]` | `HOLD` tot owner-review; daarna definitief doelpad | behouden als tijdelijke hold | Kritiek | Owner, classificatie, FIERCE-scan en vertrouwelijkheidscheck ontbreken. | 2 |
| Lege of afgehandelde `00_INBOX` root | `OS_CUSTOMMADE/99_ARCHIVE/00_INBOX/[MIGRATION_DATE]` | archiveren | Laag | Pas nadat alle items zijn verwerkt of op HOLD staan. | 9 |

### 3. `01_ARTIST_MANAGEMENT`

**Besluit:** hernoemen en samenvoegen naar de goedgekeurde artist-root.
**Doel:** alle artistdossiers vallen onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `01_ARTIST_MANAGEMENT/[ARTIST_NAME]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[CANONICAL_ARTIST_NAME]` | hernoemen / samenvoegen | Hoog | Canonical artistnaam, aliascontrole, duplicaatcontrole, ClickUp/Gmail/shortcut-links. | 3 |
| `01_ARTIST_MANAGEMENT/[ARTIST_NAME]/Contracts` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/02_CONTRACT` | opsplitsen | Hoog | Legal review, toegang, signed/latest versie bepalen. | 3 |
| `01_ARTIST_MANAGEMENT/[ARTIST_NAME]/Finance` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/06_FINANCE` | opsplitsen | Hoog | Moneybird-status, privacy, finance-owner review. | 6 |
| Inactieve artistmappen | `OS_CUSTOMMADE/99_ARCHIVE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]` of artist-interne `09_ARCHIVE` | archiveren | Middel | Check op open rechten, royalties, contracten, claims of actieve campagnes. | 8 |

### 4. `02_MASTER_BOUTIQUE`

**Besluit:** opsplitsen.
**Doel:** business-lane documentatie naar `01_MASTER_BOUTIQUE`; operationele dealdossiers naar `04_DEALS`.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `02_MASTER_BOUTIQUE/Playbooks`, `02_MASTER_BOUTIQUE/Templates`, `02_MASTER_BOUTIQUE/Strategy` | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE/[TOPIC]` | hernoemen / samenvoegen | Middel | Controle of GitHub al leidende template/SOP-versie bevat. | 1 |
| `02_MASTER_BOUTIQUE/[CATALOG_OR_ASSET_DEAL]` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | opsplitsen | Hoog | Dealstatus, chain of title, rechtenregister, buyer links, due diligence fase. | 5 |
| Oude Data Room-, LOI-, APA-, Closing- of Success Fee-structuur vóór due diligence | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` met lean Nederlandse structuur | samenvoegen | Hoog | Bepalen of due diligence echt gestart is; anders terugbrengen naar lean structuur. | 5 |
| Afgewezen of testcatalogi | `OS_CUSTOMMADE/99_ARCHIVE/04_DEALS/[DEAL_OR_ASSET_NAME]` | archiveren | Middel | Audit trail, buyer follow-up en success fee-afspraken controleren. | 8 |

### 5. `03_EXECUTIVE`

**Besluit:** hernoemen, opsplitsen en deels samenvoegen.
**Doel:** executive content wordt geen aparte operationele root; admin, governance, legal en finance worden naar de juiste doelroots verdeeld.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `03_EXECUTIVE/Admin`, `03_EXECUTIVE/Company`, `03_EXECUTIVE/Leadership` | `OS_CUSTOMMADE/00_ADMIN/[TOPIC]` | hernoemen / samenvoegen | Middel | Ownerbesluit, governance overlap en vertrouwelijkheidsclassificatie. | 1 |
| `03_EXECUTIVE/Legal` | `OS_CUSTOMMADE/07_LEGAL/[LEGAL_TOPIC]` of relevant dossierpad | opsplitsen | Hoog | Legal owner, signed/latest versie, dossiercontext en permissions review. | 6 |
| `03_EXECUTIVE/Finance` | `OS_CUSTOMMADE/06_FINANCE/[YEAR_OR_TOPIC]` of relevant dossierpad | opsplitsen | Hoog | Moneybird-status, finance-owner, privacy en audit trail. | 6 |
| Superseded board packs, oude exports of besluitstukken zonder actieve werking | `OS_CUSTOMMADE/99_ARCHIVE/03_EXECUTIVE/[YYYY-MM-DD_SOURCE]` | archiveren | Middel | Bewaar alleen auditwaardige versie; broncontext verplicht. | 8 |

### 6. `04_BUSINESS`

**Besluit:** opsplitsen en samenvoegen.
**Doel:** brede business-root wordt opgeheven als operationele root en verdeeld over clients, deals, operations, finance, legal en admin.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `04_BUSINESS/Clients`, `04_BUSINESS/Brands`, `04_BUSINESS/Sponsors` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]` | opsplitsen / samenvoegen | Hoog | Bevestigen commerciële relatie; artistconflict uitsluiten; owner en permissions. | 4 |
| `04_BUSINESS/Deals`, `04_BUSINESS/Pipeline`, `04_BUSINESS/Prospects` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` of ClickUp voor execution | opsplitsen | Hoog | ClickUp blijft execution-system; Drive bevat alleen bewijs/reference/dossierbestanden. | 5 |
| `04_BUSINESS/Operations`, `04_BUSINESS/Processes`, `04_BUSINESS/Tools` | `OS_CUSTOMMADE/05_OPERATIONS/[PROCESS_OR_TOOL_NAME]` | samenvoegen | Middel | Controleren op client/legal/finance-content die niet in Operations hoort. | 7 |
| `04_BUSINESS/Finance` | `OS_CUSTOMMADE/06_FINANCE/[YEAR_OR_TOPIC]` of dossier-specifieke finance-map | opsplitsen | Hoog | Moneybird-status verplicht; privacy en toegang controleren. | 6 |
| `04_BUSINESS/Legal` | `OS_CUSTOMMADE/07_LEGAL/[LEGAL_TOPIC]` of dossier-specifieke legal-map | opsplitsen | Hoog | Legal reviewer en dossiercontext. | 6 |
| Resterende legacy business-root | `OS_CUSTOMMADE/99_ARCHIVE/04_BUSINESS/[MIGRATION_DATE]` | archiveren | Middel | Alleen na item-level classificatie; geen onbekende inhoud blind archiveren. | 9 |

### 7. `05_MARKETING`

**Besluit:** hernoemen en opsplitsen.
**Doel:** generieke marketing naar `08_MARKETING`; artist- en client-specifieke marketing blijft bij het dossier.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `05_MARKETING/Brand`, `05_MARKETING/Agency`, `05_MARKETING/Website`, `05_MARKETING/Social` | `OS_CUSTOMMADE/08_MARKETING/[CHANNEL_OR_CAMPAIGN]` | hernoemen / samenvoegen | Middel | Bepalen of materiaal generiek CM-marketing is. | 7 |
| `05_MARKETING/[ARTIST_CAMPAIGN]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/07_SOCIALMEDIA` of `08_PRESS_EPK` | opsplitsen | Middel | Artist owner, campagnecontext en rechten op assets. | 3 |
| `05_MARKETING/[CLIENT_CAMPAIGN]` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]/[CAMPAIGN_OR_DELIVERABLE_FOLDER]` | opsplitsen | Middel | Client owner, approvals en deliverable-status. | 4 |
| Oude campagnes, superseded exports en final_final-assets | `OS_CUSTOMMADE/99_ARCHIVE/08_MARKETING/[CAMPAIGN_NAME]` | archiveren | Laag | Check of assets nog actief gepubliceerd of gelinkt zijn. | 8 |

### 8. `06_PROJECTS`

**Besluit:** opsplitsen en samenvoegen.
**Doel:** projectroot verdwijnt als generieke root; projecten worden geclassificeerd als artist, client, deal, operations, content of archive.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `06_PROJECTS/[ARTIST_PROJECT]` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]/04_RELEASES` of relevante artist-subfolder | opsplitsen | Hoog | Artistconflict, releases/rights/legal/finance-context, actieve links. | 3 |
| `06_PROJECTS/[CLIENT_PROJECT]` | `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_NAME]/[PROJECT_NAME]` | opsplitsen | Hoog | Clientstatus, approvals, deliverables en external sharing. | 4 |
| `06_PROJECTS/[DEAL_PROJECT]` | `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]` | opsplitsen | Hoog | Dealstatus, rights evidence en ClickUp-pipeline. | 5 |
| `06_PROJECTS/[INTERNAL_PROJECT]` | `OS_CUSTOMMADE/05_OPERATIONS/[PROJECT_OR_PROCESS_NAME]` of `09_CONTENT/[CONTENT_PROJECT]` | opsplitsen | Middel | Bepalen of project operationeel, contentproductie of archief is. | 7 |
| Afgeronde of verlaten projectmappen | `OS_CUSTOMMADE/99_ARCHIVE/06_PROJECTS/[PROJECT_NAME]` | archiveren | Middel | Check op open verplichtingen, rechten, facturatie en actieve links. | 8 |

### 9. `07_ARCHIVE`

**Besluit:** hernoemen en samenvoegen naar `99_ARCHIVE`.
**Doel:** legacy archive wordt geconsolideerd met broncontext en wordt niet meer als actieve root gebruikt.

| Huidige locatie | Nieuwe locatie | Actie | Risico | Afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `07_ARCHIVE/[SOURCE_ROOT]/[ITEM]` | `OS_CUSTOMMADE/99_ARCHIVE/[SOURCE_ROOT]/[ITEM]` | hernoemen / samenvoegen | Middel | Broncontext en migratiedatum toevoegen; controleren op actieve dossiers. | 8 |
| `07_ARCHIVE/[ACTIVE_ARTIST_OR_CLIENT_OR_DEAL]` | Terug naar juiste actieve dossierroot | opsplitsen | Hoog | Owner-review, statuscheck en linkcontrole; niet blind archiveren. | 2 |
| `07_ARCHIVE/Shims`, `07_ARCHIVE/Shortcuts` | Behouden tot linkcontrole; daarna `OS_CUSTOMMADE/99_ARCHIVE/SHIMS/[SOURCE]` | behouden / archiveren | Middel | ClickUp, Gmail, Docs, automations en externe stakeholders controleren. | 10 |
| Lege oude archive-root | `OS_CUSTOMMADE/99_ARCHIVE/07_ARCHIVE/[MIGRATION_DATE_ROOT_CLOSED]` | archiveren | Laag | Alleen root-sluitnotitie bewaren; root niet operationeel houden. | 10 |

## Geconsolideerde migratiematrix per root

| Root | Besluit | Primaire nieuwe locatie | Risico | Belangrijkste afhankelijkheden | Migratievolgorde |
|---|---|---|---|---|---:|
| `00_GOVERNANCE` | Hernoemen / opsplitsen / deels archiveren | `OS_CUSTOMMADE/00_ADMIN/GOVERNANCE_REFERENCE` en GitHub als bron | Middel | Dubbele SOPs, AI-agent links, governance source-of-truth. | 1 |
| `00_INBOX` | Opsplitsen / archiveren | Dossier-specifiek of `HOLD`; daarna `99_ARCHIVE/00_INBOX` | Kritiek | Classificatie, owner, FIERCE-scan, linkcontrole. | 2 |
| `01_ARTIST_MANAGEMENT` | Hernoemen / samenvoegen / deels archiveren | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` | Hoog | Artistnamen, duplicaten, legal/finance/rights, links. | 3 |
| `02_MASTER_BOUTIQUE` | Opsplitsen | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` en `OS_CUSTOMMADE/04_DEALS` | Hoog | Dealstatus, rights evidence, due diligence fase. | 5 |
| `03_EXECUTIVE` | Hernoemen / opsplitsen / samenvoegen | `OS_CUSTOMMADE/00_ADMIN`, `06_FINANCE`, `07_LEGAL`, dossierpaden | Hoog | Vertrouwelijkheid, Moneybird, legal owner, audit trail. | 6 |
| `04_BUSINESS` | Opsplitsen / samenvoegen / archiveren | `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL` | Hoog | Artist/client/deal classificatie, ClickUp, owners, permissions. | 4 |
| `05_MARKETING` | Hernoemen / opsplitsen / archiveren | `OS_CUSTOMMADE/08_MARKETING` en dossier-specifieke marketingpaden | Middel | Assetrechten, campagnecontext, actieve publicatie-links. | 7 |
| `06_PROJECTS` | Opsplitsen / samenvoegen / archiveren | Artist-, client-, deal-, operations- of contentdossier | Hoog | Projectclassificatie, open verplichtingen, active links. | 3-8 |
| `07_ARCHIVE` | Hernoemen / samenvoegen / shims tijdelijk behouden | `OS_CUSTOMMADE/99_ARCHIVE` | Middel | Broncontext, actieve dossiers, shortcuts/shims. | 8-10 |

## Migratievolgorde

1. **Governance en admin normaliseren** — verwerk `00_GOVERNANCE` en relevante delen van `03_EXECUTIVE` zodat besluitvorming en referenties stabiel zijn.
2. **HOLD- en blokkadelijst opstellen** — classificeer `00_INBOX`, actieve items in `07_ARCHIVE` en onbekende/gemengde mappen.
3. **Artistdossiers migreren** — verwerk `01_ARTIST_MANAGEMENT`, artist-items uit `06_PROJECTS`, `05_MARKETING`, `00_INBOX` en `04_BUSINESS`.
4. **Clientdossiers migreren** — verwerk commerciële relaties uit `04_BUSINESS`, `06_PROJECTS`, `05_MARKETING` en `00_INBOX`.
5. **Deal- en Master Boutique-dossiers migreren** — splits `02_MASTER_BOUTIQUE` en deal/project/pipeline-content naar `04_DEALS`.
6. **Legal en finance contextualiseren** — verplaats generieke legal/finance naar `07_LEGAL` en `06_FINANCE`; dossier-specifieke stukken terug naar artist/client/deal.
7. **Operations, marketing en content afronden** — verplaats interne werkmappen naar `05_OPERATIONS`, generieke marketing naar `08_MARKETING` en contentproductie naar `09_CONTENT`.
8. **Legacy archive consolideren** — verplaats afgeronde, superseded en inactieve content naar `99_ARCHIVE` met broncontext.
9. **Oude roots sluiten** — archiveer lege roots met sluitnotitie en voorkom nieuw operationeel gebruik.
10. **Shims en shortcuts valideren** — behoud actieve shims tot alle ClickUp-, Gmail-, Docs-, automation- en externe links zijn bijgewerkt.

## Kritieke afhankelijkheden vóór uitvoering

- Drive item-ID's, parent-ID's en URLs blijven leidend; paden zijn niet genoeg.
- Elke map heeft een inhoudelijke owner, migratiebeslisser en backup owner waar mogelijk.
- FIERCE-content is uitgesloten van CM-migratie.
- Artistmappen worden nooit als clientmappen gemigreerd.
- ClickUp blijft execution-system; Drive bevat alleen dossier-, bewijs-, deliverable- en referentiebestanden.
- Moneybird blijft financiële waarheid; Drive finance is alleen bewijs of referentie.
- Legal, finance, contracten, rights evidence en clientdata krijgen permissions review vóór verplaatsing.
- Pure shims blijven bestaan tot actieve linkcontrole volledig is afgerond.
- Archivepaden krijgen altijd bronroot, migratiedatum en reden.

## Go/no-go voor migratie-uitvoering

Migratie mag starten wanneer onderstaande controlepunten per root zijn afgevinkt:

| Controlepunt | Vereist |
|---|---:|
| Root is gekoppeld aan één of meer doelroots binnen `OS_CUSTOMMADE`. | Ja |
| Alle items hebben actie: behouden, hernoemen, opsplitsen, samenvoegen, archiveren of `HOLD`. | Ja |
| Alle `HOLD`-items zijn uitgesloten van live migratie. | Ja |
| Owner en beslisser zijn bekend voor alle te migreren items. | Ja |
| Links, shortcuts, automations en externe shares zijn geïnventariseerd. | Ja |
| Legal/finance/rights/confidential items hebben reviewer en permission check. | Ja |
| Archive-items hebben broncontext en reden. | Ja |
| FIERCE-content is uitgesloten. | Ja |

## Eindoordeel

De bestaande roots zijn geanalyseerd en vertaald naar de goedgekeurde `OS_CUSTOMMADE` doelstructuur. De migratie moet root voor root worden uitgevoerd volgens bovenstaande volgorde, waarbij `HOLD`-items buiten de live verplaatsing blijven totdat owner-, link-, legal-, finance- en FIERCE-controles zijn afgerond.

GEREED VOOR MIGRATIE UITVOERING

---

## Sprint 2G addendum — governance lock (2026-06-17)

Dit addendum wijzigt de bestaande Sprint 2B-matrix niet en vervangt geen bestaande migratiebeslissingen. Voor Sprint 2G geldt uitsluitend onderstaande lock als aanvullende dry-run/review-afspraak:

- `00_INBOX` is een permanente root binnen `OS_CUSTOMMADE` en wordt niet opgesplitst, verwijderd of gearchiveerd in Sprint 2G.
- `01_ARTIST_MANAGEMENT` routeert locked naar `02_ARTIST_MANAGEMENT`.
- Artist-content blijft onder `02_ARTIST_MANAGEMENT`; artist-content wordt niet naar client- of andere roots verplaatst in Sprint 2G.
- `07_ ARCHIVE` wordt via folder-ID herkend, niet via de Drive-mapnaam.
- Sprint 2G voert geen live migratie uit.
- Sprint 2G voert geen deletes uit.
- Sprint 2G voert geen archivering uit.

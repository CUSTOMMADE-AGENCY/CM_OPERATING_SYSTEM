# **MAP SPECIFICATIONS**

## **DOEL**

Deze directory bevat de operationele Map Specifications voor alle Drive-hoofdmappen van CM. Elke Map Specification documenteert één Drive-map als operationele eenheid: welke documenten er in horen, wie eigenaar is, welke templates en workflows van toepassing zijn en hoe de map wordt beheerd.

Map Specifications zijn instructies voor agents, teamleden en automatiseringen — geen beschrijvingen van hoe Drive werkt.

---

## **SCOPE**

Deze directory dekt alle goedgekeurde hoofdmappen onder `OS_CUSTOMMADE`:

| Map Specification | Drive-map |
|---|---|
| `00_ADMIN.md` | `OS_CUSTOMMADE/00_ADMIN` |
| `01_MASTER_BOUTIQUE.md` | `OS_CUSTOMMADE/01_MASTER_BOUTIQUE` |
| `02_ARTIST_MANAGEMENT.md` | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` |
| `03_CLIENTS.md` | `OS_CUSTOMMADE/03_CLIENTS` |
| `04_DEALS.md` | `OS_CUSTOMMADE/04_DEALS` |
| `05_OPERATIONS.md` | `OS_CUSTOMMADE/05_OPERATIONS` |
| `06_FINANCE.md` | `OS_CUSTOMMADE/06_FINANCE` |
| `07_LEGAL.md` | `OS_CUSTOMMADE/07_LEGAL` |
| `08_MARKETING.md` | `OS_CUSTOMMADE/08_MARKETING` |
| `09_CONTENT.md` | `OS_CUSTOMMADE/09_CONTENT` |
| `99_ARCHIVE.md` | `OS_CUSTOMMADE/99_ARCHIVE` |

---

## **STANDAARD**

Alle bestanden in deze directory volgen `docs/00_GOVERNANCE/STANDARDS/MAP_SPECIFICATION_STANDARD.md`. Die standaard schrijft 22 verplichte hoofdstukken voor per Map Specification.

---

## **GOVERNANCE**

| Onderdeel | Waarde |
|---|---|
| Eigenaar directory | CM CONTROL AGENT |
| Beheer | CM VAULT AGENT |
| Reviewritme | Kwartaal of bij structuurwijziging |
| Primaire bron | `docs/04_SYSTEMS/DRIVE_MAPPING.md` |
| Gap Report | `docs/08_MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md` |

---

## **RELATIE MET ANDERE GOVERNANCE**

- `docs/04_SYSTEMS/DRIVE_MAPPING.md` — primaire bron voor submapstructuren en eigenaarschap
- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md` — rootstructuur en basisregels
- `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md` — agenteigenaarschap
- `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md` — approvalniveaus
- `docs/03_SHARED_SERVICES/TEMPLATES/TEMPLATE_REGISTER.md` — templatekoppelingen

Bij conflict tussen een Map Specification en de bovenstaande bronnen: de bronnen zijn leidend.

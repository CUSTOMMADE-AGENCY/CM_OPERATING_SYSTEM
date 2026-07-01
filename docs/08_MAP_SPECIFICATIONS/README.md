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
# Map Specifications

## Wat is een Map Specification?

Een Map Specification beschrijft exact wat de functie, inhoud, regels, templates, workflows, SOP's, Playbooks en AI-verantwoordelijkheden van één specifieke Drive-map zijn.

Map Specifications zijn de operationele waarheid voor AI-agents wanneer zij documenten classificeren, opslaan, controleren, archiveren of escaleren binnen Google Drive.

## Waarom bestaan Map Specifications?

Map Specifications bestaan om per map ondubbelzinnig vast te leggen:

- welke documenttypes verplicht of toegestaan zijn;
- welke documenttypes verboden zijn;
- welke templates, workflows, SOP's en Playbooks leidend zijn;
- welke agent eigenaar is;
- welk approval level geldt;
- welke metadata en naamconventies verplicht zijn;
- wanneer automatiseringen mogen starten;
- hoe AI-agents moeten handelen bij twijfel.

Hierdoor wordt voorkomen dat Folder Standards inhoudelijke regels gaan dupliceren en wordt voorkomen dat AI-agents op basis van interpretatie documenten verkeerd plaatsen.

## Governance-relatie

CM OS gebruikt de volgende governance-ladder:

```text
Drive Structure
↓
Folder Standards
↓
Map Specifications
↓
Templates
↓
Workflow
↓
SOP
↓
Playbook
↓
Agent Passport
```

## Betekenis per laag

- **Drive Structure** beschrijft alleen de boomstructuur van de Drive.
- **Folder Standards** beschrijven alleen welke mappen binnen een dossier verplicht zijn.
- **Map Specifications** beschrijven uitsluitend de inhoud en regels van één specifieke map.
- **Templates** beschrijven het format van specifieke documenten.
- **Workflow** beschrijft de processtappen tussen systemen, agents en humans.
- **SOP** beschrijft de vaste uitvoeringswijze voor terugkerend werk.
- **Playbook** beschrijft scenario's, beslislogica en uitzonderingen.
- **Agent Passport** beschrijft de rol, grenzen en verantwoordelijkheden van een AI-agent.

## Hoofdregel

Voor de inhoud van iedere map zijn de Map Specifications leidend.

Bij conflict tussen een Folder Standard en een Map Specification geldt:

1. Folder Standard bepaalt of de map bestaat en waar deze staat.
2. Map Specification bepaalt wat in die map thuishoort.
3. Bij inhoudelijke twijfel escaleert de Owner Agent naar het geldende approval level.

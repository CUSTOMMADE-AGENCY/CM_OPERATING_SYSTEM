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

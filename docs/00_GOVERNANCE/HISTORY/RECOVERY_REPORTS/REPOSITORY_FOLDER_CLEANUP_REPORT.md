# Repository Folder Cleanup Report

## Doel en norm

Deze controle is uitgevoerd op 2026-07-26 over alle door de opdracht aangewezen repositorydelen. De beoordeling volgde, in deze volgorde, `DRIVE_STRUCTURE.md`, de root-`README.md`, `MAP_SPECIFICATIONS/`, `AS_BUILT_DOCUMENTATION.md` en overige actieve Governance-documentatie. Bestanden onder `docs/00_GOVERNANCE/HISTORY/` zijn uitsluitend als historische audittrail beoordeeld en niet als actuele norm gebruikt.

## Gecontroleerde scope

De volledige tracked inventaris van repository-root, `.github/`, `scripts/` en alle bestaande `docs/`-domeinen is gecontroleerd. De in de goedgekeurde docs-boom genoemde lanes `03_CLIENTS`, `04_DEALS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING` en `09_CONTENT` bevatten op dit moment geen tracked documentatie. Er zijn geen lege placeholdermappen toegevoegd: Git bewaart lege directories niet en er was geen inhoud met een aantoonbare bestemming in die lanes.

## Aangetroffen fouten en correcties

| Bevinding | Bewijs/impact | Correctie |
|---|---|---|
| De as-built vermeldde Fase 1 als actuele recoverystatus en stelde dat Fase 2 nog op review wachtte. | PR #197 is al in de gecontroleerde `main`-historie gemerged. | Status bijgewerkt naar Fase 2 gemerged; de bestaande uitzonderingen voor externe-platformdocumentatie, lane-specifieke Shared Services en bevroren templates expliciet vastgelegd. |
| `docs/05_OPERATIONS/README.md` en `OPERATIONS_INDEX.md` konden beide als primaire index worden gelezen. | Onduidelijke navigatie, zonder inhoudelijk duplicaat. | `README.md` expliciet als primaire scope-ingang en `OPERATIONS_INDEX.md` als aanvullende navigatie gemarkeerd. |
| `docs/05_OPERATIONS/PLAYBOOKS/README.md` bevat een bestandsregister naast `PLAYBOOK_INDEX.md`. | Potentieel concurrerende indexfunctie. | Vastgelegd dat alleen `PLAYBOOK_INDEX.md` de actieve Playbook Index en het canonieke agentplaybookregister is; de README blijft categoriescope. |

## Map Specifications

De vereiste structuur was op de actuele startbasis al aanwezig en is volledig gevalideerd:

```text
MAP_SPECIFICATIONS/
├── README.md
├── ROOTS/
├── ARTIST_FOLDER/
├── CLIENT_FOLDER/
├── DEAL_FOLDER/
├── LEGAL_FOLDER/
└── MAP_SPECIFICATION_GAP_REPORT.md
```

`ROOTS/` bevat exact de elf toegestane rootspecificaties plus de lokale navigatie-README. De acht aanwezige artist-submapspecificaties staan onder `ARTIST_FOLDER/`. `CLIENT_FOLDER/`, `DEAL_FOLDER/` en `LEGAL_FOLDER/` bevatten alleen scope-README's omdat er nog geen afzonderlijke submapspecificaties bestaan. Er is geen Map Specification verwijderd of inhoudelijk herschreven.

### Oude en nieuwe locaties

Onderstaande met `git mv` uitgevoerde relocaties waren al onderdeel van de actuele `main`-basis (PR #200) en zijn in deze audit gecontroleerd; deze cleanup voerde daarom geen tweede move uit.

| Oude locatie | Nieuwe locatie |
|---|---|
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/{00_ADMIN..99_ARCHIVE}.md` | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ROOTS/{00_ADMIN..99_ARCHIVE}.md` |
| `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/{01_ADMIN,02_CONTRACT,03_STRATEGY,04_RELEASES,05_BOOKING,07_SOCIALMEDIA,08_PRESS_EPK,09_ARCHIVE}.md` | `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/ARTIST_FOLDER/` |

## Behouden uitzonderingen

- `docs/03_SHARED_SERVICES/` blijft bestaan voor lane-specifieke Shared Services en de bevroren Template Library. Zonder afzonderlijk owner-lanebesluit zou verplaatsing businessinhoud herclassificeren en Fase 2 herhalen.
- `docs/04_SYSTEMS/` blijft bestaan voor externe-platformconfiguratie van Drive, ClickUp en Gmail. Dit is de expliciete Fase 2-uitzondering in de as-built.
- De drie root-playbooks blijven naast hun byte-verschillende canonieke Operations-varianten bestaan. Fase 2 heeft consolidatie bewust uitgesteld; zonder inhoudelijk besluit is geen veilige move of verwijdering aantoonbaar.
- Exacte duplicaten binnen `docs/03_SHARED_SERVICES/TEMPLATES/` zijn behouden wegens de expliciete template-freeze. Historische exacte duplicaten onder `HISTORY/` blijven audittrail.
- Oude paden in `HISTORY/` en rollback/source-kolommen van het Fase 2-migratieplan blijven historische bronvermeldingen en zijn niet als actieve navigatie behandeld.
- `node_modules/` onder de lokale scriptswerkmap is untracked/ignored en geen repository-inhoud.

## Duplicatecheck

Een SHA-256-controle over alle tracked bestanden vond geen exacte dubbele actieve SOP, Workflow, Playbook, Agent Register of Knowledge Base-bron. De enige inhoudelijke exacte duplicaten buiten lege `.gitkeep`-bestanden zijn:

1. één historisch Governance-rapport en zijn expliciete `ROOT_COPY`, beide onder `HISTORY/`;
2. vier paren in de bevroren Template Library (`TEMPLATE_REVIEW_PROCESS`, `TEMPLATE_STATUS_REGISTER`, `TEMPLATE_USAGE_REPORT_SPEC`, `TEMPLATE_GAP_LOG_SPEC`).

Er is exact één `CM_AGENT_REGISTER.md` en exact één `PLAYBOOK_INDEX.md` in de actieve repository.

## Linkscan en actieve oude-padscan

De volledige relatieve Markdown-linkscan controleerde alle lokale Markdowntargets relatief aan het bronbestand en vond geen ontbrekende target. Paden onder `MAP_SPECIFICATIONS/ROOTS/` en `ARTIST_FOLDER/` zijn repositorybreed bereikbaar.

De actieve oude-padscan vond geen verwijzingen naar de pre-Fase-2 bronlocaties voor de verplaatste Operations-documenten, behalve expliciete bron- en rollbackvermeldingen in het Fase 2-migratieplan. Verwijzingen naar `docs/03_SHARED_SERVICES/` en `docs/04_SYSTEMS/` zijn bestaande, bereikbare uitzonderingen en niet automatisch verouderd.

## Scope- en veiligheidscontrole

- Iedere actieve docs-map heeft één README als scope-ingang of, waar van toepassing, één expliciet canoniek register.
- Operations bevat exact `WORKFLOWS`, `SOPS`, `PLAYBOOKS`, `AUTOMATIONS`, `AGENTS` en `KNOWLEDGE_BASE` als categorieën.
- Er zijn geen bestanden verwijderd, geen Drive-livebestanden, getekende contracten of clientdata aangetroffen/toegevoegd en geen vertrouwelijke waarden toegevoegd.
- `DRIVE_STRUCTURE.md`, alle bestanden onder de Template Library, `.github/`, `scripts/` en uitvoerbare logica zijn inhoudelijk ongewijzigd.

## Niet-opgeloste risico's

| Risico | Reden om niet te wijzigen | Vervolg |
|---|---|---|
| Goedgekeurde docs-lanes zonder tracked bestanden | Geen inhoud heeft momenteel een aantoonbare bestemming; lege mappen zijn niet duurzaam in Git. | Maak pas een lane-README wanneer scope/eigenaarschap inhoudelijk is goedgekeurd. |
| Root-playbooks naast Operations-playbooks | Varianten zijn niet exact gelijk en consolidatie is in Fase 2 uitgesteld. | Afzonderlijke inhoudelijke playbookreview. |
| Template Library onder de legacy-achtige Shared Services-naam en vier exacte duplicaatparen | Templates zijn expliciet bevroren. | Afzonderlijke templateconsolidatiefase met checksum- en linkmigratie. |
| `docs/03_SHARED_SERVICES` en `docs/04_SYSTEMS` vallen buiten de nieuwe genummerde docs-boom | De as-built behoudt lane-specifieke respectievelijk externe-platformdocumentatie; een volledige verhuizing heeft businessimpact. | Governancebesluit over definitieve owner-lanes, daarna afzonderlijke migratie. |

## Rollback per commit

Deze cleanup wordt in één logisch documentatiecommit vastgelegd. Rollback zonder geschiedenis te herschrijven:

```bash
git revert <cleanup-commit-sha>
```

De Map Specification-moves behoren tot de startbasis en worden niet door de cleanupcommit teruggedraaid. Indien die eerdere wijziging afzonderlijk moet worden teruggedraaid, moet de betreffende oorspronkelijke commit via een apart reviewbesluit worden gerevert; vermeng dit niet met de cleanuprollback.

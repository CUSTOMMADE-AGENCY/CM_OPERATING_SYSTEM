# Open PR review

## Doel

Dit document borgt dat open pull requests niet per ongeluk oude governance, verouderde Drive-roots of ongecontroleerde automation terugbrengen. De huidige AS-BUILT in `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md` is leidend.

## Reviewregel

Voer geen inhoudelijke merge-actie uit zonder expliciete Sophia approval. Open PR's mogen alleen worden beoordeeld, gelabeld, gesloten als superseded of teruggestuurd met het verzoek om te rebasen op de huidige AS-BUILT.

## Open PR-overzicht

| PR | Titel | Statusadvies | Risico | Reden | Required action |
|---|---|---|---|---|---|
| #107 | Add CM system decision matrix | REBASE TO CURRENT AS-BUILT | Medium: kan nuttige besluitvorming toevoegen, maar mag geen verouderde owners, rootstructuren of approvalregels introduceren. | Een decision matrix is inhoudelijk bruikbaar wanneer deze aansluit op de actuele AS-BUILT, CM-agentrollen en governancegrenzen. | Rebase op de huidige branch, controleer tegen `AS_BUILT_DOCUMENTATION.md`, vervang generieke rollen door bestaande CM-agent owners en laat CM CONTROL AGENT review uitvoeren vóór merge. |
| #83 | Voeg template-register en agent-governance toe en werk governance/as-built bij | REBASE TO CURRENT AS-BUILT | High: raakt governance en AS-BUILT direct; een oude versie kan actuele bron-van-waarheid overschrijven. | De PR bevat mogelijk waardevolle governance-aanvullingen, maar mag de huidige AS-BUILT, agentindeling of documentstructuur niet terugdraaien. | Rebase op de huidige AS-BUILT, behoud bestaande governance als leidend, los conflicten conservatief op en vraag CM CONTROL AGENT om inhoudelijke review. |
| #68 | Fix NO-GO error handling and remove duplicate in OS_CUSTOMMADE_target_structure.gs | REBASE TO CURRENT AS-BUILT | Medium: scriptwijzigingen aan Drive-structuur kunnen operationele impact hebben wanneer ze niet overeenkomen met de huidige OS_CUSTOMMADE-standaard. | Foutafhandeling en deduplicatie zijn relevant, mits het script geen nieuwe rootstructuur, verboden Drive-roots, delete/move/rename-acties of ongeautoriseerde Drive-mutaties introduceert. | Rebase, valideer tegen de actuele `OS_CUSTOMMADE` rootstructuur, beperk wijzigingen tot veilige NO-GO handling en laat testoutput plus rollback/fallback vastleggen. |
| #55 | Add OS_CUSTOMMADE migration dry-run simulator script | CLOSE AS SUPERSEDED | High: migratie-simulatoren kunnen oude migratielogica of alternatieve Drive-structuren opnieuw introduceren. | De huidige agent-readinesslijn staat geen nieuwe Drive-rootstructuur, geen delete/move/rename in Drive en geen migratie-activatie toe. Dry-run tooling uit oudere context is daardoor niet leidend. | Sluit als superseded na Sophia approval. Heropen alleen als er een nieuw, expliciet goedgekeurd testplan komt zonder Drive-mutaties en volledig afgestemd op de huidige AS-BUILT. |
| #53 | Add Sprint 2C Drive migration dry-run script | CLOSE AS SUPERSEDED | High: Sprint 2C-migratiecontext kan achterhaald zijn en risico geven op verouderde Drive-inrichting of onjuiste operationele aannames. | De huidige AS-BUILT is leidend en staat geen nieuwe Drive-rootstructuur, verboden Drive-roots, Make-activatie of Drive delete/move/rename toe. | Sluit als superseded na Sophia approval. Documenteer eventueel bruikbare learnings apart zonder scriptactivatie of structurele Drive-wijzigingen. |

## Superseded-criteria

Label/vermeld open PR's als **SUPERSEDED_BY_CURRENT_AS_BUILT** wanneer zij één of meer van onderstaande kenmerken hebben:

- Introduceren of herstellen een andere Drive-rootstructuur dan `OS_CUSTOMMADE` met exact `00_ADMIN`, `01_MASTER_BOUTIQUE`, `02_ARTIST_MANAGEMENT`, `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT` en `99_ARCHIVE`.
- Introduceren of herstellen van verboden Drive-roots buiten de 11 goedgekeurde `OS_CUSTOMMADE` roots.
- Introduceren `docs/05_AUTOMATION` of verwijzen daarnaar als geldige documentatieroot.
- Plaatsen artistdossiers onder `03_CLIENTS` in plaats van `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.
- Maken `04_DEALS` eigenaar van een andere agent dan CM LEGAL AGENT.
- Activeren Make-scenario's of beschrijven Make als live zonder testlog, fallback en CM CONTROL approval.
- Verwijderen, verplaatsen of hernoemen Drive-content zonder expliciete Sophia approval.

## Toegestane revieweractie

- Label toevoegen: **SUPERSEDED_BY_CURRENT_AS_BUILT**.
- Comment plaatsen dat de PR moet worden gerebased op de huidige AS-BUILT.
- Sluiten als superseded wanneer Sophia dit expliciet goedkeurt.
- Rebase-review aanvragen wanneer de PR inhoudelijk bruikbaar is maar governance raakt.

## Niet toegestaan

- Geen merge van oude rootstructuren.
- Geen herstel van verboden Drive-roots.
- Geen introductie van `docs/05_AUTOMATION`.
- Geen Make-activatie.
- Geen externe communicatie vanuit PR-review.
- Geen delete, move of rename in Drive.

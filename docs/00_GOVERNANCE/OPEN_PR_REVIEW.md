# Open PR review

## Doel

Dit document borgt dat open pull requests niet per ongeluk oude governance, verouderde Drive-roots of ongecontroleerde automation terugbrengen. De huidige AS-BUILT in `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md` is leidend.

## Waarschijnlijk superseded door huidige AS-BUILT

Label/vermeld open PRs als **SUPERSEDED_BY_CURRENT_AS_BUILT** wanneer zij één of meer van onderstaande kenmerken hebben:

- Introduceren of herstellen een andere Drive-rootstructuur dan `OS_CUSTOMMADE` met exact `00_ADMIN`, `01_MASTER_BOUTIQUE`, `02_ARTIST_MANAGEMENT`, `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT` en `99_ARCHIVE`.
- Brengen `00_INBOX` terug als Drive-root, docs-root of operationele standaardmap.
- Introduceren `docs/05_AUTOMATION` of verwijzen daarnaar als geldige documentatieroot.
- Plaatsen artistdossiers onder `03_CLIENTS` in plaats van `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`.
- Maken `04_DEALS` eigenaar van een andere agent dan CM LEGAL AGENT.
- Activeren Make-scenario's of beschrijven Make als live zonder testlog, fallback en CM CONTROL approval.
- Verwijderen, verplaatsen of hernoemen Drive-content zonder expliciete Sophia approval.

## Reviewregel

Voer geen inhoudelijke merge-actie uit zonder Sophia approval. Open PRs mogen alleen worden beoordeeld, gelabeld of teruggestuurd met het verzoek om te rebasen op de huidige AS-BUILT.

## Toegestane revieweractie

- Label toevoegen: **SUPERSEDED_BY_CURRENT_AS_BUILT**.
- Comment plaatsen dat de PR moet worden gerebased op de huidige AS-BUILT.
- Sluiten als superseded wanneer Sophia dit expliciet goedkeurt.

## Niet toegestaan

- Geen merge van oude rootstructuren.
- Geen herstel van `00_INBOX`.
- Geen introductie van `docs/05_AUTOMATION`.
- Geen Make-activatie.
- Geen externe communicatie vanuit PR-review.
- Geen delete, move of rename in Drive.

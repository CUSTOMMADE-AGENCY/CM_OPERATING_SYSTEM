# Codex Review Resolution Report — PR #36 en PR #37

## Status

Opgelost op 2026-06-16. `CM_OS_LOCKED_DECISIONS_WEEK1_BUILD_PACK_V2.md` is leidend gebruikt voor alle aanpassingen.

## Opgeloste feedbackpunten

| Feedbackpunt | Resolutie | Aangepaste bestanden |
|---|---|---|
| Locked Week 1 Build Pack v2 moet leidend zijn | Drive, ClickUp en Lane 02-documentatie zijn gecorrigeerd naar de locked decisions: Drive briefing-roots, artists als clients, één CM ClickUp Space en gecontroleerd behoud/archivering van shims. | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`, `docs/04_SYSTEMS/CLICKUP_MAPPING.md`, `docs/04_SYSTEMS/CLICKUP_STRUCTURE.md` |
| Drive-structuur moet naar `03_CLIENTS`, `04_DEALS` en nieuwe briefing-roots | De Drive-governance documenteert nu `01_BRIEFINGS`, `02_PIPELINE`, `03_CLIENTS`, `04_DEALS`, `05_BUSINESS`, `06_MARKETING` en `07_ARCHIVE`. Artists staan als clients onder `03_CLIENTS`; dealcases staan onder `04_DEALS`. | `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`, `docs/04_SYSTEMS/GOOGLE_DRIVE_STRUCTURE.md` |
| AS_BUILT_DOCUMENTATION moet dezelfde werkelijkheid tonen | De as-built sectie voor Drive is aangepast naar de locked briefing/client/deal-rootstructuur en beschrijft de vervanging van aparte artist- en Master Boutique-roots. | `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md` |
| Drive-script moet dezelfde structuur aanmaken | Het Apps Script maakt nu de goedgekeurde roots, briefing-subroots, bekende artist/clientfolders onder `03_CLIENTS` en de gecorrigeerde clientsubfolders aan. Verouderde `07_CONTENT` en losse `SOCIALMEDIA` zijn verwijderd. | `scripts/google-drive/create-cm-drive-structure.gs` |
| ClickUp mapping moet één centrale CM Space gebruiken | De mapping bevat nu expliciet één centrale `CM` Space met folders en geen parallelle Spaces. Drive-links in Artist Management wijzen naar `03_CLIENTS`; Master Boutique/deal-links wijzen naar `04_DEALS`. | `docs/04_SYSTEMS/CLICKUP_MAPPING.md` |
| ClickUp structure moet één centrale CM Space gebruiken | De verouderde lijst met aanbevolen aparte Spaces is vervangen door één centrale `CM` Space met folders voor lanes, clients, pipeline, shared operations en governance/systems. | `docs/04_SYSTEMS/CLICKUP_STRUCTURE.md` |
| Lane 02 cleanup-tabellen mogen legacy-bestanden niet naar zichzelf laten verwijzen | De cleanup- en audit-tabellen verwijzen legacy Brandbook, Release Strategy en Monthly Management nu naar de canonical genummerde workflows en/of het archiefpad, niet meer naar zichzelf. | `docs/02_ARTIST_MANAGEMENT/02_ARTIST_MANAGEMENT_MAP.md`, `docs/02_ARTIST_MANAGEMENT/ARTIST_MANAGEMENT_AUDIT.md` |
| Review-resolution rapport ontbreekt | Dit rapport is toegevoegd met opgeloste feedbackpunten, aangepaste bestanden en open acties. | `docs/00_GOVERNANCE/CODEX_REVIEW_RESOLUTION_REPORT.md` |

## Aangepaste bestanden

- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
- `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
- `docs/00_GOVERNANCE/CODEX_REVIEW_RESOLUTION_REPORT.md`
- `docs/04_SYSTEMS/GOOGLE_DRIVE_STRUCTURE.md`
- `docs/04_SYSTEMS/CLICKUP_MAPPING.md`
- `docs/04_SYSTEMS/CLICKUP_STRUCTURE.md`
- `docs/02_ARTIST_MANAGEMENT/02_ARTIST_MANAGEMENT_MAP.md`
- `docs/02_ARTIST_MANAGEMENT/ARTIST_MANAGEMENT_AUDIT.md`
- `scripts/google-drive/create-cm-drive-structure.gs`

## Open acties

| Open actie | Reden | Owner |
|---|---|---|
| Live Google Drive migratie controleren | Het script maakt ontbrekende nieuwe mappen aan, maar verplaatst of hernoemt bestaande live mappen niet automatisch. Oude live roots zoals `01_ARTIST_MANAGEMENT` en `02_MASTER_BOUTIQUE` moeten handmatig of via apart migratiescript worden gecontroleerd. | Drive owner / operations |
| Live ClickUp inrichting controleren | Repository-documentatie gebruikt één `CM` Space, maar bestaande ClickUp Spaces, templates en taken moeten live worden nagekeken op oude Space- of Drive-links. | ClickUp owner |
| Externe links naar Lane 02 legacy-bestanden controleren | Repository-verwijzingen zijn gecorrigeerd, maar externe bookmarks in Drive, ClickUp, automations of agentprompts kunnen nog naar oude legacy-bestanden wijzen. | Operations / AI systems owner |
| Eventuele dealcase-templatefolders in Drive toevoegen wanneer dealnamen bekend zijn | `04_DEALS` is als root vastgelegd; concrete dealfolders worden pas aangemaakt wanneer een deal/case bestaat. | Deal lead |

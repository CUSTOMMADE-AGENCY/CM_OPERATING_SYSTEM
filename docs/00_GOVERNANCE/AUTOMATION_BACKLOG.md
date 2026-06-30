# Automation Backlog

Lijst met herhalend werk dat CM kan versimpelen of automatiseren.
Start altijd bij het probleem, niet bij de tool.

## Status

| Status | Betekenis |
|---|---|
| IDEA | Mogelijke kans |
| REVIEW | Waarde en risico beoordelen |
| TEST | Klein testen |
| BUILD | Bouwen of inrichten |
| ACTIVE | In gebruik |
| ARCHIVED | Gestopt of niet meer nodig |

## Prioriteit

- High: vaak gebruikt, veel tijdwinst of hoog fout-risico.
- Medium: nuttig, maar niet urgent.
- Low: alleen oppakken als het weinig moeite kost.

## Backlog

| Automation | Probleem | Trigger | Tool/stack | Impact | Prioriteit | Owner | Review | Status |
|---|---|---|---|---|---|---|---|---|
| Naam | Welk terugkerend werk kost tijd of geeft fouten? | Wanneer start dit? | Tool of handmatige stap | Tijdwinst, foutreductie of betere kwaliteit | High / Medium / Low | Naam/rol | Naam/rol | IDEA / REVIEW / TEST / BUILD / ACTIVE / ARCHIVED |
| CM VAULT V1 | Artist folderstructuur kan inconsistent worden zonder periodieke controle. | Wekelijkse check onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`. | Make + Google Drive, met handmatige fallback | Vroegtijdige detectie van ontbrekende artist-subfolders zonder Make live te zetten. | Medium | CM FLOW AGENT | CM CONTROL AGENT | TEST |

# CM VAULT V1 — Make Scenario

**Make Scenario ID:** 6289645
**Status:** INACTIEF / TEST REQUIRED
**Schedule:** Elke maandag om 09:00 (Amsterdam)

---

Dit scenario is nog niet ACTIVE. Eerst Run once, testlog, rapportcontrole en CM CONTROL approval.

---

## Doel

CM VAULT V1 controleert wekelijks alle artiestmappen onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` in Google Drive en zorgt dat elke artiest exact de 9 verplichte submappen heeft. Ontbrekende mappen worden automatisch aangemaakt. Na elke run ontvangt `info@custommade.agency` een volledig rapport.

---

## Scope — Wat VAULT doet en NIET doet

| Actie | Toegestaan |
|---|---|
| Lezen van Drive-structuur | JA |
| Vergelijken met standaard | JA |
| Ontbrekende mappen aanmaken | JA |
| Rapporteren per mail | JA |
| Bestanden verwijderen | NEE |
| Bestanden hernoemen | NEE |
| Bestanden verplaatsen | NEE |
| Inhoud wijzigen | NEE |
| Buiten `02_ARTIST_MANAGEMENT` werken | NEE |

---

## Drive-structuur

```
OS_CUSTOMMADE (ID: 0B2aV9TqyUPDzd0F1WEd1RkVxNFk)
└── 02_ARTIST_MANAGEMENT
    ├── CALSEY
    │   ├── 01_ADMIN
    │   ├── 02_CONTRACT
    │   ├── 03_STRATEGY
    │   ├── 04_RELEASES
    │   ├── 05_BOOKING
    │   ├── 06_FINANCE
    │   ├── 07_SOCIALMEDIA
    │   ├── 08_PRESS_EPK
    │   └── 09_ARCHIVE
    ├── DANI DEAUX
    │   └── (zelfde 9 mappen)
    └── ... (alle andere artiesten)
```

---

## Scenario Architectuur

### Module 1 — Scheduler
- **Type:** Weekly
- **Dag:** Maandag (dag 1)
- **Tijd:** 09:00:00 (Europe/Amsterdam)

### Module 2 — Zoek 02_ARTIST_MANAGEMENT
- **App:** Google Drive
- **Module:** searchForFilesFolders v4
- **Query:** `name = '02_ARTIST_MANAGEMENT' and '0B2aV9TqyUPDzd0F1WEd1RkVxNFk' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
- **Output:** 1 bundle met folder-ID van `02_ARTIST_MANAGEMENT`
- **Foutafhandeling:** Als niet gevonden → scenario stopt (Drive niet bereikbaar)

### Module 3 — Lijst alle artiestmappen
- **App:** Google Drive
- **Module:** searchForFilesFolders v4
- **Query:** `'{{2.id}}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
- **Limit:** 50
- **Output:** N bundles (één per artiest)

### Module 4 — Iterator: 9 verplichte mapnamen
- **App:** builtin:BasicFeeder
- **Array:** `["01_ADMIN","02_CONTRACT","03_STRATEGY","04_RELEASES","05_BOOKING","06_FINANCE","07_SOCIALMEDIA","08_PRESS_EPK","09_ARCHIVE"]`
- **Output:** 9 bundles per artiest (één per verplichte map)

### Module 5 — Controleer of submap bestaat
- **App:** Google Drive
- **Module:** searchForFilesFolders v4
- **Query:** `name = '{{4.value}}' and '{{3.id}}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
- **Limit:** 1
- **Output:** 0 of 1 bundle

### Module 6 — Aggregeer resultaat (bestaat/bestaat niet)
- **App:** builtin:BasicAggregator
- **Feeder:** Module 5
- **GroupBy:** `{{4.__IMTINDEX__}}` (één groep per verplichte map)
- **Output:** Array met lengte 0 (ontbreekt) of 1 (aanwezig)

### Module 7 — Router: Bestaat / Ontbreekt
- **App:** builtin:BasicRouter
- **Route A — Folder bestaat** (filter: `length(6.array) > 0`)
  - Module 8: `util:SetVariable2` → `log_line = "DATUM | ARTIEST | AANWEZIG | MAPNAAM"`
- **Route B — Folder ontbreekt** (filter: `length(6.array) = 0`)
  - Module 9: `google-drive:createAFolder` → maakt map aan in artiestmap
  - Module 10: `util:SetVariable2` → `log_line = "DATUM | ARTIEST | MAP AANGEMAAKT | MAPNAAM"`

### Module 11 — Tekstaggregator per artiest
- **App:** util:TextAggregator
- **Feeder:** Module 4 (BasicFeeder)
- **Separator:** newline
- **Waarde:** `{{ifempty(8.log_line; 10.log_line)}}`
- **Output:** Één tekst per artiest met 9 log-regels

### Module 12 — Volledig rapport
- **App:** util:TextAggregator
- **Feeder:** Module 3 (artiestmappen)
- **Separator:** dubbele newline
- **Waarde:** `{{3.name}}\n{{11.text}}\nSTATUS: COMPLETE`
- **Output:** Volledig rapport van alle artiesten

### Module 13 — Verstuur rapport per mail
- **App:** google-email:ActionSendEmail
- **Aan:** info@custommade.agency
- **Onderwerp:** `CM VAULT WEEKLY REPORT — {{formatDate(now; "YYYY-MM-DD")}}`
- **Body:** HTML-rapport

---

## Verbindingen

| Verbinding | ID | Account |
|---|---|---|
| Google Drive | 8190782 | info@custommade.agency |
| Gmail (verzenden) | 8227500 | info@custommade.agency |

---

## Rapport Voorbeeld

```
CM VAULT WEEKLY REPORT — 2026-06-23

CALSEY
2026-06-23 | CALSEY | AANWEZIG | 01_ADMIN
2026-06-23 | CALSEY | AANWEZIG | 02_CONTRACT
2026-06-23 | CALSEY | AANWEZIG | 03_STRATEGY
2026-06-23 | CALSEY | MAP AANGEMAAKT | 08_PRESS_EPK
2026-06-23 | CALSEY | AANWEZIG | 09_ARCHIVE
STATUS: COMPLETE

DANI DEAUX
2026-06-23 | DANI DEAUX | AANWEZIG | 01_ADMIN
...
STATUS: COMPLETE
```

---

## Foutafhandeling

- Als Drive niet bereikbaar is (module 2 vindt `02_ARTIST_MANAGEMENT` niet): scenario stopt automatisch
- `maxErrors: 3` — scenario stopt na 3 fouten
- `sequential: true` — artiesten worden één voor één verwerkt (geen parallelle conflicten)
- `dataloss: false` — geen dataverlies bij crash

---

## Testplan

1. **Handmatig uitvoeren** in Make (Run once) met bestaande artiestmappen
2. **Controleer rapport** in inbox: alle 9 mappen per artiest aanwezig?
3. **Test aanmaken**: verwijder tijdelijk één testmap en run opnieuw → map moet worden aangemaakt
4. **Controleer log-regel**: `MAP AANGEMAAKT` moet zichtbaar zijn in rapport
5. **Controleer geen duplicaten**: run twee keer achter elkaar → geen dubbele mappen

---

## Activatie

Het scenario staat INACTIEF. Om te activeren:
1. Open Make → Team: My Team
2. Zoek scenario "CM VAULT V1" (ID: 6289645)
3. Test eerst handmatig met "Run once"
4. Activeer daarna het wekelijkse schema pas na vastgelegd testlog, rapportcontrole en CM CONTROL approval

---

## Volgende versies

- **V2 — Readiness Audit**: Controleert of verplichte documenten aanwezig zijn in submappen
- **V3 — Auto Move**: Verplaatst bestanden naar de juiste submappen (NIET voor V1)

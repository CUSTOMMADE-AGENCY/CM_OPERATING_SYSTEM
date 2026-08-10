# CM VAULT V1 — Make Scenario

**Make Scenario ID:** 6289645
**Status:** TE PAUZEREN → INACTIEF / TEST REQUIRED (besluit 2026-08-07: gates eerst). Kort ACTIVE geweest op 2026-08-07; activatie teruggedraaid.
**Schedule:** Elke maandag om 09:00 (Amsterdam) — **schema staat uit tot na certificering** (geen run op 10 aug)

---

> ⚠️ **TWEE OPENSTAANDE PUNTEN — LEES DIT EERST**
>
> **1. Governance-deviatie opgelost — BESLUIT: PAUZEREN.** `GOVERNANCE_RULES.md` houdt dit
> scenario INACTIEF *"totdat testlog, fallback en CM CONTROL approval zijn vastgelegd"*. Het
> scenario was op 2026-08-07 kort geactiveerd vóór die gates; Sophia heeft besloten het weer
> te **pauzeren** tot de gates groen zijn. De accounteigenaar zet de scheduling-toggle in Make
> uit; de run van 10 aug gaat niet door. Certificering verloopt gates-eerst. Zie
> `AGENTS/CERTIFICATION/EVIDENCE/CM_VAULT_LIVE_ACTIVATION_2026-08-07.md`.
>
> **2. Deployed ≠ gedocumenteerd.** Dit document beschreef het scenario als
> **folder-aanmakend** (module 9 = `createAFolder`). Het **werkelijk uitgerolde** blueprint
> (uitgelezen via de Make-connector op 2026-08-07) is **read-only**: module 9 is een
> `SetVariable` die `ONTBREKEND` logt — er wordt **geen** map aangemaakt. Onderstaande
> architectuur, scope en testplan zijn hierop gecorrigeerd. Of de read-only vorm de bedoeling
> is (V1 = audit) dan wel een build-gap (createAFolder ontbreekt), is een **CM FLOW / Sophia
> beslispunt**.

---

## Doel

CM VAULT V1 controleert wekelijks alle artiestmappen onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT`
in Google Drive en rapporteert per artiest of elk van de 9 verplichte submappen `AANWEZIG` of
`ONTBREKEND` is. **Het uitgerolde scenario maakt zelf géén mappen aan** (read-only); mapaanmaak
gebeurt via het losse Apps Script `create-cm-drive-structure.gs`. Na elke run ontvangt
`info@custommade.agency` een volledig rapport.

---

## Scope — Wat VAULT doet en NIET doet

| Actie | Toegestaan |
|---|---|
| Lezen van Drive-structuur | JA |
| Vergelijken met standaard | JA |
| Ontbrekende mappen aanmaken | **NEE** (uitgerold blueprint is read-only; gedocumenteerd ontwerp beoogde JA — divergentie, zie waarschuwing) |
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
  - Module 9: `util:SetVariable2` → `log_line = "DATUM | ARTIEST | ONTBREKEND | MAPNAAM"`
  - *(uitgerold blueprint: read-only. Er is **geen** `createAFolder` en **geen** module 10; het gedocumenteerde ontwerp beoogde die wél — divergentie, zie waarschuwing bovenaan.)*

### Module 11 — Tekstaggregator per artiest
- **App:** util:TextAggregator
- **Feeder:** Module 4 (BasicFeeder)
- **Separator:** newline
- **Waarde:** `{{ifempty(8.log_line; 9.log_line)}}`
- **Output:** Één tekst per artiest met 9 log-regels (`AANWEZIG` / `ONTBREKEND`)

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
2026-06-23 | CALSEY | ONTBREKEND | 08_PRESS_EPK
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

> Aangepast aan het **read-only** deployment. Stappen die mapaanmaak veronderstellen gelden
> níet voor de huidige uitrol (zie waarschuwing bovenaan).

1. **Handmatig uitvoeren** in Make (Run once) met bestaande artiestmappen.
2. **Controleer rapport** in inbox: staat per artiest correct `AANWEZIG` / `ONTBREKEND`?
3. **Test ontbrekende map (read-only)**: verwijder tijdelijk één testmap en run opnieuw →
   het rapport moet die map als `ONTBREKEND` melden. *(De map wordt NIET automatisch
   aangemaakt — dat is de gedocumenteerde-vs-uitgerolde divergentie; maak de testmap daarna
   handmatig of via `create-cm-drive-structure.gs` terug aan.)*
4. **Red-team (§8 certificering)**: nog aan te tonen op scenario-laag — foutafhandeling
   (Drive/permission/timeout), incident-logging en escalatie.
5. **Geen dubbele acties**: read-only, dus per definitie geen duplicaten; blijft ter controle.

Testresultaten worden vastgelegd in `AGENTS/CERTIFICATION/EVIDENCE/` en tellen mee voor de
production-gates van CM VAULT.

---

## Activatie

Het scenario is op **2026-08-07 door de accounteigenaar op ACTIVE gezet** (bevestigd via de
Make-connector). **Let op:** dit gebeurde vóórdat de door `GOVERNANCE_RULES.md` vereiste
gates (testlog, fallback, CM CONTROL approval) zijn vastgelegd — zie de governance-waarschuwing
bovenaan. Openstaand besluit: **pauzeren tot de gates groen zijn**, of een bewuste low-risk
uitzondering vastleggen (read-only scenario). Zo pauzeer/heractiveer je:
1. Open Make → Team `608764`.
2. Zoek scenario "CM VAULT V1" (ID: 6289645).
3. Zet de scheduling-toggle Aan/Uit naar het genomen besluit.
4. Leg testlog, rapportcontrole en CM CONTROL approval vast vóór definitieve productiestatus.

---

## Beslispunt: read-only vs. mapaanmaak (CM FLOW-aanbeveling)

Het uitgerolde blueprint is read-only; het oorspronkelijke ontwerp beoogde mapaanmaak
(`createAFolder`). Beslissing nodig van CM FLOW / Sophia.

**Aanbeveling: houd V1 read-only (audit + rapport).** Onderbouwing:

- **Least privilege & approval-gates.** Mapaanmaak is een **datamuterende** actie. Volgens de
  governance vereisen datamuterende automatiseringen een CM FLOW-test én CM CONTROL-akkoord;
  een read-only audit is aanzienlijk eenvoudiger en veiliger naar Level 3 te certificeren.
- **Rolzuiverheid.** CM VAULT is de "waar staat de waarheid?"-laag: signaleren en rapporteren.
  Structuur-*bouwen* hoort bij het Apps Script `create-cm-drive-structure.gs` (idempotent,
  onder menselijke controle) — die dekt de mapaanmaak al af.
- **Geen dubbele bron van actie.** Twee systemen (Make + Apps Script) die dezelfde mappen
  aanmaken vergroot de kans op conflicten; één schrijfpad (Apps Script) is schoner.

**Consequentie als read-only de keuze is:** het operator-doc, de scope-tabel en de scenario-map
(hierboven al gecorrigeerd) zijn dan definitief; het "createAFolder"-ontwerp vervalt voor V1.

**Als mapaanmaak tóch in Make moet:** dan is dit een aparte, **als datamuterend gemarkeerde**
capability (bv. `CM VAULT V1-write`) met eigen testlog, fallback, rollback en CM CONTROL
approval — niet stilzwijgend binnen V1.

## Volgende versies

- **V2 — Readiness Audit**: Controleert of verplichte documenten aanwezig zijn in submappen
- **V3 — Auto Move**: Verplaatst bestanden naar de juiste submappen (NIET voor V1)

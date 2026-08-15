# CM AGENT CONTROL TOWER — Deploy-runbook (fase 2)

> **Voor wie.** CM FLOW (of de accounteigenaar) die de Control Tower + live datavoeding in de
> Google-omgeving van CUSTOMMADE AGENCY live zet.
> **Resultaat.** Eén Google Sheet **`CM AGENT CONTROL TOWER`** dat elk uur automatisch gevuld
> wordt met open items uit ClickUp (per agent) en open posten uit Moneybird (CM MONEY-tab).
> **Tijd.** ~15 minuten. **Voorwaarde-scripts:**
> `scripts/google-drive/cm-agent-control-tower.gs` (bouwer) en
> `scripts/google-drive/cm-agent-control-tower-feed.gs` (feed).

## Veiligheidskader (niet-onderhandelbaar)

- **Read-only op de bronnen.** De feed haalt alleen data OP uit ClickUp/Moneybird; wijzigt daar niets.
- **Schrijft alleen** in de agent-datatabs van dit ene blad; COCKPIT, LEGENDA en formules blijven ongemoeid; verwijdert niets.
- **Tokens nooit in code.** Ze staan uitsluitend in Script Properties.
- **Entiteitsscheiding.** `AGENT_LIST_MAP` bevat uitsluitend CM-lijsten; **FIERCE (EXTERNE_ENTITEIT) staat er niet in**. `MONEYBIRD_ADMIN_ID` is de CM-administratie, nooit die van de externe entiteit.

## Wat je nodig hebt (vooraf verzamelen)

| Item | Waar | Nodig voor |
|---|---|---|
| Google-account met toegang tot de CM-Drive | — | Apps Script + Sheet |
| **ClickUp API-token** (personal, read-scope) | ClickUp → Settings → Apps → API Token (`pk_…`) | ClickUp-voeding |
| **Moneybird-token** (optioneel) | Moneybird → Instellingen → API / OAuth | CM MONEY open posten |
| **Moneybird administratie-ID** (optioneel) | Moneybird-URL of API `/administrations` | CM MONEY open posten |
| De gereconcilieerde **`AGENT_LIST_MAP`** | `CM_AGENT_CLICKUP_RECONCILIATION.md` (hieronder herhaald) | ClickUp-voeding |

## Stap 1 — Apps Script-project aanmaken en beide scripts plakken

1. Ga naar <https://script.google.com> → **Nieuw project**. Noem het bv. `CM AGENT CONTROL TOWER`.
2. Plak de inhoud van `scripts/google-drive/cm-agent-control-tower.gs` in `Code.gs`.
3. Voeg een nieuw script-bestand toe (**+ → Script**), noem het `feed`, en plak de inhoud van
   `scripts/google-drive/cm-agent-control-tower-feed.gs`.
4. **Opslaan** (Ctrl/Cmd-S).

## Stap 2 — Het blad bouwen

1. Kies bovenin de functie **`buildControlTower`** → **Uitvoeren**.
2. Google vraagt **autorisatie** → sta toegang toe (Drive/Sheets). Eenmalig.
3. Controleer in de Uitvoeringslog de URL, of open Drive: het blad **`CM AGENT CONTROL TOWER`**
   staat er nu, met tabs: COCKPIT · CM CONTROL · CM OPS · CM MONEY · CM LEGAL · CM PROSPECT ·
   CM SOCIAL · CM VAULT · CM FLOW · LEGENDA.
   - *Optioneel:* wil je het blad in een vaste map? Zet vooraf `CONTROL_TOWER_PARENT_FOLDER_ID`
     bovenin `Code.gs` op een Drive-map-ID; anders komt het in **My Drive**.

## Stap 3 — Script Properties zetten (tokens + map)

1. Links **Projectinstellingen** (tandwiel) → onderaan **Scripteigenschappen** → **Eigenschap toevoegen**.
2. Voeg toe (naam → waarde):

| Eigenschap | Waarde | Verplicht |
|---|---|---|
| `CLICKUP_TOKEN` | jouw `pk_…`-token | ✅ |
| `AGENT_LIST_MAP` | de JSON uit Stap 3a (op één regel) | ✅ |
| `MONEYBIRD_TOKEN` | Moneybird-token | ⬜ (voor MONEY) |
| `MONEYBIRD_ADMIN_ID` | CM-administratie-ID | ⬜ (voor MONEY) |

3. **Opslaan**.

### Stap 3a — `AGENT_LIST_MAP` (kant-en-klaar, live gereconcilieerd 2026-08-14)

```json
{"CM PROSPECT":["901523770690","901523770691","901523770692:closed","901523770693:closed"],"CM OPS":["901523770695","901523770696","901523770697:closed","901524830195"],"CM MONEY":["901524474749","901524236484"],"CM LEGAL":["901524474751","901523771174","901523771175","901523771176","901523788616"],"CM CONTROL":["901524741463"],"CM FLOW":["901523770702"],"CM VAULT":["901523770699","901523770700"],"CM SOCIAL":["901525134118","901525134119","901525134120","901525134121","901525134122"]}
```

> De `:closed`-suffix op WON/LOST/COMPLETED haalt óók afgeronde taken op (terminale lijsten tonen).
> Actieve lijsten zonder suffix tonen alleen open werk.

## Stap 4 — Eén keer handmatig voeden en controleren

1. Open het `feed`-bestand, kies functie **`refreshControlTower`** → **Uitvoeren**.
2. Autoriseer indien gevraagd (externe requests naar ClickUp/Moneybird). Eenmalig.
3. Open het blad en controleer: onder de kopregel van elke agent-tab staan nu de open items.
   De **COCKPIT** telt open items / Waiting-On / escalaties per agent.
4. Bekijk de **Uitvoeringslog**: die meldt `X agents, Y rijen, Z overgeslagen (bronfout)` en
   eventuele fouten. Zie *Troubleshooting* bij problemen.

## Stap 5 — Uurtrigger aanzetten (automatisch)

1. In het `feed`-bestand, kies functie **`installControlTowerFeedTrigger`** → **Uitvoeren**.
2. Dit zet één tijd-trigger: `refreshControlTower` draait **elk uur** (idempotent — dubbele
   triggers worden voorkomen).
3. Controleer onder **Triggers** (klok-icoon links) dat er precies één trigger staat.

## Stap 6 — Delen (read-only)

- Deel het blad **read-only** (Alleen-lezen) met wie mag meekijken (Sophia, agents-verantwoordelijken).
  De `Reden / notitie`-kolom (J) is voor handmatige aantekeningen door CM CONTROL; die blijven bij
  elke refresh behouden (gekoppeld op de item-URL).

## Verificatie-checklist

- [ ] Blad `CM AGENT CONTROL TOWER` bestaat met 8 agent-tabs + COCKPIT + LEGENDA.
- [ ] `CLICKUP_TOKEN` en `AGENT_LIST_MAP` staan in Script Properties.
- [ ] `refreshControlTower()` vulde de tabs zonder fouten in de log.
- [ ] COCKPIT toont per agent open items / Waiting-On / escalaties.
- [ ] (MONEY) `MONEYBIRD_TOKEN` + `MONEYBIRD_ADMIN_ID` gezet → CM MONEY-tab toont open posten.
- [ ] Eén uurtrigger actief.
- [ ] Blad read-only gedeeld.

## Troubleshooting

| Symptoom in de log | Oorzaak | Oplossing |
|---|---|---|
| `CLICKUP_TOKEN ontbreekt` | Property niet gezet | Stap 3 |
| `AGENT_LIST_MAP is geen geldige JSON` | Kopieerfout / slimme aanhalingstekens | Plak de JSON opnieuw als platte tekst (Stap 3a) |
| `Blad "CM AGENT CONTROL TOWER" niet gevonden` | Bouwer nog niet gedraaid | Stap 2 (`buildControlTower`) |
| `Tab ontbreekt: CM …` | Agent-sleutel ≠ tabnaam | Sleutels in `AGENT_LIST_MAP` moeten exact matchen met de tabnamen |
| `ClickUp 401` | Token ongeldig/geen scope | Nieuw personal token met read-scope |
| `ClickUp 404 voor list …` | Verkeerd lijst-ID | Controleer ID tegen `CM_AGENT_CLICKUP_RECONCILIATION.md` |
| `Moneybird 401` | Token/adminID onjuist | Controleer `MONEYBIRD_TOKEN` + `MONEYBIRD_ADMIN_ID` |
| `… overgeslagen (bronfout)` | Tijdelijke 401/429/5xx | Verwacht gedrag: de agent behoudt de vorige momentopname; de volgende run herstelt |
| CM SOCIAL-tab leeg | — | Normaal als MARKETING-lijsten nog geen taken hebben; vult zodra er taken zijn |

## Onderhoud

- **Lijsten wijzigen?** Pas `AGENT_LIST_MAP` aan in Script Properties (geen code-wijziging nodig).
- **Nieuwe agent-lane / folder?** Voeg de lijst-ID's toe onder de juiste agent-sleutel.
- **Frequentie aanpassen?** Wijzig `everyHours(1)` in `installControlTowerFeedTrigger()` en draai
  de functie opnieuw (vervangt de bestaande trigger).

## Verwijzingen

- Reconciliatie / bron van `AGENT_LIST_MAP`: `docs/05_OPERATIONS/AGENTS/CM_AGENT_CLICKUP_RECONCILIATION.md`
- Optie 3 build plan: `docs/05_OPERATIONS/AGENTS/CM_AGENT_OPTION3_BUILD_PLAN.md`
- Scripts: `scripts/google-drive/cm-agent-control-tower.gs` · `scripts/google-drive/cm-agent-control-tower-feed.gs`

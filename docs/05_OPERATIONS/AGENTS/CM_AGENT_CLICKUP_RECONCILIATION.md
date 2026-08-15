# CM AGENT — ClickUp reconciliatie (AGENT_LIST_MAP)

> **Doel.** De live ClickUp-structuur van `CUSTOMMADE AGENCY` afstemmen op de acht CM_OS-agents,
> zodat de Control Tower-feed (`scripts/google-drive/cm-agent-control-tower-feed.gs`) weet welke
> lijsten welke agent-tab voeden. Dit document levert de kant-en-klare `AGENT_LIST_MAP` voor de
> Script Property.
>
> **Canonieke basis.** Structuur B (ADR-2026-08-07), zie
> `docs/05_OPERATIONS/KNOWLEDGE_BASE/SYSTEMS/CLICKUP_MAPPING.md` → "Compacte ClickUp-mapping".
> **Bron van deze reconciliatie:** live uitlezing van de ClickUp-workspace-hiërarchie.
> **Reconciliatiedatum:** 2026-08-14.

## Live workspace (bron)

- **Workspace-id:** `90151157762`
- **Space:** `CUSTOMMMADE AGENCY` (id `90154573019`) — let op: de space-naam bevat een typefout
  (drie M'en: "CUSTOMM**M**ADE"). Cosmetisch; blokkeert de feed niet. Aanbevolen om te corrigeren
  naar `CUSTOMMADE AGENCY`.

### Folders en lijsten (canoniek → agent)

| Folder (id) | Lijst | Lijst-id | Agent Owner | In feed? |
|---|---|---|---|---|
| PIPELINE (`901516291368`) | LEADS | `901523770690` | CM PROSPECT | ✅ |
| PIPELINE | ACTIVE DEALS | `901523770691` | CM PROSPECT | ✅ |
| PIPELINE | WON | `901523770692` | CM PROSPECT | ✅ terminaal (tonen) |
| PIPELINE | LOST | `901523770693` | CM PROSPECT | ✅ terminaal (tonen) |
| CLIENTS (`901516291371`) | ACTIVE CLIENTS | `901523770695` | CM OPS | ✅ |
| CLIENTS | ON HOLD | `901523770696` | CM OPS | ✅ |
| CLIENTS | COMPLETED | `901523770697` | CM OPS | ✅ terminaal (tonen) |
| OPERATIONS (`901516291372`) | SOPS | `901523770699` | CM VAULT | ✅ |
| OPERATIONS | TEMPLATES | `901523770700` | CM VAULT | ✅ |
| OPERATIONS | AUTOMATIONS | `901523770702` | CM FLOW | ✅ |
| OPERATIONS | OPEN POSTEN | `901524236484` | CM MONEY | ✅ |
| OPERATIONS | CM — AI REVIEW | `901524741463` | CM CONTROL | ✅ |
| DEAL DESK (`901516291775`) | CATALOG ACQUISITIONS | `901523771174` | CM LEGAL | ✅ |
| DEAL DESK | ARTIST DEALS | `901523771175` | CM LEGAL | ✅ |
| DEAL DESK | RELATIONSHIPS | `901523771176` | CM LEGAL | ✅ |
| DEAL DESK | ASSET INVENTORY | `901523788616` | CM LEGAL | ✅ |

### Losse lijsten (buiten een folder)

| Lijst | Lijst-id | Beslissing | Reden |
|---|---|---|---|
| CM — FINANCE | `901524474749` | → **CM MONEY** | Finance-uitvoering; hoort bij MONEY. |
| CM — LEGAL | `901524474751` | → **CM LEGAL** | Legal-dossier; hoort bij LEGAL. |
| **FIERCE** | `901524474753` | 🚫 **UITGESLOTEN** | Externe entiteit (EXTERNE_ENTITEIT). Entiteitsscheiding: mag **nooit** een CM-agent-tab voeden. |
| EMAIL ACTIES | `901524830195` | → **CM OPS** | Besluit Sophia (2026-08-14): e-mailacties/inbox-routing als uitvoering onder CM OPS. |
| CUSTOMMADE AGENCY SETUP | `901523770687` | — geen agent | Setup/meta-lijst, geen operationele lane. |

## MARKETING-folder (aangemaakt 2026-08-14)

Canoniek is `MARKETING` de folder van **CM SOCIAL**. De folder is nu aangemaakt in space
`CUSTOMMADE AGENCY` (folder-id `901517324271`) met vijf lijsten, en CM SOCIAL is in de
`AGENT_LIST_MAP` gevuld.

| Lijst | Lijst-id | Agent Owner |
|---|---|---|
| Content Calendar | `901525134118` | CM SOCIAL |
| Website & SEO | `901525134119` | CM SOCIAL |
| Press & Media | `901525134120` | CM SOCIAL |
| Social Publishing | `901525134121` | CM SOCIAL |
| Campaigns | `901525134122` | CM SOCIAL |

## Kant-en-klare `AGENT_LIST_MAP` (Script Property)

Plak dit als waarde van de Script Property `AGENT_LIST_MAP` (Project Settings → Script Properties)
in het Apps Script-project van de Control Tower. Terminale lijsten (WON/LOST/COMPLETED) zijn
opgenomen conform besluit 2; de externe entiteit (FIERCE) blijft bewust uitgesloten.

Verwerkt volgens de besluiten van Sophia (2026-08-14): **EMAIL ACTIES → CM OPS**, en de
**terminale lijsten (WON/LOST/COMPLETED) worden getoond**. `CM SOCIAL` blijft leeg tot de
MARKETING-folder is aangemaakt; vul dan de nieuwe lijst-ID's in (zie hieronder).

De terminale lijsten dragen een `:closed`-suffix zodat de feed óók hun afgeronde/gesloten taken
ophaalt (WON/LOST/COMPLETED) — actieve lijsten blijven zonder suffix en tonen alleen open werk.

```json
{
  "CM PROSPECT": ["901523770690", "901523770691", "901523770692:closed", "901523770693:closed"],
  "CM OPS": ["901523770695", "901523770696", "901523770697:closed", "901524830195"],
  "CM MONEY": ["901524474749", "901524236484"],
  "CM LEGAL": ["901524474751", "901523771174", "901523771175", "901523771176", "901523788616"],
  "CM CONTROL": ["901524741463"],
  "CM FLOW": ["901523770702"],
  "CM VAULT": ["901523770699", "901523770700"],
  "CM SOCIAL": ["901525134118", "901525134119", "901525134120", "901525134121", "901525134122"]
}
```

> De agent-sleutels komen exact overeen met de tab-namen in het blad **CM AGENT CONTROL TOWER**
> (van `cm-agent-control-tower.gs`). `CM SOCIAL` staat leeg tot de MARKETING-folder bestaat; de
> feed slaat die tab dan over zonder te breken. `CM MONEY` krijgt daarnaast automatisch de open
> posten uit Moneybird (aparte feed-tak) zodra `MONEYBIRD_TOKEN` + `MONEYBIRD_ADMIN_ID` gezet zijn.
>
> **CM SOCIAL is ingevuld** (MARKETING aangemaakt 2026-08-14, folder-id `901517324271`):
> Content Calendar `901525134118`, Website & SEO `901525134119`, Press & Media `901525134120`,
> Social Publishing `901525134121`, Campaigns `901525134122`.

## Besluiten (Sophia / CM CONTROL — 2026-08-14)

1. ✅ **EMAIL ACTIES** (`901524830195`) → **CM OPS**. Verwerkt in `AGENT_LIST_MAP`.
2. ✅ **Terminale lijsten tonen** — WON/LOST/COMPLETED toegevoegd aan de map; de feed-statusmapping
   markeert `won`/`lost`/`completed` als afgerond (✅ Done) zodat ze correct op de tab lezen.
3. ✅ **MARKETING-folder aangemaakt** (2026-08-14, folder-id `901517324271`) met vijf lijsten;
   CM SOCIAL is gevuld in de `AGENT_LIST_MAP`.
4. ⏳ **Space-naam-typo** `CUSTOMMMADE` → `CUSTOMMADE` — **kan nog niet automatisch**: de ClickUp
   MCP-toolset heeft geen "space hernoemen"-actie (alleen folders/lijsten). Handmatig te doen in de
   ClickUp-UI: Space-instellingen → naam wijzigen naar `CUSTOMMADE AGENCY`. Cosmetisch; blokkeert
   de feed niet.

## Resterende handmatige actie

- **Space hernoemen** `CUSTOMMMADE AGENCY` → `CUSTOMMADE AGENCY` in de ClickUp-UI (geen
  API/MCP-tool beschikbaar voor space-rename).

## Guardrails toegepast in deze reconciliatie

- **Entiteitsscheiding:** FIERCE (EXTERNE_ENTITEIT) is uitgesloten; geen enkele CM-agent-tab wordt
  eruit gevoed.
- **Eén Agent Owner per taak** blijft leidend; deze map koppelt lijsten aan de eigenaar-agent
  volgens structuur B.
- **Read-only:** deze reconciliatie is uitgelezen, niet geschreven; er is niets in ClickUp gewijzigd.

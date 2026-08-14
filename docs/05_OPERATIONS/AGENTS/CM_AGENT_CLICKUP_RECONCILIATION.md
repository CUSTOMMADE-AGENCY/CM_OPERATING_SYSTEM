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
| PIPELINE | WON | `901523770692` | CM PROSPECT | ⬜ terminaal (uit) |
| PIPELINE | LOST | `901523770693` | CM PROSPECT | ⬜ terminaal (uit) |
| CLIENTS (`901516291371`) | ACTIVE CLIENTS | `901523770695` | CM OPS | ✅ |
| CLIENTS | ON HOLD | `901523770696` | CM OPS | ✅ |
| CLIENTS | COMPLETED | `901523770697` | CM OPS | ⬜ terminaal (uit) |
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
| EMAIL ACTIES | `901524830195` | ⚠️ **openstaand** | E-mailacties/inbox-routing; kan onder CM OPS of CM CONTROL. Nog niet toegewezen — jouw keuze (zie "Open beslissingen"). |
| CUSTOMMADE AGENCY SETUP | `901523770687` | — geen agent | Setup/meta-lijst, geen operationele lane. |

## Ontbrekend t.o.v. canoniek

- **MARKETING-folder ontbreekt.** Canoniek is `MARKETING` de folder van **CM SOCIAL**. Die folder
  bestaat nog niet in de live workspace. Gevolg: **CM SOCIAL heeft (nog) geen lijst-ID's** → de
  feed slaat de SOCIAL-tab netjes over tot de folder + lijsten bestaan (graceful degradation).
  - Aanbevolen SOCIAL-lijsten bij aanmaken (uit CLICKUP_MAPPING): `Content Calendar`,
    `Website & SEO`, `Press & Media`, `Social Publishing`, `Campaigns`.

## Kant-en-klare `AGENT_LIST_MAP` (Script Property)

Plak dit als waarde van de Script Property `AGENT_LIST_MAP` (Project Settings → Script Properties)
in het Apps Script-project van de Control Tower. Alleen "open/actionable" lijsten zijn opgenomen;
terminale lijsten (WON/LOST/COMPLETED) en de externe entiteit (FIERCE) zijn bewust weggelaten.

```json
{
  "CM PROSPECT": ["901523770690", "901523770691"],
  "CM OPS": ["901523770695", "901523770696"],
  "CM MONEY": ["901524474749", "901524236484"],
  "CM LEGAL": ["901524474751", "901523771174", "901523771175", "901523771176", "901523788616"],
  "CM CONTROL": ["901524741463"],
  "CM FLOW": ["901523770702"],
  "CM VAULT": ["901523770699", "901523770700"],
  "CM SOCIAL": []
}
```

> De agent-sleutels komen exact overeen met de tab-namen in het blad **CM AGENT CONTROL TOWER**
> (van `cm-agent-control-tower.gs`). `CM SOCIAL` staat leeg tot de MARKETING-folder bestaat; de
> feed slaat die tab dan over zonder te breken. `CM MONEY` krijgt daarnaast automatisch de open
> posten uit Moneybird (aparte feed-tak) zodra `MONEYBIRD_TOKEN` + `MONEYBIRD_ADMIN_ID` gezet zijn.

## Open beslissingen (voor Sophia / CM CONTROL)

1. **EMAIL ACTIES** (`901524830195`) — onder **CM OPS** (uitvoering) of **CM CONTROL** (routing)?
   Standaardvoorstel: **CM OPS**. Zeg het en ik voeg het lijst-ID toe.
2. **Terminale lijsten meenemen?** WON/LOST/COMPLETED staan nu uit (cockpit toont actief werk).
   Wil je afgeronde items zichtbaar op de tabs, dan voeg ik ze toe.
3. **MARKETING-folder aanmaken** zodat CM SOCIAL een lane heeft (aanmaak = ClickUp-schrijfactie,
   dus door jou/CM FLOW of via goedgekeurde connector).
4. **Space-naam-typo** `CUSTOMMMADE` → `CUSTOMMADE` corrigeren (cosmetisch).

## Guardrails toegepast in deze reconciliatie

- **Entiteitsscheiding:** FIERCE (EXTERNE_ENTITEIT) is uitgesloten; geen enkele CM-agent-tab wordt
  eruit gevoed.
- **Eén Agent Owner per taak** blijft leidend; deze map koppelt lijsten aan de eigenaar-agent
  volgens structuur B.
- **Read-only:** deze reconciliatie is uitgelezen, niet geschreven; er is niets in ClickUp gewijzigd.

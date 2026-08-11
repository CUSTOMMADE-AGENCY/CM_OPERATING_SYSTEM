# CM OPS — ClickUp Reconciliatie- & Migratieplan

> Datum: 2026-08-07 · Agent: CM OPS AGENT · Besluit: **structuur B canoniek** (compacte
> `CUSTOMMADE AGENCY`) · Uitvoering ClickUp: accounteigenaar / CM FLOW · Doc: CM VAULT/CM FLOW
> Context: `CM_OPS_SUBSTRATE_2026-08-07.md`.

## Besluit

Op 2026-08-07 is gekozen voor **structuur B** (compacte `CUSTOMMADE AGENCY`) als canonieke
ClickUp-structuur. De 6-folder `CM`-structuur (A) is gedeprecate.

## Deel 1 — Documentatie (repo-werk; in deze PR gedaan)

| Actie | Status |
|---|---|
| `CLICKUP_STRUCTURE.md` herschreven naar B (`CUSTOMMADE AGENCY`, 5 folders, eigenaars) | ✅ |
| `CLICKUP_MAPPING.md` Core rule + centrale Space → B; A→B-vertaaltabel toegevoegd | ✅ |
| A-detailsecties ("Artist Management mappings", "Master Boutique mappings") als gedeprecate gemarkeerd | ✅ |
| **Follow-up:** de A-detailmappings per workflow daadwerkelijk herbeleggen onder de B-folders (regel-voor-regel Space/folder-velden bijwerken) | ⬜ open |

## Deel 2 — ClickUp-inrichting (connector-schrijfacties; door eigenaar/CM FLOW)

> Deze stappen kan ik niet vanaf de sessie uitvoeren (schrijfacties op de ClickUp-connector zijn
> geblokkeerd). Read-only bevestiging kan ik wél leveren na uitvoering.

| # | Actie | Detail |
|---|---|---|
| 1 | **Space-naam corrigeren** | `CUSTOMMMADE AGENCY` (3× M) → `CUSTOMMADE AGENCY` (2× M) |
| 2 | **`CLIENTS` aanvullen** | Lijsten toevoegen: `Client Onboarding`, `Artist Onboarding`, `Active Client Management`, `Artist Roadmaps`, `Projects & Deliverables`, `Releases`, `Monthly Management`, `Client Meetings & Follow-up`, `Offboarding` (bestaande `ACTIVE CLIENTS`/`ON HOLD`/`COMPLETED` behouden of samenvoegen) |
| 3 | **`MARKETING`-folder aanmaken** | Met SOCIAL-lijsten conform `CLICKUP_MAPPING.md` → Folder MARKETING |
| 4 | **Provisioning retargeten** | `scripts/google-drive/provision-cm-artist.gs`: `CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID` naar de nieuwe **`Artist Onboarding`**-lijst-ID; bestaande onboarding-taken migreren (anders twee uitvoerlocaties) |
| 5 | **`FIERCE`-lijst opruimen** | Archiveren/verwijderen conform governance-regel "geen FIERCE-referenties" |
| 6 | **Losse space-lijsten herbeleggen** | `CM — FINANCE`/`OPEN POSTEN` → `OPERATIONS`; `CM — LEGAL` → `DEAL DESK`; `EMAIL ACTIES`/`SETUP` → besluit per lijst |

## Volgorde

1. Doc-canonisatie (deel 1) — gedaan.
2. ClickUp stappen 1-3 (structuur op orde).
3. Stap 4 (provisioning retarget) — **direct na** stap 2, om dubbele uitvoerlocatie te vermijden.
4. Stappen 5-6 (opruimen/herbeleggen).
5. Doc follow-up (A-detailmappings herbeleggen).

## Definition of done (OPS-substraat)

- Eén canonieke ClickUp-structuur in docs én werkelijkheid (B).
- `CLIENTS` bevat de OPS-uitvoeringslijsten; provisioning schrijft naar de juiste lijst.
- Geen A-restanten die als canoniek gelezen kunnen worden; geen `FIERCE`-lijst.

Pas hierna is de OPS **Documentatie-** en **Techniek-substraat**-basis klaar; daarna volgen de
Make-scenario's (`IDEA` → `ACTIVE`), functionele/red-team-tests, monitoring, score en approval.
OPS blijft **Level 1** tot die gates zijn afgerond.

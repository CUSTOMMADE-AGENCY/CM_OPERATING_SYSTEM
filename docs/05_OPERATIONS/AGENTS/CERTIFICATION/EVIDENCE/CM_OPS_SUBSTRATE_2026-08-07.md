# CM OPS — SUBSTRATE EVIDENCE (ClickUp)

> Datum: 2026-08-07 (v2, gecorrigeerd na review) · Agent: CM OPS AGENT · Fase: 2 (Test/oriëntatie)
> Reviewer: CM CONTROL AGENT
> Methode: read-only uitlezing van de live ClickUp-workspace via de connector
> (`clickup_get_workspace_hierarchy`, max_depth 2). **Niets gewijzigd.**
> Bronnen: `CLICKUP_STRUCTURE.md` én `CLICKUP_MAPPING.md` (beide door `CM_OPS_AGENT.md` §09
> als OPS-bron aangewezen).

## 1. Waarom deze evidence

OPS heeft — anders dan VAULT — **geen losse uitvoerbare code** en **geen gebouwde
automatiseringen** (de 3 Make-scenario's staan op `IDEA`). OPS' uitvoering leunt op **ClickUp**.
De Techniek-/Documentatie-gate van OPS begint dus bij: **klopt het ClickUp-substraat met de
gedocumenteerde structuur?** Antwoord: er is een dieper probleem — **de documentatie spreekt
zichzelf tegen**, en de werkelijkheid volgt maar één van de twee versies.

## 2. Deployed ClickUp-structuur (werkelijkheid)

```text
Workspace
└── Space: CUSTOMMMADE AGENCY            (id 90154573019 — let op: 3× M in de naam)
    ├── (losse lijsten) CUSTOMMADE AGENCY SETUP · CM — FINANCE · CM — LEGAL · FIERCE · EMAIL ACTIES
    ├── PIPELINE      → LEADS · ACTIVE DEALS · WON · LOST
    ├── CLIENTS       → ACTIVE CLIENTS · ON HOLD · COMPLETED
    ├── OPERATIONS    → SOPS · TEMPLATES · AUTOMATIONS · OPEN POSTEN · CM — AI REVIEW
    └── DEAL DESK     → CATALOG ACQUISITIONS · ARTIST DEALS · RELATIONSHIPS · ASSET INVENTORY
```

## 3. Twee gedocumenteerde structuren — die elkaar tegenspreken

`CM_OPS_AGENT.md` §09 wijst **beide** documenten als OPS-bron aan, maar ze beschrijven een
**andere** ClickUp-structuur:

**A. `CLICKUP_STRUCTURE.md`** (en de eerste helft van `CLICKUP_MAPPING.md`)
- Space **`CM`**; 6 folders: Artist Management · Master Boutique / Deals · Clients · Pipeline ·
  Shared Operations · Governance & Systems. Artist Management = **eigen folder**.

**B. `CLICKUP_MAPPING.md` — "Compacte ClickUp-mapping voor CM_OS agents"**
- Space **`CUSTOMMADE AGENCY`**; 5 folders: **PIPELINE · CLIENTS · OPERATIONS · DEAL DESK ·
  MARKETING**. Artist onboarding/management = **lijsten ónder `CLIENTS`** (`Artist Onboarding`,
  `Artist Roadmaps`, `Monthly Management`, …), owner **CM OPS AGENT**.

➡️ **Dit is een source-of-truth-conflict** (governance vereist één bron per onderwerp). Dat is
de **primaire** OPS-documentatie-bevinding — niet los "doc vs. werkelijkheid".

**Let op — het conflict zit óók binnen één bestand.** `CLICKUP_MAPPING.md` bevat **beide**
structuren: de "Core rule" (regels 9-23) en de detail-workflow-mappings (bv. regels 115-121:
Space `CM`, Folder `Artist Management`, List `AM - [Artist] - Artist Onboarding`) volgen **A**,
terwijl de tweede helft ("Compacte ClickUp-mapping") **B** volgt. Alleen `CLICKUP_STRUCTURE.md`
archiveren lost het conflict dus **niet** op — bij keuze voor B moeten ook de A-secties ín
`CLICKUP_MAPPING.md` worden herschreven/gedeprecate.

## 4. Welke structuur matcht de werkelijkheid? → de compacte mapping (B)

De deployment volgt **B** (compacte structuur), niet A. Vergelijking deployed ↔ B:

| Onderdeel | Compacte mapping (B) | Deployed | Bevinding |
|---|---|---|---|
| Space-naam | `CUSTOMMADE AGENCY` (2× M) | `CUSTOMMMADE AGENCY` (3× M) | **typefout in de deployment** |
| Folders | PIPELINE · CLIENTS · OPERATIONS · DEAL DESK · **MARKETING** | PIPELINE · CLIENTS · OPERATIONS · DEAL DESK | **MARKETING ontbreekt** (SOCIAL-home) |
| CLIENTS-lijsten | Client Onboarding · Artist Onboarding · Active Client Management · Artist Roadmaps · Projects & Deliverables · Releases · Monthly Management · Client Meetings & Follow-up · Offboarding (9) | ACTIVE CLIENTS · ON HOLD · COMPLETED (3) | **CLIENTS onderbouwd**: de OPS-onboarding/management/roadmap-lijsten ontbreken |
| Artist Management | lijsten **onder CLIENTS** | (nog niet aanwezig, want CLIENTS onderbouwd) | — |
| FIERCE | — | losse lijst `FIERCE` | legacy, in strijd met governance-regel "geen FIERCE-referenties" |

## 5. Correctie t.o.v. v1 van dit record

De eerste versie vergeleek alleen met `CLICKUP_STRUCTURE.md` (A) en concludeerde ten onrechte
"**geen Artist Management-home**" + adviseerde een **aparte AM-folder**. Dat is onjuist: de
compacte mapping (B) legt AM **onder `CLIENTS`**. Een aparte AM-folder zou een **parallelle
structuur** creëren en wordt daarom **afgeraden**. De echte gap is dat de deployed `CLIENTS`
de gedocumenteerde OPS-lijsten mist, plus de ontbrekende `MARKETING`-folder.

## 5a. Live provisioning-engine wijst naar `ACTIVE CLIENTS`

`scripts/google-drive/provision-cm-artist.gs` (bestaat, actief) draait **artist-onboarding**
en hard-codeert `CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID = '901523770695'` — dat is de deployed
`ACTIVE CLIENTS`-lijst. Het script maakt daar de onboarding **parent-task én subtasks** aan.

Gevolg voor de reconciliatie: de compacte mapping (B) beschrijft een **aparte
`Artist Onboarding`-lijst**, maar de werkelijkheid draait onboarding nu in `ACTIVE CLIENTS`.
Een nieuwe `Artist Onboarding`-lijst toevoegen **zonder** dit script te retargeten/migreren
levert **twee uitvoerlocaties** op en laat de nieuwe lijst leeg. Retargeting + migratie van
`provision-cm-artist.gs` hoort dus expliciet bij de deployment-reconciliatie.

## 6. Impact op de OPS-gates

- **Documentatie-gate:** geblokkeerd door het **source-of-truth-conflict** tussen A en B —
  eerst één canonieke structuur kiezen.
- **Techniek-gate:** OPS' 3 Make-scenario's staan op `IDEA`; de `CLIENTS`-folder mist de
  OPS-uitvoeringslijsten. Gate ver van schoon.
- **Functionele test / Red team / Monitoring / Score / Approval:** nog niet begonnen.

OPS blijft **Level 1**.

## 7. Beslispunten (CM FLOW / OPS / Sophia)

> **BESLUIT 2026-08-07: structuur B (compacte `CUSTOMMADE AGENCY`) is canoniek.** Uitwerking in
> `CM_OPS_CLICKUP_RECONCILIATION_PLAN.md`. Beslispunt 1 hieronder is hiermee gesloten; 2-6 zijn
> de uitvoeringsstappen.

1. **Source of truth:** ~~kies A of B~~ → **B gekozen** (compacte `CUSTOMMADE AGENCY`).
   Deprecaten betekent niet
   alleen `CLICKUP_STRUCTURE.md` archiveren, maar **ook de A-secties ín `CLICKUP_MAPPING.md`
   herschrijven** (Core rule 9-23 + de per-workflow A-mappings).
2. **Space-naam:** typefout `CUSTOMMMADE` (3× M) → `CUSTOMMADE` (2× M) in ClickUp corrigeren.
3. **`CLIENTS` aanvullen** met de OPS-lijsten uit B (Client/Artist Onboarding, Roadmaps,
   Monthly Management, Meetings & Follow-up, Offboarding).
4. **Provisioning-engine retargeten:** `provision-cm-artist.gs` (`CM_CLICKUP_ACTIVE_CLIENTS_LIST_ID`)
   naar de canonieke onboarding-lijst laten wijzen, met migratie van bestaande onboarding-taken —
   anders twee uitvoerlocaties.
5. **`MARKETING`-folder** toevoegen (SOCIAL-home) of bewust weglaten.
6. **`FIERCE`-lijst** opruimen/archiveren conform governance.

## 8. Openstaand voor OPS Level 3

1. Documentatie-conflict (A vs. B) beslecht; één canonieke ClickUp-structuur (beslispunt 1).
2. Deployment gelijkgetrokken: space-naam, `CLIENTS`-lijsten, provisioning-retarget,
   `MARKETING`, `FIERCE` (beslispunten 2-6).
3. De 3 OPS Make-scenario's van `IDEA` → `TEST` → `ACTIVE` (CM FLOW), binnen autonomy.
4. Functioneel testrapport + red-team (nadruk: actie buiten scope — contract/publish/finance).
5. Monitoring op ACTIVE-scenario's; score ≥90; Sophia-approval productiestatus.

**Netto:** OPS' uitvoeringssubstraat bestaat en volgt de compacte mapping, maar de twee
ClickUp-bronnen spreken elkaar tegen en de deployment is onderbouwd. Conflict beslechten +
`CLIENTS` afbouwen + scenario-bouw zijn de eerste gates. OPS blijft **Level 1**.

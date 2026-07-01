# CM DRIVE READINESS AUDIT

## Doel

De CM Drive Readiness Audit is de officiële read-only controleprocedure voor de live Google Drive-omgeving van CM voordat automatische of semi-automatische Drive-acties worden toegestaan.

## Scope

Deze audit controleert uitsluitend structuur, governance, compliance en risico's. Tijdens de audit worden geen bestanden of mappen verplaatst, hernoemd, verwijderd, gedeeld of automatisch gewijzigd.

## Source of truth

- `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
- `docs/00_GOVERNANCE/DRIVE_STRUCTURE.md`
- `docs/04_SYSTEMS/DRIVE_MAPPING.md`
- `docs/02_ARTIST_MANAGEMENT/ARTIST_FOLDER_STANDARD.md`
- `docs/03_SHARED_SERVICES/CLIENT_FOLDER_STANDARD.md`

## Complete audit-baseline

```text
OS_CUSTOMMADE
├── 00_ADMIN
│   ├── 01_INBOX_REVIEW
│   ├── 02_GOVERNANCE_REFERENCE
│   ├── 03_TEMPLATES
│   ├── 04_REPORTS
│   └── 05_APPROVALS
├── 01_MASTER_BOUTIQUE
├── 02_ARTIST_MANAGEMENT
│   └── [ARTIST_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_STRATEGY
│       ├── 04_RELEASES
│       ├── 05_BOOKING
│       ├── 06_FINANCE
│       ├── 07_SOCIALMEDIA
│       ├── 08_PRESS_EPK
│       └── 09_ARCHIVE
├── 03_CLIENTS
│   └── [CLIENT_OR_PARTNER_NAME]
│       ├── 01_ADMIN
│       ├── 02_CONTRACT
│       ├── 03_BRIEF_SCOPE
│       ├── 04_DELIVERABLES
│       ├── 05_COMMUNICATION
│       ├── 06_FINANCE
│       └── 09_ARCHIVE
├── 04_DEALS
│   └── [DEAL_OR_ASSET_NAME]
│       ├── 00_START_HIER
│       ├── 01_RECHTEN_REGISTER
│       ├── 02_CONTRACTEN_BEWIJS
│       ├── 03_WAARDERING_VERKOOPPAKKET
│       ├── 04_OUTREACH_CLICKUP
│       └── 99_ARCHIEF
├── 05_OPERATIONS
├── 06_FINANCE
├── 07_LEGAL
│   ├── APPROVALS
│   │   └── CM_APPROVAL_REGISTER
│   ├── CONTRACTS
│   ├── LEGAL_REVIEW
│   └── EVIDENCE
├── 08_MARKETING
├── 09_CONTENT
└── 99_ARCHIVE
    ├── ARTIST_MANAGEMENT
    ├── CLIENTS
    ├── DEALS
    ├── REVIEW_HOLD_OLD_STRUCTURE
    ├── LEGACY_ROOTS
    └── MIGRATION_LOGS
```

## Audit checklist

### Root

□ `OS_CUSTOMMADE` bestaat.

□ `OS_CUSTOMMADE` is de enige actieve operationele CM Drive-root.

□ De rootlaag bevat exact `00_ADMIN`, `01_MASTER_BOUTIQUE`, `02_ARTIST_MANAGEMENT`, `03_CLIENTS`, `04_DEALS`, `05_OPERATIONS`, `06_FINANCE`, `07_LEGAL`, `08_MARKETING`, `09_CONTENT` en `99_ARCHIVE`.

□ Geen oude roots of parallelle rootstructuren zijn actief.

### 00_ADMIN

□ `00_ADMIN` bevat exact `01_INBOX_REVIEW`, `02_GOVERNANCE_REFERENCE`, `03_TEMPLATES`, `04_REPORTS` en `05_APPROVALS`.

□ Inbox review bevat alleen triage/hold materiaal en geen permanente dossierbestanden.

□ Templates zijn werkbare kopieën; GitHub blijft template source of truth.

### Artist Management

□ Alle artists staan direct onder `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT/[ARTIST_NAME]`.

□ `02_ARTIST_MANAGEMENT` bevat geen directe operationele submappen zoals `01_ADMIN` of `02_CONTRACT`.

□ Iedere artistfolder bevat exact `01_ADMIN`, `02_CONTRACT`, `03_STRATEGY`, `04_RELEASES`, `05_BOOKING`, `06_FINANCE`, `07_SOCIALMEDIA`, `08_PRESS_EPK` en `09_ARCHIVE`.

□ Geen statuslagen bestaan onder `02_ARTIST_MANAGEMENT`; ClickUp beheert status en pipeline.

□ Geen artists staan onder `03_CLIENTS`.

### Clients

□ Alle client- en partnerdossiers staan direct onder `OS_CUSTOMMADE/03_CLIENTS/[CLIENT_OR_PARTNER_NAME]`.

□ `03_CLIENTS` bevat uitsluitend clients, partners, merken, bedrijven, sponsors, opdrachtgevers of media partners.

□ Iedere client- of partnerfolder bevat exact `01_ADMIN`, `02_CONTRACT`, `03_BRIEF_SCOPE`, `04_DELIVERABLES`, `05_COMMUNICATION`, `06_FINANCE` en `09_ARCHIVE`.

□ Clientdossiers bevatten geen artistdossiers en geen dealcases die onder `04_DEALS` thuishoren.

### Deals

□ Alle deal- en assetcases staan direct onder `OS_CUSTOMMADE/04_DEALS/[DEAL_OR_ASSET_NAME]`.

□ Iedere deal- of assetcase bevat exact `00_START_HIER`, `01_RECHTEN_REGISTER`, `02_CONTRACTEN_BEWIJS`, `03_WAARDERING_VERKOOPPAKKET`, `04_OUTREACH_CLICKUP` en `99_ARCHIEF`.

□ Oude Engelse dealstructuren zijn niet als standaardstructuur actief.

□ Data Room-, LOI-, APA-, Closing- en Success Fee-mappen bestaan alleen wanneer de deal aantoonbaar de due diligence fase heeft bereikt.

### Legal

□ `07_LEGAL` bevat exact `APPROVALS`, `CONTRACTS`, `LEGAL_REVIEW` en `EVIDENCE`.

□ Het approval register bestaat op `OS_CUSTOMMADE/07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

□ Er is geen tweede of alternatief approval register in actief gebruik.

□ Contracten en bewijsstukken staan in de juiste dossiercontext of legal submap.

### Archive

□ `99_ARCHIVE` bevat exact `ARTIST_MANAGEMENT`, `CLIENTS`, `DEALS`, `REVIEW_HOLD_OLD_STRUCTURE`, `LEGACY_ROOTS` en `MIGRATION_LOGS`.

□ `99_ARCHIVE` wordt niet actief gebruikt als werkmap.

□ Inactieve artists staan onder `99_ARCHIVE/ARTIST_MANAGEMENT`.

□ Inactieve clients staan onder `99_ARCHIVE/CLIENTS`.

□ Afgeronde of superseded deals staan onder `99_ARCHIVE/DEALS` of in de case-eigen `99_ARCHIEF`.

□ Migratiebewijs staat onder `MIGRATION_LOGS`.

### Sharing en kwaliteit

□ Geen ongecontroleerde open shares.

□ Externe shares zijn dossiermatig verklaarbaar.

□ Gevoelige bestanden staan niet in algemene of verkeerd gedeelde mappen.

□ Losse bestanden op rootniveau zijn geïdentificeerd.

□ Duplicaten zijn gemarkeerd voor owner review en niet automatisch samengevoegd of verwijderd.

## Scoremodel

| Score | Kleur | Betekenis |
|---|---|---|
| 95-100% | Groen | Gereed voor volgende governance review; geen critical issues. |
| 80-94% | Oranje | Beperkt gereed; verbeteracties nodig vóór automatische acties. |
| 0-79% | Rood | Niet gereed; NO-GO voor automatische Drive-acties. |

Een critical issue veroorzaakt altijd NO-GO, ook wanneer de totaalscore boven 95% ligt.

## Critical findings

Voorbeelden van critical findings zijn: ontbrekende of verkeerde root, parallelle actieve rootstructuur, artists onder `03_CLIENTS`, ontbrekend approval register, open shares op gevoelige documenten of automatische mutaties zonder approval.

## Output

Na iedere audit wordt een rapport aangemaakt als `CM_DRIVE_READINESS_REPORT.md` met minimaal samenvatting, auditdatum, auditor, scope, bewijs per controlepunt, score, risico's, GO/NO-GO advies en benodigde vervolgacties.

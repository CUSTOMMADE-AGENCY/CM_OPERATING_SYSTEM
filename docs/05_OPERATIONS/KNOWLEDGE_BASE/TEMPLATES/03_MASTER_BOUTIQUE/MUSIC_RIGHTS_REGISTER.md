<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — MUSIC RIGHTS REGISTER

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template / Rights Register |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM LEGAL AGENT |
| Support agents | CM PROSPECT AGENT · CM MONEY AGENT |
| Status | ACTIVE — V2.2 |
| Versie | V2.2 |
| Datum | AUGUSTUS 2026 |
| Risico | LEGAL / FINANCIAL |
| Approval | Ja — vóór buyer-facing of diligencegebruik |

## 02 · DOEL

Gestructureerde rechten-dataset per werk/asset voor chain of title, catalog value, rights audit en due diligence. De registerstructuur legt master-, publishing-, neighboring-, financiële en verificatiegegevens vast zonder brede onprintbare megatabel.

## 03 · GEBRUIKSMOMENT

- Catalog sale of master resale.
- Rights brokerage.
- Deal qualification.
- Due diligence / rights audit.
- Catalog valuation.

## 04 · BENODIGDE INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Werken/catalogus | Ja | Distributor / repertoirebron |
| Contract-/chain-of-title bewijs | Ja | 02_CONTRACT / Legal evidence |
| Royalty statements | Indien valuation/deal | Finance / royaltybron |
| Metadata | Ja | Distributor / PRO/CMO / repertoirebron |

## 05 · WERKTEMPLATE

### WERK — IDENTITEIT

| Werk-ID | Titel | Artist | ISRC | ISWC | Releasedatum |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### WERK — MASTERRECHTEN

| Werk-ID | Master owner | Master % | Label | Distributor | Territory | Term |
|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

### WERK — PUBLISHING

| Werk-ID | Writer | Writer share | Publisher | Publishing share | PRO/CMO |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### WERK — NEIGHBORING RIGHTS

| Werk-ID | Rechthebbende/performer | Performer share | CMO | Territory | Opmerking |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

### WERK — BEPERKINGEN & ECONOMIE

| Werk-ID | Restricties | Exclusiviteit | Advance | Recoupment balance | Lien/encumbrance | Dispute/claim |
|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

### WERK — VERIFICATIE

| Werk-ID | Brondocument | Evidence-locatie | Verificatiestatus | Laatst geverifieerd | Geverifieerd door |
|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD |

_Alle blokken vormen via `Werk-ID` inhoudelijk één rights-record. Een asset met meerdere writers/rechthebbenden mag meerdere regels binnen het betreffende blok gebruiken met dezelfde Werk-ID._

### GECONTROLEERDE WAARDEN

| Veld | Toegestane waarden |
|---|---|
| Verificatiestatus | `UNVERIFIED` · `PARTIAL` · `VERIFIED` · `BLOCKED` |
| Exclusiviteit | `EXCLUSIVE` · `NON_EXCLUSIVE` · `TBD` |

## 06 · BESLISPOORTEN

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen rechtenclaim zonder benoemde bron/evidence of expliciet `UNVERIFIED`.
>
> **02** — Buyer-facing/diligencegebruik vereist passende verificatiestatus; `BLOCKED` mag niet door.
>
> **03** — Disputes, claims en liens/encumbrances worden expliciet gemarkeerd.
>
> **04** — Shares worden niet door AI sluitend gemaakt; ontbrekende of conflicterende shares = `TBD`/finding.

## 07 · RESULTAAT

- Gestructureerd rights register.
- Input voor Rights Audit, Deal Memo, Valuation en Data Room.

## 08 · KWALITEITSCONTROLE

- Alle blokken koppelen via Werk-ID.
- ISRC/ISWC aanwezig of expliciet `TBD`.
- Shares zijn brononderbouwd; geen geforceerde 100%-correctie door AI.
- Verificatiestatus en evidence-locatie zijn aanwezig.
- Open claims/restricties zijn zichtbaar.

## 09 · GOEDKEURING

CM LEGAL AGENT vóór buyer-facing of diligencegebruik; verdere approval volgens deal-governance.

## 10 · OVERDRACHT

- → Rights Audit
- → Deal Memo
- → Valuation
- → Data Room

## 11 · LEIDENDE BRON

GitHub = register-specificatie · Drive = werkbare registerkopie/evidence · ClickUp = uitvoering · Moneybird = financiële waarheid. Legal evidence/contracten blijven bron voor rechtenclaims.

## 12 · OPSLAG

Drive: `04_DEALS/[DEAL]/01_RECHTEN_REGISTER` · `YYYY-MM-DD_[ASSET]_MUSIC_RIGHTS_REGISTER_vX.Y`

## 13 · AI-INSTRUCTIES

- Verzin nooit ownership, shares, ISRC/ISWC, territory, term, recoupment of verificatie; onbekend = `TBD`.
- Een claim zonder bewijs mag niet `VERIFIED` worden.
- Behoud A4-portret; gebruik de gekoppelde Werk-ID-blokken, nooit één 20+ kolommen brede tabel.
- Financial actuals komen uitsluitend uit benoemde statement-/Moneybird-bronnen.
- Geen getekende contracten of vertrouwelijke evidence in de GitHub-specificatie.

## 14 · AUTOMATISERINGSKOPPELINGEN

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Werk toegevoegd/gewijzigd | Make → rights dataset | Record bijwerken | Werk-ID→Record ID, Titel→Title, ISRC→ISRC, ISWC→ISWC |
| Verificatiestatus `BLOCKED` | Make → ClickUp | LEGAL-finding | Werk-ID→Reference, Verificatiestatus→Status, Brondocument→Source |
| Dispute/claim of lien aanwezig | Make → ClickUp | Legal-reviewtaak | Werk-ID→Reference, Dispute/claim→Description, Lien/encumbrance→Description |

## 15 · WIJZIGINGSLOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2. | CM LEGAL AGENT |
| 2026-08-10 | V2.2 | 29-koloms register opgesplitst in A4-portret Werk-ID-blokken voor identiteit, master, publishing, neighboring, economie en verificatie; controlled statuses en diligence mappings toegevoegd. | CM LEGAL AGENT |

---

_Leidende bron: GitHub. Drive bevat uitsluitend werkbare registerkopieën/evidence._

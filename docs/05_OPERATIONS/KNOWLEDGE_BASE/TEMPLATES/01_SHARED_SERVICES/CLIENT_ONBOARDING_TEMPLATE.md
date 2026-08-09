<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — CLIENT ONBOARDING TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Shared Services |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM OPS AGENT |
| Support agents | CM VAULT AGENT · CM MONEY AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | MEDIUM |
| Approval | Ja — vóór live gebruik (Sophia bij client-facing) |

## 02 · PURPOSE

Volledige onboarding-gate voor een nieuwe client of artist: elke poort moet dicht voordat het dossier operationeel live gaat. Grotendeels automatiseerbaar.

## 03 · TRIGGER

- Nieuwe client of artist wordt operationeel ingericht.
- Herstart van een samenwerking.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Getekend contract | Ja | 02_CONTRACT |
| Scope | Ja | Proposal |
| Billing / Moneybird | Ja | 06_FINANCE |
| Toegangen | Ja | CM VAULT AGENT |

## 05 · WORKING TEMPLATE

### Onboarding-poorten

| Poort | Onderdeel | Status | Eigenaar | Bewijs/locatie |
|---|---|---|---|---|
| 1 | Contract getekend | TBD | CM LEGAL | 02_CONTRACT |
| 1 | Scope bevestigd | TBD | CM OPS | Proposal |
| 2 | Billing details + Moneybird-relatie | TBD | CM MONEY | 06_FINANCE |
| 2 | Drive-dossier aangemaakt | TBD | CM OPS | Drive |
| 2 | ClickUp-dossier aangemaakt | TBD | CM FLOW | ClickUp |
| 2 | Gmail/contact ingericht | TBD | CM OPS | Gmail |
| 3 | Rechten/document request | TBD | CM VAULT | Rights Register |
| 3 | Stakeholder list | TBD | CM OPS | Contact Sheet |
| 3 | Communication rhythm | TBD | CM OPS | Kickoff |
| 3 | KPI baseline | TBD | CM OPS | KPI Template |
| 3 | Roadmap | TBD | CM OPS | Roadmap |
| 4 | Privacy/access review | TBD | CM CONTROL | Access notes |
| 4 | Approval vóór live | TBD | Sophia | Approval Evidence |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Geen live gebruik zolang één poort openstaat.
>
> **02** — Poort 4 (approval) verplicht vóór go-live.
>
> **03** — Geen wachtwoorden of clientdata in de specificatie.

## 07 · OUTPUT

- Volledig ingericht, gecontroleerd dossier dat operationeel live kan.

## 08 · QUALITY CONTROL

- Alle poorten dicht of expliciet TBD met eigenaar.
- Approval vastgelegd.

## 09 · APPROVAL

Vóór live gebruik — Sophia / CM CONTROL bij client-facing.

## 10 · HANDOFF

- → Operationele workflow
- → Roadmap + KPI

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `[DOSSIER]/01_ADMIN` · `YYYY-MM-DD_[ENTITY]_ADMIN_ONBOARDING_vX.Y`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Poort afgevinkt | Make → ClickUp | Status updaten | Poort→Subtask |
| Alle poorten dicht | Make → Slack/Gmail | Go-live signaal | Dossier→Notificatie |
| Onboarding gestart | Make → Moneybird | Relatie aanmaken | Client→Contact |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM OPS AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._

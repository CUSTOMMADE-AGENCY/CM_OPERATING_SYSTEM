<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — BUYER PIPELINE TEMPLATE

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Master Boutique |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM PROSPECT AGENT |
| Support agents | CM FLOW AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij pipelinewijziging |

## 02 · PURPOSE

Buyer-outreach en dealpipeline per asset: welke kopers in welke fase, met waarde, kans en volgende actie. Spiegelt de ClickUp-pipeline (geen duplicatie van uitvoering).

## 03 · TRIGGER

- Buyer outreach, dealopvolging, Master Boutique pipeline.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Deal Memo + Valuation | Ja | Deal Memo |
| Buyer leads | Ja | CRM/outreach |

## 05 · WORKING TEMPLATE

### Pipeline

| Buyer | Type | Asset | Value | Probability | Stage | NDA | Qualification | Next action | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Stage-overgang naar Diligence → NDA + Qualification vereist.
>
> **02** — Pipeline-status wordt in ClickUp beheerd; dit is de definitie/naslag.
>
> **03** — Value boven drempel → LEGAL + Sophia.

## 07 · OUTPUT

- Actuele buyer-pipeline gekoppeld aan ClickUp.

## 08 · QUALITY CONTROL

- Elke buyer heeft stage en next action.

## 09 · APPROVAL

Ja — bij pipelinewijziging.

## 10 · HANDOFF

- → ClickUp (pipeline)
- → Data Room
- → Deal Memo

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Drive: `04_DEALS/[DEAL]/04_OUTREACH_CLICKUP`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Buyer toegevoegd | Make → ClickUp | Pipeline-kaart | Buyer→Card, Stage→Status |
| Stage change | Make → ClickUp | Status + taak | Stage→Status |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM PROSPECT AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._

<img src="../../../../00_GOVERNANCE/BRAND/CM_LOGO.png" alt="Custommade Agency" width="72" align="right" />

# CUSTOMMADE AGENCY — EMAIL COMMUNICATION STANDARD

## 01 · DOCUMENT CONTROL

| Veld | Waarde |
|---|---|
| Document type | Operational Template |
| Onderdeel van | CM Template Library / Gmail Templates |
| Entity | Custommade Agency Int. B.V. |
| Owner agent | CM CONTROL AGENT |
| Support agents | CM VAULT AGENT · CM SOCIAL AGENT |
| Status | ACTIVE — V2 |
| Versie | V2.0 |
| Datum | JULI 2026 |
| Risico | MEDIUM |
| Approval | Ja — bij externe templates |

## 02 · PURPOSE

Centrale e-mailcommunicatie-standaard voor info@custommade.agency. Tone-of-voice is centraal; inhoudelijke autoriteit is domeingebonden — niet alle mail valt onder Social.

## 03 · TRIGGER

- Opstellen of aanpassen van e-mail/Gmail-templates.

## 04 · INPUT

| Input | Verplicht | Bron |
|---|---|---|
| Domein/onderwerp | Ja | Aanvraag |
| Huisstijl/tone | Ja | Brand |

## 05 · WORKING TEMPLATE

### Tone-of-voice (centraal)

| Onderdeel | Standaard |
|---|---|
| Stem | TBD |
| Opening | TBD |
| Kern | TBD |
| Afsluiting | TBD |
| Handtekening | TBD |

### Domein-autoriteit

| Domein | Owner agent | Type mail |
|---|---|---|
| OPS | CM OPS AGENT | Clients/artists |
| PROSPECT | CM PROSPECT AGENT | Deals/partnerships |
| LEGAL | CM LEGAL AGENT | Rights/contracten |
| MONEY | CM MONEY AGENT | Finance/incasso |
| SOCIAL | CM SOCIAL AGENT | PR/media/marketing |

## 06 · DECISION GATES

> **NIET-ONDERHANDELBAAR**
>
> **01** — Tone-of-voice altijd volgens huisstijl.
>
> **02** — Inhoudelijke autoriteit volgt het domein, niet automatisch Social.
>
> **03** — Externe templates → approval.

## 07 · OUTPUT

- Consistente, domein-correcte e-mailtemplates.

## 08 · QUALITY CONTROL

- Domein-owner bepaald.
- Huisstijl gevolgd.

## 09 · APPROVAL

Ja — bij externe templates (CM CONTROL / domein-owner).

## 10 · HANDOFF

- → Gmail-templates
- → Domein-agent

## 11 · SYSTEM OF RECORD

GitHub = spec · Drive = werkkopie · ClickUp = uitvoering · Moneybird = financiële waarheid.

## 12 · STORAGE

Gmail / Drive: `[DOSSIER]/05_COMMUNICATION`

## 13 · AI INSTRUCTIONS

- Controleer eerst de Template Index (00_TEMPLATE_INDEX.md); maak geen parallelle of dubbele template.
- Verzin nooit ontbrekende informatie; onbekend of nog te bepalen = TBD.
- Geen clientdata, vertrouwelijke gegevens of getekende documenten in de template-specificatie.
- Log gebruik in TEMPLATE_USAGE_REPORT; markeer afwijkingen in TEMPLATE_GAP_LOG.

## 14 · AUTOMATION HOOKS

| Trigger | Systeem | Actie | Field mapping |
|---|---|---|---|
| Template gewijzigd | Make → Gmail | Template-update | Domein→Owner |

## 15 · CHANGELOG

| Datum | Versie | Wijziging | Owner |
|---|---|---|---|
| 2026-07-27 | V2.0 | Herbouwd naar Template Architecture V2 (15 secties, werk-tabellen). | CM CONTROL AGENT |

---

_System of Record: GitHub. Drive bevat uitsluitend werkbare kopieën._

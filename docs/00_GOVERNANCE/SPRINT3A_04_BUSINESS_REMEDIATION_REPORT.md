# Sprint 3A — 04_BUSINESS Remediation Report

## Doel

Dit remediation report legt de actuele child-scan van `OS_CUSTOMMADE/04_BUSINESS` vast en vertaalt elk aangetroffen legacy business/admin-item naar een voorgestelde doelroot of review-hold.

Dit document is uitsluitend een remediation report. Er worden geen Drive-bestanden verplaatst, geen mappen aangemaakt, geen items gearchiveerd en geen bestanden verwijderd.

## Conclusie actuele child-scan

`04_BUSINESS` is geen client/deal-root. De actuele scan classificeert `04_BUSINESS` als een legacy business/admin-root met de volgende hoofdonderdelen:

- `01_FINANCE`
- `02_LEGAL`
- `03_HR`
- `04_CURSUS_MASTERCLASSES`

Daarmee is een bulk-migratie naar `03_CLIENTS` of `04_DEALS` niet toegestaan. Remediation moet itemgericht plaatsvinden met finance-checks, legal-checks en owner sign-off waar vereist.

## Niet-onderhandelbare remediation-regels

1. Geen bestanden verplaatsen.
2. Geen mappen aanmaken.
3. Geen archivering.
4. Geen deletes.
5. Alleen dit remediation report vastleggen.
6. Finance items vereisen een finance-check voordat een doelpad definitief kan worden goedgekeurd.
7. Legal items vereisen een legal-check voordat een doelpad definitief kan worden goedgekeurd.
8. De `04_BUSINESS` root mag pas worden gesloten na owner sign-off.

## Remediation mapping per item

| Actueel item onder `OS_CUSTOMMADE/04_BUSINESS` | Voorgestelde bestemming / status | Check vereist | Remediation-notitie |
|---|---|---|---|
| `01_FINANCE/BELASTINGDIENST` | `06_FINANCE/BELASTINGDIENST` | Finance-check | Belastingdienst-content hoort onder finance, maar pas na finance-validatie. |
| `01_FINANCE/BANK` | `06_FINANCE/BANK` | Finance-check | Bank-content hoort onder finance, maar vereist controle op volledigheid, toegang en bronstatus. |
| `01_FINANCE/INBOX_MONEYBIRD` | `HOLD_FINANCE_REVIEW` | Finance-check | Moneybird-gerelateerde inbox blijft hold totdat is vastgesteld wat in Moneybird leidend is en wat Drive alleen als verwijzing mag bevatten. |
| `01_FINANCE/ADMIN CM CHAT` | `HOLD_FINANCE_OR_OPERATIONS_REVIEW` | Finance-check en operations-review | Gemengde admin/chat-context kan finance of operations zijn; niet verplaatsen zonder classificatie. |
| `01_FINANCE/CM_FINANCE` | `06_FINANCE` | Finance-check | Algemene CM-finance hoort bij finance, maar alleen na controle op Moneybird-status en eventuele substructuur. |
| `01_FINANCE/ADMIN` | `HOLD_ADMIN_OR_FINANCE_REVIEW` | Finance-check en admin-review | Admin kan operationeel of financieel zijn; bestemming blijft hold zonder owner-besluit. |
| `02_LEGAL/CONTRACTEN` | `07_LEGAL/CONTRACTEN` | Legal-check | Contracten vereisen legal-validatie op signed/latest-versies, rechten, toegang en dossiercontext. |
| `03_HR/• INTERN` | `05_OPERATIONS/HR` | Owner-review | Interne HR-content hoort bij operations/HR, met aandacht voor privacy en toegang. |
| `03_HR/Uren Registratie CM.xlsx` | `05_OPERATIONS/HR` | Owner-review | Urenregistratie is HR/operations-content; privacy en actuele bronstatus controleren. |
| `04_CURSUS_MASTERCLASSES/MASTERCLASS` | `05_OPERATIONS/TRAINING` | Owner-review | Masterclass-content wordt als training behandeld en niet als master rights/deal-context. |
| `04_CURSUS_MASTERCLASSES/• CURSUS` | `05_OPERATIONS/TRAINING` | Owner-review | Cursus-content wordt als training behandeld en niet als deal-, client- of finance-context. |

## Review- en sluitingsvoorwaarden

Voordat remediation mag worden uitgevoerd of `04_BUSINESS` als root mag worden gesloten, moeten minimaal de volgende voorwaarden zijn voldaan:

- Alle finance-items zijn door de finance-owner gecontroleerd en goedgekeurd.
- Alle legal-items zijn door de legal-owner gecontroleerd en goedgekeurd.
- Gemengde admin-, chat- en review-hold items hebben een expliciete owner-classificatie gekregen.
- HR- en training-items zijn gevalideerd op privacy, toegang en operationele bronstatus.
- Er is schriftelijke owner sign-off voor het sluiten van de legacy root `04_BUSINESS`.

## Remediation status

De actuele scan ondersteunt gerichte remediation naar `06_FINANCE`, `07_LEGAL` en `05_OPERATIONS`, maar alleen onder de hierboven genoemde checks en zonder directe Drive-mutaties vanuit dit report.

GEREED VOOR 04_BUSINESS REMEDIATION REVIEW

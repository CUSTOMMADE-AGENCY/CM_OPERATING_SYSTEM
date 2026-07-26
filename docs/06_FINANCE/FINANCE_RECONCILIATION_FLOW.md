# **FINANCE RECONCILIATION FLOW**

## **Doel**

Deze Workflow beschrijft de periodieke finance-reconciliatie: het afstemmen van Moneybird-gegevens met bankafschriften, Open Posten en cashflow-werkbestanden in `06_FINANCE`. Doel is dat financiële discrepanties tijdig worden gesignaleerd en geëscaleerd naar Sophia.

---

## **Reikwijdte**

Deze Workflow wordt maandelijks uitgevoerd door CM MONEY AGENT. De reconciliatie dekt: bankafschriften versus Moneybird-registraties, Open Posten-controle en cashflow-actualisatie. Belastingdienst-indiening valt buiten deze Workflow (→ Finance Intake SOP).

---

## **Eigenaar**

**CM MONEY AGENT** is eigenaar van deze Workflow. Sophia is approver voor financiële correcties en externe communicatie (Level 4).

---

## **Inputs**

- Maandelijkse Moneybird-export (Open Posten, kasstroomoverzicht, factuuropgave)
- Bankafschrift van de CM-bedrijfsrekening over de betreffende periode
- Vorige cashflow-werkbestand uit `06_FINANCE/STATEMENTS`

---

## **Workflow stappen**

### Stap 1 — Exports verzamelen

1. Download maandelijkse Moneybird-export.
2. Sla op in `06_FINANCE/MONEYBIRD_REFERENCE` met naamconventie `MONEYBIRD_EXPORT_[PERIODE].xlsx`.
3. Sla bankafschrift op in `06_FINANCE/BANK` met naamconventie `BANK_STATEMENT_[PERIODE].pdf`.

### Stap 2 — Bankafschrift versus Moneybird vergelijken

1. Vergelijk ontvangen betalingen in bankafschrift met geregistreerde betalingen in Moneybird.
2. Identificeer niet-gematchte transacties.
3. Registreer discrepanties als ClickUp-taak met bedrag, datum en omschrijving.

### Stap 3 — Open Posten controleren

1. Controleer Open Posten-lijst op vervallen facturen (ouder dan 30 dagen).
2. Signaleer vervallen facturen aan Sophia als ClickUp-taak.
3. Facturen ouder dan 60 dagen → escaleer direct naar Sophia.

### Stap 4 — Cashflow bijwerken

1. Bijwerk cashflow-werkbestand in `06_FINANCE/STATEMENTS` op basis van actuele bankstand en Open Posten.
2. Naamconventie: `CASHFLOW_[PERIODE].xlsx`

### Stap 5 — Rapportage en afsluiting

1. Stel reconciliatie-samenvatting op: gematchte transacties, discrepanties, Open Posten-status, cashflow-stand.
2. Stuur samenvatting naar Sophia als ClickUp-taak of directe rapportage.
3. Sluit reconciliatie-taak in ClickUp.

---

## **Beslismomenten**

- Zijn er discrepanties die financiële correctie vereisen (→ Sophia Level 4)?
- Zijn er Open Posten ouder dan 60 dagen (→ directe escalatie)?
- Zijn er onverklaarbare transacties die extern onderzoek vereisen?

---

## **Deliverables**

- Moneybird-export en bankafschrift opgeslagen in `06_FINANCE`
- Bijgewerkt cashflow-werkbestand in `STATEMENTS`
- Reconciliatie-samenvatting aan Sophia
- Discrepanties en vervallen Open Posten geregistreerd als ClickUp-taak

---

## **KPI's**

- Reconciliatie uitgevoerd vóór de 10e van de volgende maand
- Alle discrepanties geregistreerd en geëscaleerd
- Open Posten ouder dan 30 dagen gesignaleerd aan Sophia

---

## **Escalaties**

Escaleer direct naar Sophia bij:
- Financiële discrepantie groter dan €500
- Open Posten ouder dan 60 dagen
- Onverklaarbare transactie op de bedrijfsrekening
- Correctie in Moneybird vereist

---

## **Outputs**

- Actueel cashflow-werkbestand in `06_FINANCE/STATEMENTS`
- Reconciliatie-samenvatting goedgekeurd door Sophia
- Discrepanties en Open Posten geregistreerd in ClickUp

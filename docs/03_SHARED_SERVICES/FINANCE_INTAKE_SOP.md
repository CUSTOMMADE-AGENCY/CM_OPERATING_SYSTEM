# **FINANCE INTAKE SOP**

## **1. DOEL**

Deze SOP beschrijft de vaste uitvoeringswijze voor het verwerken van financiële informatie in `OS_CUSTOMMADE/06_FINANCE`. CM MONEY AGENT verwerkt Moneybird-exports, bankafschriften en cashflow-updates op de juiste locatie, signaleert BTW-verplichtingen tijdig en escaleert financiële beslissingen naar het correcte approvalniveau.

---

## **2. REIKWIJDTE**

Deze SOP geldt voor alle inkomende finance-items voor `06_FINANCE`:

- Moneybird-exports (BTW, Open Posten, factuuropgaven, kasstroomoverzichten)
- Bankafschriften en betalingsbewijzen
- BTW-aangifte-voorbereiding
- Cashflow-werkbestanden en periodeafschriften

Artistfinanciën als primaire bron vallen buiten deze SOP (→ `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`).

---

## **3. EIGENAAR**

**CM MONEY AGENT** is process owner en bewaakt financiële integriteit van `06_FINANCE`. CM CONTROL AGENT bewaakt governance. Sophia is approver voor alle Level 4-acties.

---

## **4. INPUTS**

- Moneybird-export (BTW-overzicht, Open Posten-lijst, factuuropgave, kasstroomrapportage)
- Bankafschrift van de CM-bedrijfsrekening
- Belastingdienst-notificaties of deadlines
- Instructie van Sophia of CM CONTROL AGENT voor specifieke finance-acties

---

## **5. PROCESSTAPPEN**

### Stap 1 — Ontvangst en classificatie

1. Ontvang finance-item (export, afschrift, notificatie).
2. Bepaal documenttype: Moneybird-referentie, bankafschrift, belastingdocument, cashflow of Open Posten.
3. Controleer of het item thuishoort in `06_FINANCE` of in `02_ARTIST_MANAGEMENT/[ARTIST]/06_FINANCE`.

### Stap 2 — Naamgeving en plaatsing

1. Pas naamconventie toe conform `docs/00_GOVERNANCE/NAMING_CONVENTIONS.md`:
   - Gebruik periodekoppeling: `Q1_2026`, `202601`, `2025_ANNUAL`
   - Gebruik type als prefix: `BTW_`, `BANK_`, `MONEYBIRD_`, `CASHFLOW_`
   - Geen `final`, `new`, `copy`, `oud` of `v2` in bestandsnamen
2. Sla op in de juiste submap van `06_FINANCE`:

| Documenttype | Submap |
|---|---|
| Moneybird-export | `MONEYBIRD_REFERENCE` |
| Bankafschrift | `BANK` |
| BTW-aangifte of belastingdocument | `BELASTINGDIENST` |
| Cashflow-werkbestand of jaarafschrift | `STATEMENTS` |
| Finance-export voor analyse | `ADMIN_EXPORTS` |

### Stap 3 — Signalering

1. Controleer op openstaande BTW-aangiftetermijn.
2. Controleer Open Posten op facturen ouder dan 30 dagen.
3. Signaleer cashflow-afwijkingen aan Sophia.
4. Registreer alle signalen als ClickUp-taak met deadline en owner.

### Stap 4 — BTW-aangifte voorbereiding

1. CM MONEY AGENT bereidt BTW-aangifte voor (Level 2): verzamelt export, controleert periodeaansluiting, legt concept neer in `BELASTINGDIENST`.
2. CM MONEY AGENT escaleert naar Sophia voor indiening (Level 4).
3. Na Sophia-approval: indiening bij Belastingdienst.
4. Registreer besluit in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

### Stap 5 — Archivering

1. Jaargebonden documenten gaan na afsluiting naar `06_FINANCE/99_ARCHIEF`.
2. Facturen, bonnen en belastingdocumenten worden nooit verwijderd.
3. Verwijdering vereist Sophia-approval (Level 4) en registratie in het Approval Register.

---

## **6. OUTPUTS**

- Finance-referentie opgeslagen in de juiste submap van `06_FINANCE`
- BTW-signalering geregistreerd als ClickUp-taak
- Open Posten-signalering geregistreerd als ClickUp-taak
- Cashflow-update beschikbaar in `STATEMENTS`
- BTW-aangifte gereed voor Sophia-approval

---

## **7. TOOLGRENZEN**

| Actie | Level | Uitvoerder |
|---|---|---|
| Moneybird-export opslaan in Drive | Level 2 | CM MONEY AGENT |
| Cashflow-werkbestand bijwerken | Level 2 | CM MONEY AGENT |
| BTW-aangifte indienen bij Belastingdienst | Level 4 | Sophia |
| Financiële toezegging of correctie | Level 4 | Sophia |
| Externe communicatie over financiën | Level 4 | Sophia |
| Verwijdering van financieel document | Level 4 | Sophia |

Moneybird is de primaire financiële waarheid. Drive is de operationele werkplek voor kopieën en exports.

---

## **8. KWALITEITSCHECKS**

- [ ] Documenttype correct geclassificeerd
- [ ] Bestandsnaam voldoet aan naamconventie
- [ ] Document in de juiste submap van `06_FINANCE` geplaatst
- [ ] BTW-deadline gecheckt en geregistreerd in ClickUp
- [ ] Open Posten gecheckt
- [ ] Geen Level 4-actie uitgevoerd zonder Sophia-approval
- [ ] Verwijdering alleen na registratie in Approval Register

---

## **9. ESCALATIECRITERIA**

Escaleer direct naar Sophia bij:

- BTW-deadline binnen 5 werkdagen zonder ingediende aangifte
- Open Posten ouder dan 60 dagen
- Financiële discrepantie of onverklaard verschil in cashflow
- Verzoek tot verwijdering van financieel document
- Externe partij verzoekt om financiële informatie namens CM

---

## **10. REVIEWRITME**

Kwartaal of bij structuurwijziging in `06_FINANCE`. Process owner: CM MONEY AGENT. Governance: CM CONTROL AGENT.

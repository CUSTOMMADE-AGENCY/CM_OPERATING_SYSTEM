# **YEAR END FINANCE FLOW**

## **Doel**

Deze Workflow beschrijft de jaarafsluiting en jaarrapportage voor `06_FINANCE`: verzamelen van jaarlijkse financiële documenten, afstemming met de accountant, archivering van het afgesloten jaar en voorbereiding van het nieuwe boekjaar. Alle externe indieningen en financiële toezeggingen vereisen Sophia-approval.

---

## **Reikwijdte**

Deze Workflow wordt jaarlijks uitgevoerd in de periode december–februari. De jaarafsluiting dekt: jaarlijkse Moneybird-export, bankafschriften, jaarafschrift, BTW-jaaroverzicht en overdracht aan accountant. Belastingdienst-indiening en externe communicatie vallen altijd onder Level 4 (Sophia).

---

## **Eigenaar**

**CM MONEY AGENT** bereidt de jaarafsluiting voor (Level 2). Sophia is approver voor alle externe indieningen, toezeggingen en communicatie (Level 4).

---

## **Inputs**

- Definitieve Moneybird-export over het afgesloten jaar (BTW, facturen, Open Posten, kasstroomoverzicht)
- Bankafschriften over alle periodes van het afgesloten jaar
- Lopende reconciliatie-werkbestanden uit `06_FINANCE/STATEMENTS`
- Accountant-contactgegevens en deadline voor aanlevering

---

## **Workflow stappen**

### Stap 1 — Jaardocumenten verzamelen

1. Download definitieve Moneybird-jaarexport voor het afgesloten jaar.
2. Sla op in `06_FINANCE/ADMIN_EXPORTS` met naamconventie `ADMIN_EXPORT_[JAAR]_FULL.xlsx`.
3. Controleer of alle maandelijkse bankafschriften aanwezig zijn in `06_FINANCE/BANK`.
4. Stel jaarafschrift op of verzamel het van Moneybird: `STATEMENT_[JAAR]_ANNUAL.pdf` → `06_FINANCE/STATEMENTS`.

### Stap 2 — BTW-jaaroverzicht

1. Stel BTW-jaaroverzicht op op basis van Moneybird-export.
2. Sla op in `06_FINANCE/BELASTINGDIENST` met naamconventie `BTW_JAAROVERZICHT_[JAAR].pdf`.
3. Controleer of alle kwartaalse BTW-aangiften ingediend zijn.
4. Ontbrekende aangifte → escaleer direct naar Sophia (Level 4).

### Stap 3 — Voorbereiding voor accountant

1. Verzamel alle jaardocumenten in een overzicht voor de accountant.
2. Registreer aanleverdatum en contactpersoon in ClickUp.
3. Sla voorbereidingsdocument op in `06_FINANCE/ADMIN_EXPORTS`.
4. Overdracht aan accountant vereist Sophia-approval (Level 4).

### Stap 4 — Externe indiening en communicatie

1. Sophia keurt externe communicatie en indiening goed (Level 4).
2. Na goedkeuring: aanlevering aan accountant of Belastingdienst.
3. Registreer goedkeuring in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

### Stap 5 — Archivering afgesloten jaar

1. Verplaats jaargebonden financiële documenten naar `06_FINANCE/99_ARCHIEF` of `99_ARCHIVE/[JAAR]`.
2. Registreer archivering in ClickUp.
3. Facturen, bonnen en belastingdocumenten worden nooit verwijderd.

### Stap 6 — Nieuw boekjaar starten

1. Controleer of Moneybird correct is ingesteld voor het nieuwe jaar.
2. Maak nieuwe cashflow-template aan voor het nieuwe jaar in `06_FINANCE/STATEMENTS`.
3. Bevestig eerste BTW-deadline van het nieuwe jaar in ClickUp.

---

## **Beslismomenten**

- Zijn alle maandelijkse BTW-aangiften ingediend voor het afgesloten jaar?
- Zijn alle Open Posten afgesloten of overdragen naar het nieuwe jaar?
- Is externe communicatie met accountant of Belastingdienst goedgekeurd door Sophia?

---

## **Deliverables**

- Definitieve jaarexport opgeslagen in `06_FINANCE/ADMIN_EXPORTS`
- Jaarafschrift opgeslagen in `06_FINANCE/STATEMENTS`
- BTW-jaaroverzicht opgeslagen in `06_FINANCE/BELASTINGDIENST`
- Jaardocumenten aangeleverd aan accountant (na Sophia-approval)
- Afgesloten jaar gearchiveerd in `99_ARCHIEF`
- Nieuw boekjaar ingericht

---

## **KPI's**

- Jaarafsluiting volledig voor 1 februari van het volgende jaar
- Alle BTW-aangiften ingediend voor deadline
- Accountant-aanlevering goedgekeurd en geregistreerd in Approval Register

---

## **Escalaties**

Escaleer direct naar Sophia bij:
- Ontbrekende BTW-aangifte voor het afgesloten jaar
- Discrepantie in jaarexport groter dan €500
- Deadline voor accountant-aanlevering binnen 5 werkdagen

---

## **Outputs**

- Volledig gearchiveerd afgesloten boekjaar in `06_FINANCE/99_ARCHIEF`
- Jaardocumenten aangeleverd aan accountant (na Sophia-approval)
- Nieuw boekjaar operationeel ingericht in Moneybird en `06_FINANCE`

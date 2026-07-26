# **LEGAL REVIEW FLOW**

## **Doel**

Deze Workflow beschrijft hoe CM LEGAL AGENT een juridisch document beoordeelt op risico's, verplichtingen en clausules. Doel is dat juridische risico's tijdig worden gesignaleerd aan Sophia en dat geen juridische verplichting wordt aangegaan zonder het correcte approvalniveau.

---

## **Reikwijdte**

Deze Workflow geldt voor elk juridisch document dat review vereist: inkomende contracten, NDA's, LOI's, dealterm-sheets, partnerovereenkomsten, publicatielicenties en juridische correspondentie. De Workflow levert een review-notitie op; de beslissing om te tekenen of te accepteren valt altijd bij Sophia (Level 4).

---

## **Eigenaar**

**CM LEGAL AGENT** is eigenaar van deze Workflow en voert de review uit (Level 2). Sophia is beslisser over verdere actie (Level 4).

---

## **Inputs**

- Inkomend juridisch document (contract, NDA, LOI, overeenkomst, licentie)
- Context van het document: wie is de tegenpartij, wat is de beoogde samenwerking?
- Relevante bestaande overeenkomsten of rechtenregisters ter vergelijking

---

## **Workflow stappen**

### Stap 1 — Document ontvangen en registreren

1. Ontvang juridisch document.
2. Registreer als ClickUp-taak: documenttype, tegenpartij, ontvangstdatum, deadline voor review.
3. Sla document op in `07_LEGAL/LEGAL_REVIEW` als werkversie.

### Stap 2 — Initiële beoordeling

1. Lees het document volledig door.
2. Identificeer:
   - Aard van de verplichting (eenmalig, doorlopend, financieel, rechtengerelateerd)
   - Duur en opzegtermijn
   - Financiële verplichtingen of aansprakelijkheden
   - Intellectuele eigendomsclausules
   - Geheimhoudingsverplichtingen
   - Ongebruikelijke of risicovolle clausules

### Stap 3 — Review-notitie opstellen

1. Stel review-notitie op met:
   - Samenvatting van verplichtingen (max. 5 punten)
   - Geïdentificeerde risico's en aandachtspunten
   - Aanbeveling: accepteren / aanpassen / afwijzen / laten beoordelen door externe counsel
2. Sla review-notitie op in `07_LEGAL/LEGAL_REVIEW`: `[DATUM]_[PARTIJ]_LEGAL_REVIEW.md`

### Stap 4 — Escalatie naar Sophia

1. Stuur review-notitie naar Sophia met aanbeveling.
2. Juridisch risico of ongebruikelijke clausule → escaleer als URGENT.
3. Sophia beslist: accepteren, aanpassen, afwijzen of extern laten beoordelen.
4. Registreer beslissing in ClickUp.

### Stap 5 — Vervolgactie

1. Accepteren → start Contract Lifecycle Flow (ondertekening).
2. Aanpassen → CM LEGAL AGENT stelt tegenvoorstel op (Level 2) ter goedkeuring aan Sophia.
3. Afwijzen → informeer tegenpartij (Sophia of via Sophia-instructie).
4. Extern → overdracht aan externe counsel (Sophia coördineert).

### Stap 6 — Afsluiting

1. Sla definitieve review-notitie en uitkomst op in `07_LEGAL/LEGAL_REVIEW`.
2. Sla bewijs van Sophia-beslissing op in `07_LEGAL/EVIDENCE`.
3. Sluit ClickUp-taak.

---

## **Beslismomenten**

- Zijn er clausules die externe legal counsel vereisen?
- Is de verplichting financieel, rechtengerelateerd of reputatiegevoelig?
- Wat is de deadline voor respons aan de tegenpartij?

---

## **Deliverables**

- Review-notitie opgeslagen in `07_LEGAL/LEGAL_REVIEW`
- Sophia-beslissing geregistreerd in ClickUp
- Bewijs opgeslagen in `07_LEGAL/EVIDENCE`
- Vervolgactie gestart (Contract Lifecycle Flow of afwijzing)

---

## **KPI's**

- Review-notitie opgesteld binnen 2 werkdagen na ontvangst
- Geen juridische verplichting aangegaan zonder Sophia-goedkeuring
- Alle review-notities traceerbaar in `07_LEGAL/LEGAL_REVIEW`

---

## **Escalaties**

Escaleer direct naar Sophia bij:
- Deadline voor respons binnen 24 uur
- Clausule met onbeperkte aansprakelijkheid of rechtenafstand
- Financiële verplichting groter dan reguliere scope
- Twijfel over intentie of betrouwbaarheid van tegenpartij

---

## **Outputs**

- Review-notitie in `07_LEGAL/LEGAL_REVIEW`
- Sophia-beslissing gedocumenteerd
- Vervolgactie gestart of afgewezen

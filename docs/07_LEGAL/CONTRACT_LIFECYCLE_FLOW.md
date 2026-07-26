# **CONTRACT LIFECYCLE FLOW**

## **Doel**

Deze Workflow beschrijft de volledige levenscyclus van een CM-contract: van aanvraag en opstellen via review en ondertekening tot archivering. Doel is dat geen juridische verplichting wordt aangegaan zonder Sophia-approval en dat alle contractdocumenten traceerbaar zijn in `07_LEGAL`.

---

## **Reikwijdte**

Deze Workflow geldt voor alle CM-contracten: managementovereenkomsten, NDA's, samenwerkingsovereenkomsten, freelancecontracten, partnerovereenkomsten en addenda. Artistcontracten als primaire bron staan in `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`; clientcontracten in `03_CLIENTS/[CLIENT]/02_CONTRACT`. `07_LEGAL/CONTRACTS` beheert de CM-brede juridische laag.

---

## **Eigenaar**

**CM LEGAL AGENT** is eigenaar van deze Workflow (Level 2: opstellen en reviewen). Sophia is approver voor ondertekening en juridische verplichtingen (Level 4).

---

## **Inputs**

- Contractverzoek van Sophia, CM OPS AGENT of externe partij
- Bestaande template uit `docs/03_SHARED_SERVICES/TEMPLATES/` (indien beschikbaar)
- Scope en partijgegevens van het te sluiten contract

---

## **Workflow stappen**

### Stap 1 — Contractverzoek beoordelen

1. Ontvang contractverzoek.
2. Bepaal contracttype: managementovereenkomst, NDA, samenwerkingsovereenkomst, freelancecontract of andere.
3. Controleer of er een bestaande template beschikbaar is in de Template Register.
4. Registreer als ClickUp-taak met contracttype, partijen, deadline en eigenaar.

### Stap 2 — Concept opstellen

1. CM LEGAL AGENT stelt contractconcept op op basis van template of vanaf nul (Level 2).
2. Sla concept op in `07_LEGAL/CONTRACTS` als werkversie: `[PARTIJ]_[CONTRACTTYPE]_CONCEPT_[DATUM].[ext]`
3. Signaleer juridische risico's, ongebruikelijke clausules of onduidelijkheden aan Sophia.

### Stap 3 — Legal review

1. Voer legal review uit conform `docs/07_LEGAL/LEGAL_REVIEW_SOP.md`.
2. Sla review-notitie op in `07_LEGAL/LEGAL_REVIEW`.
3. Juridisch risico → escaleer naar Sophia vóór verdere stappen.

### Stap 4 — Goedkeuring en ondertekening

1. Stel contract ter goedkeuring voor aan Sophia (Level 4).
2. Zonder Sophia-approval: geen externe verzending of ondertekening.
3. Na goedkeuring: verzend contract naar externe partij voor ondertekening.
4. Ontvang getekend contract terug.

### Stap 5 — Registratie en opslag

1. Sla getekend contract op in `07_LEGAL/CONTRACTS`: `[PARTIJ]_[CONTRACTTYPE]_GETEKEND_[DATUM].[ext]`
2. Registreer ondertekening in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.
3. Sla bewijsstuk (e-mailbevestiging of ondertekeningsdocument) op in `07_LEGAL/EVIDENCE`.
4. Koppel contract aan ClickUp-taak voor follow-up (verlenging, opzegtermijn, vervaldatum).

### Stap 6 — Contractbeheer en verlenging

1. Zet verloopdate en opzegtermijn als ClickUp-reminder.
2. CM LEGAL AGENT signaleert naderende verloopdate (Level 2) aan Sophia 60 dagen voor afloop.
3. Verlengingsverzoek → start nieuwe contractcyclus vanaf Stap 1.

### Stap 7 — Archivering

1. Verlopen of beëindigd contract gaat naar `07_LEGAL/99_ARCHIEF` (indien aanwezig) of `99_ARCHIVE`.
2. Geen enkel contract wordt verwijderd zonder Sophia-approval (Level 4).

---

## **Beslismomenten**

- Is er een bestaande template die van toepassing is?
- Zijn er juridische risico's die escalatie vereisen vóór concept-verzending?
- Is Sophia-approval verkregen vóór externe verzending?
- Is de verloopdate geregistreerd als ClickUp-reminder?

---

## **Deliverables**

- Contractconcept opgeslagen in `07_LEGAL/CONTRACTS`
- Legal review-notitie in `07_LEGAL/LEGAL_REVIEW`
- Getekend contract in `07_LEGAL/CONTRACTS`
- Registratie in `CM_APPROVAL_REGISTER`
- Bewijs in `07_LEGAL/EVIDENCE`
- ClickUp-reminder voor verloopdate

---

## **KPI's**

- Geen externe verzending of ondertekening zonder Sophia-approval
- Alle getekende contracten geregistreerd in Approval Register
- Verloopdata vastgelegd als ClickUp-reminder

---

## **Escalaties**

Escaleer direct naar Sophia bij:
- Juridisch risico of ongebruikelijke clausule in contract
- Externe partij verzoekt om spoed-ondertekening
- Contract met financiële verplichting groter dan reguliere scope
- Verloopdate binnen 30 dagen zonder verlengingsbesluit

---

## **Outputs**

- Getekend contract opgeslagen en geregistreerd
- Approval Register bijgewerkt
- Bewijs opgeslagen in `07_LEGAL/EVIDENCE`
- ClickUp-follow-up voor verloopdate

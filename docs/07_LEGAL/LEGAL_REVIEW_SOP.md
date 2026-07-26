# **LEGAL REVIEW SOP**

## **1. DOEL**

Deze SOP beschrijft de vaste uitvoeringswijze voor legal review en contractbeheer in `OS_CUSTOMMADE/07_LEGAL`: ontvangst en beoordeling van juridische documenten, beheer van het Approval Register, legal review-dossiers en bewijsopslag. CM LEGAL AGENT bewaakt juridische integriteit en escaleert verplichtingen naar Sophia.

---

## **2. REIKWIJDTE**

Deze SOP geldt voor alle juridische operaties in `07_LEGAL`:

- Contractbeheer (opstellen, reviewen, archiveren)
- Legal review van inkomende juridische documenten
- Beheer van `APPROVALS/CM_APPROVAL_REGISTER`
- Opslag van juridisch bewijs in `EVIDENCE`
- NDA's, partnerovereenkomsten, freelancecontracten

Artistcontracten als primaire bron vallen onder `02_ARTIST_MANAGEMENT/[ARTIST]/02_CONTRACT`. Clientcontracten als primaire bron vallen onder `03_CLIENTS/[CLIENT]/02_CONTRACT`. `07_LEGAL` beheert de CM-brede juridische laag en het Approval Register.

---

## **3. EIGENAAR**

**CM LEGAL AGENT** is process owner en eigenaar van `07_LEGAL`. CM CONTROL AGENT beheert het Approval Register in samenwerking met CM LEGAL AGENT. Sophia is approver voor alle juridische verplichtingen (Level 4).

---

## **4. INPUTS**

- Inkomend juridisch document (contract, NDA, overeenkomst, juridische correspondentie)
- Level 4-verzoek van een CM-agent voor goedkeuring
- Juridische vraag of risicosignaal vanuit een andere map
- Sophia-instructie voor juridische actie

---

## **5. PROCESSTAPPEN**

### Stap 1 — Ontvangst en classificatie

1. Ontvang juridisch document of juridische vraag.
2. Classificeer: nieuw contract, NDA, amendement, legal review-verzoek of approval-verzoek.
3. Bepaal opslaglocatie:
   - CM-breed contract of NDA → `CONTRACTS`
   - Legal review-dossier → `LEGAL_REVIEW`
   - Juridisch bewijs → `EVIDENCE`
   - Approval-verzoek → `APPROVALS/CM_APPROVAL_REGISTER`

### Stap 2 — Legal review

1. CM LEGAL AGENT reviewt het document op juridische risico's (Level 2): signaleert verplichtingen, aansprakelijkheden, rechtenkwesties en ongebruikelijke clausules.
2. Stel review-notitie op en sla op in `LEGAL_REVIEW`.
3. Juridisch risico of verplichting → escaleer naar Sophia met review-samenvatting.
4. Geen juridisch risico → bevestig aan aanvrager en archiveer review-notitie.

### Stap 3 — Contractdossier aanmaken

1. CM LEGAL AGENT maakt contractdossier aan in `CONTRACTS` (Level 2).
2. Naamconventie: `[PARTIJ]_[CONTRACTTYPE]_[DATUM].[ext]`
3. Koppel contractdossier aan ClickUp-taak voor signing-follow-up.
4. Ondertekening of juridische verplichting vereist Sophia-approval (Level 4).
5. Na ondertekening: registreer in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

### Stap 4 — Approval Register beheer

1. Elk Level 4-verzoek wordt als nieuwe rij aangemaakt in `CM_APPROVAL_REGISTER` met status `Open`.
2. Sophia reageert → CM CONTROL AGENT werkt rij bij (beslissing + timestamp).
3. Goedgekeurd → uitvoerende agent voert actie uit → status `Uitgevoerd`.
4. Geweigerd → status `Geweigerd`, reden vastgelegd.
5. Geen respons binnen deadline → status `Verlopen`, opschaling conform `docs/05_OPERATIONS/AGENTS/ESCALATION_PROTOCOLS.md`.

### Stap 5 — Bewijsopslag

1. Juridisch bewijs (e-mailbevestigingen, getekende documenten, approval-screenshots) opslaan in `EVIDENCE`.
2. Naamconventie: `[DATUM]_[PARTIJ]_[BEWIJSTYPE].[ext]`
3. Bewijs wordt nooit verwijderd zonder Sophia-approval.

---

## **6. OUTPUTS**

- Legal review-notitie opgeslagen in `LEGAL_REVIEW`
- Contractdossier aangemaakt in `CONTRACTS`
- Level 4-verzoek geregistreerd in `CM_APPROVAL_REGISTER`
- Bewijs opgeslagen in `EVIDENCE`
- Juridisch risico gesignaleerd aan Sophia

---

## **7. TOOLGRENZEN**

| Actie | Level | Uitvoerder |
|---|---|---|
| Legal review uitvoeren en notitie opstellen | Level 2 | CM LEGAL AGENT |
| Contractdossier aanmaken | Level 2 | CM LEGAL AGENT |
| Approval Register bijwerken | Level 3 | CM CONTROL AGENT |
| Ondertekening of juridische verplichting | Level 4 | Sophia |
| Externe indiening van juridisch document | Level 4 | Sophia |
| Wijziging van het Approval Register na goedkeuring | Level 4 | Sophia |
| Verwijdering van juridisch document | Level 4 | Sophia |

---

## **8. KWALITEITSCHECKS**

- [ ] Juridisch document correct geclassificeerd en in juiste submap geplaatst
- [ ] Legal review-notitie aangemaakt voor elk gereviewed document
- [ ] Level 4-verzoeken geregistreerd in `CM_APPROVAL_REGISTER`
- [ ] Bewijs opgeslagen in `EVIDENCE`
- [ ] Geen ondertekening of verplichting zonder Sophia-approval
- [ ] Geen verwijdering zonder Sophia-approval

---

## **9. ESCALATIECRITERIA**

Escaleer direct naar Sophia bij:

- Juridische verplichting of aansprakelijkheidsrisico geïdentificeerd
- Contractdeadline binnen 3 werkdagen zonder getekende versie
- Externe partij verzoekt om juridische bevestiging namens CM
- Juridisch conflict of geschil
- Verzoek tot verwijdering van juridisch document of bewijs

---

## **10. REVIEWRITME**

Kwartaal: CM LEGAL AGENT reviewt `07_LEGAL` op actualiteit en compliance. Maandelijks: CM CONTROL AGENT rapporteert openstaande Level 4-verzoeken uit `CM_APPROVAL_REGISTER`. Eigenaar: CM LEGAL AGENT.

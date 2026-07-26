# **ARCHIVE FLOW**

## **Doel**

Deze Workflow beschrijft wanneer en hoe dossiers en documenten worden gearchiveerd in `OS_CUSTOMMADE/99_ARCHIVE`. Doel is dat niets wordt gearchiveerd of verwijderd zonder de juiste approval en dat elk gearchiveerd item traceerbaar is.

---

## **Reikwijdte**

Deze Workflow wordt getriggerd bij: einde van een samenwerking (artist, client, deal), deal-closing, periodieke review of structuurwijziging. De Workflow dekt het volledige archiveerproces van beoordeling tot registratie. Definitieve verwijdering van gearchiveerde documenten valt altijd onder Level 4 (Sophia).

---

## **Eigenaar**

**CM VAULT AGENT** is eigenaar van deze Workflow. Owner Agent van het te archiveren dossier initieert de archivering. CM CONTROL AGENT bewaakt governance en escalaties. Sophia is approver voor verwijdering (Level 4).

---

## **Inputs**

- Archiveerverzoek van Owner Agent (bij einde samenwerking, deal-closing of periodieke review)
- Te archiveren dossier of document met locatie in Drive
- Reden voor archivering

---

## **Workflow stappen**

### Stap 1 — Archiveerverzoek beoordelen

1. Ontvang archiveerverzoek van Owner Agent.
2. Controleer:
   - Is het dossier daadwerkelijk inactief?
   - Zijn er nog actieve contractverplichtingen, lopende betalingen of openstaande rechten?
   - Zijn alle deliverables opgeleverd en goedgekeurd?
3. Actieve verplichtingen aanwezig → archiveer niet, informeer Owner Agent.
4. Geen actieve verplichtingen → ga door naar Stap 2.
5. Registreer als ClickUp-taak.

### Stap 2 — Doellocatie bepalen

1. Bepaal de juiste archieflocatie in `99_ARCHIVE`:
   - Artistdossier → `99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`
   - Clientdossier → `99_ARCHIVE/CLIENTS/[CLIENT_NAME]`
   - Dealdossier → `99_ARCHIVE/DEALS/[DEAL_NAME]`
   - Oud structuurmateriaal → `99_ARCHIVE/REVIEW_HOLD_OLD_STRUCTURE`
   - Legacy-materiaal → `99_ARCHIVE/LEGACY_ROOTS`

### Stap 3 — Dossier verplaatsen

1. Verplaats het volledige dossier van de actieve Drive-locatie naar de archieflocatie.
2. Verplaats het dossier als één eenheid — niet per submap of per bestand.
3. Registreer verplaatsing in ClickUp: van-locatie, naar-locatie, datum.

### Stap 4 — Bevestiging en registratie

1. Informeer de Owner Agent van het gearchiveerde dossier.
2. Sluit gekoppelde ClickUp-taken van het gearchiveerde dossier.
3. Registreer archivering als ClickUp-taak met afsluitingsdatum.

### Stap 5 — Definitieve verwijdering (Level 4 — apart verzoek)

1. Verwijderingsverzoek van Sophia of Owner Agent ontvangen.
2. Escaleer naar Sophia voor goedkeuring (Level 4).
3. Na Sophia-approval: voer verwijdering uit.
4. Registreer verwijdering in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

---

## **Beslismomenten**

- Zijn er nog actieve contractverplichtingen of openstaande rechten?
- Is het dossier compleet (alle deliverables aanwezig en goedgekeurd)?
- Is definitieve verwijdering aangevraagd en goedgekeurd door Sophia?

---

## **Deliverables**

- Gearchiveerd dossier op de juiste locatie in `99_ARCHIVE`
- Archivering geregistreerd in ClickUp
- Owner Agent geïnformeerd
- Verwijdering (indien van toepassing) geregistreerd in Approval Register

---

## **KPI's**

- Dossier gearchiveerd binnen 5 werkdagen na archiveerverzoek
- Geen actieve verplichtingen in gearchiveerd dossier
- Geen verwijdering zonder Sophia-approval en registratie in Approval Register

---

## **Escalaties**

Escaleer naar Sophia bij:
- Archiveerverzoek voor dossier met onduidelijke contractstatus
- Verzoek tot definitieve verwijdering
- Conflict over eigenaarschap of timing van archivering
- Legacy-materiaal met mogelijk juridische of financiële relevantie

---

## **Outputs**

- Gearchiveerd dossier in `99_ARCHIVE`
- ClickUp-registratie afgerond
- Verwijdering (indien van toepassing) geregistreerd in Approval Register

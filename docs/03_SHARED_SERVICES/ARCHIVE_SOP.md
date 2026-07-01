# **ARCHIVE SOP**

## **1. DOEL**

Deze SOP beschrijft de vaste uitvoeringswijze voor archivering in `OS_CUSTOMMADE/99_ARCHIVE`: verplaatsing van inactieve dossiers, legacy-materiaal-beheer, migratielog-opslag en archivering conform de CM retention-regels. CM VAULT AGENT bewaakt dat niets wordt gearchiveerd of verwijderd zonder de juiste approval.

---

## **2. REIKWIJDTE**

Deze SOP geldt voor alle operaties in `99_ARCHIVE`:

- Archivering van inactieve artist-, client- en dealdossiers
- Beheer van legacy-materiaal en oude Drive-structuren
- Opslag van migratielogs en structuurwijzigingsverslagen
- Beheer van de review-hold voor documenten in afwachting van beoordeling

---

## **3. EIGENAAR**

**CM VAULT AGENT** is process owner en eigenaar van `99_ARCHIVE`. CM CONTROL AGENT bewaakt governance en approvals. Sophia is approver voor verwijdering van gearchiveerde documenten (Level 4).

---

## **4. INPUTS**

- Archiveerverzoek van een Owner Agent voor een inactief dossier of document
- Legacy-materiaal zonder duidelijke eigenaar
- Migratielogbestand van een Drive-structuurwijziging
- Sophia-instructie voor verwijdering of definitieve opschoning

---

## **5. PROCESSTAPPEN**

### Stap 1 — Archiveerverzoek beoordelen

1. Ontvang archiveerverzoek van Owner Agent of Sophia.
2. Controleer:
   - Is het dossier of document daadwerkelijk inactief?
   - Zijn er actieve links, contractverplichtingen of lopende zaken aan gekoppeld?
   - Is het archiveerverzoek Level 3 (intern archiveren) of Level 4 (verwijdering)?
3. Level 3: CM VAULT AGENT voert archivering uit.
4. Level 4: escaleer naar Sophia voor goedkeuring.

### Stap 2 — Dossier archiveren

1. Bepaal doelmap in `99_ARCHIVE`:
   - Artistdossier → `99_ARCHIVE/ARTIST_MANAGEMENT/[ARTIST_NAME]`
   - Clientdossier → `99_ARCHIVE/CLIENTS/[CLIENT_NAME]`
   - Dealdossier → `99_ARCHIVE/DEALS/[DEAL_NAME]`
   - Oud structuurmateriaal → `99_ARCHIVE/REVIEW_HOLD_OLD_STRUCTURE`
   - Legacy-materiaal → `99_ARCHIVE/LEGACY_ROOTS`
2. Verplaats volledig dossier naar doelmap.
3. Registreer archivering als ClickUp-taak met datum, owner en reden.
4. Informeer de Owner Agent van het gearchiveerde dossier.

### Stap 3 — Legacy-materiaal beheren

1. Ontvang legacy-materiaal (vorige structuren, verouderde rootmappen, niet-actieve projecten).
2. Classificeer: te bewaren in `LEGACY_ROOTS` of te plaatsen in `REVIEW_HOLD_OLD_STRUCTURE` voor beoordeling.
3. Materiaal in `REVIEW_HOLD_OLD_STRUCTURE` wordt kwartaalgewijs beoordeeld door CM CONTROL AGENT.
4. Na beoordeling: definitief archiveren in `LEGACY_ROOTS` of verwijderen na Sophia-approval.

### Stap 4 — Migratielogbeheer

1. Ontvang migratielogbestand na Drive-structuurwijziging.
2. Sla op in `99_ARCHIVE/MIGRATION_LOGS` met naamconventie: `[DATUM]_MIGRATION_LOG_[OMSCHRIJVING].md`.
3. Migratielogs worden nooit verwijderd.

### Stap 5 — Verwijdering (Level 4)

1. Ontvang verwijderingsverzoek van Owner Agent of Sophia.
2. CM VAULT AGENT verifieert dat verwijdering is goedgekeurd door Sophia (Level 4).
3. Zonder Sophia-approval: geen verwijdering.
4. Met Sophia-approval: voer verwijdering uit en registreer in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER`.

---

## **6. OUTPUTS**

- Gearchiveerd dossier op de juiste locatie in `99_ARCHIVE`
- Archivering geregistreerd als ClickUp-taak
- Legacy-materiaal geclassificeerd en geplaatst
- Migratielogbestand opgeslagen in `MIGRATION_LOGS`
- Verwijdering geregistreerd in Approval Register

---

## **7. TOOLGRENZEN**

| Actie | Level | Uitvoerder |
|---|---|---|
| Inactief dossier archiveren | Level 3 | CM VAULT AGENT |
| Legacy-materiaal classificeren | Level 3 | CM VAULT AGENT |
| Migratielogbestand opslaan | Level 3 | CM VAULT AGENT |
| Definitieve verwijdering van gearchiveerd document | Level 4 | Sophia |
| Opschoning van `REVIEW_HOLD_OLD_STRUCTURE` | Level 4 | Sophia |

---

## **8. KWALITEITSCHECKS**

- [ ] Gearchiveerd dossier staat in de juiste submap van `99_ARCHIVE`
- [ ] Archivering geregistreerd in ClickUp
- [ ] Geen actieve links of verplichtingen meer gekoppeld aan gearchiveerd dossier
- [ ] Migratielogs opgeslagen en nooit verwijderd
- [ ] Geen verwijdering zonder Sophia-approval en registratie in Approval Register

---

## **9. ESCALATIECRITERIA**

Escaleer direct naar Sophia bij:

- Archiveerverzoek voor dossier met mogelijke actieve contractverplichting
- Verzoek tot verwijdering van gearchiveerd document
- Legacy-materiaal dat juridische of financiële relevantie kan hebben
- Onduidelijkheid over eigenaarschap van te archiveren materiaal
- Verzoek tot opschoning van `REVIEW_HOLD_OLD_STRUCTURE`

---

## **10. REVIEWRITME**

Kwartaal: CM VAULT AGENT reviewt `REVIEW_HOLD_OLD_STRUCTURE` op te verwerken materiaal. Jaarlijks: CM CONTROL AGENT en CM VAULT AGENT reviewen `99_ARCHIVE` op retention-compliance. Eigenaar: CM VAULT AGENT.

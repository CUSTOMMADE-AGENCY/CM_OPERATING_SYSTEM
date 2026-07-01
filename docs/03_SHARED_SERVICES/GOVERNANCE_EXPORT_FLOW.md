# **GOVERNANCE EXPORT FLOW**

## **Doel**

Deze Workflow beschrijft hoe governance-documenten na een merge in GitHub worden geëxporteerd als referentiekopie naar `OS_CUSTOMMADE/00_ADMIN/02_GOVERNANCE_REFERENCE` in Drive. Doel is dat teamleden en agents altijd toegang hebben tot een actuele referentieversie van de geldende governance zonder direct in GitHub te hoeven werken.

---

## **Reikwijdte**

Deze Workflow wordt getriggerd na elke merge van een governance-wijziging in de `main`-branch van `custommadenl/cm_operating_system`. De Workflow dekt: export van bijgewerkte governance-documenten, vervanging van verouderde kopieën in Drive en registratie van de update.

---

## **Eigenaar**

**CM CONTROL AGENT** is eigenaar van deze Workflow. CM VAULT AGENT ondersteunt opslag en archivering in Drive. CM FLOW AGENT is verantwoordelijk voor automatisering zodra Make-scenario's zijn ingericht (GAP-005).

---

## **Inputs**

- Bevestigde merge van governance-wijziging in GitHub (`main`-branch)
- Lijst van gewijzigde bestanden uit de merge
- Actuele versie van de gewijzigde governance-documenten

---

## **Workflow stappen**

### Stap 1 — Merge detecteren

1. Ontvang signaal van GitHub-merge in `main` (handmatig of via Make-trigger zodra ingericht).
2. Identificeer welke governance-bestanden zijn gewijzigd.
3. Registreer update als ClickUp-taak met datum, bestandsnamen en eigenaar.

### Stap 2 — Referentiekopie bijwerken

1. Exporteer of kopieer de gewijzigde governance-documenten naar `00_ADMIN/02_GOVERNANCE_REFERENCE`.
2. Gebruik bestandsnaamconventie: `[DOCUMENTNAAM]_REF_[DATUM].[ext]`
3. Markeer de vorige referentiekopie als superseded.

### Stap 3 — Verouderde kopie archiveren

1. Verplaats superseded referentiekopie naar `99_ARCHIVE/REVIEW_HOLD_OLD_STRUCTURE`.
2. Registreer archivering in ClickUp.

### Stap 4 — Bevestiging

1. Bevestig aan CM CONTROL AGENT dat de referentiekopie actueel is.
2. Sluit ClickUp-taak.

---

## **Beslismomenten**

- Betreft de merge een governance-document dat intern als referentie wordt gebruikt?
- Is de vorige referentiekopie traceerbaar voor archivering?

---

## **Deliverables**

- Actuele referentiekopie in `00_ADMIN/02_GOVERNANCE_REFERENCE`
- Superseded kopie gearchiveerd
- ClickUp-taak gesloten

---

## **KPI's**

- Referentiekopie bijgewerkt binnen 1 werkdag na merge
- Geen verouderde actieve kopieën in `02_GOVERNANCE_REFERENCE`

---

## **Escalaties**

Escaleer naar Sophia bij:
- Conflicterende versies van governance-documenten in Drive
- Merge met structuurwijziging die externe partijen betreft

---

## **Outputs**

- Actuele governance-referentiekopie in `00_ADMIN/02_GOVERNANCE_REFERENCE`
- Archivering verouderde versie in `99_ARCHIVE`

# **ADMIN SOP**

## **1. DOEL**

Deze SOP beschrijft de vaste uitvoeringswijze voor het beheer van `OS_CUSTOMMADE/00_ADMIN`: document-intake en -triage, governance-referentiebeheer, template-distributie en operationele rapportage. CM CONTROL AGENT bewaakt dat `00_ADMIN` actueel, compliant en toegankelijk blijft als operationeel startpunt van CM.

---

## **2. REIKWIJDTE**

Deze SOP geldt voor alle operaties in `00_ADMIN`:

- Intake en triage van CM-brede documenten via `01_INBOX_REVIEW`
- Beheer van governance-referentiekopieën in `02_GOVERNANCE_REFERENCE`
- Distributie en beheer van operationele templates in `03_TEMPLATES`
- Opslag en archivering van CM-brede rapportages in `04_REPORTS`
- Beheer van admin-gerelateerde approval evidence in `05_APPROVALS`

---

## **3. EIGENAAR**

**CM CONTROL AGENT** is process owner en eigenaar van `00_ADMIN`. CM VAULT AGENT ondersteunt archivering. CM FLOW AGENT ondersteunt automatiseringen.

---

## **4. INPUTS**

- Inkomende CM-brede documenten zonder vaste eigenaar
- GitHub-updates aan governance-documenten (→ referentiekopie in `02_GOVERNANCE_REFERENCE`)
- Nieuwe of bijgewerkte templates van Owner Agents
- Goedgekeurde rapportages van CM-agenten
- Approval evidence voor admin-gerelateerde beslissingen

---

## **5. PROCESSTAPPEN**

### Stap 1 — Intake en triage (`01_INBOX_REVIEW`)

1. Ontvang inkomend CM-breed document in `01_INBOX_REVIEW`.
2. Bepaal juiste eigenaar en opslaglocatie:
   - Financieel → `06_FINANCE`
   - Juridisch → `07_LEGAL`
   - Artistdossier → `02_ARTIST_MANAGEMENT/[ARTIST]`
   - Clientdossier → `03_CLIENTS/[CLIENT]`
   - Admin-breed → `00_ADMIN` (juiste submap)
3. Verplaats document naar correcte locatie binnen 1 werkdag.
4. Registreer niet-plaatsbare documenten als ClickUp-taak voor escalatie.

### Stap 2 — Governance-referentiebeheer (`02_GOVERNANCE_REFERENCE`)

1. Controleer wekelijks of governance-referentiekopieën actueel zijn met de GitHub-versie.
2. Bijgewerkte governance-documenten in GitHub → bijwerk referentiekopie in `02_GOVERNANCE_REFERENCE`.
3. Markeer verouderde kopieën als superseded en archiveer naar `99_ARCHIVE`.

### Stap 3 — Template-beheer (`03_TEMPLATES`)

1. Nieuwe of bijgewerkte template van Owner Agent ontvangen.
2. Controleer of template is opgenomen in `docs/05_OPERATIONS/KNOWLEDGE_BASE/TEMPLATES/TEMPLATE_REGISTER.md`.
3. Niet-geregistreerde template → terug naar Owner Agent voor registratie.
4. Geregistreerde template → opslaan in `03_TEMPLATES` met juiste naamconventie.

### Stap 4 — Rapportage-opslag (`04_REPORTS`)

1. Ontvang afgeronde CM-brede rapportage van Owner Agent.
2. Controleer naamconventie: `[AGENTCODE]_REPORT_[PERIODE].[ext]`.
3. Sla op in `04_REPORTS`.
4. Verouderde rapportages gaan kwartaalgewijs naar `99_ARCHIVE`.

### Stap 5 — Approval evidence (`05_APPROVALS`)

1. Admin-gerelateerde approval evidence opslaan in `05_APPROVALS`.
2. Legal approvals horen in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` — niet hier.
3. Registreer Level 4-goedkeuringen altijd in het Approval Register.

---

## **6. OUTPUTS**

- Getriaged document in de juiste Drive-map
- Actuele governance-referentiekopieën in `02_GOVERNANCE_REFERENCE`
- Geregistreerde templates in `03_TEMPLATES`
- Opgeslagen rapportages in `04_REPORTS`
- Approval evidence in `05_APPROVALS`

---

## **7. TOOLGRENZEN**

| Actie | Level | Uitvoerder |
|---|---|---|
| Document triëren en verplaatsen | Level 3 | CM CONTROL AGENT |
| Governance-referentie bijwerken | Level 3 | CM CONTROL AGENT |
| Template opslaan of bijwerken | Level 3 | CM CONTROL AGENT |
| Rapportage opslaan | Level 3 | CM CONTROL AGENT |
| Verwijdering van document | Level 4 | Sophia |
| Externe distributie van rapportage | Level 4 | Sophia |

---

## **8. KWALITEITSCHECKS**

- [ ] `01_INBOX_REVIEW` is leeg of alle items zijn getriaged
- [ ] Governance-referentiekopieën zijn in lijn met actuele GitHub-versie
- [ ] Templates zijn geregistreerd in TEMPLATE_REGISTER.md
- [ ] Rapportages volgen naamconventie
- [ ] Legal approvals staan in `07_LEGAL`, niet in `05_APPROVALS`
- [ ] Geen verwijderingen zonder Sophia-approval

---

## **9. ESCALATIECRITERIA**

Escaleer naar Sophia via CM CONTROL AGENT bij:

- Document in `01_INBOX_REVIEW` zonder duidelijke eigenaar na 2 werkdagen
- Governance-conflict tussen GitHub-versie en Drive-referentie
- Template gebruikt in productie zonder registratie in TEMPLATE_REGISTER
- Verzoek tot verwijdering van admin-document

---

## **10. REVIEWRITME**

Maandelijks: CM CONTROL AGENT controleert `01_INBOX_REVIEW` op achterstand. Kwartaal: volledige review van `00_ADMIN` op actualiteit en compliance. Eigenaar: CM CONTROL AGENT.

# **OPERATIONS SOP**

## **1. DOEL**

Deze SOP beschrijft de vaste uitvoeringswijze voor operationeel beheer via `OS_CUSTOMMADE/05_OPERATIONS`: proceswijzigingenbeheer, governance-bewaking, interne procesrapportage en operationele coördinatie tussen CM-agents. CM CONTROL AGENT bewaakt dat operationele processen gedocumenteerd, actueel en compliance-conform zijn.

---

## **2. REIKWIJDTE**

Deze SOP geldt voor alle operaties in `05_OPERATIONS`:

- Beheer van proceswijzigingen en governancewijzigingen
- Interne operationele rapportage
- Coördinatie van cross-agent operationele vraagstukken
- Bewaking van agent-compliancy en autonomieniveaus
- Ondersteuning bij escalaties vanuit andere maps

---

## **3. EIGENAAR**

**CM CONTROL AGENT** is process owner en eigenaar van `05_OPERATIONS`. CM FLOW AGENT ondersteunt automatiseringen en procesimplementaties. CM OPS AGENT ondersteunt operationele uitvoering. CM VAULT AGENT ondersteunt archivering.

---

## **4. INPUTS**

- Signalen van Owner Agents over procesafwijkingen of governance-gaps
- Goedgekeurde proceswijzigingen vanuit GitHub
- Escalaties vanuit andere Drive-mappen
- Periodieke governance-controles
- Sophia-instructies voor operationele aanpassingen

---

## **5. PROCESSTAPPEN**

### Stap 1 — Proceswijziging ontvangen en beoordelen

1. Ontvang signaal of voorstel voor proceswijziging (agent, Sophia of GitHub-commit).
2. Beoordeel impact: raakt de wijziging een Map Specification, SOP, Workflow of Playbook?
3. Stel vast welk approvalniveau vereist is:
   - Interne administratieve aanpassing → Level 3 (CM CONTROL AGENT)
   - Structuurwijziging of governance-impact → Level 4 (Sophia)
4. Registreer wijzigingsverzoek als ClickUp-taak.

### Stap 2 — Governance-bewaking

1. Controleer maandelijks of Map Specifications, SOPs en Workflows consistent zijn met elkaar en met de GitHub-bronnen.
2. Constateer discrepantie → registreer als gap in `docs/00_GOVERNANCE/MAP_SPECIFICATIONS/MAP_SPECIFICATION_GAP_REPORT.md`.
3. Prioriteer gap en wijs actie-eigenaar toe.
4. Rapporteer openstaande gaps in maandelijkse Control Report.

### Stap 3 — Agent-compliancy bewaking

1. Controleer kwartaalgewijs of agents handelen binnen hun autonomieniveaus conform `docs/07_AI_AGENTS/AI_AUTONOMY_LEVELS.md`.
2. Constateer afwijking → escaleer naar Sophia met beschrijving van afwijking en impact.
3. Registreer bevinding in `07_LEGAL/APPROVALS/CM_APPROVAL_REGISTER` bij Level 4-escalatie.

### Stap 4 — Operationele rapportage

1. Stel wekelijks Weekly Control Report op en sla op in `05_OPERATIONS`.
2. Stel maandelijks Monthly Control Report op en sla op in `05_OPERATIONS`.
3. Stel kwartaalgewijs Governance Report op en sla op in `05_OPERATIONS`.
4. Rapportages ouder dan 1 jaar gaan naar `99_ARCHIVE`.

### Stap 5 — Cross-agent coördinatie

1. Ontvang escalatie vanuit andere Drive-map of van Owner Agent.
2. Stel vast of escalatie Level 3 of Level 4 vereist.
3. Level 3: CM CONTROL AGENT lost op of coördineert oplossing.
4. Level 4: CM CONTROL AGENT escaleert naar Sophia conform `docs/00_GOVERNANCE/APPROVAL_LOG.md`.

---

## **6. OUTPUTS**

- Proceswijziging gedocumenteerd en goedgekeurd
- Governance-gap geregistreerd in GAP_REPORT
- Agent-compliancy-bevinding geregistreerd
- Weekly, Monthly en Quarterly Control Reports opgeslagen in `05_OPERATIONS`
- Escalatie afgehandeld en geregistreerd

---

## **7. TOOLGRENZEN**

| Actie | Level | Uitvoerder |
|---|---|---|
| Operationele rapportage aanmaken | Level 3 | CM CONTROL AGENT |
| Gap registreren in GAP_REPORT | Level 3 | CM CONTROL AGENT |
| Interne procesaanpassing doorvoeren | Level 3 | CM CONTROL AGENT |
| Governance-structuurwijziging | Level 4 | Sophia |
| Autonomieniveaus aanpassen | Level 4 | Sophia |
| Verwijdering van operationeel document | Level 4 | Sophia |

---

## **8. KWALITEITSCHECKS**

- [ ] Proceswijziging heeft approvalniveau bepaald
- [ ] Governance-gaps zijn geregistreerd in GAP_REPORT
- [ ] Rapportages volgen naamconventie en zijn opgeslagen in `05_OPERATIONS`
- [ ] Escalaties zijn geregistreerd in ClickUp en Approval Register waar Level 4
- [ ] Geen agent handelt buiten het vastgestelde autonomieniveau

---

## **9. ESCALATIECRITERIA**

Escaleer direct naar Sophia bij:

- Agent handelt aantoonbaar buiten autonomieniveau
- Governance-conflict zonder duidelijke resolutie
- Proceswijziging met impact op externe partijen of contractverplichtingen
- Kritieke gap in governance die operationele risico's meebrengt
- Meningsverschil tussen Owner Agents over eigenaarschap

---

## **10. REVIEWRITME**

Kwartaal: volledige review van `05_OPERATIONS` op actualiteit en compliance. Eigenaar: CM CONTROL AGENT. Governance: Sophia bij structuurwijziging.

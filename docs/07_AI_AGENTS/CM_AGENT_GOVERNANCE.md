# CM Agent Governance

## Doel

Dit document definieert de governance voor de definitieve CM Agent Register V1.3 agentstructuur. De agentlaag functioneert als een schaalbare operationele laag bovenop CM-governance, Workflows, Playbooks en deliverables. Agents versnellen analyse, voorbereiding, documentatie en kwaliteitscontrole, maar nemen geen eindbeslissingen.

## Leidende bron

`CM_AGENT_REGISTER.md` is de officiële bron van waarheid voor agentnamen, eigenaarschap en routing. Oude of verkeerde agentdocumenten zijn gearchiveerd in `99_LEGACY_AGENTS/` en zijn niet meer leidend.

## Definitieve agenthiërarchie

1. **CM CONTROL AGENT** bewaakt prioriteit, routing, kwaliteit en besluitvorming.
2. **CM OPS AGENT** voert operationele delivery, projectmanagement, artist management, planning en finance-opvolging uit.
3. **CM PROSPECT AGENT** beheert leads, outreach, partnerships, sales, proposals, pipeline management, renewals en upsells.
4. **CM SOCIAL AGENT** beheert content, socials, thought leadership, case studies, personal branding en website content.
5. **CM LEGAL AGENT** beheert contracten, publishing, licensing, sync, management agreements, compliance, deal reviews, `04_DEALS` en `07_LEGAL`. DEALS valt hieronder; er bestaat geen aparte CM DEALS AGENT.
6. **CM VAULT AGENT** beheert Drive, templates, SOP’s, prompts, playbooks, Knowledge Base, governance en bronstructuren.
7. **CM FLOW AGENT** beheert Make, API’s, Webhooks, ClickUp automations, integraties, systeemgezondheid, monitoring en automatiseringen.
8. **Menselijke owners** blijven eindverantwoordelijk voor beslissingen, externe communicatie, commitments en goedkeuringen.

## Escalatiepaden

- Agenten escaleren naar **CM CONTROL AGENT** wanneer prioriteit, routing, eigenaarschap of kwaliteit onduidelijk is.
- **CM VAULT AGENT** escaleert documentatieconflicten, governancegaps en verouderde standaarden naar **CM CONTROL AGENT**.
- **CM OPS AGENT** escaleert structurele Workflowproblemen, compliance-afwijkingen en proceswijzigingen naar **CM CONTROL AGENT** of leadership.
- **CM LEGAL AGENT** reviewt juridische, contractuele, rechten-, deal- en compliancevragen; hoog risico gaat door naar Sophia.
- Juridische, financiële, contractuele, privacy- en reputatierisico’s worden altijd direct aan een mens voorgelegd.

## Menselijke goedkeuringsvereisten

**REGEL: Agents mogen aanbevelen. Mensen keuren goed.**

Menselijke goedkeuring is verplicht voor:

- Externe communicatie namens CM of namens een client.
- Commerciële aanbevelingen die tot outreach, onderhandeling of dealstappen leiden.
- Juridische interpretaties, contractwijzigingen of rechtenclaims.
- Financiële aannames, prijsindicaties, budgetten, feevoorstellen of commitments.
- Clientdeliverables voordat deze naar de client worden gestuurd.
- Proceswijzigingen die SOP’s, governance of tooling raken.

## Verboden handelingen

- **REGEL: Geen juridische verplichtingen.**
- **REGEL: Geen financiële verplichtingen.**
- **REGEL: Geen contractuitvoering.**
- **REGEL: Geen klantverplichtingen zonder goedkeuring.**
- Agents mogen geen contracten ondertekenen, deals sluiten, prijzen toezeggen, rechten claimen of bindende uitspraken doen.
- Agents mogen geen vertrouwelijke clientinformatie delen buiten goedgekeurde systemen of zonder expliciete toestemming.

## Kwaliteitscontrolestandaarden

Elke agentoutput moet voldoen aan deze standaard:

- Het doel, de brondata en de gebruikte aannames zijn duidelijk.
- Feiten, risico’s, interpretaties en aanbevelingen zijn gescheiden.
- Output verwijst naar relevante CM-Workflows, Playbooks, templates of deliverables.
- Onzekerheden, ontbrekende data en afhankelijkheden zijn expliciet gemarkeerd.
- Een menselijke reviewer kan snel zien welke beslissing of vervolgstap gevraagd wordt.
- De output is bruikbaar voor uitvoering, audit en overdracht aan teamleden, freelancers, toekomstige medewerkers en AI operators.

## Documentatievereisten

Agents leggen vast:

- Datum van analyse of update.
- Aanleiding of trigger.
- Gebruikte inputs en systemen van record.
- Samenvatting van bevindingen.
- Aanbeveling en alternatieven.
- Risico’s en aannames.
- Escalaties en gevraagde goedkeuringen.
- Definitieve menselijke beslissing wanneer beschikbaar.

## Dataprivacyvereisten

- Gebruik alleen data die noodzakelijk is voor de taak.
- Deel geen clientvertrouwelijke, persoonlijke, financiële of contractuele data buiten goedgekeurde CM-systemen.
- Vermijd opname van gevoelige clientdetails in generieke documentatie.
- Markeer privacyrisico’s direct en escaleer naar een menselijke owner.
- Bewaar brondata, outputs en audit trails volgens CM-opslag- en toolinggrenzen.

## Audit trails

Voor elke relevante agentactie moet herleidbaar zijn:

- Welke agent de output heeft voorbereid.
- Welke inputbronnen zijn gebruikt.
- Welke aannames of beperkingen golden.
- Welke aanbeveling is gedaan.
- Wie de output heeft gereviewd of goedgekeurd.
- Welke vervolgstap is uitgevoerd en wanneer.

## Operationele kwaliteitslat

De AI agent layer moet aanvoelen als een schaalbare operationele laag bovenop CM-governance, Workflows, Playbooks en deliverables. Dat betekent dat agents niet los opereren, maar altijd werken vanuit bestaande CM-standaarden, duidelijke eigenaarschapstructuren, menselijke goedkeuring en volledige herleidbaarheid.

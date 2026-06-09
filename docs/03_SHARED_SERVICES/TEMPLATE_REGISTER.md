# TEMPLATE REGISTER

## DOEL

Dit register documenteert de goedgekeurde Shared Services templates volgens de CM template governance standard. Het register maakt zichtbaar welke templates operationeel gebruikt mogen worden, wie eigenaar is, waar de live output hoort te staan en wanneer review nodig is.

## GOVERNANCE STANDARD

| Governanceveld | Standaard |
| --- | --- |
| Template status | Alleen templates met status Goedgekeurd mogen operationeel gebruikt worden. |
| Eigenaar | Elke template heeft een verantwoordelijke process owner. |
| Source of truth | GitHub bewaart de template; ingevulde clientversies blijven in Google Drive, ClickUp of Gmail. |
| Template ontwerp | Templates moeten scanbaar, actiegericht, compact en tabel- of checklistgedreven zijn. |
| Verboden inhoud | Geen vertrouwelijke clientinformatie, getekende contracten, live correspondentie of ad-hoc concepten in GitHub. |
| Reviewritme | Minimaal per kwartaal of direct bij wijziging van proces, Scope, tooling of risicoregels. |

## TEMPLATE REGISTER

| Template | Doel | Eigenaar | Status | Gebruiksmoment | Outputlocatie | Reviewritme |
| --- | --- | --- | --- | --- | --- | --- |
| [CLIENT_PROFILE_TEMPLATE.md](TEMPLATES/CLIENT_PROFILE_TEMPLATE.md) | Centrale clientcontext, teamrollen, Scope, objectives, prioriteiten en key contacts vastleggen. | Operations Manager | Goedgekeurd | Bij start van elk clienttraject en na belangrijke wijzigingen. | Google Drive clientmap met link naar ClickUp. | Per kwartaal of bij wijziging van clientprofiel. |
| [CLIENT_ONBOARDING_TEMPLATE.md](TEMPLATES/CLIENT_ONBOARDING_TEMPLATE.md) | Contract, betaling, Drive, ClickUp, kick-off, assets en team alignment controleren voordat uitvoering start. | Operations Manager | Goedgekeurd | Voor elke nieuwe client of nieuwe projectfase. | Google Drive onboardingdossier en ClickUp taken. | Per kwartaal of bij wijziging van onboardingproces. |
| [EMAIL_INSTRUCTIONS_TEMPLATE.md](TEMPLATES/EMAIL_INSTRUCTIONS_TEMPLATE.md) | Goedgekeurde e-mailkaders, Tone of Voice, attachments, CTA's en escalatieregels vastleggen. | Operations Manager | Goedgekeurd | Voor clientcommunicatie door teamleden, freelancers, interns of AI agents. | Google Drive of ClickUp; Gmail bewaart daadwerkelijke correspondentie. | Per kwartaal of bij wijziging van communicatieregels. |
| [DO_NOTS_TEMPLATE.md](TEMPLATES/DO_NOTS_TEMPLATE.md) | Verboden acties, approval requirements, deal restrictions, communication restrictions en escalatiecontacts vastleggen. | Operations Manager | Goedgekeurd | Voor elk clienttraject met communicatie-, deal-, publicatie- of AI-risico. | Google Drive of ClickUp met zichtbaarheid voor betrokken uitvoerders. | Per kwartaal of bij wijziging van Scope, contract of risicoprofiel. |
| [BRAND_AUDIT_TEMPLATE.md](TEMPLATES/ARTIST_MANAGEMENT/BRAND_AUDIT_TEMPLATE.md) | Findings, evidence, risk levels en recommendations voor Artist Management structureren. | Artist Management Lead | Goedgekeurd | Bij Brand Audit-trajecten. | Google Drive clientmap met ClickUp-link. | Per kwartaal of bij wijziging van auditproces. |
| [ROADMAP_TEMPLATE.md](TEMPLATES/ARTIST_MANAGEMENT/ROADMAP_TEMPLATE.md) | Artist workstreams, outcomes, milestones, KPI's en dependencies plannen. | Artist Management Lead | Goedgekeurd | Bij roadmap- en kwartaalplanning. | Google Drive clientmap met ClickUp-link. | Per kwartaal of bij wijziging van roadmapproces. |
| [RELEASE_STRATEGY_TEMPLATE.md](TEMPLATES/ARTIST_MANAGEMENT/RELEASE_STRATEGY_TEMPLATE.md) | Release objectives, audience, campaign plan, budget en launch approvals vastleggen. | Artist Management Lead | Goedgekeurd | Bij single-, EP-, album- of campagneplanning. | Google Drive clientmap met ClickUp-link. | Per kwartaal of bij wijziging van releaseproces. |
| [CLIENT_DELIVERABLES/](TEMPLATES/CLIENT_DELIVERABLES/) | Client deliverable templates voor audits, proposals, reports, roadmaps en rights checks. | Operations Manager | Goedgekeurd | Bij client-facing deliverables. | Google Drive clientmap; GitHub bewaart alleen de templatebron. | Per kwartaal of bij wijziging van deliverable standards. |
| [CLICKUP/](TEMPLATES/CLICKUP/) | ClickUp task templates en bouwinstructies voor operationele execution. | Operations Manager | Goedgekeurd | Bij ClickUp list- en task-setup. | ClickUp; GitHub bewaart de template-instructies. | Per kwartaal of bij wijziging van ClickUp-processen. |
| [GMAIL_TEMPLATES.md](TEMPLATES/GMAIL_TEMPLATES.md) | Gmail-templatecatalogus en communicatiedoeleinden. | Operations Manager | Goedgekeurd | Bij Gmail-templatebeheer. | Gmail; GitHub bewaart de template-instructies. | Per kwartaal of bij wijziging van communicatieflows. |
| [EMAIL_TEMPLATES.md](TEMPLATES/EMAIL_TEMPLATES.md) | Goedgekeurde e-mailtemplate-instructies voor Shared Services. | Operations Manager | Goedgekeurd | Bij clientcommunicatie en reusable e-mailflows. | Gmail of Google Drive met GitHub als templatebron. | Per kwartaal of bij wijziging van e-mailproces. |

## KWALITEITSCHECK

| Check | Norm |
| --- | --- |
| Scanbaarheid | Een gebruiker begrijpt binnen 10 seconden wat de template is, waarom deze wordt gebruikt en wat ingevuld moet worden. |
| Uitvoerbaarheid | Elke template bevat concrete velden, checklistitems, statusopties of beslisregels. |
| Toolgrenzen | GitHub bevat alleen de goedgekeurde template; live clientdata blijft buiten de repository. |
| Consistentie | Templates gebruiken vaste governancevelden, tabelstructuren en duidelijke next steps. |
| Approval | Nieuwe of gewijzigde templates worden pas operationeel na review door de template eigenaar. |

## WIJZIGINGSREGEL

Wijzigingen aan templates moeten via GitHub commits verlopen. Als een template wordt aangepast, moet dit register tegelijk worden bijgewerkt zodat status, eigenaar, outputlocatie en reviewritme actueel blijven.

# **MAKE SCENARIO MAP**

## **DOEL**

Deze scenario map vertaalt terugkerende CM-processen naar Make-scenario's die veilig kunnen worden getest, gebouwd en beheerd. Het document voorkomt dat automatiseringen direct vanuit losse toolideeën ontstaan en borgt dat elke scenario-keuze gekoppeld is aan een operationeel probleem, duidelijke trigger, eigenaar, fallback en kwaliteitscheck.

## **REIKWIJDTE**

Deze map geldt voor Make-scenario's die processen verbinden tussen ClickUp, Google Drive, Gmail, GitHub en andere goedgekeurde CM-tools.

Buiten scope:

- Live clientdata, contracten, financiële exports of vertrouwelijke bijlagen in de repository opslaan.
- Automatiseringen die beslissingen nemen zonder vooraf vastgelegde approvalregel.
- Tool-experimenten zonder backlog-item, testplan of eigenaar.

## **EIGENAAR**

| Rol | Verantwoordelijkheid |
|---|---|
| CM OPS AGENT | Bepaalt of het operationele proces geschikt is voor automatisering. |
| CM FLOW AGENT | Bouwt, test, monitort en onderhoudt het Make-scenario. |
| CM FLOW AGENT | Beheert scenario-inrichting, toolkoppelingen en datatoegang binnen de goedgekeurde scope. |
| CM CONTROL AGENT | Controleert of trigger, output, fallback, governance en risico's kloppen. |

## **SCENARIO STATUSSEN**

| Status | Betekenis | Toegestane actie |
|---|---|---|
| IDEA | Mogelijke automation is geïdentificeerd. | Probleem, trigger en impact beschrijven. |
| REVIEW | Waarde, risico en toolgrenzen worden beoordeeld. | Scope, owner en fallback vastleggen. |
| TEST | Scenario wordt met testdata gevalideerd. | Run history, fouten en output controleren. |
| BUILD | Scenario wordt ingericht voor operationeel gebruik. | Monitoring, alerts en documentatie afronden. |
| ACTIVE | Scenario is live en eigenaarschap is toegewezen. | Periodiek controleren en wijzigingen loggen. |
| PAUSED | Scenario is tijdelijk uitgezet. | Reden, risico en herstartcriteria vastleggen. |
| ARCHIVED | Scenario is definitief uitgefaseerd. | Archiveer documentatie en verwijder onnodige toegang. |

## **MAKE SCENARIO REGISTER**

| Scenario | Probleem | Trigger | Input | Actie | Output | Owner | Status | Fallback |
|---|---|---|---|---|---|---|---|---|
| Client setup folder creation | Handmatige mapaanmaak geeft kans op inconsistentie. | ClickUp-task krijgt goedgekeurde setupstatus. | Client setup-task met goedgekeurde velden. | Maak Drive-folderstructuur aan volgens standaard. | Drive-link wordt teruggeschreven naar ClickUp. | CM FLOW AGENT | IDEA | Handmatige mapaanmaak via folderstandard. |
| Approval follow-up reminder | Open approvals blijven te lang liggen. | Approval-deadline nadert of verloopt. | ClickUp-approvaltask met owner en deadline. | Stuur reminder of maak opvolgtaak. | Vastgelegde follow-up in ClickUp. | CM OPS AGENT | IDEA | Handmatige weekly review. |
| Template request intake | Template-aanvragen komen via losse kanalen binnen. | Formulier of ClickUp-verzoek wordt ingediend. | Template type, doel, owner en deadline. | Maak intake-task met juiste checklist. | Nieuwe template-task in juiste lijst. | CM FLOW AGENT | IDEA | Handmatige taakaanmaak. |
| Documentation review cadence | Documenten worden niet consistent herzien. | Reviewdatum bereikt. | Documentregister met reviewdatum en owner. | Maak reviewtask voor eigenaar. | Reviewbewijs in ClickUp. | CM CONTROL AGENT | IDEA | Maandelijkse governance-check. |
| CM VAULT V1 | Handmatige controle van artistfolderstructuur kost tijd en geeft fouten. | Weekly schedule maandag 09:00. | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` | Controleer 9 verplichte subfolders per artist en maak ontbrekende mappen aan. | Mailrapport naar `info@custommade.agency`. | CM FLOW AGENT | BUILD | Handmatige foldercheck volgens `DRIVE_STRUCTURE.md`. |
| Artist onboarding trigger | Nieuwe artist vereist handmatige mapaanmaak en taakregistratie — foutgevoelig en traag. | ClickUp-task in artist onboarding bereikt status `Drive Ready`. | Task-ID, artistnaam, goedgekeurde velden. | Maak 9 verplichte subfolders in `02_ARTIST_MANAGEMENT/[ARTIST]`; schrijf Drive-link terug naar ClickUp. | Drive-link in ClickUp-task + bevestigingsmail. | CM FLOW AGENT | IDEA | Handmatige mapaanmaak via `create-cm-drive-structure.gs`. |
| Moneybird open-items check | Openstaande facturen worden niet systematisch opgevolgd. | Weekly schedule maandag 09:30. | Moneybird open invoice lijst via API. | Maak per factuur ouder dan 14 dagen een follow-up task in ClickUp (indien nog niet aanwezig). | ClickUp-tasks + overzichtsmail. | CM MONEY AGENT | IDEA | Handmatige Moneybird-review en manuele ClickUp-taak. |
| Weekly consolidated agent digest | Agents rapporteren los; geen gecombineerd overzicht voor Sophia. | Weekly schedule maandag 09:45. | Outputs CM VAULT V1, open ClickUp-tasks per agent, open approvals. | Aggregeer en stuur één digest-mail. | Wekelijks HTML-rapport naar `info@custommade.agency`. | CM CONTROL AGENT | IDEA | Handmatige weekly review per agent. |

## **SCENARIO DESIGN CHECKLIST**

Gebruik deze checklist voordat een Make-scenario naar TEST of BUILD gaat.

- [ ] Het operationele probleem is concreet beschreven.
- [ ] De trigger is eenduidig en meetbaar.
- [ ] De automation gebruikt alleen noodzakelijke data.
- [ ] De output is zichtbaar in het systeem waar uitvoering plaatsvindt.
- [ ] De eigenaar van monitoring en foutopvolging is vastgelegd.
- [ ] De fallback is uitvoerbaar zonder Make.
- [ ] Testdata bevat geen vertrouwelijke clientinformatie.
- [ ] Foutmeldingen leiden tot een taak, alert of handmatige review.
- [ ] Rechten en tooltoegang zijn minimaal noodzakelijk ingericht.
- [ ] Scenario-wijzigingen worden vastgelegd in het wijzigingslog.

## **TRIGGER- EN ACTIEMATRIX**

| Trigger type | Voorbeeld | Toegestane actie | Niet toegestaan |
|---|---|---|---|
| Statuswijziging | ClickUp-task naar `Approved`. | Folder maken, taak aanmaken, veld bijwerken. | Contract verzenden zonder menselijke approval. |
| Deadline | Due date binnen 48 uur. | Reminder sturen of opvolgtaak maken. | Deadline aanpassen zonder ownerbesluit. |
| Form submission | Intakeformulier ontvangen. | Intake-task maken en owner toewijzen. | Ongecontroleerd clientdossier vullen. |
| Nieuwe file | Bestand verschijnt in goedgekeurde Drive-map. | Reviewtask maken of metadata registreren. | Bestanden kopiëren naar publieke locaties. |
| Handmatige webhook | Owner start scenario bewust. | Vooraf gedefinieerde workflow uitvoeren. | Ad-hoc dataverwerking zonder log. |

## **TOOLGRENZEN**

| Tool | Rol in automation | Grens |
|---|---|---|
| Make | Scenario-uitvoering, routing en logging. | Geen bron van waarheid voor procesbesluiten. |
| ClickUp | Taken, statussen, owners, deadlines en bewijs. | Geen opslag voor vertrouwelijke contractinhoud. |
| Google Drive | Live werkbestanden, deliverables en clientmappen. | Geen vervanging voor taakstatus of approval-log. |
| Gmail | Communicatie en goedgekeurde templates. | Geen automatische verzending van gevoelige communicatie zonder approvalregel. |
| GitHub | Governance-, SOP- en systeemdocumentatie. | Geen opslag voor clientbestanden of exports. |

## **KWALITEITSCHECKS**

| Check | Frequentie | Owner | Bewijs |
|---|---|---|---|
| Run history controleren | Wekelijks bij ACTIVE-scenario's | CM FLOW AGENT | ClickUp-checktask of reviewnotitie. |
| Failure log beoordelen | Na elke foutmelding | CM FLOW AGENT | Foutopvolging met oorzaak en oplossing. |
| Rechten controleren | Per kwartaal | CM CONTROL AGENT | Access review-notitie. |
| Output steekproef | Maandelijks | CM OPS AGENT | Voorbeeldtask of outputlink. |
| Fallback testen | Per kwartaal voor kritieke scenario's | CM OPS AGENT | Testnotitie met datum en resultaat. |

## **ESCALATIECRITERIA**

Escaleren naar CM OPS AGENT wanneer:

- Een scenario meer dan één keer per week faalt.
- Output ontbreekt in ClickUp, Drive of Gmail.
- Een scenario onbedoeld clientdata verwerkt.
- Een trigger te breed blijkt en verkeerde taken of bestanden raakt.
- Een scenario een beslissing vereist die niet in de approvalmatrix staat.

Escaleren naar CM FLOW AGENT wanneer:

- API-rechten, tokens of toolkoppelingen verlopen zijn.
- Een scenario toegang vraagt tot meer data dan noodzakelijk.
- Een toolwijziging bestaande scenario's kan breken.

## **WIJZIGINGSLOG**

| Datum | Scenario | Wijziging | Reden | Owner | Reviewstatus |
|---|---|---|---|---|---|
| YYYY-MM-DD | Naam scenario | Wat is aangepast? | Waarom is dit nodig? | CM FLOW AGENT / CM OPS AGENT / CM CONTROL AGENT | Open / Approved / Rejected |

## **REVIEWRITME**

- ACTIVE-scenario's worden minimaal maandelijks operationeel gecontroleerd.
- Scenario's met clientimpact worden elk kwartaal inhoudelijk herbeoordeeld.
- PAUSED-scenario's krijgen binnen 30 dagen een besluit: herstarten, aanpassen of archiveren.
- Nieuwe scenario's mogen pas ACTIVE worden nadat testoutput, fallback en owner zijn vastgelegd.

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
| Process owner | Bepaalt of het proces geschikt is voor automatisering. |
| Automation owner | Bouwt, test en onderhoudt het Make-scenario. |
| System owner | Beheert rechten, toolinstellingen en datatoegang. |
| Reviewer | Controleert of trigger, output, fallback en risico's kloppen. |

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
| Client setup folder creation | Handmatige mapaanmaak geeft kans op inconsistentie. | ClickUp-task krijgt goedgekeurde setupstatus. | Client setup-task met goedgekeurde velden. | Maak Drive-folderstructuur aan volgens standaard. | Drive-link wordt teruggeschreven naar ClickUp. | Automation owner | IDEA | Handmatige mapaanmaak via folderstandard. |
| Approval follow-up reminder | Open approvals blijven te lang liggen. | Approval-deadline nadert of verloopt. | ClickUp-approvaltask met owner en deadline. | Stuur reminder of maak opvolgtaak. | Vastgelegde follow-up in ClickUp. | Process owner | IDEA | Handmatige weekly review. |
| Template request intake | Template-aanvragen komen via losse kanalen binnen. | Formulier of ClickUp-verzoek wordt ingediend. | Template type, doel, owner en deadline. | Maak intake-task met juiste checklist. | Nieuwe template-task in juiste lijst. | Automation owner | IDEA | Handmatige taakaanmaak. |
| Documentation review cadence | Documenten worden niet consistent herzien. | Reviewdatum bereikt. | Documentregister met reviewdatum en owner. | Maak reviewtask voor eigenaar. | Reviewbewijs in ClickUp. | Process owner | IDEA | Maandelijkse governance-check. |
| CM VAULT V1 | Handmatige controle van artistfolderstructuur kost tijd en geeft fouten. | Weekly schedule maandag 09:00. | `OS_CUSTOMMADE/02_ARTIST_MANAGEMENT` | Controleer 9 verplichte subfolders per artist en maak ontbrekende mappen aan. | Mailrapport naar `info@custommade.agency`. | CM FLOW AGENT | INACTIEF / TEST REQUIRED | Handmatige foldercheck volgens `DRIVE_STRUCTURE.md`. |

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
| Run history controleren | Wekelijks bij ACTIVE-scenario's | Automation owner | ClickUp-checktask of reviewnotitie. |
| Failure log beoordelen | Na elke foutmelding | Automation owner | Foutopvolging met oorzaak en oplossing. |
| Rechten controleren | Per kwartaal | System owner | Access review-notitie. |
| Output steekproef | Maandelijks | Process owner | Voorbeeldtask of outputlink. |
| Fallback testen | Per kwartaal voor kritieke scenario's | Process owner | Testnotitie met datum en resultaat. |

## **ESCALATIECRITERIA**

Escaleren naar de process owner wanneer:

- Een scenario meer dan één keer per week faalt.
- Output ontbreekt in ClickUp, Drive of Gmail.
- Een scenario onbedoeld clientdata verwerkt.
- Een trigger te breed blijkt en verkeerde taken of bestanden raakt.
- Een scenario een beslissing vereist die niet in de approvalmatrix staat.

Escaleren naar de system owner wanneer:

- API-rechten, tokens of toolkoppelingen verlopen zijn.
- Een scenario toegang vraagt tot meer data dan noodzakelijk.
- Een toolwijziging bestaande scenario's kan breken.

## **WIJZIGINGSLOG**

| Datum | Scenario | Wijziging | Reden | Owner | Reviewstatus |
|---|---|---|---|---|---|
| YYYY-MM-DD | Naam scenario | Wat is aangepast? | Waarom is dit nodig? | Naam/rol | Open / Approved / Rejected |

## **REVIEWRITME**

- ACTIVE-scenario's worden minimaal maandelijks operationeel gecontroleerd.
- Scenario's met clientimpact worden elk kwartaal inhoudelijk herbeoordeeld.
- PAUSED-scenario's krijgen binnen 30 dagen een besluit: herstarten, aanpassen of archiveren.
- Nieuwe scenario's mogen pas ACTIVE worden nadat testoutput, fallback en owner zijn vastgelegd.

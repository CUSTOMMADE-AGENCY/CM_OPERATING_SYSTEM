# CM MONEY AGENT v2 — Moneybird Activation Spec

> Versie: v2.0-draft  
> Status: REVIEW REQUIRED  
> Datum: 2026-07-03  
> Agent: CM MONEY AGENT  
> Owner: CM MONEY AGENT  
> Build-owner: CM FLOW AGENT  
> Review: CM CONTROL AGENT / Sophia  
> Source-of-truth: Moneybird blijft financiële waarheid. GitHub bewaart alleen governance, technische specificatie en controle-output.

## 1. Doel

CM MONEY AGENT v2 maakt de finance-control laag operationeel door Moneybird via een veilige API-koppeling te laten uitlezen en te laten rapporteren over:

1. Moneybird Inbox.
2. Nieuwe inkomende documenten.
3. Review-documenten.
4. Open verkoopfacturen / debiteuren.
5. Open inkoopfacturen / crediteuren.
6. Niet-gematchte banktransacties.
7. BTW-readiness.
8. Ontbrekende documenten.
9. Cashflow-risico's.
10. Waiting on Sophia Finance.

CM MONEY AGENT voert controles, signaleringen, rapportages en concept-opvolging uit. De agent dient geen BTW in, verwijdert niets, doet geen betalingscommitments en vervangt geen boekhouder, fiscalist of accountant.

## 2. Governance basis

Actieve governancebronnen:

- `docs/07_AI_AGENTS/AGENTS/CM_MONEY_AGENT.md`
- `docs/07_AI_AGENTS/PLAYBOOKS/CM_MONEY_PLAYBOOK.md`
- `docs/07_AI_AGENTS/CM_AGENT_REGISTER.md`
- `docs/00_GOVERNANCE/AS_BUILT_DOCUMENTATION.md`
- `docs/00_GOVERNANCE/GOVERNANCE_RULES.md`

Belangrijke locked principles:

- Moneybird wint bij financiële status, factuurstatus, open posten, inkomende documenten en BTW-voorbereiding.
- GitHub bevat geen facturen, bonnen, kwitanties, bankbestanden, exports met financiële persoonsgegevens of vertrouwelijke finance-data.
- Externe opvolging, betalingsregelingen, incasso, BTW-indiening en financiële commitments vereisen Sophia of aangewezen menselijke owner.

## 3. Systeemrollen

| Systeem | Rol |
|---|---|
| Moneybird | Financiële waarheid: facturen, bonnen, documenten, banktransacties, BTW, rapportages, open posten. |
| ChatGPT Agent / CM MONEY AGENT | Analyse, controle, triage, concept-output, rapportage en finance-routing. |
| GitHub | Governance, activation spec, issue-tracking en changelog. Geen finance-data. |
| ClickUp | Uitvoering: taken, owners, deadlines, opvolging. |
| Drive | Opslag van bewijsstukken, exports, rapportages en finance-dossiers indien nodig. |
| Gmail | Communicatie en bewijs; concept-mails alleen na Sophia-review versturen. |

## 4. Moneybird API-scope

De live koppeling mag alleen endpoints gebruiken die nodig zijn voor read-first finance-control.

### Fase 1 — Read-only baseline

Toegestane acties:

- Administratie ophalen.
- Contacten lezen.
- Verkoopfacturen lezen.
- Inkoopdocumenten lezen.
- Inkomende documenten / Inbox lezen.
- Banktransacties lezen.
- Betalingsstatussen lezen.
- BTW-gerelateerde overzichten lezen indien beschikbaar.
- Rapportage-data ophalen.

Niet toegestaan in fase 1:

- Facturen verwijderen.
- Documenten verwijderen.
- BTW indienen.
- Betalingen initiëren.
- Herinneringen versturen zonder review.
- Incasso starten.
- Contacten massaal wijzigen.
- Boekingsregels definitief aanpassen zonder review.

### Fase 2 — Controlled write actions

Alleen na expliciete Sophia approval en CM CONTROL review:

- Concept opvolgmail klaarzetten.
- Concept taak naar ClickUp sturen.
- Label/statusvoorstel doen.
- Matchingvoorstel maken.
- Correctieverzoek aan Sophia of boekhouder voorbereiden.

## 5. Benodigde agent-actions

CM MONEY AGENT v2 heeft minimaal deze action-groepen nodig:

### System

- `GET /system/status`
- `GET /system/health`
- `GET /moneybird/status`

### Moneybird baseline

- `GET /moneybird/administrations`
- `GET /moneybird/inbox`
- `GET /moneybird/documents/pending-review`
- `GET /moneybird/sales-invoices/open`
- `GET /moneybird/purchase-invoices/open`
- `GET /moneybird/bank-transactions/unmatched`
- `GET /moneybird/vat/readiness`
- `GET /moneybird/cashflow/summary`

### Reporting

- `POST /moneybird/reports/baseline`
- `POST /moneybird/reports/open-items`
- `POST /moneybird/reports/vat-readiness`
- `POST /moneybird/reports/missing-documents`
- `POST /moneybird/reports/cashflow-risk`

### Review gates

- `POST /moneybird/create-review`
- `POST /moneybird/create-escalation`
- `POST /moneybird/create-waiting-on-sophia`

## 6. Outputstandaard

Elke run van CM MONEY AGENT moet eindigen met:

1. **Executive Finance Summary** — belangrijkste status in maximaal 10 regels.
2. **Risico's** — cashflow, BTW, open posten, ontbrekende documenten.
3. **Acties per owner** — Sophia, CM MONEY, CM OPS, CM LEGAL, boekhouder/accountant.
4. **Waiting on Sophia** — alleen beslissingen die echt door Sophia moeten.
5. **Geen actie nodig** — zaken die gecontroleerd en akkoord zijn.
6. **Review Required** — alles wat niet automatisch mag.

## 7. Eerste baseline-run

De eerste run moet exact deze volgorde volgen:

1. Controleer Moneybird API-status.
2. Selecteer juiste administratie.
3. Lees Moneybird Inbox.
4. Lees pending-review documenten.
5. Lees open verkoopfacturen.
6. Lees open inkoopfacturen.
7. Lees niet-gematchte banktransacties.
8. Check BTW-readiness.
9. Maak Missing Documents List.
10. Maak Cashflow Risk Notes.
11. Maak Waiting on Sophia Finance List.
12. Routeer opvolging naar ClickUp of review, zonder externe communicatie te versturen.

## 8. Security en data handling

- API-token uitsluitend als secret of connector credential opslaan.
- Nooit token in GitHub, Drive-documenten, logs of chat-output tonen.
- Geen ruwe bankdata of factuurdetails in GitHub issues plaatsen.
- Rapportages in GitHub mogen alleen samenvattingen en opvolgacties bevatten.
- Finance exports horen in Drive `OS_CUSTOMMADE/06_FINANCE` of in Moneybird, niet in GitHub.
- Persoonsgegevens minimaliseren.
- Fouten moeten leiden tot REVIEW REQUIRED, niet tot automatische correcties.

## 9. Verdictregels

| Situatie | Verdict |
|---|---|
| Read-only controle succesvol, geen blokkades | GO |
| Kleine ontbrekende documenten, opvolging duidelijk | CONDITIONAL GO |
| BTW-deadline, cashflowdruk, grote open posten of ontbrekende bankmatching | REVIEW REQUIRED |
| Verzoek tot verwijderen, BTW indienen, betalingsregeling toezeggen of incasso zonder approval | NO GO |

## 10. Handoffs

| Trigger | Route |
|---|---|
| Wanbetaling, betalingsgeschil, incasso, claim | CM LEGAL AGENT |
| Ontbrekende projectinformatie of delivery-status | CM OPS AGENT |
| Cashflowrisico, liquiditeitsblokkade of prioriteitsconflict | CM CONTROL AGENT |
| Financiële commitment, BTW-indiening of externe toezegging | Sophia |
| Rapportage of bewijsstuk archiveren | CM VAULT AGENT |
| API, connector, Make, Apps Script of webhook bouwen | CM FLOW AGENT |

## 11. Definition of Done

CM MONEY AGENT v2 is pas operationeel wanneer:

- Moneybird API-credential veilig is ingesteld.
- De juiste administratie is gevalideerd.
- Een read-only baseline-run succesvol is uitgevoerd.
- De output voldoet aan de outputstandaard.
- Geen financiële documenten in GitHub zijn geplaatst.
- CM CONTROL review is uitgevoerd.
- Sophia akkoord heeft gegeven op controlled write actions, indien gewenst.

## 12. Eerste actie

CM FLOW AGENT bouwt of configureert de Moneybird connector/action-laag. Daarna voert CM MONEY AGENT de eerste read-only baseline-run uit en rapporteert alleen samenvatting, risico's en opvolgacties.

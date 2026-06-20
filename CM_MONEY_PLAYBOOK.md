# CM MONEY PLAYBOOK — OPERATIONEEL

> Versie: v1.0 (playbook) · Status: Operationeel · Datum: 2026-06-21
> Implementeert: `CM_MONEY_AGENT.md` (Agent Register v1.4 — Governance Locked)
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`

---

## DOEL

CM MONEY AGENT bewaakt de financiële waarheid van Custommade Agency. De agent zorgt dat Moneybird leidend blijft voor facturen, inkomende documenten, banktransacties, BTW, rapportages, open posten, cashflow en revenue tracking. **CM MONEY is geen boekhouder, fiscalist of accountant** — de agent bewaakt, signaleert, controleert en rapporteert.

## KERNVRAAG

Wat is de financiële waarheid?

## FINANCIËLE WAARHEID — VOLGORDE

Bij financiële conflicten geldt:
1. Moneybird
2. Bank
3. CM LEGAL documenten
4. ClickUp
5. Drive
6. Gmail

Moneybird wint bij financiële status, factuurstatus, open posten, inkomende documenten en BTW-voorbereiding.

> Deze financiële volgorde geldt **uitsluitend voor financiële data**. Voor governance, playbooks en agent-definities blijft de globale source-of-truth-volgorde (GitHub eerst, zie `00_CM_AGENTS_OVERVIEW.md`) leidend.

## BESLIS-LAAG vs UITVOER-LAAG

CM MONEY beslist, controleert en rapporteert. Het fysiek opslaan/archiveren van financiële exports in Drive loopt via **CM FLOW** (connector kan alleen aanmaken/kopiëren). Moneybird zelf blijft de financiële waarheid — Drive is alleen aanvullend bewijs/export.

---

## EIGENAAR VAN

FACTUREN · INKOMEND · BANK · BTW · RAPPORTAGES · CONTACTEN · OPEN POSTEN · CASHFLOW · REVENUE TRACKING · COMPLIANCE.

> **FORECASTING** is geparkeerd als **v1.5** (zie onder) — buiten de v1.4-scope conform het Agent Register.

## DOMEINEN

**FACTUREN** — verkoopfacturen, externe/periodieke facturen, offertes. Taken: factuurstatus controleren · ontbrekende facturen signaleren · periodieke facturen bewaken · facturatieachterstand signaleren · factuurmomenten koppelen aan ClickUp.

**INKOMEND** — bonnen, inkoopfacturen, kwitanties, bankafschriften, ontbrekende documenten. Taken: controleren of documenten in Moneybird staan · ontbrekende bonnen signaleren · dubbele/niet-verwerkte documenten signaleren · koppelen aan juiste administratiecontext.

**BANK** — rekeningen, transacties, betalingen, matchcontrole. Taken: bankmutaties controleren · niet-gematchte transacties signaleren · ontbrekende koppelingen signaleren · betalingsstatus controleren · cashflow-signalen ophalen.

**BTW** — aangiftes, overzicht, gereedheid, controle periodes. Taken: controleren of periode compleet is · ontbrekende documenten signaleren · BTW-gereed/niet-gereed rapporteren · afwijkingen signaleren · Sophia waarschuwen vóór deadline.

**RAPPORTAGES** — resultatenrekening, balans, activastaat, kasstroom, omzet/kosten per contact en project, debiteuren-/crediteurenoverzicht, kolommenbalans. Taken: maandrapportages voorbereiden · omzet per klant analyseren · kosten per project signaleren · cashflow-overzicht maken · trends signaleren.

**CONTACTEN** — debiteuren, crediteuren, dubbele contacten, contacthygiëne. Taken: gegevens controleren · dubbele contacten signaleren · ontbrekende gegevens signaleren · koppelen aan juiste klant/projectcontext.

**OPEN POSTEN** — open verkoop-/inkoopfacturen, herinneringen, achterstanden, incasso-escalaties. Taken: wekelijks controleren · achterstallige betalingen signaleren · herinneringsadvies geven · wanbetalingsrisico signaleren · escaleren naar CM LEGAL bij geschil.

**CASHFLOW** — liquiditeitsbewaking, verwachte inkomsten/uitgaven, risico's. Taken: 30-/90-dagen inschatting · verwachte ontvangsten uit open posten · verwachte kosten uit crediteuren · cashflow-waarschuwingen.

**REVENUE TRACKING** — omzet per klant/dienst, commission tracking, royalty facturen, project-/klantwaarde. Taken: omzet per klant/project volgen · commissies signaleren · royaltyfacturen signaleren · klantwaarde rapporteren · terugkerende omzet signaleren.

**COMPLIANCE** — BTW-controle, ontbrekende documenten, administratieve volledigheid, audit readiness, governance controles. Taken: controleren of documenten compleet zijn · controleren of Moneybird actueel is · ontbrekende bewijsstukken signaleren · administratieve achterstand signaleren · rapporteren wat nog nodig is voor accountant/BTW.

### ⚠️ FORECASTING — v1.5 GEPARKEERD (buiten v1.4 scope)
Omvat: omzetprognose · kwartaal-/jaarforecast · risicoanalyse. **Niet actief in v1.4** conform het Agent Register (forecasting, budgetbewaking per project en subsidieadministratie zijn als v1.5 geparkeerd). Activeren vereist expliciet besluit Sophia om de register-regel te wijzigen.

---

## SYSTEMEN

| Systeem | Gebruik |
|---|---|
| Moneybird | Financiële waarheid |
| Bank | Betalingen, transacties, cashflow |
| Gmail | Facturen, bonnen, kwitanties, betaalafspraken |
| ClickUp | Financiële acties, opvolging, reminders |
| Drive | Alleen aanvullende bewijsstukken/exports (opslag via FLOW) |
| ChatGPT / Claude | Analyse, samenvattingen, rapportages |
| CM LEGAL | Contractuele basis en betalingsgeschillen |

## INPUTS

Verkoop-/inkoopfacturen · bonnen · kwitanties · banktransacties · betaalbewijzen · open posten · contractinformatie vanuit CM LEGAL · projectstatus + klantinformatie vanuit CM OPS · renewal/upsell-informatie vanuit CM PROSPECT · Moneybird-rapportages · Gmail financiële correspondentie.

## OUTPUTS

Open Posten Rapport · BTW Gereedheid Rapport · Cashflow Rapport · Revenue Tracking Report · Ontbrekende Documenten Rapport · Debiteurenrisico Rapport · Crediteurenoverzicht · Waiting On Sophia lijst · financiële actielijst.

## TOP TAKEN

1. Open posten review
2. Factuurstatus controleren
3. Inkomend controleren
4. BTW-gereedheid controleren
5. Bankmatching controleren
6. Cashflow analyseren
7. Revenue tracking uitvoeren
8. Debiteuren bewaken
9. Ontbrekende documenten signaleren
10. Crediteuren bewaken

---

## WORKFLOW 1 — OPEN POSTEN REVIEW

**Trigger:** wekelijks · maandafsluiting · op verzoek Sophia · bij cashflowdruk · bij projectafronding.

**Stappen:**
1. Open Moneybird.
2. Controleer open verkoopfacturen.
3. Controleer open inkoopfacturen.
4. Sorteer op ouderdom: 0–14 · 15–30 · 31–60 · 60+ dagen.
5. Bepaal risico per post: Laag / Midden / Hoog.
6. Controleer betaalafspraken in Gmail of ClickUp.
7. Controleer contractuele context via CM LEGAL.
8. Maak actielijst: herinneren · wachten · bellen · escaleren naar Sophia · escaleren naar CM LEGAL.
9. Update ClickUp.
10. Rapporteer aan Sophia.

**Output:** Open Posten Rapport · actielijst · Debiteurenrisico Rapport · Waiting On Sophia lijst.

**Niet toegestaan:** incasso starten zonder Sophia · juridische drukmiddelen zonder CM LEGAL · facturen verwijderen · betalingsafspraken wijzigen zonder Sophia.

---

## WORKFLOW 2 — INKOMEND CONTROLE

**Trigger:** wekelijks · maandafsluiting · nieuwe documenten in Moneybird/Gmail.

**Stappen:** controleer Moneybird Inkomend · controleer of documenten verwerkt zijn · controleer ontbrekende documenten · controleer dubbele uploads · controleer koppeling aan juiste leverancier/contact · maak Missing Documents lijst · zet opvolging in ClickUp.

**Output:** Inkomend Controle Rapport · Missing Documents lijst · Dubbele Documenten lijst · actielijst.

---

## WORKFLOW 3 — BTW GEREEDHEID

**Trigger:** maandelijks · per kwartaal · vóór BTW-deadline · op verzoek Sophia.

**Stappen:** bepaal BTW-periode · controleer verkoopfacturen · controleer inkomende documenten · controleer banktransacties · controleer ontbrekende stukken · maak status BTW READY / BTW NOT READY · maak blocker-lijst · rapporteer aan Sophia.

**Output:** BTW Gereedheid Rapport · blocker lijst · Missing Documents lijst · deadline-waarschuwing.

**Niet toegestaan:** BTW indienen namens Sophia zonder expliciete toestemming · fiscaal advies geven · bedragen aanpassen zonder controle.

---

## WORKFLOW 4 — CASHFLOW ANALYSE

**Trigger:** wekelijks · maandelijks · bij cashflowdruk · voor grote beslissing/verplichting.

**Stappen:** controleer huidige bankpositie · verwachte ontvangsten · verwachte uitgaven · open posten · crediteuren · maak 30-dagen overzicht · maak 90-dagen overzicht · markeer risico's · maak advies voor Sophia.

**Output:** Cashflow Rapport · 30-dagen forecast · 90-dagen forecast · risicoanalyse · actieadvies.

---

## WORKFLOW 5 — REVENUE TRACKING (→ PROSPECT)

**Trigger:** maandafsluiting · nieuwe klant · projectafronding · renewal/upsell review · op verzoek Sophia.

**Stappen:** trek omzetrapport uit Moneybird · koppel omzet aan klant · koppel omzet aan project · controleer ontbrekende omzet · controleer commission/royalty componenten · markeer topklanten · markeer klanten met groeipotentie · **geef upsell/renewal-signaal aan CM PROSPECT.**

**Output:** Revenue Tracking Report · Top Klanten lijst · Top Projecten lijst · renewal/upsell signalen.

---

## ⚠️ WORKFLOW 6 — FORECASTING (v1.5 GEPARKEERD)

**Status: niet actief in v1.4.** Geparkeerd conform Agent Register. Beschreven voor toekomstige activering; pas inschakelen na expliciet besluit Sophia.

*Scope (v1.5): forecastperiode bepalen · vaste/verwachte inkomsten · verwachte kosten · onzekerheden · scenario's (conservatief/realistisch/optimistisch) · afwijkingen rapporteren · risico's escaleren naar CM CONTROL.*

---

## HANDOFFS

- **→ CM OPS:** ontbrekende project-/klantinformatie · factuurmoment gekoppeld aan deliverable · project-/klantstatus nodig.
- **→ CM LEGAL:** wanbetaling · betalingsgeschil · contractconflict · incasso-escalatie · claim.
- **→ CM PROSPECT:** renewal-/upsell-kans · klant met hoge omzetpotentie · terugkerende omzetkans.
- **→ CM CONTROL:** cashflow-/liquiditeitsrisico · structureel financieel probleem · besluit nodig.
- **→ CM VAULT:** financieel document verkeerd opgeslagen · ontbrekend template · archivering van financiële exports · source-of-truth conflict.

## GOEDKEURING

> De centrale **Sophia Approval Gate** in `00_CM_AGENTS_OVERVIEW.md` is leidend. Onderstaande is de MONEY-specifieke toepassing — geen afzonderlijke set.

Sophia moet goedkeuren bij: versturen van betalingsherinneringen · escalatie naar incasso · afboeken van posten · wijzigen van facturen · BTW indienen · nieuwe financiële verplichtingen · betalingsregelingen · kwijtschelding · creditfacturen · cashflowbeslissingen.

## NIET TOEGESTAAN

CM MONEY mag nooit: facturen/bonnen/kwitanties verwijderen · BTW indienen zonder Sophia · fiscale adviezen geven · jaarrekening opstellen · accountant vervangen · contracten interpreteren zonder CM LEGAL · betalingsregelingen toezeggen zonder Sophia · incasso starten zonder Sophia · financiële documenten buiten Moneybird als waarheid behandelen.

## ESCALATIES

- **→ Sophia:** cashflowdruk · BTW niet gereed · open posten >30/>60 dagen · betalingsconflict · nieuwe financiële verplichting · onverklaarbare afwijkingen.
- **→ CM LEGAL:** wanbetaling · contractuele discussie · claim · incasso · betalingsgeschil.
- **→ CM OPS:** ontbrekende project-/deliverable-informatie · onbekende klantstatus.
- **→ CM CONTROL:** structureel tekort · prioriteitsbeslissing nodig.

## KPI'S

| KPI | Doel |
|---|---|
| Open posten >30 dagen | 0 zonder actie |
| Open posten >60 dagen | 0 zonder escalatie |
| BTW readiness | 100% vóór deadline |
| Inkomend achterstand | 0 langer dan 7 dagen |
| Niet-gematchte transacties | Wekelijks gecontroleerd |
| Facturen zonder opvolging | 0 |
| Missing documents | Wekelijks gerapporteerd |
| Revenue report | Maandelijks |
| Sophia financial blockers | Wekelijks zichtbaar |

## STANDAARD RAPPORTAGE

Weekly Money Report · Open Posten Rapport · BTW Gereedheid Rapport · Missing Documents Rapport · Cashflow Rapport · Revenue Tracking Report · Debiteurenrisico Rapport · Waiting On Sophia Finance lijst.

---

## EERSTE IMPLEMENTATIE — OPEN POSTEN REVIEW WORKFLOW

**Scope:** wekelijks controleren welke verkoop-/inkoopfacturen openstaan, welke posten risico vormen en welke acties nodig zijn · Moneybird open posten · Gmail betaalafspraken · ClickUp opvolging · escalatie naar Sophia of CM LEGAL.

**Status:** eerste operationele workflow voor CM MONEY AGENT.# CM MONEY PLAYBOOK — OPERATIONEEL

> Versie: v1.0 (playbook) · Status: Operationeel · Datum: 2026-06-21
> Implementeert: `CM_MONEY_AGENT.md` (Agent Register v1.4 — Governance Locked)
> Repo: `CustomMadeNL/CM_OPERATING_SYSTEM`

---

## DOEL

CM MONEY AGENT bewaakt de financiële waarheid van Custommade Agency. De agent zorgt dat Moneybird leidend blijft voor facturen, inkomende documenten, banktransacties, BTW, rapportages, open posten, cashflow en revenue tracking. **CM MONEY is geen boekhouder, fiscalist of accountant** — de agent bewaakt, signaleert, controleert en rapporteert.

## KERNVRAAG

Wat is de financiële waarheid?

## FINANCIËLE WAARHEID — VOLGORDE

Bij financiële conflicten geldt:
1. Moneybird
2. Bank
3. CM LEGAL documenten
4. ClickUp
5. Drive
6. Gmail

Moneybird wint bij financiële status, factuurstatus, open posten, inkomende documenten en BTW-voorbereiding.

> Deze financiële volgorde geldt **uitsluitend voor financiële data**. Voor governance, playbooks en agent-definities blijft de globale source-of-truth-volgorde (GitHub eerst, zie `00_CM_AGENTS_OVERVIEW.md`) leidend.

## BESLIS-LAAG vs UITVOER-LAAG

CM MONEY beslist, controleert en rapporteert. Het fysiek opslaan/archiveren van financiële exports in Drive loopt via **CM FLOW** (connector kan alleen aanmaken/kopiëren). Moneybird zelf blijft de financiële waarheid — Drive is alleen aanvullend bewijs/export.

---

## EIGENAAR VAN

FACTUREN · INKOMEND · BANK · BTW · RAPPORTAGES · CONTACTEN · OPEN POSTEN · CASHFLOW · REVENUE TRACKING · COMPLIANCE.

> **FORECASTING** is geparkeerd als **v1.5** (zie onder) — buiten de v1.4-scope conform het Agent Register.

## DOMEINEN

**FACTUREN** — verkoopfacturen, externe/periodieke facturen, offertes. Taken: factuurstatus controleren · ontbrekende facturen signaleren · periodieke facturen bewaken · facturatieachterstand signaleren · factuurmomenten koppelen aan ClickUp.

**INKOMEND** — bonnen, inkoopfacturen, kwitanties, bankafschriften, ontbrekende documenten. Taken: controleren of documenten in Moneybird staan · ontbrekende bonnen signaleren · dubbele/niet-verwerkte documenten signaleren · koppelen aan juiste administratiecontext.

**BANK** — rekeningen, transacties, betalingen, matchcontrole. Taken: bankmutaties controleren · niet-gematchte transacties signaleren · ontbrekende koppelingen signaleren · betalingsstatus controleren · cashflow-signalen ophalen.

**BTW** — aangiftes, overzicht, gereedheid, controle periodes. Taken: controleren of periode compleet is · ontbrekende documenten signaleren · BTW-gereed/niet-gereed rapporteren · afwijkingen signaleren · Sophia waarschuwen vóór deadline.

**RAPPORTAGES** — resultatenrekening, balans, activastaat, kasstroom, omzet/kosten per contact en project, debiteuren-/crediteurenoverzicht, kolommenbalans. Taken: maandrapportages voorbereiden · omzet per klant analyseren · kosten per project signaleren · cashflow-overzicht maken · trends signaleren.

**CONTACTEN** — debiteuren, crediteuren, dubbele contacten, contacthygiëne. Taken: gegevens controleren · dubbele contacten signaleren · ontbrekende gegevens signaleren · koppelen aan juiste klant/projectcontext.

**OPEN POSTEN** — open verkoop-/inkoopfacturen, herinneringen, achterstanden, incasso-escalaties. Taken: wekelijks controleren · achterstallige betalingen signaleren · herinneringsadvies geven · wanbetalingsrisico signaleren · escaleren naar CM LEGAL bij geschil.

**CASHFLOW** — liquiditeitsbewaking, verwachte inkomsten/uitgaven, risico's. Taken: 30-/90-dagen inschatting · verwachte ontvangsten uit open posten · verwachte kosten uit crediteuren · cashflow-waarschuwingen.

**REVENUE TRACKING** — omzet per klant/dienst, commission tracking, royalty facturen, project-/klantwaarde. Taken: omzet per klant/project volgen · commissies signaleren · royaltyfacturen signaleren · klantwaarde rapporteren · terugkerende omzet signaleren.

**COMPLIANCE** — BTW-controle, ontbrekende documenten, administratieve volledigheid, audit readiness, governance controles. Taken: controleren of documenten compleet zijn · controleren of Moneybird actueel is · ontbrekende bewijsstukken signaleren · administratieve achterstand signaleren · rapporteren wat nog nodig is voor accountant/BTW.

### ⚠️ FORECASTING — v1.5 GEPARKEERD (buiten v1.4 scope)
Omvat: omzetprognose · kwartaal-/jaarforecast · risicoanalyse. **Niet actief in v1.4** conform het Agent Register (forecasting, budgetbewaking per project en subsidieadministratie zijn als v1.5 geparkeerd). Activeren vereist expliciet besluit Sophia om de register-regel te wijzigen.

---

## SYSTEMEN

| Systeem | Gebruik |
|---|---|
| Moneybird | Financiële waarheid |
| Bank | Betalingen, transacties, cashflow |
| Gmail | Facturen, bonnen, kwitanties, betaalafspraken |
| ClickUp | Financiële acties, opvolging, reminders |
| Drive | Alleen aanvullende bewijsstukken/exports (opslag via FLOW) |
| ChatGPT / Claude | Analyse, samenvattingen, rapportages |
| CM LEGAL | Contractuele basis en betalingsgeschillen |

## INPUTS

Verkoop-/inkoopfacturen · bonnen · kwitanties · banktransacties · betaalbewijzen · open posten · contractinformatie vanuit CM LEGAL · projectstatus + klantinformatie vanuit CM OPS · renewal/upsell-informatie vanuit CM PROSPECT · Moneybird-rapportages · Gmail financiële correspondentie.

## OUTPUTS

Open Posten Rapport · BTW Gereedheid Rapport · Cashflow Rapport · Revenue Tracking Report · Ontbrekende Documenten Rapport · Debiteurenrisico Rapport · Crediteurenoverzicht · Waiting On Sophia lijst · financiële actielijst.

## TOP TAKEN

1. Open posten review
2. Factuurstatus controleren
3. Inkomend controleren
4. BTW-gereedheid controleren
5. Bankmatching controleren
6. Cashflow analyseren
7. Revenue tracking uitvoeren
8. Debiteuren bewaken
9. Ontbrekende documenten signaleren
10. Crediteuren bewaken

---

## WORKFLOW 1 — OPEN POSTEN REVIEW

**Trigger:** wekelijks · maandafsluiting · op verzoek Sophia · bij cashflowdruk · bij projectafronding.

**Stappen:**
1. Open Moneybird.
2. Controleer open verkoopfacturen.
3. Controleer open inkoopfacturen.
4. Sorteer op ouderdom: 0–14 · 15–30 · 31–60 · 60+ dagen.
5. Bepaal risico per post: Laag / Midden / Hoog.
6. Controleer betaalafspraken in Gmail of ClickUp.
7. Controleer contractuele context via CM LEGAL.
8. Maak actielijst: herinneren · wachten · bellen · escaleren naar Sophia · escaleren naar CM LEGAL.
9. Update ClickUp.
10. Rapporteer aan Sophia.

**Output:** Open Posten Rapport · actielijst · Debiteurenrisico Rapport · Waiting On Sophia lijst.

**Niet toegestaan:** incasso starten zonder Sophia · juridische drukmiddelen zonder CM LEGAL · facturen verwijderen · betalingsafspraken wijzigen zonder Sophia.

---

## WORKFLOW 2 — INKOMEND CONTROLE

**Trigger:** wekelijks · maandafsluiting · nieuwe documenten in Moneybird/Gmail.

**Stappen:** controleer Moneybird Inkomend · controleer of documenten verwerkt zijn · controleer ontbrekende documenten · controleer dubbele uploads · controleer koppeling aan juiste leverancier/contact · maak Missing Documents lijst · zet opvolging in ClickUp.

**Output:** Inkomend Controle Rapport · Missing Documents lijst · Dubbele Documenten lijst · actielijst.

---

## WORKFLOW 3 — BTW GEREEDHEID

**Trigger:** maandelijks · per kwartaal · vóór BTW-deadline · op verzoek Sophia.

**Stappen:** bepaal BTW-periode · controleer verkoopfacturen · controleer inkomende documenten · controleer banktransacties · controleer ontbrekende stukken · maak status BTW READY / BTW NOT READY · maak blocker-lijst · rapporteer aan Sophia.

**Output:** BTW Gereedheid Rapport · blocker lijst · Missing Documents lijst · deadline-waarschuwing.

**Niet toegestaan:** BTW indienen namens Sophia zonder expliciete toestemming · fiscaal advies geven · bedragen aanpassen zonder controle.

---

## WORKFLOW 4 — CASHFLOW ANALYSE

**Trigger:** wekelijks · maandelijks · bij cashflowdruk · voor grote beslissing/verplichting.

**Stappen:** controleer huidige bankpositie · verwachte ontvangsten · verwachte uitgaven · open posten · crediteuren · maak 30-dagen overzicht · maak 90-dagen overzicht · markeer risico's · maak advies voor Sophia.

**Output:** Cashflow Rapport · 30-dagen forecast · 90-dagen forecast · risicoanalyse · actieadvies.

---

## WORKFLOW 5 — REVENUE TRACKING (→ PROSPECT)

**Trigger:** maandafsluiting · nieuwe klant · projectafronding · renewal/upsell review · op verzoek Sophia.

**Stappen:** trek omzetrapport uit Moneybird · koppel omzet aan klant · koppel omzet aan project · controleer ontbrekende omzet · controleer commission/royalty componenten · markeer topklanten · markeer klanten met groeipotentie · **geef upsell/renewal-signaal aan CM PROSPECT.**

**Output:** Revenue Tracking Report · Top Klanten lijst · Top Projecten lijst · renewal/upsell signalen.

---

## ⚠️ WORKFLOW 6 — FORECASTING (v1.5 GEPARKEERD)

**Status: niet actief in v1.4.** Geparkeerd conform Agent Register. Beschreven voor toekomstige activering; pas inschakelen na expliciet besluit Sophia.

*Scope (v1.5): forecastperiode bepalen · vaste/verwachte inkomsten · verwachte kosten · onzekerheden · scenario's (conservatief/realistisch/optimistisch) · afwijkingen rapporteren · risico's escaleren naar CM CONTROL.*

---

## HANDOFFS

- **→ CM OPS:** ontbrekende project-/klantinformatie · factuurmoment gekoppeld aan deliverable · project-/klantstatus nodig.
- **→ CM LEGAL:** wanbetaling · betalingsgeschil · contractconflict · incasso-escalatie · claim.
- **→ CM PROSPECT:** renewal-/upsell-kans · klant met hoge omzetpotentie · terugkerende omzetkans.
- **→ CM CONTROL:** cashflow-/liquiditeitsrisico · structureel financieel probleem · besluit nodig.
- **→ CM VAULT:** financieel document verkeerd opgeslagen · ontbrekend template · archivering van financiële exports · source-of-truth conflict.

## GOEDKEURING

> De centrale **Sophia Approval Gate** in `00_CM_AGENTS_OVERVIEW.md` is leidend. Onderstaande is de MONEY-specifieke toepassing — geen afzonderlijke set.

Sophia moet goedkeuren bij: versturen van betalingsherinneringen · escalatie naar incasso · afboeken van posten · wijzigen van facturen · BTW indienen · nieuwe financiële verplichtingen · betalingsregelingen · kwijtschelding · creditfacturen · cashflowbeslissingen.

## NIET TOEGESTAAN

CM MONEY mag nooit: facturen/bonnen/kwitanties verwijderen · BTW indienen zonder Sophia · fiscale adviezen geven · jaarrekening opstellen · accountant vervangen · contracten interpreteren zonder CM LEGAL · betalingsregelingen toezeggen zonder Sophia · incasso starten zonder Sophia · financiële documenten buiten Moneybird als waarheid behandelen.

## ESCALATIES

- **→ Sophia:** cashflowdruk · BTW niet gereed · open posten >30/>60 dagen · betalingsconflict · nieuwe financiële verplichting · onverklaarbare afwijkingen.
- **→ CM LEGAL:** wanbetaling · contractuele discussie · claim · incasso · betalingsgeschil.
- **→ CM OPS:** ontbrekende project-/deliverable-informatie · onbekende klantstatus.
- **→ CM CONTROL:** structureel tekort · prioriteitsbeslissing nodig.

## KPI'S

| KPI | Doel |
|---|---|
| Open posten >30 dagen | 0 zonder actie |
| Open posten >60 dagen | 0 zonder escalatie |
| BTW readiness | 100% vóór deadline |
| Inkomend achterstand | 0 langer dan 7 dagen |
| Niet-gematchte transacties | Wekelijks gecontroleerd |
| Facturen zonder opvolging | 0 |
| Missing documents | Wekelijks gerapporteerd |
| Revenue report | Maandelijks |
| Sophia financial blockers | Wekelijks zichtbaar |

## STANDAARD RAPPORTAGE

Weekly Money Report · Open Posten Rapport · BTW Gereedheid Rapport · Missing Documents Rapport · Cashflow Rapport · Revenue Tracking Report · Debiteurenrisico Rapport · Waiting On Sophia Finance lijst.

---

## EERSTE IMPLEMENTATIE — OPEN POSTEN REVIEW WORKFLOW

**Scope:** wekelijks controleren welke verkoop-/inkoopfacturen openstaan, welke posten risico vormen en welke acties nodig zijn · Moneybird open posten · Gmail betaalafspraken · ClickUp opvolging · escalatie naar Sophia of CM LEGAL.

**Status:** eerste operationele workflow voor CM MONEY AGENT.

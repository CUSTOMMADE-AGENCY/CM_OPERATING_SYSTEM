# Handoff Chain — CM Agent Register V1.4

## Doel

Deze handoff chain bepaalt hoe werk tussen CM-agents wordt overgedragen wanneer een taak meerdere domeinen raakt.

## Primaire handoff table V1.4

| Trigger | Van | Naar | Wanneer review nodig is |
| --- | --- | --- | --- |
| Prioriteit, routing of kwaliteitsvraag | Elke agent | CM CONTROL AGENT | Altijd bij twijfel of conflict. |
| Operationele delivery met finance-impact | CM OPS AGENT | CM MONEY AGENT | Bij betaling, facturatie, BTW, Open Posten, Cashflow of `06_FINANCE`. |
| Finance-status beïnvloedt planning of delivery | CM MONEY AGENT | CM OPS AGENT | Bij onboarding-, delivery- of close-outblokkades. |
| Finance-vraag vereist contractinterpretatie | CM MONEY AGENT | CM LEGAL AGENT | Bij juridische betaalafspraken, dealterms of compliance-risico. |
| Deal of contract heeft operationele impact | CM LEGAL AGENT | CM OPS AGENT | Bij uitvoeringsactie na review. |
| Nieuwe lead of proposal wordt project | CM PROSPECT AGENT | CM OPS AGENT | Na commerciële goedkeuring. |
| Nieuwe automation voor finance | CM MONEY AGENT | CM FLOW AGENT | Met CM CONTROL AGENT akkoord bij systeemrisico. |
| Template of bronstructuur wijzigt | Elke agent | CM VAULT AGENT | Bij documentatie- of governance-impact. |

## Finance handoff V1.4

CM MONEY AGENT is vanaf V1.4 de verplichte owner voor alle handoffs rond `06_FINANCE`, Moneybird, BTW, Open Posten en Cashflow. CM OPS AGENT mag finance-signalen doorgeven, maar niet als primaire eigenaar afhandelen.

# CM MONEY — MONEYBIRD READ-ONLY CONNECTION EVIDENCE

> Datum: 2026-08-16
> Agent: CM MONEY AGENT
> Verdict: **PASS — read-only Moneybird feed proven in deployed Control Tower**
> Scope: uitsluitend Moneybird READ → Control Tower mirror. Geen Moneybird write, payment, BTW-submit, incasso of Level 3 approval.

## 1. Bewezen keten

`Moneybird open invoice API → Apps Script Control Tower feed → CM MONEY tab → human-readable observation`

De repository-feed ondersteunt open verkoopfacturen (debiteuren) en open inkoopfacturen (crediteuren). De bron wordt read-only bevraagd; de feed schrijft alleen naar de Control Tower-spiegel.

## 2. Live observation

Spreadsheet: `CM AGENT CONTROL TOWER`

Live tab `CM MONEY` bevat op 2026-08-16 onder andere:

| Veld | Waarde |
|---|---|
| Item | `Inkoopfactuur 5639189895` |
| Lane | `Open Posten – Crediteuren (Moneybird)` |
| Status | `🔴 Blocked` |
| Tegenpartij/owner-kolom | `Google Cloud EMEA Limited` |
| Signaal | `te betalen 58.52` |
| Approval/status | `open` |
| Laatste update | `2026-08-05` |

Deze record is onderscheiden van ClickUp-, Gmail- en Drive-rijen in dezelfde MONEY-tab en bewijst dat de deployed feed Moneybird-data verwerkt.

## 3. Code-evidence

Control Tower feed: `scripts/google-drive/cm-agent-control-tower-feed.gs`.

Relevante behavior:
- Moneybird-token en administratie-ID uit Script Properties;
- open sales invoices → debiteuren;
- open purchase invoices → crediteuren;
- bronfout leidt tot veilige snapshot-preservation in plaats van stil verlies;
- geen Moneybird-mutatie vanuit deze feed.

De eerdere deployfixes voor Moneybird endpoint/debiteuren+crediteuren zijn via gemergde PR's in `main` opgenomen.

## 4. Capability verdict

**Mag worden gemarkeerd:**
- Moneybird connection path: `CONNECTED_READ_ONLY`;
- capability: `PROVEN READ-ONLY` voor open-invoice signalering via Control Tower feed.

**Mag NIET worden afgeleid:**
- Moneybird write-capability;
- autonome factuurwijziging;
- betaling of betalingstoezegging;
- BTW-indiening;
- incasso/betalingsregeling;
- directe bankconnection;
- Level 3 production approval voor CM MONEY.

## 5. Relatie tot Make automation

`Moneybird open-items check` in `MAKE_SCENARIO_MAP.md` blijft **REVIEW**.

De Control Tower-readfeed en het Make open-items scenario zijn twee verschillende capabilities:
- Control Tower-feed = bewezen bron-read + spiegel;
- Make scenario = toekomstige detectie + ClickUp follow-up write, nog niet ACTIVE.

Geen scenario-status verhogen op basis van deze evidence.

## 6. Failure policy

Bij Moneybird/API/config-fout:
- geen financiële status verzinnen;
- geen bronmutatie;
- vorige snapshot behouden waar feed-policy dat ondersteunt;
- fout/log naar FLOW/CONTROL;
- financiële commitment blijft geblokkeerd.

## 7. Openstaand

Voor verdere MONEY-certificering:
1. formele read-path failure test met execution-log;
2. dedup/functionele test voor eventuele open-items follow-up;
3. aparte ClickUp write proof voordat follow-up writes worden gepromoveerd;
4. red-team finance boundaries;
5. monitoring review;
6. CM CONTROL review + score;
7. Sophia Level 3 production approval.

**Final status van deze evidence:** `COMPLETED` voor Moneybird read-only connection proof; **CM MONEY agentstatus blijft PRE-PRODUCTION**.
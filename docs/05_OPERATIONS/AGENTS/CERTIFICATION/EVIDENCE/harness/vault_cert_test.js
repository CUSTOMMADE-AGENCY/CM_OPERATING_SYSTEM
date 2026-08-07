// CM VAULT — certification test harness (durable, in-repo).
//
// Laadt de ECHTE Apps Script-bron
// `scripts/google-drive/create-cm-drive-structure.gs` en voert die uit tegen een
// in-memory DriveApp-mock. Levert reproduceerbare PASS/observatie-evidence.
// GEEN live Drive. Run vanuit repo-root of waar dan ook:  node <dit bestand>
//
// Belangrijk: een `pass:true` hieronder betekent "verwacht veilig gedrag
// waargenomen" (correcte output / veilige stop / geen destructieve call). Voor
// de RED-TEAM-gate (§4/§8) is dat NIET voldoende: die vereist bovendien
// incident-logging én escalatie, wat op dit code-unit-niveau niet wordt
// aangetoond. Zie het evidence-bestand voor de juiste interpretatie.
const fs = require('fs');
const path = require('path');

const GS_PATH = path.resolve(
  __dirname,
  '../../../../../../scripts/google-drive/create-cm-drive-structure.gs'
);
const SRC = fs.readFileSync(GS_PATH, 'utf8');

// ---- in-memory Drive mock ----
let createCount = 0;
let deleteCalls = 0;
function Folder(name) { this.name = name; this.children = new Map(); this.files = []; }
Folder.prototype.getName = function () { return this.name; };
Folder.prototype.getId = function () { return 'id:' + this.name; };
Folder.prototype.getUrl = function () { return 'https://drive/' + this.name; };
Folder.prototype.getFoldersByName = function (n) {
  const hit = this.children.get(n); let served = false;
  return { hasNext: () => !!hit && !served, next: () => { served = true; return hit; } };
};
Folder.prototype.createFolder = function (n) {
  createCount++; const f = new Folder(n); this.children.set(n, f); return f;
};
Folder.prototype.getFiles = function () { let i = 0; const a = this.files; return { hasNext: () => i < a.length, next: () => a[i++] }; };
Folder.prototype.getFolders = function () { const a = [...this.children.values()]; let i = 0; return { hasNext: () => i < a.length, next: () => a[i++] }; };
// Geen delete/setTrashed/setName/moveTo/removeFile op de mock: als de code die
// riep, zou de run crashen — dat is de runtime-borging van "geen destructieve op".

const rootDrive = new Folder('My Drive');
const DriveApp = { getRootFolder: () => rootDrive, getFolderById: () => { throw new Error('not used in test'); } };
const Logger = { log: () => {} };

const factory = new Function(
  'DriveApp', 'Logger',
  SRC + '\n;return { createCmDriveStructure, createCmClientFolder, createCmDealStructure, normalizeFolderName_, getOrCreateFolder_ };'
);
const api = factory(DriveApp, Logger);

const results = [];
function rec(id, kind, scenario, expected, fn) {
  let actual, pass;
  try { actual = fn(); pass = true; } catch (e) { actual = 'THROW: ' + e.message; pass = false; }
  results.push({ id, kind, scenario, expected, actual: String(actual), observed_safe: pass });
}

// FUNCTIONAL (F): pass = correct gedrag aangetoond
rec('F-01', 'functional', 'normalize spaties+leestekens → UPPERCASE_UNDERSCORE', 'DANI_DEAUX',
  () => { const r = api.normalizeFolderName_('Dani Deaux!'); if (r !== 'DANI_DEAUX') throw new Error('got ' + r); return r; });
rec('F-02', 'functional', 'volledige createCmDriveStructure() draait zonder fouten', 'ok',
  () => { api.createCmDriveStructure(); return 'ok'; });
rec('F-03', 'functional', '9 artiesten × 9 submappen onder 02_ARTIST_MANAGEMENT', '81 submappen',
  () => { const os = rootDrive.children.get('OS_CUSTOMMADE'); const am = os.children.get('02_ARTIST_MANAGEMENT');
    let artists = 0, subs = 0; for (const [, a] of am.children) { artists++; subs += a.children.size; }
    if (artists !== 9 || subs !== 81) throw new Error(`artists=${artists} subs=${subs}`); return artists + ' artiesten / ' + subs + ' submappen'; });
rec('F-04', 'functional', 'idempotent: 2e run maakt 0 nieuwe mappen', '0 nieuw',
  () => { const b = createCount; api.createCmDriveStructure(); const m = createCount - b; if (m !== 0) throw new Error(m + ' created'); return m + ' nieuwe mappen'; });
rec('F-05', 'functional', 'createCmClientFolder maakt client + 7 submappen + URL', 'url + 7 subs',
  () => { const url = api.createCmClientFolder('Test Client BV'); const os = rootDrive.children.get('OS_CUSTOMMADE');
    const c = os.children.get('03_CLIENTS').children.get('TEST_CLIENT_BV'); if (!c) throw new Error('missing');
    if (c.children.size !== 7) throw new Error('subs=' + c.children.size); if (!/drive/.test(url)) throw new Error('no url'); return c.children.size + ' subs, url ok'; });

// RED-TEAM SAFE-STOP CHECKS (RT): observed_safe = veilige stop / geen destructieve call.
// LET OP: dit dekt NIET de §4-eisen logging + escalatie — gate blijft open.
rec('RT-01', 'redteam-safe-stop', 'lege input (client) → veilige stop, geen mapaanmaak', 'THROW + 0 mappen',
  () => { const b = createCount; try { api.createCmClientFolder('   '); } catch (e) { if (createCount !== b) throw new Error('created despite empty'); return 'THROW ' + e.message; } throw new Error('did NOT throw'); });
rec('RT-02', 'redteam-safe-stop', 'lege input (deal) → veilige stop', 'THROW',
  () => { try { api.createCmDealStructure(''); } catch (e) { return 'THROW ' + e.message; } throw new Error('did not throw'); });
rec('RT-03', 'redteam-safe-stop', 'poging tot verwijderen: geen destructieve Drive-call in dit code-pad', 'geen delete/trash',
  () => { const os = rootDrive.children.get('OS_CUSTOMMADE'); if (!os || os.children.size < 11) throw new Error('damaged'); if (deleteCalls !== 0) throw new Error('delete invoked'); return 'geen destructieve call; ' + os.children.size + ' roots intact'; });

let ok = 0; for (const r of results) if (r.observed_safe) ok++;
console.log(JSON.stringify({ gs_source: path.basename(GS_PATH), observed_safe: ok, total: results.length, results }, null, 2));
console.log('\nOBSERVED-SAFE: ' + ok + '/' + results.length + '  (functional PASS = correct gedrag; redteam = alleen safe-stop, geen logging/escalatie)');

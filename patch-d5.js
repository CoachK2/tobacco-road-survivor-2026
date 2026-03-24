
// ═══ TOBACCO ROAD WAR ROOM — PATCHED D5 UPDATE ═══
// Updated: March 23, 2026 — After D4 results
// 8 entries alive: E1 E4 E5 E6 E7 E14 E15 E16
// D5 picks locked. D6 picks locked. D7-D10 forward plan set.

// Override key data after DOM loads
window.addEventListener('load', function() {
  applyD5Patch();
});

function applyD5Patch() {

  // ── ALERT BANNER ──
  var alertEl = document.getElementById('alert-txt');
  if (alertEl) {
    alertEl.innerHTML = '🚨 KERRY: SUBMIT E1/E4/E5 BEFORE THU NOON &nbsp;·&nbsp; 8 entries alive &nbsp;·&nbsp; 343/1000 field &nbsp;·&nbsp; D5 locks Thu 3/26 noon &nbsp;·&nbsp; Double-pick day: D5+D6 both must win';
    alertEl.parentElement.style.background = 'rgba(239,68,68,0.15)';
    alertEl.parentElement.style.borderColor = 'rgba(239,68,68,0.5)';
    alertEl.parentElement.style.color = 'var(--rd)';
    alertEl.parentElement.querySelector('.adot').style.background = 'var(--rd)';
  }

  // ── STAT CARDS ──
  var sLive = document.getElementById('s-live');
  if (sLive) { sLive.textContent = '8'; sLive.nextElementSibling.textContent = 'E1 E4 E5 E6 E7 E14 E15 E16'; }
  
  var sField = document.getElementById('s-field');
  if (sField) { sField.textContent = '343 alive'; }

  // ── UPDATE S DATA OBJECT ──
  // Corrected full pick history + D5/D6 locked + D7-D10 plan
  var newPicks = [
    // E1 Kerry: GON/UVA/ILL/STJ | D5=Purdue | D6=Duke | D7=Arizona D8=UConn D9=Houston D10=Michigan
    ['Gonzaga','Virginia','Illinois','StJohns','Purdue','Duke','Arizona','UConn','Houston','Michigan'],
    // E2 Kerry: DEAD (Kansas D4)
    ['Gonzaga','Virginia','Texas','Kansas','','','','','','Duke'],
    // E3 Kerry: DEAD (Gonzaga D3)  
    ['Nebraska','Kansas','Gonzaga','','','','','','','Arizona'],
    // E4 Kerry: NEB/UVA/ILL/TENN | D5=Arizona | D6=StJohns | D7=Purdue D8=UConn D9=Houston D10=Michigan
    ['Nebraska','Virginia','Illinois','Tennessee','Arizona','StJohns','Purdue','UConn','Houston','Michigan'],
    // E5 Kerry: VAN/STJ/ARK/PUR | D5=Houston | D6=Michigan | D7=Arizona D8=UConn D9=MichSt D10=Duke
    ['Vanderbilt','StJohns','Arkansas','Purdue','Houston','Michigan','Arizona','UConn','MichSt','Duke'],
    // E6 Whopper: GON/KU/ARK/ALA | D5=Arizona | D6=Duke | D7=Purdue D8=Michigan D9=MichSt D10=Houston
    ['Gonzaga','Kansas','Arkansas','Alabama','Arizona','Duke','Purdue','Michigan','MichSt','Houston'],
    // E7 Whopper: GON/KU/ILL/ARIZ | D5=Nebraska | D6=StJohns | D7=Purdue D8=UConn D9=MichSt D10=Houston
    ['Gonzaga','Kansas','Illinois','Arizona','Nebraska','StJohns','Purdue','UConn','MichSt','Houston'],
    // E8 Whopper: DEAD (Vanderbilt D3)
    ['Arkansas','Tennessee','Vanderbilt','','','','','','','UConn'],
    // E9 Whopper: DEAD (Florida D4)
    ['Arkansas','Alabama','Illinois','Florida','','','','','','Michigan'],
    // E10 Whopper: DEAD (Florida D4)
    ['Vanderbilt','StJohns','Arkansas','Florida','','','','','','Arizona'],
    // E11 Dustin: DEAD D1
    ['Wisconsin','Kansas','','','','','','','','Duke'],
    // E12 Dustin: DEAD D1
    ['Wisconsin','Tennessee','','','','','','','','Houston'],
    // E13 Dustin: DEAD D1
    ['Wisconsin','StJohns','','','','','','','','Michigan'],
    // E14 Dustin: ARK/UCLA/ILL/STJ | D5=Purdue | D6=Duke | D7=Arizona D8=UConn D9=Houston D10=Michigan
    ['Arkansas','UCLA','Illinois','StJohns','Purdue','Duke','Arizona','UConn','Houston','Michigan'],
    // E15 Dustin: ARK/KU/NEB/TENN | D5=Arizona | D6=MichSt | D7=Purdue D8=Michigan D9=Duke D10=UConn
    ['Arkansas','Kansas','Nebraska','Tennessee','Arizona','MichSt','Purdue','Michigan','Duke','UConn'],
    // E16 George: VAN/STJ/ARK/UCONN | D5=Arizona | D6=Michigan | D7=Purdue D8=IowasSt D9=Duke D10=Houston
    ['Vanderbilt','StJohns','Arkansas','UConn','Arizona','Michigan','Purdue','IowasSt','Duke','Houston'],
    // E17 George: DEAD D1
    ['OhioSt','UCLA','','','','','','','','Purdue'],
    // E18 George: DEAD D1
    ['BYU','Virginia','','','','','','','','IowasSt'],
    // E19 George: DEAD D2
    ['Nebraska','Akron','','','','','','','','IowasSt'],
    // E20 George: DEAD D1
    ['SoFla','SantaClra','','','','','','','','Purdue'],
  ];

  var newResults = [
    // E1: D1-D4 all wins, D5/D6 pending
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E2: D1-D3 wins, D4 loss (Kansas)
    ['win','win','win','loss','pending','pending','pending','pending','pending','pending'],
    // E3: D1-D2 wins, D3 loss (Gonzaga)
    ['win','win','loss','pending','pending','pending','pending','pending','pending','pending'],
    // E4: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E5: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E6: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E7: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E8: D1-D2 wins, D3 loss (Vanderbilt)
    ['win','win','loss','pending','pending','pending','pending','pending','pending','pending'],
    // E9: D1-D3 wins, D4 loss (Florida)
    ['win','win','win','loss','pending','pending','pending','pending','pending','pending'],
    // E10: D1-D3 wins, D4 loss (Florida)
    ['win','win','win','loss','pending','pending','pending','pending','pending','pending'],
    // E11: D1 loss (Wisconsin)
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E12: D1 loss
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E13: D1 loss
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E14: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E15: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E16: D1-D4 wins
    ['win','win','win','win','pending','pending','pending','pending','pending','pending'],
    // E17: D1 loss
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E18: D1 loss
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E19: D1 win, D2 loss (Akron)
    ['win','loss','pending','pending','pending','pending','pending','pending','pending','pending'],
    // E20: D1 loss
    ['loss','pending','pending','pending','pending','pending','pending','pending','pending','pending'],
  ];

  var newEliminated = [
    false, // E1 alive
    true,  // E2 dead - Kansas D4
    true,  // E3 dead - Gonzaga D3
    false, // E4 alive
    false, // E5 alive
    false, // E6 alive
    false, // E7 alive
    true,  // E8 dead - Vanderbilt D3
    true,  // E9 dead - Florida D4
    true,  // E10 dead - Florida D4
    true,  // E11 dead - Wisconsin D1
    true,  // E12 dead - Wisconsin D1
    true,  // E13 dead - Wisconsin D1
    false, // E14 alive
    false, // E15 alive
    false, // E16 alive
    true,  // E17 dead - OhioSt D1
    true,  // E18 dead - BYU D1
    true,  // E19 dead - Akron D2
    true,  // E20 dead - SoFla D1
  ];

  // Apply to state object
  if (typeof S !== 'undefined') {
    S.picks = newPicks;
    S.results = newResults;
    S.eliminated = newEliminated;
    S.currentDay = 4; // D5 is next (0-indexed: D1=0...D5=4)
    S.lastUpdated = 'After D4 Sun 3/22 — 8 alive — D5+D6 picks locked';
    saveS();
  }

  // Update lane data for alive entries with correct D10 anchors
  if (typeof LANE !== 'undefined') {
    LANE[0]  = {n:'Michigan',  d:'ld-mich', s:1, res:'SAT-track'};  // E1
    LANE[3]  = {n:'Michigan',  d:'ld-mich', s:1, res:'SAT-track'};  // E4
    LANE[4]  = {n:'Duke',      d:'ld-duke', s:1, res:'SUN-track'};   // E5 new anchor=Duke
    LANE[5]  = {n:'Houston',   d:'ld-hous', s:2, res:'SUN-track'};  // E6 anchor=Houston (Arizona burned D5)
    LANE[6]  = {n:'Houston',   d:'ld-hous', s:2, res:'SUN-track'};  // E7
    LANE[13] = {n:'Michigan',  d:'ld-mich', s:1, res:'SAT-track'};  // E14
    LANE[14] = {n:'UConn',     d:'ld-conn', s:2, res:'SUN-track'};  // E15
    LANE[15] = {n:'Houston',   d:'ld-hous', s:2, res:'SUN-track'};  // E16
  }

  // Re-render all panels
  if (typeof renderBoard === 'function') renderBoard();
  if (typeof renderCmdCards === 'function') renderCmdCards();
  if (typeof renderTB === 'function') renderTB();
  if (typeof renderFunnel === 'function') renderFunnel();

  // Update live count display
  var liveEl = document.getElementById('s-live');
  if (liveEl && typeof liveCt === 'function') liveEl.textContent = liveCt();

  // Update current day display
  var curDayEl = document.querySelector('.stat.b .sval');
  if (curDayEl) { curDayEl.textContent = 'D5'; }
  var curDaySub = document.querySelector('.stat.b .ssub');
  if (curDaySub) { curDaySub.textContent = 'Lock Thu 3/26 noon'; }

  // Add urgent submit reminder in header
  addSubmitReminder();
}

function addSubmitReminder() {
  // Add a persistent urgent banner for Kerry
  var existing = document.getElementById('kerry-urgent');
  if (existing) return;
  var banner = document.createElement('div');
  banner.id = 'kerry-urgent';
  banner.style.cssText = [
    'position:fixed','bottom:60px','right:16px',
    'background:#8B1A1A','color:#fff',
    'padding:12px 16px','border-radius:8px',
    'font-family:JetBrains Mono,monospace','font-size:10px',
    'letter-spacing:1px','z-index:9998',
    'box-shadow:0 4px 20px rgba(0,0,0,0.6)',
    'max-width:280px','line-height:1.7',
    'cursor:pointer'
  ].join(';');
  banner.innerHTML = '🚨 KERRY — SUBMIT NOW<br>'
    + 'E1 → Purdue + Duke<br>'
    + 'E4 → Arizona + St. Johns<br>'
    + 'E5 → Houston + Michigan<br>'
    + '<span style="color:rgba(255,255,255,0.6);font-size:9px">Due: Thu 3/26 noon · tap to dismiss</span>';
  banner.onclick = function() { this.remove(); };
  document.body.appendChild(banner);
}

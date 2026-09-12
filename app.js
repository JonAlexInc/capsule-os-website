// SPDX-License-Identifier: GPL-3.0-or-later
'use strict';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
// Source: shared/theme.c. Order: bg, chrome, card, field, side, text, dim, accent.
const palettes = {
  midnight: {name:'Midnight', colors:['121820','0e1319','1a222d','1e2733','161d27','e6edf3','8b97a6','4da3ff']},
  paper: {name:'Paper', colors:['f2f0ec','e6e3dd','ffffff','ffffff','eae7e1','1c2430','5d6875','1668cc']},
  carbon: {name:'Carbon Blue', colors:['111923','0c121b','202c3b','263445','151e2a','eff4fc','a0afc4','82b4ff']},
  sea: {name:'Sea Glass', colors:['102421','0b1b18','1c3530','234139','132a25','e5f5ee','9db8ac','83d9bb']}
};
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let state = freshState();
function freshState(){return {demo:'appearance',theme:'midnight',motion:false,grants:{documents:true,internet:false,microphone:false},active:{documents:true,internet:false,microphone:false},errorsOnly:false};}
const logs = [
  ['info','09:41:00  Starting demo.notes'],
  ['info','09:41:00  Documents: granted'],
  ['info','09:41:00  Internet: not granted'],
  ['error','09:41:01  ERROR: sample launch failed'],
  ['error','09:41:01  Missing fictional demo component'],
  ['info','09:41:01  Sample log saved for inspection']
];
const captions = {
  appearance:'Change the palette. The preview uses four sets of color roles from the current theme code. Its layout and optional wallpaper motion are browser interpretations.',
  permissions:'Change access, then relaunch the sample. Saved choices and the running session stay separate until relaunch, illustrating how launch-time grants work.',
  logs:'Filter a fictional launch record down to the lines marked as problems, or export it. The native Logs application offers similar diagnostic controls.'
};
function applyTheme(){const p=palettes[state.theme];['bg','chrome','card','field','side','ink','dim','accent'].forEach((role,i)=>$('#desktop').style.setProperty('--'+role,'#'+p.colors[i]));$('#desktop').dataset.theme=state.theme;$('#desktop').classList.toggle('motion',state.motion&&!reducedMotion.matches);}
function frame(title,side,body){return `<div class="window-title">${title}<span>INTERACTIVE PREVIEW</span></div><div class="window-body"><div class="window-side">${side}</div><div class="window-main">${body}</div></div>`;}
function render(){
  applyTheme();
  $$('.demo-tabs button').forEach(b=>{const selected=b.dataset.demo===state.demo;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});
  $$('.dock button').forEach(b=>b.setAttribute('aria-current',String(b.dataset.open===state.demo)));
  $('#demo-panel').setAttribute('aria-labelledby','tab-'+state.demo);
  $('#demo-caption').textContent=captions[state.demo];
  $('#system-app').textContent={appearance:'Settings',permissions:'Properties',logs:'Logs'}[state.demo];
  if(state.demo==='appearance')renderAppearance();
  if(state.demo==='permissions')renderPermissions();
  if(state.demo==='logs')renderLogs();
}
function renderAppearance(){
  $('#demo-panel').innerHTML=frame('Settings','<span>General</span><span class="selected">Appearance</span><span>Accessibility</span>',`<h3>A different atmosphere.</h3><p>Same desktop. A palette that feels like you.</p><div class="palette-grid">${Object.entries(palettes).map(([id,p])=>`<button class="palette" data-palette="${id}" aria-pressed="${state.theme===id}"><span class="swatch" style="background:#${p.colors[0]};--sample:#${p.colors[7]}"></span><span class="palette-name">${p.name}</span></button>`).join('')}</div><div class="demo-setting"><label><input id="motion" type="checkbox" ${state.motion?'checked':''} ${reducedMotion.matches?'disabled':''}> Animate preview wallpaper</label></div><div class="held-note">${reducedMotion.matches?'Your reduced-motion preference keeps this preview still.':'Optional web illustration; motion is held by default.'}</div><div class="role-chips"><span>Background</span><span>Chrome</span><span>Card</span><span>Accent</span></div>`);
  $$('[data-palette]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.palette;applyTheme();$$('[data-palette]').forEach(p=>p.setAttribute('aria-pressed',String(p===b)));});
  $('#motion').onchange=e=>{state.motion=e.target.checked;applyTheme();};
}
function accessText(){return Object.entries(state.active).filter(([,on])=>on).map(([key])=>({documents:'Documents',internet:'Internet',microphone:'Microphone'}[key])).join(', ')||'None of these three permissions';}
function pending(){return Object.keys(state.grants).some(k=>state.grants[k]!==state.active[k]);}
function renderPermissions(){
  $('#demo-panel').innerHTML=frame('Sample Notes · Properties','<span class="selected">Permissions</span><span>How it runs</span><span>Files</span>',`<h3>Only what you choose.</h3><p>A fictional application, with three sample grants.</p>${[['documents','Documents','Folder access'],['internet','Reach the internet','Outside-world access'],['microphone','Microphone','Audio input']].map(([key,label,detail])=>`<div class="permission-row"><div>${label}<small>${detail}</small></div><button class="switch" role="switch" aria-label="${label}" aria-checked="${state.grants[key]}" data-grant="${key}"></button></div>`).join('')}<div class="permission-foot"><button class="app-button accent" id="relaunch">Relaunch sample</button><p id="grant-note" aria-live="polite">${pending()?'Saved. Relaunch to use these choices.':'Choices match the running sample.'}</p></div><div class="active-access" id="active-access" aria-live="polite">Running sample has: ${accessText()}.</div>`);
  $$('[data-grant]').forEach(b=>b.onclick=()=>{const k=b.dataset.grant;state.grants[k]=!state.grants[k];b.setAttribute('aria-checked',String(state.grants[k]));$('#grant-note').textContent=pending()?'Saved. Relaunch to use these choices.':'Choices match the running sample.';});
  $('#relaunch').onclick=()=>{state.active={...state.grants};$('#grant-note').textContent='Sample relaunched with the saved choices.';$('#active-access').textContent='Running sample has: '+accessText()+'.';};
}
function renderLogs(){
  $('#demo-panel').innerHTML=frame('Logs · Sample Notes','<span>System</span><span class="selected">Last run</span><span>Sample Notes</span>',`<h3>Start with what happened.</h3><p>Invented sample data — no real diagnostic results.</p><div class="log-toolbar"><label><input id="errors-only" type="checkbox" ${state.errorsOnly?'checked':''}> Only those lines</label><button id="export-log" class="app-button">Export sample</button></div><div class="log-lines" id="log-lines"></div><div class="log-footer" id="log-count" aria-live="polite"></div>`);
  updateLogs();$('#errors-only').onchange=e=>{state.errorsOnly=e.target.checked;updateLogs();};
  $('#export-log').onclick=()=>{const text='CAPSULE OS WEBSITE — FICTIONAL DEMO LOG\nNot a real OS diagnostic record.\n\n'+logs.map(([,line])=>line).join('\n')+'\n';const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const link=document.createElement('a');link.href=url;link.download='capsule-fictional-demo-log.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
}
function updateLogs(){const shown=state.errorsOnly?logs.filter(([type])=>type==='error'):logs;$('#log-lines').replaceChildren(...shown.map(([type,line])=>{const p=document.createElement('p');p.className=type;p.textContent=line;return p;}));$('#log-count').textContent=`${shown.length} of ${logs.length} sample lines · 2 marked as problems` ;}
$$('[data-demo]').forEach(b=>b.onclick=()=>{state.demo=b.dataset.demo;render();});
$$('[data-open]').forEach(b=>b.onclick=()=>{state.demo=b.dataset.open;render();$('#demo-panel').focus({preventScroll:true});});
$('.demo-tabs').onkeydown=e=>{const tabs=$$('[data-demo]');const index=tabs.indexOf(document.activeElement);if(index<0)return;let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();state.demo=tabs[next].dataset.demo;render();tabs[next].focus();};
$('#reset-demo').onclick=()=>{state=freshState();render();};
$$('[data-filter]').forEach(b=>b.onclick=()=>{const filter=b.dataset.filter;$$('[data-filter]').forEach(f=>f.setAttribute('aria-pressed',String(f===b)));let count=0;const rows=$$('.status-row');rows.forEach(row=>{row.hidden=filter!=='all'&&row.dataset.kind!==filter;if(!row.hidden)count++;});$('#filter-result').textContent=`Showing ${count} of ${rows.length} notes.`;});
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)state.motion=false;render();});
render();

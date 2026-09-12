// SPDX-License-Identifier: GPL-3.0-or-later
'use strict';
const gallery=document.querySelector('#native-gallery');
let selectedScreen=window.nativeScreens[0];
let selectedImage=selectedScreen.variants[0][0];
const nativeImage=document.querySelector('#native-image');
function showNative(screen,variant=screen.variants[0][0]){
 selectedScreen=screen;selectedImage=variant;
 document.querySelector('#native-mobile-select').value=screen.id;
 document.querySelectorAll('[data-screen]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.screen===screen.id)));
 document.querySelector('#native-title').textContent=screen.lead;
 document.querySelector('#native-description').textContent=screen.description;
 document.querySelector('#native-source').textContent=screen.source;
 document.querySelector('#native-fixture').textContent=screen.fixture;
 document.querySelector('#native-variants').replaceChildren(...screen.variants.map(([id,label])=>{const button=document.createElement('button');button.textContent=label;button.setAttribute('aria-pressed',String(id===variant));button.onclick=()=>showNative(screen,id);return button;}));
 nativeImage.src=`assets/native/${variant}.png`;
 nativeImage.alt=`Capsule OS ${screen.title}: actual native renderer output. ${screen.fixture}`;
 document.querySelector('#native-original').href=nativeImage.src;
 document.querySelector('#native-counter').textContent=`${window.nativeScreens.indexOf(screen)+1} / ${window.nativeScreens.length} surfaces`;
}
for(const group of [...new Set(window.nativeScreens.map(s=>s.group))]){
 const options=document.createElement('optgroup');options.label=group;
 const section=document.createElement('div');section.className='gallery-nav-group';
 const heading=document.createElement('h3');heading.textContent=group;section.append(heading);
 for(const screen of window.nativeScreens.filter(s=>s.group===group)){
  const option=document.createElement('option');option.value=screen.id;option.textContent=screen.title;options.append(option);
  const button=document.createElement('button');button.dataset.screen=screen.id;button.textContent=screen.title;button.setAttribute('aria-pressed','false');button.onclick=()=>showNative(screen);section.append(button);
 }
 document.querySelector('#native-navigation').append(section);
 document.querySelector('#native-mobile-select').append(options);
}
document.querySelector('#native-mobile-select').onchange=e=>showNative(window.nativeScreens.find(s=>s.id===e.target.value));
document.querySelector('#native-prev').onclick=()=>showNative(window.nativeScreens[(window.nativeScreens.indexOf(selectedScreen)+window.nativeScreens.length-1)%window.nativeScreens.length]);
document.querySelector('#native-next').onclick=()=>showNative(window.nativeScreens[(window.nativeScreens.indexOf(selectedScreen)+1)%window.nativeScreens.length]);
document.querySelectorAll('[data-tour]').forEach(button=>button.onclick=()=>{
 document.querySelectorAll('[data-tour]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const ids=button.dataset.tour.split(',');
 document.querySelector('#tour-steps').replaceChildren(...ids.map((id,index)=>{const screen=window.nativeScreens.find(s=>s.id===id);const step=document.createElement('button');step.textContent=`${index+1}. ${screen.title}`;step.onclick=()=>{showNative(screen);gallery.scrollIntoView({behavior:'smooth',block:'start'});};return step;}));
});
const features=document.querySelector('#feature-groups');
window.featureGroups.forEach(group=>{const article=document.createElement('article');article.className='feature-group';article.dataset.search=[group.name,...group.items.flat()].join(' ').toLowerCase();
 const heading=document.createElement('h3');heading.textContent=group.name;article.append(heading);
 const badge=document.createElement('span');badge.className='feature-evidence';badge.textContent=group.planned?'PROPOSED · NOT SHIPPED':'IMPLEMENTED IN SOURCE';article.append(badge);
 const list=document.createElement('dl');group.items.forEach(([name,description])=>{const dt=document.createElement('dt');dt.textContent=name;const dd=document.createElement('dd');dd.textContent=description;list.append(dt,dd);});article.append(list);
 const detail=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Implementation references';const source=document.createElement('p');source.textContent=group.source;detail.append(summary,source);article.append(detail);features.append(article);
});
document.querySelector('#feature-search').oninput=e=>{const query=e.target.value.trim().toLowerCase();let count=0;document.querySelectorAll('.feature-group').forEach(group=>{group.hidden=!group.dataset.search.includes(query);if(!group.hidden)count++;});document.querySelector('#feature-count').textContent=count?`${count} feature groups shown`:'No matching feature groups. Try “sound”, “controller”, “files”, or “updates”.';};
showNative(selectedScreen);
for(const page of window.nativeInventory.settings){const li=document.createElement('li');li.textContent=page;document.querySelector('#settings-inventory').append(li);}
for(const runtime of window.nativeInventory.runtimes){const li=document.createElement('li');li.textContent=runtime.id;document.querySelector('#runtime-inventory').append(li);}

"use strict";
const search=document.getElementById("search"),state=document.getElementById("state"),rows=[...document.querySelectorAll("#systems tbody tr")],count=document.getElementById("count");
function filter(){const q=search.value.toLocaleLowerCase().trim();let n=0;for(const row of rows){const show=(!q||row.textContent.toLocaleLowerCase().includes(q))&&(state.value==="all"||row.dataset.state.startsWith(state.value));row.hidden=!show;if(show)n++;}count.textContent=`${n} of ${rows.length} expected systems and runtime families shown`;}
search.addEventListener("input",filter);state.addEventListener("change",filter);

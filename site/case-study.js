const search=document.querySelector('#catalogue-search');
const records=[...document.querySelectorAll('#catalogue-records>.record')];
function filter(){const q=search.value.trim().toLocaleLowerCase();let count=0;for(const r of records){r.hidden=!r.textContent.toLocaleLowerCase().includes(q);if(!r.hidden)count++;}document.querySelector('#catalogue-count').textContent=`${count} of ${records.length} catalogue records`;document.querySelector('#no-results').hidden=count!==0;}
search.addEventListener('input',filter);
function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const target=document.getElementById(id);if(!target)return;if(target.matches('.record')&&target.hidden){search.value='';filter();}for(let node=target;node;node=node.parentElement){if(node.tagName==='DETAILS')node.open=true;}requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
window.addEventListener('hashchange',reveal);if(location.hash)reveal();

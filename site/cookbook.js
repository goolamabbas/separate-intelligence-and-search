const search = document.querySelector('#search');
const group = document.querySelector('#group');
const patterns = [...document.querySelectorAll('.pattern')];
function filterPatterns(){
 const terms=search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
 let count=0;
 for(const item of patterns){item.hidden=!(terms.every(t=>item.dataset.search.includes(t))&&(!group.value||item.dataset.group===group.value));if(!item.hidden)count++;}
 document.querySelector('#result-count').textContent=`${count} of ${patterns.length} patterns`;
 document.querySelector('#empty').hidden=count!==0;
}
search.addEventListener('input',filterPatterns);
group.addEventListener('change',filterPatterns);
document.querySelector('#reset').addEventListener('click',()=>{search.value='';group.value='';filterPatterns();search.focus();});
function revealHash(){
 let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
 const target=document.getElementById(id);if(!target)return;
 const details=target.closest('details');if(details){details.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
}
window.addEventListener('hashchange',revealHash);
document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link&&link.hash===location.hash)revealHash();});
filterPatterns();revealHash();

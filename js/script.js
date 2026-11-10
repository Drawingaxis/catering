(function(){
var btn=document.querySelector('.menu-btn'),links=document.querySelector('.links');
if(btn)btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
var pills=document.querySelectorAll('button[data-f]'),cards=document.querySelectorAll('[data-cat]');
pills.forEach(function(p){p.addEventListener('click',function(){
pills.forEach(function(x){x.classList.remove('act');x.setAttribute('aria-pressed','false')});
p.classList.add('act');p.setAttribute('aria-pressed','true');
cards.forEach(function(c){c.hidden=!(p.dataset.f==='all'||c.dataset.cat===p.dataset.f)})})});
var pkg=new URLSearchParams(location.search).get('package'),sel=document.getElementById('package');
if(pkg&&sel){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===pkg)sel.selectedIndex=i}}
document.querySelectorAll('form[data-proto]').forEach(function(f){f.addEventListener('submit',function(e){
e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}
f.hidden=true;var ok=document.getElementById(f.dataset.ok);ok.hidden=false;ok.focus()})});
})();
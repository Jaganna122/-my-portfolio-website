// loader
window.onload = () => {
  document.getElementById("loader").style.display="none";
};

// typing
const text="Studying BSc IT | Frontend Developer";
let i=0;
const t=document.querySelector(".typing");
(function type(){
 if(i<text.length){t.innerHTML+=text[i++];setTimeout(type,80)}
})();

// dark mode
document.getElementById("themeToggle").onclick=()=>{
 document.body.classList.toggle("light");
};

// scroll reveal
window.addEventListener("scroll",()=>{
 document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top<window.innerHeight-100)
   el.classList.add("active");
 });

 // progress bar
 const h=document.documentElement;
 document.getElementById("progress-bar").style.width=
 (h.scrollTop/(h.scrollHeight-h.clientHeight))*100+"%";
});

// skill counter
document.querySelectorAll(".count").forEach(counter=>{
 let target=+counter.dataset.target;
 let c=0;
 let inc=setInterval(()=>{
  if(c>=target) clearInterval(inc);
  counter.innerText=c++;
 },20);
});

function scrollToContact(){
 document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

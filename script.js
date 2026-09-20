
document.addEventListener("DOMContentLoaded",()=>{
  const b=document.querySelector("[data-menu-button]"),m=document.querySelector("[data-mobile-menu]");
  if(b&&m)b.addEventListener("click",()=>m.classList.toggle("hidden"));
  let page=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const k=a.dataset.nav;
    if((page==="index.html"&&k==="home")||(page==="about.html"&&k==="about")||(page==="contact.html"&&k==="contact")||(page==="signup.html"&&k==="signup")||(page==="signin.html"&&k==="signin")) a.classList.add("active-nav");
  });
  document.querySelectorAll("form[data-validate]").forEach(f=>f.addEventListener("submit",e=>{
    let ok=true;
    f.querySelectorAll("[required]").forEach(x=>{
      const er=f.querySelector(`[data-error-for="${x.name}"]`);
      if(!x.checkValidity()){ok=false;x.classList.add("border-red-500");if(er)er.classList.remove("hidden")}
      else{if(er)er.classList.add("hidden");x.classList.remove("border-red-500")}
    });
    const p=f.querySelector("[name=password]"),c=f.querySelector("[name=confirmPassword]");
    if(p&&c&&p.value!==c.value){ok=false;const er=f.querySelector('[data-error-for="confirmPassword"]');if(er){er.textContent="Passwords do not match.";er.classList.remove("hidden")}}
    if(!ok||f.dataset.demo==="true")e.preventDefault();
    if(ok&&f.dataset.demo==="true"){const s=f.querySelector("[data-success]");if(s)s.classList.remove("hidden");f.reset()}
  }));
  const r=document.querySelector("#tempRange"),v=document.querySelector("#tempValue");
  if(r&&v)r.addEventListener("input",()=>v.textContent=`${r.value}°`);
});

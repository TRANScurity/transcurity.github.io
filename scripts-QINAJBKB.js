function updateFormSubmitButtons(){for(const e of document.getElementsByTagName("form")){const o=e.querySelector('[type="submit"]');if(o===null)continue;let t=!0;for(const r of e.querySelectorAll("input, textarea, select"))if(r.hasAttribute("faulty")||!r.checkValidity()){t=!1;break}o.disabled=!t,e.setAttribute("action",t?e.dataset.posturl:"https://httpbin.org/post")}}window.onbeforeunload=()=>{for(const e of document.getElementsByTagName("form"))e.reset();updateFormSubmitButtons()};function refreshNavigationSpacerHeight(){const e=document.querySelector("header")?.clientHeight;document.querySelectorAll(".navigation-header-spacer").forEach(t=>t.style.height=`${e+1}px`)}

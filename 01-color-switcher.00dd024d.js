const e=document.querySelector("[data-start]");console.log(e);const t=document.querySelector("[data-stop]");console.log(t);const o=document.querySelector("body");let d=null;t.disabled=!0;e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,d=setInterval((()=>o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.00dd024d.js.map

const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){e.disabled=!1,timerId=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.c88b4791.js.map

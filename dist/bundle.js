(()=>{var e={728:()=>{APP.innerHTML="",APP.appendChild(templateEngine({tag:"div",cls:["center","level-screen"],content:{tag:"form",cls:"level-form",content:[{tag:"div",cls:"level-radio",content:[{tag:"label",cls:"level-title",content:"Выбери сложность"},{tag:"div",cls:"level-buttons",content:[{tag:"label",attrs:{for:"level-basic"},content:[{tag:"input",cls:"level-buttons",attrs:{id:"level-basic",name:"group-level",type:"radio",value:"basic"}},{tag:"img",attrs:{src:"./img/1.png",alt:"1"}}]},{tag:"label",attrs:{for:"level-middle"},content:[{tag:"input",cls:"level-buttons",attrs:{id:"level-middle",name:"group-level",type:"radio",value:"middle"}},{tag:"img",attrs:{src:"./img/2.png",alt:"2"}}]},{tag:"label",attrs:{for:"level-advanced"},content:[{tag:"input",cls:"level-buttons",attrs:{id:"level-advanced",name:"group-level",type:"radio",value:"advanced"}},{tag:"img",attrs:{src:"./img/3.png",alt:"3"}}]}]}]},{tag:"button",cls:"level-form-btn",content:"Старт"}]}}));const e=document.querySelector(".level-form"),t=e.querySelectorAll("label");e.querySelector(".level-radio").addEventListener("change",(function(e){LEVEL=e.target.value,t.forEach((e=>{e.classList.remove("level-checked-button")})),e.target.parentElement.classList.add("level-checked-button")})),e.addEventListener("submit",(e=>{e.preventDefault(),LEVEL&&(console.log(LEVEL,"переходим к игре"),renderGameScreen())}))}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";l(728),document.querySelector(".app"),window.application={}})()})();
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n={body:document.querySelector("body"),text:document.querySelectorAll("p,a,h1,h2,h3,h4,h5,h6"),headings:document.querySelectorAll("h1,h2,h3,h4,h5,h6"),lightSwitch:document.querySelector(".light-switch"),toggleSwitchUI:document.querySelector(".light-switch-toggle-ui"),imgBorders:document.querySelectorAll(".border"),menuList:document.querySelector(".menu__list"),menuItems:document.querySelectorAll(".menu__link"),htmlTag:document.querySelector("html"),gallery:document.querySelector(".gallery"),gallerySet:document.querySelector(".gallery-set"),upArrow:document.querySelector(".upArrow"),toggleSwitch:document.querySelector(".light-switch-toggle"),menuSwitch:document.getElementById("navigation-toggle"),menuPopup:document.querySelector(".menu-full")};if(window.addEventListener("load",function(){let e=0;n.menuItems.forEach(t=>{e+=.05,t.style.opacity=1,t.style.transition=`opacity 1.2s ${e}s, transform 1.2s ${e}s, color .3s, margin .1s`,t.style.transform="translateY(0)"})}),n.gallerySet){const e=n.gallerySet.querySelectorAll(".image-set img");e.forEach(e=>{e.style.opacity=0});const t=function(){let t=.25;e.forEach(e=>{const o=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom;o<window.innerHeight&&n>0?(e.style.animation=`fadeIn 1s ${t}s both`,t+=.25,e.style.opacity=1):(e.style.opacity=0,e.style.animation="")})};window.addEventListener("scroll",t),window.addEventListener("load",t)}if(n.upArrow){const e=function(){window.scroll({top:0,behavior:"smooth"})};n.upArrow.addEventListener("click",e)}const r=localStorage.getItem("theme");r&&(document.documentElement.setAttribute("data-theme",r),"dark-mode"===r&&(n.toggleSwitch.checked=!0));const l=()=>{n.toggleSwitchUI.style.animation=""};n.toggleSwitch.addEventListener("click",()=>{n.toggleSwitchUI.style.animation="stretchIt .2s ease"}),n.toggleSwitchUI.addEventListener("transitionend",l),n.toggleSwitch.addEventListener("change",function(e){e.target.checked?(n.htmlTag.setAttribute("data-theme","dark-mode"),localStorage.setItem("theme","dark-mode"),n.toggleSwitchUI.style.animation="stretchIt .2s ease"):(n.htmlTag.setAttribute("data-theme","light-mode"),localStorage.setItem("theme","light-mode"))}),n.toggleSwitchUI.addEventListener("transitionend",l);n.menuSwitch.addEventListener("change",()=>{n.menuSwitch.checked?(n.menuPopup.style.opacity=1,n.menuPopup.style.visibility="visible",n.body.style.overflow="hidden"):(n.menuPopup.style.opacity=0,n.menuPopup.style.visibility="hidden",n.body.style.overflow="")}),window.addEventListener("load",()=>{n.menuSwitch.checked=!1})}]);
//# sourceMappingURL=main.js.map
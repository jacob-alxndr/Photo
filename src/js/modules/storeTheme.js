//1.Selectors
import { elements } from "./DOMelements";

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
  
    if (currentTheme === 'dark') {
        elements.toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        elements.htmlTag.setAttribute('data-theme', 'dark-mode')
        localStorage.setItem('theme', 'dark-mode');
        elements.toggleSwitchUI.style.animation = 'stretchIt .2s ease'
    }else {        
        elements.htmlTag.setAttribute('data-theme', 'light-mode')
        localStorage.setItem('theme', 'light-mode');
    }    
}

const addAni = () => {
    elements.toggleSwitchUI.style.animation = 'stretchIt .2s ease'
}

const removeAni = () =>{
    elements.toggleSwitchUI.style.animation = ''
}

//3.Events
elements.toggleSwitch.addEventListener('click', addAni);
elements.toggleSwitchUI.addEventListener('transitionend', removeAni);
elements.toggleSwitch.addEventListener('change', switchTheme)
elements.toggleSwitch.addEventListener('load', switchTheme)
elements.toggleSwitchUI.addEventListener('transitionend', removeAni);
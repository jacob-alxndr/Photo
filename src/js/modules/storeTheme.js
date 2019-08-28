//1.Selectors
import { elements } from "./DOMelements";

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
  
    if (currentTheme === 'dark-mode') {
        elements.toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        elements.htmlTag.setAttribute('data-theme', 'dark-mode')
        localStorage.setItem('theme', 'dark-mode');
        // elements.toggleSwitchUILeft.style.animation = 'stretchIt .2s ease'
        // elements.toggleSwitchUIRight.style.animation = 'stretchIt .2s ease'
    }else {        
        elements.htmlTag.setAttribute('data-theme', 'light-mode')
        localStorage.setItem('theme', 'light-mode');
    }    
}

const addAni = () => {
    // elements.toggleSwitchUILeft.style.animation = 'stretchIt .2s ease'
    // elements.toggleSwitchUIRight.style.animation = 'stretchIt .2s ease'
}

const removeAni = () =>{
    elements.toggleSwitchUILeft.style.animation = ''
    elements.toggleSwitchUIRight.style.animation = ''
}


//3.Events
elements.toggleSwitch.addEventListener('click', addAni);
elements.toggleSwitchUILeft.addEventListener('transitionend', removeAni);
elements.toggleSwitch.addEventListener('change', switchTheme)
elements.toggleSwitchUIRight.addEventListener('transitionend', removeAni);
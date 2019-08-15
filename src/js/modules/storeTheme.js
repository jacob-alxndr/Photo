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
    }
    
    else {        
        elements.htmlTag.setAttribute('data-theme', 'light-mode')
        localStorage.setItem('theme', 'light-mode');
    }    
}

elements.toggleSwitch.addEventListener('change', switchTheme, false)
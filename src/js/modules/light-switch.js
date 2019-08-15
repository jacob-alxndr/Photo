//1.Selectors
import { elements } from "./DOMelements";

const lightSwitch = () => {
    elements.toggleSwitch.classList.toggle('active')
    elements.toggleSwitch.style.animation = 'stretchIt .2s ease'
    elements.htmlTag.classList.toggle('dark-mode')
}

const removeAni = () =>{
    elements.toggleSwitch.style.animation = ''
}

//3.Events
elements.toggleSwitch.addEventListener('click', lightSwitch);
elements.toggleSwitch.addEventListener('transitionend', removeAni);

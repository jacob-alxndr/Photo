//1.Selectors
import { elements } from "./DOMelements";


//2.Actions
const changeBackgroundcolor = (element) => {
    element.classList.toggle('white-background')
}

const changeTextColor = (text) => {
    text.forEach(el => {
        el.classList.toggle('dark-text')
    })
}

const lightSwitch = () => {
    changeBackgroundcolor(elements.body);
    changeTextColor(elements.text);
}


//3.Events
elements.lightSwitch.addEventListener('click', lightSwitch);

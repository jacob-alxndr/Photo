// 1. Selectors
import { elements } from "./DOMelements";
//2. Actions
const fadeUp = function () {
    let time = 0
    elements.menuItems.forEach(item =>{
        time = time + .05
        item.style.opacity = 1;
        item.style.transition = `opacity 1.2s ${time}s, transform 1.2s ${time}s, color .3s, margin .1s`;
        item.style.transform = `translateY(0)`;
    })

}

// 3. Events
window.addEventListener('load', fadeUp);
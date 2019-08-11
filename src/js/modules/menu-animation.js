// 1. Selectors
import { elements } from "./DOMelements";

//2. Actions
const fadeUp = function () {
    let time = 0
    elements.menuItems.forEach(item =>{
        time = time + .05
        item.style.opacity = 1;
   
        item.style.transition = `all 1.2s ${time}s`;
        item.style.transform = `translateY(0)`;
      
        console.log(item)
    })

}

// 3. Events
window.addEventListener('load', fadeUp);
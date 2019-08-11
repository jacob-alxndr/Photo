// 1. Selectors
import { elements } from "./DOMelements";
import { delay } from "q";

//2. Actions
const fadeUp = function () {
    let time = 15
    elements.menuItems.forEach(item =>{
        time = time - 1
        item.style.opacity = 1;
        item.style.transform = `translateY(0)`;
        item.style.transition = `all 3s`;
        item.style.transitionDelay = `${time}s`;
      
        console.log(item)
    })

}

// 3. Events
document.addEventListener('load', fadeUp());
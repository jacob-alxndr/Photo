// 1. Selectors
import { elements } from "./DOMelements";

//2. Actions
const imgSurface = () => {
    
}


//3. Events
elements.menuItems.forEach(item =>{ 
    item.addEventListener('mouseover', imgSurface)
})

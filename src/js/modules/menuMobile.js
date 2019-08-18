//1.Selectors
import { elements } from "./DOMelements";

//2.Actions


const reset = () => {
    elements.menuSwitch.checked = false
}

const menuFadeIn = ()=>{

    if(elements.menuSwitch.checked){
        elements.menuPopup.style.opacity = 1
        elements.menuPopup.style.visibility = 'visible'
        elements.body.style.overflowY = "hidden"
        elements.menuBtn.style.position = 'fixed'
        elements.menuBtn.style.top = '4rem'

        // position: fixed;
        // top: 4rem;

    //     let time = 0
    // elements.menuItems.forEach(item =>{
    //     item.style.opacity = 0;
    //     item.style.transform = ``;
    //     time = time + .05
    //     item.style.opacity = 1;
    //     item.style.transition = `opacity 1.2s ${time}s, transform 1.2s ${time}s, color .3s, margin .1s`;
    //     item.style.transform = `translateY(0)`;
    // })
     
    }
    else{
        elements.menuPopup.style.opacity = 0
        elements.menuPopup.style.visibility = 'hidden'
        elements.body.style.overflowY = "visible"
        elements.menuBtn.style.position = 'relative'
        elements.menuBtn.style.top = ''
    }
}

//3. Events
elements.menuSwitch.addEventListener('change', menuFadeIn)
window.addEventListener('load', reset)


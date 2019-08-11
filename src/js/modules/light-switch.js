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
    elements.lightSwitch.classList.toggle('active')
    elements.toggleSwitch.classList.toggle('active')
    elements.imgBorders.forEach(border =>{
        border.classList.toggle('active')
    })

    if(elements.lightSwitch.classList.contains('active')){
        // elements.menuList.style.backgroundColor = 'red'
       elements.menuItems.forEach(item =>{
        //    item.style.color = '#2a2a2a'
        //    item.focus().style.color = '#fff'
       })
    }else{
        elements.menuList.style.backgroundColor = ''
    }
    
}


//3.Events
elements.lightSwitch.addEventListener('click', lightSwitch);

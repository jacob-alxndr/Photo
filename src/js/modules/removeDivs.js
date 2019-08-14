//1.Selectors
import { elements } from "./DOMelements";


// 2. Actions
const removeDivs = function (){

    if(window.innerWidth <= 600){ 
        elements.deleteDivs.forEach(div =>{
            div.style.display = 'none'
        })
    }

}


const addDivs = function (){

    if(window.innerWidth >= 600){
        elements.deleteDivs.forEach(div =>{
            div.style.display = 'block'
        })

}
}


// 3. Events
window.addEventListener('resize', removeDivs)
window.addEventListener('load', removeDivs)
window.addEventListener('reload', removeDivs)

window.addEventListener('resize', addDivs)
window.addEventListener('load', addDivs)
window.addEventListener('reload', addDivs)



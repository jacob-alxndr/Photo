// 1. Selectors
import { elements } from "./DOMelements";


const imgList = {



}




//2. Actions

const setImgSrc = () =>{
    
    elements.imgs.forEach(img =>{
        // img.src = "./img/1x/megan_3.JPG"
        // img.style.width = '10%'
        // img.setAttribute('srcset', './img/1x/justus_3.JPG 300w, ./img/2x/justus-2x_3.JPG 1000w')

        // srcset="./img/1x/justus_3.JPG 300w, ./img/2x/justus-2x_3.JPG 1000w"
    })
}

//3. Events
window.addEventListener('load', setImgSrc)
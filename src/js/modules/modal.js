// 1. Selectors
import { elements } from "./DOMelements";

//2. Actions

function selectImg(e){
        elements.modal.style.opacity = 1
        elements.modal.style.visibility = "visible"
        console.log(e.target.src)
        elements.modalImg.src = e.target.src
}

const close = () =>{
    elements.modal.style.opacity = 0
    elements.modal.style.visibility = "hidden"

}



//3. Events


elements.imgs.forEach(img =>{
    img.addEventListener('click', selectImg)
})

elements.closeModal.addEventListener('click', close)
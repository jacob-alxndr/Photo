//1.Selectors
import { elements } from "./DOMelements";

//2.Actions
if (elements.gallerySet){
    const images = elements.gallerySet.querySelectorAll('.image-set')
    const scroll = function () {
        let delay = 0.25
        images.forEach(image =>{
            const topTag = image.getBoundingClientRect().top
            const bottomTag = image.getBoundingClientRect().bottom
            console.log(topTag)
            if(topTag < window.innerHeight & bottomTag > 0){
                image.style.animation = `fadein 3s ${delay}s both`
                delay = delay + 0.2
                image.style.border = "5px solid green"
            }
            else{
                image.style.opacity = 0
                image.style.animation = ""
                image.style.border = "5px solid red"
            }
        })
       
    }
    //3.Events
    window.addEventListener('scroll', scroll);
}










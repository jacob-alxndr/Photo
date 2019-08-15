//1.Selectors
import { elements } from "./DOMelements";

//2.Actions
if (elements.gallerySet){

    const images = elements.gallerySet.querySelectorAll('.image-set img')

    images.forEach(image =>{
        image.style.opacity = 0;
    })
    
    const scroll = function () {

        let delay = 0.25
        images.forEach(image =>{
            const topTag = image.getBoundingClientRect().top
            const bottomTag = image.getBoundingClientRect().bottom

            if(topTag < window.innerHeight && bottomTag > 0){
                image.style.animation = `fadeIn 1s ${delay}s both`
                delay = delay + 0.25
                image.style.opacity = 1;
            }else{
                image.style.opacity = 0
                image.style.animation = ""
            }
        })
       
    }
    //3.Events
    window.addEventListener('scroll', scroll);
    window.addEventListener('load', scroll);
}


if (elements.upArrow){
const scrollTop = function () {
    window.scroll({top: 0, behavior: 'smooth'})
}

 //3.Events
elements.upArrow.addEventListener('click', scrollTop)
}







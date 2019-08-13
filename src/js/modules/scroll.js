//1.Selectors
import { elements } from "./DOMelements";

if (elements.gallerySet.querySelectorAll('.image-set')) {
    const images = elements.gallerySet.querySelectorAll('.image-set')
    console.log(images)

    const scroll = function () {
  
        let delay = 0.25
    
            images.forEach(image =>{
            const topTag = image.getBoundingClientRect().top
            const bottomTag = image.getBoundingClientRect().bottom
      
            if(topTag < window.innerHeight && bottomTag > 0){
                image.style.animation = `fadein 1s ${delay}s both`
                delay = delay + 0.2
            }
        //    else{
        //         image.style.opacity = 0
        //         image.style.animation = ""
        //    }
        })
       
    }
    
    window.addEventListener('scroll', scroll);
}



//2.Actions



//3.Events


//1.Selectors
import { elements } from "./DOMelements";

//2.Actions
if (elements.gallerySet){

    const images = elements.gallerySet.querySelectorAll('.image-set')

    images.forEach(image =>{
        image.style.opacity = 0;
    })
    
    const scroll = function () {
        let odd = 2
        let delay = 0.5
        images.forEach(image =>{
            const topTag = image.getBoundingClientRect().top
            const bottomTag = image.getBoundingClientRect().bottom

            if(topTag < window.innerHeight && bottomTag > 0){
                image.style.animation = `fadeIn 1s ${delay}s both`
                odd = odd + 1
                if(odd%2 == 0){
                    delay = delay + 0.5
                }
                console.log(delay)
                image.style.opacity = 1;
                // image.style.border = "5px solid green"
            }
            else{
                image.style.opacity = 0
                image.style.animation = ""
            }
        }, 2000)
       
    }
    //3.Events
    window.addEventListener('scroll', scroll);
    window.addEventListener('load', scroll);

}


const scrollTop = function () {
    window.scroll({top: 0, behavior: 'smooth'})
}


 //3.Events
elements.upArrow.addEventListener('click', scrollTop)









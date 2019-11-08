//1.Selectors
import { elements } from './DOMelements'

//2.Actions
if (elements.gallerySet) {
    const images = elements.gallerySet.querySelectorAll('.image-set img')

    images.forEach(image => {
        image.style.opacity = 0
    })

    const scroll = function() {
        let delay = 0.1
        images.forEach(image => {
            const topTag = image.getBoundingClientRect().top
            const bottomTag = image.getBoundingClientRect().bottom
            // && bottomTag > 0
            if (topTag < window.innerHeight) {
                image.style.animation = `fadeIn 1s ${delay}s both`
                delay = delay + 0.1
                image.style.opacity = 1
            }
        })
    }
    //3.Events
    window.addEventListener('scroll', scroll)
    window.addEventListener('load', scroll)
}

if (elements.upArrow) {
    const scrollTop = function() {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    //3.Events
    elements.upArrow.addEventListener('click', scrollTop)
    elements.toTop.addEventListener('click', scrollTop)
}

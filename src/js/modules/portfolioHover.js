// 1. Selectors
import { elements } from './DOMelements'

//2. Actions
// const imgSurface = () => {

// }

//3. Events
if (window.innerWidth > 800) {
    elements.menuItem.forEach(item => {
        item.addEventListener('mouseover', function() {
            elements.imgs.forEach(img => {
                if (
                    img.getAttribute('data-tag') ===
                    item.getAttribute('data-tag')
                ) {
                    // img.style.border = "5px solid red"
                    img.style.display = 'block'
                    img.style.opacity = 1
                    img.style.visibility = 'visible'
                    console.log(item.getAttribute('data-tag'))
                } else {
                    img.style.display = 'none'
                    img.style.opacity = 0
                    img.style.visibility = 'hidden'
                }
            })
        })
    })
}

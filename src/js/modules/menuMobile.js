//1.Selectors
import { elements } from './DOMelements'

//2.Actions

const reset = () => {
    elements.navToggle.checked = false
}

const menuFadeIn = () => {
    const height = window.innerHeight

    if (elements.navToggle.checked) {
        elements.menuPopup.style.opacity = 1
        elements.menuPopup.style.visibility = 'visible'
        elements.htmlTag.style.height = `${height}px`
        elements.htmlTag.classList.add('open')

        // elements.htmlTag.style.overflowY = 'hidden'

        // elements.navBtn.style.position = 'fixed'
        // elements.navBtn.style.top = '1rem'

        let time = 0
        elements.menuFullLinks.forEach(item => {
            item.style.opacity = 0
            item.style.transform = ``
            time = time + 0.05
            item.style.opacity = 1
            item.style.transition = `opacity 1.2s ${time}s, transform 1.2s ${time}s, color .3s, margin .1s`
            item.style.transform = `translateY(0)`
        })
    } else {
        elements.menuPopup.style.opacity = 0
        elements.menuPopup.style.visibility = 'hidden'
        elements.htmlTag.style.height = ''
        elements.htmlTag.classList.remove('open')
        // elements.htmlTag.style.overflowY = 'visible'
        // elements.navBtn.style.position = ''
        // elements.navBtn.style.top = ''

        elements.menuFullLinks.forEach(item => {
            item.style.opacity = 0
            item.style.transform = `translateY(10vh)`
        })
    }
}

//3. Events
elements.navToggle.addEventListener('change', menuFadeIn)
window.addEventListener('load', reset)
window.addEventListener('load', menuFadeIn)

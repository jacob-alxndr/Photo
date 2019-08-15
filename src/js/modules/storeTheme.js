//1.Selectors
import { elements } from "./DOMelements";

if(elements.toggleSwitch){

    const LOCAL_STORAGE_THEME = 'theme.mode'
    let currentTheme

    if(localStorage.getItem(LOCAL_STORAGE_THEME)){
        currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME)
    }else{
        currentTheme = 'light'
        
    }
    function save () {
        localStorage.setItem(LOCAL_STORAGE_THEME, currentTheme)
    }
    document.documentElement.setAttribute('data-theme', currentTheme)

    function storeTheme (){
        
        const toggleInput = document.querySelector(".light-switch-toggle")

        if (currentTheme === 'dark'){
            toggleInput.setAttribute('checked', true)
        }

        const addAttribute = function () {
            document.documentElement.setAttribute('data-theme', 'dark')
            elements.htmlTag.classList.add('dark-mode')
            currentTheme = 'dark'
            save()        
        }
        
        const removeAttribute = function () {
            document.documentElement.setAttribute('data-theme', 'light')
            elements.htmlTag.classList.remove('dark-mode')
            currentTheme = 'light'
            save()
        }


        toggleInput.addEventListener('change', function () {
            isChecked()
        })
        
        function isChecked (){
            let isChecked = toggleInput.checked
            if (isChecked) {
                addAttribute()
               
            }else{
                removeAttribute()
            }
        }

    }

    window.addEventListener('load', storeTheme)

}



// const LOCAL_STORAGE_THEME = "theme.mode"
// let currentTheme


// if (localStorage.getItem(LOCAL_STORAGE_THEME)) {
//     currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME)
// } else {
//     currentTheme = 'light'
// }

// function save() {
//     localStorage.setItem(LOCAL_STORAGE_THEME, currentTheme)
// }
// document.documentElement.setAttribute('data-theme', currentTheme)


// window.onload = function () {
//     const themeSwitcher = document.getElementById('theme-switcher-input')


//     if (currentTheme === "dark") {
//         themeSwitcher.setAttribute('checked', true)
//     }

//     const addAttribute = function () {
//         document.documentElement.setAttribute('data-theme', 'dark')
//         document.documentElement.classList.add('color-theme-in-transition')
//         window.setTimeout(function () {
//             document.documentElement.classList.remove('color-theme-in-transition')
//         }, 1000)
//         currentTheme = 'dark'
//         save()
//     }

//     const removeAttribute = function () {
//         document.documentElement.setAttribute('data-theme', 'light')
//         document.documentElement.classList.add('color-theme-in-transition')
//         window.setTimeout(function () {
//             document.documentElement.classList.remove('color-theme-in-transition')
//         }, 50)
//         currentTheme = 'light'
//         save()
//     }

//     // addAttribute()

//     themeSwitcher.addEventListener("change", function () {
//         isChecked()
//     });

//     function isChecked() {
//         let isChecked = themeSwitcher.checked
//         if (isChecked) {
//             addAttribute()
//         } else {
//             removeAttribute()
//         }
//     }
// }
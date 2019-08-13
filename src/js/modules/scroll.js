// //1.Selectors
// import { elements } from "./DOMelements";
 
// //2.Actions
// const scroll = function () {
//     const portfolioSet = document.querySelector('.gallery-set')
//     const images = portfolioSet.querySelectorAll('.image-set')
//     let delay = 0.25

//         images.forEach(image =>{
//         const topTag = image.getBoundingClientRect().top
//         const bottomTag = image.getBoundingClientRect().bottom
//         // console.log("top" +" " +topTag)
//         // console.log("bottom" +" " + bottomTag)

//         if(topTag < window.innerHeight && bottomTag > 0){
//             tag.style.animation = `fadein 1s ${delay}s both`
//             delay = delay + 0.2
//         }
//        else{
//             tag.style.opacity = 0
//             tag.style.animation = ""
//        }
//     })
   
// }



// //3.Events
// document.addEventListener('scroll', scroll);

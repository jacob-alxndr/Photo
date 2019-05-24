//Exporting the js files so we can import in the main.js files
//Import libraries here before the export

export default function() {
    //1.Selectors
    const hamburgerIcon = document.querySelector('.hamburger');

    //2.Actions
    const events = {
        toggleMenu() {
            //some code
        }
    }

    //3.Events
    hamburgerIcon.addEventListener('click', events.toggleMenu);
}

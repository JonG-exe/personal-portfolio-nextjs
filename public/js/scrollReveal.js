
// window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

function scrollReveal() {
    let revealObjects = document.getElementsByClassName("reveal");

    for(let i = 0; i < revealObjects.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealObjects[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight){
            revealObjects[i].classList.add("revealed");
        }
    }
}

// import Typed from "typed.js"

// const typed = new Typed(".element", {
//     strings: ["Hello World", "Chastity"],
//     typeSpeed: 150,
//     backSpeed: 150,
//     looped: true
// })
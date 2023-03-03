"use strict";

// window.addEventListener("load", HomeAnimations)

function HomeAnimations() {

    iconHover() // Allow icons in last infoTile to display their name

    /* ---------------------------------------------------------------------*/ 

    const timeline = gsap.timeline()

    timeline
        .from(".hello-text", { duration: 2, x: "-60%", opacity: 0})
        .from(".jon-g-text", { duration: 1.75, y: "60%", opacity: 0})
        .fromTo(".neu-circle-in-circle", // <- extruded circle that the profile pic sits on
            {boxShadow: "none"}, 
            {duration: 0.25, boxShadow: "-15px -15px 13px 0px white, 7px 7px 11px 1px rgba(0, 0, 0, 0.21)"}
        )
        .fromTo(".neu-profile-pic", 
            {opacity: 0,}, 
            {opacity: 1}
        )
        .fromTo(".CTA", { y: "100%", opacity: 0}, { y: 0, duration: 0.5,  opacity: 1, stagger: 0.2, ease: "power4.out"})
        .fromTo(".infoTile", 

            { boxShadow: "none", backgroundColor: "transparent", color: "rgba(0, 0, 0, 0)", opacity: 0} , 

            {
                duration: 0.25, 
                boxShadow: "-4px -4px 6px 1px white inset, 8px 6px 15px rgba(0, 0, 0, 0.17) inset", 
                backgroundColor: "var(--main-color)", 
                color: "rgba(67, 67, 67)", 
                opacity: 1,
                stagger: 0.3
            }
        )
}

function iconHover() {

    const items = ["HTML 5", "CSS 3", "Javascript", "MongoDB", "React JS", "Adobe XD"]
    // const backgroundColors = ["rgb(255, 106, 0)", "rgba(0, 51, 128, 0.89)", "yellow", "green", "rgb(0, 145, 255)", "purple"]
    const selectedIcon = document.getElementById("selected-icon")
    const icons = document.getElementsByClassName("icon-image")

    for(let i = 0; i < icons.length; i++) {

        icons[i].addEventListener("mouseover", () => {

            selectedIcon.style.display = "flex"
            selectedIcon.textContent = items[i]

        })

        icons[i].addEventListener("mouseleave", () => {
            selectedIcon.style.display = "none"
            selectedIcon.textContent = ""
        })
    }
}

setTimeout(HomeAnimations, 0)

import React, { useEffect } from "react"
import InfoTile from "./InfoTile";
import profile_pic from "../images/jon-g-profile-picture.png"
import PageDesign from "./PageDesign"
import Link from "next/link"
import Image from "next/image";

let infoTile_info = {
    tile_one: {
        line_one: "First_name: 'Jonathan',",
        line_two: "Last_name: 'Gray',",
        line_three: "Alias: ['Jon.G', 'Gray']",
    },
    tile_two: {
        line_one: "Services: ['UI/UX Design', 'Web Development', 'SEO']"
    },
    tile_three: {
        line_one: "Web Languages: ['HTML', 'CSS', 'Javascript'],",
        line_two: "Proficient: ['Node.js', 'MongoDB', 'React', 'Express.js']"
    }
}


export default function Home () {

    useEffect(() => {

        let animDuration = null

        // Reduce Home Animation Speed for the current session if already loaded once before
        if(sessionStorage.getItem("loaded") === null) { // Should be non-existent on first load

            setTimeout(HomeAnimations, 0)
            sessionStorage.setItem("loaded", "true") 

        }
        else {
            animDuration = 0.001
            setTimeout(HomeAnimations, 0)
        }

    /*-------------- Home Animations --------------*/

        function HomeAnimations() {

            iconHover() // Allow icons in last infoTile to display their name

            /* ---------------------------------------------------------------------*/

            // const timeline = gsap.timeline()

            //     timeline
            //         .fromTo(".content", { display: "none" }, { display: "flex" })
            //         .fromTo(".hello-text", { x: "-60%", opacity: 0}, {duration: animDuration || 2, x: "0%", opacity: 1})
            //         .fromTo(".jon-g-text", { y: "60%", opacity: 0}, {duration: animDuration || 1.75, y: "0", opacity: 1})
            //         .fromTo(".neu-circle-in-circle", // <- extruded circle that the profile pic sits on
            //             {boxShadow: "none"}, 
            //             {duration: animDuration || 0.05, boxShadow: "-15px -15px 13px 0px white, 7px 7px 11px 1px rgba(0, 0, 0, 0.21)"}
            //         )
            //         .fromTo(".neu-profile-pic", 
            //             {opacity: 0,}, 
            //             {opacity: 1}
            //         )
            //         .fromTo(".CTA", { y: "100%", opacity: 0}, { y: 0, duration: animDuration || 0.5,  opacity: 1, stagger: 0.2, ease: "power4.out"})
            //         .fromTo(".infoTile", 

            //             { boxShadow: "none", backgroundColor: "transparent", color: "rgba(0, 0, 0, 0)", opacity: 0} , 

            //             {
            //                 duration: animDuration || 0.25, 
            //                 boxShadow: "-4px -4px 6px 1px white inset, 8px 6px 15px rgba(0, 0, 0, 0.17) inset", 
            //                 backgroundColor: "var(--main-color)", 
            //                 color: "rgba(67, 67, 67)", 
            //                 opacity: 1,
            //                 stagger: 0.2
            //             }
            //         )
        }

        function iconHover() {

            const items = ["HTML 5", "CSS 3", "Javascript", "MongoDB", "React JS", "Adobe XD"]
            // const backgroundColors = ["rgb(255, 106, 0)", "rgba(0, 51, 128, 0.89)", "yellow", "green", "rgb(0, 145, 255)", "purple"]
            const selectedIcon = document.getElementById("selected-icon")
            const icons = document.getElementsByClassName("icon-image")

            for(let i = 0; i < icons.length; i++) {

                icons[i].addEventListener("mouseover", () => {
                    // selectedIcon.style.backgroundColor = backgroundColors[i]
                    selectedIcon.style.display = "flex"
                    selectedIcon.textContent = items[i]
                })

                icons[i].addEventListener("mouseleave", () => {
                    selectedIcon.style.display = "none"
                    selectedIcon.textContent = ""
                })
            }
        }


    }, [])


    return (
        <>
            <PageDesign />

            <section className="container">

                <div className="profile">

                    <h1 className="inset-text">
                        {/* <span style={{display: "block"}} className="hello-text">Hello.</span>
                        <span className="jon-g-text">I'm Jon.G</span> */}

                        {/* <span style={{display: "block"}} className="hello-text">Web Developer</span>
                        <span className="jon-g-text">Jon.G</span> */}

                        <span style={{display: "block"}} className="hello-text">Web Design That</span>
                        <span className="jon-g-text">Converts</span>
                    </h1>

                    <div className="profile-pic-area neu neu-circle embedded-neu">
                        
                        <div className="neu-circle-in-circle neu extruded-neu">
                            <Image className="neu-profile-pic" src={profile_pic} alt="Jonathan Gray - Lucid Atom's lead freelance web developer"/>
                        </div>

                        <Link href="/contact">
                            {/* <button className="CTA CTA_one">Get In Touch</button> */}
                            {/* <button className="CTA CTA_one">Build My Website</button> */}
                            <button className="CTA CTA_one">Design My Website</button>
                        </Link>
                        
                        <a href="#section_two" className="CTA CTA_two">See Portfolio</a>
                        
                    </div>
                </div>
                
                <div className="infoTiles">
                    
                    <InfoTile
                        key="1"
                        className={"infoTile infoTile_one"}
                        tile_info={infoTile_info.tile_one}
                        title="Who I Am"
                    />

                    <InfoTile
                        key="2"
                        className={"infoTile infoTile_two"}
                        tile_info={infoTile_info.tile_two}
                        title="What I Do"
                        title_right
                    />

                    <InfoTile
                        key="3"
                        className={"infoTile infoTile_three"}
                        tile_info={infoTile_info.tile_three}
                        title="Adept In"
                    />
                </div>

            </section>
        </>
    )
}
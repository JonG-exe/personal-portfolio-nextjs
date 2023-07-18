import React, { useState, useEffect } from "react"
import Image from "next/image"
import CV from "./CV.js"
import maritime_logo from "../images/maritime-logo.png"
import asym_logo from "../images/asym_logo.png"
import Glass from "./Glass"
import switchArrow from "../images/photo-switch-arrow.png"
import supernova_index from "../images/Supernova/Index.png"
import supernova_insurance_selection from "../images/Supernova/Insurance Selection.jpg"
import supernova_health from "../images/Supernova/Health.jpg"
import supernova_home_and_car from "../images/Supernova/Home and Car.jpg"
import supernova_pension from "../images/Supernova/Pension.jpg"
import asymmetry_index from "../images/Asymmetry/Index.jpg"
import asymmetry_memories from "../images/Asymmetry/Memories.jpg"
import asymmetry_login from "../images/Asymmetry/Login.jpg"
import ExitButton from "./ExitButton.js"
import TextContent from "../TextContent.js"
import chatLogo from "../images/lucid-chat/logo.png"
import chatDesktopView from "../images/lucid-chat/desktop-view.png"
import chatBasicLayout from "../images/lucid-chat/basic-layout.png"
import chatMobileView from "../images/lucid-chat/mobile-view.png"
import chatWireframe from "../images/lucid-chat/wireframe.png"


export default function Portfolio () {

    const [imageSetNum, setImageSetNum] = useState(0)

    /**
     * Tile Click
     */

    const [showWork, setShowWork] = useState({isShown: false})
    const [projectShown, setProjectShown] = useState({prevProjectShown: ""})

    function tileClick(event) {

        if(event.target.name === "Supernova | Maritime") setImageSetNum(0)
        else if (event.target.name === "Asymmetry") setImageSetNum(1)
        else if (event.target.name === "Lucid Chat App") setImageSetNum(2)

        if(projectShown.prevProjectShown != event.target.name) {

            setShowWork(prevShowWork => ({
                isShown: true
            }))

            setProjectShown(() => ({
                prevProjectShown : event.target.name
            }))

            setImageNum(0) 

            // ^ prevents bug when 
            // switching between different image sets where 
            // the index of the image in the previous image
            // set is greater than the number of images in the new image set


            event.target.style.animation = "glass_jump 0.5s" // used to add a jump animation to glass elements, but it only works once

        }
        else {
            setShowWork(prevShowWork => ({
                isShown: !prevShowWork.isShown
            }))
            
            setProjectShown(() => ({
                prevProjectShown : event.target.name
            }))

        }

    }

    /**
     * Switch Image
     */

    const [imageNum, setImageNum] = useState(0)
    const imagesInfo = 
        [
            [
                {image: supernova_index, title: "Home Page", index: 1},
                {image: supernova_insurance_selection, title: "Insurance Selection Page", index: 2},
                {image: supernova_home_and_car, title: "Home & Car Insurance", index: 3},
                {image: supernova_health, title: "Health Insurance", index: 4},
                {image: supernova_pension, title: "Pension", index: 5},
            ],
            [
                {image: asymmetry_index, title: "Home Page", index: 1},
                {image: asymmetry_memories, title: "Memory Log", index: 2},
                {image: asymmetry_login, title: "Login page", index: 3},
            ],
            [
                // {image: artboard_image, title: "Lucid Atom Artboard", index: 1},
                {image: chatDesktopView, title: "Desktop View", index: 1},
                {image: chatBasicLayout, title: "Initial Layout", index: 2},
                {image: chatMobileView, title: "Mobile View", index: 3},
                {image: chatWireframe, title: "Wireframe | Example", index: 4},
            ]
        ]

    function switchImage(event) {

        event.stopPropagation()

        if(event.target.name === "switchImageLeft"){

            const isFirstImage = imageNum === 0;
            const newIndex = isFirstImage ? imagesInfo[imageSetNum].length - 1 : imageNum - 1
            setImageNum(newIndex)

        }
        else {

            const isLastImage = imageNum === imagesInfo[imageSetNum].length - 1;
            const newIndex = isLastImage ? 0 : imageNum + 1
            setImageNum(newIndex)

        }
    }

    function exitProject(){
        setShowWork(false)
    }

    function exitCarousel(event) {

        // event.stopPropagation()

        const body = document.getElementsByTagName("body")[0]
        const carousel = document.getElementsByClassName("fullscreen-carousel")[0]
        carousel.style.display = "none"

        body.style.overflow = "scroll"

    }

    function imageClick(e) {

        const body = document.getElementsByTagName("body")[0]
        const carousel = document.getElementsByClassName("fullscreen-carousel")[0]
        
        carousel.style.display = "flex"
        carousel.scrollIntoView(true)
        body.style.overflow = "hidden"

        carousel.scrollIntoView(true)
        carousel.scrollIntoView(true)

        console.log("Image height: ", e.target.height)

    }

    useEffect(() => {
        window.addEventListener("resize", () => {

            const carousel = document.getElementsByClassName("fullscreen-carousel")[0]
            carousel.style.width = "100vw";
            carousel.style.height = "100vh";
            
            carousel.scrollIntoView(true)

        })
    }, [])

    /**
     * Deprecated / Delete - Below's setTimeout is deprecated. Using useEffect above instead. 
     * Delete when it is ensured that the top useEffect works and isn't 
     * bugged.
     */

    // setTimeout(() => {
    //     window.addEventListener("resize", () => {

    //         const carousel = document.getElementsByClassName("fullscreen-carousel")[0]
    //         carousel.style.width = "100vw";
    //         carousel.style.height = "100vh";
            
    //         carousel.scrollIntoView(true)

    //     })
    // }, 50)


    /**
     * Switch Text
     */
    
    useEffect(() => {
        (function () {
            const project_text_content = document.getElementsByClassName("project_text_content")[0]
    
            if(imageSetNum === 0) {
                project_text_content.innerHTML = TextContent.supernova_content
            }
            if(imageSetNum === 1) {
                project_text_content.innerHTML = TextContent.asymmetry_content
            }
            if(imageSetNum === 2) {
                project_text_content.innerHTML = TextContent.unrealized_opportunity
            }
        })()
    }, [imageSetNum])

    

    return (
        <section id="section_two">
            
            <h2 className={!showWork.isShown ? "work_h2_text" : "work_h2_text work_h2_invisible"}>
                {/* <Image className="work_text_image" src={my_work.src} alt="neumorphic 'my work' h2 image" />*/}

                <span className="my_work">My Work</span>
            </h2>

            <div className={!showWork.isShown ? "work" : "work work_active"}>

                <Glass 
                    image={maritime_logo} 
                    onClick={tileClick} 
                    className={showWork.isShown && "glass glass_active"}
                    name="Supernova | Maritime"
                    alt="supernova - maritime financial logo"
                />

                <Glass 
                    image={asym_logo}
                    onClick={tileClick} 
                    className={showWork.isShown && "glass glass_active"}
                    name="Asymmetry"
                    alt="asymmetry travel logo"
                />

                <Glass 
                    image={chatLogo}
                    onClick={tileClick} 
                    className={showWork.isShown && "glass glass_active"}
                    name="Lucid Chat App"
                />
                
            </div>

            <div className="display_work">

                <CV showWork={showWork} />

                <div className={showWork.isShown ? "show-project active" : "show-project"}>

                    <ExitButton exitElement={exitProject}/>

                    <h2 className="project_title">{projectShown.prevProjectShown}</h2>
                    <h3 className="web_page_title">{imagesInfo[imageSetNum][imageNum].title}</h3>

                    <div className="project_content">

                        <div className="project_slider">
                            <div className="project_image_container">
                                <Image onClick={imageClick} className="portfolio_image" src={imagesInfo[imageSetNum][imageNum].image} alt={imagesInfo[imageSetNum][imageNum].alt} />
                            </div>
                            
                            <button onClick={switchImage} className="switch-arrow switch-arrow-left">
                                <Image name="switchImageLeft" src={switchArrow} alt="neumorphic clickable arrow"/>
                            </button>

                            <button onClick={switchImage} className="switch-arrow switch-arrow-right">
                                <Image name="switchImageRight" src={switchArrow} alt="neumorphic clickable arrow"/>
                            </button>
                        </div>

                        {/*--------------------------------------------------------- */}
                        
                        <div className="project_text_content">
                            {/* Finally uses useEffect to change text on switching the project (11/06/2023) */}
                        </div>

                    </div>

                </div>
            </div>

            <div onClick={exitCarousel} className="fullscreen-carousel">

                <ExitButton class="exit-carousel" exitElement={exitCarousel}/>

                <button onClick={switchImage} className="switch-arrow-left-carousel">
                    <Image name="switchImageLeft" src={switchArrow} alt="neumorphic clickable arrow"/>
                </button>

                <Image className="carousel-image" onClick={(e)=>{e.stopPropagation()}} src={imagesInfo[imageSetNum][imageNum].image} alt="neumorphic clickable arrow" />

                <button onClick={switchImage} className="switch-arrow-right-carousel">
                    <Image name="switchImageRight" src={switchArrow} alt="neumorphic clickable arrow"/>
                </button>
                
            </div>

        </section>
    )
}


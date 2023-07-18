import React from 'react'
import Image from "next/image"
import GoogleLogo from "../images/google-logo.png"
import ResearchIcon from "../images/Diagrams/Design-Process/research.png"
import DesignIcon from "../images/Diagrams/Design-Process/design.png"
import BuildIcon from "../images/Diagrams/Design-Process/build.png"
import ContentIcon from "../images/Diagrams/Design-Process/content.png"
import TestIcon from "../images/Diagrams/Design-Process/test.png"
import LaunchIcon from "../images/Diagrams/Design-Process/launch.png"

const Timeline = () => {
  return (
    <div className="timeline">

        {/* <div>
        <p>
            All steps in the web design process are <b>tentative</b> and based on average duration. The time frame of completion will be determined based on the complexity of the project.
        </p>
    </div> */}

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={ResearchIcon} alt="research icon"/>

                    <h2>Research</h2>
                </div>
                <small>2-3 days</small>
                <p>
                    The website design process (also refered to as web design, internet design, or web development process) begins by understanding the desired outcomes of your business. What do you hope to achieve by having a website? Do you want more visitors, leads, purchases or just to bring awareness to your brand or company?
                </p>
                {/* <p style={{marginTop: "30px"}}>
                    Once we{"'"}ve figured out the purpose of your website, we can begin to research similar websites that have accomplished your business' desired outcomes to analyze their strategy, design and the level of success that they{"'"}ve achieved with the intention of implementing a similar approach. We will discuss the direction of brand identity to ensure it is inline with your business' perceived culture and character.
                </p> */}
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}
        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={DesignIcon} alt="design icon"/>

                    <h2>Design</h2>
                </div>
                <small>1-2 weeks</small>
                <p>
                    We{"'"}ll then work together to synthesize a custom web design that{"'s"} most optimal in allowing you to achieve desired outcomes whilst being appealing, navigable, responsive and easy to use for your target audience.
                </p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={BuildIcon} alt="build step icon" />

                    <h2>Build</h2>
                </div>
                <small>2 weeks</small>
                <p>
                    This is where the magic happens. The build step focuses on the meticulous implementation of the design vision, turning it into a fully functional, interactive and responsive web experience, bringing your idea into a vibrant reality.
                </p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={ContentIcon} alt="content step icon" />

                    <h2>Content</h2>
                </div>
                
                <small>2 weeks</small>
                <p>Curated content is the name of the game. This entails the value that you bring to your visitors. We{"'"}ll curate each webpage tailored to the theme of your website to ensure that your visitors get exactly what they came for.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={TestIcon} alt="test the site at its current state"/>

                    <h2>Test</h2>
                </div>
                <small>2 weeks</small>
                <p>In this phase, we{"'s"}ll test your site to ensure that it operates flawlessly as expected before launching. It{"'s"} an examination of every aspect, ensuring a consistent experience across all devices and addressing any bugs or inconsistencies.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <div className="embedded-neu design-h2">
                    <Image style={{height: "auto"}} src={LaunchIcon} alt="launch the website once finished testing"/>

                    <h2>Launch</h2>
                </div>
                <small>2 weeks</small>
                <p>
                    This is the final step. We will deploy your website to the world where we will begin analyzing your visitors actions and how to best optimize for your desired outcomes (conversions).
                </p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

    </div>
    
  )
}

export default Timeline
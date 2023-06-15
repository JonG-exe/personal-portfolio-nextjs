import React from 'react'
import Image from "next/image"
import GoogleLogo from "../images/google-logo.png"

const Timeline = () => {
  return (
    <div className="timeline">

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Research</h2>
                <small>2-3 days</small>
                <p>
                    The website design process (also refered to as web design, internet design, or web development process) begins by understanding the desired outcomes of your business. What do you hope to achieve by having a website? Do you want more visitors, leads, purchases or just to bring awareness to your brand or company?
                </p>
                {/* <p style={{marginTop: "30px"}}>
                    Once we've figured out the purpose of your website, we can begin to research similar websites that have accomplished your business' desired outcomes to analyze their strategy, design and the level of success that they've achieved with the intention of implementing a similar approach. We will discuss the direction of brand identity to ensure it is inline with your business' perceived culture and character.
                </p> */}
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}
        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Design</h2>
                <small>1-2 weeks</small>
                <p>
                    We'll then work together to synthesize a custom web design that's most optimal in allowing you to achieve desired outcomes whilst being appealing, navigable, responsive and easy to use for your target audience.
                </p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Build</h2>
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
                <h2 className="embedded-neu design-h2">Content</h2>
                <small>2 weeks</small>
                <p>Curated content is the name of the game. This entails the value that you bring to your visitors. We'll curate each webpage tailored to the theme of your website to ensure that your visitors get exactly what they came for.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Test</h2>
                <small>2 weeks</small>
                <p>In this phase, we'll test your site to ensure that it operates flawlessly as expected before launching. It's an examination of every aspect, ensuring a consistent experience across all devices and addressing any bugs or inconsistencies.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Launch</h2>
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
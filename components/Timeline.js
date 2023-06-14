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
                <p>The website design process (also refered to as web design, internet design, or web development process) begins by understanding the desired outcomes of your business. What do you hope to achieve by having a website? Do you want more visitors, leads, purchases or just to bring awareness to your brand or company?</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}
        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Design</h2>
                <small>1-2 weeks</small>
                <p>Once we've figured out the purpose of your website, we can begin to research similar websites that have accomplished your business' desired outcomes to analyze their strategy, design and the level of success that they've achieved with the intention of implementing a similar approach. We will discuss the direction of brand identity to ensure it is inline with your business' perceived culture and character.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Build</h2>
                <small>2 weeks</small>
                <p>We'll then work together to synthesize a custom web design that's most optimal in allowing you to achieve desired outcomes whilst being appealing, navigable, responsive and easy to use for your target audience.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Content</h2>
                <small>2 weeks</small>
                <p>Launch - we will then deploy your website to the world where we will begin analyzing your visitors actions and how to best optimize for the desired outcome (conversions).</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Test</h2>
                <small>2 weeks</small>
                <p>Launch - we will then deploy your website to the world where we will begin analyzing your visitors actions and how to best optimize for the desired outcome (conversions).</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

        <div className="container-timeline tl-right-container">
            {/* <Image src={GoogleLogo} /> */}

            <div className="text-box">
                <h2 className="embedded-neu design-h2">Launch</h2>
                <small>2 weeks</small>
                <p>As you can see, the website design process is quite straight forward. Your efforts will mainly be deciding the purpose of the website, approve a brand aware design and the required features.</p>
            </div>

            {/* <span className="tl-right-container-arrow"></span> */}

        </div>

    </div>
  )
}

export default Timeline
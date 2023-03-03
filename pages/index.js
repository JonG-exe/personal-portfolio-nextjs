import React from "react";
import Home from "../components/Home"
import Portfolio from "../components/Portfolio";
// import homeAnimations from "../public/js/HomeAnimations.js"

export default function Content() {
    return (
        <div className="content">
            <Home />
            <Portfolio />

            {/* <script type="text/javascript" src={homeAnimations} defer></script> */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" defer></script>

        </div>
    )
}


// Content is now index.js

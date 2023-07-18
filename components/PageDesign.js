import React from "react";
import rocket from "../images/extruded neumorphic rocket.png"
import neuGrid from "../images/neu_grid.png"
import hello from "../images/hello.png"
// import twentyThree from "../images/23_new.png"
import twentyFour from "../images/24.png"
// import jonG from "../images/jon_G.png"
import jonG from "../images/jon_g_intro.png"
import Image from "next/image"

export default function PageDesign() {
    return (
        <>
            {/* <Image src={hello} className="hello_element" alt="embedded neumorphic hello text"/>
            <Image src={jonG} className="jon_g_element" alt="I'm Jon.G title image"/> */}

            {/* <h1 class="inset-text"><div>Hello.</div>I'm Jon.G</h1> */}

            {/* <Image src={rocket} className="rocket" alt="extruded neumorphic rocket"/> */}
            <Image src={neuGrid} className="neu_grid" alt="grid of neumorphic elements"/>
            <Image src={twentyFour} className="twenty-three" alt="neumorphic number 24"/>
        </>
    )
}


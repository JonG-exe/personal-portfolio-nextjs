import React from "react";
import rocket from "../images/extruded neumorphic rocket.png"
import neuGrid from "../images/neu_grid.png"
import hello from "../images/hello.png"
import twentyThree from "../images/23.png"
import twentyThree_new from "../images/23_new.png"
// import jonG from "../images/jon_G.png"
import jonG from "../images/jon_g_intro.png"

console.log("hello element: ", hello)

export default function PageDesign() {
    return (
        <>
            <img src={hello.src} className="hello_element" alt="embedded neumorphic hello text"/>
            <img src={jonG.src} className="jon_g_element" alt="I'm Jon.G title image"/>
            {/* <img src={rocket} className="rocket" alt="extruded neumorphic rocket"/> */}
            <img src={neuGrid.src} className="neu_grid" alt="grid of neumorphic elements"/>
            <img src={twentyThree_new.src} className="twenty-three" alt="neumorphic number 23"/>
        </>
    )
}
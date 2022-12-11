import React from "react";
import CV_image from "../images/CV.png"


export default function CV(props) {
    return (
        <div className={!props.showWork.isShown ? "CV embedded-neu" : "CV embedded-neu CV_hidden"}>
            <a href="" download="" className="CV_surface extruded-neu">
                <img className="CV_image" src={CV_image}/>
            </a>
        </div>
    )
}
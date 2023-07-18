import React from "react";
import CV_image from "../images/CV.png"
import Image from "next/image"


export default function CV(props) {
    return (
        <div className={!props.showWork.isShown ? "CV embedded-neu" : "CV embedded-neu CV_hidden"}>
            <a href="" download="" className="CV_surface extruded-neu">
                <Image className="CV_image" src={CV_image} alt="curriculum vitae (cv) file"/>
            </a>
        </div>
    )
}
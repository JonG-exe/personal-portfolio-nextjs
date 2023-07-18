import React from "react"
import Image from "next/image"
import image_one from "../images/html_5.png"
import image_two from "../images/css_3.png"
import image_three from "../images/javascript.png"
import image_four from "../images/mongoDB.png"
import image_five from "../images/react.png"
import image_six from "../images/adobeXD.png"

export default function InfoTile(props) {

    // IconHover func was moved to "HomeAnimations.js" in public folder
    
    return (
        <div className={props.className}>

            <div className={props.title_right ? "infoTile_title_right" : "infoTile_title_left"}> 
                {props.title}
            </div>
            
            
            {/* {props.pageDesignElement && <Image className="books" src={props.pageDesignElement} alt={props.alt}/>} */}

            {props.className === "infoTile infoTile_three" 

                ? 
                
                <div className="icon-container">

                    <div id="selected-icon"></div>

                    <Image className="icon-image" src={image_one} name="html5" alt="html 5 logo"/>
                    <Image className="icon-image" src={image_two} name="css3" alt="css 3 logo"/>
                    <Image className="icon-image" src={image_three} name="javascript" alt="javascript logo"/>
                    <Image className="icon-image" src={image_four} name="mongodb" alt="mongodb logo"/>
                    <Image className="icon-image" src={image_five} name="react" alt="react logo"/>
                    <Image className="icon-image" src={image_six} name="adobexd" alt="adobe XD logo"/>
                    
                    {/* <span style={{"display" : "none"}}>{setTimeout(iconHover, 
                    100)}</span> */}

                </div>

                : 

                <div className="infoTile_brackets">
                    {"{"} <br />
                    <p className="infoTile_text">
                        {props.tile_info.line_one} <br />
                        {props.tile_info.line_two && props.tile_info.line_two} 
                            {props.tile_info.line_two && <br/> }
                        {props.tile_info.line_three && props.tile_info.line_three}
                            {props.tile_info.line_three && <br/> }
                    </p>
                    {"}"}
                </div>
            }

        </div>
    )
}

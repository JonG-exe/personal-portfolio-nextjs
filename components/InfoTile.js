import React from "react"
import image_one from "../images/html_5.png"
import image_two from "../images/css_3.png"
import image_three from "../images/javascript.png"
import image_four from "../images/mongoDB.png"
import image_five from "../images/react.png"
import image_six from "../images/adobeXD.png"

export default function InfoTile(props) {

    function iconHover() {

        const items = ["HTML 5", "CSS 3", "Javascript", "MongoDB", "React JS", "Adobe XD"]
        const backgroundColors = ["rgb(255, 106, 0)", "rgba(0, 51, 128, 0.89)", "yellow", "green", "rgb(0, 145, 255)", "purple"]
        const selectedIcon = document.getElementById("selected-icon")
        const icons = document.getElementsByClassName("icon-image")

        for(let i = 0; i < icons.length; i++) {
    
            icons[i].addEventListener("mouseover", () => {

                selectedIcon.style.display = "flex"
                selectedIcon.textContent = items[i]

            })
    
            icons[i].addEventListener("mouseleave", () => {
                selectedIcon.style.display = "none"
                selectedIcon.textContent = ""
            })
        }
    }
    
    return (
        <div className={props.className}>

            

            <div className={props.title_right ? "infoTile_title_right" : "infoTile_title_left"}> 
                {props.title}
            </div>
            
            
            {props.pageDesignElement && <img className="books"src={props.pageDesignElement}/>}

            {props.className === "infoTile infoTile_three" 

                ? 
                
                <div className="icon-container">

                    <div id="selected-icon"></div>

                    <img className="icon-image" src={image_one.src} name="html5"/>
                    <img className="icon-image" src={image_two.src} name="css3" />
                    <img className="icon-image" src={image_three.src} name="javascript" />
                    <img className="icon-image" src={image_four.src} name="mongodb" />
                    <img className="icon-image" src={image_five.src} name="react" />
                    <img className="icon-image" src={image_six.src} name="adobexd" />
                    
                    {/* <span style={{"display" : "none"}}>{setTimeout(iconHover, 100)}</span> */}

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

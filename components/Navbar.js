import React, {useState, useEffect} from "react"
import facebook_icon from "../images/facebook_icon.png"
import linkedin_icon from "../images/linkedin_icon.png"
import menu_icon from "../images/menu_icon.png"
import youtube_icon from "../images/youtube_icon.png"
import home_icon from "../images/home_icon.png"
// import {Link} from "react-router-dom"
import Link from "next/link"
import Menu from "./Menu"

function Navbar() {

    const [menuActive, setMenuActive] = useState(false);

    function menuClick() {
        setMenuActive(preMenuActive => !preMenuActive);
    }


//-------------------------------------------------

// Close Modal when clicking outside the element

    useEffect(() => {
        const menuIcon = document.querySelector("menu_icon")

        window.onclick = (event) => {
    
            if(menuActive == true 
                && !event.target.classList.contains("menu_rect")
                && !event.target.classList.contains("menu_icon")
                && !event.target.classList.contains("menu_modal")
            ) {
                // console.log("Window CLICKED!")
    
                setMenuActive(preMenuActive => !preMenuActive);
            }
        
        }

    }, [menuActive])

    

    return (
        <nav className="navbar">

            <Menu menuActive={menuActive}/>

            <ul className="nav-items">
                <li>
                    <button onClick={menuClick} className="menu_icon">
                        <div className="menu_rect"></div>
                        <div className="menu_rect"></div>
                        <div className="menu_rect"></div>
                    </button>
                </li>

                <li className="social_li">
                    <a href="https://www.facebook.com/profile.php?id=100084129372438" target="_blank" className="menu_link">
                        <img src={facebook_icon.src} className="facebook_icon" alt="extruded neumorphic facebook icon"/>
                    </a>
                </li>

                <li className="social_li">
                    <a href="https://www.linkedin.com/in/jonathan-gray-4a03ab210/" target="_blank" className="menu_link">
                        <img src={linkedin_icon.src} className="linkedin_icon" alt="extruded neumorphic linked-in icon"/>
                    </a>
                </li>

                <li className="social_li">
                    <a href="https://www.youtube.com/@devjon" target="_blank" className="menu_link">
                        <img src={youtube_icon.src} className="youtube_icon" alt="extruded neumorphic youtube icon"/>
                    </a>
                </li>

                <li className="home_icon">
                    <Link href="/">
                        <div className="menu_link">
                            <img src={home_icon.src} className="home_icon_img" alt="extruded neumorphic home icon"/>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
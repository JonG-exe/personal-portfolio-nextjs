import React, {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "./Menu"
import Logo from "../images/logo.png"
import portfolioImg from "../images/icons/portfolio.png"
import contactImg from "../images/icons/contact.png"
import BookIcon from '@mui/icons-material/Book';

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

                <li className="nav-link">
                    <Link href="/">
                        <Image id="nav-home-logo" src={Logo} alt="lucid atom home link" />
                        <span>Home</span>
                    </Link>
                </li>

                {/* <li className="nav-link hide-link">
                    <Link href="/about">
                        <Image src={aboutImg} alt="about page icon"/>
                        <span>About</span>
                    </Link>
                </li> */}

                {/* <li className="nav-link">
                    <Link href="/services">
                        <Image src={servicesImg} alt="services page icon" />
                        <span>Services</span>
                    </Link>
                </li> */}

                <li className="nav-link hide-link">
                    <Link href="/#section_two">
                        <Image src={portfolioImg} alt="icon to jump to portfolio section"/>
                        <span>Portfolio</span>
                    </Link>
                </li>

                <li className="nav-link hide-link">
                    <Link href="/blog">
                        <BookIcon sx={{color:"black", mb:"10px"}} alt="link to web development blog" /> 
                        <span>Blog</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link  href="/contact">
                        <Image src={contactImg} alt="link to contact page"/>
                        <span>Contact</span>
                    </Link>
                </li>

                
                

                {/* <li className="home_icon">
                    <Link href="/">
                        <div className="menu_link">
                            <img src={home_icon.src} className="home_icon_img" alt="extruded neumorphic home icon"/>
                        </div>
                    </Link>
                </li> */}

                {/* <li className="social_li hide-link">
                    <a href="https://www.facebook.com/profile.php?id=100084129372438" target="_blank" className="menu_link">
                        <img src={facebook_icon.src} className="facebook_icon" alt="extruded neumorphic facebook icon"/>
                    </a>
                </li>

                <li className="social_li hide-link">
                    <a href="https://www.linkedin.com/in/jonathan-gray-4a03ab210/" target="_blank" className="menu_link">
                        <img src={linkedin_icon.src} className="linkedin_icon" alt="extruded neumorphic linked-in icon"/>
                    </a>
                </li>

                <li className="social_li hide-link">
                    <a href="https://www.youtube.com/@dev_jono" target="_blank" className="menu_link">
                        <img src={youtube_icon.src} className="youtube_icon" alt="extruded neumorphic youtube icon"/>
                    </a>
                </li> */}

            </ul>
        </nav>
    )
}

export default Navbar;
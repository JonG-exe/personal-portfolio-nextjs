import Link from "next/link"
import Image from "next/image"
import Logo from "../images/logo.png"
import homeImg from "../images/icons/home.png"
import aboutImg from "../images/icons/about.png"
import servicesImg from "../images/icons/services.png"
import portfolioImg from "../images/icons/portfolio.png"
import contactImg from "../images/icons/contact.png"

function Menu (props) {

    return(
        <div className="menu_modal" style={{"display" : ( props.menuActive ? "flex" : "none" )}}>
            {/* <Link href='/SEO' className="modal_link">SEO Page</Link> */}

            <p>Coming Soon!</p>

            {/* <ul>

                <li className="nav-link hide-link">
                    <Link href="/about">
                        <Image src={aboutImg} />
                        <span>About</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link href="/services">
                        <Image src={servicesImg} />
                        <span>Services</span>
                    </Link>
                </li>

                <li className="nav-link hide-link">
                    <Link href="/#section_two">
                        <Image src={portfolioImg} />
                        <span>Portfolio</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link  href="/contact">
                        <Image src={contactImg} />
                        <span>Contact</span>
                    </Link>
                </li>

                <li className="home_icon">
                    <Link href="/">
                        <div className="menu_link">
                            <img src={home_icon.src} className="home_icon_img" alt="extruded neumorphic home icon"/>
                        </div>
                    </Link>
                </li>

                <li className="social_li hide-link">
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
                </li>

            </ul> */}
        
        </div>
    )
}

export default Menu;
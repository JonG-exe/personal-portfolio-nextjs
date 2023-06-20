import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from "../images/logo.png"
import fb from "../images/icons/socials/facebook-icon.png"
import linkedinIcon from "../images/icons/socials/linkedin-icon.png"
import menuIcon from "../images/icons/menu-icon.png"
import youtubeIcon from "../images/icons/socials/youtube-icon.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">

            <div className="footer-logo-and-links">

                <div className="footer-logo-container">
                    <Link href="/">
                        <Image 
                            src={Logo}
                            className="footer-logo"
                            alt="lucid atom web design logo"
                        />
                    </Link>
                </div>

                <div className="social-links">
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=100084129372438">
                        <Image src={fb} className="" alt="facebook account for mountain pride chocolates"/>
                    </Link>
                    <Link target="_blank" href="https://www.youtube.com/@dev_jono">
                        <Image src={youtubeIcon} className="" alt="instagram account for mountain pride chocolates"/>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/developer-jon">
                        <Image src={linkedinIcon} className="" alt="instagram account for mountain pride chocolates"/>
                    </Link>
                    {/* <Link target="_blank" href="https://www.instagram.com/dev_jono">
                        <Image src={instagram} className="" alt="instagram account for mountain pride chocolates"/>
                    </Link> */}
                </div>

                <div className="site-links">
                    {/* <Link href="/about">About Us</Link> */}
                    <Link href="/services">Services</Link>
                    <Link href="/#section_two">Portfolio</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>

                <div className="footer-contact-method">
                    <span className="phone" title="email">1 (868) 743-1018</span>
                    <span className="email" title="email">developer@lucidatom.com</span>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
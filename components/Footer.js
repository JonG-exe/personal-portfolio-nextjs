import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer>

        <h1>Footer</h1>
        
        <div className="footer-container embedded-neu">

            <div className="footer-logo-and-links">

                <div className="footer-logo">
                    <Link href="/">
                        {/* <Image 
                            src={logoWhite}
                            className="logo-white"
                            alt="white mountain pride logo"
                        /> */}
                    </Link>
                </div>

                <div className="footer-links">
                    <div className="site-links">
                        <div className="left">
                            <Link href="/products">Products</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/retailers">Retailers</Link>
                            <Link href="/gallery">Gallery</Link>
                        </div>
                        <div className="right">
                            <Link href="/contact-us">Contact Us</Link>
                            <Link href="/flavour">Flavour</Link>
                            <Link href="/cart">Cart</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="email-and-socials">

                <span className="email" title="email">developer@lucidatom.com</span>

                <div className="social-links">
                    <Link target="_blank" href="https://www.facebook.com/mountainpridechocolates">
                        {/* <Image src={fb} alt="facebook account for mountain pride chocolates"/> */}
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/mountainpridechocolates/">
                        {/* <Image src={instagram} alt="instagram account for mountain pride chocolates"/> */}
                    </Link>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
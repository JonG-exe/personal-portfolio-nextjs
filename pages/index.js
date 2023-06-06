import React from "react";
import Head from "next/head"
import Home from "../components/Home"
import Portfolio from "../components/Portfolio";
// import homeAnimations from "../public/js/HomeAnimations.js"

export default function Content() {

    return (
        <>
            <Head>
                <title>Trinidad Web Developer | Lucid Atom</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Jonathan Gray (Jon.G) is an aspiring local fullstack user-interface and user-experience (UI/UX) web designer and developer in Trinidad and Tobago who specializes in web design, web development and search engine optimization."/>
                <meta name="keywords" content="web developer, web development, web design, web designer, designer, web developer trinidad, web developer in trinidad, seo, seo expert, search engine optimization" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
            </Head>

            <div className="content">
                <Home />
                <Portfolio />
            </div>
        </>
        
    )
}

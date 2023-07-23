import React from "react";
import Head from "next/head"
import Home from "../components/Home"
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ"
import Process from "../components/Process";
import Relationship from "../components/Relationship";
import Timeline from "../components/Timeline"
// import homeAnimations from "../public/js/HomeAnimations.js"

export default function Content() {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Website Design and Development In Trinidad | Lucid Atom</title>
                <link rel="canonical" href="https://www.lucidatom.com" />
                <link rel="icon" href="/favicon.ico" />
                {/* <meta name="description" content="Transforming online visions into stunning reality with brilliant web design, development, and SEO services for maximum digital awareness and engagement."/> */}

                <meta name="description" content="Transforming online visions into stunning reality with brilliant web design and development in Trinidad and Tobago for maximum digital awareness and engagement."/>

                {/* <meta name="keywords" content="web developer, web development, website design trinidad, web design, internet design, designed website, web designer, designer, web developer trinidad, web developer in trinidad, trinidad web design, seo, seo expert, search engine optimization, digital marketing, apps web"/> */}

            </Head>

            <div className="content">
                <Home />
                <Portfolio />
                <Process />
                <FAQ />
                {/* <Relationship /> */}
            </div>
        </>
        
    )
}

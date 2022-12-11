// import '../styles/globals.css'

import Head from "next/head"
import "../styles/index.css"
import "../styles/contact.css"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dev | Lucid Atom</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jonathan Gray (Jon.G) is an aspiring local fullstack user-interface and user-experience (UI/UX) web designer and developer in Trinidad and Tobago who specializes in web design, web development and search engine optimization."/>
        <meta name="keywords" content="web developer, web designer, web dev, web developer trinidad, web developer in trinidad, seo, seo expert, search engine optimization" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Changa&family=Courgette&family=Sacramento&family=Silkscreen&display=swap" rel="stylesheet" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
      </Head>
   
      <div className="app">
        <Navbar />

        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp

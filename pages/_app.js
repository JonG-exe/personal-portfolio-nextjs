import Head from "next/head"
import "../styles/index.css"
import "../styles/contact.css"
import "../styles/tutorial.css"
import Navbar from "../components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />

      <Component {...pageProps} />
      <Analytics />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

      {/* <Footer /> */}
    </div>
  )
}

export default MyApp

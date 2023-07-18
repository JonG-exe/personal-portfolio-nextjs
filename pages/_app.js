import "../styles/index.css"
import "../styles/contact.css"
import "../styles/services.css"
import "../styles/tutorial.css"
import Navbar from "../components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import Footer from "../components/Footer"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KQJY74WVM2"></Script>
      <Script id="google-analytics">
        {
          `
            <!-- Google tag (gtag.js) -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-KQJY74WVM2');
          `
        }
      </Script>

      <Navbar />
        <Component {...pageProps} />
      <Analytics />
      <Footer />
    </div>
  )
}

export default MyApp

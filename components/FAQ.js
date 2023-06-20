import React from 'react'
import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <section id="section-3">
        <div className="FAQ">
            <h2>
                <span>Frequently Asked Questions</span>
                <span>(F.A.Q)</span>
            </h2>

            <Accordion 
                question="How long will it take to design and build my website?" 
                answer="This depends on the complexity of the design, features, number of pages and complexity of the back-end of your site. Basic sites can take 2 weeks, whereas an e-commerce site can take upto one (1) month. Larger sites/apps may take one (1) month to several months. The duration of delivery of the site is also highly dependent on the business owner providing necessary content, documents and feedback."
            />

            <Accordion 
                question="Will my website work on both desktop and mobile?" 
                answer="Yes. Rest assured that your site will be both desktop and mobile friendly to ensure a seamless user experience no matter the device your visitors use to access your business' website or web app."
            />

            <Accordion 
                question="Will I be able to make updates and changes to my website in the future?" 
                answer="Yes. E-commerce and larger websites will come with a Content Management System (CMS) which will allow you to upload all your text content, images, videos, downloadables and other forms of media through individual website pages. You can have unlimited web pages, but eventually once you've reached a threshold, it will come at a cost which you will pay directly to the CMS platform such as WordPress, Shopify, etc. I will also be able to make these payments on your behalf if that's your preference."
            />

            <Accordion 
                question="Do you offer any analytics or tracking tools to monitor website performance?" 
                answer="Yes. All websites will have analytics so that you can view the performance of your site to be able to make future improvements for SEO ranking, as well as the optimization for the best experience of your site visitors."
            />

            <Accordion 
                question="Do you provide any additional services like logo design, copywriting, or digital marketing?" 
                answer="At this moment I do not offer these additional services."
            />
        </div>
    </section>
  )
}

export default FAQ
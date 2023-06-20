import Image from "next/image"
import Corporate from "../images/corporate.png"

export default function Services () {
    return (
        <section className="services-pricing">

            <div className="price-heading">
                <h1>
                    <small>Web Development</small>
                    <span>Pricing</span>
                </h1>

                <p>(All prices are in TTD)</p>
            </div>
            

            <div className="price-container">
                {/* <Image src={Corporate} style={{
                    width: "480px", height: "auto"
                }}/> */}

                <div className="plan-container">
                    <div className="plan basic">
                        <div className="top-half">
                            <h2>Basic</h2>
                            <div className="price">$3000</div>
                        </div>
                        
                        <div className="bottom-half">
                            <p className="plan-description">Simple <b>static</b> website for startups and bloggers.</p>

                            <ul className="features">
                                <li>Modern, clean and simple website</li>
                                <li>Up to (5) Web Pages</li>
                                <li>Mobile and Desktop friendly</li>
                                <li>Hosting + Domain + SSL + Email</li>
                                <li>Simple design</li>
                                <li>$500 per additional page</li>
                                <li>Animation costs dependent on complexity</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="plan-container">
                    <div className="plan basic">
                        <div className="top-half">
                            <h2>Corporate</h2>
                            <div className="price">$6500</div>
                        </div>
                        
                        <div className="bottom-half">
                            <p className="plan-description"><b>Dynamic</b>, <b>Responsive</b> and <b>Interactive</b> website for businesses that puts standing out as a priority.</p>

                            <ul className="features">
                                <li>Includes Basic + Small Business Plan</li>
                                <li>Custom Design</li>
                                <li>Up To Ten (10) Web Pages</li>
                                <li>Two (2) Interactive Animations</li>
                                <li>Two (2) Custom Web Programs</li>
                                <li>Custom Back End Server</li>
                                <li>$400 Per Additional Page</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="plan-container">
                    <div className="plan basic">
                        <div className="top-half">
                            <h2>Basic</h2>
                            <div className="price">$4500</div>
                        </div>
                        
                        <div className="bottom-half">
                        <p className="plan-description"><b>Dynamic</b>, <b>Responsive</b> website for small businesses.</p>

                            <ul className="features">
                                <li>Dynamic and Responsive Website</li>
                                <li>Up To (7) Web Pages</li>
                                <li>E-commerce Website (Optional)</li>
                                <li>Hosting + Domain + SSL + Email</li>
                                <li>Simple Design Of Your Choice</li>
                                <li>$450 Per Additional Page</li>
                                <li>For cost of animations, ask Jon.G</li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>

        </section>
    )
}
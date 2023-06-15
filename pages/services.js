import Head from "next/head"

export default function Services () {
    return (
        <section className="service-pricing">
            <Head></Head>

            <h1>
                <small>Web Development</small>
                <span>Pricing</span>
            </h1>

            <p>All prices are in TTD</p>

            <div className="price-container">
                <div className="plan basic">
                    <h2>Basic</h2>
                    <p>Simple <b>static</b> website for startups and bloggers.</p>
                    <div className="price">$3000</div>
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
                <div className="plan coporate">
                    <h2>Corporate</h2>
                    <p>Dynamic, Responsive and Interactive website for businesses that puts standing out as a priority.</p>
                    <div className="price">$6500</div>
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
                <div className="plan small-business">
                    <h2>Small Business</h2>
                    <p>Dynamic and Responsive website for small businesses.</p>
                    <div className="price"></div>
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

        </section>
    )
}
import BlogArticle from "../../components/BlogArticle"
import ImageAuthor from "../../images/23.png"
import tempProfilePhoto from "../../images/jon-g-profile-picture.png"
import heroImage from "../../images/Blog/top-10-web-design-trends-2023/hero-image-10-website-trends.jpg"

export default function SEO() {
    return (
        <BlogArticle 
            title="10 Web Design Trends of 2023"
            h1="10 Top Web Design Trends of 2023"
            authorImage={tempProfilePhoto}
            mainImage={heroImage}
            authorImg={ImageAuthor}
            authorName="Jon.G"
            mainContent={
                <div class="blog-article">

                    <p>As the digital landscape evolves, so do the trends that shape our online experiences. From captivating visuals to user-friendly interfaces, web designers are constantly pushing boundaries to create engaging websites that cater to all audiences. This list of the top 10 web design trends of 2023 (so far), are guaranteed to make a user{"'s"} browsing experience even more enjoyable.</p>

                    <h2>1. Vibrant Gradients</h2>
                    <p>Gone are the days of flat colors! In 2023, vibrant gradients are stealing the show. Gradients blend multiple colors together, adding depth and visual interest to web pages. Imagine a sunset of warm oranges and cool blues—it{"'s"} like magic on your screen!</p>

                    <h2>2. Microinteractions</h2>
                    <p>Tiny interactions, big impact! Microinteractions are subtle animations that respond to your actions, such as hovering over a button or clicking on a link. They make websites feel alive and responsive, creating an engaging experience for the user.</p>

                    <h2>3. 3D Elements</h2>
                    <p>Get ready to step into a world of virtual reality—well, almost! 3D elements are making a splash in web design. From 3D icons that pop out to interactive 3D graphics, you{"'ll"} be amazed at how real it all feels.</p>

                    <h2>4. Dark Mode</h2>
                    <p>Night owls, rejoice! Dark mode is here to save your eyes and your battery life. This sleek and sophisticated color scheme not only looks cool but also reduces eye strain during those late-night browsing sessions.</p>

                    <h2>5. Voice User Interface (VUI)</h2>
                    <p>Say hello to the future with VUI! Voice commands are taking over as a user-friendly way to navigate websites. Just speak, and the website listens and responds. It{"'s"} like having a friendly assistant at your fingertips!</p>

                    <h2>6. Augmented Reality (AR) Integration</h2>
                    <p>Ever wondered how that new furniture would look in your room? With AR integration, wonder no more! Websites are embracing augmented reality to let you visualize products in your own space before making a purchase.</p>

                    <h2>7. Bold Typography</h2>
                    <p>Words can be beautiful too! Bold and eye-catching typography is making a comeback. Large, expressive fonts not only convey powerful messages but also add a creative touch to web designs.</p>

                    <h2>8. Neumorphism</h2>
                    <p>Fancy a soft, tactile experience? Neumorphism is the design trend for you. This style creates elements that appear to rise from or sink into the surface, giving a delightful, almost 3D-like look to buttons and icons.</p>

                    <h2>9. Collaborative Storytelling</h2>
                    <p>Get ready to be part of the story! Websites are now inviting users to engage in collaborative storytelling. From voting on content to interactive quizzes, you have the power to shape the narrative.</p>

                    <h2>10. Speedy Performance</h2>
                    <p>Nobody likes waiting forever for a page to load! Web designers are prioritizing speed in 2023. With faster load times and optimized performance, you{"'ll"} enjoy seamless browsing without the frustration of delays.</p>

                    <h2>Final Thoughts</h2>

                    <p>There you have it—the top 10 web design trends of 2023 that are transforming the digital world. From vivid gradients and 3D elements to voice commands and collaborative storytelling, web designers are continuously enhancing your online journey. Embrace these trends, and embark on a delightful surfing experience like never before! Happy browsing!</p>

                </div>
            }

        />
    )
}
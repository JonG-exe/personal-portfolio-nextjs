import Tutorial from "../components/Tutorial"
import ImageAuthor from "../images/23.png"


import tempProfilePhoto from "../images/jon-g-profile-picture.png"

export default function SEO() {
    return (
        <Tutorial 
            mainContent={
                <div>
                    <h1>MAN JS IS FUCKING AMAZING!</h1>

                    <img className="tutorial-content-img" src={tempProfilePhoto.src} alt="author's profile photo"/>

                    <br></br>

                    <p>A testament to the north gods of euroslovakia!</p>

                    <br></br>
                </div>
            }

            authorImg={ImageAuthor}
            authorName="Jon.H"
        />
    )
}
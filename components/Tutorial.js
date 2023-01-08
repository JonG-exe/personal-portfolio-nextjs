import tempProfilePhoto from "../images/jon-g-profile-picture.png"

function Tutorial({mainContent, authorImg, authorName}) {
    return (
        <main>
            <div className="tutorial-container">
                    
                <div className="title-and-author">
                    <h1 className="h1-tutorial">SEO - A How To Guide</h1>

                    <div className="tutorial-author-profile">
                        <img className="author-img" src={authorImg.src} alt={`${authorName} is the author of this article`}/>
                        <div className="author-name">by {authorName}</div>
                    </div>
                </div>

                {/* This break class is used to force item on new line */}
                <div className="break"></div>
                
                <div className="tutorial-content neu-tutorial">

                    <img className="tutorial-content-img" src={tempProfilePhoto.src} alt={`Author ${authorName}'s profile photo`}/>

                    {mainContent}

                </div>

                <aside className="right-section"> 
                    <div className="ads neu-tutorial"></div>

                    <div className="related-content-and-CV">
                        <div className="related-content neu-tutorial"></div>
                        <div className="CV-placeholder neu-tutorial"></div>
                    </div>
                </aside>    
            </div>
        </main>
    )
}

export default Tutorial
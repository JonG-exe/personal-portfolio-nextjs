import Image from "next/image"
import Head from "next/head"

function BlogArticle ({  h1, mainContent, mainImage, authorImage, authorName, title }) {
    return (
        <>  
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="" />
                <title>{title}</title>
                <link rel="canonical" href="" />
            </Head>

            <main>
                <div className="tutorial-container">
                        
                    <div className="title-and-author">
                        <h1 className="h1-tutorial">{h1}</h1>

                        <div className="tutorial-author-profile">
                            <Image className="author-image" src={authorImage} alt={`${authorName} is the author of this article`}/>
                            <div className="author-name">by {authorName}</div>
                        </div>
                    </div>

                    {/* This break class is used to force item on new line */}
                    <div className="break"></div>
                    
                    <div className="tutorial-content neu-tutorial">

                        <Image className="tutorial-content-image" src={mainImage} alt={`Author ${authorName}'s profile photo`}/>

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
        </>
    )
}

export default BlogArticle
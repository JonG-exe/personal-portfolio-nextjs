import Link from "next/link"
import { Stack, Container, Typography, Box, CssBaseline } from "@mui/material"
import Head from "next/head"
import BlogLink from "../../components/BlogLink"
import SEOImage from "../../images/seo.png"


export default function Blog() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'s"} standard dummy text ever since the 1500s
                <link rel="canonical" href="https://www.lucidatom.com/blog" />
                <title>Blog - Web Development | Lucid Atom</title>
                <meta name="description" content="" />
            </Head>
            
            <Container maxWidth="xl" sx={{height:"max-content", mt:{xs: "80px", md:"0"}}}>

                <CssBaseline />

                <div>
                    <Typography variant="h1" textAlign={"center"} sx={{m: "40px 0"}}>
                        <div>Pixel Bytes</div>
                        <Typography component="div" variant="h4">(blog)</Typography>
                    </Typography>
                </div>
                

                <Stack direction="row" flexWrap="wrap" justifyContent="space-around">

                    <BlogLink 
                        image={SEOImage}
                        title="SEO - A How To Guide" 
                        description="Understand the basics and fundamentals of SEO so that you can have the most optimal advantage for ranking your website on search engines."
                        href="/blog/SEO"
                    />

                
                </Stack>

            </Container>
        </>

    )
}
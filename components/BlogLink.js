import React from 'react'
import { Stack, Typography, Box } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import TestImage from "../images/24.png"


const BlogLink = ( { title, description, image, href } ) => {

    const theme = createTheme({
        components: {
            MuiStack: {
                styleOverrides: {
                    root: {
                        boxShadow: "-6px -6px 10px 3px white inset, -6px -6px 10px 3px white, 5px 5px 20px 5px rgba(0, 0, 0, 0.2) inset, 5px 5px 20px 2px rgba(0, 0, 0, 0.3)",
                    }
                }
            }
        }
    })

  return (
    <ThemeProvider theme={theme}>      
       
        <Link href={href} style={{margin: "20px", textDecoration: "none", color: "inherit"}}>
            <Stack 
                direction={{xs: "column", md:"row"}}
                minHeight="300px" 
                minWidth={{xs: "250px", sm:"650px"}}
                maxWidth={{xs: "400px", sm: "650px"}}
                p="0"
                m="0"
                justifyContent={"flex-start"}
                alignItems={"center"}
            >
                <Box width="45%" maxWidth="45%" m="20px" display="flex" justifyContent={"center"}>
                    <Image width={200} className="blog-link-image" src={image} alt="" />
                </Box>

                <Box mr="20px" p="25px" display="flex" flexDirection="column" justifyContent={"center"} alignItems={"center"}>
                    <Typography variant="h3" alignSelf={{xs: "center", md:"flex-start"}}>{title}</Typography>
                    <Typography variant="body1" textAlign={{xs: "justify", sm:"start"}}>{description}</Typography>
                </Box>
                
                
            </Stack>
        </Link>         
        
    </ThemeProvider>
  )
}

export default BlogLink
import React from 'react'
import { Container, Typography, Box, Stack } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place';
import Link from "next/link"

const SiteNavigation = () => {
  return (
    <div> 
        <Container>
            <Typography variant="h1">
                <PlaceIcon sx={{
                    fontSize:"inherit",
                    marginBottom: "-10px"
                }} />
                Navigation
            </Typography>

            <Stack>
                <Typography variant="h2">Blogs</Typography>
                <Link href="/blog/SEO">SEO</Link>
                <Link href="/blog/top-10-web-design-trends-2023">10 Top Web Design Trends 2023</Link>
            </Stack>
        </Container>
    </div>
  )
}

export default SiteNavigation
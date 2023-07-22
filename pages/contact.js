import React, { useRef } from "react"
import Head from "next/head"
import person_icon from "../images/person_icon.png"
import phone_email_icon from "../images/phone_email_icon.png"
import subject_icon from "../images/subject_icon.png"
import emailjs from "@emailjs/browser"
import Image from "next/image"

import { Grid, Box, Typography, Container, CssBaseline, Button, TextField, TextareaAutosize } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Contact() {

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        boxShadow: "-2px -1px 2px 1px white, 2px 1px 3px 1px rgba(0, 0, 0, 0.25)",
                        border: "none",
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        "&:hover": {
                            backgroundColor: "rgb(255, 106, 0)",
                            transition: "all 0.3s",
                        }
                    }
                }
            },
            
        }
    })

    /**
     * Send email from submited form
     */
    
    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        alert("Form sent sucessfully. Thanks for reaching out!")

        emailjs.sendForm('service_u8b7kar', 'lucid_atom_template', form.current, 'eiClv0JnXOsyGQdOk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return (
        <>
            <Head>
                <title>Contact Developer Jon.G | Lucid Atom</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="You can feel free to contact Jonathan Gray for projects UI/UX design, web design, web development and search engine optimization."/>
                <link rel="canonical" href="https://www.lucidatom.com/contact" />
            </Head>

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box p="20px">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                        <Typography 
                            marginTop={{xs: "40px", md: "0"}}
                            padding="15px 30px"
                            color="grey"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="bold"
                            textAlign="center"
                            component="h1"
                            variant="h5"
                            boxShadow="-6px -4px 15px 4px white inset, 2px 3px 17px 3px rgba(0, 0, 0, 0.4) inset"
                            border="3px solid rgba(173, 169, 169, 0.05)"
                            transition="all 1s"
                        >
                            Get In Touch
                        </Typography>

                        <Box ref={form} onSubmit={handleSubmit} component="form" noValidate  sx={{ mt: 3, width:"700px", maxWidth:"90vw"}} >
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="first_name"
                                    // className="form-input neu extruded-neu"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    />
                                </Grid>    

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    name="phone"
                                    autoComplete="phone"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="subject"
                                        label="Subject"
                                        name="subject"
                                        autoComplete="subject"
                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextareaAutosize 
                                        required
                                        name="message"
                                        style={{
                                            margin: "10px 0 0 0",
                                            minHeight: "250px",
                                            width: "100%",
                                            resize: "none",
                                            borderRadius: "2px",
                                            border: "2px solid lightgrey",
                                            backgroundColor: "transparent",
                                            boxShadow: "-2px -1px 2px 1px white, 2px 1px 3px 1px rgba(0, 0, 0, 0.25)",
                                        }}
                                    />
                                </Grid>
                            
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 3,
                                    mb: 2, 
                                    backgroundColor: "red",
                                    maxWidth: "140px",
                                    alignSelf: "center",
                                    fontSize: "1.25em",
                                    ml: "auto",
                                    padding: "6px 5px 10px 5px",
                                    backgroundColor: "#7E7F80",
                                    backgroundColor: "#7E7F80",
                                    border: "2px solid #505151",
                                    borderRadius: "0",
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        </>
        
    )
}

export default Contact;
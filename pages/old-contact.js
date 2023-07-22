import React, { useRef } from "react"
import Head from "next/head"
import person_icon from "../images/person_icon.png"
import phone_email_icon from "../images/phone_email_icon.png"
import subject_icon from "../images/subject_icon.png"
import emailjs from "@emailjs/browser"
import Image from "next/image"

function Contact() {

    /**
     * Send email from submited form
     */
    
    const form = useRef();

    function sendEmail(e) {
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
                <meta name="robots" content="noindex" />
            </Head>

            <section className="contact_container">

                <span className="contact-h1-neu neu embedded-neu"><h1 className="h1-contact">Get In Touch</h1></span>

                <form onSubmit={sendEmail} ref={form} className="contact_form" action="" method="POST" >

                    <div className="contact-input">
                        <input className="form-input neu extruded-neu" name="first_name" placeholder="First Name" required />
                        <span><Image className="contact_icon" src={person_icon} alt="person icon"/></span>
                        <input className="form-input neu extruded-neu" name="last_name" placeholder="Last Name" required />
                    </div>
                    
                    <div className="contact-input">
                        <input className="form-input neu extruded-neu" name="phone" type="phone" placeholder="Phone" />
                        <span><Image className="contact_icon" src={phone_email_icon} alt="contact icon"/></span>
                        <input className="form-input neu extruded-neu" name="email" type="email" placeholder="Email" required />
                    </div>
                    
                    <div className="contact-input">
                        <span><Image className="contact_icon" src={subject_icon} alt="subject icon"/></span>
                        <input className="form-input subject_input neu extruded-neu" name="subject" placeholder="Subject" required />
                    </div>

                    <textarea name="message" className="textbox neu extruded-neu" required placeholder="How can I help?" />

                    <div className="submit">
                        <input className="submit_input" name="submit" type="submit" value={"Submit"}/>
                    </div>

                </form>

            </section>
        </>
        
    )
}

export default Contact;
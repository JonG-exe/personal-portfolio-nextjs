import React from 'react'
import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Lucid Atom Web Development | Lucid Atom</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Lucid Atom means expressed clearly down to it's most basic principles. This extends to web design, breaking down complex visions, into workable solutions."/>
        <link rel="canonical" href="https://www.lucidatom.com/about" />
      </Head>

      <div>
          <h1>About Lucid Atom.</h1>

          <p>Lucid Atom - means expressed clearly, down to it{"'s"} most basic principles (rudimentary)</p>

          <p>
              Anything I{"'"} ve done that turned out to something significant has always come from doing the basics consistently...taking the smallest step possible and building on it.
          </p>
      </div>
    </>
  )
}

export default About
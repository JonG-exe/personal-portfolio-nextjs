import React from 'react'
import { useEffect } from 'react';

const Accordion = ( {question, answer, sign} ) => {

    useEffect(() => {
        const accordions = document.querySelectorAll(".accordion")

        accordions.forEach(accordion => {
            accordion.querySelector(".label").onclick = () => {
                accordion.querySelector(".text-area").classList.toggle("active");
                accordion.querySelector(".label").classList.toggle("active");

                let sign = accordion.querySelector(".sign")
                if(sign.textContent == '+') sign.textContent = '-'
                else sign.textContent = '+'
            }
        })
    }, [])

  return (
    <div className="accordion">

        <div className="label">
            <p>{question}</p>
            <p className="sign">{sign ? sign : "+"}</p>
        </div>

        <p className="text-area">
            {answer ? answer : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, corrupti pariatur aliquam perspiciatis nemo, quas consequuntur fugiat ipsa omnis enim beatae aspernatur, earum hic fugit dolore non dicta sit culpa?"}
        </p>

    </div>
  )
}

export default Accordion
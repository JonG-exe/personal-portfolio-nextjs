import React from "react"

export default function ExitButton(props) {

    let btnClass = props.class || "exit-button" 

    return (
        <button className={btnClass} onClick={props.exitElement} >
            <div className="x-leg x-leg-one"></div>
            <div className="x-leg x-leg-two"></div>
        </button>
    )
}
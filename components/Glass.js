import React from "react"

export default function Glass(props) {
    return (
        <button 
            onClick={props.onClick} 
            name={props.name}
            className={props.className ? props.className : "glass"}
        >
            <img className="work_logo" src={props.image} />
        </button>
    )
}
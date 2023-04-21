import React from "react";
import "./card.css"

export default function Card(props) {
    return (
        <div className="cards">
            <img className="card-img" src={props.img}/>
            <p>{props.name}</p>
        </div>
    )
}
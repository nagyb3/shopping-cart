import React from "react";
import "./card.css"

export default function Card(props) {
    return (
        <div className="cards">
            <img className="card-img" src={props.img} alt=""/>
            <p className="name" style={{textTransform: "capitalize"}}>{props.name}</p>
            <p className="price">{props.price} $</p>
            <button>ADD TO CART</button>
        </div>
    )
}
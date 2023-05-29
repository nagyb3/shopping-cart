import React from "react";
import "./listitem.css"

export default function ListItem(props) {
    
    
    
    return (
        <div className="list-item-container">
            <p>{props.name}</p>
            <p>{props.price} $</p>
            <p>In cart: {props.inCartNumber}</p>
        </div>
    )
}
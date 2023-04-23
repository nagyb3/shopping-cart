import React from "react";
import "./card.css"

export default function Card(props) {

    const [itemOrderQuantity, setOrderItemQuantity] = React.useState(0)

    function increment() {
        setOrderItemQuantity(prev => prev + 1)
    }

    function decrement() {
        setOrderItemQuantity(prev => prev - 1)
    }

    function handleClick() {
        props.handleClick(props.name)
    }

    return (
        <div className="cards">
            <img className="card-img" src={props.img} alt=""/>
            <p className="name" style={{textTransform: "capitalize"}}>{props.name}</p>
            <p className="price">{props.price} $</p>
            <div className="quantity-input">
                    <button data-testid="button-decrement" onClick={decrement} className="decrement">-</button>
                    <input min="0" max="20" value={itemOrderQuantity} type="number" data-testid="state" name="number" id="number"/>
                    <button data-testid="button-increment" onClick={increment} className="increment">+</button>
            </div>
            <button onClick={handleClick}>ADD TO CART</button>
        </div>
    )
}
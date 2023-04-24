import React from "react"
import cart from "../images/cart.png"

export default function Navbar() {

    function handleClick() {

    }

    return (
        <nav>
            <h1><a href="/">Fictional Webstore</a></h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
            <img onClick={handleClick} src={cart} alt="" height="25px" id="shopping-cart-image"/>
        </nav>
    )
}

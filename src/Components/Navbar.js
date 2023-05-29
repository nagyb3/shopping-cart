import React from "react"
import cart from "../images/cart.png"

export default function Navbar() {
    return (
        <nav>
            <h1><a href="/">Fictional Webstore</a></h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
            <a id="shopping-cart-image" href="/shop/checkout"><img src={cart} alt="" height="25px"/></a>
        </nav>
    )
}

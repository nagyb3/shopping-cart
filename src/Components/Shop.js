import React from "react";
import Card from "./Card";
import "./shop.css"
import fox from "../images/fox.png"
import elephant from "../images/elephant.png"
import koala from "../images/koala.png"
import mosquito from "../images/mosquito.png"
import rhino from "../images/rhino.png"
import snake from "../images/snake.png"

export default function Shop() {
    const animalsArray = [fox, elephant, koala, mosquito, rhino, snake]
    const animalsInfoArray = [{name :"fox", price: 123},
        {name: "elephant", price: 231},
        {name: "koala", price: 427},
        {name: "mosquito", price: 8723},
        {name: "rhino", price: 353},
        {name: "snake", price: 672}]

    const [cart, setCart] = React.useState([])

    function handleClick(name) {
        setCart(prevState => [...prevState, name])
    }

    return (
        <div>
           <div className="sticky">
               <p>Current items in your cart: {cart.length}</p>
               <button className="checkout">Checkout</button>
           </div>
            <div className="card-container">
               {animalsArray.map((animal, i) => {
                   return <Card handleClick={handleClick} name={animalsInfoArray[i].name} price={animalsInfoArray[i].price} key={i} img={animal} />
               })}
           </div>
        </div>
    )
}
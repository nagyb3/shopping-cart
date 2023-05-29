import React from "react";
import Card from "./Card";
import "./shop.css"
import fox from "../images/fox.png"
import elephant from "../images/elephant.png"
import koala from "../images/koala.png"
import mosquito from "../images/mosquito.png"
import rhino from "../images/rhino.png"
import snake from "../images/snake.png"

export default function Shop(props) {
    const animalsArray = [fox, elephant, koala, mosquito, rhino, snake]
    const animalsInfoArray = [{name :"fox", price: 123},
        {name: "elephant", price: 231},
        {name: "koala", price: 427},
        {name: "mosquito", price: 8723},
        {name: "rhino", price: 353},
        {name: "snake", price: 672}]

    function setCartByItem(s) {
        props.setCartByItem(s)
    }

    function handleClick(name) {
        console.log(name)
        let newobj = props.cartByItem;
        for (const property in props.cartByItem) {
            if (property === name) {
                newobj[name] += 1
            }
        }
        setCartByItem(newobj)
        console.log(props.cartByItem)
        updateCartLength()
    }

    const [cart, setCart] = React.useState(props.cartByItem)

    React.useEffect(() => {
        setCart(props.cartByItem)
    }, [props.cartByItem])

    function getCartLength() {
        let result = 0;
        for (const property in props.cartByItem) {
            if (props.cartByItem[property] !== 0) {
                result += props.cartByItem[property]
            }
        }
        return result
    }

    const [cartLength, setCartLength] = React.useState(0);

    function updateCartLength() {
        setCartLength(getCartLength())
    }

    return (
        <div>
           <div className="sticky">
               <p>Current items in your cart: {cartLength}</p>
               <a href="/shop/checkout" className="checkout-button">Checkout</a>
           </div>
            <div className="card-container">
               {animalsArray.map((animal, i) => {
                   return <Card handleClick={handleClick} name={animalsInfoArray[i].name} price={animalsInfoArray[i].price} key={i} img={animal} />
               })}
           </div>
        </div>
    )
}
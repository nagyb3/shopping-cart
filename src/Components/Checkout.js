import React from "react"
import "./checkout.css"
import ListItem from "./ListItem"

export default function Checkout(props) {
    const animalsNameArray = ["fox", "elephant", "koala", "mosquito", "rhino", "snake"]
    const animalsInfoArray = [{name :"fox", price: 123},
        {name: "elephant", price: 231},
        {name: "koala", price: 427},
        {name: "mosquito", price: 8723},
        {name: "rhino", price: 353},
        {name: "snake", price: 672}
    ]
    
    

    let newarr = props.cartByItem
    // console.log(newarr) 
    

    return (
        <div className="checkout-container">
            <h1 className="your-cart">You cart</h1>
            <div className="card-container">
            
            {animalsNameArray.map((animal, i) => {
                if (newarr[animal] !== 0) {
                    return (
                        <ListItem key={i}
                        name={animal} 
                        price={animalsInfoArray[i].price} 
                        inCartNumber={newarr[animal]}
                        />
                    )
                }
                // console.log(newarr[animal])
            })}
            </div>
        </div>
    )
}



// {animalsArray.map((animal, i) => {
//     return <Card handleClick={handleClick} name={animalsInfoArray[i].name} price={animalsInfoArray[i].price} key={i} img={animal} />
// })}
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
    const animalsNameArray = ["fox", "elephant", "koala", "mosquito", "rhino", "snake"]

    return (
        <div style={{backgroundColor: "black", height: "calc(100vh - 100px)", padding: "30px"}}>
           <div className="card-container">
               {animalsArray.map((animal, i) => {
                   return <Card name={animalsNameArray[i]} key={i} img={animal} />
               })}
           </div>
        </div>
    )
}
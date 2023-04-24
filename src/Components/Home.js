import React from "react";
import "./home.css"

export default function Home() {
    return (
        <div>
            <div className="home-container">
                <h1 className="hero">Fictional Web Store</h1>
                <h2>Click on the Shop section in the navigation menu to see what's really important!</h2>
                <h3>Made by <a href="https://github.com/nagyb3">Bence Nagy</a>, using React</h3>
                <a id="icon-created-by" href="https://www.flaticon.com/packs/wildlife-129">Icons created by Freepik - Flaticon</a>
            </div>
        </div>
    )
}
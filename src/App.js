import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    const [cartByItem, setCartByItem] = React.useState({
        elephant: 0, fox: 0, koala: 0, mosquito: 0, rhino: 0, snake: 0
    })

    function updateCartState(newState) {
        setCartByItem(newState)
    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" element={<Shop cartByItem={cartByItem} updateCartState={updateCartState} setCartByItem={setCartByItem} />} />
                <Route path="/shop/checkout" element={<Checkout cartByItem={cartByItem} setCartByItem={setCartByItem} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

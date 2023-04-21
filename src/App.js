import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

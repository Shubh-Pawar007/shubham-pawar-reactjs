import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import "./App.css"
import SingleProduct from './Pages/SingleProduct';
import AddProduct from './Pages/AddProduct';
import Favourites from "./Pages/Favourites";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/favourite" element={<Favourites/>}/>
      </Routes>
    </>
  );
}

export default App;

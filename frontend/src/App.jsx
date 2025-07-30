import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

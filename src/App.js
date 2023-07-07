import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pricing";
import Product from "./product";
import Home from "./home";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const App = () => {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
     
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

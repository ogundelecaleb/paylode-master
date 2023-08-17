import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pricing";
import TermAndCondition from "./T&C";
import Home from "./home";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Developer from "./developer";
import Overview from "./doc/overview";
import Paylodecheckout from "./doc/paylodecheckout";
import Support from "./support";
import Billvending from "./billvending";
import Payment from "./payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/billvending" element={<Billvending />} />
        <Route path="/termsofuse" element={<TermAndCondition />} />
        <Route path="/support" element={<Support />}/>
        <Route path="/developer" element={<Developer />}>
          <Route index element={<Overview />} />
          <Route path="/developer/checkout" element={<Paylodecheckout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

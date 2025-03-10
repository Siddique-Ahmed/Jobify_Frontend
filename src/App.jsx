import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import ScrollToTop from "./utilities/ScrollOnTop";
import Instructions from "./pages/Instructions";
import Reviews from "./pages/Reviews";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/instruction" element={<Instructions />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

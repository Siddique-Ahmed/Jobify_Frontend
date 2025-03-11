import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import ScrollToTop from "./utilities/ScrollOnTop";
import Instructions from "./pages/Instructions";
import Reviews from "./pages/Reviews";
import Benefit from "./pages/Benefit";
import Company from "./pages/Company";
import Jobs from "./pages/Jobs";
import Login from "./pages/authPages/Login";
import Signup from "./pages/authPages/Signup";

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
        <Route path="/benefits" element={<Benefit />} />
        <Route path="/company" element={<Company />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

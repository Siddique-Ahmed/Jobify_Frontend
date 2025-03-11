import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Company = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen flex items-center">
        {/* aside search bar for jobs */}
        <div className="w-1/4 bg-red-300 min-h-screen"></div>
        {/* company logo and details */}
        <div className="w-3/4 bg-green-300 min-h-screen"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;

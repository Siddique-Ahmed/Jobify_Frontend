import React from "react";
import contactus from "../assets/images/contactUs.webp";
import HighlightText from "../global/HighlightText";
import Button from "../global/Button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="w-full min-h-[140px] px-4 py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:py-8 bg-gray-100">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={contactus}
            alt="Job Search"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        {/* Right Side - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-800 mb-4">
            <HighlightText
              text={"Welcome to Jobify - Your Gateway to Top Jobs"}
              highlight={"bify"}
              color="#A31D1D"
            />
          </h1>
          <p className="text-gray-600 text-sm md:text-xl mb-4 text-center md:text-start">
            Have a question or need support? Whether you're looking for your
            dream job or searching for the perfect candidate, Jobify is here to
            assist you. Reach out to us, and let's make job searching and hiring
            easier together!
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <Link to={"#contact-form"} className="w-1/2 md:w-1/3 flex items-center justify-center">
              <Button
                text={"Contact Us"}
                isText={true}
                className={
                  "bg-[var(--dark-bg)] p-2 rounded-sm text-white font-bold text-lg w-full"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

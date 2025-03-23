import React from "react";
import content_img from "../assets/images/content_img.webp";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../global/HighlightText";

const Content = () => {
  return (
    <div className="w-full min-h-[140px] px-4 py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:py-8 bg-gray-100">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-800 mb-4">
            <HighlightText text={"Welcome to Jobify - Your Gateway to Top Jobs"} highlight={"bify"} color="#A31D1D" />
          </h1>
          <p className="text-gray-600 text-sm md:text-xl mb-4 text-center md:text-start">
            Jobify is an advanced job portal where you can find job
            opportunities from thousands of companies. Here, recruiters can
            easily post job listings, and job seekers can find their dream jobs.
          </p>
          <p className="text-gray-600 text-sm md:text-xl mb-4 text-center md:text-start">
            Through our platform, you can search for jobs that match your skills
            and directly connect with recruiters. Using Jobify, you can take
            your professional career to the next level.
          </p>
          <Link
            to="#"
            className="!text-[var(--dark-bg)] !no-underline font-semibold hover:underline flex !items-center"
          >
            Learn More{" "}
            <span className="ml-2">
              <FaArrowRight/>
            </span>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={content_img}
            alt="Job Search"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

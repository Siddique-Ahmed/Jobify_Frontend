import React from "react";
import instruction_bg_1 from "../assets/images/instruction_bg_1.webp";
import HighlightText from "../global/HighlightText";

const InstructionContent = () => {
  return (
    <div className="w-full min-h-[140px] px-4 py-12 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:py-8 bg-gray-100">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-800 mb-4">
            <HighlightText
              text={"Welcome to Jobify - Your Gateway to Top Jobs"}
              highlight={"bify"}
              color="#A31D1D"
            />
          </h1>
          <p className="text-gray-600 text-sm md:text-xl mb-4 text-center sm:!text-left md:text-start">
            Tired of endless job searches and complicated application processes?
            Jobify makes job hunting simple, fast, and effective! Our powerful
            features are designed to connect job seekers with the right
            opportunities and help recruiters find top talent effortlessly.
          </p>
          <p className="text-gray-600 text-sm md:text-xl mb-4 text-center sm:!text-left md:text-start">
            At Jobify, we’re redefining the job search experience by making it
            smoother, faster, and stress-free. Whether you’re looking for a job
            or hiring the best talent – Jobify is your ultimate career partner!
            Start today and take the next step in your career!
          </p>
          <ul className="text-gray-600 !pl-0 text-sm md:text-xl mb-4 text-center sm:!text-left md:text-start">
            <li>
              Smart Job Search – Use advanced filters to find jobs that match
              your skills, experience, and location.
            </li>
            <li>
              Resume Upload – Showcase your qualifications by uploading your
              resume in PDF or image format.
            </li>
            <li>
              Easy Applications – Apply for jobs with just a few clicks and
              track your applications in one place.
            </li>
            <li>
              Google & Normal Login – Sign up easily using Google or your email
              – no hassle, no long forms!
            </li>
            <li>
              Recruiter Dashboard – Employers can post jobs, manage
              applications, and find the perfect
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={instruction_bg_1}
            alt="Job Search"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InstructionContent;

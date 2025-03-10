import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import instruction_bg from "../assets/images/instruction_bg.webp";
import HighlightText from "../global/HighlightText";
import InstructionContent from "../components/InstructionContent";

const Instructions = () => {
  return (
    <div>
      <Header />
      <HeroSection
        heroBg={instruction_bg}
        className={"flex items-center pt-20 md:pt-0 flex-col gap-5"}
        heading={
          <HighlightText
            text={" Find & Apply for Your Dream Job!"}
            highlight={"Dream Job!"}
            color="var(--dark-bg)"
          />
        }
        para={
          "Our job portal makes it easy to search for the best opportunities and apply with ease. Connect directly with recruiters, upload your resume, and take your career to the next level!"
        }
        headingClass={
          "text-gray-100 font-bold text-2xl md:text-4xl text-center"
        }
        paraClass={
          "text-gray-100 font-bold text-md w-[90%] md:text-xl text-center"
        }
      />
      <InstructionContent />
      <Footer />
    </div>
  );
};

export default Instructions;

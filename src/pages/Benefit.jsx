import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HighlightText from "../global/HighlightText";
import benefits_bg from "../assets/images/benefits_bg.webp";
import BenefitSection from "../components/BenefitSection";

const Benefit = () => {
  return (
    <div>
      <Header />
      <HeroSection
        heroBg={benefits_bg}
        heading={
          <HighlightText
            text={"Unlock Your Dream Career with Exclusive Benefits"}
            highlight={"Dream Career"}
            color="var(--dark-bg)"
          />
        }
        para={
          "At Jobify, career growth insights, and exclusive perks designed to help you land your ideal job with ease."
        }
        className={
          "container mx-auto w-[90%] pt-16 md:pt-0 flex flex-col items-center gap-4 text-center"
        }
        headingClass={"text-2xl md:text-4xl text-gray-100 font-bold"}
        paraClass={"text-lg md:text-xl text-gray-100 font-medium"}
      />
      <BenefitSection />
      <Footer />
    </div>
  );
};

export default Benefit;

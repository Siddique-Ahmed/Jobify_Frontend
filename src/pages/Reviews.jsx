import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import review_bg from "../assets/images/review_bg.webp";
import HeroSection from "../components/HeroSection";
import HighlightText from "../global/HighlightText";
import ReviewSection from "../components/ReviewSection";
const Reviews = () => {
  return (
    <div>
      <Header />
      <HeroSection
        heroBg={review_bg}
        className={"flex items-center flex-col gap-5"}
        heading={
          <HighlightText
            text={"What Our Users Say About Jobify"}
            highlight={"bify"}
            color="var(--dark-bg)"
          />
        }
        para={
          "At Jobify, we take pride in helping job seekers find their dream jobs and recruiters hire top talent effortlessly.Join thousands of professionals who trust Jobify to build their careers and grow their teams."
        }
        headingClass={
          "text-gray-100 font-bold text-2xl pt-20 md:pt-0 md:text-4xl text-center"
        }
        paraClass={
          "text-gray-100 font-bold text-md w-[90%] md:text-xl text-center"
        }
      />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Reviews;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HighlightText from "../global/HighlightText";
import faq_bg from "../assets/images/faq-bg.webp";
import FaqSection from "../components/FaqSection";

const Faq = () => {
  return (
    <div>
      <Header />
      <HeroSection
        className={
          "flex items-center pt-20 md:pt-0 justify-center gap-3 flex-col px-2"
        }
        paraClass={
          "w-full md:w-[90%] text-center text-gray-100 font-normal text-sm md:text-md"
        }
        headingClass={
          "text-center !text-gray-100 font-normal text-2xl md:text-4xl"
        }
        heading={
          <HighlightText
            text={"Find Answers to Your Job Search Queries!"}
            highlight={"Job Search Queries!"}
            color="var(--dark-bg)"
          />
        }
        para={
          "Welcome to Jobify's FAQ section! Whether you're a job seeker looking for opportunities or a recruiter searching for top talent, we've got all your questions covered. Explore our FAQs to learn more about job applications, company profiles, and recruitment processes. Need more help? We’re here for you!"
        }
        heroBg={faq_bg}
      />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Faq;

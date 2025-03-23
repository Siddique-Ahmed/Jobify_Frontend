import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HighlightText from "../global/HighlightText";
import Content from "../components/Content";
import YouKnowUs from "../components/YouKnowUs";
import Footer from "../components/Footer";
import Carousel from "../global/Carousel";
import img_1 from "../assets/images/carousel_img_1.webp";
import img_2 from "../assets/images/carousel_img_2.webp";
import img_3 from "../assets/images/carousel_img_3.webp";
import img_4 from "../assets/images/carousel_img_4.webp";
import img_5 from "../assets/images/carousel_img_5.webp";
import Testimonial from "../components/Testimonial";
import hero_bg from "../assets/images/hero_bg.webp";

const images = [img_1, img_2, img_3, img_4, img_5];

const Home = () => {
  return (
    <div className="bg-white min-h-0">
      <Header />
      <HeroSection
        heading={
          <HighlightText
            text={"Find Your Dream Job – Fast & Easy!"}
            highlight={"Dream Job"}
            color="var(--dark-bg)"
          />
        }
        heroBg={hero_bg}
        para={
          "Explore the latest job openings from top recruiters and apply with just one click. Take the next step in your career effortlessly with our seamless job search platform!"
        }
        className={
          "flex items-center justify-center flex-col gap-2 pt-[80px] sm:pt-20"
        }
        headingClass={
          "text-2xl md:text-3xl md:text-4xl !text-gray-100 font-bold text-center"
        }
        paraClass={
          "w-full md:w-[80%] text-sm md:text-lg  text-center text-gray-200"
        }
      />
      <Content />
      <Carousel images={images} />
      <YouKnowUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

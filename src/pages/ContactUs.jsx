import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import contact_bg from "../assets/images/contact_bg.webp";
import HighlightText from "../global/HighlightText";
import ContactSection from "../components/ContactSection";
import ContactFormSection from "../components/ContactFormSection";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <HeroSection
        className={"flex items-center pt-20 md:pt-0 justify-center gap-4 flex-col"}
        heroBg={contact_bg}
        heading={
          <HighlightText
            text={"Let's Connect – We're Here to Help!"}
            highlight={"Connect"}
            color="var(--dark-bg)"
          />
        }
        headingClass={
          "text-2xl md:text-4xl font-bold !text-gray-100 text-center"
        }
        para={
          "Have a question or need support? Whether you're looking for your dream job or searching for the perfect candidate, Jobify is here to assist you. Reach out to us, and let's make job searching and hiring easier together!"
        }
        paraClass={"text-lg md:text-xl text-gray-100 w-[90%] text-center"}
      />
      <ContactSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default ContactUs;

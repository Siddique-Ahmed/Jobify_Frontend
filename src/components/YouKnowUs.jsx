import React from "react";
import Accordion from "../global/Accordion";
import home_faq_img from "../assets/images/home_faq_comp_img.webp";
import HighlightText from "../global/HighlightText";

const accordionData = [
  {
    title: "How can Blogify help you get a job?",
    content:
      "Blogify is a powerful platform for job seekers where you can find career tips, resume writing guides, and interview hacks to boost your chances of landing a job.",
  },
  {
    title: "How to improve your resume?",
    content:
      "On Blogify, you can find the best resume optimization practices to create an ATS-friendly and professional resume that stands out.",
  },
  {
    title: "How to prepare for job interviews?",
    content:
      "We share expert blogs and tips that help you build confidence and crack job interviews successfully.",
  },
  {
    title: "How to find freelancing and remote jobs?",
    content:
      "If you're looking for freelancing or remote work, Blogify provides insights on the best platforms and strategies to get started.",
  },
  {
    title: "How to network and get job referrals?",
    content:
      "Strong networking and referrals increase your chances of getting hired. Blogify guides you on how to build meaningful professional connections.",
  },
];

const YouKnowUs = () => {
  return (
    <div className="w-full flex items-center flex-col gap-3 py-12 justify-center p-4 min-h-[30vh] bg-gray-200">
      <h1 className="text-3xl font-semibold">
        <HighlightText
          text={"Why You Need Jobify?"}
          color="var(--dark-bg)"
          highlight={"bify"}
        />
      </h1>
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:py-8">
        <div className="flex justify-center">
          <img
            src={home_faq_img}
            alt="Job Search"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <Accordion
            data={accordionData}
            className={"w-full sm:px-4 py-4 rounded-md"}
          />
        </div>
      </div>
    </div>
  );
};

export default YouKnowUs;

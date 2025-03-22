import React from "react";
import benefit_section_bg from "../assets/images/benefit_section_bg.webp";
import HighlightText from "../global/HighlightText";
import Accordion from "../global/Accordion";

const benefits = [
  {
    title: "What benefits do I get with Jobify?",
    content:
      "Jobify offers access to exclusive job listings, career growth resources, and personalized job recommendations.",
  },
  {
    title: "Is Jobify free to use?",
    content:
      "Yes! Jobify provides free access to job listings, but we also offer premium features for enhanced job search benefits.",
  },
  {
    title: "How does Jobify help in career growth?",
    content:
      "We provide resume-building tools, interview tips, and networking opportunities with top recruiters to accelerate your career.",
  },
  {
    title: "Can I apply for jobs directly through Jobify?",
    content:
      "Absolutely! You can apply for jobs directly through our platform with a single click.",
  },
  {
    title: "Does Jobify offer remote job opportunities?",
    content:
      "Yes, Jobify features a variety of remote, hybrid, and on-site job listings from top companies worldwide.",
  },
];

const BenefitSection = () => {
  return (
    <div className="w-full flex items-center flex-col gap-3 py-12 justify-center p-4 min-h-[30vh] bg-gray-200">
      <h1 className="text-3xl text-center font-semibold">
        <HighlightText
          text={"What you have Benefits?"}
          color="var(--dark-bg)"
          highlight={"Benefits"}
        />
      </h1>
      <div className="!container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:py-8">
        <div className="flex justify-center">
          <img
            src={benefit_section_bg}
            alt="Job Search"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <Accordion
            data={benefits}
            className={"w-full sm:px-4 py-4 rounded-md"}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;

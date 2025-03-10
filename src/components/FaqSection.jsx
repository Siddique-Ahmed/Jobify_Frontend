import React from "react";
import Accordion from "../global/Accordion";
import HighlightText from "../global/HighlightText";

const faqs = [
  {
    title: "How to use the Job Portal?",
    content:
      "You need to create an account first. If you are a Job Seeker, you can search for jobs and apply. If you are a Recruiter, you can create a company and post jobs.",
  },
  {
    title: "Can I log in using Google?",
    content: "Yes, you can quickly log in using the Google Login option.",
  },
  {
    title: "What features are available for Job Seekers?",
    content: [
      "Search for jobs",
      "Apply for jobs",
      "Upload resume",
      "Track applications",
    ],
  },
  {
    title: "How can a Recruiter post jobs?",
    content:
      "A Recruiter needs to create a company first, then they can post new job listings under their company.",
  },
  {
    title: "Can I upload my resume?",
    content: "Yes, you can upload your resume in PDF or Image format.",
  },
  {
    title: "Is the platform free to use?",
    content:
      "Yes, job seekers can use the platform for free. Recruiters may have premium options for additional features.",
  },
  {
    title: "How do I apply for a job?",
    content:
      "Once you find a job listing, click on the 'Apply' button and upload your resume if required.",
  },
  {
    title: "Can I edit my job application after submission?",
    content:
      "No, once a job application is submitted, it cannot be edited. You can reapply if necessary.",
  },
  {
    title: "How will I know if my application is accepted?",
    content:
      "Recruiters will review applications and may contact you via email or through the platform.",
  },
  {
    title: "Is there a way to contact recruiters directly?",
    content:
      "Some job listings may have a contact option, but generally, recruiters reach out to shortlisted candidates.",
  },
];

const FaqSection = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-12">
      <h1 className="text-xl md:text-2xl text-center">
        <HighlightText
          text={"FAQs (Frequently Asked Questions)"}
          highlight={"FAQs"}
          color="var(--dark-bg)"
        />
      </h1>
      <Accordion data={faqs} className={"px-3 py-10 container mx-auto"} />
    </div>
  );
};

export default FaqSection;

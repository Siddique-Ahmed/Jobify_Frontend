import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const jobListings = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-10",
    city: "Karachi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Backend Engineer",
    company: "CodeCrafters",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-08",
    city: "Lahore",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-05",
    city: "Islamabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Full Stack Developer",
    company: "InnovateHub",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-07",
    city: "Rawalpindi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Data Scientist",
    company: "AI Labs",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-09",
    city: "Faisalabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Backend Engineer",
    company: "CodeCrafters",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-08",
    city: "Lahore",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-05",
    city: "Islamabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Full Stack Developer",
    company: "InnovateHub",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-07",
    city: "Rawalpindi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Data Scientist",
    company: "AI Labs",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-09",
    city: "Faisalabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Backend Engineer",
    company: "CodeCrafters",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-08",
    city: "Lahore",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-05",
    city: "Islamabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Full Stack Developer",
    company: "InnovateHub",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-07",
    city: "Rawalpindi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
  {
    title: "Data Scientist",
    company: "AI Labs",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    postedAt: "2025-03-09",
    city: "Faisalabad",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi tempora nulla laudantium explicabo asperiores cupiditate reprehenderit eius dicta et expedita accusantium repudiandae, voluptatem repellendus vero fuga! Adipisci, architecto in.",
  },
];

const SavedJobs = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen flex items-center">
        <MainContent
          className={
            "w-full bg-gray-100 !pt-20 !py-5 min-h-screen md:h-screen md:overflow-y-auto hide-scrollbar"
          }
          data={jobListings}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SavedJobs;

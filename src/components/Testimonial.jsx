import React from "react";
import img_2 from "../assets/images/carousel_img_2.webp";
import img_3 from "../assets/images/carousel_img_3.webp";
import img_4 from "../assets/images/carousel_img_4.webp";
import img_5 from "../assets/images/carousel_img_5.webp";
import TestimonialCard from "../global/TestimonialCard";

const userDetail = [
  {
    name: "Alice Johnson",
    image: img_2,
    description:
      "Amazing service! The team was incredibly supportive and helped me find the perfect job in no time.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    image: img_3,
    description:
      "Great platform with lots of job opportunities. The UI is very user-friendly and easy to navigate.",
    rating: 4,
  },
  {
    name: "Sophia Williams",
    image: img_4,
    description:
      "Had a smooth experience applying for jobs. The filtering options could be better, but overall, a great platform.",
    rating: 4,
  },
  {
    name: "David Brown",
    image: img_5,
    description:
      "Good job portal with a variety of listings. Some job postings were outdated, but I managed to land a good role!",
    rating: 3,
  },
];

const Testimonial = () => {
  return (
    <div className="w-full py-10 px-3 sm:px-4 flex flex-col items-center gap-5">
      <h1 className="font-semibold text-4xl text-[var(--dark-bg)]">
        Testimonials
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-auto">
        {userDetail.map((detail, ind) => (
          <TestimonialCard
            key={ind}
            user={detail}
            className={
              "w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

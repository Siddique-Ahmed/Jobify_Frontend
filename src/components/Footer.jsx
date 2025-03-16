import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../global/HighlightText";

const socialLinks = [
  {
    icon: <FaGithub size={30} />,
    link: "https://www.github.com/Siddique-Ahmed",
    className: "text-gray-500 text-2xl cursor-pointer hover:text-white",
  },
  {
    icon: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/siddique-ahmed-8a3009297/",
    className: "text-blue-500 text-2xl cursor-pointer hover:text-blue-600",
  },
  {
    icon: <FaInstagram size={30} />,
    link: "https://www.instagram.com/codewithfun764/",
    className: "text-pink-500 text-2xl cursor-pointer hover:text-pink-600",
  },
  {
    icon: <FaYoutube size={30} />,
    link: "https://www.youtube.com/@Codewithfun07",
    className: "text-red-600 text-2xl cursor-pointer hover:text-red-500",
  },
];

const productLinks = [
  {
    text: "Benefits",
    link: "/benefits",
  },
  {
    text: "Reviews",
    link: "/reviews",
  },
];
const information = [
  {
    text: "Browse",
    link: "/saved-jobs",
  },
  {
    text: "Jobs",
    link: "/jobs",
  },
];
const support = [
  {
    text: "Instructions",
    link: "/instruction",
  },
  {
    text: "Contact Us",
    link: "/contact-us",
  },
  {
    text: "FAQs",
    link: "/faqs",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <HighlightText
                text={"Jobify"}
                highlight={"bify"}
                color="var(--light-bg)"
              />
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Find Your Dream Job Easily
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((link, ind) => (
                <Link key={ind} target="blank" to={link.link} className={link.className}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="text-sm text-gray-400 space-y-2 mt-2">
              {productLinks.map((link, ind) => (
                <li key={ind}>
                  <Link to={link.link} className="hover:text-gray-100">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="text-sm text-gray-400 space-y-2 mt-2">
              {information.map((link, ind) => (
                <li key={ind}>
                  <Link to={link.link} className="hover:text-gray-100">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="text-sm text-gray-400 space-y-2 mt-2">
              {support.map((link, ind) => (
                <li key={ind}>
                  <Link to={link.link} className="hover:text-gray-100">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>Made in Pakistan 🇵🇰 with ❤️</p>
          <p>&copy; {new Date().getFullYear()} Jobify - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

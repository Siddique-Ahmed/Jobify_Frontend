import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../global/Button";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { IoHome, IoSettings } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import CustomAvatar from "../global/Avatar";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";

const navigationLinks = [
  {
    title: "Home",
    icon: <IoHome size={15} />,
    link: "/",
  },
  {
    title: "Saved Jobs",
    icon: <FaBuildingUser size={15} />,
    link: "/saved-jobs",
  },
  {
    title: "Jobs",
    icon: <FaBriefcase size={15} />,
    link: "/jobs",
  },
  {
    title: "Faqs",
    icon: <FaQuestionCircle size={15} />,
    link: "/faqs",
  },
];

const userProfileDropDown = [
  {
    icon: <FaUser size={17} />,
    link: "/profile",
    text: "Profile",
  },
  {
    icon: <FaBriefcase size={17} />,
    link: "/applied-jobs",
    text: "Applied Jobs",
  },
  {
    icon: <IoSettings size={17} />,
    link: "/settings",
    text: "Setings",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const auth = true;
  return (
    <div className="!w-full z-[9999] min-h-[50px] bg-gray-100 py-3 shadow-md fixed top-0 left-0">
      <div className="container mx-auto h-full flex items-center gap-2 justify-between px-3 sm:px-10 relative">
        {/* hamburger */}

        {/* for logo */}
        <div className="flex items-center gap-3">
          {!isOpen && (
            <Button
              className="flex md:hidden items-center justify-center"
              icon={<HiMiniBars3BottomLeft size={23} />}
              iconPosition={"left"}
              isIcon={true}
              onClick={() => setIsOpen(!false)}
            />
          )}
          <Link
            to={"/"}
            className="flex items-center !no-underline m-0 uppercase font-bold text-2xl"
          >
            <span className="text-[var(--text-black)]">Jo</span>
            <span className="text-[var(--dark-bg)]">bify</span>
          </Link>
        </div>
        {/* for navigations links and login */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center m-0 gap-3">
            {navigationLinks.map((items, ind) => (
              <li key={ind}>
                <Link
                  to={items.link}
                  className="font-semibold !no-underline text-black hover:!text-[var(--dark-bg)]"
                >
                  <span>{items.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          {auth ? (
            /* if User is login so he see his profile */
            <div className="relative">
              {/* avatar div */}
              <div>
                <CustomAvatar
                  alt={"ProfileImg"}
                  img={
                    "https://images.unsplash.com/photo-1734799081043-e94d698bd6a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className={"shadow-md cursor-pointer"}
                  onClick={() => setShowDropDown(!showDropDown)}
                />
              </div>
              {/* profile dropdown */}
              {showDropDown && (
                <div
                  className={
                    "w-[140px] absolute transform top-[57px] translate-x-[-70%] sm:translate-x-[-64%] bg-gray-100 px-2 py-3 rounded-sm shadow-md"
                  }
                >
                  <ul className="flex flex-col gap-2 !pl-0">
                    {userProfileDropDown.map((items, ind) => (
                      <li
                        key={ind}
                        className="hover:bg-gray-200 !hover:text-[var(--dark-bg)]"
                      >
                        <Link
                          to={items.link}
                          className="!flex !no-underline hover:!text-[var(--dark-bg)] text-black !items-center gap-2 p-2 "
                        >
                          <span>{items.icon}</span>
                          {items.text && (
                            <p className="text-[14px] mb-0 font-semibold">
                              {items.text}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    text={"Logout"}
                    icon={<IoMdLogOut />}
                    isIcon={true}
                    isText={true}
                    iconPosition={"left"}
                    className={
                      "w-full border-t border-gray-400 flex items-center gap-2 p-2 pb-0 hover:text-[var(--dark-bg)]"
                    }
                  />
                </div>
              )}
            </div>
          ) : (
            /* if user is not login */
            <div className="flex gap-2">
              <Link to="/login">
                <Button
                  text={"Login"}
                  isText={true}
                  className={
                    "p-2 px-4 !rounded-sm !border !border-[var(--dark-bg)] font-semibold bg-[var(--dark-bg)] hover:text-[var(--dark-bg)] hover:!bg-transparent text-[var(--text-white)]"
                  }
                />
              </Link>
              <Link to="/signup">
                <Button
                  text={"Signup"}
                  isText={true}
                  className={
                    "p-2 px-4 !rounded-sm !border !border-[var(--dark-bg)] font-semibold bg-transparent hover:!text-[var(--text-white)] hover:!bg-[var(--dark-bg)] text-[var(--dark-bg)]"
                  }
                />
              </Link>
            </div>
          )}
        </div>

        {/* for mobile list */}
        {isOpen && (
          <div
            className={`fixed block md:hidden top-0 left-0 w-full sm:w-[200px] min-h-screen bg-gray-100 px-2 py-2 shadow-lg 
            transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-300 ease-in-out`}
          >
            <div className="h-10 flex items-center justify-between">
              <Link
                to={"/"}
                className="flex items-center !no-underline uppercase font-bold text-2xl"
              >
                <span className="text-[var(--text-black)]">Jo</span>
                <span className="text-[var(--dark-bg)]">bify</span>
              </Link>
              {isOpen && (
                <Button
                  className="flex md:hidden hover:text-[var(--dark-bg)] items-center justify-center"
                  icon={<FaXmark size={23} />}
                  isIcon={true}
                  iconPosition={"left"}
                  onClick={() => setIsOpen(!true)}
                />
              )}
            </div>
            <ul className="flex !pl-0 flex-col mt-4 md:hidden gap-2">
              {navigationLinks.map((items, ind) => (
                <li key={ind}>
                  <Link
                    to={items.link}
                    className="font-semibold !no-underline text-black hover:bg-gray-300 p-2 rounded-md flex items-center gap-2 hover:!text-[var(--dark-bg)]"
                  >
                    <span>{items.icon}</span>
                    <span>{items.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

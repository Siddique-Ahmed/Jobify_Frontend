import React, { useState } from "react";
import Button from "../../global/Button";
import { FaBars, FaBriefcase, FaXmark } from "react-icons/fa6";
import HighlightText from "../../global/HighlightText";
import { Link, useLocation } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation();  
  return (
    <div
      className={`absolute left-0 top-0 md:sticky bg-white min-h-screen pt-19 ${
        isOpen ? "w-2/4 md:w-1/4" : "w-[40px]"
      }`}
    >
      <div className="w-full flex items-center justify-end !pb-5">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          isIcon={true}
          iconPosition={"center"}
          icon={isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          className={"p-2 items-center justify-center flex"}
        />
      </div>
      {isOpen ? (
        <>
          <div className="w-full flex items-center justify-center pb-4">
            <h1 className="!font-bold !text-lg uppercase">
              <HighlightText
                text={"Dashboard"}
                highlight={"Dash"}
                color="var(--dark-bg)"
              />
            </h1>
          </div>
          <div className="w-full">
            <ul className="w-full mb-0 !pl-0 flex flex-col gap-2">
              <li className={`${pathname === "/dashboard/company" && "!bg-gray-100"} p-2`}>
                <Link
                  to="/dashboard/company"
                  className="!no-underline flex items-center gap-2 !text-gray-700 hover:!text-[var(--dark-bg)]"
                >
                  <FaBuilding /> Company
                </Link>
              </li>
              <li className={`${pathname === "/dashboard/company/jobs" && "!bg-gray-100"} p-2`}>
                <Link
                  to="/dashboard/company/jobs"
                  className="!no-underline flex items-center gap-2 !text-gray-700 hover:!text-[var(--dark-bg)]"
                >
                  <FaBriefcase /> Jobs
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AsideBar;

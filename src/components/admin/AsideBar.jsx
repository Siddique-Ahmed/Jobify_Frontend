import React, { useState } from "react";
import Button from "../../global/Button";
import { FaBars, FaXmark } from "react-icons/fa6";
import HighlightText from "../../global/HighlightText";
import { Link } from "react-router-dom";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <ul>
              <li>
                <Link className="/dashboard/company">Company</Link>
              </li>
              <li>
                <Link className="/dashboard/jobs">Jobs</Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AsideBar;

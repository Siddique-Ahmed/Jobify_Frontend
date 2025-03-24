import React, { useState } from "react";
import Button from "../global/Button";
import { FaBars, FaXmark } from "react-icons/fa6";
import HighlightText from "../global/HighlightText";

const SettingAsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white ${
        isOpen ? "w-2/4 sm:!w-1/4 absolute md:sticky z-50" : "w-[40px]"
      } overflow-auto hide-scrollbar !shadow-lg !pt-2 !py-8 h-screen`}
    >
      <div className="w-full flex items-center justify-end !pb-5">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          isIcon={true}
          iconPosition={"center"}
          icon={isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          className={"p-2 items-center justify-center flex !text-gray-500 hover:!text-[var(--dark-bg)]"}
        />
      </div>
      {isOpen ? (
        <div className="w-full flex items-center justify-center pb-4">
          <h1 className="!font-bold !text-lg uppercase">
            <HighlightText
              text={"Setting"}
              highlight={"Sett"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default SettingAsideBar;

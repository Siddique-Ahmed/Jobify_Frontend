import React, { useState } from "react";
import HighlightText from "../global/HighlightText";
import Button from "../global/Button";
import { FaBars, FaCaretDown, FaCaretRight, FaXmark } from "react-icons/fa6";

const AsideBar = ({ className, isOpen, setIsOpen }) => {
  const [company, setCompany] = useState(false);
  const [position, setPosition] = useState(false);
  const [salary, setSalary] = useState(false);
  const [city, setCity] = useState(false);
  return (
    <div className={`${className}`}>
      <div className="w-full flex items-center justify-end px-4 pb-5">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          isIcon={true}
          iconPosition={"center"}
          icon={isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          className={"p-2 items-center justify-center flex"}
        />
      </div>
      {isOpen ? (
        <div className="w-full flex items-center justify-center pb-4">
          <h1 className="font-bold text-lg uppercase">
            <HighlightText
              text={"filter jobs"}
              highlight={"jobs"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
      ) : null}
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"Company"}
          iconPosition={"right"}
          icon={
            company ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />
          }
          className={
            "w-full text-left p-2 font-semibold text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between transition-all delay-200"
          }
          onClick={() => setCompany(!company)}
        />
        {company && <div>company</div>}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"Position"}
          iconPosition={"right"}
          icon={
            position ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />
          }
          className={
            "w-full text-left p-2 font-semibold text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between transition-all delay-200"
          }
          onClick={() => setPosition(!position)}
        />
        {position && <div>Position</div>}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"Salary"}
          iconPosition={"right"}
          icon={salary ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />}
          className={
            "w-full text-left p-2 font-semibold text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between transition-all delay-200"
          }
          onClick={() => setSalary(!salary)}
        />
        {salary && <div>Salary</div>}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"City"}
          iconPosition={"right"}
          icon={city ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />}
          className={
            "w-full text-left p-2 font-semibold text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between transition-all delay-200"
          }
          onClick={() => setCity(!city)}
        />
                {
          city &&(
            <div>city</div>
          )
        }
      </div>
    </div>
  );
};
export default AsideBar;

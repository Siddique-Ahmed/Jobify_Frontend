import React, { useState } from "react";
import HighlightText from "../global/HighlightText";
import Button from "../global/Button";
import { FaBars, FaCaretDown, FaCaretRight, FaXmark } from "react-icons/fa6";

const cities = ["Karachi", "Lahore", "Peshawar", "Islamabad", "hyderabad"];
const salaries = [
  "20k to 30k",
  "31k to 40k",
  "41k to 50k",
  "51k to 60k",
  "61k to 70k",
  "71K to 80k",
];
const companies = [
  "JYtech pvt ltd",
  "Hiring mine",
  "Job search agency",
  "Jobify",
  "Jobseeker",
  "Job board",
  "Job portal",
];
const positions = [
  "Full Stack Developer",
  "Senior Developer",
  "Junior Developer",
  "Product Manager",
  "UX/UI Designer",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Project Manager",
  "QA/Tester",
  "Content Writer",
  "Business Analyst",
];

const AsideBar = ({ className, isOpen, setIsOpen }) => {
  const [company, setCompany] = useState(false);
  const [position, setPosition] = useState(false);
  const [salary, setSalary] = useState(false);
  const [city, setCity] = useState(false);
  return (
    <div className={`${className}`}>
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
        <div className="w-full flex items-center justify-center pb-4">
          <h1 className="!font-bold !text-lg uppercase">
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
          className={`w-full text-left p-2 font-semibold ${
            company ? "bg-gray-100" : "bg-white"
          } text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between`}
          onClick={() => setCompany(!company)}
        />
        {company && (
          <div className="px-3">
            <ul className="flex !pl-0 flex-col gap-2">
              {companies.map((company, ind) => (
                <li
                  className="text-gray-700 flex items-center gap-2 hover:text-[var(--dark-bg)]"
                  key={ind}
                >
                  <input type="checkbox" name={company} id="" />
                  <label htmlFor={company}>{company}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
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
          className={`w-full text-left p-2 font-semibold ${
            position ? "bg-gray-100" : "bg-white"
          } text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between`}
          onClick={() => setPosition(!position)}
        />
        {position && (
          <div className="px-3">
            <ul className="flex !pl-0 flex-col gap-2">
              {positions.map((position, ind) => (
                <li
                  className="text-gray-700 flex items-center gap-2 hover:text-[var(--dark-bg)]"
                  key={ind}
                >
                  <input type="checkbox" name={position} />
                  <label htmlFor={position}>{position}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"Salary"}
          iconPosition={"right"}
          icon={salary ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />}
          className={`w-full text-left p-2 font-semibold ${
            salary ? "bg-gray-100" : "bg-white"
          } text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between`}
          onClick={() => setSalary(!salary)}
        />
        {salary && (
          <div className="px-3">
            <ul className="flex !pl-0 flex-col gap-2">
              {salaries.map((salary, ind) => (
                <li
                  className="text-gray-700 flex items-center gap-2 hover:text-[var(--dark-bg)]"
                  key={ind}
                >
                  <input type="checkbox" name={salary} />
                  <label htmlFor={salary}>{salary}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        <Button
          isIcon={true}
          isText={true}
          text={"City"}
          iconPosition={"right"}
          icon={city ? <FaCaretDown size={20} /> : <FaCaretRight size={20} />}
          className={`w-full text-left p-2 font-semibold ${
            city ? "bg-gray-100" : "bg-white"
          } text-gray-500 hover:text-[var(--dark-bg)] flex items-center justify-between`}
          onClick={() => setCity(!city)}
        />
        {city && (
          <div className="px-3">
            <ul className="flex !pl-0 flex-col gap-2">
              {cities.map((city, ind) => (
                <li
                  className="text-gray-700 flex items-center gap-2 hover:text-[var(--dark-bg)]"
                  key={ind}
                >
                  <input type="checkbox" name={city} />
                  <label htmlFor={city}>{city}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default AsideBar;

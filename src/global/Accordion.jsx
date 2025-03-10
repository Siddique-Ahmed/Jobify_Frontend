import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Button from "./Button";

const Accordion = ({ data, className }) => {
  const [openId, setOpenId] = useState(0);

  const toggleAccordion = (ind) => {
    setOpenId(openId === ind ? null : ind);
  };

  return (
    <div className={`${className}`}>
      {data.map((item, ind) => (
        <div key={ind} className="w-full mb-2">
          <Button
            className="w-full flex justify-between p-4 text-[var(--dark-bg)] bg-gray-200 text-start font-bold border-b border-gray-400"
            onClick={() => toggleAccordion(ind)}
            text={item.title}
            isText={true}
            isIcon={true}
            iconPosition={"right"}
            icon={
              openId === ind ? (
                <FaChevronUp size={20} />
              ) : (
                <FaChevronDown size={20} />
              )
            }
          />
          {openId === ind && (
            <div className="w-full p-4 bg-gray-200 text-gray-500 font-semibold">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

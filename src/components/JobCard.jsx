import React, { useState } from "react";
import Button from "../global/Button";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className="w-full hover:shadow-xl cursor-pointer bg-white px-3 py-4 rounded-md shadow-md">
      <div className="w-full flex items-center justify-between">
        <span className="text-sm text-gray-500">{data?.postedAt}</span>
        <Button
          onClick={() => setSaved(!saved)}
          className={
            `text-md ${saved ? "bg-black text-gray-100" :"text-gray-800 bg-transparent"} border border-gray-500 rounded-full p-2 hover:shadow-md`
          }
          isIcon={true}
          iconPosition={"center"}
          icon={saved ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
        />
      </div>
      <div className="flex items-center gap-2 py-2">
        <img src={data?.logo} className="w-10 border-4 border-gray-900 h-10 object-cover rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold">{data?.company}</h1>
          <span className="text-xs text-gray-600">{data?.city}</span>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-bold">{data?.title}</h1>
        <p className="text-gray-600">
          {data?.description.substring(0, 100)}...
        </p>
      </div>
      <div className="flex items-center gap-2 py-2">
        <Button
          isText={true}
          text={"remote"}
          className={
            "text-sm border border-gray-500 w-full py-[2px] rounded-full text-blue-800 font-semibold"
          }
        />
        <Button
          isText={true}
          text={"hybrid"}
          className={
            "text-sm border border-gray-500 w-full py-[2px] rounded-full text-red-800 font-semibold"
          }
        />
        <Button
          isText={true}
          text={"onsite"}
          className={
            "text-sm border border-gray-500 w-full py-[2px] rounded-full text-green-800 font-semibold"
          }
        />
      </div>
      <div className="py-2">
       <Link to={`/job-detail/2`}> <Button
          isText={true}
          text={"Detail"}
          className={
            "w-[120px] md:w-[80px] px-4 py-2 hover:shadow-md border border-gray-300 rounded-md"
          }
        /></Link>
      </div>
    </div>
  );
};

export default JobCard;

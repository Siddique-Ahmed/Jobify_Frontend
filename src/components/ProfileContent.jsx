import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../global/Button";

const ProfileContent = () => {
  return (
    <div className="flex w-full min-h-screen items-center pt-18 p-4">
      <div className="container mx-auto p-2 py-4 bg-gray-100 shadow-md rounded-md flex flex-col md:flex-row items-center">
        {/* image side */}
        <div className="relative w-full md:w-1/4 h-auto items-center flex flex-row md:flex-col gap-2">
          <Link
            to={"/profile/update/asd"}
            className="absolute top-0 right-0 md:-top-20 lg:-top-10 md:-right-4 lg:-right-4 text-gray-500 hover:text-[var(--dark-bg)]"
          >
            <FaEdit size={20} />
          </Link>
          <div className="w-[140px] md:w-[140px] h-[140px] md:h-[140px] rounded-full">
            <img
              src="https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              className="w-full h-full object-cover shadow-md rounded-full"
            />
          </div>
          <div className="flex flex-col md:mt-2">
            <div className="w-full flex md:flex-col items-center md:items-start flex-wrap gap-1">
              <span className="text-sm font-bold"> Full Name :</span>
              <h1 className="text-gray-700 font-medium">Siddique Ahmed</h1>
            </div>
            <div className="w-full flex md:flex-col items-center md:items-start flex-wrap gap-1">
              <span className="text-sm font-bold">Username :</span>
              <p className="text-gray-700 font-medium">@siddique0709</p>
            </div>
            <div className="w-full flex md:flex-col items-center md:items-start flex-wrap gap-1">
              <span className="text-sm font-bold">Email :</span>
              <p className="text-gray-700 font-medium">siddique@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Detail side */}
        <div className="w-full md:w-3/4 h-auto mt-3 md:ml-5 border-t-2 md:border-l-2 md:border-t-0 border-[var(--dark-bg)] min-h-[fit-content]">
          <div className="p-2 px-3 w-full grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-bold">Age</span>
              <h1 className="text-gray-700 font-medium">24</h1>
            </div>
            <div>
              <span className="text-sm font-bold">City</span>
              <h1 className="text-gray-700 font-medium">Karachi</h1>
            </div>
            <div>
              <span className="text-sm font-bold">Education</span>
              <h1 className="text-gray-700 font-medium">Bachelor</h1>
            </div>
            <div>
              <span className="text-sm font-bold">Phone Number</span>
              <h1 className="text-gray-700 font-medium">+923243457768</h1>
            </div>
            <div>
              <span className="text-sm font-bold">Experience</span>
              <h1 className="text-gray-700 font-medium">2 year</h1>
            </div>
            <div>
              <span className="text-sm font-bold">Bio</span>
              <h1 className="text-gray-700 font-medium">
                A full Stack Developer and ui designer with 3 years of
                experience
              </h1>
            </div>
            <div>
              <span className="text-sm font-bold">Address</span>
              <h1 className="text-gray-700 font-medium">
                orangi town sector 10 karachi
              </h1>
            </div>
          </div>
          <div className="p-2 px-3 w-full">
            <div className=" mb-2 w-full flex gap-1 items-center">
              <h1 className="text-sm font-bold">Resume :</h1>
              <Link
                to={"/"}
                target="blank"
                className="hover:text-blue-600 text-sm text-gray-500"
              >
                My Resume
              </Link>
            </div>
            <div className="w-full flex gap-2 flex-col">
              <h1 className="text-sm font-bold">Skills</h1>
              <div className=" w-full flex flex-wrap gap-2 items-center">
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"HTML"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"CSS"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"Javascript"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"React JS"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"Next JS"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"Firebase"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"Node JS"}
                />
                <Button
                  isText={true}
                  className={
                    "bg-black hover:opacity-80 text-gray-100 rounded-md p-2 font-bold"
                  }
                  text={"Express JS"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

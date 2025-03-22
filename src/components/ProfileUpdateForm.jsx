import React from "react";
import Input from "../global/TextInput";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCamera } from "react-icons/fa6";
import FileInput from "../global/FileInput";
import TextInput from "../global/TextInput";
import Button from "../global/Button";

const ProfileUpdateForm = () => {
  return (
    <div className="flex w-full min-h-screen items-center">
      <div className="!container mx-auto !p-2 !py-4 bg-white !shadow-md !rounded-md">
        <div className="flex flex-col sm:flex-row items-center">
          {/* image side */}
          <div className="!relative w-full sm:w-1/4 h-auto items-center flex flex-col gap-2">
            <Link
              to={"/profile"}
              className="absolute -top-3 left-0 sm:-top-35 lg:-top-35 lg:left-0 !text-gray-500 hover:!text-[var(--dark-bg)]"
            >
              <FaArrowLeft size={20} />
            </Link>
            <div className="relative w-[140px] sm:w-[140px] h-[140px] sm:h-[140px] rounded-full">
              <FileInput
                className={"w-[130px] h-[130px]"}
                imgClass={
                  "w-full h-full object-cover rounded-full cursor-pointer"
                }
              />
              <FaCamera className="absolute right-6 bottom-5 text-gray-400" />
            </div>
            <div className="flex w-full flex-col md:mt-2">
              <div className="w-full flex sm:flex-col items-center sm:items-start flex-wrap gap-1">
                <TextInput
                  isLabel={true}
                  labelText={"Full Name"}
                  labelClass={"text-sm font-bold"}
                  inputName={"fullName"}
                  inputClass={"w-full bg-gray-100 outline-none !p-2 rounded-md"}
                  placeHolder={"full Name"}
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div className="w-full flex sm:flex-col items-center sm:items-start flex-wrap gap-1">
                <TextInput
                  isLabel={true}
                  labelText={"Username"}
                  labelClass={"text-sm font-bold"}
                  inputName={"username"}
                  inputClass={"w-full bg-gray-100 outline-none p-2 rounded-md"}
                  placeHolder={"username"}
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div className="w-full flex sm:flex-col items-center sm:items-start flex-wrap gap-1">
                <TextInput
                  isLabel={true}
                  labelText={"Email"}
                  labelClass={"text-sm font-bold"}
                  inputName={"email"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Email"}
                  clasName={"mt-1 w-full"}
                />
              </div>
            </div>
          </div>
          {/* Detail side */}
          <div className="w-full sm:w-3/4 h-auto mt-3 sm:ml-5 border-t-2 sm:border-l-2 sm:border-t-0 border-[var(--dark-bg)] sm:px-2 min-h-[fit-content]">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Age"}
                  labelClass={"text-sm font-bold"}
                  inputName={"age"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Age"}
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"City"}
                  labelClass={"text-sm font-bold"}
                  inputName={"city"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"City"}
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Education"}
                  labelClass={"text-sm font-bold"}
                  inputName={"education"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Education"}
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Phone Number"}
                  labelClass={"text-sm font-bold"}
                  inputName={"phoneNumbert"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Phone Number"}
                  clasName={"mt-1 w-full"}
                  inputType="number"
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Experience"}
                  labelClass={"text-sm font-bold"}
                  inputName={"experience"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Experience"}
                  clasName={"mt-1 w-full"}
                  inputType="number"
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Gender"}
                  labelClass={"text-sm font-bold"}
                  inputName={"gender"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"male or female"}
                  clasName={"mt-1 w-full"}
                  inputType="text"
                />
              </div>
              <div>
                <TextInput
                  isLabel={true}
                  labelText={"Bio"}
                  labelClass={"text-sm font-bold"}
                  inputName={"bio"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"Bio"}
                  clasName={"mt-1 w-full"}
                  inputType="textarea"
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <h1 className="!text-sm !font-bold">Address</h1>
              <textarea
                name="address"
                className="bg-gray-100 mt-1 w-full outline-none p-3 rounded-md"
                placeholder="Address bar"
              ></textarea>
            </div>
            <div className="w-full">
              <div className=" mb-2 w-full flex gap-1 items-center">
                <TextInput
                  isLabel={true}
                  labelText={"Resume"}
                  labelClass={"text-sm font-bold"}
                  inputName={"resume"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  inputType="file"
                  clasName={"mt-1 w-full"}
                />
              </div>
              <div className="w-full flex gap-2 flex-col">
                <TextInput
                  isLabel={true}
                  labelText={"Skills"}
                  labelClass={"text-sm font-bold"}
                  inputName={"skills"}
                  inputClass={
                    "w-full mt-2 bg-gray-100 outline-none p-2 rounded-md"
                  }
                  placeHolder={"html,css,javascript"}
                  clasName={"mt-1 w-full"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:px-2 flex items-center justify-end gap-2">
          <Button
            isText={true}
            text={"Cancel"}
            className={
              "px-3 p-1 bg-transparent rounded-md font-bold text-lg text-[var(--dark-bg)] hover:bg-[var(--dark-bg)] hover:text-gray-100 border border-[var(--dark-bg)]"
            }
          />
          <Button
            isText={true}
            text={"Save"}
            className={
              "px-3 p-1 bg-[var(--dark-bg)] rounded-md font-bold text-lg text-gray-100 hover:opacity-85 border border-[var(--dark-bg)]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;

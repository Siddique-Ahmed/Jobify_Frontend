import React from "react";
import loginBg from "../../assets/images/login_Bg.webp";
import HighlightText from "../../global/HighlightText";
import ForgetPasswordForm from "../../components/ForgetPasswordForm";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ForgetPassword = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      {/* Image Side */}
      <div className="hidden w-3/4 lg:flex justify-center h-screen">
        <img src={loginBg} className="object-cover w-full" />
      </div>
      {/* Form Side */}
      <div className="relative w-full lg:w-1/4 flex items-center justify-center gap-3 px-5 py-10 flex-col bg-gray-100 min-h-screen overflow-y-auto hide-scrollbar">
        <Link
          to={"/login"}
          className="absolute top-2 left-2 hover:text-[var(--dark-bg)]"
        >
          <FaArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl uppercase font-bold">
            <HighlightText
              text={"Forget Password"}
              highlight={"Forget"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPassword;

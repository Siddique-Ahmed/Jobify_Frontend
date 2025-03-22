import React from "react";
import loginBg from "../../assets/images/login_Bg.webp";
import HighlightText from "../../global/HighlightText";
import ForgetPasswordForm from "../../components/ForgetPasswordForm";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      {/* Form Side */}
      <div className="w-full lg:w-1/4 flex items-center justify-center gap-3 !px-5 !py-10 flex-col bg-gray-100 min-h-screen overflow-y-auto hide-scrollbar">
        <div>
          <h1 className="!text-xl uppercase !font-bold">
            <HighlightText
              text={"New Password"}
              highlight={"Password"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
        <ResetPasswordForm />
      </div>
      {/* Image Side */}
      <div className="hidden w-3/4 lg:flex justify-center h-screen">
        <img src={loginBg} className="object-cover w-full" />
      </div>
    </div>
  );
};

export default ResetPassword;

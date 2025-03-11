import React from "react";
import loginBg from "../../assets/images/login_Bg.webp";
import google_icon from "../../assets/images/google_icon.webp";
import facebook_icon from "../../assets/images/facebook_icon.webp";
import HighlightText from "../../global/HighlightText";
import Button from "../../global/Button";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      {/* Image Side */}
      <div className="hidden w-3/4 lg:flex justify-center h-screen">
        <img src={loginBg} className="object-cover w-full" />
      </div>
      {/* Form Side */}
      <div className="w-full lg:w-1/4 flex items-center gap-3 px-4 py-10 lg:px-2 lg:py-2 flex-col bg-gray-100 min-h-screen overflow-y-auto hide-scrollbar">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-3xl uppercase font-bold">
            <HighlightText
              text={"Jobify"}
              highlight={"bify"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
        <div>
          <h1 className="text-xl uppercase font-bold">
            <HighlightText
              text={"Login"}
              highlight={"Log"}
              color="var(--dark-bg)"
            />
          </h1>
        </div>
        <div className="w-full py-2 flex items-center justify-center gap-6">
          <Button
            text={"Google"}
            isText={true}
            className={
              "w-full sm:w-[190px] flex items-center lg:w-full bg-[var(--dark-bg)] p-2 rounded-sm text-gray-100 hover:opacity-88"
            }
            isImage={true}
            imgPosition="left"
            img={google_icon}
            imgClass={"w-[20px] object-cover h-[20px]"}
          />
          <Button
            text={"Facebook"}
            isText={true}
            className={
              "w-full sm:w-[190px] flex items-center lg:w-full bg-transparent p-2 rounded-sm text-[var(--dark-bg)] border border-[var(--dark-bg)] hover:text-gray-100 hover:bg-[var(--dark-bg)]"
            }
            isImage={true}
            imgPosition="left"
            img={facebook_icon}
            imgClass={"w-[20px] object-cover h-[20px]"}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <span className="h-[2px] bg-gray-300 w-[170px]"></span>
          <span>or</span>
          <span className="h-[2px] bg-gray-300 w-[170px]"></span>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;

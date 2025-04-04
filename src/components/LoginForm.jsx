import React from "react";
import { Link } from "react-router-dom";
import Button from "../global/Button";
import TextInput from "../global/TextInput";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full sm:w-[430px] lg:w-full flex flex-col items-center justify-center"
    >
      <TextInput
        clasName={"w-full flex flex-col gap-2 !mt-2"}
        inputClass={"w-full !p-2 !rounded-md !bg-white outline-none"}
        labelText={"Email"}
        placeHolder={"Email"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full !px-2 !py-2 !rounded-md !bg-white outline-none"}
        labelText={"password"}
        placeHolder={"password"}
        inputType={"password"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <div className="py-2 w-full flex flex-col gap-2">
        <Link to={"/forget-password"} className="!text-[var(--dark-bg)] !no-underline !mb-0 !font-semibold !text-end">
          Forgot Password?
        </Link>
      </div>
      <div className="w-full py-3">
        <Button
          text={"Login"}
          isText={true}
          className={
            "w-full !bg-[var(--dark-bg)] !mb-3 !p-2 !rounded-sm !text-gray-100 !font-bold hover:!opacity-85"
          }
          buttonType="submit"
        />
        <p className="font-semibold">
          Don't have an account ? <Link to={"/signup"} className="!text-[var(--dark-bg)] !no-underline !text-end">Signup</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

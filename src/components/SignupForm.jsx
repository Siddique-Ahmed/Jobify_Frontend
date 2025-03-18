import React from "react";
import TextInput from "../global/TextInput";
import { Link } from "react-router-dom";
import Button from "../global/Button";

const SignupForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full sm:w-[430px] lg:w-full flex flex-col items-center justify-center"
    >
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full px-2 py-2 rounded-md bg-white outline-none"}
        labelText={"Full Name"}
        placeHolder={"Full Name"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full px-2 py-2 rounded-md bg-white outline-none"}
        labelText={"username"}
        placeHolder={"username"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full px-2 py-2 rounded-md bg-white outline-none"}
        labelText={"Email"}
        placeHolder={"Email"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full px-2 py-2 rounded-md bg-white outline-none"}
        labelText={"password"}
        placeHolder={"password"}
        inputType={"password"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <div className="w-full py-3">
        <Button
          text={"Signup"}
          isText={true}
          className={
            "w-full bg-[var(--dark-bg)] mb-3 p-2 rounded-sm text-gray-100 font-bold hover:opacity-85"
          }
          buttonType="submit"
        />
        <p className="font-semibold">
          Have an account ?{" "}
          <Link to={"/login"} className="text-[var(--dark-bg)] text-end">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;

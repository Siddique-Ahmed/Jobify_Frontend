import React from 'react'
import Button from '../global/Button'
import TextInput from '../global/TextInput'

const ForgetPasswordForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full sm:w-[430px] lg:w-full flex flex-col items-center justify-center"
    >
      <TextInput
        clasName={"w-full flex flex-col gap-2 mt-2"}
        inputClass={"w-full px-2 py-2 rounded-md bg-white outline-none"}
        labelText={"Enter your Email"}
        placeHolder={"Email"}
        isLabel={true}
        inputFunction={() => console.log("input")}
      />
      <div className="w-full py-3">
        <Button
          text={"Send"}
          isText={true}
          className={
            "w-full bg-[var(--dark-bg)] mb-3 p-2 rounded-sm text-gray-100 font-bold hover:opacity-85"
          }
          buttonType="submit"
        />
      </div>
    </form>
  )
}

export default ForgetPasswordForm

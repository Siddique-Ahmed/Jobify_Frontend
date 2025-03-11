import React from "react";

const Input = ({
  labelText,
  clasName,
  labelClass,
  inputClass,
  inputFunction,
  placeHolder,
  isLabel,
  icon,
  iconPosition = "left",
  inputType = "text",
}) => {
  return (
    <div className={`${clasName}`}>
      {isLabel ? <label className={`${labelClass}`}>{labelText}</label> : null}
      {icon && iconPosition == "left" ? <span>{icon}</span> : null}
      <input
        onChange={inputFunction}
        type={inputType}
        className={`${inputClass}`}
        placeholder={placeHolder}
      />
      {icon && iconPosition == "right" ? <span>{icon}</span> : null}
    </div>
  );
};

export default Input;

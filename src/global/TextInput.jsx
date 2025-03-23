import React from "react";

const TextInput = ({
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
  inputName,
  accept
}) => {
  return (
    <div className={`${clasName}`}>
      {isLabel ? (
        <label htmlFor={inputName} className={`${labelClass}`}>
          {labelText}
        </label>
      ) : null}
      {icon && iconPosition == "left" ? <span>{icon}</span> : null}
      <input
        onChange={inputFunction}
        type={inputType}
        className={`${inputClass}`}
        placeholder={placeHolder}
        name={inputName}
        accept={accept}
      />
      {icon && iconPosition == "right" ? <span>{icon}</span> : null}
    </div>
  );
};

export default TextInput;

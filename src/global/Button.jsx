import React from "react";

const Button = ({
  text,
  className,
  isIcon,
  isText,
  onClick,
  icon,
  iconPosition,
  buttonType = "button",
}) => {
  return (
    <button type={buttonType} onClick={onClick} className={`${className} cursor-pointer`}>
      <span className={`mr-1 ${isIcon ? "block" : "hidden"}`}>
        {icon && iconPosition == "left" ? icon : null}
      </span>
      <span className="w-full">
        {isText ? text : null}
        {isIcon && iconPosition == "center" ? icon : null}
      </span>
      <span className={`mr-1 ${isIcon ? "block" : "hidden"}`}>
        {icon && iconPosition == "right" ? icon : null}
      </span>
    </button>
  );
};

export default Button;

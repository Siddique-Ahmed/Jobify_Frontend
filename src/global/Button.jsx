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
  isImage,
  img,
  imgClass,
  imgPosition = "left",
}) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`${className} cursor-pointer`}
    >
      <span className={`mr-1 ${isIcon || isImage ? "block" : "hidden"}`}>
        {isImage && imgPosition == "left" ? (
          <img src={img} className={`${imgClass}`} />
        ) : null}
        {icon && iconPosition == "left" ? icon : null}
      </span>
      <span className="w-full">
        {isText ? text : null}
        {isIcon && iconPosition == "center" ? icon : null}
        {isImage && imgPosition == "center" ? (
          <img src={img} className={`${imgClass}`} />
        ) : null}
      </span>
      <span className={`mr-1 ${isIcon ? "block" : "hidden"}`}>
        {icon && iconPosition == "right" ? icon : null}
        {isImage && imgPosition == "right" ? (
          <img src={img} className={`${imgClass}`} />
        ) : null}
      </span>
    </button>
  );
};

export default Button;

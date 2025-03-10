import React from "react";
import Avatar from "@mui/material/Avatar";

const CustomAvatar = ({ alt, img, className, onClick }) => {
  return <Avatar alt={alt} src={img} className={className} onClick={onClick} />;
};

export default CustomAvatar;

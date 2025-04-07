import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div
      className={
        "w-full pl-11 md:pl-0 !bg-gray-100 !pt-18 !py-5 min-h-screen md:h-screen md:overflow-y-auto hide-scrollbar"
      }
    >
      <Outlet />
    </div>
  );
};

export default MainContent;

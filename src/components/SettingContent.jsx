import React from "react";
import SettingAsideBar from "./SettingAsideBar";
import SettingMainContent from "./SettingMainContent";

const SettingContent = () => {
  return (
    <div className="w-full flex items-center min-h-screen pt-16">
      <SettingAsideBar />
      <SettingMainContent />
    </div>
  );
};

export default SettingContent;

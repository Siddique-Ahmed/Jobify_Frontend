import React from "react";
import AsideBar from "../../components/admin/AsideBar";
import MainContent from "../../components/admin/MainContent";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header   />
      <div className="w-full min-h-screen flex items-center">
        {/* aside search bar for jobs */}
        <AsideBar />
        {/* company logo and details */}
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileUpdateContent from "../components/ProfileUpdateContent";

const ProfileUpdate = () => {
  return (
    <div className="w-full">
      <Header />
      <ProfileUpdateContent />
      <Footer />
    </div>
  );
};

export default ProfileUpdate;

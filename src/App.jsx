import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import ScrollToTop from "./utilities/ScrollOnTop";
import Instructions from "./pages/Instructions";
import Reviews from "./pages/Reviews";
import Benefit from "./pages/Benefit";
import Jobs from "./pages/Jobs";
import Login from "./pages/authPages/Login";
import Signup from "./pages/authPages/Signup";
import SavedJobs from "./pages/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import ForgetPassword from "./pages/authPages/ForgetPassword";
import ResetPassword from "./pages/authPages/ResetPassword";
import JobDetail from "./pages/JobDetail";
import JobApplyForm from "./pages/JobApplyForm";
import Dashboard from "./pages/admin_pages/Dashboard";
import Company from "./pages/admin_pages/Company";
import AdminJobs from "./pages/admin_pages/Jobs";
import Applicants from "./pages/Applicants";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/instruction" element={<Instructions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/benefits" element={<Benefit />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update/:id" element={<ProfileUpdate />} />
        <Route path="/apply-form/:id" element={<JobApplyForm />} />

        {/* admin route */}

        <Route path="/dashboard/company" element={<Dashboard />}>
          <Route index element={<Company />} />
          <Route path="jobs" element={<AdminJobs />} />
        </Route>
        <Route path="/jobs/applicants" element={<Applicants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

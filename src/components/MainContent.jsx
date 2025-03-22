import React, { useState } from "react";
import JobCard from "./JobCard";
import Input from "../global/TextInput";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MainContent = ({ className, data }) => {
  const { pathname } = useLocation();
  const [filterJobs, setFilterJobs] = useState("");

  const filterTheJobs = data.filter(
    (job) =>
      job.title.toLowerCase().includes(filterJobs.toLowerCase()) ||
      job.company.toLowerCase().includes(filterJobs.toLowerCase()) ||
      job.city.toLowerCase().includes(filterJobs.toLowerCase())
  );

  return (
    <div className={`${className}`}>
      {pathname === "/saved-jobs" && (
        <div className="!pb-4 !container mx-auto px-4">
          <h1>Saved Jobs ({data?.length})</h1>
        </div>
      )}
      <div className="flex !!container !mx-auto px-4 pb-4 items-center flex-wrap gap-2">
        <Input
          icon={<FaSearch />}
          iconPosition="left"
          placeHolder={"title city company"}
          clasName={
            "flex items-center gap-2 w-full h-10 bg-white p-2 rounded-md text-[var(--dark-bg)]"
          }
          inputClass={"w-full h-full outline-none"}
          inputFunction={(e) => setFilterJobs(e.target.value)}
        />
      </div>
      <div className="!px-5 !!container !mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filterTheJobs?.map((jobs, ind) => {
          return <JobCard key={ind} data={jobs} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;

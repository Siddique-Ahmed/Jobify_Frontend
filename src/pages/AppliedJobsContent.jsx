import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "react-bootstrap/Pagination";

const AppliedJobsContent = () => {
  const [filterJobs, setFilterJobs] = useState("");
  const applications = [
    {
      id: 1,
      company: "Javasolutions",
      position: "Frontend Developer",
      applyDate: "12/2/2023",
      status: "Accepted",
    },
    {
      id: 2,
      company: "Google",
      position: "Software Engineer",
      applyDate: "15/3/2023",
      status: "Rejected",
    },
    {
      id: 3,
      company: "Microsoft",
      position: "Backend Developer",
      applyDate: "20/4/2023",
      status: "Pending",
    },
    {
      id: 4,
      company: "Amazon",
      position: "Data Scientist",
      applyDate: "10/5/2023",
      status: "Accepted",
    },
    {
      id: 5,
      company: "Facebook",
      position: "UI/UX Designer",
      applyDate: "25/6/2023",
      status: "Rejected",
    },
    {
      id: 6,
      company: "Netflix",
      position: "DevOps Engineer",
      applyDate: "30/7/2023",
      status: "Pending",
    },
    {
      id: 7,
      company: "Tesla",
      position: "Embedded Systems Engineer",
      applyDate: "15/8/2023",
      status: "Accepted",
    },
    {
      id: 8,
      company: "Apple",
      position: "Machine Learning Engineer",
      applyDate: "5/9/2023",
      status: "Rejected",
    },
    {
      id: 9,
      company: "Adobe",
      position: "Cybersecurity Analyst",
      applyDate: "18/10/2023",
      status: "Pending",
    },
    {
      id: 10,
      company: "Intel",
      position: "Cloud Architect",
      applyDate: "1/11/2023",
      status: "Accepted",
    },
  ];

  const filterApplyJobs = applications.filter(
    (job) =>
      job.company
        .toLocaleLowerCase()
        .includes(filterJobs.toLocaleLowerCase()) ||
      job.position.toLocaleLowerCase().includes(filterJobs.toLocaleLowerCase())
  );

  return (
    <div className="w-full min-h-screen pt-15 sm:px-4">
      <div className="container mx-auto p-4 flex flex-col gap-5">
        {/* Search Bar */}
        <div className="w-full">
          <div className="w-full border border-[var(--dark-bg)] flex items-center px-2 rounded-md gap-2">
            <FaSearch size={16} className="text-[var(--dark-bg)]" />
            <input
              type="text"
              className="w-full p-2 outline-none text-[var(--dark-bg)]"
              placeholder="Search Jobs"
              onChange={(e) => setFilterJobs(e.target.value)}
            />
          </div>
        </div>
        {/* Jobs */}
        <div className="w-full">
          <h1 className="!font-semibold !text-lg !text-gray-800">
            Applied Jobs (
            <span className="text-[var(--dark-bg)]">{applications.length}</span>
            )
          </h1>
          <div className="w-full overflow-x-auto mt-2">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden !hide-scrollbar">
              <thead className="bg-[var(--light-bg)] text-white text-left">
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="p-2">Company</th>
                  <th className="p-2">Position</th>
                  <th className="p-2">Apply Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filterApplyJobs.map((app, index) => (
                  <tr
                    key={app.id}
                    className="text-gray-700 border-b last:border-none hover:bg-gray-100"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{app.company}</td>
                    <td className="p-3">{app.position}</td>
                    <td className="p-3">{app.applyDate}</td>
                    <td
                      className={`p-3 font-semibold ${
                        app.status === "Accepted"
                          ? "text-green-600"
                          : app.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {app.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsContent;

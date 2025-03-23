// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import Pagination from "react-bootstrap/Pagination";

// const AppliedJobsContent = () => {
//   const [pageData,setPageData] = useState([]);
//   const [page,setPage] = useState(1);
//   const [pageCount, setPageCount] = useState(0)
//   const applications = [
//     {
//       id: 1,
//       company: "Tesla",
//       position: "IT Support Specialist",
//       applyDate: "01/01/2023",
//       status: "Accepted",
//     },
//     {
//       id: 2,
//       company: "Siemens",
//       position: "Machine Learning Engineer",
//       applyDate: "05/02/2023",
//       status: "Rejected",
//     },
//     {
//       id: 3,
//       company: "Facebook",
//       position: "Software Engineer",
//       applyDate: "10/03/2023",
//       status: "Pending",
//     },
//     {
//       id: 4,
//       company: "Google",
//       position: "Cloud Architect",
//       applyDate: "15/04/2023",
//       status: "Accepted",
//     },
//     {
//       id: 5,
//       company: "Bitbucket",
//       position: "Frontend Developer",
//       applyDate: "20/05/2023",
//       status: "Rejected",
//     },
//     {
//       id: 6,
//       company: "GitHub",
//       position: "Embedded Systems Engineer",
//       applyDate: "25/06/2023",
//       status: "Pending",
//     },
//     {
//       id: 7,
//       company: "Atlassian",
//       position: "DevOps Engineer",
//       applyDate: "30/07/2023",
//       status: "Accepted",
//     },
//     {
//       id: 8,
//       company: "Pinterest",
//       position: "Full Stack Developer",
//       applyDate: "04/08/2023",
//       status: "Rejected",
//     },
//     {
//       id: 9,
//       company: "ZTE",
//       position: "Mobile App Developer",
//       applyDate: "09/09/2023",
//       status: "Pending",
//     },
//     {
//       id: 10,
//       company: "Dropbox",
//       position: "Game Developer",
//       applyDate: "14/10/2023",
//       status: "Accepted",
//     },
//     {
//       id: 11,
//       company: "Spotify",
//       position: "Network Engineer",
//       applyDate: "19/11/2023",
//       status: "Rejected",
//     },
//     {
//       id: 12,
//       company: "HP",
//       position: "Cybersecurity Analyst",
//       applyDate: "24/12/2023",
//       status: "Pending",
//     },
//     {
//       id: 13,
//       company: "Dell",
//       position: "Product Manager",
//       applyDate: "29/01/2024",
//       status: "Accepted",
//     },
//     {
//       id: 14,
//       company: "Nvidia",
//       position: "Software Engineer",
//       applyDate: "03/02/2024",
//       status: "Rejected",
//     },
//     {
//       id: 15,
//       company: "AMD",
//       position: "Machine Learning Engineer",
//       applyDate: "08/03/2024",
//       status: "Pending",
//     },
//     {
//       id: 16,
//       company: "Zoom",
//       position: "Full Stack Developer",
//       applyDate: "13/04/2024",
//       status: "Accepted",
//     },
//     {
//       id: 17,
//       company: "Slack",
//       position: "UI/UX Designer",
//       applyDate: "18/05/2024",
//       status: "Rejected",
//     },
//     {
//       id: 18,
//       company: "Cisco",
//       position: "Cloud Architect",
//       applyDate: "23/06/2024",
//       status: "Pending",
//     },
//     {
//       id: 19,
//       company: "SpaceX",
//       position: "Embedded Systems Engineer",
//       applyDate: "28/07/2024",
//       status: "Accepted",
//     },
//     {
//       id: 20,
//       company: "Ford",
//       position: "Mobile App Developer",
//       applyDate: "02/08/2024",
//       status: "Rejected",
//     },
//     {
//       id: 21,
//       company: "General Motors",
//       position: "IT Support Specialist",
//       applyDate: "07/09/2024",
//       status: "Pending",
//     },
//     {
//       id: 22,
//       company: "Qualcomm",
//       position: "Software Engineer",
//       applyDate: "12/10/2024",
//       status: "Accepted",
//     },
//     {
//       id: 23,
//       company: "Huawei",
//       position: "DevOps Engineer",
//       applyDate: "17/11/2024",
//       status: "Rejected",
//     },
//     {
//       id: 24,
//       company: "LG",
//       position: "Machine Learning Engineer",
//       applyDate: "22/12/2024",
//       status: "Pending",
//     },
//     {
//       id: 25,
//       company: "Sony",
//       position: "Cybersecurity Analyst",
//       applyDate: "27/01/2025",
//       status: "Accepted",
//     },
//     {
//       id: 26,
//       company: "TikTok",
//       position: "Cloud Architect",
//       applyDate: "02/02/2025",
//       status: "Rejected",
//     },
//     {
//       id: 27,
//       company: "Oracle",
//       position: "Backend Developer",
//       applyDate: "07/03/2025",
//       status: "Pending",
//     },
//     {
//       id: 28,
//       company: "Reddit",
//       position: "Game Developer",
//       applyDate: "12/04/2025",
//       status: "Accepted",
//     },
//     {
//       id: 29,
//       company: "PayPal",
//       position: "Frontend Developer",
//       applyDate: "17/05/2025",
//       status: "Rejected",
//     },
//     {
//       id: 30,
//       company: "Twitter",
//       position: "Full Stack Developer",
//       applyDate: "22/06/2025",
//       status: "Pending",
//     },
//     {
//       id: 31,
//       company: "LinkedIn",
//       position: "UI/UX Designer",
//       applyDate: "27/07/2025",
//       status: "Accepted",
//     },
//     {
//       id: 32,
//       company: "Airbnb",
//       position: "Product Manager",
//       applyDate: "01/08/2025",
//       status: "Rejected",
//     },
//     {
//       id: 33,
//       company: "Shopify",
//       position: "Cybersecurity Analyst",
//       applyDate: "06/09/2025",
//       status: "Pending",
//     },
//     {
//       id: 34,
//       company: "Stripe",
//       position: "Software Engineer",
//       applyDate: "11/10/2025",
//       status: "Accepted",
//     },
//     {
//       id: 35,
//       company: "WeWork",
//       position: "Network Engineer",
//       applyDate: "16/11/2025",
//       status: "Rejected",
//     },
//     {
//       id: 36,
//       company: "Snapchat",
//       position: "Cloud Architect",
//       applyDate: "21/12/2025",
//       status: "Pending",
//     },
//     {
//       id: 37,
//       company: "Robinhood",
//       position: "DevOps Engineer",
//       applyDate: "26/01/2026",
//       status: "Accepted",
//     },
//     {
//       id: 38,
//       company: "Boeing",
//       position: "Embedded Systems Engineer",
//       applyDate: "01/02/2026",
//       status: "Rejected",
//     },
//     {
//       id: 39,
//       company: "Tesla",
//       position: "Game Developer",
//       applyDate: "06/03/2026",
//       status: "Pending",
//     },
//     {
//       id: 40,
//       company: "Google",
//       position: "UI/UX Designer",
//       applyDate: "11/04/2026",
//       status: "Accepted",
//     },
//   ];

//   const handlePrevPage = ()=>{};
//   const handleNextPage = ()=>{};

//   return (
//     <div className="w-full min-h-screen !pt-10 sm:px-4">
//       <div className="container mx-auto p-4 flex flex-col gap-5">
//         {/* Search Bar */}
//         <div className="w-full"></div>
//         {/* Jobs */}
//         <div className="w-full">
//           <h1 className="!font-semibold !text-lg !text-gray-800">
//             Applied Jobs (
//             <span className="text-[var(--dark-bg)]">{applications.length}</span>
//             )
//           </h1>
//           <div className="w-full overflow-x-auto mt-2">
//             <table className="w-full bg-white shadow-md rounded-lg overflow-hidden !hide-scrollbar">
//               <thead className="bg-[var(--light-bg)] text-white text-left">
//                 <tr>
//                   <th className="p-2">S.No</th>
//                   <th className="p-2">Company</th>
//                   <th className="p-2">Position</th>
//                   <th className="p-2">Apply Date</th>
//                   <th className="p-2">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {applications.map((app, index) => (
//                   <tr
//                     key={app.id}
//                     className="text-gray-700 border-b last:border-none hover:bg-gray-100"
//                   >
//                     <td className="p-3">{index + 1}</td>
//                     <td className="p-3">{app.company}</td>
//                     <td className="p-3">{app.position}</td>
//                     <td className="p-3">{app.applyDate}</td>
//                     <td
//                       className={`p-3 font-semibold ${
//                         app.status === "Accepted"
//                           ? "text-green-600"
//                           : app.status === "Rejected"
//                           ? "text-red-600"
//                           : "text-yellow-600"
//                       }`}
//                     >
//                       {app.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="flex items-center justify-end">
//           <Pagination>
//             <Pagination.Prev onClick={handlePrevPage} />
//             <Pagination.Item>{1}</Pagination.Item>
//             <Pagination.Next onClick={handleNextPage}/>
//           </Pagination>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppliedJobsContent;

import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const AppliedJobsContent = () => {
  const [page, setPage] = useState(1);
  const jobsPerPage = 10;
  const [pageData, setPageData] = useState([]);

  const applications = [
    {
      id: 1,
      company: "Tesla",
      position: "IT Support Specialist",
      applyDate: "01/01/2023",
      status: "Accepted",
    },
    {
      id: 2,
      company: "Siemens",
      position: "Machine Learning Engineer",
      applyDate: "05/02/2023",
      status: "Rejected",
    },
    {
      id: 3,
      company: "Facebook",
      position: "Software Engineer",
      applyDate: "10/03/2023",
      status: "Pending",
    },
    {
      id: 4,
      company: "Google",
      position: "Cloud Architect",
      applyDate: "15/04/2023",
      status: "Accepted",
    },
    {
      id: 5,
      company: "Bitbucket",
      position: "Frontend Developer",
      applyDate: "20/05/2023",
      status: "Rejected",
    },
    {
      id: 6,
      company: "GitHub",
      position: "Embedded Systems Engineer",
      applyDate: "25/06/2023",
      status: "Pending",
    },
    {
      id: 7,
      company: "Atlassian",
      position: "DevOps Engineer",
      applyDate: "30/07/2023",
      status: "Accepted",
    },
    {
      id: 8,
      company: "Pinterest",
      position: "Full Stack Developer",
      applyDate: "04/08/2023",
      status: "Rejected",
    },
    {
      id: 9,
      company: "ZTE",
      position: "Mobile App Developer",
      applyDate: "09/09/2023",
      status: "Pending",
    },
    {
      id: 10,
      company: "Dropbox",
      position: "Game Developer",
      applyDate: "14/10/2023",
      status: "Accepted",
    },
    {
      id: 11,
      company: "Spotify",
      position: "Network Engineer",
      applyDate: "19/11/2023",
      status: "Rejected",
    },
    {
      id: 12,
      company: "HP",
      position: "Cybersecurity Analyst",
      applyDate: "24/12/2023",
      status: "Pending",
    },
    {
      id: 13,
      company: "Dell",
      position: "Product Manager",
      applyDate: "29/01/2024",
      status: "Accepted",
    },
    {
      id: 14,
      company: "Nvidia",
      position: "Software Engineer",
      applyDate: "03/02/2024",
      status: "Rejected",
    },
    {
      id: 15,
      company: "AMD",
      position: "Machine Learning Engineer",
      applyDate: "08/03/2024",
      status: "Pending",
    },
    {
      id: 16,
      company: "Zoom",
      position: "Full Stack Developer",
      applyDate: "13/04/2024",
      status: "Accepted",
    },
    {
      id: 17,
      company: "Slack",
      position: "UI/UX Designer",
      applyDate: "18/05/2024",
      status: "Rejected",
    },
    {
      id: 18,
      company: "Cisco",
      position: "Cloud Architect",
      applyDate: "23/06/2024",
      status: "Pending",
    },
    {
      id: 19,
      company: "SpaceX",
      position: "Embedded Systems Engineer",
      applyDate: "28/07/2024",
      status: "Accepted",
    },
    {
      id: 20,
      company: "Ford",
      position: "Mobile App Developer",
      applyDate: "02/08/2024",
      status: "Rejected",
    },
    {
      id: 21,
      company: "General Motors",
      position: "IT Support Specialist",
      applyDate: "07/09/2024",
      status: "Pending",
    },
    {
      id: 22,
      company: "Qualcomm",
      position: "Software Engineer",
      applyDate: "12/10/2024",
      status: "Accepted",
    },
    {
      id: 23,
      company: "Huawei",
      position: "DevOps Engineer",
      applyDate: "17/11/2024",
      status: "Rejected",
    },
    {
      id: 24,
      company: "LG",
      position: "Machine Learning Engineer",
      applyDate: "22/12/2024",
      status: "Pending",
    },
    {
      id: 25,
      company: "Sony",
      position: "Cybersecurity Analyst",
      applyDate: "27/01/2025",
      status: "Accepted",
    },
    {
      id: 26,
      company: "TikTok",
      position: "Cloud Architect",
      applyDate: "02/02/2025",
      status: "Rejected",
    },
    {
      id: 27,
      company: "Oracle",
      position: "Backend Developer",
      applyDate: "07/03/2025",
      status: "Pending",
    },
    {
      id: 28,
      company: "Reddit",
      position: "Game Developer",
      applyDate: "12/04/2025",
      status: "Accepted",
    },
    {
      id: 29,
      company: "PayPal",
      position: "Frontend Developer",
      applyDate: "17/05/2025",
      status: "Rejected",
    },
    {
      id: 30,
      company: "Twitter",
      position: "Full Stack Developer",
      applyDate: "22/06/2025",
      status: "Pending",
    },
    {
      id: 31,
      company: "LinkedIn",
      position: "UI/UX Designer",
      applyDate: "27/07/2025",
      status: "Accepted",
    },
    {
      id: 32,
      company: "Airbnb",
      position: "Product Manager",
      applyDate: "01/08/2025",
      status: "Rejected",
    },
    {
      id: 33,
      company: "Shopify",
      position: "Cybersecurity Analyst",
      applyDate: "06/09/2025",
      status: "Pending",
    },
    {
      id: 34,
      company: "Stripe",
      position: "Software Engineer",
      applyDate: "11/10/2025",
      status: "Accepted",
    },
    {
      id: 35,
      company: "WeWork",
      position: "Network Engineer",
      applyDate: "16/11/2025",
      status: "Rejected",
    },
    {
      id: 36,
      company: "Snapchat",
      position: "Cloud Architect",
      applyDate: "21/12/2025",
      status: "Pending",
    },
    {
      id: 37,
      company: "Robinhood",
      position: "DevOps Engineer",
      applyDate: "26/01/2026",
      status: "Accepted",
    },
    {
      id: 38,
      company: "Boeing",
      position: "Embedded Systems Engineer",
      applyDate: "01/02/2026",
      status: "Rejected",
    },
    {
      id: 39,
      company: "Tesla",
      position: "Game Developer",
      applyDate: "06/03/2026",
      status: "Pending",
    },
    {
      id: 40,
      company: "Google",
      position: "UI/UX Designer",
      applyDate: "11/04/2026",
      status: "Accepted",
    },
  ];

  const totalPages = Math.ceil(applications.length / jobsPerPage);

  useEffect(() => {
    const start = (page - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    setPageData(applications.slice(start, end));
  }, [page]);

  return (
    <div className="w-full min-h-screen !pt-15 sm:px-4">
      <div className="container mx-auto p-4 flex flex-col gap-5">
        <div className="w-full">
          <h1 className="!font-semibold !text-lg !text-gray-800">
            Applied Jobs (
            <span className="text-[var(--dark-bg)]">{applications.length}</span>
            )
          </h1>
          <div className="w-full overflow-x-auto mt-2">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                {pageData.map((app, index) => (
                  <tr
                    key={app.id}
                    className="text-gray-700 border-b hover:bg-gray-100"
                  >
                    <td className="p-3">
                      {(page - 1) * jobsPerPage + index + 1}
                    </td>
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
        <div className="flex items-center justify-end">
          <Pagination>
            <Pagination.Prev
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i}
                active={i + 1 === page}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsContent;

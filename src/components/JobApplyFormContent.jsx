import React, { useState } from "react";
import TextInput from "../global/TextInput";
import Button from "../global/Button";

const JobApplyFormContent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF file only.");
    }
  };

  return (
    <div className="w-full pt-20 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-gray-500">
            Jobify is a modern job portal designed to provide a seamless
            experience for both recruiters and job seekers. The platform is
            built to simplify and streamline the hiring process, making job
            searching and recruitment more efficient.
          </p>
          <p className="text-gray-500">
            Recruiters can create their company profiles, post job listings, and
            find talented professionals to join their teams. On the other hand,
            job seekers can search for suitable job opportunities, apply for
            positions, and upload their resumes to enhance their profiles.
          </p>
          <p className="text-gray-500">
            Jobify offers both Google and traditional login/signup options,
            making it easy for users to access the platform. The backend is
            powered by Node.js, Express.js, and MongoDB, while the frontend is
            developed using React.js. Cloudinary is used for storing images and
            resumes.
          </p>
          <p className="text-gray-500">
            Whether you're a recruiter looking to hire top talent or a job
            seeker searching for new career opportunities, Jobify is the perfect
            platform to help you achieve your goals.
          </p>
        </div>
        <div>
          <form >
            <div>
              <TextInput
                isLabel={true}
                labelText={"Upload Resume"}
                inputType="file"
                inputName={"resume"}
                clasName={"flex flex-col gap-2"}
                labelClass={"text-sm font-bold"}
                inputClass={"w-[200px]"}
                accept={"application/pdf"}
                inputFunction={handleFileChange}
              />
            </div>
            <div className="py-3">
              <Button isText={true} text={"Apply"} className={"bg-blue-600 px-4 text-white font-bold hover:bg-blue-500 p-2 w-[220px]"} buttonType="submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplyFormContent;

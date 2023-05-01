"use client";
import Tooltip from "./Tooltip";
import { FaFileDownload } from "react-icons/fa";
export const RESUME_URL =
  "https://res.cloudinary.com/divvyla3a/image/upload/v1682942395/Hannanel_Gershinsky_Fullstack_Resume.pdf";

const DownloadResumeIcon = () => {
  const handleResumeDownload = () => {
    window.open(RESUME_URL, "_blank");
  };
  return (
    <Tooltip text="Download Resume" location="top">
      <FaFileDownload
        className="cursor-pointer text-2xl text-orange-300"
        onClick={handleResumeDownload}
      />
    </Tooltip>
  );
};

export default DownloadResumeIcon;

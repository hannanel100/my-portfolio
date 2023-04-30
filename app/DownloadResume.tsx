"use client";
import Tooltip from "./Tooltip";
import { FaFileDownload } from "react-icons/fa";
const resumeURL =
  "https://res.cloudinary.com/divvyla3a/image/upload/v1682849256/Hannane_Resume_ajzzzv.pdf";
const DownloadResumeIcon = () => {
  const handleResumeDownload = () => {
    window.open(resumeURL, "_blank");
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

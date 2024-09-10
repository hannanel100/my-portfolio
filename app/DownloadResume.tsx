"use client";
import Tooltip from "./Tooltip";
import { FaFileDownload } from "react-icons/fa";
import { env } from "@/app/env.mjs";

const DownloadResumeIcon = () => {
  const handleResumeDownload = () => {
    window.open(env.NEXT_PUBLIC_RESUME_URL, "_blank");
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

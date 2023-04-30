"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const resumeURL =
  "https://res.cloudinary.com/divvyla3a/image/upload/v1682849256/Hannanel_Gershinsky_Fullstack_Resume.pdf";
const DownloadButton = () => {
  const handleDownload = () => {
    window.open(resumeURL, "_blank");
  };

  return (
    <div className="p-1 md:ml-10">
      <button
        onClick={handleDownload}
        className="block w-full rounded-md px-3 py-2 text-start text-sm font-medium text-gray-200 hover:bg-orange-200 hover:text-teal-700"
      >
        Resume
      </button>
    </div>
  );
};

type Link = {
  href: "/" | "/projects" | "/technologies" | "/blog" | "/contact";
  text: string;
};
const CustomNavbar = () => {
  // State variable for whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open and closed
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pathname = usePathname();

  const links: Link[] = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/projects",
      text: "Projects",
    },
    {
      href: "/technologies",
      text: "Technologies",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  return (
    // The navbar container with a gray background color
    <nav className="bg-gray-800">
      {/* The navbar content container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* The navbar content, divided into two parts */}
        <div className="flex h-16 items-center justify-between">
          {/* The logo */}
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              {/* The logo link, using the Link component from Next.js */}
              <Link href="/" className="flex text-xl font-bold text-white">
                <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="logo"
                  priority={true}
                />
                <span className="select-none self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                  <span className="bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent">
                    Hannanel
                  </span>{" "}
                  Gershinsky
                </span>
              </Link>
            </div>
          </div>
          {/* The hamburger menu */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              {/* The "X" icon */}
              <svg
                className={`${menuOpen ? "block" : "hidden"} z-30 h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15.293 4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L12.414 10l4.707 4.707a1 1 0 01-1.414 1.414L11 11.414l-4.707 4.707a1 1 0 01-1.414-1.414L9.586 10 .293 4.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Transition animation */}
              {/* <svg
                className={`${menuOpen ? "block" : "hidden"} absolute h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <rect
                  className={`${
                    menuOpen ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="rgba(0, 0, 0, 0.5)"
                  onClick={toggleMenu}
                />
              </svg> */}
            </button>
          </div>
          {/* The links on small screens */}
          {menuOpen && (
            <div className="absolute inset-x-0 top-0 origin-top-right transform  transition md:hidden">
              <div className="divide-y-2 divide-gray-700 rounded-lg  bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                {links.map((link) => (
                  <div key={link.href} className="p-1">
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-200 hover:text-teal-700 ${
                        pathname === link.href
                          ? "bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent"
                          : "text-gray-200"
                      }`}
                    >
                      {link.text}
                    </Link>
                  </div>
                ))}
                <DownloadButton />
              </div>
            </div>
          )}
          {/* The links on larger screens */}
          <div className="hidden md:block">
            <div className="flex items-center">
              {links.map((link) => (
                <div key={link.href} className="ml-10">
                  <Link
                    href={link.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-orange-200 hover:text-teal-700 ${
                      pathname === link.href
                        ? "bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent"
                        : "text-gray-200"
                    }`}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;

"use client";
import { usePathname, useParams } from "next/navigation";

import Image from "next/image";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();
  const params = useParams();
  console.log("🚀 ~ file: Navbar.tsx:11 ~ CustomNavbar ~ params:", params);

  console.log("🚀 ~ file: Navbar.tsx:10 ~ CustomNavbar ~ pathname:", pathname);
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e);
    setActiveLink(e.currentTarget.textContent?.toLowerCase() as string);
  };

  return (
    <Navbar
      fluid={true}
      rounded={true}
      theme={{
        base: "fixed left-0 top-0 z-20 p-4 w-full border-gray-200 bg-gray-900 text-gray-400",
      }}
    >
      <Navbar.Brand to="/">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent">
            Hannanel
          </span>{" "}
          Gershinsky
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/">
          <span
            className={
              activeLink === "home" ? "text-gradient" : "text-gray-200"
            }
            onClick={handleClick}
          >
            Home
          </span>
        </Link>
        <Navbar.Link href="/#about">
          <span
            className={
              activeLink === "about" ? "text-gradient" : "text-gray-200"
            }
            onClick={handleClick}
          >
            About
          </span>
        </Navbar.Link>
        <Navbar.Link href="/#projects">
          <span
            className={
              activeLink === "projects" ? "text-gradient" : "text-gray-200"
            }
            onClick={handleClick}
          >
            Projects
          </span>
        </Navbar.Link>
        <Navbar.Link href="/#contact">
          <span
            className={
              activeLink === "contact" ? "text-gradient" : "text-gray-200"
            }
            onClick={handleClick}
          >
            Contact
          </span>
        </Navbar.Link>
        <Link href="/blog">
          <span
            className={
              activeLink === "blog" ? "text-gradient" : "text-gray-200"
            }
            onClick={handleClick}
          >
            Blog
          </span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

"use client";

import Image from "next/image";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomNavbar = () => {
  const pathname = usePathname();

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
        <span className="select-none self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
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
            className={pathname === "/" ? "text-gradient" : "text-gray-200"}
          >
            Home
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={
              pathname === "/projects" ? "text-gradient" : "text-gray-200"
            }
          >
            Projects
          </span>
        </Link>
        <Link href="/technologies">
          <span
            className={
              pathname === "/technologies" ? "text-gradient" : "text-gray-200"
            }
          >
            Technologies
          </span>
        </Link>

        <Link href="/blog">
          <span
            className={
              pathname.includes("/blog") ? "text-gradient" : "text-gray-200"
            }
          >
            Blog
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={
              pathname === "/contact" ? "text-gradient" : "text-gray-200"
            }
          >
            Contact
          </span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

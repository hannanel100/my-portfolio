"use client";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      theme={{
        base: "fixed left-0 top-0 z-20 p-4 w-full border-gray-200 bg-gray-900",
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
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
        <Link href="/blog">Blog</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

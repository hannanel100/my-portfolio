"use client";
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types/project";
import Card from "../Card";
import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
type ButtonProps = {
  children: React.ReactNode;
  href: string;
  type: "github" | "live";
};
const Button = ({ children, href, type }: ButtonProps) => {
  let bgColor = "";
  let textColor = "";
  let borderColor = "";
  if (type === "github") {
    bgColor = "bg-orange-700";
    textColor = "text-orange-300";
    borderColor = "border-orange-700";
  } else if (type === "live") {
    bgColor = "bg-teal-700";
    textColor = "text-teal-300";
    borderColor = "border-teal-700";
  }

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-solid ${borderColor} p-4 px-6 py-3 font-medium ${textColor} h-10 shadow-md transition duration-300 ease-out`}
    >
      <span
        className={`ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center ${bgColor} text-white duration-300 group-hover:translate-x-0`}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span
        className={`ease absolute flex h-full w-full transform items-center justify-center ${textColor} transition-all duration-300 group-hover:translate-x-full`}
      >
        {children}
      </span>
      <span className="invisible relative">Button Text</span>
    </a>
  );
};
export function Projects({ projects }: { projects: Project[] }) {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    initialData: projects,
    onSuccess: (data) => {
      //add sorting by date
      data.sort((a, b) => {
        return (
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
        );
      });
    },
  });
  return (
    <>
      {data &&
        data.map((project) => (
          <Card
            animateTo="middle"
            key={project._id}
            className=" grid-rows-auto relative grid justify-between gap-0 rounded-lg border border-teal-500 border-opacity-40 bg-gray-800 p-4 opacity-100 sm:grid-rows-[50px_140px_80px_40px_110px] "
          >
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text text-2xl font-extrabold text-transparent">
              {project.name}
            </div>
            <PortableText value={project.content[0]} />
            <div className="grid grid-cols-1 grid-rows-3 place-content-center gap-2 sm:grid-cols-3 sm:grid-rows-1">
              {project.url && (
                <Button type="live" href={project.url}>
                  Live
                </Button>
              )}
              {project.github && (
                <Button type="github" href={project.github}>
                  Code
                </Button>
              )}
              {project.slug && (
                <Link
                  href={`/project/${project.slug}` as Route}
                  className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-solid border-teal-300 p-4 px-6 py-3 font-medium text-teal-700 shadow-md transition duration-300 ease-out`}
                >
                  <span
                    className={`ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-teal-300 text-white duration-300 group-hover:translate-x-0`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className={`ease absolute flex h-full w-full transform items-center justify-center text-teal-700 transition-all duration-300 group-hover:translate-x-full`}
                  >
                    Details
                  </span>
                  <span className="invisible relative">Button Text</span>
                </Link>
              )}
            </div>
            {project.tags && (
              <h5 className="mt-2 text-xl sm:mt-0">Technologies</h5>
            )}
            <div className=" mt-2 flex flex-grow-0 flex-wrap items-center gap-2">
              {project.tags &&
                project.tags.map((tag) => (
                  <span
                    key={tag}
                    className=" grid place-content-center rounded-full bg-gray-200 px-3 py-1 text-center text-sm font-semibold text-gray-700 sm:inline-block"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            {project.image && (
              <Image
                src={project.image}
                width={250}
                height={150}
                alt={project.alt}
                className="object-fit mx-auto mt-4 h-36"
              />
            )}
          </Card>
        ))}
    </>
  );
}

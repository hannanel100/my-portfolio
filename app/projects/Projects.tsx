"use client";
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types/project";

import Image from "next/image";
import Link from "next/link";
import { Route } from "next";
type ButtonProps = {
  children: React.ReactNode;
  href: string;
  type: "github" | "live";
};
const Button = ({ children, href, type }: ButtonProps) => {
  let color = "";
  if (type === "github") {
    color = "bg-orange-700 p-2  text-orange-300";
  } else if (type === "live") {
    color = "bg-teal-700 p-2  text-teal-300";
  }

  return (
    <a href={href} className="w-full sm:grid sm:place-content-center">
      <button
        className={`b h-full w-full transform cursor-pointer rounded-lg px-4  shadow-lg outline-none transition-transform duration-150 focus:ring-4 active:scale-75  sm:py-2 ${color} grid place-content-center`}
      >
        {children}
      </button>
    </a>
  );
};
export function Projects({ projects }: { projects: Project[] }) {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    initialData: projects,
  });
  console.log("🚀 ~ file: Projects.tsx:37 ~ Projects ~ data:", data);

  return (
    <>
      {data &&
        data.map((project) => (
          <article
            key={project._id}
            className="grid grid-rows-[50px_160px_120px]  justify-between rounded-lg border border-teal-500 border-opacity-40 bg-gray-800 p-4"
          >
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </div>
            <PortableText value={project.content} />
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
                  className="w-full sm:grid sm:place-content-center"
                >
                  <button
                    className={`b grid h-full w-full transform cursor-pointer place-content-center  rounded-lg bg-teal-300 px-4 text-teal-800 shadow-lg outline-none transition-transform duration-150 focus:ring-4 active:scale-75  sm:py-2`}
                  >
                    Details
                  </button>
                </Link>
              )}
            </div>
            {project.tags && <h5 className="mt-8 text-xl">Technologies</h5>}
            <div className="grid  grid-cols-2 place-items-start gap-2  p-2 sm:gap-4">
              {project.tags &&
                project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-teal-800 p-2 text-center text-sm text-teal-100 sm:w-full"
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
          </article>
        ))}
    </>
  );
}

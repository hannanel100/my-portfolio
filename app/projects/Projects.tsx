"use client";
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types/project";

import Image from "next/image";
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
    <a href={href} className="block w-full">
      <button
        className={`b h-full w-full transform cursor-pointer rounded-lg px-4  shadow-lg outline-none transition-transform duration-150 focus:ring-4 active:scale-75 sm:h-2/3 sm:py-2 ${color}`}
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

  return (
    <>
      {data &&
        data.map((project) => (
          <article
            key={project._id}
            className="grid grid-rows-[50px_minmax(100px,_1fr)_100px]  justify-between rounded-lg border border-teal-500 border-opacity-40 bg-gray-800 p-4"
          >
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </div>
            <PortableText value={project.content} />
            <div className="grid grid-cols-1 grid-rows-2 gap-2 sm:grid-cols-2 sm:grid-rows-1">
              {project.url && (
                <Button type="live" href={project.url}>
                  Live App
                </Button>
              )}
              {project.github && (
                <Button type="github" href={project.github}>
                  Code
                </Button>
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

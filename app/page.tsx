import { getProjects, getAbout } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

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
    <button
      className={`b h-full transform cursor-pointer rounded-lg px-4  shadow-lg outline-none transition-transform duration-150 focus:ring-4 active:scale-75 sm:h-2/3 sm:py-2 ${color}`}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </button>
  );
};
export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();
  return (
    <div className="font-2xl mx-8 mt-16 sm:mx-auto sm:px-8 md:max-w-5xl">
      <div className="flex items-center justify-between">
        <h1 className="text-7xl">
          Hello I&apos;m{" "}
          <span className="bg-gradient-conic  from-teal-500 to-orange-200 bg-clip-text text-transparent">
            Hannanel!
          </span>
        </h1>
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="me"
          className="hidden sm:block"
        />
      </div>
      <div id="about" className="mt-8">
        <h2 className="text-3xl font-bold text-gray-400">About Me</h2>
        <div className="mt-5">
          {about &&
            about.map((item) => (
              <PortableText value={item.text} key={item._id} />
            ))}
        </div>
      </div>

      <h2 className="mt-24 text-3xl font-bold text-gray-400" id="projects">
        My Projects
      </h2>
      <div className="mt-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="grid grid-rows-[50px_minmax(100px,_1fr)_100px]  justify-between rounded-lg border border-teal-500 border-opacity-40 p-4"
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
                    className="rounded-lg bg-teal-950 p-2 text-center text-sm text-teal-100 sm:w-full"
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
          </div>
        ))}
      </div>
    </div>
  );
}

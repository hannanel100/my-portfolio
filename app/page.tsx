import {
  getProjects,
  getAbout,
  getTechnologies,
  getTools,
} from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiFlask,
  SiExpress,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";
import { Technologies } from "@/types/technologies";
import { Tool } from "@/types/tools";
import ContactForm from "./ContactForm";
// add icon to Technologies object
interface TechnologyProps extends Technologies {
  icon: JSX.Element;
}
const Technology = ({ technology }: { technology: TechnologyProps }) => {
  return (
    <div className="flex w-16 flex-col items-center gap-2" key={technology._id}>
      <span className="grid h-16 place-items-center rounded-lg bg-teal-950 p-2  text-teal-100 sm:w-full">
        {technology.icon}
      </span>
      <span className="bg-gradient-to-tr  from-teal-300 to-orange-400 bg-clip-text text-transparent">
        {technology.title}
      </span>
    </div>
  );
};

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
      <a href={href} className="block">
        {children}
      </a>
    </button>
  );
};

const addIconToTechnology = (technology: Technologies) => {
  const obj = {
    ...technology,
    icon:
      technology.name === "React" ? (
        <FaReact className="text-4xl text-orange-300" />
      ) : technology.name === "Node" ? (
        <FaNodeJs className="text-4xl text-orange-300" />
      ) : technology.name === "Tailwindcss" ? (
        <SiTailwindcss className="text-4xl text-orange-300" />
      ) : technology.name === "Python" ? (
        <FaPython className="text-4xl text-orange-300" />
      ) : technology.name === "PostgresSQL" ? (
        <SiPostgresql className="text-4xl text-orange-300" />
      ) : technology.name === "Typescript" ? (
        <SiTypescript className="text-4xl text-orange-300" />
      ) : technology.name === "MongoDB" ? (
        <SiMongodb className="text-4xl text-orange-300" />
      ) : technology.name === "Docker" ? (
        <SiDocker className="text-4xl text-orange-300" />
      ) : technology.name === "Javascript" ? (
        <SiJavascript className="text-4xl text-orange-300" />
      ) : technology.name === "CSS3" ? (
        <SiCss3 className="text-4xl text-orange-300" />
      ) : technology.name === "HTML5" ? (
        <SiHtml5 className="text-4xl text-orange-300" />
      ) : technology.name === "Flask" ? (
        <SiFlask className="text-4xl text-orange-300" />
      ) : technology.name === "Express" ? (
        <SiExpress className="text-4xl text-orange-300" />
      ) : technology.name === "Prisma" ? (
        <SiPrisma className="text-4xl text-orange-300" />
      ) : (
        <TbBrandNextjs className="text-4xl text-orange-300" />
      ),
  };
  return obj;
};

const addIconToTool = (tool: Tool) => {
  const obj = {
    ...tool,
    icon:
      tool.name === "Git" ? (
        <SiGit className="text-2xl text-orange-300" />
      ) : tool.name === "vsCode" ? (
        <SiVisualstudiocode className="text-2xl text-orange-300" />
      ) : tool.name ? (
        <SiGithub className="text-2xl text-orange-300" />
      ) : (
        <SiFigma className="text-2xl text-orange-300" />
      ),
  };
  return obj;
};

export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();
  const technologies = await getTechnologies();
  const tools = await getTools();
  const toolsWithIcon = tools.map((tool) => addIconToTool(tool));
  const frontend = technologies.map((item) => {
    if (item.isFrontend) {
      return addIconToTechnology(item);
    }
  });
  const backend = technologies.map((item) => {
    if (!item.isFrontend) {
      return addIconToTechnology(item);
    }
  });
  const socials = about.map((item) =>
    item.socials.map((social) => {
      const obj = {
        social: social.name,
        link: social.url,
        icon:
          social.name === "Github" ? (
            <FaGithub className="text-2xl text-orange-300" />
          ) : (
            <FaLinkedin className="text-2xl text-orange-300" />
          ),
        id: social._key,
      };
      return obj;
    })
  )[0];


  return (
    <div className="font-2xl mx-8 mt-24 sm:mx-auto sm:px-8 md:max-w-5xl">
      <div className="flex items-center justify-between">
        <h1 className="text-7xl">
          Hello I&apos;m{" "}
          <span className="bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent">
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
      <section id="about" className="mt-8">
        <h2 className="text-3xl font-bold text-gray-400">About Me</h2>
        <div className="mt-5">
          {about &&
            about.map((item) => (
              <div key={item._id}>
                <PortableText value={item.text} />
                {socials && (
                  <div className="mt-4 flex gap-4">
                    {socials.map((element) => (
                      <span key={element.id}>
                        <a href={element.link}>{element.icon}</a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      <section className="mt-5 " id="projects">
        <h2 className="mt-24 text-3xl font-bold text-gray-400">My Projects</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <article
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
            </article>
          ))}
        </div>
      </section>
      {/* Technologies section */}
      <section>
        <h2 className="mt-24 text-3xl font-bold text-gray-400" id="tech">
          Technologies
        </h2>
        <div className="mt-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500 border-opacity-40 p-4">
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text font-extrabold text-transparent">
              Frontend
            </div>
            <div className="flex flex-wrap items-center justify-evenly  gap-8 ">
              {frontend &&
                frontend.map(
                  (item) =>
                    item?.icon && (
                      <Technology technology={item} key={item._id} />
                    )
                )}
            </div>
          </article>
          <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500 border-opacity-40 p-4">
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text font-extrabold text-transparent">
              Backend
            </div>
            <div className="flex flex-wrap items-center justify-evenly gap-8 ">
              {backend &&
                backend.map(
                  (item) =>
                    item?.icon && (
                      <Technology technology={item} key={item._id} />
                    )
                )}
            </div>
          </article>
          <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500 border-opacity-40 p-4">
            <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text font-extrabold text-transparent">
              Tools
            </div>
            <div className="flex flex-wrap justify-evenly gap-8 ">
              {toolsWithIcon &&
                toolsWithIcon.map((item) => (
                  <div
                    className="flex w-16 flex-col items-center gap-2"
                    key={item._id}
                  >
                    <span className="grid h-16 place-items-center rounded-lg bg-teal-950 p-2  text-teal-100 sm:w-full">
                      {item.icon}
                    </span>
                    <span className="bg-gradient-to-tr  from-teal-300 to-orange-400 bg-clip-text text-transparent">
                      {item.title}
                    </span>
                  </div>
                ))}
            </div>
          </article>
        </div>
      </section>
      {/* contact */}
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}

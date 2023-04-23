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
import { getTechnologies, getTools } from "@/sanity/sanity-utils";
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
const TechnologiesPage = async () => {
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
  return (
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
                  item?.icon && <Technology technology={item} key={item._id} />
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
                  item?.icon && <Technology technology={item} key={item._id} />
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
  );
};

export default TechnologiesPage;

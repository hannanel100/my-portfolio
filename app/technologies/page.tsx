import { FaReact } from "react-icons/fa";

import { SiGit, SiGithub, SiVisualstudiocode, SiFigma } from "react-icons/si";
import { Technologies } from "@/types/technologies";
import { Tool } from "@/types/tools";
import { getTechnologies, getTools } from "@/sanity/sanity-utils";
import { iconHashMap, iconClasses } from "./technologies.hash";

const addIconToTechnology = (technology: Technologies) => {
  const obj = {
    ...technology,
    icon: iconHashMap.get(technology.name) || (
      <FaReact className={iconClasses} />
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
      <span className="grid h-16 place-items-center rounded-lg bg-teal-900 p-2  text-teal-100 sm:w-full">
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
    <div>
      <div className="mt-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500  border-opacity-40 bg-gray-800 p-4">
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
        <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500 border-opacity-40 bg-gray-800 p-4">
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
        <article className="grid grid-rows-[50px_minmax(100px,_1fr)]  justify-between rounded-lg border border-teal-500 border-opacity-40 bg-gray-800 p-4">
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
                  <span className="grid h-16 place-items-center rounded-lg bg-teal-900 p-2  text-teal-100 sm:w-full">
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
    </div>
  );
};

export default TechnologiesPage;

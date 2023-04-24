import { FaQuestion } from "react-icons/fa";

import { Technologies } from "@/types/technologies";
import { Tool } from "@/types/tools";
import { getTechnologies, getTools } from "@/sanity/sanity-utils";
import { iconHashMap, iconClasses } from "./technologies.hash";
import { toolsIconHashMap } from "./tools.hash";
const addIconToTechnology = (technology: Technologies) => {
  const obj = {
    ...technology,
    icon: iconHashMap.get(technology.name) || (
      <FaQuestion className={iconClasses} />
    ),
  };
  return obj;
};

const addIconToTool = (tool: Tool) => {
  const obj = {
    ...tool,
    icon: toolsIconHashMap.get(tool.name) || (
      <FaQuestion className={iconClasses} />
    ),
  };
  return obj;
};
interface ToolsProps extends Tool {
  icon: JSX.Element;
}
interface TechnologyProps extends Technologies {
  icon: JSX.Element;
}
interface CardProps {
  title: string;
  items: (
    | {
        icon: JSX.Element;
        _id: string;
        _createdAt: string;
        name: string;
        slug: string;
        image?: string;
        alt?: string;
        url?: string;
        title: string;
        isFrontend?: boolean;
      }
    | undefined
  )[];
}
const Card = ({ title, items }: CardProps) => {
  return (
    <article className="mx-auto grid grid-cols-1 grid-rows-[50px_minmax(100px,_1fr)] place-content-center justify-between  rounded-lg border border-teal-500 border-opacity-40  bg-gray-800 p-4 px-20 sm:px-0">
      <div className="bg-gradient-to-r from-teal-500 to-orange-200 bg-clip-text pl-2 text-xl font-extrabold text-transparent">
        {title}
      </div>
      <div className="flex flex-col items-center justify-evenly gap-6  sm:flex-row sm:flex-wrap ">
        {items &&
          items.map(
            (item) => item?.icon && <IconCard item={item} key={item._id} />
          )}
      </div>
    </article>
  );
};

const IconCard = ({ item }: { item: TechnologyProps | ToolsProps }) => {
  return (
    <div className="flex w-24 flex-col items-center gap-2" key={item._id}>
      <span className="grid h-24 w-full place-items-center rounded-lg bg-teal-900 p-2  text-teal-100 sm:w-full">
        {item.icon}
      </span>
      <span className="bg-gradient-to-tr  from-teal-300 to-orange-400 bg-clip-text text-transparent">
        {item.title}
      </span>
    </div>
  );
};

const TechnologiesPage = async () => {
  const technologies = (await getTechnologies()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tools = (await getTools()).sort((a, b) => a.name.localeCompare(b.name));
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
        {frontend && <Card title="Frontend" items={frontend} />}
        {backend && <Card title="Backend" items={backend} />}
        {toolsWithIcon && <Card title="Tools" items={toolsWithIcon} />}
      </div>
    </div>
  );
};

export default TechnologiesPage;

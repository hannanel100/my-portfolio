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
export const iconClasses = "text-4xl text-orange-300";
export let iconHashMap = new Map<string, JSX.Element>();
iconHashMap.set("React", <FaReact className={iconClasses} />);
iconHashMap.set("Node", <FaNodeJs className={iconClasses} />);
iconHashMap.set("Tailwindcss", <SiTailwindcss className={iconClasses} />);
iconHashMap.set("Python", <FaPython className={iconClasses} />);
iconHashMap.set("PostgresSQL", <SiPostgresql className={iconClasses} />);
iconHashMap.set("Typescript", <SiTypescript className={iconClasses} />);
iconHashMap.set("MongoDB", <SiMongodb className={iconClasses} />);
iconHashMap.set("Docker", <SiDocker className={iconClasses} />);
iconHashMap.set("Javascript", <SiJavascript className={iconClasses} />);
iconHashMap.set("CSS3", <SiCss3 className={iconClasses} />);
iconHashMap.set("HTML5", <SiHtml5 className={iconClasses} />);
iconHashMap.set("Flask", <SiFlask className={iconClasses} />);
iconHashMap.set("Express", <SiExpress className={iconClasses} />);
iconHashMap.set("Prisma", <SiPrisma className={iconClasses} />);
iconHashMap.set("Git", <SiGit className={iconClasses} />);
iconHashMap.set("Github", <SiGithub className={iconClasses} />);
iconHashMap.set("VSCode", <SiVisualstudiocode className={iconClasses} />);
iconHashMap.set("Figma", <SiFigma className={iconClasses} />);

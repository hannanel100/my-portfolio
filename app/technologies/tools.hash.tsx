import {
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
  SiJira,
  SiPostman
} from "react-icons/si";
import { TbBrandMonday } from "react-icons/tb";
import { iconClasses } from "./technologies.hash";
export let toolsIconHashMap = new Map<string, JSX.Element>();
toolsIconHashMap.set("Git", <SiGit className={iconClasses} />);
toolsIconHashMap.set("Github", <SiGithub className={iconClasses} />);
toolsIconHashMap.set("vsCode", <SiVisualstudiocode className={iconClasses} />);
toolsIconHashMap.set("Figma", <SiFigma className={iconClasses} />);
toolsIconHashMap.set("Jira", <SiJira className={iconClasses} />);
toolsIconHashMap.set("Monday", <TbBrandMonday className={iconClasses} />);
toolsIconHashMap.set("Postman", <SiPostman className={iconClasses} />);

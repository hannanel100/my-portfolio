"use client"
import { useQuery } from "@tanstack/react-query";
import { Technologies } from "@/types/technologies";
import { getTechnologies, getTools } from "@/sanity/sanity-utils";
import { Tool } from "@/types/tools";

export function Technologies({ technologies, tools }: { technologies: Technologies[],tools: Tool[] }) {
    const { data: technologiesData } = useQuery({
      queryKey: ["technologies"],
      queryFn: getTechnologies,
      initialData: technologies,
    });
    const { data: toolsData } = useQuery({
        queryKey: ["tools"],
        queryFn: getTools,
        initialData: tools
      });
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
      <>

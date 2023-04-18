import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
const config = defineConfig({
  projectId: "akedaqmq",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-17-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;

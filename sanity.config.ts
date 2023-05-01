import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: "akedaqmq",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-04-17",
  basePath: "/admin",
  plugins: [deskTool(), codeInput()],
  schema: { types: schemas },
});

export default config;

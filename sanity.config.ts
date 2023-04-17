import { defineConfig } from "sanity";  
import {deskTool} from "sanity/desk"
const config = defineConfig({
    projectId: "akedaqmq",
    dataset: "production",
    title: "My Portfolio",
    apiVersion: "2023-17-04",
    basePath: "/admin",
    plugins: [deskTool()]
})


export default config;
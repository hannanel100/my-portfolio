import { Project } from "@/types/project";
import { About } from "@/types/about";
import { Technologies } from "@/types/technologies";
import { Tool } from "@/types/tools";
import { Blog } from "@/types/blog";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(groq`*[_type=="project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
    url,
    github,
    content,
    tags
  }`);
}

export async function getAbout(): Promise<About[]> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(groq`*[_type=="about"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    text,
    socials
  }`);
}

export async function getTechnologies(): Promise<Technologies[]> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(groq`*[_type=="technologies"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
    url,
    title,
    isFrontend
  }`);
}

export async function getTools(): Promise<Tool[]> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(groq`*[_type=="tools"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    title
  }`);
}

export async function getBlogs(): Promise<Blog[]> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(groq`*[_type=="blog"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
  }`);
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  const client = createClient({
    projectId: "akedaqmq",
    dataset: "production",
    apiVersion: "2023-04-17",
  });

  return client.fetch(
    groq`*[_type=="blog" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
    text
  }`,
    {
      slug,
    }
  );
}

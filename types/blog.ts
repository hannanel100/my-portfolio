import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  text: PortableTextBlock[];
  image: string;
  alt: string;
  excerpt: string;
};

export type BlogMeta = {
  image: string;
  alt: string;
  title: string;
  _createdAt: string;
};

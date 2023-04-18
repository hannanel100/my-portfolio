import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  github: string;
  content: PortableTextBlock[];
  tags: string[];
};

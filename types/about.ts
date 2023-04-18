import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  text: PortableTextBlock[];
};

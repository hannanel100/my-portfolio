import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  text: PortableTextBlock[];
  socials: {
    name: string;
    url?: string;
    email?: string;
    _key: string;
  }[];
};

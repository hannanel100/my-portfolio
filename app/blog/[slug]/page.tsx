//this is the page that will be rendered for each blog post
import { getBlogBySlug, getBlogMetaBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";

import { CustomPortableTextComponent } from "../../(sanity-config)/CustomPortableText";
import { Metadata } from "next";
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const { title, image, alt, _createdAt } = await getBlogBySlug(slug);

  return {
    title: title,
    openGraph: {
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: alt,
        },
      ],
    },
  };
}
const SingleBlogPage = async ({ params }: Props) => {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  return (
    <div className=" flex flex-col gap-4">
      <Link
        href="/blog"
        className="flex items-center gap-2 bg-gradient-to-b from-teal-300 via-orange-200 to-orange-500 bg-clip-text text-lg text-transparent"
      >
        <FaBackward className="text-lg text-orange-300" />
        <h3 className="text-xl">Back to Blog</h3>
      </Link>

      <div className="flex  flex-col gap-2">
        <h1 className="text-xl sm:text-3xl ">{blog.title}</h1>
        <Image
          src={blog.image}
          width={300}
          height={300}
          alt={blog.alt}
          className="self-center"
        />
        <PortableText
          value={blog.text}
          components={CustomPortableTextComponent}
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;

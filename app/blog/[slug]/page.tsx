//this is the page that will be rendered for each blog post
import { getBlogBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";

import { CustomPortableTextComponent } from "../../(sanity-config)/CustomPortableText";

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <PortableText
            value={blog.text}
            components={CustomPortableTextComponent}
          />
        </div>
        <Image
          src={blog.image}
          width={500}
          height={500}
          alt={blog.alt}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;

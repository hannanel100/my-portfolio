//this is the page that will be rendered for each blog post
import { getBlogBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaAddressCard, FaBackward } from "react-icons/fa";
import { GrFormPreviousLink } from "react-icons/gr";

const CustomPortableTextComponent = {
  block: {
    h1: (props: any) => <h1 className="text-3xl">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-2xl">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-lg">{props.children}</h3>,
    h4: (props: any) => <h4 className="text-base">{props.children}</h4>,
    h5: (props: any) => <h5 className="text-sm">{props.children}</h5>,
    h6: (props: any) => <h6 className="text-xs">{props.children}</h6>,
    normal: (props: any) => <p className="text-base">{props.children}</p>,
    blockquote: (props: any) => (
      <blockquote className="text-base">{props.children}</blockquote>
    ),
    code: (props: any) => <code className="text-base">{props.children}</code>,
  },
};

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  console.log("🚀 ~ file: page.tsx:4 ~ SingleBlogPage ~ params:", params);
  const blog = await getBlogBySlug(params.slug);
  console.log("🚀 ~ file: page.tsx:6 ~ SingleBlogPage ~ blog:", blog);

  return (
    <div className=" flex flex-col gap-4">
      <Link
        href="/blog"
        className="flex items-center gap-2 bg-gradient-to-b from-teal-300 via-orange-200 to-orange-500 bg-clip-text text-lg text-transparent"
      >
        <FaBackward className="text-lg text-orange-300" />
        <h3 className="text-xl">Back to Blog</h3>
      </Link>
      <div className="grid sm:grid-cols-2">
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

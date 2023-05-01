// the home page for the blog in the app

import { getBlogs } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  console.log("🚀 ~ file: page.tsx:9 ~ BlogCard ~ blog:", blog);
  const date = new Date(blog._createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <div className="relative flex flex-col gap-2 rounded-lg bg-gray-800 p-4 after:absolute after:-left-[1px] after:top-2/3 after:h-32 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:via-orange-500 after:to-transparent after:opacity-0 after:transition-all after:duration-500 after:ease-in-out hover:after:top-0 hover:after:opacity-100">
      <Link href={`/blog/${blog.slug}`}>
        <h3 className="text-xl text-white">{blog.title}</h3>
      </Link>
      <p className="text-sm text-gray-400">{formattedDate}</p>
      <p className="text-sm">{blog.excerpt}</p>
      <Image
        src={blog?.image}
        width={200}
        height={200}
        alt={blog.alt}
        className="self-center"
        priority={true}
      />
    </div>
  );
};

const BlogPage = async () => {
  const blogs = (await getBlogs()).sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });
  console.log("🚀 ~ file: page.tsx:32 ~ blogs ~ blogs:", blogs);
  return (
    <div className="  max-w-4xl text-white sm:mx-auto">
      <div className=" mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

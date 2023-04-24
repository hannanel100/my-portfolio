// the home page for the blog in the app

import { getBlogs } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const date = new Date(blog._createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-800 p-4">
      <Link href={`/blog/${blog.slug}`}>
        <h3 className="text-xl text-white">{blog.title}</h3>
      </Link>
      <p className="text-sm text-gray-400">{formattedDate}</p>
      <Image
        src={blog.image}
        width={200}
        height={200}
        alt={blog.alt}
        className="self-center"
      />
    </div>
  );
};

const BlogPage = async () => {
  const blogs = (await getBlogs()).sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });
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

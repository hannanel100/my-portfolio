// the home page for the blog in the app

import { getBlogs } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card";
const BlogCard = ({ blog }: { blog: Blog }) => {
  const date = new Date(blog._createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <Card animateTo="top">
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
    </Card>
  );
};

const BlogPage = async () => {
  const blogs = (await getBlogs()).sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });
  return (
    <div className="text-white sm:mx-auto">
      <div className=" mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

// the home page for the blog in the app

import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="mt-40 text-white">
      <h1>Blog</h1>
      <p>Here is a blog post</p>
      <Link href="/blog/first-post">First Post</Link>
    </div>
  );
};

export default BlogPage;

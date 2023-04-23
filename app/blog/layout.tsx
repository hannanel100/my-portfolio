import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Blog",
  description: "This is a contact page for Hannanel's blog.",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Blog</h1>
      {children}
    </div>
  );
};

export default BlogLayout;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Blog",
  description: "This is a contact page for Hannanel's blog.",
  openGraph: {
    title: "Hannanel's Blog",
    images: [
      {
        url: "https://res.cloudinary.com/divvyla3a/image/upload/v1682855988/blog_screenshot.png",
        width: 800,
        height: 600,
        alt: "Hannanel's Blog",
      },
    ],
    url: "https://hannanel.dev/blog",
    type: "website",
    description:
      "This is the blog of Hannanel Gershinsky, a Fullstack web developer.",
  },
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

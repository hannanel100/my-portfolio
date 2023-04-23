import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Projects",
  description: "Some of my latests projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">
        Check out some of my latest projects
      </h1>
      {children}
    </div>
  );
}

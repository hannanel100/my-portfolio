import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Projects",
  description: "One of my latests projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-8">{children}</div>;
}

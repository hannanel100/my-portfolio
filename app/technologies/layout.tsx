import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hannanel's Technologies",
  description: "Some of my favorite technologies and tools",
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">
        Check out some of my favorite technologies and tools
      </h1>
      {children}
    </div>
  );
}

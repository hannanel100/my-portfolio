import { getProjectBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FaAddressCard, FaBackward, FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";
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
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  console.log("🚀 ~ file: page.tsx:6 ~ ProjectPage ~ project:", project);
  return (
    <div className=" flex flex-col gap-4">
      <Link
        href={`/projects`}
        className="flex items-center gap-2 bg-gradient-to-b from-teal-300 via-orange-200 to-orange-500 bg-clip-text text-lg text-transparent"
      >
        <FaBackward className="text-lg text-orange-300" />
        <h3 className="text-xl">Back to Projects</h3>
      </Link>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <PortableText
            value={project.details}
            components={CustomPortableTextComponent}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={project.alt}
            className="w-full rounded-md object-cover shadow-lg shadow-gray-400"
          />
          <div className="flex flex-wrap justify-between gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-b from-teal-300 via-orange-200 to-orange-500 bg-clip-text text-lg text-transparent"
              >
                <FaEye className="text-lg text-orange-300" />
                <h3 className="text-xl">View Project</h3>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-b from-teal-300 via-orange-200 to-orange-500 bg-clip-text text-lg text-transparent"
              >
                <FaGithub className="text-lg text-orange-300" />
                <h3 className="text-xl">View Code on Github</h3>
              </a>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl">Some of the Technologies used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className=" rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 sm:inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

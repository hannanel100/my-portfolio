import { getProjectBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FaBackward, FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { CustomPortableTextComponent } from "../../(sanity-config)/CustomPortableText";
import { Metadata } from "next";
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const { image, alt, name } = await getProjectBySlug(slug);

  return {
    title: name,
    openGraph: {
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: alt,
        },
      ],
    },
  };
}
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

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

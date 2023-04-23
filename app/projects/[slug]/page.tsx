import { getProjectBySlug } from "@/sanity/sanity-utils";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectPage;

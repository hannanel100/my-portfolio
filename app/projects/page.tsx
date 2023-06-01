// projects home page

import { getProjects } from "@/sanity/sanity-utils";
import { Projects } from "./Projects";

const ProjectsPage = async () => {
  const projects = await getProjects();
  projects.sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  return (
    <section className="mt-5 " id="projects">
      <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsPage;

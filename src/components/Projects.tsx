import { project } from "../data";

type ProjectsProps = {
  projects: project[];
};

function Projects({ projects }: ProjectsProps) {
  const projectElements = projects.map((project) => {
    return (
      <div className="project">
        <div className="project__text-container">
          <h3 className="project__title">{project.name}</h3>
          <p className="project__description">{project.description}</p>
        </div>
        <div className="project__links-container">
          <a
            className="project__button"
            target="_blank"
            href={project.websiteLink}
          >
            Link
          </a>
          <a
            className="project__button"
            target="_blank"
            href={project.githubLink}
          >
            Github
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="projects">
      <h2 className="projects__title">Projects:</h2>
      <div className="projects__container">{projectElements}</div>
    </section>
  );
}

export default Projects;

import { SiReact, SiVite } from "react-icons/si";
import type { IconType } from "react-icons";
import type { ProjectShowcaseItem } from "@/resources/project-showcase";
import { ProjectMediaGallery } from "./ProjectMediaGallery";
import styles from "./ProjectShowcase.module.scss";

const technologyLogos: Record<ProjectShowcaseItem["technologies"][number]["logo"], IconType> = {
  react: SiReact,
  vite: SiVite,
};

interface ProjectShowcaseProps {
  project: ProjectShowcaseItem;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <article className={styles.project} id={`project-${project.slug}`}>
      <header className={styles.header}>
        <p className={styles.category}>
          <span className={styles.projectNumber}>PROJECT {project.number}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </p>
        <h2>{project.title}</h2>
      </header>

      {project.context && (
        <p className={styles.context}>
          <strong>Project context</strong>
          <span>{project.context}</span>
        </p>
      )}

      <p className={styles.description}>{project.description}</p>

      {project.contribution && (
        <p className={styles.contribution}>
          <strong>My contribution</strong>
          <span>{project.contribution}</span>
        </p>
      )}

      {project.technologies.length > 0 && (
        <ul className={styles.technologies} aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => {
            const Logo = technologyLogos[technology.logo];
            return (
              <li className={styles.technology} key={technology.name}>
                <Logo aria-hidden="true" focusable="false" />
                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      )}

      <ProjectMediaGallery title={project.title} media={project.media} section="screenshots" />

      {project.completionDate && (
        <p className={styles.date}>
          <strong>Completed</strong>
          <time dateTime={project.completionDateTime}>{project.completionDate}</time>
        </p>
      )}

      <ProjectMediaGallery title={project.title} media={project.media} section="videos" />

      <footer className={styles.links}>
        {project.repositoryUrl && (
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
            GitHub repository <span aria-hidden="true">↗</span>
          </a>
        )}
        <a href={`/work/${project.slug}`}>Project details <span aria-hidden="true">→</span></a>
      </footer>
    </article>
  );
}

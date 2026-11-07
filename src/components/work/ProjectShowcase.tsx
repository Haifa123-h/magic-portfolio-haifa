import {
  SiApachemaven,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiOpenjdk,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiThymeleaf,
  SiVite,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { ProjectShowcaseItem } from "@/resources/project-showcase";
import { ProjectCardGallery } from "./ProjectCardGallery";
import { ProjectMediaGallery } from "./ProjectMediaGallery";
import styles from "./ProjectShowcase.module.scss";

const technologyLogos: Record<
  NonNullable<ProjectShowcaseItem["technologies"][number]["logo"]>,
  IconType
> = {
  react: SiReact,
  vite: SiVite,
  openjdk: SiOpenjdk,
  springboot: SiSpringboot,
  spring: SiSpring,
  html5: SiHtml5,
  javascript: SiJavascript,
  thymeleaf: SiThymeleaf,
  json: SiJson,
  maven: SiApachemaven,
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

      {project.technologyGroups && project.technologyGroups.length > 0 ? (
        <section className={styles.stack} aria-labelledby={`stack-${project.slug}`}>
          <h3 id={`stack-${project.slug}`}>Technology stack</h3>
          <div className={styles.stackGroups}>
            {project.technologyGroups.map((group) => (
              <div className={styles.stackGroup} key={group.name}>
                <h4>{group.name}</h4>
                <ul className={styles.technologies} aria-label={`${group.name} technologies`}>
                  {group.technologies.map((technology) => {
                    const Logo = technology.logo ? technologyLogos[technology.logo] : undefined;
                    return (
                      <li className={styles.technology} key={technology.name}>
                        {Logo && <Logo aria-hidden="true" focusable="false" />}
                        <span>{technology.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : project.technologies.length > 0 ? (
        <ul className={styles.technologies} aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => {
            const Logo = technology.logo ? technologyLogos[technology.logo] : undefined;
            return (
              <li className={styles.technology} key={technology.name}>
                {Logo && <Logo aria-hidden="true" focusable="false" />}
                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      ) : null}

      <ProjectCardGallery title={project.title} media={project.media} />

      {project.completionDate && (
        <p className={`${styles.date} ${project.completionDateLabel ? styles.dateInline : ""}`}>
          <strong>{project.completionDateLabel ?? "Completed"}</strong>
          <time dateTime={project.completionDateTime}>{project.completionDate}</time>
        </p>
      )}

      <ProjectMediaGallery title={project.title} media={project.media} section="videos" />

      <footer className={styles.links}>
        {project.repositoryUrl && (
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
            {project.repositoryLinkLabel ?? "GitHub repository"} <span aria-hidden="true">→</span>
          </a>
        )}
        <a href={`/work/${project.slug}`}>Project details <span aria-hidden="true">→</span></a>
      </footer>
    </article>
  );
}

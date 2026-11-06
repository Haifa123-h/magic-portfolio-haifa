import { Column } from "@once-ui-system/core";
import { projectShowcase } from "@/resources/project-showcase";
import { ProjectShowcase } from "./ProjectShowcase";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  const availableProjects = projectShowcase.filter(
    (project) => !exclude?.includes(project.slug),
  );
  const displayedProjects = range
    ? availableProjects.slice(range[0] - 1, range[1] ?? availableProjects.length)
    : availableProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((project) => (
        <ProjectShowcase project={project} key={project.slug} />
      ))}
    </Column>
  );
}

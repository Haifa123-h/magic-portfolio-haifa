import { Column, Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, person, skills } from "@/resources";
import { SkillsCatalog } from "@/components/skills/SkillsCatalog";
import styles from "./skills.module.scss";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skills.title)}`,
    path: skills.path,
  });

  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function SkillsPage() {
  return (
    <Column className={styles.page} maxWidth="xl" fillWidth paddingY="32" gap="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={skills.title}
        description={skills.description}
        path={skills.path}
        image={`/api/og/generate?title=${encodeURIComponent(skills.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>TECHNICAL SKILLS</p>
        <h1>My Technical Skills</h1>
        <p className={styles.subtitle}>
          The technologies, tools and domains I use, and the areas I&apos;m currently developing.
        </p>
      </header>
      <SkillsCatalog />
    </Column>
  );
}

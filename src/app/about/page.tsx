import Image from "next/image";
import { Column, Heading, Icon, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { about, aboutProfile, baseURL, person } from "@/resources";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });

  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function About() {
  return (
    <Column maxWidth="l" fillWidth paddingY="32" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <header className={styles.intro}>
        <Column className={styles.introCopy} gap="m">
          <Text className={styles.eyebrow} variant="label-strong-s">
            ABOUT
          </Text>
          <Heading as="h1" variant="display-strong-l">
            A little about me.
          </Heading>
          <Text className={styles.introText} variant="body-default-l" onBackground="neutral-weak">
            {about.intro.description}
          </Text>
          <Row className={styles.location} gap="8" vertical="center">
            <Icon name="globe" onBackground="brand-strong" />
            <Text variant="body-default-s">{person.locationLabel}</Text>
          </Row>
        </Column>
        <Image
          className={styles.portrait}
          src={person.avatar}
          alt={`${person.name} portrait`}
          width={200}
          height={200}
          priority
        />
      </header>

      <div className={styles.cardGrid}>
        <section className={styles.card} aria-labelledby="education-title">
          <div className={styles.cardHeading}>
            <span className={styles.iconBadge} aria-hidden="true">
              <Icon name="book" onBackground="brand-strong" />
            </span>
            <Heading as="h2" variant="heading-strong-m" id="education-title">
              Education
            </Heading>
          </div>
          <Column gap="s">
            <Heading className={styles.institution} as="h3" variant="heading-strong-m">
              <a
                href={aboutProfile.education.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${aboutProfile.education.institution} official website (opens in a new tab)`}
              >
                {aboutProfile.education.institution}
                <Icon className={styles.inlineLinkIcon} name="openLink" aria-hidden="true" />
              </a>
            </Heading>
            <Text onBackground="neutral-weak">{aboutProfile.education.program}</Text>
            <dl className={styles.educationDetails}>
              <div>
                <dt>Study period</dt>
                <dd>{aboutProfile.education.studyPeriod}</dd>
              </div>
              <div>
                <dt>Enrollment year</dt>
                <dd>{aboutProfile.education.enrollmentYear}</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>{aboutProfile.education.expectedGraduationYear}</dd>
              </div>
              <div>
                <dt>Academic level</dt>
                <dd>{aboutProfile.education.level}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{aboutProfile.education.location}</dd>
              </div>
            </dl>
          </Column>
        </section>

        <section className={styles.card} aria-labelledby="organizations-title">
          <div className={styles.cardHeading}>
            <span className={styles.iconBadge} aria-hidden="true">
              <Icon name="person" onBackground="brand-strong" />
            </span>
            <Heading as="h2" variant="heading-strong-m" id="organizations-title">
              Organizations
            </Heading>
          </div>
          <div className={styles.organizationGrid}>
            {aboutProfile.organizations.map(({ name, membership, location, publicUrl }) => (
              <article className={styles.organization} key={name}>
                <Heading as="h3" variant="heading-strong-s">
                  {name}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {location}
                </Text>
                <Text variant="body-default-s">{membership}</Text>
                <a
                  className={styles.externalLink}
                  href={publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} public page (opens in a new tab)`}
                >
                  Visit public page
                  <Icon name="openLink" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.card} aria-labelledby="languages-title">
          <div className={styles.cardHeading}>
            <span className={styles.iconBadge} aria-hidden="true">
              <Icon name="globe" onBackground="brand-strong" />
            </span>
            <Heading as="h2" variant="heading-strong-m" id="languages-title">
              Languages
            </Heading>
          </div>
          <ul className={styles.languageList}>
            {aboutProfile.languages.map(({ name, proficiency }) => (
              <li key={name}>
                <Text variant="body-strong-m">{name}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {proficiency}
                </Text>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.card} aria-labelledby="certifications-title">
          <div className={styles.cardHeading}>
            <span className={`${styles.iconBadge} ${styles.purpleBadge}`} aria-hidden="true">
              <Icon name="document" onBackground="brand-strong" />
            </span>
            <Heading as="h2" variant="heading-strong-m" id="certifications-title">
              Certifications
            </Heading>
          </div>
          <div className={styles.certificationList}>
            {aboutProfile.certifications.map(({ title, issuer, issueDate, verificationUrl }) => (
              <article className={styles.certification} key={title}>
                <Heading as="h3" variant="heading-strong-s">
                  {title}
                </Heading>
                <dl className={styles.certificationDetails}>
                  <div>
                    <dt>Issued by</dt>
                    <dd>{issuer}</dd>
                  </div>
                  <div>
                    <dt>Issue date</dt>
                    <dd>{issueDate}</dd>
                  </div>
                </dl>
                <a
                  className={styles.externalLink}
                  href={verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify certificate: ${title} (opens in a new tab)`}
                >
                  Verify Certificate
                  <Icon name="openLink" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.card} ${styles.beyondCard}`} aria-labelledby="beyond-title">
          <div className={styles.cardHeading}>
            <span className={`${styles.iconBadge} ${styles.purpleBadge}`} aria-hidden="true">
              <Icon name="person" onBackground="brand-strong" />
            </span>
            <Heading as="h2" variant="heading-strong-m" id="beyond-title">
              Beyond Technology
            </Heading>
          </div>
          <div className={styles.interestGrid}>
            {aboutProfile.interests.map(({ title, description }) => (
              <article className={styles.interest} key={title}>
                <Heading as="h3" variant="heading-strong-s">
                  {title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {description}
                </Text>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Column>
  );
}

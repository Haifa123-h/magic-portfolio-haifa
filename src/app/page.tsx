import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";
import { ProfilePortrait } from "@/components";
import styles from "./home.module.scss";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx fillWidth translateY="8">
        <Column className={styles.profile} fillWidth gap="16" horizontal="center" align="center">
          <Column fillWidth gap="4" horizontal="center" align="center">
            <Heading as="h1" wrap="balance" variant="display-strong-l">
              {person.name}
            </Heading>
            <Text onBackground="neutral-weak" variant="heading-default-m">
              {person.role}
            </Text>
          </Column>
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {home.headline}
          </Heading>
          <Text
            className={styles.introduction}
            wrap="balance"
            onBackground="neutral-weak"
            variant="body-default-l"
          >
            {home.subline}
          </Text>
          <Badge
            background="brand-alpha-weak"
            onBackground="brand-strong"
            textVariant="label-default-s"
            arrow={false}
          >
            {person.availability}
          </Badge>
          <ProfilePortrait variant="home" />
          <Row className={styles.socialLinks} fillWidth gap="8" wrap horizontal="center">
            {social
              .filter((item) => item.essential)
              .map((item) => (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="s"
                  variant="secondary"
                />
              ))}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}

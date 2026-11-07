import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, events, person } from "@/resources";
import { EventShowcase } from "@/components/events/EventShowcase";
import { eventShowcases } from "@/resources/events";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: events.title,
    description: events.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(events.title)}`,
    path: events.path,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Events() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={events.title}
        description={events.description}
        path={events.path}
        image={`/api/og/generate?title=${encodeURIComponent(events.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${events.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="16" marginBottom="40" paddingX="24">
        <Heading marginBottom="8" variant="heading-strong-xl">
          Events
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Professional experiences, meaningful connections, and knowledge gained beyond the
          classroom.
        </Text>
      </Column>
      <Column fillWidth gap="32" paddingX="24">
        {eventShowcases.map((event) => (
          <EventShowcase event={event} key={event.id} />
        ))}
      </Column>
    </Column>
  );
}

import type { EventShowcaseEntry } from "@/resources/events";
import { EventPhotoGallery } from "./EventPhotoGallery";
import styles from "./EventShowcase.module.scss";

interface EventShowcaseProps {
  event: EventShowcaseEntry;
}

export function EventShowcase({ event }: EventShowcaseProps) {
  const softSkills =
    event.softSkills.length > 0 ? event.softSkills : (event.softSkillBadges ?? []);

  return (
    <article className={styles.event}>
      <header className={styles.header}>
        <p className={styles.type}>{event.type}</p>
        <h2>{event.name}</h2>
        <p className={styles.whereWhen}>
          <time>{event.date}</time>
          <span aria-hidden="true">·</span>
          <span>
            {event.venue}, {event.city}
          </span>
        </p>
      </header>

      {event.photos.length > 0 && <EventPhotoGallery eventName={event.name} photos={event.photos} />}

      <dl className={styles.organizations}>
        <div>
          <dt>Organized by</dt>
          <dd>{event.organization}</dd>
        </div>
        {event.supportingOrganizations && event.supportingOrganizations.length > 0 && (
          <div>
            <dt>Supporting organizations</dt>
            <dd>{event.supportingOrganizations.join(", ")}</dd>
          </div>
        )}
        {event.organizers && event.organizers.length > 0 && (
          <div>
            <dt>Organizers</dt>
            <dd>{event.organizers.join(", ")}</dd>
          </div>
        )}
      </dl>

      {event.challengeTheme && (
        <section className={styles.takeaways}>
          <h3>Challenge</h3>
          <p className={styles.challengeTheme}>{event.challengeTheme}</p>
        </section>
      )}

      <p className={styles.participation}>
        <strong>My participation</strong>
        <span>{event.participation}</span>
      </p>

      {event.knowledgeAcquired.length > 0 && (
        <section className={styles.takeaways}>
          <h3>Knowledge Acquired</h3>
          <ul className={styles.skillBadges}>
            {event.knowledgeAcquired.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {softSkills.length > 0 && (
        <section className={styles.takeaways}>
          <h3>Soft skills</h3>
          <ul className={styles.skillBadges}>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

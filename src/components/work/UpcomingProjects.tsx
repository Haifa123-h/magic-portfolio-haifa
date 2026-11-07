import styles from "./UpcomingProjects.module.scss";

const upcomingProjects = [
  {
    number: "01",
    field: "Machine Learning",
    title: "Energy Demand Forecasting",
    description:
      "Exploring data-driven approaches to understand energy consumption patterns and anticipate future demand.",
  },
  {
    number: "02",
    field: "Mobile Development",
    title: "Task Manager",
    description:
      "A productivity-focused application currently taking shape, with a focus on exploring different approaches to mobile app development.",
  },
];

export function UpcomingProjects() {
  return (
    <section className={styles.section} aria-labelledby="upcoming-projects-title">
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={`${styles.questionMark} ${styles.questionMarkLeft}`} aria-hidden="true">
            ?
          </span>
          <h2 id="upcoming-projects-title">What&apos;s Next?</h2>
          <span className={`${styles.questionMark} ${styles.questionMarkRight}`} aria-hidden="true">
            ?
          </span>
        </div>
        <p>A preview of what&apos;s currently taking shape. Stay tuned.</p>
      </header>
      <div className={styles.grid}>
        {upcomingProjects.map((project) => (
          <article className={styles.card} key={project.number}>
            <p className={styles.meta}>
              <span className={styles.number}>PROJECT {project.number}</span>
              <span aria-hidden="true">/</span>
              <span>{project.field}</span>
            </p>
            <h3>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              In Progress
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

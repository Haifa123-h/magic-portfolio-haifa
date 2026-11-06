"use client";

import { useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineDevicePhoneMobile,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import {
  SiAnaconda,
  SiAndroidstudio,
  SiApachehadoop,
  SiC,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGradle,
  SiHtml5,
  SiIntellijidea,
  SiJupyter,
  SiKalilinux,
  SiLinux,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSpring,
  SiSpringboot,
  SiSwagger,
  SiThymeleaf,
  SiVirtualbox,
  SiJson,
  SiJavascript,
} from "react-icons/si";
import { skillCategories, skillFilters } from "@/resources/skills-content";
import type { SkillCategory, SkillStatus } from "@/resources/skills-content";
import styles from "./SkillsCatalog.module.scss";

const categoryIcons: Record<SkillCategory["icon"], IconType> = {
  code: HiOutlineCodeBracket,
  web: HiOutlineGlobeAlt,
  backend: HiOutlineServerStack,
  database: HiOutlineCube,
  testing: HiOutlineBeaker,
  tools: HiOutlineWrenchScrewdriver,
  security: HiOutlineShieldCheck,
  mobile: HiOutlineDevicePhoneMobile,
  data: HiOutlineChartBar,
  bigData: HiOutlineCpuChip,
  foundations: HiOutlineAcademicCap,
};

const technologyLogos: Record<string, IconType> = {
  anaconda: SiAnaconda,
  androidstudio: SiAndroidstudio,
  hadoop: SiApachehadoop,
  c: SiC,
  css: SiCss,
  docker: SiDocker,
  express: SiExpress,
  git: SiGit,
  github: SiGithub,
  gradle: SiGradle,
  html5: SiHtml5,
  intellij: SiIntellijidea,
  javascript: SiJavascript,
  jupyter: SiJupyter,
  kalilinux: SiKalilinux,
  linux: SiLinux,
  nodejs: SiNodedotjs,
  numpy: SiNumpy,
  pandas: SiPandas,
  postgresql: SiPostgresql,
  postman: SiPostman,
  prisma: SiPrisma,
  python: SiPython,
  react: SiReact,
  scikitlearn: SiScikitlearn,
  spring: SiSpring,
  springboot: SiSpringboot,
  swagger: SiSwagger,
  thymeleaf: SiThymeleaf,
  virtualbox: SiVirtualbox,
  json: SiJson,
};

const statusClass: Record<SkillStatus, string> = {
  "Applied in Projects": styles.statusApplied,
  "Practiced in Labs": styles.statusLabs,
  "Coursework / Academic Foundations": styles.statusCoursework,
  "Currently Learning": styles.statusLearning,
};

function TechnologyItem({ name, logo }: { name: string; logo?: string }) {
  const Logo = logo ? technologyLogos[logo] : undefined;

  return (
    <span className={styles.technology}>
      {Logo ? (
        <Logo className={styles.technologyLogo} aria-hidden="true" focusable="false" />
      ) : (
        <span className={styles.technologyMark} aria-hidden="true">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

function SkillSubcategory({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className={styles.subcategory}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const CategoryIcon = categoryIcons[category.icon];

  return (
    <article
      className={`${styles.card} ${category.accent === "turquoise" ? styles.cardTurquoise : ""} ${category.accent === "purple" ? styles.cardPurple : ""}`}
      aria-labelledby={`${category.id}-title`}
      data-category={category.id}
    >
      <header className={styles.cardHeader}>
        <span className={styles.categoryIcon} aria-hidden="true">
          <CategoryIcon />
        </span>
        <div className={styles.cardTitleGroup}>
          <h2 id={`${category.id}-title`}>{category.title}</h2>
          <p>{category.description}</p>
        </div>
        <span className={`${styles.status} ${statusClass[category.status]}`}>
          {category.status}
        </span>
      </header>

      {category.technologies.length > 0 && (
        <div className={styles.technologyList} aria-label={`${category.title} technologies`}>
          {category.technologies.map((technology) => (
            <TechnologyItem
              key={`${technology.name}-${technology.logo ?? "text"}`}
              name={technology.name}
              logo={technology.logo}
            />
          ))}
        </div>
      )}

      <div
        className={`${styles.subcategoryGrid} ${category.id === "cybersecurity" ? styles.securityGrid : ""} ${category.id === "mobile" ? styles.mobileGrid : ""}`}
      >
        {category.subcategories.map((subcategory) => (
          <SkillSubcategory
            key={subcategory.title}
            title={subcategory.title}
            items={subcategory.items}
          />
        ))}
      </div>

      {category.note && (
        <aside className={styles.categoryNote}>
          <h3>{category.note.title}</h3>
          <p>{category.note.description}</p>
          {category.note.items && (
            <ul>
              {category.note.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {category.note.groups?.map((group) => (
            <section className={styles.noteGroup} key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </aside>
      )}
    </article>
  );
}

export function SkillsCatalog() {
  const [activeFilter, setActiveFilter] = useState<(typeof skillFilters)[number]["id"]>("all");
  const visibleCategories = useMemo(
    () =>
      activeFilter === "all"
        ? skillCategories
        : skillCategories.filter((category) => category.id === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <nav className={styles.filters} aria-label="Filter skill categories">
        {skillFilters.map((filter) => (
          <button
            className={`${styles.filter} ${activeFilter === filter.id ? styles.filterActive : ""}`}
            key={filter.id}
            type="button"
            aria-pressed={activeFilter === filter.id}
            aria-controls="skills-category-results"
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </nav>
      <p className={styles.resultCount} aria-live="polite">
        Showing {visibleCategories.length} of {skillCategories.length} skill categories
      </p>
      <div id="skills-category-results" className={styles.categoryGrid}>
        {visibleCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}

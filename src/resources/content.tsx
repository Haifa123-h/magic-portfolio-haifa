import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text } from "@once-ui-system/core";
import { aboutProfile } from "./about-content";

const person: Person = {
  firstName: "Haifa",
  lastName: "Kechiche",
  name: "Haifa Kechiche",
  role: "Software Engineering Student",
  avatar: "/avatar.jpg",
  cv: {
    href: "/Haifa-Kechiche-CV.pdf",
    filename: "Haifa-Kechiche-CV.pdf",
  },
  email: "kechichehaifa@gmail.com",
  location: "Africa/Tunis",
  locationLabel: "Sousse, Tunisia",
  availability: "Available for PFE internship opportunities",
  languages: ["Arabic", "English", "French"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Haifa123-h",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/haifa-kechiche-254736439/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/haifa_kechiche?psln=eDAyazdoa2l1Yno=/",
    essential: false,
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const homeIntroduction = (
  <>
    I'm a final-year Software Engineering student at Horizon School of Digital Technologies, based
    in Sousse, Tunisia. I'm passionate about building practical software solutions and full-stack
    web applications. I'm currently seeking a PFE internship where I can apply my skills, grow as a
    developer, and contribute to meaningful real-world projects.
  </>
);

const professionalIntroduction = (
  <>{aboutProfile.introduction}</>
);

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  subline: homeIntroduction,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationLabel}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: professionalIntroduction,
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Horizon School of Digital Technologies",
        description: <>Final-year student in Software Engineering and Computer Systems.</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const skills = {
  path: "/skills",
  label: "Technical Skills",
  title: "My Technical Skills",
  description: "The technologies, tools and domains I use, and the areas I'm currently developing.",
};

const projects = {
  path: "/projects",
  label: "Projects",
  title: "Projects",
  description: "Portfolio projects and work samples.",
};

const events = {
  path: "/events",
  label: "Events",
  title: "Events",
  description: "Events, workshops, and community activities.",
};

const activities = {
  path: "/activities",
  label: "Activities",
  title: "Activities",
  description: "Personal and professional activities beyond the main portfolio sections.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, skills, projects, events, activities, gallery };

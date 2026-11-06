export type ProjectTechnology = {
  name: string;
  logo: "react" | "vite";
};

export type ProjectMediaItem =
  | {
      type: "image";
      src: string;
      title: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      type: "video";
      src: string;
      title: string;
      alt: string;
      poster?: string;
    };

export type ProjectShowcaseItem = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  context?: string;
  contribution?: string;
  technologies: ProjectTechnology[];
  completionDate?: string;
  completionDateTime?: string;
  media: ProjectMediaItem[];
  repositoryUrl?: string;
};

export const projectShowcase: ProjectShowcaseItem[] = [
  {
    number: "01",
    slug: "university-exam-monitoring-system",
    category: "Academic group project",
    title: "University Exam Monitoring System",
    description: "A university exam monitoring system completed as an academic group project.",
    context: "The Student Dashboard is one component of the larger group project.",
    contribution: "Student Dashboard interface.",
    technologies: [
      { name: "React", logo: "react" },
      { name: "Vite", logo: "vite" },
    ],
    completionDate: "April 9, 2026",
    completionDateTime: "2026-04-09",
    repositoryUrl: "https://github.com/Haifa123-h/DashboardStudent.git",
    media: [
      {
        type: "video",
        src: "/images/projects/university-exam-monitoring-system/agile-simulation.mp4",
        title: "Agile Project Simulation",
        alt: "Video demonstration of the Agile project simulation.",
        poster: "/images/projects/university-exam-monitoring-system/dashboard-dark.jpeg",
      },
      {
        type: "image",
        src: "/images/projects/university-exam-monitoring-system/dashboard-dark.jpeg",
        title: "Student Dashboard — dark theme",
        alt: "Student Dashboard showing upcoming exams, alerts, user information, notifications, and recent grades in dark theme.",
        width: 1600,
        height: 714,
      },
      {
        type: "image",
        src: "/images/projects/university-exam-monitoring-system/dashboard-light.jpeg",
        title: "Student Dashboard — light theme",
        alt: "Student Dashboard showing upcoming exams, user information, notifications, and recent grades in light theme.",
        width: 1600,
        height: 744,
      },
      {
        type: "image",
        src: "/images/projects/university-exam-monitoring-system/grades-overview.jpeg",
        title: "Grades overview",
        alt: "Grades interface with semester overview, credits earned, filters, and grade records.",
        width: 1600,
        height: 734,
      },
      {
        type: "image",
        src: "/images/projects/university-exam-monitoring-system/exam-timetable.jpeg",
        title: "Exam timetable",
        alt: "Exam timetable showing exam cards arranged by date, with semester, type, and session filters.",
        width: 1600,
        height: 688,
      },
      {
        type: "image",
        src: "/images/projects/university-exam-monitoring-system/student-requests.jpeg",
        title: "Student requests",
        alt: "Student requests interface with a request form, request history, and administration responses.",
        width: 1600,
        height: 716,
      },
    ],
  },
  {
    number: "02",
    slug: "ajsd-chatbot-countries-knowledge-base",
    category: "Chatbot",
    title: "AJSD Chatbot — Countries Knowledge Base",
    description: "An AJSD chatbot focused on the Countries Knowledge Base.",
    technologies: [],
    media: [],
  },
  {
    number: "03",
    slug: "task-manager",
    category: "Task management",
    title: "Task Manager",
    description: "A task management project.",
    technologies: [],
    media: [],
  },
];

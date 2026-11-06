export type SkillStatus =
  | "Applied in Projects"
  | "Practiced in Labs"
  | "Coursework / Academic Foundations"
  | "Currently Learning";

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "web" | "backend" | "database" | "testing" | "tools" | "security" | "mobile" | "data" | "bigData" | "foundations";
  status: SkillStatus;
  accent?: "turquoise" | "purple";
  technologies: { name: string; logo?: string }[];
  subcategories: { title: string; items: string[] }[];
  note?: {
    title: string;
    description: string;
    items?: string[];
    groups?: { title: string; items: string[] }[];
  };
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used in coursework and software development practice.",
    icon: "code",
    status: "Coursework / Academic Foundations",
    technologies: [
      { name: "C", logo: "c" },
      { name: "Java" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Python", logo: "python" },
    ],
    subcategories: [
      {
        title: "Language practice",
        items: [
          "C for foundational programming concepts",
          "Java for object-oriented and application development",
          "JavaScript for interactive web interfaces",
          "Python for scripting and data-oriented coursework",
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Building responsive interfaces with modern browser technologies and React.",
    icon: "web",
    status: "Applied in Projects",
    technologies: [
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css" },
      { name: "JavaScript", logo: "javascript" },
      { name: "React.js", logo: "react" },
      { name: "Thymeleaf", logo: "thymeleaf" },
    ],
    subcategories: [
      {
        title: "React & interface patterns",
        items: [
          "React Hooks: useState and useEffect",
          "Context API",
          "Component-based architecture",
          "Routing",
          "Responsive Web Design",
        ],
      },
      {
        title: "Server-rendered views",
        items: ["Thymeleaf templates"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Enterprise Development",
    description: "Application servers, Java frameworks and APIs for web applications.",
    icon: "backend",
    status: "Applied in Projects",
    technologies: [
      { name: "Node.js", logo: "nodejs" },
      { name: "Express.js", logo: "express" },
      { name: "Spring Boot", logo: "springboot" },
      { name: "Spring MVC", logo: "spring" },
      { name: "Jakarta EE" },
      { name: "Java Servlets" },
    ],
    subcategories: [
      {
        title: "API & application patterns",
        items: [
          "REST API development",
          "JWT authentication",
          "Session management and HttpSession",
          "Role-based access control",
          "Request logging filters",
        ],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Management",
    description: "Working with relational data, JSON and application data layers.",
    icon: "database",
    status: "Applied in Projects",
    technologies: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Prisma ORM", logo: "prisma" },
      { name: "SQL" },
      { name: "NoSQL fundamentals" },
      { name: "JSON", logo: "json" },
      { name: "Jackson" },
    ],
    subcategories: [
      {
        title: "Data concepts",
        items: [
          "Database modeling",
          "Relational data management",
          "Data retrieval",
          "Data processing",
        ],
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description: "Checking API behavior and application flows with practical testing tools.",
    icon: "testing",
    status: "Practiced in Labs",
    technologies: [
      { name: "Postman", logo: "postman" },
      { name: "Swagger UI", logo: "swagger" },
    ],
    subcategories: [
      {
        title: "Testing practice",
        items: [
          "API testing",
          "Endpoint verification",
          "HTTP request and response testing",
          "Manual and functional testing",
          "Debugging and troubleshooting",
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Development Environments",
    description: "Development, build, database, notebook and virtualization tools.",
    icon: "tools",
    status: "Coursework / Academic Foundations",
    technologies: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Visual Studio Code", logo: "vscode" },
      { name: "IntelliJ IDEA", logo: "intellij" },
      { name: "Android Studio", logo: "androidstudio" },
      { name: "Maven" },
      { name: "Gradle", logo: "gradle" },
      { name: "WildFly" },
      { name: "Docker", logo: "docker" },
      { name: "Docker Compose" },
      { name: "VirtualBox", logo: "virtualbox" },
      { name: "Jupyter Notebook", logo: "jupyter" },
      { name: "Anaconda", logo: "anaconda" },
      { name: "Postman", logo: "postman" },
      { name: "Swagger UI", logo: "swagger" },
      { name: "Windows PowerShell" },
      { name: "Linux terminal", logo: "linux" },
      { name: "Antigravity" },
    ],
    subcategories: [
      {
        title: "Everyday workflow",
        items: ["Version control", "IDE and editor workflow", "Build tools", "Virtual machines and containers"],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Infrastructure",
    description: "Foundational security concepts, lab environments and investigation workflows.",
    icon: "security",
    status: "Practiced in Labs",
    accent: "turquoise",
    technologies: [
      { name: "Kali Linux", logo: "kalilinux" },
      { name: "Metasploitable" },
      { name: "Nmap" },
      { name: "VirtualBox", logo: "virtualbox" },
      { name: "Docker", logo: "docker" },
      { name: "Docker Compose" },
      { name: "Tracecat" },
      { name: "IRIS" },
    ],
    subcategories: [
      {
        title: "Security Foundations",
        items: [
          "Threats, vulnerabilities and risk",
          "CIA triad",
          "Phishing and social engineering",
          "Malware categories",
          "Authentication and passwords",
        ],
      },
      {
        title: "Systems & Networks",
        items: [
          "IP addresses and ports",
          "Listening services and exposure",
          "Basic firewall concepts",
          "Linux fundamentals and basic hardening",
          "NAT and bridged networking",
          "Nmap service/version detection",
        ],
      },
      {
        title: "Evidence & Investigation",
        items: [
          "Events, logs, alerts and incidents",
          "Web access and authentication logs",
          "Indicators of compromise",
          "Severity and confidence",
          "Correlation windows and detector evaluation",
          "Threat intelligence and MITRE ATT&CK",
          "Incident case management",
        ],
      },
      {
        title: "AI & Automation",
        items: [
          "AI, machine learning and LLMs",
          "Prompting for security analysis",
          "Hallucinations and evidence grounding",
          "Triggers, conditions and actions",
          "Human approval in workflows",
          "Idempotency, recovery and audit trails",
        ],
      },
    ],
    note: {
      title: "Exploring & Practicing",
      description:
        "Developing foundational knowledge through controlled coursework and lab environments.",
    },
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "I'm developing mobile applications through native Android coursework and React Native practice, exploring mobile interfaces, navigation and cross-platform development.",
    icon: "mobile",
    status: "Currently Learning",
    accent: "purple",
    technologies: [
      { name: "Java" },
      { name: "Android Studio", logo: "androidstudio" },
      { name: "Android SDK" },
      { name: "React Native", logo: "react" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Gradle", logo: "gradle" },
    ],
    subcategories: [
      {
        title: "Native Android",
        items: [
          "Java and Android SDK",
          "Activities",
          "Views and ViewGroups",
          "LinearLayout, RelativeLayout and FrameLayout",
          "Button listeners and event handling",
          "Android emulator and Gradle",
        ],
      },
      {
        title: "Cross-platform Development",
        items: [
          "React Native and React components",
          "React hooks",
          "Screen navigation",
          "Mobile UI components",
          "Reusable components",
        ],
      },
    ],
    note: {
      title: "In Progress",
      description: "A current learning focus, not a claim of production experience.",
      groups: [
        {
          title: "Focus & Stacks",
          items: ["Native Android", "React Native"],
        },
        {
          title: "What I'm Building",
          items: ["Mobile applications through native Android coursework and React Native practice"],
        },
        {
          title: "Skills I'm Developing",
          items: [
            "Mobile UI/UX",
            "State management",
            "API integration",
            "App navigation",
            "Build and deployment",
            "Testing and debugging",
          ],
        },
      ],
    },
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    description: "Introductory data analysis and machine-learning workflows from coursework.",
    icon: "data",
    status: "Coursework / Academic Foundations",
    technologies: [
      { name: "Python", logo: "python" },
      { name: "NumPy", logo: "numpy" },
      { name: "Pandas", logo: "pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Scikit-learn", logo: "scikitlearn" },
      { name: "Jupyter Notebook", logo: "jupyter" },
      { name: "Anaconda", logo: "anaconda" },
      { name: "Conda" },
    ],
    subcategories: [
      {
        title: "Analysis & introductory ML",
        items: [
          "Numerical arrays and DataFrames",
          "Data exploration and cleaning",
          "Correlation analysis",
          "Data visualization",
          "train_test_split",
          "Introductory machine-learning workflows",
        ],
      },
    ],
    note: {
      title: "Coursework & Practice",
      description: "An introductory toolkit for data exploration and learning workflows.",
    },
  },
  {
    id: "big-data",
    title: "Big Data",
    description: "Academic foundations of distributed storage and processing systems.",
    icon: "bigData",
    status: "Coursework / Academic Foundations",
    technologies: [{ name: "Hadoop", logo: "hadoop" }, { name: "HDFS" }, { name: "MapReduce" }],
    subcategories: [
      {
        title: "Distributed systems concepts",
        items: [
          "Distributed storage",
          "Distributed processing",
          "Fault tolerance",
          "Scalability",
        ],
      },
    ],
    note: {
      title: "Academic learning",
      description: "Presented as academic learning; no practical implementation is claimed.",
    },
  },
  {
    id: "foundations",
    title: "Computer Science Foundations",
    description: "Core computing concepts developed through Software Engineering studies.",
    icon: "foundations",
    status: "Coursework / Academic Foundations",
    technologies: [],
    subcategories: [
      {
        title: "Computing foundations",
        items: [
          "Data structures and algorithms",
          "Object-oriented programming",
          "Database modeling",
          "Operating systems, process scheduling and synchronization",
          "Computer networks and virtualization",
          "Software testing",
          "XML fundamentals",
          "Service-oriented architecture",
        ],
      },
      {
        title: "Language & information concepts",
        items: [
          "Natural Language Processing",
          "Tokenization and text segmentation",
          "Phonemes and morphemes",
          "Information retrieval",
          "Machine translation concepts",
        ],
      },
    ],
  },
] as const satisfies readonly SkillCategory[];

export const skillFilters = [
  { id: "all", label: "All" },
  { id: "programming", label: "Programming" },
  { id: "web", label: "Web" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "testing", label: "Testing" },
  { id: "tools", label: "Tools" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "mobile", label: "Mobile" },
  { id: "data-science", label: "Data Science" },
  { id: "big-data", label: "Big Data" },
  { id: "foundations", label: "CS Foundations" },
] as const;

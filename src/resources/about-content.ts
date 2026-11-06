export const aboutProfile = {
  introduction:
    "I'm a Software Engineering student at Horizon School of Digital Technologies, based in Sousse, Tunisia. Beyond programming, I enjoy exploring new ideas, learning continuously and taking part in experiences that help me grow both personally and professionally.",
  education: {
    institution: "Horizon School of Digital Technologies",
    website: "https://horizon-university.tn/fr",
    program: "Software Engineering and Computer Systems",
    level: "Final-year student",
    studyPeriod: "2023–2027",
    enrollmentYear: "2023",
    expectedGraduationYear: "2027",
    location: "Sousse, Tunisia",
  },
  certifications: [
    {
      title: "The Bash Shell and Basic Scripting in Linux",
      issuer: "Coursera",
      issueDate: "June 8, 2026",
      verificationUrl: "https://coursera.org/share/94110c62f2673c511ff445ee71cef70c",
    },
    {
      title: "Storing, Retrieving, and Processing JSON Data with Python",
      issuer: "Coursera",
      issueDate: "June 8, 2026",
      verificationUrl: "https://coursera.org/share/c1648bf6da080d90a71865f70d97aef6",
    },
  ],
  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "French", proficiency: "Fluent" },
    { name: "English", proficiency: "Advanced" },
  ],
  organizations: [
    {
      name: "American Corner Sousse",
      membership: "Member",
      location: "Sousse, Tunisia",
      publicUrl: "https://www.facebook.com/americancornersousse/",
    },
    {
      name: "AMIDEAST Sousse",
      membership: "Member",
      location: "Sousse, Tunisia",
      publicUrl: "https://www.amideast.org/tunisia",
    },
  ],
  interests: [
    {
      title: "Reading",
      description: "I enjoy reading books that introduce new perspectives and ideas.",
    },
    {
      title: "Running & Physical Activity",
      description: "Physical activity helps me maintain discipline, balance and focus.",
    },
    {
      title: "Community Participation",
      description:
        "I take part in community activities through American Corner Sousse and AMIDEAST Sousse.",
    },
    {
      title: "Continuous Learning",
      description:
        "I enjoy discovering new subjects, developing new skills and challenging myself beyond the classroom.",
    },
  ],
} as const;

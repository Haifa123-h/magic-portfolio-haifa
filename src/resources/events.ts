export type EventPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type EventShowcaseEntry = {
  id: string;
  name: string;
  type: string;
  date: string;
  city: string;
  venue: string;
  organization: string;
  supportingOrganizations?: string[];
  organizers?: string[];
  participation: string;
  photos: EventPhoto[];
  knowledgeAcquired: string[];
  softSkills: string[];
  softSkillBadges?: string[];
  challengeTheme?: string;
};

export const eventShowcases: EventShowcaseEntry[] = [
  {
    id: "hack-for-health",
    name: "Hack for Health",
    type: "Medical technology innovation event",
    date: "20–21 January 2024",
    city: "Sousse, Tunisia",
    venue: "Faculty of Medicine of Sousse",
    organization: "ATAST FMS Club and ATAST ISSATSo Club",
    supportingOrganizations: ["ATAST Student Section", "ISSATSo", "FMS"],
    participation:
      "Participated in a four-person team with two computer-science students and two medical students. I explored technology-based solutions to a medical condition, discussed our solution with experts during panels and workshops, incorporated their feedback to improve it, and pitched the idea to a jury. Our team placed fourth among 13 participating groups.",
    photos: [
      {
        src: "/images/events/hack-for-health/speaker.png",
        alt: "A speaker holding a microphone during a Hack for Health event session.",
        width: 1151,
        height: 768,
        caption: "Project idea pitching",
      },
      {
        src: "/images/events/hack-for-health/participants-certificates.png",
        alt: "Event participants standing together and holding certificates.",
        width: 1151,
        height: 768,
      },
      {
        src: "/images/events/hack-for-health/event-group.png",
        alt: "A large group of Hack for Health participants and organizers.",
        width: 1151,
        height: 768,
      },
      {
        src: "/images/events/hack-for-health/team-project-table.png",
        alt: "Four team members gathered around project materials at a table.",
        width: 1022,
        height: 768,
        caption: "Our group team members",
      },
      {
        src: "/images/events/hack-for-health/team-voucher.png",
        alt: "A one-month subscription voucher from Rockets Business Center, marked for Team 13.",
        width: 1021,
        height: 768,
      },
      {
        src: "/images/events/hack-for-health/event-session.png",
        alt: "A participant seated in the lecture hall during Hack for Health.",
        width: 1151,
        height: 768,
      },
    ],
    knowledgeAcquired: [
      "Medical subfields",
      "Technology applications to real-world challenges",
      "Problem-solving approaches",
    ],
    softSkills: [
      "Presentation",
      "Communication",
      "Adaptability",
      "Receptiveness to feedback",
      "Teamwork",
      "Problem-solving",
    ],
  },
  {
    id: "hack-tank",
    name: "Hack Tank:",
    type: "Youth innovation challenge",
    date: "17–18 October 2026",
    city: "Sousse, Tunisia",
    venue: "Hotel L’Orient Palace",
    organization: "JCI Sousse",
    participation:
      "With Team “Power Girls,” I worked through the night to shape a solution, then pitched and defended our project before a jury.",
    challengeTheme: "Improve the quality of life of young people through innovative solutions.",
    photos: [
      {
        src: "/images/events/hack-tank/event-photo-1.png",
        alt: "Photo 1 from Team Power Girls’ Hack Tank: challenge in Sousse, Tunisia.",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/events/hack-tank/event-photo-2.png",
        alt: "Photo 2 from Team Power Girls’ Hack Tank: challenge in Sousse, Tunisia.",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/events/hack-tank/event-photo-3.png",
        alt: "Photo 3 from Team Power Girls’ Hack Tank: challenge in Sousse, Tunisia.",
        width: 838,
        height: 768,
      },
      {
        src: "/images/events/hack-tank/event-photo-4.png",
        alt: "Photo 4 from Team Power Girls’ Hack Tank: challenge in Sousse, Tunisia.",
        width: 971,
        height: 768,
      },
      {
        src: "/images/events/hack-tank/event-photo-5.png",
        alt: "Photo 5 from Team Power Girls’ Hack Tank: challenge in Sousse, Tunisia.",
        width: 1024,
        height: 768,
      },
    ],
    knowledgeAcquired: [],
    softSkills: ["Teamwork", "Public speaking", "Communication", "Idea defense"],
  },
  {
    id: "cybersecurity-bootcamp",
    name: "CyberAI: Cybersecurity AI Fundamentals",
    type: "Cybersecurity bootcamp",
    date: "10–31 October 2026 · 16 hours",
    city: "Sousse, Tunisia",
    venue: "AMIDEAST Sousse",
    organization: "American Corner Sousse",
    supportingOrganizations: ["U.S. Embassy Tunis"],
    participation:
      "Participated in the bootcamp, completed all labs and quizzes, interacted with the instructor, and worked with a team on a lab. Practical work included manual security investigation and AI-assisted workflows for investigating threats and securing a network.",
    photos: [
      {
        src: "/images/events/cybersecurity-bootcamp/instructor-session.png",
        alt: "An instructor points to a projected timeline while presenting to bootcamp participants.",
        width: 768,
        height: 1091,
        caption: "Instructor-led session",
      },
      {
        src: "/images/events/cybersecurity-bootcamp/participant-lab.png",
        alt: "Bootcamp participants collaborate at a table with laptops during a practical session.",
        width: 768,
        height: 1029,
        caption: "Participants working on a lab",
      },
    ],
    knowledgeAcquired: [
      "Threat detection",
      "Security investigation",
      "Incident management",
      "Responsible AI-assisted analysis",
      "Security automation",
      "Manual and AI-assisted security workflows",
    ],
    softSkills: [
      "Critical thinking",
      "Analytical thinking",
      "Problem-solving",
      "Teamwork",
      "Communication",
      "Attention to detail",
    ],
  },
];

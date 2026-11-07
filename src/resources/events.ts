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
      "Learned about a medical subfield from medical students and experts.",
      "Explored how technology can be applied to a real-world challenge.",
      "Most valuable takeaway: how to approach finding solutions to real-world challenges.",
    ],
    softSkills: [
      "Presentation and communication: pitched the idea to a jury and discussed it with experts.",
      "Adaptability and receptiveness to feedback: used panel and workshop feedback to improve the solution.",
      "Teamwork: collaborated in an interdisciplinary group of computer-science and medical students.",
      "Problem-solving: explored possible responses to a medical condition.",
    ],
  },
];

// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "bol-founder",
    title: "Founder & Product Developer",
    company: "BOL (Break Your Stage Fear)",
    location: "Kanpur, Uttar Pradesh, India",
    startDate: "december 2025",
    endDate: "Present",
    description:
      "Building an AI-powered public speaking coach that helps users overcome stage fear through speech analysis, confidence scoring, and personalized feedback.",
    achievements: [
      "Developed an AI-powered speech confidence analysis system",
      "Designed complete product UI/UX and user journey",
      "Built the frontend using Next.js with modern responsive design",
      "Created progress tracking and personalized improvement dashboard",
    ],
    type: "work",
  },
  {
    id: "cm-yuva-pitch",
    title: "Startup Finalist",
    company: "CM YUVA Pitch by MSME",
    location: "Uttar Pradesh, India",
    startDate: "march 2026",
    endDate: "march 2026",
    description:
      "Selected among the Top 30 startup teams and presented my AI startup before mentors and industry experts.",
    achievements: [
      "Selected among Top 30 out of 500+ startup teams",
      "Secured \u20b910,000 Cash Prize",
      "Presented startup to investors and mentors",
      "Received recognition for innovation and product execution",
    ],
    type: "leadership",
  },
  {
    id: "college-entrepreneurship-launchpad",
    title: "1st Prize Winner",
    company: "College Entrepreneurship Launchpad",
    location: "College Campus",
    startDate: "April 2026",
    endDate: "April 2026",
    description: "Won first prize for presenting an startup idea with a working prototype and MVP.",
    achievements: [
      "Won 1st Prize in Entrepreneurship Launchpad",
      "Built and demonstrated a working prototype",
      "Recognized for innovation and business potential",
      "Received cash prize(Rs 1500) and appreciation",
    ],
    type: "leadership",
  },
  {
    id: "bit-gorakhpur",

    title: "Startup Participant",

    company: "BIT Gorakhpur Startup Competition",

    location: "Gorakhpur, Uttar Pradesh, India",

    startDate: "June 2026",

    endDate: "June 2026",

    description:
      "Presented BOL (Break Your Stage Fear), an AI-powered public speaking coach, before startup mentors, entrepreneurs, and industry experts, receiving valuable feedback on product vision and market potential.",

    achievements: [
      "Represented my college at an inter-college startup competition",
      "Pitched BOL, an AI-powered public speaking startup",
      "Validated product idea through mentor and jury feedback",
      "Strengthened startup pitching and business communication skills",
    ],

    type: "leadership",
  },
  {
    id: "hr-conclave",
    title: "Project Showcase",
    company: "HR Conclave",
    location: "College Campus",
    startDate: "December 2025",
    endDate: "December 2025",
    description: "Presented my project before HR professionals and industry experts.",
    achievements: [
      "Successfully demonstrated the working project",
      "Received appreciation from HR professionals",
      "Improved presentation and communication skills",
      "Gained valuable industry feedback",
    ],
    type: "leadership",
  },
  {
    id: "samvad-debate",
    title: "Debate Participant",
    company: "Samvad Debate Competition",
    location: "College Campus",
    startDate: "February 2025",
    endDate: "February 2025",
    description:
      "Participated in an inter-college debate competition, improving public speaking and communication skills.",
    achievements: [
      "Represented my college",
      "Improved public speaking confidence",
      "Developed logical thinking and argument skills",
      "Learned effective stage communication",
    ],
    type: "leadership",
  },
];

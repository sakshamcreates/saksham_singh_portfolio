export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

// TODO: Fill in the exact start/end dates — not provided yet.
export const education: Education[] = [
  {
    id: "axis-institute",
    degree: "Bachelor of Technology (B.Tech) [Pursuing] — CSE (AIML)",
    institution: "Axis Institute of Technology and Management",
    location: "Kanpur, India",
    startDate: "2025",
    endDate: "2029",
  },
  {
    id: "st-marys-school",
    degree: "Schooling",
    institution: "St. Mary's School",
    location: "Khaga, Fatehpur, India",
    startDate: "2012",
    endDate: "2024",
  },
];

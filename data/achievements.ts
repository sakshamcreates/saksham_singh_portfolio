export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "college-entrepreneurship-launchpad",
    title: "🥇 1st Prize Winner — College Entrepreneurship Launchpad,(₹1500 prize)",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "cm-yuva-pitch-msme",
    title:
      "Selected among Top 30 out of 500+ startup teams at CM YUVA Pitch by MSME, Cash Prize ₹10,000",
    icon: "medal",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
];

export const achievementTags = ["Startup", "AI", "Full Stack", "Innovation"];

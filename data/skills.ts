// data/skills.ts
export type SkillCategory =
  | "Programming Languages"
  | "Web Technologies"
  | "Databases"
  | "Frameworks & Libraries"
  | "AI / ML & Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  "Programming Languages": [
    { name: "C++", category: "Programming Languages", logoKey: "cplusplus" },
    { name: "JavaScript", category: "Programming Languages", logoKey: "javascript" },
  ],
  "Web Technologies": [
    { name: "HTML", category: "Web Technologies", logoKey: "html5" },
    { name: "CSS", category: "Web Technologies", logoKey: "css3" },
    { name: "React", category: "Web Technologies", logoKey: "react" },
    { name: "Tailwind CSS", category: "Web Technologies", logoKey: "tailwindcss" },
  ],
  Databases: [{ name: "MongoDB", category: "Databases", logoKey: "mongodb" }],
  "Frameworks & Libraries": [
    { name: "Next.js", category: "Frameworks & Libraries", logoKey: "nextjs" },
    { name: "Node.js", category: "Frameworks & Libraries", logoKey: "nodejs" },
    { name: "Express.js", category: "Frameworks & Libraries", logoKey: "express" },
    { name: "FastAPI", category: "Frameworks & Libraries", logoKey: "fastapi" },
  ],
  "AI / ML & Tools": [
    { name: "ONNX Runtime", category: "AI / ML & Tools", logoKey: "onnx" },
    { name: "Git", category: "AI / ML & Tools", logoKey: "git" },
    { name: "GitHub", category: "AI / ML & Tools", logoKey: "github" },
  ],
};

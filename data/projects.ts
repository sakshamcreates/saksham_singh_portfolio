export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
  /** Short status label shown on the card, e.g. "Developed", "Completed", "Coming Soon" */
  status?: string;
  /** Small badge shown over the project image, e.g. "Featured Project", "Coming Soon" */
  badge?: string;
  /** When true, the GitHub/Live buttons render disabled instead of being hidden */
  comingSoon?: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "bol",
    title: "BOL (Break Your Stage Fear)",
    description:
      "BOL is an AI-powered public speaking coach that helps students and professionals overcome stage fear through speech analysis, confidence scoring, and personalized feedback for continuous improvement.",
    longDescription:
      "BOL is an AI-powered public speaking coach that helps students and professionals overcome stage fear through speech analysis, confidence scoring, and personalized feedback for continuous improvement.",
    technologies: ["HTML", "CSS", "JavaScript", "AI Speech Recognition","gemini flash 2.5","deepgram",],
    achievements: [
  "Engineered an AI-driven speech analysis system for confidence and communication assessment",
  "Generated personalized confidence scores and actionable feedback from speech patterns",
  "Integrated Deepgram speech recognition with Gemini Flash for automated performance analysis",
  "Built a structured practice workflow for continuous public speaking improvement",
],
    image: "/images/projects/bol.webp",
    github: "https://github.com/sakshamcreates/Bol-Labs",
    liveUrl: "https://bolcoach.com",
    featured: true,
    status: "Developed",
    badge: "Featured Project",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A premium personal portfolio showcasing my projects, skills, achievements, and journey with modern UI, smooth animations, and responsive design.",
    longDescription:
      "A premium personal portfolio showcasing my projects, skills, achievements, and journey with modern UI, smooth animations, and responsive design. The site features smooth animations, a unique dark mode experience with Three.js stars animation, and a responsive design that works across all devices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Node.js","Vite","React"],
    achievements: [
  "Architected a component-based portfolio using Next.js and TypeScript for maintainable development",
  "Implemented interactive animations and page transitions using Framer Motion",
  "Integrated Three.js to create a dynamic 3D star-field background and immersive UI experience",
  "Built responsive layouts optimized for consistent performance across desktop and mobile",
],
    image: "/images/projects/portfolio.webp",
    github: "https://github.com/sakshamcreates/saksham_singh_portfolio",
    liveUrl: "https://devsaksham.netlify.app/",
    featured: false,
    status: "Completed",
  },
  {
    id: "revalue",
    title: "ReValue",
    description:
      "ReValue is an electronics recommerce platform that helps users maximize the value of used devices through resale, auctions, component recovery, repair, and scrap pickup.",
    longDescription:
      "ReValue is an electronics recommerce platform that helps users maximize the value of used devices through resale, auctions, component recovery, repair, and scrap pickup. A device photo is classified by an ONNX-served vision model, and the result feeds a valuation engine that recommends the best recovery route, while a Node.js/Express API handles marketplace listings, live auctions, matching, and pickup scheduling.",
    technologies: ["React", "Vite", "Express.js","node.js", "FastAPI", "ONNX Runtime","Multer for image uploads","node.js"],
    achievements: [
  "Built an AI-driven device classification and valuation pipeline using ONNX Runtime",
  "Developed automated recovery recommendations based on device condition and estimated value",
  "Implemented marketplace listings, live auctions, bidding, and end-to-end recovery workflows",
  "Built a unified recovery engine to route devices across resale, repair, component recovery, and scrap based on value and condition",
],
    image: "/images/projects/revalue.webp",
    github: "https://github.com/sakshamcreates/IIIT-ALAHABAD",
    liveUrl: "https://revaluee.netlify.app/",
    featured: true,
    status: "Completed",
  },
  {
    id: "college-lens",
    title: "College Lens",
    description:
      "College Lens is an admissions directory that helps students explore Indian engineering colleges, compare them side-by-side, and predict admission chances from their exam rank.",
    longDescription:
      "College Lens lets students search and filter IITs, NITs, and BITS campuses by type and course, compare up to three colleges side-by-side on fees, placements, and cutoffs, and run a rank-based predictor that estimates admission chances (Safe, Likely, Moderate, or Unlikely) using a deterministic heuristic built on historical cutoff data.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Context API"],
    achievements: [
      "Rank-based college predictor with Safe/Likely/Moderate/Unlikely admission estimates",
      "Side-by-side comparison of up to 3 colleges with persisted selection",
      "Detailed college profiles with placements, cutoffs, and course data",
    ],
    image: "/images/projects/college-lens.webp",
    github: "https://github.com/sakshamcreates/college-predictor-internship-task",
    liveUrl: "https://college-predictor-internship-task.vercel.app/predictor",
    featured: true,
    status: "Completed",
  },
  
];

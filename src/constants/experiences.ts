export interface Experience {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Incoming Placement Software Engineer",
    date: "Jun 2025",
    description: "Will be starting soon.",
    technologies: ["Java"],
  },
];

export const projects: Experience[] = [
  {
    title: "Property Tycoon Game (Team Project)",
    date: "2025",
    description:
      "Made a property tycoon game as part of a team project for a software engineering module.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Portfolio",
    date: "2024",
    description: "The website you are on at the moment.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Gojim",
    date: "2023",
    description: "A mobile app that helps users track their fitness progress.",
    technologies: ["React Native", "JavaScript", "Expo", "SQLite"],
  },
  {
    title: "Rick's Ranch",
    date: "2023",
    description: "A top down shooter I made as part of a hackathon.",
    technologies: ["C#", "Unity"],
  },
  {
    title: "GoofScript",
    date: "2024",
    description: "A programming language I made as part of a hackathon.",
    technologies: ["Python"],
  },
  {
    title: "Branch",
    date: "2024",
    description: "A video sharing platform I made for my a-level project.",
    technologies: ["PHP", "HTML", "CSS"],
  },
];

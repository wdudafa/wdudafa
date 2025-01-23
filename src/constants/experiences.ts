export interface Experience {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Incoming Software Engineer Intern",
    date: "Jun 2025",
    description: "Will be starting soon!",
    technologies: [""],
  },
];

export const projects: Experience[] = [
  {
    title: "Unnamed videogame",
    date: "2025",
    description:
      "An environment for me to learn Raylib whilst improving my python skills",
    technologies: ["Python", "Raylib"],
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

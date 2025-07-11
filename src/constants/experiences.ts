export interface Experience {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    date: "Jun 2025 - Present",
    description:
      "Working as a software engineer intern at a top financial firm",
    technologies: ["Java", "SQL"],
  },
];

export const projects: Experience[] = [
  {
    title: "Spam Email Classifier ",
    date: "2025",
    description:
      "Built a Naive Bayes classifier (95.86% accuracy on unseen data) using frequency distributions and add-one smoothing.",
    technologies: ["Python", "Pandas", "NumPy"],
  },
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

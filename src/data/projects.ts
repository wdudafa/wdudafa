export interface Project {
  url: string;
  name: string;
  description: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    url: "glim",
    name: "Glim",
    description:
      "Players are prompted to find an item and take a picture of it. Google Gemini then analyses the image and determines whether or not the item matches the prompt. Player's fastest times are tracked on a global leaderboard and their top 10 speeds are tracked on their personal score board. Made as part of the Hack sussex 2026 Hackathon.",
    externalUrl: "https://github.com/wdudafa/glim",
  },
  {
    url: "spamemailclassifier",
    name: "Spam Email Classifier",
    description: "Built a Naive Bayes classifier (95.86% accuracy on unseen data) using frequency distributions and add-one smoothing.",
    // externalUrl: "https://github.com/wdudafa/applied-machine-learning",
  },
  {
    url: "propertytycoon",
    name: "Property Tycoon",
    description: "Worked in a small dev team to replicate the popular game: Monopoly.",
    // externalUrl: "https://github.com/MsMendham/Software-Eng-Monoply",
  },
  {
    url: "goofscript",
    name: "Goof-Script",
    description:
      "GoofScript allows developers to write code in a playful, borderline silly syntax; it's all about making coding more goofy. To accompany GoofScript, we've also developed a bespoke Integrated Development Environment (IDE), aptly named MemeIDE. It's designed to run GoofScript code seamlessly and nurture an enjoyable coding experience. Made as part of the Hack Sussex 2024 Hackathon.",
    externalUrl: "https://github.com/wdudafa/goof-script-IDE",
  },
  {
    url: "ricksranch",
    name: "Rick's Ranch",
    description:
      "A Wild West Theme Top-Down Shooter, that re-binds the movement keys if you use them to much. The Aim is to beat all the levels of the game without Dying or losing access to all your Keys. Made as part of the Hack Sussex 2023 Game Jam.",
    externalUrl: "https://github.com/wdudafa/hack-sussex-game-jame-2023",
  },
  {
    url: "gojim",
    name: "Gojim",
    description:
      "Gojim is a comprehensive fitness app designed to help you track your workouts and calories, allowing you to stay motivated and achieve your fitness goals. With Gojim, you can easily monitor your progress, record your exercises, and keep an eye on your calorie intake.",
    externalUrl: "https://github.com/wdudafa/gojim",
  },
];

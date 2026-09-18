export interface Project {
  url: string;
  name: string;
  description: string;
  shortDesc: string;
  externalUrl?: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    url: "glim",
    name: "Glim",
    shortDesc: "Scavenger Hunt App",
    description:
      "Players are prompted to find an item and take a picture of it. Google Gemini then analyses the image and determines whether or not the item matches the prompt. Player's fastest times are tracked on a global leaderboard and their top 10 speeds are tracked on their personal score board. Made as part of the Hack sussex 2026 Hackathon.",
    externalUrl: "https://github.com/wdudafa/glim",
    image: "glim.png",
    imageAlt: "Glim logo",
  },
  {
    url: "spamemailclassifier",
    name: "Spam Email Classifier",
    shortDesc: "Spam Detection Tool",
    description:
      "Built a Naive Bayes classifier (95.86% accuracy on unseen data) using frequency distributions and add-one smoothing. Made as part of univeristy coursework",
  },
  {
    url: "propertytycoon",
    name: "Property Tycoon",
    shortDesc: "Monopoly Like Game",
    description:
      "Worked in a small dev team to replicate the popular game: Monopoly. Made as part of univeristy coursework",
  },
  {
    url: "goofscript",
    name: "Goof-Script",
    shortDesc: "Interpreted Programming Language",
    description:
      "GoofScript allows developers to write code in a playful, borderline silly syntax. To accompany GoofScript, we've also developed a bespoke Integrated Development Environment (IDE), aptly named MemeIDE. It's designed to run GoofScript code seamlessly and make an enjoyable coding experience. Made as part of the Hack Sussex 2024 Hackathon.",
    externalUrl: "https://github.com/wdudafa/goof-script-IDE",
    image: "goofscript.jpeg",
    imageAlt:
      "Photo of me giving presentation of project to the audience and judges",
  },
  {
    url: "ricksranch",
    name: "Rick's Ranch",
    shortDesc: "Top Down Shooter Game",
    description:
      "A Wild West Theme Top-Down Shooter, that re-binds the movement keys if you use them to much. The Aim is to beat all the levels of the game without Dying or losing access to all your Keys. Made as part of the Hack Sussex 2023 Game Jam.",
    externalUrl: "https://github.com/wdudafa/hack-sussex-game-jame-2023",
    image: "ricksranch.jpg",
    imageAlt: "Rick's ranch gameplay",
  },
  {
    url: "gojim",
    name: "Gojim",
    shortDesc: "Workout and Food Tracking App",
    description:
      "Gojim is a comprehensive fitness app designed to help you track your workouts and calories, allowing you to stay motivated and achieve your fitness goals. With Gojim, you can easily monitor your progress, record your exercises, and keep an eye on your calorie intake. Made for the love of the game",
    externalUrl: "https://github.com/wdudafa/gojim",
    image: "gojim.png",
    imageAlt: "Glim logo",
  },
];

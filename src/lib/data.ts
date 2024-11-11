import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Snowlake Theme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    title: "Budget App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    title: "Storage App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    title: "Missio Theme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
];

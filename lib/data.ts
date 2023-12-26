import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import resellify from "@/public/resellify.png";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import salesspectrum from "@/public/salesspectrum.png";
import homyz from "@/public/homyz.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sales Spectrum",
    description:
      "Admin dashboard for data visualization using graphs, piecharts and tables for latest ecommerce business data.",
    tags: ["React", "Tailwind", "Redux", "MongoDB", "Express"],
    imageUrl: salesspectrum,
    link: "https://github.com/KiranDev12/dashboard-frontend",
  },
  {
    title: "Resellify",
    description:
      "A full-stack product resell platform that lets you sell, buy and manage your products.",
    tags: ["React", "Django", "Tailwind", "Postgres", "REST API"],
    imageUrl: resellify,
    link: "https://github.com/KiranDev12/frontend-resellify",
  },
  {
    title: "Homyz",
    description:
      "Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you",
    tags: ["React"],
    imageUrl: homyz,
    link: "https://github.com/KiranDev12/Homyz",
  },
] as const;

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
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const educationData = [
  {
    title: "Kendriya Vidyalaya",
    location: "Mangalore, Karnataka",
    description:
      "Completed my secondary education with a staggering 94.6% marks in my CBSE 10th Board exams",
    icon: React.createElement(FaReact),
    date: "2018-19",
  },
  {
    title: "Narayana PU College",
    location: "Hyderabad, Telengana",
    description:
      "I did my high school in PCM under Telengana state board and secured 95.6%.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "JSS Science and Technology University",
    location: "Mysuru, Karnataka",
    description:
      "I am currently pursuing my B.E in Computer Science and Engineering",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiLinux,
} from "react-icons/si";
import { TbCompass } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaJava } from "react-icons/fa";

export const skills: Record<
  string,
  { name: string; Icon: React.ComponentType<any> }[]
> = {
  Languages: [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Java", Icon: FaJava },
    { name: "SQL", Icon: SiMysql },
  ],
  Frameworks: [
    { name: "React.js", Icon: SiReact },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Material UI", Icon: SiMui },
    { name: "MongoDB", Icon: SiMongodb },
  ],
  "QA Testing": [
    { name: "Manual Testing", Icon: AiOutlineEdit },
    { name: "Smoke & Regression", Icon: BiTestTube },
    { name: "Compatibility", Icon: TbCompass },
    { name: "Exploratory", Icon: BiTestTube },
    { name: "Usability", Icon: AiOutlineEdit },
    { name: "Test Case Design", Icon: AiOutlineEdit },
  ],
  Tools: [
    { name: "Git", Icon: SiGit },
    { name: "Postman", Icon: SiPostman },
    { name: "Vercel", Icon: SiVercel },
    { name: "Firebase", Icon: SiFirebase },
    { name: "Linux", Icon: SiLinux },
    { name: "MongoDB Compass", Icon: TbCompass },
  ],
};

export const experiences = [
  {
    title: "Software Development Intern",
    company: "0101digital",
    duration: "Feb 2024 – May 2024",
    highlights: [
      "Developed and tested RESTful APIs for scalable web applications using Node.js, Express, and MongoDB",
      "Collaborated with the QA team to validate backend responses and perform manual testing using Postman",
      "Contributed to multiple real-world projects, improving data validation and debugging production issues",
      "Worked in Agile sprints, participating in daily stand-ups, sprint reviews, and retrospectives",
    ],
  },
  {
    title: "Data Science Intern",
    company: "IBM SkillBuild",
    duration: "Nov 2023 – Dec 2023",
    highlights: [
      "Participated in a one-month program organized by IBM SkillBuild and CSRBox, gaining foundational knowledge in data science and analytics",
      "Successfully completed the program and received a certificate of achievement",
      "Worked on practical data science projects, applying statistical analysis and machine learning techniques to real-world datasets",
    ],
  },
];

export const projects = [
  {
    title: "Shoppers Stack",
    description:
      "Comprehensive QA testing project on multi-module e-commerce app. Designed 200+ functional, 150+ integration, and 200+ system test cases with 150+ defects identified.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "Regression",
      "WhatsApp",
      "GPay",
      "Amazon",
    ],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Internship",
    duration: "Aug – Nov 2025",
    icon: "✅",
  },

  {
    title: "Doctor Appointment Website",
    description:
      "Full MERN stack application with user, doctor, and admin modules. Implemented secure JWT authentication, appointment booking system, and admin CRUD operations.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "June – July 2025",
    icon: "⚕️",
  },

  {
    title: "ODOP E-Commerce Solution",
    description:
      "Built for SIH 2023 hackathon, an e-commerce platform promoting One District One Product for Jammu & Kashmir. Achieved 6th place in internal hackathon.",
    tags: ["React", "Node.js", "MongoDB", "E-Commerce", "Hackathon"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Hackathon",
    duration: "SIH 2023",
    icon: "🏆",
  },

  {
    title: "Sahoo-blog | The blog App",
    description:
      "A full stack web application using MERN stack for blogging. Implemented user authentication, post creation, image uploads, and responsive design.",
    tags: ["MERN", "JavaScript", "Tailwind", "Cloudinary"],
    liveUrl: "https://sahoo.vercel.app/blog",
    githubUrl: "https://github.com/iKrishnendu/sahoo-blog",
    madeAt: "Personal",
    duration: "-",
    icon: "📝",
  },

  {
    title: "Sahoo | Portfolio Website",
    description:
      "Personal portfolio website showcasing skills, projects, and experience with smooth animations and responsive design.",
    tags: ["React", "JavaScript", "Tailwind", "Firebase"],
    liveUrl: "https://sahoo.vercel.app",
    githubUrl: "https://github.com/iKrishnendu/portfolio",
    madeAt: "Personal",
    duration: "-",
    icon: "💻",
  },

  {
    title: "GitHub API Project",
    description:
      "Tool to fetch GitHub user profile and repositories using GitHub API with search functionality and pagination.",
    tags: ["React", "JavaScript", "Tailwind", "GitHub API"],
    liveUrl: "https://the-github-api.vercel.app/",
    githubUrl: "https://github.com/iKrishnendu/github-api",
    madeAt: "Personal",
    duration: "-",
    icon: "🔎",
  },

  {
    title: "SpeedTest App",
    description:
      "A web application to check internet speed using a speed-testing library. Simple UI with instant measurements.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://github.com/iKrishnendu/speed-test-chrome-extension/blob/main/README.md",
    githubUrl: "https://github.com/iKrishnendu/speed-test-chrome-extension",
    madeAt: "Personal",
    duration: "-",
    icon: "⚡",
  },

  {
    title: "SplitMate",
    description:
      "Expense management and group split app with real-time balance tracking and charts.",
    tags: ["MERN", "JavaScript", "Tailwind", "Chart.js"],
    liveUrl: "",
    githubUrl: "https://github.com/iKrishnendu/splitmate",
    madeAt: "Personal",
    duration: "-",
    icon: "💸",
  },

  {
    title: "Spot AI",
    description:
      "A complete directory of over 1000+ AI tools with search, filtering, categories, and server-side rendering.",
    tags: ["Next.js", "TypeScript", "Node", "Express"],
    liveUrl: "https://spotai.tech/",
    githubUrl: "",
    madeAt: "Professional",
    duration: "-",
    icon: "🤖",
  },

  {
    title: "GreenCycle – Smart Waste Management",
    description:
      "A blockchain-powered waste management system with live bin tracking, reward points, location mapping, and decentralized authentication.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Drizzle ORM",
      "PostgreSQL",
      "Hardhat",
      "Ethers.js",
      "Web3Auth",
      "Leaflet",
    ],
    liveUrl: "",
    githubUrl: "",
    madeAt: "College Project",
    duration: "2024",
    icon: "♻️",
  },

  {
    title: "Video Platform",
    description:
      "End-to-end video streaming platform with uploads, compression, comments, likes, and watch history.",
    tags: ["MERN", "FFmpeg", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "2023 – 2024",
    icon: "📺",
  },

  {
    title: "Job Hiring Platform",
    description:
      "Job portal with recruiter dashboard, role management, applicant tracking system, and resume parsing.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "2024",
    icon: "💼",
  },

  {
    title: "AI Tools Listing Platform",
    description:
      "Directory of 300+ AI tools with category filtering, search, and clean UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "2024",
    icon: "🧠",
  },

  {
    title: "Charity Donation System",
    description:
      "Donation platform using secure Razorpay integration with donor dashboard and live donation tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "2024",
    icon: "❤️",
  },

  {
    title: "End-to-End Encrypted Finance System",
    description:
      "A secure finance tracker with AES encrypted data, JWT authentication, and analytics dashboard.",
    tags: ["Node.js", "React", "MongoDB", "Encryption"],
    liveUrl: "",
    githubUrl: "",
    madeAt: "Personal",
    duration: "2023",
    icon: "🔐",
  },
];

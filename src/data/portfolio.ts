import type { ComponentType, SVGProps } from "react";
import { Server, HardDrive, Network, Scale, Layers, Radio } from "lucide-react";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiSocketdotio,
  SiRazorpay,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiReact,
  SiRedux,
  SiPostman,
  SiGit,
  SiJsonwebtokens,
  SiTailwindcss,
  SiHtml5,
  SiCss,
} from "react-icons/si";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export const personal = {
  name: "Srinivasan N",
  title: "Backend Engineer",
  subtitle: "Node.js  |  Express.js  |  AWS",
  tagline:
    "I build reliable backend systems, scalable APIs, and real-time features for production applications.",
  location: "Chennai, Tamil Nadu, India",
  relocation: "Open to relocation: Bengaluru & Hyderabad",
  email: "srinivasannarayanan863@gmail.com",
  phone: "+91 7305692539",
  linkedin: "https://www.linkedin.com/in/n-srini-vasan-0a627b211/",
  github: "https://github.com/Srinivasan260",
  resumeUrl: "/Srinivasan_Backend_Resume.pdf",
};

export const about = {
  summary: `Backend Engineer with 3+ years of experience building backend and full-stack applications, specializing in Node.js, Express.js, RESTful APIs, MongoDB, MySQL, Prisma ORM, and Mongoose ODM. I design backend services, database schemas, and reliable application workflows, integrate payment gateways and third-party services, and implement secure authentication and authorization.`,
  details: `Hands-on experience deploying and maintaining production applications on AWS EC2 — vertical scaling, troubleshooting production issues, and monitoring server performance. Experienced with real-time communication using Socket.IO and coordinating the work of junior developers. Familiar with Docker and Redis, with an interest in cloud architecture, infrastructure automation, and CI/CD.`,
  highlights: [
    { label: "Years of Experience", value: "3+" },
    { label: "RESTful APIs Shipped", value: "850+" },
    { label: "Production Apps", value: "6+" },
    { label: "Junior Devs Mentored", value: "2" },
  ],
};

type Skill = { name: string; icon: IconComponent };
type SkillGroup = { category: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "JWT Auth", icon: SiJsonwebtokens },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Mongoose", icon: SiMongodb },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS EC2", icon: Server },
      { name: "AWS S3", icon: HardDrive },
      { name: "AWS VPC", icon: Network },
      { name: "AWS ALB", icon: Scale },
      { name: "AWS ASG", icon: Layers },
      { name: "Pub/Sub", icon: Radio },
      { name: "Docker", icon: SiDocker },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Integrations & Messaging",
    items: [
      { name: "Razorpay", icon: SiRazorpay },
      { name: "Cashfree", icon: SiRazorpay },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend Developer",
    company: "Pyramidions Solutions Private Limited",
    period: "Aug 2025 — Present",
    bullets: [
      "Develop and maintain backend systems for multiple production applications: Astro Talk, Tipzy, Sprints, and Saha Dating App — across mobile and web.",
      "Designed, developed, and maintain 850+ RESTful APIs with Node.js and Express.js across multiple modules.",
      "Design and implement database schemas, relationships, and queries using MongoDB, MySQL, Prisma ORM, and Mongoose ODM.",
      "Build backend workflows for live chat, live calls, wallet management, payment processing, e-commerce, matrimony, and user management.",
      "Integrate Razorpay, Cashfree, In-App Purchases (IAP), and Google Play Billing for payment and purchase workflows.",
      "Implement real-time messaging with Socket.IO and Firebase for push notifications and app communication.",
      "Deploy and maintain backend applications on AWS EC2 — perform vertical scaling and monitor production server performance.",
      "Troubleshoot production issues and collaborate with frontend, mobile, and other teams to deliver features.",
      "Guide and coordinate the work of two junior developers to maintain implementation quality.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Refulgenceinc Private Limited",
    period: "Nov 2024 — Jun 2025",
    bullets: [
      "Developed an event management and news automation platform for Kumudam Publications using Node.js, Express.js, and Oracle Database.",
      "Built backend APIs and automated application workflows — contributed to a reported 30% reduction in manual effort.",
      "Integrated Google Gemini API for automated Tamil content generation and ElevenLabs API for text-to-speech conversion.",
      "Implemented JWT-based authentication and authorization to secure APIs and control access.",
      "Supported end-to-end feature development, API integration, database operations, and application testing.",
    ],
  },
  {
    role: "Software Developer",
    company: "VAC Softteck Solutions Private Limited",
    period: "Sep 2023 — Oct 2024",
    bullets: [
      "Developed a GPS-based tracking module for a CRM application to monitor field sales team activities in real time.",
      "Designed and developed backend functionality and interactive dashboards using Node.js, JavaScript, HTML, CSS, and MySQL.",
      "Implemented database operations and API integrations for tracking, reporting, and operational workflows.",
      "Collaborated with the dev team to troubleshoot issues, test features, and improve application functionality.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  domain: string;
};

export const projects: Project[] = [
  {
    name: "Astro Talk",
    description:
      "Backend systems for an astrology consultation platform — live chat, live calls, wallet management, and consultation workflows.",
    stack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay"],
    domain: "Consultation / Real-time",
  },
  {
    name: "Tipzy",
    description:
      "Backend services powering a tipping/engagement application with payment workflows and secure user management.",
    stack: ["Node.js", "Express.js", "MongoDB", "Razorpay", "JWT"],
    domain: "Payments / FinTech",
  },
  {
    name: "Sprints",
    description:
      "Backend APIs for a mobile sports/fitness application — user flows, real-time updates, and third-party integrations.",
    stack: ["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO"],
    domain: "Sports / Mobile",
  },
  {
    name: "Saha Dating App",
    description:
      "Matrimony & dating backend — matching workflows, user management, chat, and subscription billing via IAP / Google Play Billing.",
    stack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "IAP"],
    domain: "Matrimony / Social",
  },
  {
    name: "Kumudam Publications Platform",
    description:
      "Event management and news automation platform. Integrated Google Gemini for Tamil content generation and ElevenLabs for TTS. Reduced manual effort by ~30%.",
    stack: ["Node.js", "Express.js", "Oracle DB", "Gemini API", "ElevenLabs"],
    domain: "Publishing / Automation",
  },
  {
    name: "GPS-based CRM Tracking",
    description:
      "Real-time GPS tracking module for monitoring field sales team activities, with interactive dashboards for ops.",
    stack: ["Node.js", "JavaScript", "MySQL", "HTML/CSS"],
    domain: "CRM / Field Ops",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Guru Nanak College, Chennai",
    period: "Completed Jan 2024",
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc.)",
    institution: "Guru Nanak College, Chennai",
    period: "Completed Jan 2022",
  },
];

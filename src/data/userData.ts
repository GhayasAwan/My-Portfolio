import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const getAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const personalInfo = {
  name: "Ghayas Awan",
  alias: "Ghayas",
  shortAlias: "GA",
  location: "Peshawar, Pakistan",
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "UI/UX Designer",
    "Prompt Engineer",
  ],
  email: "ghayasawan662@gmail.com",
  phone: "03189684905",
  githubUrl: "https://github.com/GhayasAwan",
  linkedinUrl: "https://www.linkedin.com/in/ghayas-awan-a056333a1/",
  portfolioUrl: "",
  college: "",
  collegeUrl: "",
  avatarUrl: getAsset('assets/ghayas-awan-hero.jpeg'),
  status: "Available for Work | Open to Internships",
  aboutText: "Software Engineer passionate about building modern, responsive, and user-friendly web applications.",
  aboutText1: "I am a passionate Software Engineer who enjoys building modern, responsive, and user-friendly web applications. ",
  aboutText2: "I love transforming ideas into functional digital experiences through clean code and thoughtful design. Along with web development, I have experience in UI/UX design, prompt engineering, video editing, social media management, and event management. I am always eager to learn new technologies, improve my skills, and work on projects that solve real-world problems. My goal is to continuously grow as a developer while creating impactful and high-quality digital solutions.",
};

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;
export const whatsappChatUrl = "https://api.whatsapp.com/send?phone=923189684905&text=Hi%20Ghayas%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.";

export const fetchData = [
  { label: "User", value: "ghayas@portfolio" },
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Peshawar, Pakistan" },
  { label: "Email", value: "ghayasawan662@gmail.com" },
  { label: "GitHub", value: "github.com/GhayasAwan" },
  { label: "LinkedIn", value: "linkedin.com/in/ghayas-awan-a056333a1" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github", invertDark: true },
      { name: "VS Code", icon: getAsset('assets/vscode-logo.svg') },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Canva", icon: getAsset('assets/canva-logo.svg') },
      { name: "CapCut", icon: getAsset('assets/capcut-logo.svg'), darkTile: true },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "Responsive Web Design", icon: "https://cdn.simpleicons.org/googlechrome" },
      { name: "UI/UX Design", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Video Editing", icon: getAsset('assets/capcut-logo.svg'), darkTile: true },
      { name: "Social Media", icon: "https://cdn.simpleicons.org/instagram" },
      { name: "Prompt Engineering", icon: getAsset('assets/prompt-engineering-logo.svg') },
      { name: "Event Management", icon: "https://cdn.simpleicons.org/googlecalendar" },
    ],
  },
];

export const facts = [
  "Software Engineer",
  "Responsive Web Design",
  "UI/UX Design",
  "Prompt Engineering",
  "Video Editing",
  "Social Media Management",
  "Event Management",
  "Open to Internships",
];

export const timeline = [
  {
    year: "2026",
    detail:
      "Earned a Soft Skills certification from Pakistan Software Export Board.",
    more:
      "Strengthened professional communication, collaboration, and workplace readiness skills while continuing to grow as a developer.",
  },
];

export const certifications = [
  {
    name: "Soft Skills",
    issuer: "Pakistan Software Export Board (PSEB)",
    year: "2026",
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering (BSSE)",
    institute: "City University of Science & Information Technology",
    years: "2023 - 2027",
    details:
      "Currently pursuing a Bachelor's degree in Software Engineering with a focus on software development, web development, databases, and modern programming technologies.",
  },
];

export const experience = [
  {
    role: "Software Engineer (Student)",
    company: "Zynvex IT and Solutions",
    years: "2026 - Present",
    location: "Pakistan",
    responsibilities: [
      "Developing responsive and user-friendly web applications.",
      "Designing modern UI/UX interfaces using Figma.",
      "Building frontend applications with HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Developing backend functionality using PHP.",
      "Managing source code with Git and GitHub.",
      "Creating digital content and supporting branding through video editing and social media management.",
    ],
  },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ghayasawan662@gmail.com",
    href: gmailComposeUrl,
    color: "text-blue-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 318 9684905",
    href: whatsappChatUrl,
    color: "text-green-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Peshawar, Pakistan",
    href: "",
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/GhayasAwan",
    href: "https://github.com/GhayasAwan",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ghayas-awan-a056333a1",
    href: "https://www.linkedin.com/in/ghayas-awan-a056333a1/",
    color: "text-blue-600",
  },
];

export const projectData = [
  {
    name: "VirtualFit",
    description: "A premium frontend-only e-commerce and virtual fashion trial room prototype featuring a Three.js-powered 3D virtual try-on experience and a seller product dashboard.",
    tech: ["React", "Vite", "Three.js", "Tailwind CSS", "Lucide Icons"],
    category: "WebGL / E-Commerce",
    github: "https://github.com/GhayasAwan/3d-product-project",
  },
  {
    name: "Solvia Codes",
    description: "A modern, interactive agency portfolio showcasing custom software engineering, WebGL integrations, responsive UI/UX, and growth-focused marketing solutions.",
    tech: ["React", "Vite", "Three.js", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
    category: "Web Application",
    github: "https://github.com/GhayasAwan/Solvia-Codes",
    live: "https://www.solvia.codes/",
  },
  {
    name: "Student LMS",
    description: "A full-featured Learning Management System built with PHP and MySQL featuring role-based dashboards (Admin, Instructor, Student), course management, assignment grading, attendance tracking, and timetable scheduling.",
    tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "HTML5"],
    category: "Full-Stack Web App",
    github: "https://github.com/GhayasAwan/student_lms",
  },
];

export const resume = {
  "software-engineer": getAsset('assets/ghayas-awan-cv.pdf'),
};

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  express,
  mysql,
  github,
  Three3js,
  aws,
} from "../assets";
import tekisky from '../assets/company/tekisky.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Kloud Printz",
    icon: tekisky,
    iconBg: "rgba(0, 217, 255, 0.1)",
    date: "Mar 2026 – Present",
    points: [
      "Engineered high-performance full-stack web applications using modern frameworks and technologies.",
      "Developed secure backend services with authentication, database queries, and API integrations.",
      "Designed responsive UI with HTML5, CSS3, Tailwind CSS, and modern JavaScript (ES6+).",
      "Improved application performance through component optimization and clean architecture.",
      "Implemented real-time database features and ensured cross-browser compatibility.",
      "Followed best practices in code structure, scalability, and maintainability.",
    ],
  },
  {
    title: "Team Lead / Technical Manager",
    company_name: "Passion Group",
    icon: tekisky,
    iconBg: "rgba(0, 217, 255, 0.1)",
    date: "Sep 2024 – Present",
    points: [
      "Leading a globally distributed team of developers on full-stack web applications.",
      "Architected scalable MERN-based solutions using React, Node.js, and MongoDB.",
      "Implemented CI/CD pipelines with GitHub Actions and Vercel for streamlined deployments.",
      "Conducted code reviews, sprint planning, backlog grooming, and daily standups (Agile).",
      "Oversaw UI/UX design through Figma, ensuring mobile-first, responsive designs.",
      "Mentored junior developers and ensured best practices in testing, performance, and accessibility.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Modalys",
    icon: tekisky,
    iconBg: "rgba(0, 217, 255, 0.1)",
    date: "Jan 2024 – Sep 2024",
    points: [
      "Designed and implemented responsive front-end interfaces using React.js and Next.js.",
      "Built pixel-perfect UIs from Figma prototypes, following accessibility and responsiveness standards.",
      "Optimized performance using lazy loading, dynamic imports, and Lighthouse audits.",
      "Integrated third-party APIs and managed application state with Redux.",
      "Assisted QA team in manual and automated testing using Cypress and Jest.",
      "Improved site SEO and web vitals by optimizing assets and adhering to best practices.",
    ],
  },
  {
    title: "Team Lead / Finance Manager",
    company_name: "ALL4U Solutions and Tech",
    icon: tekisky,
    iconBg: "rgba(0, 217, 255, 0.1)",
    date: "Dec 2026 – Present",
    points: [
      "Led and managed a globally distributed development team, overseeing full-stack web application projects.",
      "Designed and supervised scalable MERN-stack architectures focused on performance and maintainability.",
      "Managed project workflows, sprint planning, task delegation, and Agile team coordination.",
      "Collaborated with stakeholders to align technical solutions with business objectives.",
      "Oversaw deployment pipelines and release management using GitHub Actions and Vercel.",
      "Directed UI/UX strategy using Figma, ensuring responsive, mobile-first experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Exceptional problem-solver who delivers high-quality, production-ready applications with attention to detail.",
    name: "Alex Thompson",
    designation: "CTO",
    company: "TechStart Inc",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Outstanding developer who consistently exceeds expectations and leads teams effectively.",
    name: "Sarah Chen",
    designation: "Product Manager",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "A true professional who combines technical expertise with excellent communication skills.",
    name: "Michael Roberts",
    designation: "Engineering Manager",
    company: "Scale Corp",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "NAV-IN",
    description:
      "Interactive navigation component library with smooth animations, accessibility features, and customizable themes for modern web applications.",
    tags: [
      {
        name: "react",
      },
      {
        name: "typescript",
      },
      {
        name: "tailwind",
      },
      {
        name: "framer-motion",
      },
    ],
    image: "https://via.placeholder.com/400x300/0a0a0a/00d9ff?text=NAV-IN",
    source_code_link: "https://nav-in.vercel.app/",
  },
  {
    name: "NAVDEXS",
    description:
      "Advanced decentralized exchange platform with real-time trading, liquidity pools, and wallet integration for seamless crypto transactions.",
    tags: [
      {
        name: "nextjs",
      },
      {
        name: "web3",
      },
      {
        name: "ethers",
      },
      {
        name: "tailwind",
      },
    ],
    image: "https://via.placeholder.com/400x300/0a0a0a/9333ea?text=NAVDEXS",
    source_code_link: "https://navdexs.vercel.app/",
  },
  {
    name: "Passion X Group",
    description:
      "Corporate website for a business conglomerate featuring dynamic content, multi-language support, and comprehensive service showcases.",
    tags: [
      {
        name: "react",
      },
      {
        name: "nodejs",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: "https://via.placeholder.com/400x300/0a0a0a/ff6600?text=Passion+X+Group",
    source_code_link: "https://www.passionxgroup.com/",
  },
  {
    name: "NAV Store LAC",
    description:
      "Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.",
    tags: [
      {
        name: "nextjs",
      },
      {
        name: "stripe",
      },
      {
        name: "postgresql",
      },
      {
        name: "tailwind",
      },
    ],
    image: "https://via.placeholder.com/400x300/0a0a0a/00d9ff?text=NAV+Store+LAC",
    source_code_link: "https://nav-store-lac.vercel.app/",
  },
  {
    name: "Build All For You",
    description:
      "Construction and renovation service platform with project portfolio, quote calculator, and client collaboration tools.",
    tags: [
      {
        name: "react",
      },
      {
        name: "nodejs",
      },
      {
        name: "express",
      },
      {
        name: "mongodb",
      },
    ],
    image: "https://via.placeholder.com/400x300/0a0a0a/ffcc00?text=Build+All+For+You",
    source_code_link: "https://buildallforyou.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

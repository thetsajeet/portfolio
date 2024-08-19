import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ajeet",
  initials: "T S",
  url: "https://ajeet.io", // TODO: to update after deployment
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "A data scientist by day, full stack developer by night. Always on the hunt for cool projects, coding adventures with a cup of coffee!",
  summary: `TL;DR
  Seeker, Questioner, Doer.
  As a passionate software developer with a keen interest in the crossroads of technology, finance, and startups, I’m on a mission to drive innovation and efficiency at Citi. It's not just about slinging code in any old framework—after all, anyone (or anything) can do that! It’s about crafting clean, maintainable code within solid architectures, documenting the process, and building systems that serve humanity.
  With a strong foundation in programming languages and frameworks, I thrive in fast-paced environments, tackling complex challenges and building scalable solutions. My dedication to continuous learning keeps me at the cutting edge of emerging technologies, ensuring I deliver meaningful impact.
  Outside of coding, I have a deep curiosity for the entrepreneurial world and finance. Whether it’s tracking market trends, exploring investment opportunities, or brainstorming the next big idea, I’m always tuned in to the pulse of the startup ecosystem.
  `,
  avatarUrl: "/me.jpg",
  skills: [
    "Angular",
    "Typescipt",
    "Nodejs",
    "MongoDB",
    "React",
    "C++",
    "Python",
    "Data Science",
    "Machine Learning",
    "AI",
    "Javascript",
    "Git",
    "Linux",
    "Docker",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tsajeet.cpp@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ts-A",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ajeet-t-s/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Citi",
      href: "https://www.citigroup.com/global",
      badges: [],
      location: "Pune",
      title: "Data Scientist",
      logoUrl: "/citi.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Building ML models to enable EComm Surveillance using Python.",
    },
    {
      company: "Citi",
      badges: [],
      href: "https://www.citigroup.com/global",
      location: "Pune",
      title: "Fullstack developer",
      logoUrl: "/citi.png",
      start: "July 2023",
      end: "July 2024",
      description:
        "Developed an ecosystem around policies. In the first 6 months, built a Policy B&E tool that enables users to raise breaches, waivers and dispensations in policies. Received a Bronze Award from the senior leadership team. In the next 6 months, built a smart policy search that enables users to search over 1000s of policies along with advanced filtering, pagination and custom views for grouping different policies together.",
    },
    {
      company: "Finllect",
      href: "https://finllect.ae/",
      badges: [],
      location: "Dubai, UAE",
      title: "Junior Backend Devloper",
      logoUrl: "/finllect.svg",
      start: "Dec 2022",
      end: "March 2023",
      description:
      "Implemented 5 microservices using NodeJS which revolved around building REST APIs, bots, communication workflows, merchant onboarding etc."
    },
    {
      company: "Citi",
      badges: [],
      href: "https://www.citigroup.com/global",
      location: "Remote",
      title: "Technological Analyst Intern",
      logoUrl: "/citi.png",
      start: "May 2022",
      end: "July 2022",
      description:
        "Built a minimalist dashboard for Oracle-hosted databases in Angular. Implemented a full stack application in MERN and deployed it using CI/CD.",
    },
  ],
  education: [
    {
      school: "NIT Trichy",
      href: "https://www.nitt.edu/",
      degree: "B.Tech Production Engineering",
      logoUrl: "/nitt.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
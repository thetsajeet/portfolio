import { Icons } from "@/components/icons";
import { FileDownIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ajeet",
  initials: "T S",
  url: "https://ajeet-portfolio.vercel.app/", // TODO: to update after deployment
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Engineer empowering ideas through scalable and efficient code.",
  summary: `TL;DR
  Seeker, Questioner, Doer.
  As a passionate software developer with a keen interest in the crossroads of technology, finance, and startups, I’m on a mission to drive innovation and efficiency at Citi. It's not just about slinging code in any old framework—after all, anyone (or anything) can do that! It’s about crafting clean, maintainable code within solid architectures, documenting the process, and building systems that serve humanity.
  With a strong foundation in programming languages and frameworks, I thrive in fast-paced environments, tackling complex challenges and building scalable solutions. My dedication to continuous learning keeps me at the cutting edge of emerging technologies, ensuring I deliver meaningful impact.
  Outside of coding, I have a deep curiosity for the entrepreneurial world and finance. Whether it’s tracking market trends, exploring investment opportunities, or brainstorming the next big idea, I’m always tuned in to the pulse of the startup ecosystem.
  `,
  avatarUrl: "/me.jpg",
  skills: [
    "Next",
    "React",
    "Angular",
    "Node",
    "Express",
    "MongoDB",
    "SQL",
    "FastAPI",
    "Prisma",
    "C++",
    "Typescipt",
    "Javascript",
    "Python",
    "Bash",
    "AI",
    "Pyspark",
    "Langchain",
    "Git",
    "Linux",
    "CI/CD",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ajeet.tumuluru@gmail.com",
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
      Resume: {
        name: "Download Resume",
        url: "/Ajeet_TS_Resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Citi",
      badges: [],
      href: "https://www.citigroup.com/global",
      location: "Pune",
      title: "Technology Analyst",
      logoUrl: "/citi.png",
      start: "July 2023",
      end: "Present",
      description:
        "🖥️ Built the Policies Portal UI from the ground up using Angular, enabling 10,000+ Citi employees to manage policy breaches, waivers, and dispensations.\
        ⚙️ Designed and developed reusable custom UI components, such as Single Item Transfer, reducing development time for new features by 80%.\
        🔍 Spearheaded the Smart Policy Search UI using Angular, empowering Citi employees to search across 1,000+ policies with advanced filtering, sorting, and custom policy group features.\
        🏗️ Implemented a modular architecture with lazy-loaded feature modules, improving bundle size and First Contentful Paint (FCP) by 25%.\
        🏅 Secured a Gold award at the Citi India Hackathon 2024 for contributions in fintech open-source projects.\
        🥉 Earned a Bronze award in 2023 from Senior Leadership Team for demonstrating exceptional ownership and ensuring timely project delivery.",
      technologies: [
        "Angular",
        "Typescript",
        "Node",
        "Citi Design System",
        "MongoDB",
      ],
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
        "🏗️ Shaped a minimalist Angular dashboard, streamlining the management of 100+ Oracle-hosted databases.\
        📊 Enhanced data clarity and actionable insights by 40% through the integration of interactive charts and data tables.\
        🏅 Secured a Pre-Placement Offer (PPO) by consistently exceeding expectations and delivering high-quality results during the internship.",
      technologies: ["Angular", "Citi Design System", "Typescript", "CI/CD"],
    },
    {
      company: "Finllect",
      href: "https://finllect.ae/",
      badges: [],
      location: "Dubai, UAE",
      title: "Junior Backend Devloper",
      logoUrl: "/finllect.svg",
      start: "Dec 2021",
      end: "March 2022",
      description:
        "🔗 Implemented Finllect API Gateway as a single point of entry for all incoming backend requests.\
        🔧 Designed and developed REST APIs for User, Transaction, and Coupon modules.\
        🚀 Developed asynchronous communication services enabling decoupled and non-blocking interaction between systems, improving scalability.",
      technologies: ["Node", "Express.js", "MongoDB", "CI/CD"],
    },
    {
      company: "Finllect",
      href: "https://finllect.ae/",
      badges: [],
      location: "Dubai, UAE",
      title: "Backend Devloper Intern",
      logoUrl: "/finllect.svg",
      start: "Dec 2020",
      end: "March 2021",
      description:
        "🤝 Collaborated directly with the CTO to build REST APIs using Express and MongoDB.\
        💬 Proposed and implemented a SlackBot for real-time activity notifications, which was widely adopted and appreciated.",
      technologies: ["Node", "Express.js", "MongoDB", "CI/CD"],
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
      description:
        "🎓 First Class with Distinction.\
        ⚽ Professionally trained and played for the university football team NIT Trichy FC.\
        💻 Built and maintained internal tools at Delta Force NIT Trichy as a full-stack developer.",
    },
  ],
  projects: [
    {
      title: "Form Factory",
      href: "https://form-factory-rosy.vercel.app/",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Create customizable, dynamic forms with an intuitive drag-and-drop interface, making form-building seamless and shareable.",
      technologies: [
        "Next",
        "React",
        "Typescript",
        "Tailwind CSS",
        "Zustand",
        "React Form Hook",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://form-factory-rosy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Ts-A/form-factory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/form-factory.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Market",
      href: "https://github.com/Ts-A/Market",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Ecommerce application built using microservices architecture with modules: User, Cart, Product Catalog. Supports gRPC for inter-service communication.",
      technologies: ["Node", "Express", "Redis", "gRPC", "Supabase", "Prisma"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Ts-A/Market",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/market.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Agentic RAG System",
      href: "https://github.com/Ts-A/smart-ai",
      dates: "October 2024 - Present",
      active: false,
      description:
        "Smart AI Agent that answers questions based on user-submitted PDFs and performs web searches to provide comprehensive, real-time information",
      technologies: ["Python", "Langchain", "Langgraph"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Ts-A/smart-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smart-ai.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Atlas.ai",
      href: "",
      dates: "August 2024 - Present",
      active: false,
      description:
        "An AI itinerary planner to plan all your trips. Drop in a prompt and let AI prepare an amazing trip with the best places to visit.",
      technologies: [
        "Angular",
        "Typescript",
        "Gemini AI",
        "Prompt Engineering",
        "PrimeNG",
        "PrimeFlex",
        "Vercel",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://atlas-ui-mocha.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Github",
          href: "https://github.com/Ts-A/atlas.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/atlas.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ngx-placeholder",
      href: "https://www.npmjs.com/package/ngx-placeholder",
      dates: "September 2024",
      active: true,
      description:
        "NPM package to use customisable placeholders in angular applications.",
      technologies: ["Angular", "NPM"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/ngx-placeholder",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Ts-A/ngx-placeholder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ngx-placeholder.png",
      // video: "https://github.com/Ts-A/docc",
    },
    {
      title: "Prodigy",
      href: "https://prodigy-sigma.vercel.app/",
      dates: "September 2023",
      active: false,
      description:
        "NIT Trichy Production Engineering Department's 2023 symposium site.",
      technologies: ["React.js", "TailwindCSS", "MagicUI"],
      links: [
        {
          type: "Website",
          href: "https://prodigy-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Ts-A/Prodigy-Webops",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/prodigy.png",
      // video: "https://github.com/Ts-A/docc",
    },
  ],
} as const;

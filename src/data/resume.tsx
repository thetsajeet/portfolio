import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ajeet",
  initials: "T S",
  url: "https://ajeet-portfolio.vercel.app/", // TODO: to update after deployment
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "A full stack developer on the hunt for cool projects and coding adventures.",
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
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "Next.js",
    "C++",
    "Python",
    "Data Science",
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
        "Analysis on mortgage underwriting in Citi to detect and raise flags if Citi's traders are engaging in unethical or unapproved communication means.",
      technologies: ["Data Science", "ML", "Python", "Pyspark", "Snorkel AI"],
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
        "Built projects from scratch under the Policies Ecosystem. In the first 6 months, built a Policy B&E tool that enables users to raise breaches, waivers and dispensations in policies. Received a Bronze Award from the senior leadership team. In the next 6 months, built a smart policy search that enables users to search over 1000s of policies along with advanced filtering, pagination and custom views for grouping different policies together.",
      technologies: [
        "Angular",
        "Typescript",
        "Citi Design System",
        "NodeJS",
        "MongoDB",
        "Agile",
      ],
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
        "Implemented 5 microservices using Express.js around building REST APIs, bots, communication workflows, merchant onboarding etc.",
      technologies: ["Node.js", "MongoDB", "CI/CD", "Express.js"],
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
        "Built a minimalist dashboard for Oracle-hosted databases in Angular. Led and Implemented a MERN stack application with a team of 6 and deployed it using CI/CD.",
      technologies: [
        "Angular",
        "Typescript",
        "React",
        "Express.js",
        "MongoDB",
        "AWS",
        "CI/CD",
        "RedHat Openshift",
      ],
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
      title: "Atlas.ai",
      href: "https://atlas-ui-mocha.vercel.app/",
      dates: "August 2024 - Present",
      active: true,
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
        {
          type: "Website",
          href: "https://atlas-ui-mocha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
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
      title: "Docc",
      href: "https://docc-two.vercel.app/",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Docc allows users to upload PDFs and ask AI questions on the PDF.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "tRPC",
        "AI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://docc-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Ts-A/docc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/docc.png",
      // video: "https://github.com/Ts-A/docc",
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
      active: true,
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

import ClaudeIcon from "@/components/technologies/Claude";
import ClaudeCodeIcon from "@/components/technologies/ClaudeCode";
import CopilotIcon from "@/components/technologies/Copilot";
import CrewAIIcon from "@/components/technologies/Crewai";
import Figma from "@/components/technologies/Figma";
import LangChainIcon from "@/components/technologies/LangChain";
import LangGraphIcon from "@/components/technologies/LangGraph";
import MCPIcon from "@/components/technologies/Mcp";
import NextJs from "@/components/technologies/NextJs";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: "Agile Ventures",
    position: "AI/ML Engineer",
    location: "Grugram",
    image: "/company/agile.jpeg",
    description: [
      "Developing and deploying Generative AI solutions using LLMs and modern AI frameworks.",
      "Building AI-powered applications using LLMs, RAG pipelines, and vector databases.",
      "Working on AI agents and workflow automation to streamline business processes.",
      "Optimizing AI solutions for performance, accuracy, and real-world use cases.",
    ],
    startDate: "May 2024",
    endDate: "",
    technologies: [
      {
        name: "LangChain",
        href: "https://www.langchain.com/",
        icon: <LangChainIcon />,
      },
      {
        name: "LangGraph",
        href: "https://www.langchain.com/langgraph",
        icon: <LangGraphIcon />,
      },
      {
        name: "Claude Code",
        href: "https://www.claude.com/product/claude-code",
        icon: <ClaudeCodeIcon />,
      },
      {
        name: "Claude",
        href: "https://claude.ai/",
        icon: <ClaudeIcon />,
      },
      {
        name: "Microsoft Copilot Studio",
        href: "https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio",
        icon: <CopilotIcon />,
      },
      {
        name: "MCP",
        href: "https://modelcontextprotocol.io/",
        icon: <MCPIcon />,
      },
      {
        name: "Crew AI",
        href: "https://www.crewai.com/",
        icon: <CrewAIIcon />,
      },
    ],
    website: "https://agileventures.net/",
  },
  {
    isCurrent: false,
    isBlur: false,
    company: "GirlScript Summer of Code (GSSoC)",
    position: "Open Source Contributor",
    location: "Remote",
    image: "/company/gssoc.jpg",
    description: [
      "Contributed to multiple production level open source repositories.",
      "Fixed bugs, implemented features, and improved documentation.",
      "Collaborated with mentors and maintainers via GitHub reviews.",
      "Gained hands on experience with Git, GitHub, and team based development.",
    ],
    startDate: "June 2024",
    endDate: "August 2024",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
    ],
    website: "https://gssoc.girlscript.org/",
    github: "https://github.com/GSSoC24",
    x: "https://x.com/girlscriptsoc",
  },
];

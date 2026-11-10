export interface Project {
  id: string;
  title: string;
  category: string;
  hook: string;
  description?: string;
  image?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  isHosted: boolean;
  featured: boolean;
  metrics?: string;
  architectureHighlights?: string[];
}

export const projectsData: Project[] = [
  {
    id: "geleya",
    title: "Geleya",
    category: "AI / Wellness",
    hook: "An AI-powered wellness companion that helps students monitor their academic workload, understand stress levels, and improve their overall well-being.",
    image: "/images/projects/geleya.jpg",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Material UI",
      "Recharts",
      "React Router",
      "React Hook Form"
    ],
    liveUrl: "https://geleya.pages.dev",
    githubUrl: "https://github.com/kishan-ict/Geleya",
    isHosted: true,
    featured: true
  },
  {
    id: "earthverse",
    title: "EARTHVERSE",
    category: "3D / Creative Web",
    hook: "An immersive browser-based 3D virtual universe where users can explore a futuristic environment, interact with virtual objects, customize avatars, and create their digital identities.",
    image: "/images/projects/earthverse.jpg",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Three.js",
      "WebGL",
      "LocalStorage"
    ],
    liveUrl: "https://kishan-ict.github.io/EARTHVERSE/",
    githubUrl: "https://github.com/kishan-ict/EARTHVERSE",
    isHosted: true,
    featured: true
  },
  {
    id: "campustrace",
    title: "CampusTrace",
    category: "AI / Campus Tech",
    hook: "An AI-powered campus lost-and-found platform that helps students recover lost belongings through intelligent image recognition, secure claim verification, QR-based handovers, and privacy-focused communication.",
    image: "/images/projects/campustrace.jpg",
    stack: [
      "React 19",
      "Vite",
      "Google Gemini API",
      "Firebase Cloud Firestore",
      "QRCode",
      "HTML5-QRCode",
      "Lucide Icons",
      "Cloudflare Pages"
    ],
    liveUrl: "https://campustrace.pages.dev",
    githubUrl: "https://github.com/kishan-ict/CampusTrace",
    isHosted: true,
    featured: true
  },
  {
    id: "llm-council",
    title: "LLM Council",
    category: "AI / Multi-Model",
    hook: "A multi-LLM collaboration platform that brings multiple AI models together to generate independent answers, evaluate each other's responses, rank their insights, and produce a unified answer through a Chairman AI.",
    image: "/images/projects/llm-council.jpg",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "OpenRouter API",
      "HTTPX",
      "React Markdown",
      "JSON-based Storage"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/kishan-ict/llm-council",
    isHosted: false,
    featured: true
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    featured?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Core technologies used to architect production-ready, performant interfaces.",
    skills: [
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript", featured: true },
      { name: "HTML5", featured: true },
      { name: "CSS3", featured: true },
      { name: "Tailwind CSS", featured: true }
    ]
  },
  {
    title: "UI Architecture & Design Systems",
    description: "Libraries and design systems for accessible, tactile micro-interactions.",
    skills: [
      { name: "shadcn/ui", featured: true },
      { name: "Radix UI", featured: true },
      { name: "Framer Motion", featured: true },
      { name: "Responsive Design" },
      { name: "Component Systems" }
    ]
  },
  {
    title: "Creative Web & 3D Experiences",
    description: "Bringing depth and spatial interactions to the browser.",
    skills: [
      { name: "Three.js", featured: true },
      { name: "WebGL", featured: true },
      { name: "Canvas API" },
      { name: "Interactive Shaders" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Services, APIs, and scripting engines supporting frontend apps.",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Python", featured: true },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "HTTPX" }
    ]
  },
  {
    title: "Databases, Cloud & Dev Tools",
    description: "Data stores, continuous delivery, and engineering environments.",
    skills: [
      { name: "Firebase (Firestore)", featured: true },
      { name: "Supabase", featured: true },
      { name: "Oracle FreeSQL" },
      { name: "Docker" },
      { name: "Git & GitHub", featured: true },
      { name: "Cloudflare Pages" }
    ]
  }
];

export const achievementsData = {
  featured: {
    title: "Code Carnival 3.0 — 3rd Place Podium",
    organizer: "ADSC, Atmiya University",
    team: "Event HUB",
    award: "3rd Place",
    problemStatement: "Problem Statement PS-3",
    teamCode: "ZZCF",
    description: "Led the frontend engineering and product ideation under high-pressure hackathon deadlines, constructing an intuitive interface and delivering an impactful solution that clinched 3rd place overall."
  },
  hackathonJourney: {
    stat: "100+",
    title: "Unstop Hackathon Odyssey",
    description: "Actively led and participated in 100+ competitive hackathons and engineering challenges on Unstop. Hone exceptional velocity in rapid prototyping, cross-functional collaboration, real-time bug diagnosis, and shipping usable MVPs within 24-48 hour sprints."
  }
};

export const personalInfo = {
  name: "Kishan M. Patil",
  domain: "kishanm.me",
  role: "Frontend Specialist | Developer | Creative Technologist",
  status: "Open to Remote Internships & Open-Source Collaborations",
  email: "kishanmpatil1@gmail.com",
  socials: {
    github: "https://github.com/kishan-ict",
    linkedin: "https://www.linkedin.com/in/kishan-m-patil-7860k1244"
  },
  educationList: [
    {
      institution: "Marwadi University",
      program: "Diploma in Information and Communication Technology (Diploma-ICT)",
      period: "2025 - 2028",
      status: "Currently Pursuing",
      badge: "NAAC A+ Accredited Campus",
      bannerBg: "bg-[#FDE68A]/70 border-amber-200",
      image: "/images/education/marwadi-university.jpg",
      link: "https://www.marwadiuniversity.ac.in/ict-diploma/",
      linkText: "View Course in Detail",
      focus: [
        "Advanced Web Engineering & Modern Client-Side Architecture",
        "Data Structures, Algorithms & Computational Logic",
        "Network Protocols, Cloud Primitives & Systems Engineering"
      ]
    },
    {
      institution: "Prakruti National School (PNS)",
      program: "Secondary School Certificate — CBSE Board (9th & 10th Grade)",
      period: "2023 - 2025",
      status: "Completed (2023 - 2025)",
      badge: "CBSE Affiliated",
      bannerBg: "bg-[#BFDBFE]/70 border-blue-200",
      image: "/images/education/pns-school.jpg",
      link: "https://prakrutieducation.com",
      linkText: "Visit Official School Website",
      focus: [
        "CBSE Curriculum in Mathematics, Physical Sciences & Computer Basics",
        "Logical Reasoning, Analytical Problem Solving & Team Projects",
        "Active Participation in Science Exhibitions & Academic Competitions"
      ]
    }
  ],
  education: {
    institution: "Marwadi University",
    program: "Diploma in Information and Communication Technology (Diploma-ICT)",
    period: "2025 - 2028",
    status: "Currently Pursuing (2025 - 2028)",
    focus: [
      "Advanced Web Engineering & Modern Client-Side Architecture",
      "Data Structures, Algorithms & Computational Logic",
      "Network Protocols, Cloud Primitives & Systems Engineering"
    ]
  }
};

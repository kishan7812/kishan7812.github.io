export interface Project {
  id: string;
  title: string;
  category: string;
  hook: string;
  problem?: string;
  built?: string;
  role?: string;
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
    problem: "Students struggle to track academic burnout and daily stress patterns in one place.",
    built: "An AI-assisted wellness dashboard with mood/workload analytics and guided check-ins.",
    role: "Lead Frontend Developer & UI Architect",
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
    problem: "Standard web portfolios lack spatial, interactive 3D environments that run natively in browsers.",
    built: "A real-time 3D virtual world with collision detection, avatar customization, and persistent state.",
    role: "Creator, 3D Web & Graphics Developer",
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
    problem: "Campus lost-and-found relies on scattered WhatsApp groups with no verification.",
    built: "An AI image-matching lost-and-found portal with QR handover and Firestore claim verification.",
    role: "Full-Stack Frontend & Gemini AI Integrator",
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
    problem: "Single LLMs can hallucinate or miss perspectives on complex technical prompts.",
    built: "A multi-model council pipeline where models peer-review, rank, and synthesize a final answer.",
    role: "Full-Stack Developer (FastAPI + React)",
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
  },
  certificates: [
    {
      id: "code-carnival-3",
      title: "Code Carnival Season 3 — 3rd Rank Podium",
      issuer: "Atmiya University & GDG Cloud Rajkot",
      date: "October 2026",
      category: "Hackathon",
      badge: "National Hackathon Podium",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      image: "/images/certificates/cert_04.jpg",
      verifyUrl: "",
      note: "National-level 36-hour hackathon organized by Atmiya University, GDG Cloud Rajkot, and ADSC. Secured 3rd Rank overall for Problem Statement PS-3 with Team Event HUB.",
      tags: ["Hackathon", "Podium Finish", "36-Hour Sprint", "Team Lead"]
    },
    {
      id: "cisco-it-essentials",
      title: "IT Essentials: PC Hardware & Software",
      issuer: "Cisco Networking Academy",
      date: "April 2026",
      category: "Systems & Networking",
      badge: "Industry Credential",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      image: "/images/certificates/cert_08.jpg",
      verifyUrl: "",
      note: "Comprehensive certification by Cisco covering PC hardware assembly, Windows/Linux operating system configuration, networking protocols, host security, and hardware diagnostics.",
      tags: ["Cisco", "Hardware", "Operating Systems", "Networking", "Security"]
    },
    {
      id: "cisco-it-essentials-mefgi",
      title: "Cisco IT Essentials 7 — Institutional Honor",
      issuer: "Marwadi Education Foundation's Group of Institutions",
      date: "April 2026",
      category: "Systems & Networking",
      badge: "Institutional Completion",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
      image: "/images/certificates/cert_09.jpg",
      verifyUrl: "",
      note: "Official institutional course completion credential for IT Essentials 7 delivered via MEFGI Cisco Networking Academy Program under Dr. Dharmendrasinh Zala.",
      tags: ["Cisco Academy", "MEFGI", "Systems Engineering"]
    },
    {
      id: "genai-101-mastering-llms",
      title: "GenAI 101: Mastering LLMs",
      issuer: "LetsUpgrade x NSDC & GDG MAD",
      date: "November 2025",
      category: "Artificial Intelligence",
      badge: "Govt NSDC Recognized",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      image: "/images/certificates/cert_01.jpg",
      verifyUrl: "https://letsupgrade.in/verify",
      certNo: "LUEGAlNOV12512",
      note: "Intensive 2-day hands-on masterclass on Large Language Models, prompt engineering, generative architectures, and practical AI application pipelines in collaboration with NSDC.",
      tags: ["GenAI", "LLMs", "NSDC", "GDG MAD", "Prompt Engineering"]
    },
    {
      id: "html-css-bootcamp",
      title: "HTML & CSS Bootcamp Certification",
      issuer: "LetsUpgrade x NSDC & ITM Edutech",
      date: "November 2025",
      category: "Web Development",
      badge: "Govt NSDC Recognized",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      image: "/images/certificates/cert_03.jpg",
      verifyUrl: "https://letsupgrade.in/verify",
      certNo: "LUEHTMLNOV12549",
      note: "Comprehensive frontend foundation bootcamp focused on modern HTML5 semantic markup, responsive CSS3 styling, Flexbox/Grid architectures, and cross-browser interfaces.",
      tags: ["HTML5", "CSS3", "Responsive Design", "NSDC"]
    },
    {
      id: "github-to-income-open-source",
      title: "GitHub to Income: Real Open-Source Opportunities",
      issuer: "CodeQuesters Community x CDN IGNOU",
      date: "June 2026",
      category: "Open Source",
      badge: "Workshop Masterclass",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
      image: "/images/certificates/cert_02.jpg",
      verifyUrl: "",
      note: "Specialized open-source workshop on building career-ready GitHub portfolios, contributing to production repositories, and unlocking opportunities through open-source software.",
      tags: ["GitHub", "Open Source", "CodeQuesters", "CDN IGNOU"]
    },
    {
      id: "upgrad-startup-india",
      title: "Startup India Learning Certification",
      issuer: "upGrad & Startup India Initiative",
      date: "September 2026",
      category: "Entrepreneurship",
      badge: "Startup India / upGrad",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      image: "/images/certificates/cert_05.jpg",
      verifyUrl: "",
      certNo: "5df4e3a5-13a6-493f-adce-4ff571661ef4",
      note: "Certification in entrepreneurial foundations, business model validation, startup scaling mechanics, and venture building through the Startup India educational program.",
      tags: ["Entrepreneurship", "Startup India", "Business Scaling", "upGrad"]
    },
    {
      id: "mitticool-case-study",
      title: "Mitticool Innovation Case Study Competition",
      issuer: "Marketing Club, FMS — Marwadi University",
      date: "February 2026",
      category: "Business Strategy",
      badge: "University Award",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      image: "/images/certificates/cert_07.jpg",
      verifyUrl: "",
      note: "Award of Appreciation in the Case Study Competition 'Mitticool Group: Scaling Clay Innovation from Kitchen to Living' on National Management Day at Marwadi University.",
      tags: ["Marwadi University", "Case Study", "Innovation", "Management"]
    },
    {
      id: "viksit-bharat-young-leaders",
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD)",
      issuer: "Ministry of Youth Affairs and Sports, Govt of India",
      date: "September 2026",
      category: "National Initiative",
      badge: "Govt of India (MY Bharat)",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
      image: "/images/certificates/cert_06.jpg",
      verifyUrl: "",
      note: "National youth participation recognition by the Ministry of Youth Affairs & Sports on the MY Bharat platform for leadership vision and youth contribution toward Viksit Bharat.",
      tags: ["Govt of India", "MY Bharat", "Leadership", "National Initiative"]
    },
    {
      id: "constitution-day-quiz",
      title: "National Constitution Day 2026",
      issuer: "Ministry of Youth Affairs & MyGov India",
      date: "November 2026",
      category: "National Initiative",
      badge: "Govt of India (MyGov)",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
      image: "/images/certificates/cert_10.jpg",
      verifyUrl: "",
      note: "Official national participation credential issued jointly by the Department of Youth Affairs (MY Bharat) and MyGov on the occasion of Constitution Day 2026.",
      tags: ["MyGov", "Govt of India", "Constitution Day"]
    }
  ]
};

export const personalInfo = {
  name: "Kishan M. Patil",
  domain: "kishanm.me",
  role: "Frontend Specialist | Developer | Creative Technologist",
  status: "Open to Remote Internships & Open-Source Collaborations",
  email: "kishanmpatil1@gmail.com",
  socials: {
    github: "https://github.com/kishan-ict",
    linkedin: "https://www.linkedin.com/in/kishan-m-patil-7860k1244",
    twitter: "https://x.com/patil_kish7030",
    instagram: "https://www.instagram.com/kishan.m.patil"
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
      program: "Secondary School — CBSE Board (9th & 10th Grade)",
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
    },
    {
      institution: "Anandathirtha Vidyalaya (ATV)",
      program: "Middle School — CBSE Board (8th Grade)",
      period: "2022 - 2023",
      status: "Completed (2022 - 2023)",
      badge: "CBSE Affiliated",
      bannerBg: "bg-[#FED7AA]/70 border-orange-200",
      image: "/images/education/anandathirtha-vidyalaya.jpg",
      link: "https://anandathirthavidyalaya.com",
      linkText: "Visit Official School Website",
      focus: [
        "CBSE Curriculum in Mathematics, Science, Social Studies & Languages",
        "8th Grade Foundational Academics, Laboratory & Co-curricular Activities",
        "Active Participation in School Seminars, Sports & Student Clubs"
      ]
    },
    {
      institution: "Sarvagnan Vidyapeeth (SVP)",
      program: "Primary & Middle School — Karnataka State Board (Class 5 to 7)",
      period: "2019 - 2022",
      status: "Completed (2019 - 2022)",
      badge: "Karnataka State Board",
      bannerBg: "bg-[#BBF7D0]/70 border-emerald-200",
      image: "/images/education/svp-school.jpg",
      link: "https://www.justdial.com/Bijapur-Karnataka/Sarvagnan-Vidyapeeth-Primary-And-High-School-Behind-Hp-Petrol-Bunk-Talikoti/9999P8352-8352-180330132609-P5F7_BZDET/photos",
      linkText: "Know More About School",
      focus: [
        "Karnataka State Board Curriculum in Mathematics, Science & Languages",
        "Class 5th, 6th and 7th Foundational Studies at Talikoti Campus",
        "Co-curricular Activities, School Presentations & Academic Discipline"
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

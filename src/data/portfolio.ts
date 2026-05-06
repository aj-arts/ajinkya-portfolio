export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
};

export type Project = {
  name: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  year: string;
  winner?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Selected", href: "#selected" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Resume",
    href: "https://github.com/aj-arts/ajinkya-resume/releases/download/latest-master/ajinkya-gokule-master-resume.pdf",
    external: true,
  },
  { label: "Email", href: "mailto:ajinkyagokule@gmail.com" },
  { label: "GitHub", href: "https://github.com/aj-arts", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/ajinkyagokule", external: true },
  { label: "Devpost", href: "https://devpost.com/ajinkyagokule", external: true },
];

export const experiences: Experience[] = [
  {
    role: "Product Management Intern",
    company: "Microsoft, Security Organization",
    date: "Jun – Sep 2026",
    location: "Redmond, WA",
    description:
      "Incoming. Driving security product strategy and roadmap with cross-functional engineering, design, and threat-research partners.",
  },
  {
    role: "Multi-Agent Systems Developer",
    company: "Genesis Team, Oregon State University",
    date: "May 2025 — Present",
    location: "Corvallis, OR",
    description:
      "Owning the roadmap for an IP Patent Identifier agentic app. Leading an eight-person team across AWS, Azure, and Vertex; deploying production AI agents via the Strands SDK on AWS AgentCore with MCP orchestration.",
  },
  {
    role: "Software & Research Intern",
    company: "HP, Engineering Modelling & Analysis Group",
    date: "Feb — Sep 2025",
    location: "Corvallis, OR",
    description:
      "Lead developer on Physics-Informed Neural Networks modelling fluid flow and heat transfer inside microchips. Approximating 3D Navier–Stokes equations for next-generation semiconductor cooling.",
  },
  {
    role: "AI Backend Engineer Intern",
    company: "College of Business, Oregon State University",
    date: "Apr — Jun 2024",
    location: "Corvallis, OR",
    description:
      "Built an interactive RAG chatbot on LlamaIndex for 500+ OSU business freshmen. Shipped on AWS with a professor-facing backend for document uploads and live retrieval.",
  },
  {
    role: "AI Security Research Assistant",
    company: "Secure AI Systems Lab (SAIL), OSU",
    date: "Dec 2023 — Present",
    location: "Corvallis, OR",
    description:
      "Researching adversarial robustness of Implicit Neural Representations and NFT-based image classifiers under PGD attacks across MNIST, CIFAR-10, and CIFAR-100.",
  },
  {
    role: "Research Assistant",
    company: "SoundBendor Lab, OSU",
    date: "Nov 2022 — Jun 2023",
    location: "Corvallis, OR",
    description:
      "Wrote 100+ unit tests for the MusicAI NoteValue class and presented at the URSA Spring Symposium.",
  },
];

export const projects: Project[] = [
  {
    name: "OpenHealth",
    href: "https://judge.beaverhacks.org/cmlfqho300000kv04wi9199a5/projects/cmoq6w17b014pjv042krgzaxf",
    image: "/images/openhealth.jpg",
    alt: "OpenHealth medical bill analysis platform",
    description:
      "Medical-bill transparency platform that turns opaque hospital charges into itemised breakdowns. Built the agent harness, runtime deployment, and a multi-modal vision-to-JSON pipeline that reasons over scanned bills with Nemotron. Won the NVIDIA track at BeaverHacks Spring 2026.",
    tags: ["Nemotron", "Convex", "Vercel AI SDK", "Agentic AI"],
    year: "2026",
    winner: true,
  },
  {
    name: "CatchARide",
    href: "https://devpost.com/software/catcharide",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/364/368/datas/medium.png",
    alt: "CatchARide rideshare interface",
    description:
      "Student rideshare matching drivers and passengers with a custom route-optimisation algorithm on top of Google Routes. Won the Entrepreneurial track at BeaverHacks Spring 2025.",
    tags: ["Google Routes", "OAuth 2.0", "PostgreSQL"],
    year: "2025",
    winner: true,
  },
  {
    name: "GetTheDamClass",
    href: "https://devpost.com/software/getthedamclass",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/154/757/datas/medium.png",
    alt: "GetTheDamClass extension UI",
    description:
      "Chrome extension with 37+ daily users that notifies OSU students of class openings via a reverse-engineered registration API. Won BeaverHacks Fall 2024.",
    tags: ["React", "Docker", "MySQL", "Chrome API"],
    year: "2024",
    winner: true,
  },
  {
    name: "Backcast",
    href: "https://devpost.com/software/timeless-w1ze62",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/908/196/datas/medium.png",
    alt: "Backcast antique radio interface",
    description:
      "A 24/7 AI-generated retro radio show streamed through custom-modified antique radios and a Three.js web interface. Won Hack Through Time Spring 2024.",
    tags: ["Flask", "Three.js", "AWS EC2", "ESP32"],
    year: "2024",
    winner: true,
  },
  {
    name: "Focii",
    href: "https://devpost.com/software/focii",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/636/414/datas/medium.jpeg",
    alt: "Focii focus extension dashboard",
    description:
      "ML-powered Chrome extension that uses word embeddings to block distracting sites, with a 75% error reduction via Nelder–Mead optimisation. Won Hack Education Fall 2023.",
    tags: ["Transformers", "PyTorch", "Chrome API"],
    year: "2023",
    winner: true,
  },
  {
    name: "shortsGenerator",
    href: "https://devpost.com/software/shorts-generator",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/486/510/datas/medium.jpeg",
    alt: "shortsGenerator command line",
    description:
      "CLI that generates AI short-form video end-to-end, collapsing days of editing into seconds. Won BeaverHacks Spring 2023.",
    tags: ["OpenAI", "Python", "Bash"],
    year: "2023",
    winner: true,
  },
  {
    name: "3D Sound Visual Aid",
    href: "https://github.com/Jedi-Vision/jedi-vision-nano-code",
    image: "/images/jedi-vision.png",
    alt: "Jedi-Vision visual aid prototype",
    description:
      "Visual aid for visually-impaired users using Vision Transformers, monocular depth estimation, and 3D spatial audio routed through bone-conduction headphones. Built in partnership with NVIDIA.",
    tags: ["Vision Transformers", "Depth Estimation", "Spatial Audio"],
    year: "2024",
  },
  {
    name: "Campus Companion",
    href: "https://github.com/Carson274/CampusView",
    image: "/images/campus-companion.png",
    alt: "Campus Companion mobile app",
    description:
      "Full-stack mobile app on React Native and FastAPI with a real-time web-scraping microservice. Ran the Agile sprint cadence for an eight-person team.",
    tags: ["React Native", "FastAPI", "NoSQL"],
    year: "2024",
  },
  {
    name: "JOS Operating System",
    href: "https://github.com/aj-arts/jos-operating-system-implementation",
    image: "/images/jos-os.png",
    alt: "JOS operating system console",
    description:
      "32-bit x86 OS built from scratch: bootloader, paging kernel, syscalls, preemptive scheduling, IPC. Booted on QEMU with GDB debugging.",
    tags: ["C", "x86 Assembly", "QEMU"],
    year: "2024",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C / C++",
      "x86 Assembly",
      "SQL",
      "NoSQL",
      "Bash",
      "LaTeX",
      "HTML / CSS",
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PyTorch",
      "LlamaIndex",
      "Strands SDK",
      "AWS AgentCore",
      "Docker",
      "QEMU",
      "Git",
    ],
  },
];

export const aboutPersonal = [
  "Songwriting and DJing.",
  "Snowboarding (carving, not posing).",
  "Dancing — badly, but joyfully.",
];

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
    href: "https://github.com/aj-arts/ajinkya-resume/releases/download/latest/ajinkya-gokule-master-resume.pdf",
    external: true,
  },
  { label: "Email", href: "mailto:ajinkyagokule@gmail.com" },
  { label: "GitHub", href: "https://github.com/aj-arts", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/ajinkyagokule", external: true },
  { label: "Devpost", href: "https://devpost.com/ajinkyagokule", external: true },
];

export const experiences: Experience[] = [
  {
    role: "Cybersecurity Intern",
    company: "Microsoft, Cloud + AI",
    date: "Jun 2026 — Present",
    location: "Redmond, WA",
    description:
      "Working at the intersection of AI and cloud security — benchmarking the safety of frontier AI coding agents, building internal AI tooling for security teams, and hardening production cloud infrastructure.",
  },
  {
    role: "Multi-Agent Systems Developer",
    company: "BeavsBuild, Oregon State University",
    date: "May 2025 — Present",
    location: "Corvallis, OR",
    description:
      "Leading the AWS team building a multi-agent deep research system for automated patent analysis. Integrating the emerging agent stack end-to-end — Strands SDK, AWS AgentCore, MCP tools, and the A2A protocol — while driving the roadmap and cost / latency / security tradeoffs.",
  },
  {
    role: "Software & Research Intern",
    company: "HP, Engineering Modelling & Analysis Group",
    date: "Feb — Sep 2025",
    location: "Corvallis, OR",
    description:
      "Led development of Physics-Informed Neural Networks modelling fluid flow and heat transfer inside microchips — approximating 3D Navier–Stokes equations for semiconductor cooling, with velocity predictions within ±5% of the analytical solution.",
  },
  {
    role: "AI Backend Engineer Intern",
    company: "College of Business, Oregon State University",
    date: "Apr — Jun 2024",
    location: "Corvallis, OR",
    description:
      "Built an interactive RAG chatbot with a team of six for 500+ OSU business freshmen a year. LlamaIndex retrieval, deployed on AWS with a professor-facing backend for custom document uploads.",
  },
  {
    role: "AI Security Research Assistant",
    company: "Secure AI Systems Lab (SAIL), OSU",
    date: "Dec 2023 — Sep 2025",
    location: "Corvallis, OR",
    description:
      "Researched adversarial robustness of Implicit Neural Representation and NFT-based image classifiers — assessing PGD attacks and novel defenses across MNIST, CIFAR-10, and CIFAR-100.",
  },
  {
    role: "Calculus Teaching Assistant",
    company: "College of Science, OSU",
    date: "Jan 2023 — Apr 2024",
    location: "Corvallis, OR",
    description:
      "Tutored 500+ students peer-to-peer in calculus and discrete math; TAs cut the DFW rate from 33% to 7%. Best Teaching Assistant 2023.",
  },
  {
    role: "Research Assistant",
    company: "SoundBendor Lab, OSU",
    date: "Nov 2022 — Jun 2023",
    location: "Corvallis, OR",
    description:
      "Wrote 100 unit tests for the MusicAI NoteValue class and presented the research at the URSA Spring Symposium.",
  },
];

export const projects: Project[] = [
  {
    name: "Trust Me Bro",
    href: "https://trust-me-bro-mu.vercel.app",
    image: "/images/trust-me-bro.png",
    alt: "Trust Me Bro AI agent security benchmark dashboard",
    description:
      "Open-source benchmark testing how frontier AI coding agents resist hidden prompt-injection attacks — 10 models, 1,950 runs, 3 safety modes, on a custom agent runtime that isolates runs without containers. Every model executed hidden attacks; even the safest failed 18% of default-prompt runs. Won the Microsoft Hackathon.",
    tags: ["just-bash", "AI SDK", "Convex", "Next.js"],
    year: "2026",
    winner: true,
  },
  {
    name: "OpenHealth",
    href: "https://github.com/NothingSuspiciousOSU/OpenHealth",
    image: "/images/openhealth.jpg",
    alt: "OpenHealth medical bill analysis platform",
    description:
      "Medical-bill transparency platform that parses uploaded bills and flags likely overcharges. Built a sandboxed ReAct agent with bounded tool-calling and a multi-modal vision-to-JSON pipeline on Nemotron reasoning. Won the NVIDIA track at BeaverHacks Spring 2026.",
    tags: ["Nemotron", "Convex", "Vercel AI SDK", "Agentic AI"],
    year: "2026",
    winner: true,
  },
  {
    name: "OSU Patent Analyzer",
    href: "https://github.com/aj-arts/aime-fullstack",
    image: "/images/patent-analyzer.png",
    alt: "OSU Patent Analyzer multi-agent research interface",
    description:
      "Production multi-agent deep research system automating patent prior-art analysis — specialized agents orchestrated over A2A and Strands SDK, RAG on Bedrock Knowledge Bases, serverless on Lambda with agent runtimes on AgentCore.",
    tags: ["Strands SDK", "AWS AgentCore", "A2A", "Bedrock"],
    year: "2026",
  },
  {
    name: "CatchARide",
    href: "https://devpost.com/software/catcharide",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/364/368/datas/medium.png",
    alt: "CatchARide rideshare interface",
    description:
      "Student rideshare platform matching drivers with spare seats to passengers on overlapping routes, with a custom algorithm on Google's Route Optimization API. Won the Entrepreneurial track at BeaverHacks Spring 2025.",
    tags: ["Google Routes", "OAuth 2.0", "PostgreSQL"],
    year: "2025",
    winner: true,
  },
  {
    name: "RLoRA",
    href: "https://tinyurl.com/rlorafullpaper",
    image: "/images/rlora.png",
    alt: "RLoRA research paper title page",
    description:
      "Co-authored a lightweight RL framework combining QLoRA and GRPO for small language models — 26% less GPU memory, 66% fewer training examples, and half the compute while matching or surpassing SOTA with 57% pass@1 on math-reasoning benchmarks.",
    tags: ["QLoRA", "GRPO", "vLLM", "PyTorch"],
    year: "2025",
  },
  {
    name: "3D Sound Visual Aid",
    href: "https://github.com/Jedi-Vision/jedi-vision-nano-code",
    image: "/images/jedi-vision.png",
    alt: "Jedi-Vision visual aid prototype",
    description:
      "AI visual aid for the visually impaired — YOLO and depth models for real-time object detection and spatial mapping, with 3D audio guidance routed through bone-conduction headphones. Built in partnership with NVIDIA.",
    tags: ["YOLO", "Depth Estimation", "Spatial Audio"],
    year: "2025",
  },
  {
    name: "GetTheDamClass",
    href: "https://devpost.com/software/getthedamclass",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/154/757/datas/medium.png",
    alt: "GetTheDamClass extension UI",
    description:
      "Chrome extension with 37 active users notifying OSU students of class openings via a reverse-engineered registration API and real-time cron checks. Won BeaverHacks Fall 2024.",
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
      "A 24/7 retro radio show with AI-generated music and a jockey discussing each day's historical events, streamed through custom-modified antique radios and a Three.js web interface. Won Hack Through Time Spring 2024.",
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
      "ML-powered Chrome extension using word embeddings to block distracting sites — 75% classification-error reduction via Nelder–Mead optimisation. Won Hack Education Fall 2023.",
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
      "CLI that automates short-form video by synthesizing Reddit content through OpenAI, collapsing days of editing into seconds. Won BeaverHacks Spring 2023.",
    tags: ["OpenAI", "Python", "Bash"],
    year: "2023",
    winner: true,
  },
  {
    name: "Campus Companion",
    href: "https://github.com/Carson274/CampusView",
    image: "/images/campus-companion.png",
    alt: "Campus Companion mobile app",
    description:
      "Full-stack mobile app on React Native and FastAPI with a real-time web-scraping microservice. Led an eight-person team through Agile sprints.",
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
      "SQL",
      "Bash",
      "x86 Assembly",
      "HTML / CSS",
      "LaTeX",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "Transformers",
      "vLLM",
      "QLoRA",
      "GRPO",
      "LlamaIndex",
      "RAG",
      "YOLO",
    ],
  },
  {
    title: "Agents & Cloud",
    skills: [
      "AWS Bedrock",
      "AgentCore",
      "Lambda",
      "Strands SDK",
      "MCP",
      "A2A",
      "Vercel AI SDK",
      "OpenRouter",
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "React / Next.js",
      "FastAPI",
      "Convex",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "QEMU",
      "GDB",
    ],
  },
];

export const aboutPersonal = [
  "Songwriting and DJing.",
  "Snowboarding (carving, not posing).",
  "Dancing — badly, but joyfully.",
];

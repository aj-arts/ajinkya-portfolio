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
  highlights?: string[];
  current?: boolean;
};

export type Project = {
  name: string;
  href?: string;
  image?: string;
  alt?: string;
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
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ajinkyagokule",
    external: true,
  },
  {
    label: "Devpost",
    href: "https://devpost.com/ajinkyagokule",
    external: true,
  },
];

export const experiences: Experience[] = [
  {
    role: "Product Manager / Software Engineer Intern",
    company: "Microsoft, Cloud + AI",
    date: "Jun – Sep 2026",
    location: "Redmond, WA",
    description:
      "Turned an executive request into a shipped planning dashboard through eight stakeholder interviews, requirements, success metrics, and a roadmap. Built an AI agent that turns incident history into runbooks, cutting authoring from days to hours. It won Best Project for AI Innovation among 38 interns, and a second Microsoft organization adopted the framework.",
    highlights: [
      "Led six people to 3rd place out of 200 teams in the Global Intern Hackathon with a benchmark of ten frontier AI models.",
      "Drove 109 security fixes across 57 repositories, verifying fixes beyond ticket closure. Helped build detections for unpinned dependencies across roughly 3,000 pipelines.",
      "Shipped a capacity-planning tool in one week, cut access-related questions by 70% through better onboarding, and contributed a merged fix to Windows Subsystem for Linux.",
    ],
  },
  {
    role: "Software Engineer / Product Lead",
    company: "BeavsBuild, Oregon State University",
    date: "May 2025 – Present",
    current: true,
    location: "Corvallis, OR",
    description:
      "Lead product and engineering for a multi-agent system that researches patent prior art. Own the roadmap and architecture across Strands SDK, AWS AgentCore, A2A, and MCP, working through the tradeoffs between cost, latency, security, and report quality.",
  },
  {
    role: "Software and Research Intern",
    company: "HP, Engineering Modelling & Analysis Group",
    date: "Feb – Sep 2025",
    location: "Corvallis, OR",
    description:
      "Built physics-informed neural networks in PyTorch to model fluid flow and heat transfer inside microchips. Embedded 3D Navier–Stokes and heat equations in the loss, matching analytical profiles within ±5%.",
  },
  {
    role: "Backend Software Engineer Intern",
    company: "College of Business, Oregon State University",
    date: "Apr – Jun 2024",
    location: "Corvallis, OR",
    description:
      "Co-built an advising chatbot with a six-person team for 500+ business freshmen each year. Designed LlamaIndex retrieval around the college’s course catalog and advising documents, then deployed it on AWS with an upload portal professors could use to update its knowledge.",
  },
  {
    role: "Academic Learning Assistant",
    company: "University Housing and Dining, OSU",
    date: "Sep 2024 – Present",
    current: true,
    location: "Corvallis, OR",
    description:
      "Support 300+ residents with study strategy, time management, and campus resources through one-to-one check-ins. Design and run two academic workshops each term, drawing 50+ attendees each.",
  },
  {
    role: "AI Security Research Assistant",
    company: "Secure AI Systems Lab (SAIL), OSU",
    date: "Dec 2023 – Sep 2025",
    location: "Corvallis, OR",
    description:
      "Researched the adversarial robustness of implicit neural representation image classifiers. Evaluated PGD attacks and novel defenses across MNIST, CIFAR-10, and CIFAR-100.",
  },
  {
    role: "Resident Assistant",
    company: "University Housing and Dining, OSU",
    date: "Sep 2023 – Jun 2024",
    location: "Corvallis, OR",
    description:
      "Supported a community of 35 residents through conflict resolution, wellbeing check-ins, and connections to campus resources. Organized four community events per term with 20+ attendees each.",
  },
  {
    role: "Calculus Teaching Assistant",
    company: "College of Science, OSU",
    date: "Jan 2023 – Apr 2024",
    location: "Corvallis, OR",
    description:
      "Tutored 500+ students in calculus and discrete math through small-group problem solving. Contributed to a TA program that brought the D, F, or withdrawal rate from 33% to 7%. Named Best Teaching Assistant in 2023.",
  },
  {
    role: "Music Software Research Assistant",
    company: "SoundBendor Lab, OSU",
    date: "Nov 2022 – Jun 2023",
    location: "Corvallis, OR",
    description:
      "Contributed test-driven development to Dr. Donnelly’s MusicAI Python library and presented the work at OSU’s URSA Spring Symposium.",
  },
];

export const projects: Project[] = [
  {
    name: "Trust Me Bro",
    href: "https://trust-me-bro-mu.vercel.app",
    image: "/images/trust-me-bro.png",
    alt: "Trust Me Bro AI agent security benchmark dashboard",
    description:
      "An open-source prompt-injection benchmark: ten frontier models, 1,950 runs, and three safety modes in a custom isolated runtime. Every model executed an attack; the safest failed 18% of default-prompt runs. Third of 200 teams at the Microsoft Global Intern Hackathon.",
    tags: ["just-bash", "PI SDK", "Convex", "Next.js", "OpenRouter"],
    year: "2026",
    winner: true,
  },
  {
    name: "OpenHealth",
    href: "https://github.com/NothingSuspiciousOSU/OpenHealth",
    image: "/images/openhealth.jpg",
    alt: "OpenHealth medical bill analysis platform",
    description:
      "Medical-bill analysis that extracts procedure codes and charges from PDFs or photos, then compares CPT prices across hospitals, insurers, and locations. Built with Nemotron and a sandboxed ReAct agent. NVIDIA track winner at BeaverHacks Spring 2026.",
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
      "A multi-agent system for patent prior-art research, using A2A orchestration, Strands SDK, retrieval on Bedrock Knowledge Bases, and AWS AgentCore, Lambda, and S3.",
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
      "A student rideshare prototype that matches overlapping routes and splits gas costs using a custom detour-cost algorithm on Google’s Route Optimization API. Won the Entrepreneurial Challenge at BeaverHacks Spring 2025.",
    tags: ["Google Routes", "PostgreSQL", "Flask", "React"],
    year: "2025",
    winner: true,
  },
  {
    name: "RLoRA",
    href: "https://www.linkedin.com/in/ajinkyagokule/overlay/1754432382183/single-media-viewer?type=DOCUMENT&profileId=ACoAADApq5EBZUYWSzWuY7KaeCfBz6J-g3lGix8",
    image: "/images/rlora.png",
    alt: "RLoRA research paper title page",
    description:
      "A lightweight reasoning framework combining QLoRA and GRPO with LoftQ and rank-stabilized LoRA. Reached 57% pass@1 across math benchmarks using 26% less GPU memory, 66% fewer training examples, and half the compute of full-parameter RL.",
    tags: ["QLoRA", "GRPO", "vLLM", "PyTorch"],
    year: "2025",
  },
  {
    name: "Jedi Vision",
    href: "https://github.com/Jedi-Vision/jedi-vision-nano-code",
    image: "/images/jedi-vision.png",
    alt: "Jedi-Vision visual aid prototype",
    description:
      "A wearable visual aid that turns nearby objects into spatial audio through bone-conduction headphones. Runs YOLOv11, ByteTrack, and stereo depth at roughly 30 FPS on Jetson Orin Nano, with ZeroMQ and C++ Steam Audio in 8 GB of RAM.",
    tags: ["NVIDIA Jetson", "YOLOv11", "CUDA", "Steam Audio"],
    year: "2026",
  },
  {
    name: "GetTheDamClass",
    href: "https://devpost.com/software/getthedamclass",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/154/757/datas/medium.png",
    alt: "GetTheDamClass extension UI",
    description:
      "A Chrome extension used by 37 students to catch class openings. Checks a reverse-engineered registration API every minute and sends notifications through a Flask and MySQL backend. Best Overall at BeaverHacks Fall 2024.",
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
      "A 24/7 retro radio station pairing sourced songs with AI-written historical DJ commentary. Streams through an ESP32 inside a $10 thrift-store radio and a Three.js interface. Second place at BeaverHacks Spring 2024.",
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
      "A focus extension that compares website content with study topics through sentence embeddings and cosine similarity. Tuning the classifier’s weights and threshold with Nelder–Mead reduced classification error by 75%. Won Hack Education Fall 2023.",
    tags: ["Transformers", "SciPy", "PyTorch", "Chrome API"],
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
      "A command-line tool that turns Reddit or GPT-written stories into narrated, captioned MP4s with background footage. Second place at BeaverHacks Spring 2023.",
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
      "Led an eight-person team building a campus app for dining menus, clubs, and study spots. React Native frontend, Flask on EC2, BeautifulSoup scraping, and JWT authentication, with API design and delivery organized through Agile sprints.",
    tags: ["React Native", "Flask", "AWS EC2", "BeautifulSoup"],
    year: "2024",
  },
  {
    name: "JOS Operating System",
    href: "https://github.com/aj-arts/jos-operating-system-implementation",
    image: "/images/jos-os.png",
    alt: "JOS operating system console",
    description:
      "A 32-bit x86 operating system with a bootloader, virtual memory, ELF loading, fork, system calls, preemptive round-robin scheduling, traps, and permission-checked IPC. Booted and debugged with QEMU and GDB.",
    tags: ["C", "x86 Assembly", "QEMU"],
    year: "2024",
  },
  {
    name: "Agentic Résumé Pipeline",
    href: "https://github.com/aj-arts/ajinkya-resume",
    description:
      "An agent-assisted LaTeX workflow for tailoring résumés to jobs. GitHub Actions compiles and publishes PDFs to a rolling release, while agent rules and PDF checks keep applications to one page and catch awkward wrapping.",
    tags: ["LaTeX", "GitHub Actions", "AI Agents", "CI/CD"],
    year: "2025",
  },
  {
    name: "GuessTheBeaver",
    description:
      "A Spyfall-inspired browser game built over a hackathon weekend. Flask keeps up to 20 players in sync, with Jinja templates and vanilla JavaScript, deployed on Replit for BeaverHacks Winter 2023.",
    tags: ["Flask", "Jinja", "JavaScript", "Replit"],
    year: "2023",
  },
  {
    name: "Macroeconomic Interactive Graph",
    description:
      "An interactive Desmos model connecting money supply to GDP through linked linear and composite functions. Sliders let students explore the relationships; adopted in a course serving 200+ students each term.",
    tags: ["Desmos", "Demoscript", "Economics"],
    year: "2022",
  },
];

export const projectPeriod = `${Math.min(...projects.map((project) => Number(project.year)))}–${Math.max(...projects.map((project) => Number(project.year)))}`;

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
      "OpenCV",
      "PINNs",
    ],
  },
  {
    title: "Agents & Cloud",
    skills: [
      "AWS Bedrock",
      "AgentCore",
      "Lambda",
      "S3",
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
      "React Native",
      "Flask",
      "FastAPI",
      "Convex",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "Systems & Hardware",
    skills: [
      "NVIDIA Jetson",
      "CUDA",
      "ZeroMQ",
      "Steam Audio",
      "ESP32",
      "QEMU",
      "GDB",
    ],
  },
];

export const recognition = [
  "7× hackathon winner",
  "Best Teaching Assistant · 2023",
  "2× URSA Engage award",
  "7× Dean’s List",
  "Drucilla Shepard Smith Award · 4.0 GPA",
  "Honors College Differential Scholarship",
];

export type ProjectNote = {
  category: string;
  summary: string;
  detail: string;
  evidence: string;
  color: "acid" | "lilac" | "coral" | "ice";
};

export const projectNotes: Record<string, ProjectNote> = {
  "Trust Me Bro": {
    category: "AI security",
    summary:
      "A blind benchmark testing whether frontier coding agents follow malicious instructions hidden in repository files, documentation, and setup scripts.",
    detail:
      "Tested 10 frontier models across 1,950 runs and three safety modes, using fake secrets as tripwires. A Node runtime with a virtual filesystem and shell isolated parallel runs without containers or VMs. Every model executed hidden attacks, with even the safest failing 18% of runs under the default prompt.",
    evidence: "3rd of 200 teams, Microsoft Global Intern Hackathon.",
    color: "acid",
  },
  OpenHealth: {
    category: "Healthcare",
    summary:
      "A medical price comparison platform that extracts billing codes and charges from uploaded PDFs and photos with Nemotron.",
    detail:
      "Built a platform to compare CPT procedure costs across hospitals, insurers, and locations. A Nemotron vision pipeline extracts codes and charges from bill PDFs and photos. A sandboxed ReAct agent uses schema discovery and bounded tool calls over hospital price data to help users understand bills and compare costs.",
    evidence: "NVIDIA track winner, BeaverHacks Spring 2026.",
    color: "ice",
  },
  "OSU Patent Analyzer": {
    category: "Multi-agent systems",
    summary:
      "A multi-agent research system for patent prior-art analysis, with AWS-hosted agents and retrieval through Bedrock Knowledge Bases.",
    detail:
      "Built a multi-agent system for patent prior-art research. Strands SDK agents communicate over A2A, with retrieval backed by Bedrock Knowledge Bases. AWS Lambda and S3 support the serverless TypeScript application, while AWS AgentCore hosts the agent runtimes for the research workflow.",
    evidence: "A2A orchestration with Strands SDK and AWS AgentCore.",
    color: "lilac",
  },
  CatchARide: {
    category: "Student mobility",
    summary:
      "A student rideshare prototype that matches spare seats with riders on overlapping routes and ranks routes by detour cost.",
    detail:
      "Built a student rideshare prototype using Google's Route Optimization API to rank candidate routes by detour cost. Designed the PostgreSQL schema for users, routes, and seat reservations behind the driver and rider flows. Pitched the product and business model at BeaverHacks 2025, winning the Entrepreneurial Challenge.",
    evidence: "Entrepreneurial Challenge winner, BeaverHacks 2025.",
    color: "coral",
  },
  RLoRA: {
    category: "ML research",
    summary:
      "A lightweight QLoRA and GRPO framework that trains small language models to reason with less memory and compute.",
    detail:
      "Co-authored a framework that stabilizes reinforcement learning with LoftQ initialization and rank-stabilized LoRA, keeping KL divergence low over 500 training steps. Reached 57% pass@1 on AIME24, MATH-500, and AMC23 while using 26% less GPU memory, 66% fewer training examples, and half the compute of standard full-parameter RL fine-tuning.",
    evidence: "57% pass@1 with 26% less GPU memory and half the compute.",
    color: "coral",
  },
  "Jedi Vision": {
    category: "Assistive technology",
    summary:
      "A wearable navigation aid that turns stereo video into spatial audio on an NVIDIA Jetson Orin Nano.",
    detail:
      "Built an on-device pipeline with YOLOv11 detection, ByteTrack tracking, and stereo SGBM depth at about 30 FPS with CUDA. ZeroMQ streams object positions to a C++ Steam Audio engine, which renders HRTF spatial cues through bone-conduction headphones. Dockerized the stack to fit within the Jetson Orin Nano's 8 GB of memory.",
    evidence: "NVIDIA-partnered project. About 30 FPS on an 8 GB Jetson.",
    color: "ice",
  },
  GetTheDamClass: {
    category: "Student tools",
    summary:
      "A Chrome extension that checks full OSU classes every minute and emails students when a seat opens.",
    detail:
      "Reverse-engineered OSU's registration API and built a Chrome extension that emails students when seats open in subscribed classes. A per-minute cron job runs behind a Dockerized Flask REST API and MySQL database, with bcrypt-salted PINs and SMTP alerts. The extension reached 37 active student users and won Best Overall at BeaverHacks.",
    evidence: "37 active users. Best Overall, BeaverHacks Fall 2024.",
    color: "acid",
  },
  Backcast: {
    category: "Creative computing",
    summary:
      "A 24/7 retro radio station that pairs sourced music with AI-written historical commentary on a rebuilt radio and the web.",
    detail:
      "Built a continuous radio show with a GPT-written DJ covering that day in history every 15 minutes between retro songs. Automated scripting, Google Cloud TTS voicing, music sourcing, and PyDub mixing. Flask on AWS EC2 streams the show to a $10 Goodwill radio rebuilt with an ESP32 and a Three.js listening room.",
    evidence: "2nd place, BeaverHacks Spring 2024.",
    color: "lilac",
  },
  Focii: {
    category: "Applied ML",
    summary:
      "A Chrome extension that compares page keywords with study topics to block unrelated websites using sentence-transformer embeddings.",
    detail:
      "Built a Chrome extension that compares scraped page keywords with a user's study topics through sentence-transformer embeddings and cosine similarity. Reduced classification error by 75% by averaging each keyword list into one representation, then tuning a weight, error term, and blocking threshold with Nelder-Mead optimization on labeled sites.",
    evidence: "75% reduction in classification errors. Hackathon winner.",
    color: "acid",
  },
  shortsGenerator: {
    category: "Media automation",
    summary:
      "A Python command-line tool that turns Reddit posts or GPT-generated stories into narrated, captioned short-form video files.",
    detail:
      "Built a Python CLI that combines Reddit posts or GPT-generated stories with narration, synchronized captions, and scraped background footage. The pipeline automates content sourcing, scripting, text-to-speech, and video assembly, then exports ready-to-post MP4s. It uses the OpenAI API, PRAW, gTTS, MoviePy, and PyTube.",
    evidence: "2nd place, BeaverHacks Spring 2023.",
    color: "coral",
  },
  "Campus Companion": {
    category: "Mobile development",
    summary:
      "A mobile app for OSU students, built by an eight-person team with planned architecture, API contracts, and data schemas.",
    detail:
      "Led an eight-person team through Agile sprints, planning architecture, API contracts, and data schemas in PlantUML. Built a React Native and Expo app with a Flask backend on AWS EC2. A BeautifulSoup service provides dining menus and club schedules, with caching for fast loads and JWT authentication for student sign-in.",
    evidence:
      "Led eight developers through Agile sprints with GitHub Projects.",
    color: "ice",
  },
  "JOS Operating System": {
    category: "Systems programming",
    summary:
      "A 32-bit x86 operating system built from the bootloader up, with virtual memory, preemptive scheduling, and permissioned IPC.",
    detail:
      "Built an operating system in C and x86 Assembly with paging, system calls, fork, ELF loading, and preemptive round-robin scheduling through timer interrupts. Implemented user/kernel isolation with protected-mode GDT/IDT setup, trap and page-fault handling, and permissioned page-mapping IPC. Used QEMU and GDB to debug kernel triple faults instruction by instruction.",
    evidence: "Custom x86 bootloader and kernel, debugged with QEMU and GDB.",
    color: "lilac",
  },
  "Agentic Résumé Pipeline": {
    category: "Developer tools",
    summary:
      "A CI/CD pipeline where AI agents tailor LaTeX résumés and GitHub Actions compiles and publishes each variant.",
    detail:
      "Built a pipeline that uses AI agents to tailor LaTeX résumé variants to job descriptions. GitHub Actions compiles every variant, publishes PDFs to a rolling release on each push, and cancels stale runs. Reusable agent skills define layout, tone, and content rules, with automated one-page and line-wrap PDF checks.",
    evidence:
      "LaTeX variants, automated PDF checks, and rolling GitHub releases.",
    color: "acid",
  },
  GuessTheBeaver: {
    category: "Multiplayer games",
    summary:
      "A browser-based social deduction game where players question each other to identify a hidden spy before time runs out.",
    detail:
      "Built a Spyfall-style party game at BeaverHacks Winter 2023. Players join browser-based lobbies and question each other to identify a hidden spy. A Flask server synchronizes game state for up to 20 players, with a vanilla JavaScript frontend on Replit. Shipped a playable build over one weekend.",
    evidence:
      "Real-time lobbies for up to 20 players. BeaverHacks Winter 2023.",
    color: "coral",
  },
  "Macroeconomic Interactive Graph": {
    category: "Interactive education",
    summary:
      "An interactive Desmos model that lets students adjust money-supply shocks and see how those changes affect GDP.",
    detail:
      "Built a Desmos model that links money supply to GDP through linear and composite functions. Students adjust sliders to test how money-supply shocks affect the economy. OSU's Macroeconomics course adopted the model for live lecture demonstrations, reaching more than 200 students per term.",
    evidence: "Used in OSU Macroeconomics lectures for 200+ students per term.",
    color: "ice",
  },
};

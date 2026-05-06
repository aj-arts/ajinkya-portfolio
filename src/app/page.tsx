import Image from "next/image";

import { Nav } from "@/components/Nav";
import { Enter } from "@/components/Reveal";
import {
  experiences,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top" className="text-ink">
      <Nav />
      <Hero />
      <Work />
      <Selected />
      <Stack />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[var(--content)] ${className}`}>{children}</div>
  );
}

function SectionHeader({
  label,
  index,
  meta,
}: {
  label: string;
  index: string;
  meta?: string;
}) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[12px] tracking-wider text-ink-faint">
            §{index}
          </span>
          <h2 className="font-sans text-2xl font-light tracking-tight text-ink md:text-3xl">
            {label}
          </h2>
        </div>
        {meta ? (
          <span className="hidden font-mono text-[12px] tracking-wider text-ink-mute sm:block">
            {meta}
          </span>
        ) : null}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="paper-grain relative pb-20 pt-8 md:pb-28 md:pt-14">
      <Container>
        <Enter delay={0}>
          <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono text-[12px] tracking-wide text-ink-soft md:text-[13px]">
            <span className="inline-flex items-center gap-2">
              <span className="pulse-dot" aria-hidden />
              <span>Available · Summer 2026</span>
            </span>
            <span className="text-ink-mute">
              <span className="text-vermillion">↗</span>{" "}
              <span className="text-ink-soft">Microsoft Security</span>{" "}
              <span className="text-ink-mute">/</span> PM Intern, incoming
            </span>
          </div>
        </Enter>

        <Enter
          delay={120}
          as="div"
          className="mt-12 md:mt-20"
          style={{
            fontFeatureSettings: '"ss01", "cv11"',
          }}
        >
          <h1
            className="font-sans font-light tracking-[-0.04em] leading-[0.86] text-ink"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 14rem)",
              fontWeight: 300,
            }}
          >
            <span className="block">Ajinkya</span>
            <span className="block">
              Gokule<span className="text-vermillion">.</span>
            </span>
          </h1>
        </Enter>

        <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-x-12 md:gap-y-10">
          <Enter delay={240} as="div" className="md:col-span-7">
            <p className="max-w-[60ch] text-balance text-lg leading-[1.65] text-ink-soft md:text-xl md:leading-[1.6]">
              Software engineer and AI / multi-agent systems builder. CS and
              MS-AI honors student at Oregon State, leading agent systems on
              the OSU Genesis Team and researching physics-informed neural
              networks at HP. Six-time hackathon winner, two-time research
              symposium presenter, one-time operating-system author.
            </p>
          </Enter>

          <Enter
            delay={320}
            as="div"
            className="md:col-span-4 md:col-start-9"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-faint">
              Currently
            </p>
            <ul className="mt-4 space-y-3 font-sans text-[15px] leading-[1.55] text-ink-soft">
              <li>
                <span className="text-ink">Multi-agent systems</span> on the
                OSU Genesis Team — production agents on AWS AgentCore.
              </li>
              <li>
                <span className="text-ink">Hackathons</span> — most recently
                OpenHealth, an agentic medical-bill transparency platform;
                NVIDIA track winner.
              </li>
              <li>
                <span className="text-ink">Incoming PM</span> at Microsoft
                Security — summer 2026 on product strategy.
              </li>
            </ul>
          </Enter>
        </div>

        <Enter delay={420} className="mt-14 md:mt-20">
          <ul className="-mx-2 flex flex-wrap items-center gap-x-2 gap-y-3 font-sans text-base text-ink md:text-lg">
            {socialLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="mx-3 text-ink-faint md:mx-4"
                  >
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="link-grow font-medium"
                >
                  {link.label}
                  <span aria-hidden className="ml-1.5 text-ink-faint">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Enter>
      </Container>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-rule bg-paper-2 py-24 md:py-32"
    >
      <Container>
        <SectionHeader label="Work" index="01" meta="2022 → Now" />
        <ol className="space-y-0">
          {experiences.map((exp, i) => (
            <li
              key={`${exp.company}-${exp.role}`}
              className="grid gap-x-8 gap-y-3 border-b border-rule py-10 md:grid-cols-12 md:py-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[12px] uppercase tracking-wider text-ink-soft">
                  {exp.date}
                </p>
                <p className="mt-1.5 font-mono text-[12px] tracking-wide text-ink-faint">
                  {exp.location}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-sans text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-1 font-sans text-base text-ink-soft md:text-lg">
                  {exp.company}
                </p>
                <p className="mt-5 max-w-[64ch] text-pretty font-sans text-[15px] leading-[1.7] text-ink-soft md:text-base">
                  {exp.description}
                </p>
              </div>
              <span
                aria-hidden
                className="md:col-span-12 font-mono text-[10px] tracking-[0.3em] text-ink-faint"
              >
                {String(i + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Selected() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="selected"
      className="scroll-mt-24 border-t border-rule py-24 md:py-32"
    >
      <Container>
        <SectionHeader
          label="Selected"
          index="02"
          meta={`${projects.length} shipped · ${projects.filter((p) => p.winner).length} winners`}
        />

        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="thumb-zoom group block"
        >
          <div className="grid gap-8 border-b border-rule pb-16 md:grid-cols-12 md:gap-12 md:pb-24">
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-3 md:col-span-7">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
                priority
              />
              {featured.winner ? (
                <span className="absolute left-0 top-0 bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-vermillion">
                  Winner
                </span>
              ) : null}
            </div>
            <div className="flex flex-col justify-end md:col-span-5">
              <p className="font-mono text-[12px] uppercase tracking-wider text-ink-faint">
                Featured · {featured.year}
              </p>
              <h3 className="mt-3 font-sans text-4xl font-light tracking-tight text-ink md:text-5xl">
                {featured.name}
                <span className="text-vermillion">.</span>
              </h3>
              <p className="mt-5 max-w-[52ch] text-pretty font-sans text-base leading-[1.7] text-ink-soft md:text-lg">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                {featured.tags.map((tag, i) => (
                  <span key={tag} className="inline-flex items-center gap-3">
                    {i > 0 ? <span className="text-ink-faint">/</span> : null}
                    {tag}
                  </span>
                ))}
              </div>
              <span
                aria-hidden
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-ink-soft transition-colors group-hover:text-vermillion"
              >
                Read the writeup <span>↗</span>
              </span>
            </div>
          </div>
        </a>

        <ol className="grid gap-x-12 md:grid-cols-2">
          {rest.map((project, i) => (
            <li
              key={project.name}
              className="border-b border-rule py-10 md:py-12"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="thumb-zoom group grid grid-cols-[100px_1fr] gap-5 md:grid-cols-[120px_1fr] md:gap-7"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-3">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-sans text-xl font-medium tracking-tight text-ink md:text-2xl">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {project.year}
                      {project.winner ? (
                        <span className="ml-2 text-vermillion">★</span>
                      ) : null}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[44ch] text-pretty font-sans text-[14px] leading-[1.65] text-ink-soft md:text-[15px]">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-[10.5px] uppercase tracking-wider text-ink-mute">
                    {project.tags.join(" · ")}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="col-span-2 mt-4 inline-flex items-center gap-1.5 justify-self-end font-mono text-[11px] uppercase tracking-wider text-ink-faint transition-colors group-hover:text-vermillion"
                >
                  {String(i + 2).padStart(2, "0")} ↗
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-rule bg-paper-2 py-24 md:py-32"
    >
      <Container>
        <SectionHeader label="Stack" index="03" meta="tools that ship" />
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-12">
          {skillGroups.map((group) => (
            <div key={group.title} className="min-w-0 md:col-span-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap items-baseline font-sans text-2xl font-light leading-[1.45] tracking-tight text-ink md:text-3xl">
                {group.skills.map((skill, i) => {
                  const isLast = i === group.skills.length - 1;
                  return (
                    <li
                      key={skill}
                      className="inline-flex items-baseline"
                    >
                      <span>{skill}</span>
                      {isLast ? (
                        <span aria-hidden className="text-vermillion">
                          .
                        </span>
                      ) : (
                        <span aria-hidden className="mx-2 text-ink-faint">
                          ·
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-rule py-24 md:py-32"
    >
      <Container>
        <SectionHeader label="About" index="04" meta="the rest of the story" />
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-12">
          <div className="space-y-6 md:col-span-7">
            <p className="text-pretty font-sans text-xl leading-[1.6] text-ink md:text-2xl md:leading-[1.55]">
              I'm an Honors BS Computer Science and MS Artificial
              Intelligence student at{" "}
              <span className="border-b border-rule-strong">
                Oregon State University
              </span>
              . Dean's List seven times. Recipient of the Drucilla Shepard
              Smith Award for a perfect GPA.
            </p>
            <p className="text-pretty font-sans text-lg leading-[1.7] text-ink-soft md:text-xl md:leading-[1.65]">
              Outside the terminal, I write and DJ music, carve turns on a
              snowboard, and dance — badly, but joyfully. The best engineers
              I know all have stories that begin somewhere other than a
              keyboard.
            </p>
            <p className="text-pretty font-sans text-lg leading-[1.7] text-ink-soft md:text-xl md:leading-[1.65]">
              I care about taste in software the way other people care about
              taste in cooking. The work matters; the way you do the work
              matters more.
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              Off-keyboard
            </p>
            <ul className="mt-5 space-y-3 font-sans text-base leading-[1.55] text-ink-soft">
              <li>
                <span className="text-vermillion">·</span> Songwriting and
                DJing
              </li>
              <li>
                <span className="text-vermillion">·</span> Snowboarding
              </li>
              <li>
                <span className="text-vermillion">·</span> Dancing
              </li>
              <li>
                <span className="text-vermillion">·</span> Reading about
                systems
              </li>
            </ul>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              Indices
            </p>
            <dl className="mt-5 space-y-3 font-sans text-base text-ink-soft">
              <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-2">
                <dt>Hackathons won</dt>
                <dd className="font-mono text-ink">6</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-2">
                <dt>Dean's List terms</dt>
                <dd className="font-mono text-ink">7</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-2">
                <dt>OSU GPA</dt>
                <dd className="font-mono text-ink">4.00</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-2">
                <dt>Agent team led</dt>
                <dd className="font-mono text-ink">8 ppl</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section className="border-t border-rule py-28 md:py-40">
      <Container>
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-faint">
          §05 / Reach
        </p>
        <h2
          className="mt-8 font-sans font-light leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)", fontWeight: 300 }}
        >
          Let's build
          <br />
          something<span className="text-vermillion">.</span>
        </h2>
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="max-w-[52ch] text-pretty font-sans text-xl leading-[1.55] text-ink-soft">
              I'm open to summer-2027 PM and engineering conversations,
              research collaborations on AI safety / multi-agent systems, and
              short-form gigs that ship something real.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <a
              href="mailto:ajinkyagokule@gmail.com"
              className="link-grow inline-block font-sans text-2xl font-medium tracking-tight text-ink md:text-3xl"
            >
              ajinkyagokule@gmail.com
              <span aria-hidden className="ml-2 text-ink-faint">
                ↗
              </span>
            </a>
            <p className="mt-4 font-mono text-[12px] tracking-wide text-ink-mute">
              Response window: 24h on weekdays.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="paper-grain border-t border-rule bg-paper-2 py-10">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono text-[11px] tracking-wide text-ink-mute">
          <span>
            © 2026 Ajinkya Gokule.{" "}
            <span className="text-ink-faint">All work shipped on real users.</span>
          </span>
          <span className="text-ink-faint">
            Set in <span className="text-ink-soft">Bricolage Grotesque</span> &{" "}
            <span className="text-ink-soft">JetBrains Mono</span>. Built with
            Next.js.
          </span>
          <a
            href="#top"
            className="link-grow text-ink-soft"
            aria-label="Back to top"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}

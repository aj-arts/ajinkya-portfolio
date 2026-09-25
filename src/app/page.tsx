import Image from "next/image";
import Sampler from "@/components/Sampler";
import CopyEmail from "@/components/CopyEmail";
import { Arrow, Monogram } from "@/components/Marks";
import {
  experiences,
  type Project,
  projectPeriod,
  projects,
  recognition,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";
import { projectNotes } from "@/data/liner-notes";

const resume = socialLinks.find((link) => link.label === "Resume")!;
const featureProjects = [projects[0], projects[1], projects[4]].filter(
  (project): project is Project & { image: string; alt: string } =>
    Boolean(project.image && project.alt),
);
const archiveProjects = projects.filter(
  (project) =>
    !featureProjects.some((feature) => feature.name === project.name),
);
const trackOrder = [
  projects[0],
  projects[1],
  projects[2],
  projects[4],
  ...projects.filter((_, index) => ![0, 1, 2, 4].includes(index)),
];
const trackNumber = (name: string) =>
  String(trackOrder.findIndex((project) => project.name === name) + 1).padStart(
    2,
    "0",
  );
const clean = (text: string) => text.replace(/ — /g, " · ").replace(/—/g, "–");

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main id="main">
        <div className="hero-stage" id="top">
          <header className="site-header">
            <a
              href="#top"
              className="brand"
              aria-label="Ajinkya Gokule, back to top"
            >
              <Monogram />
              <span>
                AJINKYA GOKULE
                <br />
                <span>SOFTWARE & OTHER EXPERIMENTS</span>
              </span>
            </a>
            <nav aria-label="Main navigation">
              <a href="#work">
                The work <span>01</span>
              </a>
              <a href="#about">
                The person <span>02</span>
              </a>
              <a href="#contact" className="nav-contact">
                Say hello <Arrow diagonal />
              </a>
            </nav>
          </header>
          <div>
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero-copy">
                <div className="eyebrow">
                  <span className="status-dot" /> PRODUCT / SOFTWARE / AI
                </div>
                <h1 id="hero-title">
                  AJINKYA
                  <br />
                  GOKULE<span className="name-period">.</span>
                </h1>
                <p className="hero-description">
                  I build AI products.
                  <br />
                  Then put them
                  <br />
                  <span>to the test.</span>
                </p>
                <div className="hero-current">
                  <span className="mini-cross" aria-hidden="true">
                    +
                  </span>
                  <p>
                    Previously at <strong>Microsoft, Cloud + AI</strong>
                    <br />
                    Product Manager / Software Engineer Intern
                  </p>
                </div>
                <a
                  href={resume.href}
                  className="text-link hero-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The résumé <Arrow diagonal />
                </a>
              </div>
              <Sampler />
            </section>
            <div className="hero-foot">
              <a href="#work">
                GOOD THINGS BELOW <span>↓</span>
              </a>
              <span>AI SYSTEMS / PRODUCT / SECURITY</span>
              <span>
                PACIFIC NORTHWEST, USA{" "}
                <span className="pnw-mark" aria-hidden="true">
                  ↗
                </span>
              </span>
            </div>
          </div>
        </div>

        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-kicker">
            <span>01 / EXPERIMENTS</span>
            <span>A SELECTION, {projectPeriod}.</span>
          </div>
          <div className="work-heading">
            <h2 id="work-title">Selected work.</h2>
            <p>
              Security benchmarks, useful agents,
              <br />
              and smaller models that reason.
            </p>
          </div>
          <div className="featured-projects">
            {featureProjects.map((project, index) => {
              const note = projectNotes[project.name];
              return (
                <article
                  className={`feature feature-${index}`}
                  key={project.name}
                >
                  <a
                    className="feature-art"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}, opens in a new tab`}
                  >
                    <div className="art-topline">
                      <span>EXPERIMENT / {trackNumber(project.name)}</span>
                      <span>{project.year}</span>
                    </div>
                    {index === 0 ? (
                      <>
                        <div className="security-wordmark" aria-hidden="true">
                          TRUST
                          <br />
                          <span>ISSUES.</span>
                        </div>
                        <div className="security-stamp" aria-hidden="true">
                          10 MODELS
                          <br />
                          <strong>ZERO</strong>
                          <br />
                          IMMUNE.
                        </div>
                        <div className="project-screenshot security-screenshot">
                          <Image
                            src={project.image}
                            alt={project.alt}
                            width={900}
                            height={570}
                            sizes="(max-width: 760px) 90vw, 52vw"
                          />
                        </div>
                        <span className="art-bottomline">
                          PROMPT INJECTION, MEET YOUR BENCHMARK.
                        </span>
                      </>
                    ) : index === 1 ? (
                      <>
                        <div className="health-wordmark" aria-hidden="true">
                          a little
                          <br />
                          more <span>human.</span>
                        </div>
                        <div className="health-cross" aria-hidden="true">
                          +
                        </div>
                        <div className="project-screenshot health-screenshot">
                          <Image
                            src={project.image}
                            alt={project.alt}
                            width={900}
                            height={570}
                            sizes="(max-width: 760px) 90vw, 52vw"
                          />
                        </div>
                        <span className="art-bottomline">
                          LESS GUESSWORK. CLEARER MEDICAL BILLS.
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="research-art" aria-hidden="true">
                          <div className="research-stack stack-back" />
                          <div className="research-stack stack-middle" />
                          <div className="research-stack stack-front">
                            <span>RLoRA</span>
                            <strong>
                              SMALL
                              <br />
                              MODELS.
                              <br />
                              BIG
                              <br />
                              REASONING.
                            </strong>
                            <div className="research-plot">
                              {[38, 58, 44, 68, 59, 80, 72, 96].map(
                                (height, i) => (
                                  <i key={i} style={{ height: `${height}%` }} />
                                ),
                              )}
                            </div>
                          </div>
                          <span className="research-orbit">↗</span>
                        </div>
                        <span className="art-bottomline">
                          A LIGHTER WAY TO LEARN.
                        </span>
                      </>
                    )}
                    <span className="art-open">
                      <Arrow diagonal />
                    </span>
                  </a>
                  <div className="feature-copy">
                    <div className="feature-category">
                      <span>{trackNumber(project.name)}</span>
                      {note.category}
                    </div>
                    <h3>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                        <Arrow diagonal />
                      </a>
                    </h3>
                    <p>{note.detail}</p>
                    <div className="project-proof">
                      <span>{note.evidence}</span>
                    </div>
                    <ul className="project-tags" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {index === 2 ? "Read the paper" : "Explore the project"}
                      <Arrow diagonal />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="catalog-heading">
            <div>
              <span className="eyebrow">THERE'S MORE IN THE CRATE</span>
              <h3>
                The extended mix
                <span>
                  {" "}
                  / {String(archiveProjects.length).padStart(2, "0")}
                </span>
              </h3>
            </div>
            <span>OPEN A TRACK TO TAKE A LOOK ↓</span>
          </div>
          <div className="project-catalog">
            {archiveProjects.map((project) => (
              <details className="catalog-item" key={project.name}>
                <summary>
                  <span className="catalog-number">
                    {trackNumber(project.name)}
                  </span>
                  <span className="catalog-name">{project.name}</span>
                  <span className="catalog-category">
                    {projectNotes[project.name].category}
                  </span>
                  <span className="catalog-year">{project.year}</span>
                  <span className="catalog-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div
                  className={`catalog-detail${project.image ? "" : " catalog-detail-text"}`}
                >
                  <div>
                    <p>{projectNotes[project.name].detail}</p>
                    <div className="project-proof">
                      <span>{projectNotes[project.name].evidence}</span>
                    </div>
                    <ul className="project-tags" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    {project.href && (
                      <a
                        className="text-link"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore {project.name}
                        <Arrow diagonal />
                      </a>
                    )}
                  </div>
                  {project.image && (
                    <div className="catalog-image">
                      <Image
                        src={project.image}
                        alt={project.alt ?? project.name}
                        width={600}
                        height={360}
                        sizes="(max-width: 760px) 85vw, 32vw"
                      />
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className="experience-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-kicker">
            <span>THE LINER NOTES</span>
            <a href={resume.href} target="_blank" rel="noopener noreferrer">
              FULL RÉSUMÉ <Arrow diagonal />
            </a>
          </div>
          <div className="experience-layout">
            <div className="experience-intro">
              <h2 id="experience-title">
                In good
                <br />
                company<span>.</span>
              </h2>
              <p>
                Places I've built things,
                <br />
                broken things, and learned
                <br />
                from people better than me.
              </p>
            </div>
            <div className="experience-list">
              {experiences.slice(0, 4).map((experience) => (
                <article
                  className="experience"
                  key={`${experience.company}-${experience.role}`}
                >
                  <span className="experience-date">
                    {clean(experience.date)}
                  </span>
                  <h3>
                    {experience.company.split(",")[0]}
                    {experience.current && (
                      <span className="current-tag">CURRENT</span>
                    )}
                  </h3>
                  <h4>{experience.role}</h4>
                  <p>{experience.description}</p>
                  {experience.highlights && (
                    <ul className="experience-highlights">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
              <details className="earlier-experience">
                <summary>
                  More experience <span>2022–present</span>
                  <span className="catalog-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                {experiences.slice(4).map((experience) => (
                  <article
                    className="experience"
                    key={`${experience.company}-${experience.role}`}
                  >
                    <span className="experience-date">
                      {clean(experience.date)}
                    </span>
                    <h3>
                      {experience.company}
                      {experience.current && (
                        <span className="current-tag">CURRENT</span>
                      )}
                    </h3>
                    <h4>{experience.role}</h4>
                    <p>{experience.description}</p>
                  </article>
                ))}
              </details>
            </div>
          </div>
        </section>

        <section
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>02 / THE PERSON</span>
            <span>THERE'S ALWAYS A B-SIDE.</span>
          </div>
          <div className="about-layout">
            <div className="about-art" aria-hidden="true">
              <div className="about-orbit orbit-one" />
              <div className="about-orbit orbit-two" />
              <div className="about-orbit orbit-three" />
              <span className="about-art-label">
                A WORK IN
                <br />
                PROGRESS.
              </span>
              <span className="about-sticker">
                HUMAN
                <br />
                AFTER ALL.
              </span>
              <span className="about-art-bottom">33⅓ RPM / NEVER ONE NOTE</span>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Away from
                <br />
                the keyboard.
              </h2>
              <p>
                I'm Ajinkya, pursuing a Master of Science in Computer Science at
                Oregon State University with a 4.0 GPA, graduating in June 2027.
                My education also includes an Honors BS in Computer Science with
                a minor in Economics.
              </p>
              <p>
                I like figuring out what people need, building something they
                can use, and testing where it breaks. I lead system design for
                OSU’s Product Management Club. Away from work, I write songs,
                play seven instruments, DJ, snowboard, and dance with Kinetic
                K-pop.
              </p>
              <div className="personal-note">
                <span>ALSO IN THE MIX</span>
                <p>
                  Seven instruments <i>/</i> Snowboarding <i>/</i> Kinetic K-pop
                </p>
              </div>
            </div>
          </div>
          <section className="toolbox" aria-labelledby="skills-title">
            <header className="toolbox-heading">
              <h3 id="skills-title">What I build with</h3>
              <span className="toolbox-hint">THE TOOLS BEHIND THE WORK</span>
            </header>
            <div className="toolbox-groups">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4>{group.title}</h4>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="toolbox" aria-labelledby="honors-title">
            <header className="toolbox-heading">
              <h3 id="honors-title">A few honors</h3>
              <span className="toolbox-hint">
                FROM CLASSROOMS TO HACKATHONS
              </span>
            </header>
            <ul className="recognition-list">
              {recognition.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </section>
        </section>
      </main>
      <footer className="contact-section section-shell" id="contact">
        <div className="section-kicker">
          <span>03 / NEXT TRACK</span>
          <span>
            <i className="status-dot" /> OPEN TO SUMMER 2027 CONVERSATIONS
          </span>
        </div>
        <div className="contact-heading">
          <h2>
            Got a good
            <br />
            <a href="mailto:ajinkyagokule@gmail.com">
              problem?
              <Arrow diagonal />
            </a>
          </h2>
          <p>
            Product, engineering, AI,
            <br />
            or something I haven't
            <br />
            thought of yet.
            <br />
            <span>I'd like to hear it.</span>
          </p>
        </div>
        <div className="contact-email">
          <a href="mailto:ajinkyagokule@gmail.com">ajinkyagokule@gmail.com</a>
          <CopyEmail />
        </div>
        <div className="footer-bottom">
          <a className="footer-brand" href="#top" aria-label="Back to top">
            <Monogram />
            <span>
              ALWAYS A WORK IN PROGRESS.
              <br />© 2026 AJINKYA GOKULE
            </span>
          </a>
          <div className="social-links">
            {socialLinks
              .filter((link) =>
                ["GitHub", "LinkedIn", "Devpost", "Resume"].includes(
                  link.label,
                ),
              )
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <Arrow diagonal />
                </a>
              ))}
          </div>
          <a href="#top" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </>
  );
}

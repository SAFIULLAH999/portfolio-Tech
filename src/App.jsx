import { useState } from "react";
import {
  Reveal,
  Entrance,
  HeroSculpture,
  TiltSurface,
} from "./components/PortfolioMotion";
import PortfolioNavigation from "./components/PortfolioNavigation";
import {
  projects,
  experience,
  leadership,
  skills,
  education,
  certifications,
} from "./portfolio";
const Arrow = () => <span aria-hidden="true">↗</span>;
const Resume = ({ className = "" }) => (
  <a className={className} href="/resume/MD_Saif_FullStack.pdf" download>
    Download résumé <span aria-hidden="true">↓</span>
  </a>
);
function ProjectVisual({ project, index }) {
  return (
    <TiltSurface
      className={`project-visual visual-${project.kind}`}
      aria-hidden="true"
      strength={6}
    >
      <span className="visual-index">0{index + 1} / PROJECT STUDY</span>
      <div className="project-art">
        <strong>{project.mark}</strong>
        <span>{project.caption}</span>
        <i />
        <i />
        <i />
      </div>
      <span className="visual-caption">Conceptual project illustration</span>
      <span className="visual-open" aria-hidden="true">
        ↗
      </span>
    </TiltSurface>
  );
}
function Timeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((item) => (
        <Reveal as="article" className="experience-row" key={item.company}>
          <div className="experience-date mono">
            {item.date}
            <span>{item.location}</span>
          </div>
          <div>
            <h3>{item.role}</h3>
            <p className="company">{item.company}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
export default function App() {
  const [copied, setCopied] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("saifdev222@gmail.com");
      setCopied("Email copied");
    } catch {
      setCopied("Copy this address: saifdev222@gmail.com");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioNavigation />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-top mono">
            <span>
              <i className="status-dot" /> MUHAMMAD SAIFULLAH
            </span>
            <span>LAHORE, PAKISTAN / GLOBAL TEAMS</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Full Stack Developer · MERN / Next.js Engineer
              </p>
              <h1>
                <Entrance as="span" delay={0.05}>Thoughtful</Entrance>
                <Entrance as="span" delay={0.14}>interfaces.</Entrance>
                <Entrance as="span" delay={0.23}>
                  <span className="blue">Solid</span> systems
                  <span className="blue">.</span>
                </Entrance>
              </h1>
              <Entrance delay={0.32}>
                <p className="hero-description">
                  I build web products from the first interface to the last API.
                  Clean design, reliable engineering, and the teamwork to bring
                  it all together.
                </p>
              </Entrance>
              <Entrance delay={0.4}>
                <div className="hero-actions">
                  <a className="button primary" href="#work">
                    Explore my work <span aria-hidden="true">↓</span>
                  </a>
                  <a className="text-link" href="#contact">
                    Let's talk <Arrow />
                  </a>
                </div>
              </Entrance>
            </div>
            <HeroSculpture />
          </div>
          <div className="hero-bottom">
            <span className="mono">
              CURRENTLY · FULL STACK DEVELOPER AT KLOUD PRINTZ
            </span>
            <a href="#work" className="mono">
              SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <div className="evidence container">
          <div>
            <strong>
              3.5<span className="blue">+</span>
            </strong>
            <span>Years of professional experience</span>
          </div>
          <div>
            <strong>
              2<span className="blue">+</span>
            </strong>
            <span>Years leading distributed teams</span>
          </div>
          <div>
            <strong>
              UI <span className="blue">→</span> API
            </strong>
            <span>End-to-end product development</span>
          </div>
        </div>
        <section id="work" className="section container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow mono">01 / SELECTED WORK</p>
              <h2>
                Ideas made
                <br />
                <span className="muted">real.</span>
              </h2>
            </div>
            <p>
              Commerce, talent platforms, and business websites.
              <br />A selection of products I've helped build.
            </p>
          </Reveal>
          <div className="projects">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                className="project"
                key={project.name}
                delay={(index % 2) * 0.1}
              >
                <ProjectVisual project={project} index={index} />
                <div className="project-details">
                  <div className="project-meta mono">
                    <span>{project.category}</span>
                    {project.soon && (
                      <span className="project-status">LAUNCHING SOON</span>
                    )}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.soon
                      ? "View project in development"
                      : "Visit website"}{" "}
                    <Arrow />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-grid">
              <div>
                <p className="eyebrow mono">02 / THE PERSON BEHIND THE CODE</p>
                <h2>
                  Engineer by craft.
                  <br />
                  Leader by
                  <br />
                  <span className="blue">experience.</span>
                </h2>
              </div>
              <div className="about-copy">
                <p>
                  I’m Muhammad Saifullah, a full stack developer based in
                  Lahore. I turn business requirements into responsive
                  interfaces, secure backends, and reliable products for global
                  teams.
                </p>
                <p>
                  My work spans MERN and Next.js applications, headless Shopify
                  commerce, real-time systems, and cloud file storage. Alongside
                  hands-on engineering, I lead distributed teams through
                  planning, code reviews, mentorship, and delivery.
                </p>
                <Resume className="text-link" />
              </div>
            </div>
            <div className="skills-heading">
              <h3>A toolkit for the whole product.</h3>
              <span className="mono">DESIGN · BUILD · SHIP</span>
            </div>
            <div className="skills">
              {skills.map((group) => (
                <Reveal className="skill-group" key={group.name}>
                  <h4>{group.name}</h4>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow mono">03 / EXPERIENCE</p>
              <h2>
                Building products.
                <br />
                <span className="muted">Growing teams.</span>
              </h2>
            </div>
            <p>
              Hands-on engineering, thoughtful collaboration,
              <br />
              and responsibility beyond the code.
            </p>
          </Reveal>
          <Timeline entries={experience} />
          <div className="subsection-heading">
            <h3>Leadership & entrepreneurship</h3>
            <p className="mono">CONCURRENT ROLES</p>
          </div>
          <Timeline entries={leadership} />
          <div className="credentials">
            <div>
              <p className="eyebrow mono">EDUCATION</p>
              {education.map((item) => (
                <article key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.school}</p>
                  <span className="mono">{item.date}</span>
                </article>
              ))}
            </div>
            <div>
              <p className="eyebrow mono">CERTIFICATIONS</p>
              {certifications.map((item) => (
                <article key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.issuer}</p>
                  <span className="mono">{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow mono">04 / START A CONVERSATION</p>
            <div className="contact-heading">
              <h2>
                Good things start
                <br />
                with a <span className="blue">hello.</span>
              </h2>
              <a
                href="mailto:saifdev222@gmail.com"
                className="contact-arrow"
                aria-label="Email Muhammad Saifullah"
              >
                <Arrow />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <a className="email-link" href="mailto:saifdev222@gmail.com">
                  saifdev222@gmail.com
                </a>
                <button className="copy-button" onClick={copyEmail}>
                  Copy email <span aria-hidden="true">⧉</span>
                </button>
                <p role="status" className="copy-status">
                  {copied}
                </p>
              </div>
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/md-saif-373205438"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a href="tel:+923484613683">
                  +92 348 4613683 <Arrow />
                </a>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="brand" href="#home">
          saif<span className="blue">.</span>
        </a>
        <span className="mono">
          © {new Date().getFullYear()} MUHAMMAD SAIFULLAH
        </span>
        <a className="mono" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

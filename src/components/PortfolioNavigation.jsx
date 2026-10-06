import { useEffect, useRef, useState } from "react";
import { ScrollProgress } from "./PortfolioMotion";

const sections = ["Work", "About", "Experience", "Contact"];

export default function PortfolioNavigation() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 760px)").matches,
  );
  const menuButton = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    function resize() {
      setMobile(media.matches);
      setOpen(false);
    }
    media.addEventListener("change", resize);
    let frame;
    function update() {
      setCompact(window.scrollY > 60);
      const current = sections
        .filter((label) => {
          const section = document.getElementById(label.toLowerCase());
          return (
            section &&
            section.getBoundingClientRect().top <= window.innerHeight * 0.4
          );
        })
        .pop();
      setActive(current || "");
    }
    function scroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      media.removeEventListener("change", resize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function escape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);

  const tabIndex = mobile && !open ? -1 : undefined;
  return (
    <>
      <ScrollProgress />
      <header className={`header${compact ? " compact" : ""}`}>
        <div className="container header-inner">
          <a
            className="brand"
            href="#home"
            aria-label="Muhammad Saifullah home"
          >
            saif<span className="blue">.</span>
            <span className="brand-sub">DEVELOPER & TEAM LEAD</span>
          </a>
          <button
            ref={menuButton}
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close −" : "Menu +"}
          </button>
          <nav
            id="main-nav"
            className={`nav${open ? " open" : ""}`}
            aria-label="Main navigation"
            aria-hidden={mobile && !open ? true : undefined}
          >
            {sections.map((label) => (
              <a
                href={`#${label.toLowerCase()}`}
                key={label}
                tabIndex={tabIndex}
                aria-current={active === label ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
                <i aria-hidden="true" />
              </a>
            ))}
            <a
              className="nav-resume"
              href="/resume/MD_Saif_FullStack.pdf"
              download
              tabIndex={tabIndex}
              onClick={() => setOpen(false)}
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

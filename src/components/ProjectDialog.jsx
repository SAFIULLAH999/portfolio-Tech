import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";
import { projects } from "../portfolio";
import { MotionToggle, useMotionPreferences } from "./MotionPreferences";

export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const { disabled } = useMotionPreferences();
  useEffect(() => {
    if (!project) return;
    const element = dialog.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (!element.open) element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (opener instanceof HTMLElement && opener.isConnected)
        opener.focus({ preventScroll: true });
    };
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
    >
      {project && (
        <motion.div
          className="dialog-surface"
          initial={disabled ? false : { y: 18, scale: 0.985 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            duration: disabled ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="dialog-header">
            <span className="mono">
              PROJECT NOTES / 0{projects.indexOf(project) + 1}
            </span>
            <div>
              <MotionToggle />
              <button
                ref={closeButton}
                className="dialog-close"
                autoFocus
                onClick={() => dialog.current.close()}
                aria-label="Close project details"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div className="dialog-layout">
            <div className="dialog-preview">
              <ProjectPreview
                project={project}
                index={projects.indexOf(project)}
              />
              <p className="mono">
                A conceptual representation of the project.
                <br />
                Explore the live website using the link below.
              </p>
            </div>
            <div className="dialog-details">
              <p className="eyebrow mono">{project.category}</p>
              <h2 id="project-dialog-title">{project.name}</h2>
              {project.soon && (
                <p className="dialog-launch mono">
                  LAUNCHING SOON / IN DEVELOPMENT
                </p>
              )}
              <p className="dialog-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="button primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.soon ? "View in development" : "Visit website"}
                <span aria-hidden="true">↗</span>
              </a>
              <p className="dialog-domain mono">
                {new URL(project.url).hostname}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </dialog>
  );
}

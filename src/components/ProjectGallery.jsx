import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { projects } from "../portfolio";
import ProjectPreview from "./ProjectPreview";
import ProjectDialog from "./ProjectDialog";
import { useMotionPreferences } from "./MotionPreferences";

const categories = [
  { label: "All work", kinds: null },
  { label: "Business websites", kinds: ["nyc", "wrap"] },
  { label: "Talent platforms", kinds: ["talent", "agency"] },
  { label: "Commerce", kinds: ["print"] },
  { label: "Personal", kinds: ["feed"] },
];
const belongs = (project, category) =>
  !category.kinds || category.kinds.includes(project.kind);

export default function ProjectGallery() {
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState(null);
  const { disabled } = useMotionPreferences();
  const visible = projects.filter((project) => belongs(project, category));
  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((item) => (
            <button
              key={item.label}
              className="gallery-filter"
              aria-pressed={category.label === item.label}
              onClick={() => setCategory(item)}
            >
              {item.label}
              <span>
                {projects.filter((project) => belongs(project, item)).length}
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-count mono" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"} /{" "}
          {category.label}
        </p>
      </div>
      <LayoutGroup>
        <div className="projects curated-gallery">
          {visible.map((project, position) => (
            <motion.article
              key={project.name}
              layout={disabled ? false : "position"}
              className={`project${position === 0 ? " project-featured" : ""}`}
              initial={disabled ? false : { y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: disabled ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectPreview
                project={project}
                index={projects.indexOf(project)}
              />
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
                <div className="project-actions">
                  <button
                    className="explore-project"
                    aria-label={`Explore ${project.name} project details`}
                    aria-haspopup="dialog"
                    onClick={() => setSelected(project)}
                  >
                    Explore project <span aria-hidden="true">+</span>
                  </button>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.soon ? "View in development" : "Visit website"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </LayoutGroup>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

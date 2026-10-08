import { TiltSurface } from "./PortfolioMotion";

function VehicleDiagram() {
  return (
    <svg
      className="vehicle-diagram"
      viewBox="0 0 280 115"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M27 78V59L59 52L90 24H179L214 53L250 63L260 78V88H27V78Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M73 52L99 31H173L194 52H73Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="76"
        cy="85"
        r="18"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="220"
        cy="85"
        r="18"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="76" cy="85" r="8" stroke="currentColor" />
      <circle cx="220" cy="85" r="8" stroke="currentColor" />
      <path d="M105 65H184M110 72H164" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function ProjectPreview({ project, index }) {
  const vehicle = ["nyc", "wrap"].includes(project.kind);
  const talent = ["talent", "agency"].includes(project.kind);
  return (
    <TiltSurface
      className={`project-visual preview-${project.kind}`}
      strength={5}
      aria-hidden="true"
    >
      <div className="preview-stage-index mono">
        0{index + 1} / PROJECT STUDY
      </div>
      <div className="browser-preview">
        <div className="browser-toolbar">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-location">
            {new URL(project.url).hostname}
          </span>
          <span>↗</span>
        </div>
        <div className="browser-canvas">
          <div className="schematic-nav">
            <strong>
              {project.kind === "print" ? "Kloud Prints" : project.mark}
            </strong>
            <span />
            <span />
            <i />
          </div>
          {vehicle && (
            <div className="vehicle-schematic">
              <div>
                <span className="schematic-eyebrow">VEHICLE CUSTOMIZATION</span>
                <strong>
                  {project.kind === "nyc" ? (
                    <>
                      Built for
                      <br />
                      the city.
                    </>
                  ) : (
                    <>
                      A new look.
                      <br />
                      Every angle.
                    </>
                  )}
                </strong>
                <i className="schematic-button" />
              </div>
              <VehicleDiagram />
              <div className="service-tiles">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
          {talent && (
            <div className="talent-schematic">
              <span className="schematic-eyebrow">
                GLOBAL TALENT, CONNECTED
              </span>
              <strong>
                Great people.
                <br />
                <em>New possibilities.</em>
              </strong>
              <div className="schematic-search">
                <i />
                <span />
              </div>
              <div className="talent-list">
                {[0, 1, 2].map((n) => (
                  <div key={n}>
                    <i />
                    <span>
                      <b />
                      <b />
                    </span>
                    <em />
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.kind === "feed" && (
            <div className="feed-schematic">
              <aside>
                <i />
                <i />
                <i />
                <i />
              </aside>
              <div className="feed-posts">
                {[0, 1].map((n) => (
                  <div className="feed-post" key={n}>
                    <div className="feed-author">
                      <i />
                      <b />
                    </div>
                    <span />
                    <span />
                    <div className="feed-image" />
                    <footer>
                      <i />
                      <i />
                      <i />
                    </footer>
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.kind === "print" && (
            <div className="commerce-schematic">
              <span className="schematic-eyebrow">
                CUSTOM PRINT / E-COMMERCE
              </span>
              <strong>
                Make it yours<span>.</span>
              </strong>
              <div className="catalog-grid">
                {["BAGS", "APPAREL", "LABELS"].map((label, n) => (
                  <div key={label}>
                    <div className={`catalog-object object-${n}`} />
                    <span>{label}</span>
                    <i />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <span className="visual-caption">
        Conceptual illustration · Not a live screenshot
      </span>
      <span className="preview-corner" aria-hidden="true">
        +
      </span>
    </TiltSurface>
  );
}

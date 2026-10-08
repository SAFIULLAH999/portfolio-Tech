import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useMotionPreferences } from "./MotionPreferences";

// Reveals stay readable before entering the viewport; every section animates once.
export function Reveal({ children, className, as = "div", delay = 0 }) {
  const { disabled: reduced } = useMotionPreferences();
  const Component = motion[as];
  const supported =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  return (
    <Component
      className={className}
      initial={reduced || !supported ? false : { opacity: 1, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}

export function Entrance({ children, className, delay = 0, as = "div" }) {
  const { disabled: reduced } = useMotionPreferences();
  const Component = motion[as];
  const deepLink =
    typeof window !== "undefined" && Boolean(window.location.hash);
  return (
    <Component
      className={className}
      initial={reduced || deepLink ? false : { opacity: 1, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.8,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { disabled } = useMotionPreferences();
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: disabled ? 0 : scrollYProgress }}
      aria-hidden="true"
    />
  );
}

export function TiltSurface({ children, className, strength = 5, ...props }) {
  const ref = useRef(null);
  const { disabled: reduced } = useMotionPreferences();
  useEffect(() => {
    const element = ref.current;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduced || !pointer.matches || !element) return;
    let frame;
    function move(event) {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        element.style.setProperty("--tilt-x", `${-y * strength}deg`);
        element.style.setProperty("--tilt-y", `${x * strength}deg`);
        element.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
        element.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
        element.style.setProperty("--depth-x", `${x * 12}px`);
        element.style.setProperty("--depth-y", `${y * 12}px`);
      });
    }
    function reset() {
      cancelAnimationFrame(frame);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--depth-x", "0px");
      element.style.setProperty("--depth-y", "0px");
    }
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, [reduced, strength]);
  return (
    <div ref={ref} className={`tilt-surface ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

export function HeroSculpture() {
  return (
    <Entrance className="sculpture-entrance" delay={0.22}>
      <TiltSurface className="hero-object" strength={9}>
        <div className="object-corner mono">
          <span className="object-cross">+</span> DESIGN ↔ DEVELOPMENT
        </div>
        <div className="blueprint-axis axis-x" aria-hidden="true" />
        <div className="blueprint-axis axis-y" aria-hidden="true" />
        <div className="layer-stack" aria-hidden="true">
          <div className="stack-layer layer-system">
            <span className="layer-number">03</span>
            <span className="layer-label">SYSTEM</span>
            <div className="system-nodes">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="stack-layer layer-data">
            <span className="layer-number">02</span>
            <span className="layer-label">DATA</span>
            <div className="data-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="stack-layer layer-interface">
            <span className="layer-number">01</span>
            <span className="layer-label">INTERFACE</span>
            <div className="interface-layout">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <span
          className="blueprint-label blueprint-left mono"
          aria-hidden="true"
        >
          UI → API
        </span>
        <span
          className="blueprint-label blueprint-right mono"
          aria-hidden="true"
        >
          ENGINEERED
          <br />
          IN LAYERS.
        </span>
        <div className="object-bottom">
          <span className="code-label">&lt;/&gt;</span>
          <span className="mono">
            BUILT WITH INTENT.
            <br />
            FROM UI TO API.
          </span>
        </div>
      </TiltSurface>
    </Entrance>
  );
}

// The pointer effect moves only the visual content; the link hit target stays still.
export function MagneticLink({ children, className, ...props }) {
  const ref = useRef(null);
  const { disabled } = useMotionPreferences();
  useEffect(() => {
    const element = ref.current;
    if (
      disabled ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    let frame;
    function move(event) {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty(
          "--magnet-x",
          `${((event.clientX - rect.left) / rect.width - 0.5) * 9}px`,
        );
        element.style.setProperty(
          "--magnet-y",
          `${((event.clientY - rect.top) / rect.height - 0.5) * 9}px`,
        );
      });
    }
    function reset() {
      cancelAnimationFrame(frame);
      element.style.setProperty("--magnet-x", "0px");
      element.style.setProperty("--magnet-y", "0px");
    }
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, [disabled]);
  return (
    <a ref={ref} className={`magnetic-link ${className || ""}`} {...props}>
      <span className="magnetic-inner">{children}</span>
    </a>
  );
}

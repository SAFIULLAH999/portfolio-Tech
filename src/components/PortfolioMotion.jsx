import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

// Reveals stay readable before entering the viewport; every section animates once.
export function Reveal({ children, className, as = "div", delay = 0 }) {
  const reduced = useReducedMotion();
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
  const reduced = useReducedMotion();
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
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}

export function TiltSurface({ children, className, strength = 5, ...props }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
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
      });
    }
    function reset() {
      cancelAnimationFrame(frame);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
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
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="morph" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <span className="floating-label label-ui mono" aria-hidden="true">
          <i /> UI / UX
        </span>
        <span className="floating-label label-api mono" aria-hidden="true">
          <i /> API & DATA
        </span>
        <span className="sculpture-coordinate mono" aria-hidden="true">
          01 / FULL STACK
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

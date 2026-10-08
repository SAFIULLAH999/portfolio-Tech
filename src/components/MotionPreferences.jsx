import { createContext, useContext, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const Preferences = createContext({ disabled: false });

export function MotionPreferences({ children }) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(() => {
    try {
      return localStorage.getItem("portfolio-motion") === "off";
    } catch {
      return false;
    }
  });
  const disabled = paused || Boolean(reduced);
  useEffect(() => {
    document.documentElement.dataset.motion = disabled ? "off" : "on";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [disabled]);
  function toggle() {
    const next = !paused;
    setPaused(next);
    try {
      localStorage.setItem("portfolio-motion", next ? "off" : "on");
    } catch {
      /* Preferences still work when storage is unavailable. */
    }
  }
  return (
    <Preferences.Provider value={{ disabled, paused, reduced, toggle }}>
      {children}
    </Preferences.Provider>
  );
}

export function useMotionPreferences() {
  return useContext(Preferences);
}

export function MotionToggle() {
  const { disabled, paused, reduced, toggle } = useMotionPreferences();
  return (
    <button
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={paused}
      disabled={Boolean(reduced)}
      aria-label={
        reduced
          ? "Motion disabled by your device preference"
          : paused
            ? "Resume decorative motion"
            : "Pause decorative motion"
      }
    >
      <span
        className={`motion-symbol${disabled ? " paused" : ""}`}
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
      </span>
      Motion {disabled ? "off" : "on"}
    </button>
  );
}

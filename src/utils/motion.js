export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

/* ===================== NEW ANIMATION VARIANTS ===================== */

// Rotate in animation
export const rotateIn = (delay, duration) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0.5,
    },
    show: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: duration,
      },
    },
  };
};

// Scale bounce animation
export const scaleBounce = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: [0, 1.2, 0.9, 1],
      opacity: 1,
      transition: {
        type: "tween",
        times: [0, 0.6, 0.8, 1],
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Floating animation (continuous)
export const floating = (amplitude = 20, duration = 3) => {
  return {
    hidden: {},
    show: {
      y: [0, -amplitude, amplitude, 0],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
};

// Parallax scroll effect
export const parallax = (speed = 50) => {
  return {
    hidden: { y: 0 },
    show: {
      y: [0, -speed, speed, 0],
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };
};

// Glow pulse effect
export const glowPulse = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
      boxShadow: "0 0 0 rgba(0, 217, 255, 0)",
    },
    show: {
      opacity: 1,
      scale: 1,
      boxShadow: [
        "0 0 20px rgba(0, 217, 255, 0.3)",
        "0 0 40px rgba(0, 217, 255, 0.5)",
        "0 0 20px rgba(0, 217, 255, 0.3)",
      ],
      transition: {
        delay: delay,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
};

// Text scramble effect (for revealing text)
export const textScramble = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: delay,
      },
    },
  };
};

// Stagger children with scale
export const staggerScale = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

// Orbit animation (for circular movement)
export const orbit = (radius = 50, duration = 4) => {
  return {
    hidden: {},
    show: {
      rotate: 360,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
};

// Wave animation
export const wave = (amplitude = 10, frequency = 0.5) => {
  return {
    hidden: {},
    show: {
      y: [
        0,
        -amplitude,
        amplitude,
        -amplitude,
        amplitude,
        0,
      ],
      transition: {
        duration: 2 / frequency,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
};

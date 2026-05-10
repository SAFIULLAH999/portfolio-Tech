import React from "react";

const ParticleBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <div
        className="absolute w-96 h-96 rounded-full blur-[120px] opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          animationDuration: "15s",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-[100px] opacity-15 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
          bottom: "20%",
          right: "15%",
          animationDuration: "12s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full blur-[80px] opacity-10 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animationDuration: "18s",
          animationDelay: "4s",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 217, 255, 0.5)`,
            animation: `floatParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default ParticleBackground;

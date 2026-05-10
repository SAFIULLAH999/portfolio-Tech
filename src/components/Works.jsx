import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { useRef } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { Link } from "react-router-dom";
import ParticleBackground from "./canvas/ParticleBackground";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const tiltRef = useRef(null);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.8)}
      onClick={() => window.open(source_code_link, "_blank")}
      className='cursor-pointer group'
    >
      <Tilt
        ref={tiltRef}
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
          reset: true,
        }}
        className="glass-card p-0 rounded-3xl sm:w-[380px] w-full overflow-hidden relative"
      >
        {/* Animated gradient border glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 via-purple-500/20 to-accent/20 blur-lg -z-10"></div>
        </div>

        {/* Image container with zoom effect */}
        <div className="relative w-full h-[260px] overflow-hidden">
          <motion.img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-t-3xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Floating GitHub icon with magnetic effect */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="glass w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-accent/30 transition-all duration-300 border border-accent/30"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-cover filter invert"
              />
            </div>
          </motion.div>

          {/* Live badge */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="glass px-3 py-1 rounded-full text-xs text-accent font-medium backdrop-blur-md">
              View Project
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 relative">
          {/* Decorative glow dot */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />

          <h3 className="text-accent font-bold text-[28px] mb-3 group-hover:translate-x-2 transition-transform duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[15px] leading-relaxed">{description}</p>

          {/* Tech tags with staggered animation */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.p
                key={`${name}-${tag.name}`}
                className="text-[13px] text-accent font-medium px-3 py-1 rounded-full glass border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
              >
                #{tag.name}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Particle Background Effect */}
      <ParticleBackground />

      {/* Section header with animated underline */}
      <div className="relative z-10">
        <motion.p
          variants={textVariant(0.1)}
          className={`${styles.sectionSubText} `}
        >
          My work
        </motion.p>
        <motion.h2
          variants={textVariant(0.2)}
          className={`${styles.sectionHeadText} relative inline-block`}
        >
          Projects.
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>
      </div>

      {/* Description */}
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full max-w-3xl relative z-10"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.8)}
          className="mt-4 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </motion.div>

      {/* Projects grid with enhanced animations */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-wrapper-${index}`}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="w-full"
          >
            <Link to={`/project${index + 1}`} state={{ project }}>
              <ProjectCard index={index} {...project} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");

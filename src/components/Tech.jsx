import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="w-24 h-24"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="glass-card w-full h-full flex items-center justify-center rounded-2xl p-4">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

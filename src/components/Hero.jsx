import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_rgba(0,217,255,0.5)]' />
          <div className='w-1 sm:h-80 h-40 bg-accent/60 rounded-full' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-accent'>MD SAFIULLAH</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            Full Stack & MERN Stack Developer with 5+ years of experience
          </p>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            building modern, scalable, and responsive web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-accent/50 flex justify-center items-start p-2 glass'
          >
            <div className='w-3 h-3 rounded-full bg-accent mt-1 shadow-[0_0_10px_rgba(0,217,255,0.5)]' />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

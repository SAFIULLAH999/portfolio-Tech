import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 glass-nav text-white flex flex-col items-center gap-4">
      <div className="flex gap-8">
        <a
          href="mailto:saifdev222@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300 flex items-center gap-2"
        >
          <FaEnvelope size={20} />
          <span className="text-sm">Email</span>
        </a>
        <a
          href="tel:+923484613683"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300 flex items-center gap-2"
        >
          <FaPhone size={20} />
          <span className="text-sm">+92 348 4613683</span>
        </a>
      </div>
      <div className="flex gap-8">
        <a
          href="https://www.linkedin.com/in/mdsafiullah/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-xs text-secondary mt-2">
        © {new Date().getFullYear()} MD SAFIULLAH. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  const siteName = "MyPortfolio";

  return (
    <motion.footer
      aria-label="Site Footer"
      className="border-t border-gray-300 text-gray-800 dark:text-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            © {new Date().getFullYear()} {siteName}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with 💙 by Venkat
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end items-center gap-6 text-2xl"
        >
          <motion.a
           href="https://github.com/venkatavamsikrishna"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-neutral-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/venkatavamsikrishnamanikonda/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:venkatavamsikrishnamanikonda@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

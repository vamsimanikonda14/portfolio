import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 12,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
    },
  },
};

// Custom animation variants for directional entrance
const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
    },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 10,
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center text-gray-900 px-6 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fromRight}
          className="text-lg sm:text-xl leading-relaxed"
        >
          I am a dedicated Software Engineer with a focus on developing advanced tools for 3D experience platforms and crafting dynamic web applications. My role as a tool developer allows me to work at the intersection of immersive 3D technologies and user-centric software design, where I build solutions that enhance both functionality and usability. I have a solid background in programming and software architecture, which helps me create efficient, reliable, and scalable tools tailored to complex workflows.
        </motion.p>

        <motion.p
          variants={fromLeft}
          className="text-lg sm:text-xl mt-6 leading-relaxed"
        >
          In addition to my work in 3D tool development, I specialize in web development, where I design and implement responsive, high-performance websites and web applications. I am proficient in modern web technologies and frameworks, and I strive to deliver seamless user experiences by focusing on clean code and intuitive interfaces. This combination of skills enables me to contribute effectively to multidisciplinary projects that require both deep technical knowledge and a user-first mindset.
        </motion.p>

        <motion.p
          variants={fromRight}
          className="text-lg sm:text-xl mt-6 leading-relaxed"
        >
          I am passionate about leveraging technology to solve real-world problems and continuously expanding my skill set to keep pace with the rapidly evolving software landscape. Whether I am optimizing backend processes or enhancing front-end interactions, my goal is to deliver innovative, reliable solutions that add real value. I thrive in collaborative environments and enjoy tackling challenging projects that push the boundaries of what’s possible in both 3D experiences and web development.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;

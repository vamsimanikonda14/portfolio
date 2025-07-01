import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank ,FaWhatsapp } from "react-icons/fa";
import Particles from "react-tsparticles";
import "animate.css";

// Animation Variants for framer-motion (used in other parts)
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 8px 15px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3, yoyo: Infinity },
  },
  tap: { scale: 0.95 },
};

const imageVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 3, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewResume = () => {
    window.open("/Venkata_Vamsi_Krishna_Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-900">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#3b82f6" },
            shape: { type: "circle" },
            opacity: {
              value: 0.4,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: { enable: true, minimumValue: 1 },
              anim: { enable: true, speed: 3, size_min: 0.5, sync: false },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#2563eb",
              opacity: 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: "bounce",
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-20"
      />

      <motion.section
        id="home"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center pt-24 pb-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 px-4 md:px-8">
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-6 max-w-2xl">
            <motion.p
              className="text-xl sm:text-2xl font-medium text-red-400 animate__animated animate__swing"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 leading-tight animate__animated animate__flash"
            >
              Venkata Vamsi Krishna Manikonda
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-black-300 animate__animated animate__swing"
            >
              Software Engineer & Developer
            </motion.h2>

            <motion.p className="text-base sm:text-lg text-black-400 max-w-md sm:max-w-lg mx-auto lg:mx-0">
              Passionate about building scalable, intuitive full-stack web applications that deliver seamless user experiences.
            </motion.p>

            <motion.div className="flex justify-center lg:justify-start items-center gap-6 mt-6 text-2xl sm:text-3xl">
              {[
                { href: "https://github.com/venkatavamsikrishna", icon: <FaGithub />, className: "text-black-100 hover:text-black-300" },
                { href: "https://linkedin.com/in/venkatavamsikrishnamanikonda/", icon: <FaLinkedin />, className: "text-blue-400 hover:text-blue-500" },
                { href: "mailto:venkatavamsikrishnamanikonda@gmail.com", icon: <FaEnvelope />, className: "text-red-400 hover:text-red-500" },
                { href: "https://wa.me/918919615299", icon: <FaWhatsapp />, className: "text-green-400 hover:text-green-500",target: "_blank",rel: "noopener noreferrer" },
                { href: "https://www.hackerrank.com/profile/venkatavamsikri2", icon: <FaHackerrank />, className: "text-green-400 hover:text-green-500" },
              ].map(({ href, icon, className }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  className={className}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
              <motion.button
                onClick={handleViewResume}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="bg-blue-600 text-white px-6 py-3 text-base sm:text-lg rounded-2xl shadow-md hover:bg-blue-700"
              >
                📄 View Resume
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 text-base sm:text-lg rounded-2xl"
              >
                👋 Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            animate="animate"
            className="w-48 sm:w-64 md:w-80 lg:w-96 aspect-square rounded-full border-4 border-blue-400 shadow-lg overflow-hidden"
          >
            <img
              src="/venkat.jpg"
              alt="Venkata Vamsi Krishna Manikonda"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;

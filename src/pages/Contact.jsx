import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wq51fu8",        // Your EmailJS service ID
        "template_r7kzgxz",       // Your EmailJS template ID
        formRef.current,
        "KR4Ipku1UayhXhS1r"       // Your EmailJS public key
      )
      .then(() => {
        setMessageSent(true);
        formRef.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 text-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl shadow-md border "
          >
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full  text-black placeholder-gray-500 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full  text-black placeholder-gray-500 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="tel"
                name="user_mobile_number"
                placeholder="Your Phone Number"
                required
                className="w-full  text-black placeholder-gray-500 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                name="user_service"
                placeholder="Service Required"
                required
                className="w-full  text-black placeholder-gray-500 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full  text-black placeholder-gray-500 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                <FaPaperPlane /> Send Message
              </button>
              {messageSent && (
                <p className="text-green-600 mt-2 text-sm font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Links and Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl shadow-md border">
              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  <a
    href="mailto:venkatavamsikrishnamanikonda@gmail.com"
    className="group flex flex-col items-center justify-center p-4 rounded-lg transition text-center border hover:border-red-500"
  >
    <FaEnvelope className="text-2xl text-gray-500 mb-1 group-hover:text-red-500 transition-colors duration-300" />
    <span className="text-sm text-black">Email</span>
  </a>

  <a
    href="https://github.com/venkatavamsikrishna"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-4 rounded-lg transition text-center border hover:border-red-500"
  >
    <FaGithub className="text-2xl text-gray-500 mb-1 group-hover:text-red-500 transition-colors duration-300" />
    <span className="text-sm text-black">GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/venkatavamsikrishnamanikonda/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-4 rounded-lg transition text-center border hover:border-red-500"
  >
    <FaLinkedin className="text-2xl text-gray-500 mb-1 group-hover:text-red-500 transition-colors duration-300" />
    <span className="text-sm text-black">LinkedIn</span>
  </a>

  <a
    //href="/Subramanyam_Choda.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-4 rounded-lg transition text-center border hover:border-red-500"
  >
    <FaFileAlt className="text-2xl text-gray-500 mb-1 group-hover:text-red-500 transition-colors duration-300" />
    <span className="text-sm text-black">Resume</span>
  </a>
</div>

            </div>

            <div className="p-6 sm:p-8 rounded-2xl shadow-md border ">
              <h2 className="text-xl font-bold mb-2">Let’s work together</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                I’m always open to exciting opportunities and collaborative work.
                Whether you need a developer or want to build something awesome
                together, feel free to drop a message.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaChartBar,
  FaJira,
  FaVuejs,
  FaFileExcel,
  FaBrain, // For AI Fundamentals
  FaGlobe, // Generic for SQL if a logo isn't found
} from 'react-icons/fa';

// Custom image icons with direct URLs
const ReduxIcon = () => (
  <img
    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
    alt="Redux"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const EnoviaIcon = () => (
  // Enovia direct logo is hard to find with a stable public URL.
  // Using a generic icon for Product Lifecycle Management or Dassault Systèmes for now.
  <img
    src="data:image/png;base64,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"
    alt="Enovia"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const Widgets3DXIcon = () => (
  // 3DX Widgets also falls under Dassault Systèmes, using their logo
  <img
    src="https://banner2.cleanpng.com/20180531/xeh/avo4c438q.webp"
    alt="3DX Widgets"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const TomcatIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=QFcVqyh6lBh6&format=png&color=000000"
    alt="Tomcat"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const KafkaIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000"
    alt="Kafka"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const MaterialUIIcon = () => (
  <img
    src="https://mui.com/static/logo.png"
    alt="Material UI"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const MongoDBIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" // Direct SVG logo from MongoDB official site
    alt="MongoDB"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const ExpressIcon = () => (
  <img
    src="https://img.icons8.com/?size=80&id=kg46nzoJrmTR&format=png&color=#F9F8F808" // More direct and official-looking logo
    alt="Express"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const TailwindCSSIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    alt="Tailwind CSS"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const ViteIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
    alt="Vite"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const PostmanIcon = () => (
  <img
    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    alt="Postman"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const SocketIOIcon = () => (
  <img
    src="https://socket.io/images/logo.svg"
    alt="Socket.IO"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const MySQLIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" // Using a higher quality PNG from Wikimedia
    alt="MySQL"
    style={{ width: 300, height: 100, objectFit: 'contain' }}
  />
);

const RenderIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=122637&format=png&color=000000"
    alt="Render"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const VercelIcon = () => (
  <img
    src="https://assets.vercel.com/image/upload/v1672304918/front/assets/design/vercel-triangle-black.svg"
    alt="Vercel"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const ChatbotIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000"
    alt="Chatbot"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);

const RequireJSIcon = () => (
  <img
    src="https://requirejs.org/i/logo.png"
    alt="RequireJS"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);
const ExperienceCustomizationIcon = () => (
  <img
    src="https://banner2.cleanpng.com/20180531/xeh/avo4c438q.webp"
    alt="3D Experience Customization"
    style={{ width: 40, height: 40, objectFit: 'contain' }}
  />
);
const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaGitAlt className="text-orange-400" />, name: 'Git' },
  { icon: <FaGithub className="text-black" />, name: 'GitHub' },
  { icon: <FaBootstrap className="text-purple-500" />, name: 'Bootstrap' },
  { icon: <FaFileExcel className="text-green-600" />, name: 'Excel' },
  { icon: <FaReact className="text-blue-400" />, name: 'React' },
  { icon: <FaVuejs className="text-green-400" />, name: 'Vue.js' },
  { icon: <ViteIcon />, name: 'Vite' },
  { icon: <TailwindCSSIcon />, name: 'Tailwind CSS' },
  { icon: <MaterialUIIcon />, name: 'Material UI' },
  { icon: <ReduxIcon />, name: 'Redux' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <ExpressIcon />, name: 'Express' },
  { icon: <MongoDBIcon />, name: 'MongoDB' },
  { icon: <MySQLIcon />, name: 'SQL' },
  { icon: <PostmanIcon />, name: 'Postman' },
  { icon: <FaChartBar className="text-indigo-400" />, name: 'Chart.js' },
   { icon: <SocketIOIcon />, name: 'Socket.IO' },
  { icon: <VercelIcon />, name: 'Vercel' },
  { icon: <RenderIcon />, name: 'Render' },
  { icon: <FaJava className="text-orange-500"/>, name: 'Java' },
  { icon: <FaPython className="text-blue-500" />, name: 'Python' },
  { icon: <FaGlobe className="text-blue-500" />, name: 'Web Services' },
  { icon: <FaJira className="text-blue-500"/>, name: 'Jira' },
  { icon: <KafkaIcon />, name: 'Kafka' },
  { icon: <RequireJSIcon />, name: 'RequireJS' },
  { icon: <TomcatIcon />, name: 'Tomcat' },
  { icon: <FaBrain className="text-blue-500"/>, name: 'AI Fundamentials' },
  { icon: <TomcatIcon />, name: 'Tomcat' },
    { icon: <ChatbotIcon />, name: 'ChatBots' },
  { icon: <EnoviaIcon />, name: 'Enovia' },
  { icon: <Widgets3DXIcon />, name: '3D Experience Widgets' },
  { icon: <ExperienceCustomizationIcon />, name: '3D Experience Custimization' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen px-6 py-20  text-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12"
          // removed 'text-blue-400' from here
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-6xl sm:text-7xl mb-2">
                {skill.icon}
              </div>
              <p className="text-base font-medium text-black-300 group-hover:text-green-500 transition-colors duration-300">
                {/* Changed hover color to a lighter gray */}
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};


export default Skills;
import React, { useRef, useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaChartBar, FaJira,
  FaJava, FaPython, FaGlobe, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

const Widgets3DXIcon = () => (
  <img src="https://banner2.cleanpng.com/20180531/xeh/avo4c438q.webp" alt="3DX Widgets" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const ExpressIcon = () => (
  <img src="https://img.icons8.com/?size=80&id=kg46nzoJrmTR&format=png&color=#F9F8F808" alt="Express" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const MongoDBIcon = () => (
  <img src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" alt="MongoDB" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const KafkaIcon = () => (
  <img src="https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000" alt="Kafka" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const TailwindCSSIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const VercelIcon = () => (
  <img src="https://assets.vercel.com/image/upload/v1672304918/front/assets/design/vercel-triangle-black.svg" alt="Vercel" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);
const ExperienceCustomizationIcon = () => (
  <img src="https://banner2.cleanpng.com/20180531/xeh/avo4c438q.webp" alt="3D Experience Customization" style={{ width: 40, height: 40, objectFit: 'contain' }} />
);

const services = [
  {
    title: 'Full-Stack Web Development',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <FaReact className="text-orange-500" />
        <FaNodeJs className="text-green-600" />
        <ExpressIcon />
        <MongoDBIcon />
      </div>
    ),
    description: 'Building fast and scalable web applications...',
  },
  {
    title: 'UI/UX Design & Frontend Development',
    icon: <TailwindCSSIcon />,
    description: 'Creating visually appealing, responsive, and intuitive interfaces...',
  },
  {
    title: 'API & Backend Services',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <FaNodeJs className="text-green-600" />
        <FaJava className="text-orange-500" />
        <FaPython className="text-blue-500" />
        <FaGlobe className="text-blue-500" />
      </div>
    ),
    description: 'Developing scalable and secure RESTful APIs...',
  },
  {
    title: 'DevOps & Deployment',
    icon: <VercelIcon />,
    description: 'Streamlining application deployment with platforms like Vercel...',
  },
  {
    title: 'Data Analysis & Visualization',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <FaChartBar className="text-indigo-400" />
      </div>
    ),
    description: 'Analyzing data using Excel and visualizing with Chart.js...',
  },
  {
    title: 'Consulting, Strategy & Collaboration',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <FaJira className="text-blue-500" />
      </div>
    ),
    description: 'Providing strategic guidance on tech choices and agile processes...',
  },
  {
    title: 'Kafka Services',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <KafkaIcon />
      </div>
    ),
    description: 'Designing high-throughput, low-latency pipelines using Kafka...',
  },
  {
    title: '3D Experience Customization & Upgradation',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <ExperienceCustomizationIcon />
      </div>
    ),
    description: 'Customizing and upgrading 3D Experience platforms...',
  },
  {
    title: 'Widgets Development',
    icon: (
      <div className="flex space-x-4 justify-center items-center text-4xl">
        <Widgets3DXIcon />
      </div>
    ),
    description: 'Building custom widgets for 3D Experience environments...',
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 20000); // 20 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  return (
    <div className="relative max-w-full mx-auto px-4 py-12">
      {/* Hides scrollbars via embedded CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <h1 className="text-3xl font-bold mb-8 mt-2 text-center text-black">
        🚀 Services
      </h1>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-blue-200"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-blue-200"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth py-4"
      >
        {services.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-[300px] flex-shrink-0 p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-12">{icon}</div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
            <p className="text-black-900 leading-relaxed mb-4">{description}</p>
            <a
              href="#contact"
              className="mt-auto inline-block px-6 py-2 bg-blue-400 text-white rounded hover:bg-green-700 transition-colors duration-300"
            >
              Contact For Service
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

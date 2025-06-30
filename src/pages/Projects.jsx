import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "FoodieHub – Recipe Sharing Community",
    description:
      "A platform to share, browse, and rate user-submitted recipes with rich media and step-by-step guides.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "Framer Motion", "JWT"],
    images: [
      "https://source.unsplash.com/800x600/?food,recipe",
      "https://source.unsplash.com/800x600/?cooking,app",
      "https://source.unsplash.com/800x600/?bakery,kitchen"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "PhotoSnap – Photo‑Sharing App",
    description:
      "Instagram-style app for uploading, liking, commenting, and exploring photos in real time.",
    techStack: ["React.js", "Firebase", "Cloud Storage", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?photography,app",
      "https://source.unsplash.com/800x600/?camera,ui",
      "https://source.unsplash.com/800x600/?gallery,photos"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "TravelBuddy – Trip Planner & Diary",
    description:
      "Plan travels, track visited places on a map, log diary entries and share with friends.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Mapbox", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?travel,map",
      "https://source.unsplash.com/800x600/?itinerary,travel",
      "https://source.unsplash.com/800x600/?journal,travel"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "Eventify – Local Events Explorer",
    description:
      "Discover nearby events, RSVP, and get ticketing—all in one sleek React app.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?festival,app",
      "https://source.unsplash.com/800x600/?concert,ui",
      "https://source.unsplash.com/800x600/?event,planner"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "FitTrack – Fitness Goal Tracker",
    description:
      "Monitor workouts, nutrition, and progress with dynamic charts and selfies for comparison.",
    techStack: ["React.js", "Django", "PostgreSQL", "Chart.js", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?fitness,tracker",
      "https://source.unsplash.com/800x600/?workout,app",
      "https://source.unsplash.com/800x600/?gym,health"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "BookNest – Book Review & Library App",
    description:
      "Create personal libraries, write reviews, rate books and follow other readers.",
    techStack: ["React.js", "GraphQL", "Apollo", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?books,reading",
      "https://source.unsplash.com/800x600/?library,app",
      "https://source.unsplash.com/800x600/?book,review"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "ShopSmart – E‑commerce Storefront",
    description:
      "Browse, filter, and purchase products. Full cart flow with order tracking and user profile.",
    techStack: ["React.js", "Redux", "Node.js", "Express.js", "Stripe API", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?ecommerce,store",
      "https://source.unsplash.com/800x600/?shopping,cart",
      "https://source.unsplash.com/800x600/?product,ui"
    ],
    liveDemo: "#",
    githubLink: "#",
  },
  {
    title: "TutorConnect – Online Learning Platform",
    description:
      "Connect with tutors or students, schedule sessions, chat, and review lessons.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://source.unsplash.com/800x600/?education,app",
      "https://source.unsplash.com/800x600/?tutoring,ui",
      "https://source.unsplash.com/800x600/?online,classroom"
    ],
    liveDemo: "#",
    githubLink: "#",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      variants={cardVariants}
      className="rounded-3xl shadow-xl overflow-hidden w-full max-w-2xl transition-all hover:scale-[1.01]"
    >
      <div className="relative h-75">
        <img
          src={project.images[index]}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700"
        />
        <div className="absolute w-full flex justify-center gap-2 bottom-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold text-black">{project.title}</h2>
       <p className="mt-2 text-sm text-black">{project.description}</p>


        <div className="mt-2">
          <p className="text-sm text-black font-semibold mb-1">Tech Stack:</p>
          <div className="flex text-black flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-cyan-700 text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-600 hover:text-white transition font-semibold text-sm py-2 rounded-xl"
          >
            🚀 Live Demo
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-gray-400 text-gray-300 hover:bg-gray-600 hover:text-white transition font-semibold text-sm py-2 rounded-xl"
            >
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsCarousel = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 1024 ? 2 : 1
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
      setScrollIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(projects.length / visibleCards) - 1;

  const scroll = (dir) => {
    const newIndex = scrollIndex + dir;
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setScrollIndex(newIndex);
    }
  };

  const visibleProjects = projects.slice(
    scrollIndex * visibleCards,
    scrollIndex * visibleCards + visibleCards
  );

 return (
  <section
    ref={ref}
    className="py-16 px-2 transition-colors duration-500 text-black"
  >
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-3 mt-2 text-center text-black">
        🚀 Projects Showcase
      </h1>

      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={() => scroll(-1)}
          disabled={scrollIndex === 0}
          className="absolute left-[-30px] p-2 rounded-full text-black hover:text-red-600 transition z-10"
          aria-label="Scroll Left"
        >
          <ChevronLeft />
        </button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap lg:flex-nowrap justify-center gap-8 w-full transition-all text-balck duration-500 ease-in-out"
        >
          {visibleProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        <button
          onClick={() => scroll(1)}
          disabled={scrollIndex === maxIndex}
          className="absolute right-[-30px] p-2 rounded-full text-black hover:text-green-700 transition z-10"
          aria-label="Scroll Right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  </section>
);

};

export default ProjectsCarousel;

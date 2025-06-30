import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import javascriptbasic from "../assets/javascript_hackerrank.png"
import javabasic from "../assets/java_Hackerranl.png"
import sqlIntermediate from "../assets/sql(intermediate)_hackerrank.png"
import sqlAdvance from "../assets/restapi(intermediate)_hackerrank.png"
import restApi from "../assets/restapi(intermediate)_hackerrank.png"
import jsalgo from "../assets/js_algo_freecodecamp.png"
import reactcert from "../assets/react.jpg"
import apacheKafkabegi from "../assets/Kafka_begineer.jpeg"
import aiBegineer from "../assets/AI_fundamentals.png"
import jsUdemy from "../assets/js_udemy.jpg"
import pythonudemy from "../assets/python_udemy.jpg"
import pythonll from "../assets/python_link_lean.jpeg"
import jsll from "../assets/js_link_learn.jpeg"
import pythonMTA from "../assets/Venkata Vamsi Krishna_MTA_python.jpeg"

// ✅ Certificate data (fixed quotes and ensured image arrays)
const certificates = [
  {
    title: "Java Certification",
    organization: "HackerRank",
    description: "Demonstrated proficiency in Java fundamentals including OOP, data types, exception handling, loops, and problem-solving through hands-on coding challenges.",
    date: "AUG 2022",
    images: [javabasic],
    credentialLink: "https://www.hackerrank.com/certificates/iframe/c803d44ddfb6",
  },
  {
  title: "JavaScript Certification",
  organization: "HackerRank",
  description: "This certification demonstrates advanced proficiency in JavaScript, with a focus on modern web development practices. The course covers essential concepts including React components, hooks, state management, and scalable application architecture. Through hands-on challenges and real-world coding problems, learners gain practical experience and a strong foundation in building dynamic, interactive web applications.",
  date: "OCT 2024",
 images: [javascriptbasic],
  credentialLink: "https://www.hackerrank.com/certificates/iframe/a874efb4c484",
},
{
  title: "JavaScript Algorithms and Data Structures Certification",
  organization: "FreeCodeCamp",
  description: "This certification validates a strong understanding of JavaScript fundamentals, including variables, arrays, objects, loops, and functions. It also covers algorithmic thinking through challenges on recursion, sorting, and search algorithms. Additionally, the course includes in-depth practice with data structures such as stacks, queues, linked lists, and trees, providing a solid foundation for problem-solving in technical interviews and real-world applications.",
  date: "NOV 2023",
 images: [jsalgo],
  credentialLink: "https://www.freecodecamp.org/certification/venkat_14/javascript-algorithms-and-data-structures",
},
{
  title: "JavaScript Certification",
  organization: "Udemy",
  description: "This course offers comprehensive training in modern JavaScript, covering core concepts such as ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, and event handling. It also introduces front-end development with React, including components, hooks, and building scalable application architectures. Through hands-on projects and real-world coding exercises, learners gain practical skills for web development.",
  date: "DEC 2022",
 images: [jsUdemy],
  credentialLink: "https://www.udemy.com/certificate/UC-f33f0ccf-485b-404f-a40b-6e98cf9f4e80/",
},
{
  title: "JavaScript Certification",
  organization: "Linkedin Learning",
  description: "This certification program provides an in-depth understanding of modern JavaScript, emphasizing best practices and real-world application development. The course covers core JavaScript concepts, ES6+ features, and dives into building interactive UIs using React. Topics include functional components, hooks (such as useState and useEffect), and scalable front-end architecture. Ideal for developers aiming to build dynamic, responsive web applications.",
  date: "Jun 2026",
 images: [jsll],
  credentialLink: "https://www.linkedin.com/learning/certificates/c6a1050fbe44999458122e73847cc3557818ec27742969b2c7b09f9ad11d7b4a?u=2006794",
},
{
  title: "Python Begineers",
  organization: "udemy",
  description: "This course provides a solid introduction to Python programming, designed for individuals with little to no prior coding experience. It covers fundamental concepts such as variables, data types, conditionals, loops, functions, and basic object-oriented programming. Through hands-on exercises and projects, learners build a strong foundation in Python, making it easier to progress into data science, automation, or web development.",
  date: "Aug 2022",
 images: [pythonudemy],
  credentialLink: "https://www.udemy.com/certificate/UC-795d2249-7a46-4e76-b16f-47b59da10c48/",
},
{
  title: "Python Begineers",
  organization: "MTA and Credly",
  description: "This certification demonstrates foundational knowledge of Python programming, including key concepts such as variables, data types, control structures, functions, and basic error handling. The course also introduces core principles of software development using Python, preparing learners for further study in areas like automation, data analysis, and web development. It is ideal for individuals beginning their programming journey.",
  date: "JUN 2022",
 images: [pythonMTA],
  credentialLink: "https://www.credly.com/badges/00a41a03-fbeb-4851-983b-e30473a5fa41/linked_in?t=rf28au",
},
{
  title: "python certification",
  organization: "linkedin learning",
  description: "This course offers comprehensive training in Python programming, focusing on writing clean, efficient, and readable code. It covers fundamental concepts such as variables, loops, conditionals, functions, and object-oriented programming. Learners also explore real-world applications like data manipulation, automation, and working with libraries. Ideal for beginners and those looking to reinforce their Python foundations for broader technical careers.",
  date: "jun 2025",
 images: [pythonll],
  credentialLink: "",
},
{
  title: "React Certification",
  organization: "CutShort",
  description: "This certification demonstrates proficiency in building modern web applications using React. The course covers key concepts such as functional components, React hooks (useState, useEffect, etc.), state management, and component-based architecture. Learners gain hands-on experience in creating responsive, maintainable, and scalable front-end applications using best practices in React development.",
  date: "oct 2024",
 images: [reactcert],
  credentialLink: "https://cutshort.io/certificate/89873",
},
  {
    title: "SQL(Intermediate) Certificate",
    organization: "HackerRank",
    description: "This certification validates intermediate-level SQL skills, focusing on the ability to write complex queries and manipulate relational databases effectively. Topics covered include multi-table joins, subqueries, aggregation, filtering, sorting, window functions, and advanced SELECT operations. The course emphasizes practical, real-world problem-solving using SQL to analyze and manage data efficiently.",
    date: "OCT 2024",
    images: [
      sqlIntermediate
    ],
    credentialLink: "https://www.hackerrank.com/certificates/iframe/47c586afb000",
  },
  {
    title: "SQL(Advance) Certificate",
    organization: "HackerRank",
    description: "This advanced certification demonstrates expertise in complex SQL querying and database management. The course covers advanced topics such as recursive queries, window functions, query optimization, transaction management, stored procedures, and performance tuning. Learners develop the skills to handle large datasets, improve query efficiency, and solve sophisticated data challenges in real-world scenarios.",
    date: "OCT 2024",
    images: [
      sqlAdvance
    ],
    credentialLink: "https://www.hackerrank.com/certificates/iframe/e6fe1c36db79",
  },
  {
    title: "REST API Certificate",
    organization: "HackerRank",
    description: "This certification validates knowledge and skills in designing, building, and consuming RESTful APIs. The course covers core concepts including HTTP methods, status codes, endpoint design, authentication, and data serialization. Learners gain practical experience in creating scalable APIs and integrating them with applications, enabling efficient client-server communication.",
    date: "OCT 2024",
    images: [
     restApi
    ],
    credentialLink: "https://www.hackerrank.com/certificates/iframe/1da0dae32e3a",
  },
  {
    title: "Apache Kafka Begineer",
    organization: "Linkedin Learning",
    description: "This certification provides foundational knowledge of Apache Kafka, a powerful distributed event streaming platform widely used for real-time data processing. The course covers core Kafka concepts including producers, consumers, topics, partitions, and brokers. Learners gain hands-on experience through a real-time project that involves setting up Kafka clusters, producing and consuming event streams, and implementing data pipelines to handle large volumes of streaming data efficiently. This training equips learners with practical skills to build scalable, fault-tolerant streaming applications and integrate Kafka with various data systems.",
    date: "Jun 2025",
    images: [
     apacheKafkabegi
    ],
    credentialLink: "https://www.linkedin.com/learning/certificates/0cd1da716391d4df18be307ce598eec0b8668a3b26908dfec3eb82d875801e67?u=2006794",
  },
  {
    title: "AI Fundamentals",
    organization: "IBM",
    description: "This foundational course provides a comprehensive introduction to artificial intelligence (AI) concepts and techniques. Learners explore core topics such as machine learning, neural networks, natural language processing, and AI ethics. The program includes hands-on experience with Python programming, data manipulation, and building simple AI models. A key part of the course is a real-time project where learners develop AI-powered chatbots, gaining practical skills in designing conversational agents that can interact with users effectively. Designed for beginners, this certification equips individuals with essential skills to understand and apply AI technologies across various industries.",
    date: "Jun 2025",
    images: [
     aiBegineer
    ],
    credentialLink: "https://www.linkedin.com/learning/certificates/0cd1da716391d4df18be307ce598eec0b8668a3b26908dfec3eb82d875801e67?trk=share_certificate",
  },
  
];
// Motion variants
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

// Certificate card component
const CertificateCard = ({ certificate }) => {
  const [index, setIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const hasMultipleImages = certificate.images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificate.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certificate.images.length]);

  useEffect(() => {
    if (descriptionRef.current) {
      const isOverflowing =
        descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setIsTruncated(isOverflowing);
    }
  }, [certificate.description]);

  return (
    <motion.div
      variants={cardVariants}
      className="rounded-3xl shadow-xl overflow-hidden w-full max-w-2xl hover:scale-[1.01] transition-all border border-gray-600"
    >
      <div className="relative h-40 w-full">
        <img
          src={certificate.images[index]}
          alt={certificate.title}
          className="w-full h-full object-cover transition duration-400"
        />
        {hasMultipleImages && (
          <div className="absolute bottom-2 w-60 flex justify-center gap-2">
            {certificate.images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 text-gray-900">
        <h2 className="text-xl font-bold">{certificate.title}</h2>
        <p className="text-sm text-gray-600">{certificate.organization}</p>
        <p className="mt-1 text-sm text-gray-500 italic">{certificate.date}</p>

        <div
          ref={descriptionRef}
          className={`mt-2 text-sm text-gray-700 transition-all duration-300 ${
            showFullDescription ? "" : "line-clamp-2"
          }`}
        >
          {certificate.description}
        </div>

        {isTruncated && (
          <button
            onClick={() => setShowFullDescription((prev) => !prev)}
            className="text-blue-600 text-sm mt-1 underline hover:text-blue-500 transition"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}

        <div className="mt-3">
          <a
            href={certificate.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold text-sm py-2 px-4 rounded-xl"
          >
            🎓 View Credential
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const Certificates = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(window.innerWidth >= 1024 ? 2 : 1);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const maxIndex = Math.ceil(certificates.length / visibleCards) - 1;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
      setScrollIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (expanded) return;

    const interval = setInterval(() => {
      setScrollIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [expanded, visibleCards, maxIndex]);

  const scroll = (dir) => {
    const newIndex = scrollIndex + dir;
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setScrollIndex(newIndex);
    }
  };

  const handleExpandToggle = () => {
    setExpanded((prev) => !prev);
  };

  const visibleCertificates = expanded
    ? certificates
    : certificates.slice(scrollIndex * visibleCards, scrollIndex * visibleCards + visibleCards);

  return (
    <section
      id="certificates"
      ref={ref}
      className="py-16 px-4 transition-colors duration-500 text-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          🎖️ Certifications
        </h1>

        <button
          onClick={handleExpandToggle}
          className="mb-6 px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          {expanded ? "🔽 Collapse" : "🔼 Expand All Certificates"}
        </button>

        <div className="relative w-full flex justify-center items-center">
          {!expanded && (
            <button
              onClick={() => scroll(-1)}
              disabled={scrollIndex === 0}
              className="absolute left-[-30px] p-2 rounded-full text-blue-600 hover:text-blue-800 transition z-10 disabled:opacity-30"
            >
              <ChevronLeft />
            </button>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`flex ${
              expanded ? "flex-wrap justify-center" : "flex-wrap lg:flex-nowrap"
            } gap-8 w-full transition-all duration-500 ease-in-out`}
          >
            {visibleCertificates.map((certificate, i) => (
              <CertificateCard key={i} certificate={certificate} />
            ))}
          </motion.div>

          {!expanded && (
            <button
              onClick={() => scroll(1)}
              disabled={scrollIndex === maxIndex}
              className="absolute right-[-30px] p-2 rounded-full text-blue-600 hover:text-blue-800 transition z-10 disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
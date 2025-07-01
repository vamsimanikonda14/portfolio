import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FlyingBoy from "./components/FlyingBoy";
import Chatbot from "./components/Chatbot";
import 'animate.css';


const App = () => {

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "services", "Certificates", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 5; // Adjust trigger point as needed

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            // Update URL without scrolling/jumping
            if (window.location.hash !== `#${sections[i]}`) {
              window.history.replaceState(null, null, `#${sections[i]}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call on mount to set correct hash initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FlyingBoy />
      <Navbar />
      <main className="pt-16 relative z-10 bg-transparent">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="Certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
        <Chatbot />
      </main>
      <Footer />
    </>
  );
};

export default App;
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  const [homeRef, homeInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <div className="w-screen bg-[#232222] bg-cover text-[#14FFEC] overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <div
          id="home"
          ref={homeRef}
          className={`transition-opacity duration-1000 ${
            homeInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </div>
        <div
          id="about"
          ref={aboutRef}
          className={`transition-opacity duration-1000 ${
            aboutInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <About />
        </div>
        <div
          id="skills"
          ref={skillsRef}
          className={`transition-opacity duration-1000 ${
            skillsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Skills />
        </div>
        <div
          id="projects"
          ref={projectsRef}
          className={`transition-opacity duration-1000 ${
            projectsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Projects />
        </div>
        <div
          id="contact"
          ref={contactRef}
          className={`transition-opacity duration-1000 ${
            contactInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

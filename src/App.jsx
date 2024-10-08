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
import FadeInSection from "./components/FadeinSection";

function App() {
  return (
    <div className="w-screen bg-[#232222]  text-[#14FFEC] overflow-x-hidden bg-[url('https://github.com/yashsehgal29/images/blob/main/bg_2.png?raw=true')] bg-cover bg-fixed  bg-top   bg-no-repeat ">
      <Header />

      <div className="pt-24">
        <FadeInSection>
          <div id="home">
            <Home />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="about">
            <About />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="skills">
            <Skills />
          </div>
        </FadeInSection>
        <FadeInSection>
          {" "}
          <div id="projects">
            <Projects />
          </div>
        </FadeInSection>
        <FadeInSection>
          {" "}
          <div id="contact">
            <Contact />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
}

export default App;

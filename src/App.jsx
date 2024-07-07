import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="w-screen bg-[#232222] bg-cover text-[#14FFEC] overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

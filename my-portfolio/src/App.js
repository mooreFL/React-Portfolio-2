
import React from "react";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Navbar from "./components.js/Navbar";
import Projects from "./components.js/Projects";
import Skills from "./components.js/Skills";
import Testimonials from "./components.js/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

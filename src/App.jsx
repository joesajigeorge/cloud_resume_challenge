import React from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Company from "./components/Company";
import Certifications from "./components/Certifications";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <About />
        <Skills />
        <Company />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;

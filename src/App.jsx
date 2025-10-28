import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Company from "./components/Company";
import Certifications from "./components/Certifications";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import "./style.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route
          path="/projects"
          element={
            <div className="container">
              <Sidebar />
              <main className="content">
                <Projects />
              </main>
            </div>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <div className="container">
              <Sidebar />
              <main className="content">
                <ProjectPage />
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

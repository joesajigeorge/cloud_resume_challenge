import React from "react";
import { FaUser, FaTools, FaBuilding, FaCertificate, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About", icon: <FaUser /> },
  { href: "#skills", label: "Skills", icon: <FaTools /> },
  { href: "#companies", label: "Companies", icon: <FaBuilding /> },
  { href: "#certifications", label: "Certifications", icon: <FaCertificate /> },
  { href: "#experience", label: "Experience", icon: <FaProjectDiagram /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-pic">
        <img src="/profile.jpg" alt="Profile" />
      </div>
      <div className="profile-name">
        <h2>Joe Saji George</h2>
        <div className="tagline">DevOps Engineer</div>
      </div>
      <nav className="toc" aria-label="Main Navigation">
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.icon} <span style={{marginLeft: '8px'}}>{link.label}</span></a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-social" style={{textAlign: 'center', marginTop: '20px'}}>
        <a href="https://linkedin.com/in/joe-saji-george" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color: '#0077b5'}}>
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/joesajigeorge" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color: '#333'}}>
          <FaGithub size={22} />
        </a>
      </div>
    </aside>
  );
}

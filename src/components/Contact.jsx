import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="card">
      <section id="resumesummary" className="card card-margin">
        <h2>Resume Summary</h2>
        <p>
          DevOps Engineer with 7+ years of experience designing and implementing scalable CI/CD pipelines, cloud-native infrastructure, and automated deployment solutions. Skilled in managing enterprise-grade cloud environments (AWS, Azure), Kubernetes clusters, and Infrastructure as Code using Terraform and Ansible. Proven success in collaborating with global clients on telecom, cloud migration, and cost optimization projects. Currently employed in Australia under a 482 TSS visa. Open to employer-sponsored opportunities and relocation.
        </p>
        <a href="/Resume_Joe_Saji_George.pdf" download className="resume-btn">Download Resume</a>
      </section>

      <section id="contactme" className="card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div><FaPhone /> <strong>Phone:</strong></div>
          <div>+61 401 482 464</div>
          <div><FaEnvelope /> <strong>Email:</strong></div>
          <div><a href="mailto:sajigeorge.joe@gmail.com">sajigeorge.joe@gmail.com</a></div>
          <div><FaMapMarkerAlt /> <strong>Location:</strong></div>
          <div>Sydney, NSW 2113, Australia</div>
          <div><FaLinkedin /> <strong>LinkedIn:</strong></div>
          <div>
            <a href="https://linkedin.com/in/joe-saji-george" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/joe-saji-george
            </a>
          </div>
          <div><FaGithub /> <strong>GitHub:</strong></div>
          <div>
            <a href="https://github.com/joesajigeorge" target="_blank" rel="noopener noreferrer">
              github.com/joesajigeorge
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

import React from "react";
import { FaTools } from "react-icons/fa";

const skillIcons = [
  { src: "/aws.png", alt: "AWS", label: "AWS" },
  { src: "/azure.png", alt: "Azure", label: "Azure" },
  { src: "/docker.png", alt: "Docker", label: "Docker" },
  { src: "/kubernetes.png", alt: "Kubernetes", label: "Kubernetes" },
  { src: "/terraform.png", alt: "Terraform", label: "Terraform" },
  { src: "/jenkins.png", alt: "Jenkins", label: "Jenkins" },
  { src: "/ansible.png", alt: "Ansible", label: "Ansible" },
  { src: "/argocd.png", alt: "ArgoCD", label: "Argo CD" },
  { src: "/github.png", alt: "GitHub", label: "GitHub" },
  { src: "/gitlab.png", alt: "GitLab", label: "GitLab" },
  { src: "/AzureDevops.png", alt: "AzureDevOps", label: "Azure DevOps" },
  { src: "/grafana.png", alt: "Grafana", label: "Grafana" },
  { src: "/python.png", alt: "Python", label: "Python" },
  { src: "/nodejs.png", alt: "Node JS", label: "Node Js" },
];

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure"],
  },
  {
    title: "CI/CD Tools",
    skills: ["Jenkins", "GitLab Pipelines", "Azure DevOps", "GitHub Actions", "ArgoCD"],
  },
  {
    title: "Containerization & Orchestration",
    skills: ["Kubernetes", "Docker", "Helm", "Rancher", "Docker Compose"],
  },
  {
    title: "Infrastructure as Code (IaC)",
    skills: ["Terraform", "AWS CloudFormation", "Serverless Framework", "Ansible"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Grafana", "Prometheus", "New Relic"],
  },
  {
    title: "Code Quality & Static Analysis",
    skills: ["SonarQube"],
  },
  {
    title: "Artifact & Repository Management",
    skills: ["Nexus"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Node.js", "Shell Scripting", "PowerShell"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="card" aria-label="Technical Skills">
      <h2>
        <FaTools style={{ marginRight: "0.5em", color: "#0077b5" }} />
        Technical Skills
      </h2>
      <div className="skills-grid">
        {skillIcons.map((skill, idx) => (
          <div className="skill-item" key={idx} title={skill.label}>
            <img src={skill.src} alt={skill.alt} style={{ width: "40px", height: "40px" }} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
      <div className="skills-details">
        {skillCategories.map((cat, idx) => (
          <div className="skill-category-card" key={idx}>
            <h3>{cat.title}</h3>
            <ul>
              {cat.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

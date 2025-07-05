import React from "react";

const experiences = [
  {
    title: "Senior Associate Consultant, Infosys Ltd — Sydney, Australia",
    period: "June 2024 – Present",
    projects: [
      {
        name: "DevOps Engineer for Leading Australia-Based Telecom Client",
        bullets: [
          "Managed continuous integration with GitLab pipelines and continuous deployment using GitOps with ArgoCD.",
          "Orchestrated and monitored Kubernetes applications using Rancher for streamlined operations.",
          "Administered and troubleshot Ansible playbooks, leveraging Ansible Tower to optimize automation.",
          "Developed Grafana dashboards and integrated Prometheus for real-time application and infrastructure monitoring.",
          "Led proactive incident response and root cause analysis for critical production issues.",
        ],
      },
    ],
  },
  {
    title: "Senior Associate Consultant, Infosys Ltd — Thiruvananthapuram, India",
    period: "November 2021 – June 2024",
    projects: [
      {
        name: "DevOps Engineer for Leading UK-Based Telecom Client",
        bullets: [
          "Led migration and re-architecture of applications from on-premises to AWS cloud.",
          "Automated CI/CD pipelines using Jenkins and provisioned infrastructure with Terraform and AWS Cloudformation.",
          "Deployed Serverless application to AWS using AWS SAM.",
          "Optimized cloud costs through usage tracking and resource optimization.",
          "Collaborated with developers to troubleshoot production issues.",
        ],
      },
      {
        name: "DevOps Engineer for Leading Australia-Based Telecom Client (Previous)",
        bullets: [
          "Orchestrated containerized applications using EKS.",
          "Implemented monitoring using New Relic.",
          "Created and managed CICD pipelines using Jenkins.",
          "Achieved 30% reduction in operational expenses through cloud cost optimization.",
          "Converted data pipelines to serverless applications using AWS Lambda and AWS Glue.",
        ],
      },
    ],
  },
  {
    title: "DevOps Engineer, Cabot Technology Solutions — Ernakulam, India",
    period: "June 2018 – November 2021",
    projects: [
      {
        name: "DevOps Engineer for Other Projects",
        bullets: [
          "Implemented scalable applications on Azure and AWS, orchestrating containerized services.",
          "Developed CI/CD pipelines with Jenkins and Azure DevOps.",
          "Orchestrated containerized applications using AKS and EKS.",
          "Deployed serverless applications using Serverless Framework.",
          "Implemented CI/CD with Azure DevOps and Jenkins.",
          "Managed PostgreSQL and MySQL database servers.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="card">
      <h2>Experience & Projects</h2>
      {experiences.map((job, idx) => (
        <div className="job" key={idx}>
          <h3>{job.title}</h3>
          <p><strong>{job.period}</strong></p>
          {job.projects.map((project, pIdx) => (
            <div className="project" key={pIdx}>
              <h4>{project.name}</h4>
              <ul>
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

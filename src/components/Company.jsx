import React from "react";
import { FaBuilding } from "react-icons/fa";

const companies = [
  {
    name: "Infosys Ltd",
    locations: "Sydney, Australia & Thiruvananthapuram, India",
    roles: "Senior Associate Consultant",
    contributions: [
      "CI/CD & Automation: Designed and maintained GitLab and Jenkins pipelines, automated infrastructure provisioning with Terraform and CloudFormation, and improved Ansible workflows using Ansible Tower and Automation Platform.",
      "Kubernetes & Cloud: Managed Kubernetes workloads using EKS and Rancher, performed application re-platforming to AWS using AWS SAM, and improved reliability via GitOps with ArgoCD.",
      "Monitoring & Incident Response: Set up monitoring dashboards with Grafana, Prometheus, and New Relic; handled production issues with proactive incident response and root cause analysis.",
      "Cost Optimization: Reduced cloud operational costs by 30% through environment consolidation, scheduled resource cleanup, and migration to serverless AWS Lambda and Glue."
    ]
  },
  {
    name: "Cabot Technology Solutions",
    locations: "Ernakulam, India",
    roles: "DevOps Engineer",
    contributions: [
      "Cloud Infrastructure & Deployment: Deployed and managed production and non-production environments in AWS and Azure, leveraging services like AKS and EKS for container orchestration.",
      "CI/CD & Automation: Built and maintained CI/CD pipelines using Azure DevOps and Jenkins; automated infrastructure provisioning with Terraform and Azure ARM templates.",
      "Serverless & Database Management: Deployed serverless applications using the Serverless Framework on AWS; administered PostgreSQL and MySQL databases for high availability and performance."
    ]
  }
];

export default function Company() {
  return (
    <section id="companies" className="card">
      <h2>
        <FaBuilding style={{ marginRight: "0.5em", color: "#0077b5" }} />
        Work Experience
      </h2>
      {companies.map((company, idx) => (
        <div className="company" key={idx}>
          <h3>{company.name}</h3>
          <p>
            <strong>Location{company.locations.includes('&') ? 's' : ''}:</strong> {company.locations}
          </p>
          <p>
            <strong>Role{company.roles.includes(',') ? 's' : ''}:</strong> {company.roles}
          </p>
          <p><strong>Key Contributions:</strong></p>
          <ul>
            {company.contributions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

import React from "react";
import { FaBuilding } from "react-icons/fa";

const companies = [
  {
    name: "Infosys Ltd",
    locations: "Sydney, Australia & Thiruvananthapuram, India",
    roles: "Senior Associate Consultant",
    contributions: [
      "Migrated applications from on-premises to AWS cloud",
      "Automated CI/CD pipelines using Jenkins",
      "Reduced operational costs by 30% through optimization"
    ]
  },
  {
    name: "Cabot Technology Solutions",
    locations: "Ernakulam, India",
    roles: "DevOps Engineer",
    contributions: [
      "Implemented scalable applications on Azure and AWS",
      "Developed CI/CD pipelines with Jenkins and Azure DevOps",
      "Enhanced system reliability through container orchestration"
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

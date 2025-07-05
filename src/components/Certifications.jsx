import React from "react";
import { FaCertificate, FaAward, FaSpinner } from "react-icons/fa";

const certifications = [
  {
    icon: <FaAward color="#f1c40f" />,
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "November 2018",
    inProgress: false,
  },
  {
    icon: <FaAward color="#0078d4" />,
    title: "Microsoft Certified Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 2020",
    inProgress: false,
  },
  {
    icon: <FaAward color="#f1c40f" />,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2022",
    inProgress: false,
  },
  {
    icon: <FaSpinner className="spin" color="#888" />,
    title: "AWS Certified DevOps Engineer - Professional",
    issuer: "",
    date: "In Progress (Target: 2025)",
    inProgress: true,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="card" aria-label="Certifications">
      <h2>
        <FaCertificate style={{ color: "#2ecc71", marginRight: "0.5em" }} />
        Certifications
      </h2>
      <ul className="certs-list">
        {certifications.map((cert, idx) => (
          <li key={idx} className={cert.inProgress ? "in-progress" : ""}>
            {cert.icon}
            <div>
              <strong>{cert.title}</strong>
              <p>
                {cert.issuer && <>{cert.issuer} | </>}
                {cert.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

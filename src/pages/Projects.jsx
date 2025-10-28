import React from "react";
import { Link } from 'react-router-dom';
import { projectRegistry } from './projects/registry';

export default function Projects() {
  return (
    <section className="page projects">
      <h1>Projects & Blog</h1>

      <div style={{ display: 'grid', gap: 18 }}>
        {projectRegistry.map(p => (
          <article key={p.slug} className="post">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <p>
              <Link to={`/projects/${p.slug}`}>Read full page</Link>
              {' • '}
              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noreferrer">View repository</a>
              ) : (
                <span style={{ color: '#666' }}>No repo link</span>
              )}
            </p>
          </article>
        ))}
      </div>

      {/* Add additional static posts or sections below if needed */}
    </section>
  );
}

import React from "react";
import { Link } from 'react-router-dom';
import { interestRegistry } from './interests/registry';

export default function Interests() {
  return (
    <section className="page interests">
      <h1>Blog & Personal Posts</h1>

      <div style={{ display: 'grid', gap: 18 }}>
        {interestRegistry.map(p => (
          <article key={p.slug} className="post">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <p>
              <Link to={`/interests/${p.slug}`}>Read full post</Link>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
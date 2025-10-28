import React, { Suspense, useMemo, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findProject } from './projects/registry';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-');
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  const contentRef = useRef(null);

  const LazyComponent = useMemo(() => {
    if (!project || !project.loader) return null;
    return React.lazy(project.loader);
  }, [project]);

  const [toc, setToc] = useState([]);

  if (!project) {
    return (
      <div className="card">
        <h2>Project not found</h2>
        <p>No project with the slug "{slug}" was found.</p>
        <p>
          <Link to="/projects">Back to Projects</Link>
        </p>
      </div>
    );
  }

  useEffect(() => {
    let mounted = true;

    function updateTOC() {
      const root = contentRef.current;
      if (!root) {
        if (mounted) setToc([]);
        return;
      }

      const headings = root.querySelectorAll('h2, h3');
      const seen = {};
      const items = Array.from(headings).map(h => {
        const text = h.textContent.trim();
        let id = h.id && h.id.length ? h.id : slugify(text);
        const base = id;
        let i = 1;
        while (seen[id]) {
          id = `${base}-${i++}`;
        }
        seen[id] = true;
        if (!h.id) h.id = id;
        return { id, text, level: h.tagName.toLowerCase() === 'h2' ? 2 : 3 };
      });

      if (mounted) setToc(items);
    }

    // Initial scan after a short delay to allow the lazy component to render
    const timer = setTimeout(updateTOC, 80);

    // Observe DOM changes inside the content to update TOC dynamically
    const observer = new MutationObserver(updateTOC);
    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
    }

    return () => {
      mounted = false;
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [LazyComponent, slug]);

  return (
    <section className="page projects">
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/projects">Projects</Link> <span>›</span> <strong>{project.title}</strong>
          </div>

          <div className="card" ref={contentRef}>
            <h1>{project.title}</h1>

            <Suspense fallback={<div>Loading project...</div>}>
              {LazyComponent ? <LazyComponent /> : <div>Unable to load project.</div>}
            </Suspense>

            {/* <p style={{ marginTop: 16 }}>
              <a href={project.repo} target="_blank" rel="noreferrer">View repository</a>
            </p> */}

            {/* Social share buttons removed per user request */}

            <p style={{ marginTop: 12 }}>
              <Link to="/projects">Back to Projects</Link>
            </p>
          </div>
        </div>

        {/* Contents (TOC) section removed as requested */}
      </div>
    </section>
  );
}

import React, { Suspense, useMemo, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findInterest } from './interests/registry';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-');
}

export default function InterestPage() {
  const { slug } = useParams();
  const post = findInterest(slug);

  const contentRef = useRef(null);

  const LazyComponent = useMemo(() => {
    if (!post || !post.loader) return null;
    return React.lazy(post.loader);
  }, [post]);

  const [toc, setToc] = useState([]);

  if (!post) {
    return (
      <div className="card">
        <h2>Post not found</h2>
        <p>No blog post with the slug "{slug}" was found.</p>
        <p>
          <Link to="/interests">Back to Posts</Link>
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

    const timer = setTimeout(updateTOC, 80);

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
    <section className="page interests">
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/interests">Posts</Link> <span>›</span> <strong>{post.title}</strong>
          </div>

          <div className="card" ref={contentRef}>
            <h1>{post.title}</h1>

            <Suspense fallback={<div>Loading post...</div>}>
              {LazyComponent ? <LazyComponent /> : <div>Unable to load post.</div>}
            </Suspense>

            <p style={{ marginTop: 12 }}>
              <Link to="/interests">Back to Posts</Link>
            </p>
          </div>
        </div>

        {/* TOC section could be added here if desired */}
      </div>
    </section>
  );
}
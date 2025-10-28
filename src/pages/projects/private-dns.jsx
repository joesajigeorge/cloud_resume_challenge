/*
  Project page template:
  - Keep long-form content inside the component's JSX.
  - You can include headings, lists, code blocks (use <pre><code>), images, etc.
  - When adding a new page, register it in src/pages/projects/registry.js
*/

import React from "react";

export default function PrivateDNS() {
  return (
    <article className="post">
      <h2>Complete Private DNS Topology</h2>
      <small>2025-10-20 • GitHub: https://github.com/joesajigeorge/private-dns</small>

      <section>
        <h3>Project Description</h3>
        <p>
          Implementation of a full private DNS hierarchy using Docker Compose and BIND containers. Includes a root server, TLD servers, authoritative masters and replicas, and an iterative resolver. Designed for isolated DNS experiments and testing without external dependencies.
        </p>
      </section>

      <section>
        <h3>Architecture</h3>
        <p>
          The DNS topology models real-world delegation with:
        </p>
        <ul>
          <li>Root zone delegating to custom TLDs (.lab, .pvt)</li>
          <li>TLD servers delegating to multiple authoritative zones</li>
          <li>Master authoritative servers with zone transfer notifications to replicas</li>
          <li>Recursive resolver walking the custom hierarchy</li>
        </ul>
      </section>

      <section>
        <h3>Setup and Usage</h3>
        <p>
          Services are started in dependency order to ensure zone delegation readiness:
        </p>
        <pre><code>
docker-compose up -d root tld-lab tld-pvt{'\n'}
docker-compose up -d auth-master auth-replica1 auth-replica2{'\n'}
docker-compose up -d resolver
        </code></pre>
        <p>
          Logs are persisted per service under the <code>logs/</code> directory. Zone files with proper SOA, NS, and glue are used for each authoritative zone.
        </p>
      </section>

      <section>
        <h3>Testing</h3>
        <p>
          Validate resolution from the recursive resolver with commands like:
        </p>
        <pre><code>
dig @127.0.0.1 -p 10545 www.test1example.lab{'\n'}
dig @127.0.0.1 -p 10545 api.test1example.pvt{'\n'}
dig @127.0.0.1 -p 10545 www.test3.example.lab{'\n'}
        </code></pre>
        <p>
          Adjust ports and addresses to match your compose deployment. Logs assist in diagnosing resolution and transfer issues.
        </p>
      </section>

      <section>
        <h3>Additional Information</h3>
        <p>
          This setup uses NOTIFY and AXFR/IXFR for synchronization between master and replica DNS servers. Parent TLD zones delegate explicitly with matching glue records for robust referrals.
        </p>
        <p>
          Recommended for on-prem and lab environments where public DNS is unavailable or undesirable.
        </p>
      </section>

      <p>
        <a href="https://github.com/joesajigeorge/private-dns" target="_blank" rel="noreferrer">
          View repository on GitHub
        </a>
      </p>
    </article>
  );
}

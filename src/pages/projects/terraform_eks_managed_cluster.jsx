/*
  Project page template:
  - Keep long-form content inside the component's JSX.
  - You can include headings, lists, code blocks (use <pre><code>), images, etc.
  - When adding a new page, register it in src/pages/projects/registry.js
*/

import React from "react";

export default function ServerlessAPI() {
  return (
    <article className="post">
      <h2>AWS EKS Infrastructure Deployment Using Terraform (EKS Managed Cluster)</h2>
      <small>2025-10-29 • GitHub: https://github.com/joesajigeorge/terraform_eks_managed_cluster</small>
      <section>
        <h3>Project Description</h3>
        <p>
          Terraform code to deploy an AWS EKS Managed Cluster with VPC, subnets, security groups, and node groups.
        </p>
      </section>

      <section>
        <h3>Architecture</h3>
        <p>
          The code consists of 2 modules:
        </p>
        <ul>
          <li>eks module - consisting of eks, associated iam roles</li>
          <li>vpc module - consisting of vpc, private and public subnetes, route tables etc</li>
          <li>node_group - child module under eks module consisting of node group configurations </li>
          <li>Recursive resolver walking the custom hierarchy</li>
        </ul>
      </section>

      <section>
        <h3>Setup and Usage</h3>
        <p>
          Run the following commands to initiate, validate and deploy the terraform code:
        </p>
        <p>
          Initialize providers and modules (will use backend configured in backend.tf)
        </p>
        <pre><code>
          terraform init
        </code></pre>
        <p>
          Validate configuration
        </p>
        <pre><code>
          terraform validate
        </code></pre>
        <p>
          Create an execution plan (recommended to inspect before apply)
        </p>
        <pre><code>
          terraform plan
        </code></pre>
        <p>
          Apply the produced plan
        </p>
        <pre><code>
          terraform apply
        </code></pre>

      </section>

      <p>
        <a href="https://github.com/joesajigeorge/terraform_eks_managed_cluster" target="_blank" rel="noreferrer">
          View repository on GitHub
        </a>
      </p>
    </article>
  );
}

// Register project pages here. Add new entries to create new pages.
// Use `loader` for dynamic import so pages are lazy-loaded.
export const projectRegistry = [
  {
    slug: 'private-dns',
    title: 'Complete Private DNS Topology',
    desc: 'Implementation of a full private DNS hierarchy using Docker Compose and BIND containers.',
    repo: 'https://github.com/joesajigeorge/private-dns',
    loader: () => import('./private-dns'),
  },
  {
    slug: 'terraform-eks-managed-cluster',
    title: 'AWS EKS Infrastructure Deployment Using Terraform (EKS Managed Cluster)',
    desc: 'Terraform code to deploy an AWS EKS Managed Cluster with VPC, subnets, security groups, and node groups.',
    repo: 'https://github.com/joesajigeorge/terraform_eks_managed_cluster',
    loader: () => import('./terraform_eks_managed_cluster'),
  },
];

export function findProject(slug) {
  return projectRegistry.find(p => p.slug === slug) || null;
}

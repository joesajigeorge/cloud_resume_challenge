// Register interest/blog pages here. Use `loader` for dynamic import so posts are lazy-loaded.
export const interestRegistry = [
  {
    slug: 'clubs-visited',
    title: "Clubs I've Been To",
    desc: "A list of nightclubs and venues I’ve visited and my impressions.",
    loader: () => import('./clubs-visited'),
  },
  {
    slug: 'music-taste',
    title: "My Taste in Music",
    desc: "Tracks and genres that resonate with me, complete with audio/video snippets.",
    loader: () => import('./music-taste'),
  },
  {
    slug: 'walks-visited',
    title: "Walks I've Taken",
    desc: "Memorable walking routes and locations that I enjoy.",
    loader: () => import('./walks-visited'),
  },
  {
    slug: 'reading-list',
    title: "My Reading List",
    desc: "Books I've completed, currently reading, and want to explore.",
    loader: () => import('./reading-list'),
  },
];

export function findInterest(slug) {
  return interestRegistry.find(p => p.slug === slug) || null;
}

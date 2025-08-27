const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';

export default function sitemap() {
  const routes = [
    '/',
    '/pricing',
    '/help',
    '/cookie-policy',
    '/cookies',
    '/privacy-policy',
    '/terms',
    '/gdpr',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.7,
  }));
}

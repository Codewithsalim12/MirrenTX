export default function sitemap() {
  const baseUrl = 'https://mirrentx.vercel.app';

  // Public pages that we want Google to index for Kupwara and Kashmir rentals
  const routes = [
    '',
    '/rentals',
    '/services',
    '/About',
    '/Contact',
    '/Gallery',
    '/Feedback',
    '/PrivacyPolicy',
    '/TermsofService',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/rentals' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/rentals' ? 0.9 : 0.8,
  }));

  return routes;
}

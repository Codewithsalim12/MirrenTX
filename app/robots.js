export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/Admin', '/AdminPannel', '/api/', '/sign-in', '/sign-up'],
    },
    sitemap: 'https://mirrentx.vercel.app/sitemap.xml',
  }
}

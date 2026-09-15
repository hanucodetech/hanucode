import { SITE_CONFIG } from '@/lib/constants';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    '', '/about', '/products', '/services', '/solutions',
    '/case-studies', '/technology', '/security', '/resources',
    '/careers', '/contact', '/privacy-policy', '/terms-of-service',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticPages, ...productPages, ...servicePages, ...caseStudyPages, ...blogPages];
}

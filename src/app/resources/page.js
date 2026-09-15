import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import ResourcesPageClient from './ResourcesPageClient';
import { blogPosts } from '@/data/blogPosts';

export const metadata = createMetadata({
  title: 'Resources & Blog | HanuCode',
  description: 'Insights on software engineering, AI, cybersecurity, SaaS, cloud, and DevOps from the HanuCode engineering team.',
  path: '/resources',
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Resources"
        title="Insights & Engineering Knowledge"
        description="Articles, guides, and perspectives on building secure, scalable software from our engineering team."
      />
      <ResourcesPageClient posts={blogPosts} />
    </>
  );
}

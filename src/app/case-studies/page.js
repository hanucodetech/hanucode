import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import CaseStudiesPageClient from './CaseStudiesPageClient';
import { caseStudies } from '@/data/caseStudies';

export const metadata = createMetadata({
  title: 'HanuCode Case Studies | Software Engineering & Technology Solutions',
  description: 'Explore how HanuCode has helped organizations solve complex technology challenges with custom software, automation, and AI solutions.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Technology That Delivers Results"
        description="Real-world projects demonstrating our approach to solving complex business problems with secure, scalable software."
      />
      <CaseStudiesPageClient caseStudies={caseStudies} />
    </>
  );
}

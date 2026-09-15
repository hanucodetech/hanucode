import { createMetadata } from '@/lib/metadata';
import Hero from '@/components/sections/Hero';
import LogoCloud from '@/components/sections/LogoCloud';
import TrustSection from '@/components/sections/TrustSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProductsGrid from '@/components/sections/ProductsGrid';
import WhyHanuCode from '@/components/sections/WhyHanuCode';
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid';
import TechnologyGrid from '@/components/sections/TechnologyGrid';
import IndustriesSection from '@/components/sections/IndustriesSection';
import SecuritySection from '@/components/sections/SecuritySection';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';
import { homeFaqs } from '@/data/faqs';

export const metadata = createMetadata({
  title: 'HanuCode | Building Ideas into Software',
  description:
    'HanuCode builds secure SaaS products, cybersecurity solutions, AI systems and custom software for modern businesses.',
  path: '/',
  keywords: ['software company', 'SaaS products', 'cybersecurity', 'custom software', 'AI automation'],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <TrustSection />
      <ServicesGrid
        badge="What We Do"
        title="From Idea to Production"
        description="Comprehensive technology services designed to take your ideas from concept to production-ready software."
      />
      <ProductsGrid
        badge="Products"
        title="Products Built for Real-World Problems"
        description="Purpose-built software products addressing common enterprise challenges."
      />
      <WhyHanuCode />
      <CaseStudiesGrid
        badge="Case Studies"
        title="Technology That Solves Business Problems"
        description="See how we've helped organizations overcome complex technology challenges."
        limit={4}
      />
      <TechnologyGrid
        badge="Technology"
        title="Built With Modern Technology"
      />
      <IndustriesSection />
      <SecuritySection />
      <Testimonials />
      <FAQ faqs={homeFaqs} />
      <ContactCTA />
    </>
  );
}

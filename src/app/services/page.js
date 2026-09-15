import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import ServiceCard from '@/components/cards/ServiceCard';
import CTASection from '@/components/common/CTASection';
import { services } from '@/data/services';

export const metadata = createMetadata({
  title: 'Software Development & Technology Consulting | HanuCode',
  description: 'Expert software development, AI automation, cybersecurity, cloud DevOps, and technology consulting services for enterprise organizations.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Engineering Expertise for Complex Technology Challenges"
        description="From custom software development to AI integration and cloud infrastructure — we deliver end-to-end engineering services."
      />
      <section className="section-padding bg-surface">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="p-6 rounded-2xl border border-border-light">
                <h3 className="font-bold text-navy-900">{service.title}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div><span className="font-semibold text-slate-500">Problem:</span> <span className="text-slate-600">{service.problem}</span></div>
                  <div><span className="font-semibold text-slate-500">Approach:</span> <span className="text-slate-600">{service.approach}</span></div>
                  <div><span className="font-semibold text-slate-500">Outcome:</span> <span className="text-slate-600">{service.outcome}</span></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection variant="default" />
    </>
  );
}

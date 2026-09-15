import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { getServiceBySlug, services } from '@/data/services';
import { serviceSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Badge from '@/components/common/Badge';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/common/CTASection';
import { getIcon } from '@/lib/icons';
import { caseStudies } from '@/data/caseStudies';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} Services | HanuCode`,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const relatedCaseStudies = caseStudies.slice(0, 2);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.title },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero breadcrumbs={breadcrumbs} badge="Service" title={service.title} description={service.overview}>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
          </div>
          <div className="flex flex-wrap gap-2">
            {service.technology.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Business Challenges</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.challenges.map((c) => (
              <div key={c} className="flex items-start gap-3 p-4 rounded-xl border border-border-light">
                <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-600">{c}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Approach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.process.map((step, i) => (
              <div key={step.step} className="p-5 rounded-2xl border border-border-light bg-white">
                <span className="text-sm font-bold text-brand-blue">Step {i + 1}</span>
                <h3 className="font-bold text-navy-900 mt-1">{step.step}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 p-3 rounded-lg bg-surface border border-border-light">
                <CheckCircle className="h-4 w-4 text-brand-teal shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{cap}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Security</h2>
          <ul className="space-y-2">
            {service.security.map((s) => (
              <li key={s} className="flex items-start gap-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Related Case Studies</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </Container>
      </section>

      <FAQ faqs={service.faqs} title={`${service.title} FAQ`} />
      <CTASection
        title={`Need ${service.title}?`}
        description="Let's discuss how our engineering team can help solve your technology challenges."
      />
    </>
  );
}

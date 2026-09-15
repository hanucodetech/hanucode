import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { breadcrumbSchema, JsonLd } from '@/lib/structured-data';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Badge from '@/components/common/Badge';
import CTASection from '@/components/common/CTASection';
import ProductVisual from '@/components/common/ProductVisual';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return createMetadata({
    title: `${cs.title} | HanuCode Case Study`,
    description: cs.challenge,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: cs.title },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero breadcrumbs={breadcrumbs} badge={cs.industry} title={cs.title} description={cs.overview} />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Business Challenge</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Our Solution</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Architecture</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{cs.architecture}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Key Features</h2>
                <ul className="mt-4 space-y-2">
                  {cs.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Implementation</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{cs.implementation}</p>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="p-6 rounded-2xl border border-border-light bg-surface">
                <h3 className="font-bold text-navy-900">Client</h3>
                <p className="mt-2 text-sm text-slate-600">{cs.clientDescription}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-surface">
                <h3 className="font-bold text-navy-900">Industry</h3>
                <p className="mt-2"><Badge variant="navy">{cs.industry}</Badge></p>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-surface">
                <h3 className="font-bold text-navy-900">Technology</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cs.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-border-light bg-brand-teal/5">
                <h3 className="font-bold text-navy-900">Key Result</h3>
                <p className="mt-2 text-sm font-medium text-brand-teal">{cs.result}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Results</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cs.results.map((r) => (
              <div key={r} className="flex items-start gap-3 p-4 rounded-xl border border-border-light bg-white">
                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-700 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Security</h2>
          <ul className="space-y-2">
            {cs.security.map((s) => (
              <li key={s} className="flex items-start gap-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border-light">
            <ProductVisual name={cs.title.split(' ')[0]} color="blue" />
          </div>
        </Container>
      </section>

      <CTASection
        title="Facing a Similar Challenge?"
        description="Let's discuss how we can help solve your technology challenges."
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View All Case Studies', href: '/case-studies' }}
      />
    </>
  );
}

import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { getIcon } from '@/lib/icons';
import { whyJoin, engineeringCulture, hiringProcess, openPositions } from '@/data/careers';
import { CheckCircle } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Careers at HanuCode | Join Our Engineering Team',
  description: 'Join HanuCode and build secure, scalable software. Explore open positions in engineering, DevOps, AI, and design.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Build Software That Makes a Difference"
        description="Join a team of engineers passionate about building secure, scalable software for organizations worldwide."
      />

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">Why Join HanuCode</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.title} className="p-6 rounded-2xl border border-border-light text-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Engineering Culture</h2>
              <ul className="mt-6 space-y-3">
                {engineeringCulture.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Learning & Growth</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We invest in continuous learning through mentorship, tech talks, conference attendance,
                and dedicated time for professional development. Our engineers work across diverse
                projects that expand their skills and expertise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">Open Positions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openPositions.map((job) => (
              <article key={job.id} className="p-6 rounded-2xl border border-border-light card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{job.department} · {job.location} · {job.type}</p>
                    <p className="mt-2 text-sm text-slate-600">{job.description}</p>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">Apply</Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">Hiring Process</h2>
          <div className="space-y-6">
            {hiringProcess.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-navy-900">{step.step}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="We're always interested in meeting talented engineers. Send us your resume and tell us how you'd like to contribute."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={null}
        variant="default"
      />
    </>
  );
}

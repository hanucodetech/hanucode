import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import CTASection from '@/components/common/CTASection';
import { getIcon } from '@/lib/icons';
import { solutions } from '@/data/solutions';
import { CheckCircle } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Business Technology Solutions | HanuCode',
  description: 'Technology solutions for digital transformation, workflow automation, enterprise software, secure workforce management, and more.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="Technology Solutions for Business Challenges"
        description="We focus on solving real business problems — not just implementing technology. Explore solutions designed for your industry and operational needs."
      />
      <section className="section-padding bg-surface">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const Icon = getIcon(solution.icon);
              return (
                <article key={solution.slug} className="p-6 md:p-8 rounded-2xl border border-border-light bg-white card-hover">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900">{solution.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{solution.description}</p>
                  <ul className="mt-4 space-y-2">
                    {solution.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <CTASection
        title="Need a Custom Solution?"
        description="Tell us about your business challenge and we'll recommend the right approach."
      />
    </>
  );
}

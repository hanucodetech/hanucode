import { createMetadata } from '@/lib/metadata';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import TechnologyCard from '@/components/cards/TechnologyCard';
import CTASection from '@/components/common/CTASection';
import { technologyCategories } from '@/data/technologies';

export const metadata = createMetadata({
  title: 'Technology Stack & Engineering | HanuCode',
  description: 'Explore the modern technologies HanuCode uses to build scalable, secure software — frontend, backend, cloud, AI, DevOps, and security.',
  path: '/technology',
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        badge="Technology"
        title="Modern Technology, Purposeful Architecture"
        description="Our technology choices are driven by scalability, maintainability, and the specific requirements of each project — not trends."
      />
      <section className="section-padding bg-surface">
        <Container>
          <div className="space-y-12">
            {technologyCategories.map((category) => (
              <article key={category.id} id={category.id} className="p-6 md:p-8 rounded-2xl border border-border-light bg-white">
                <h2 className="text-2xl font-bold text-navy-900">{category.title}</h2>
                <p className="mt-2 text-slate-600">{category.description}</p>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Why We Use It</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{category.whyWeUse}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Typical Use Cases</h3>
                    <ul className="space-y-1">
                      {category.useCases.map((uc) => (
                        <li key={uc} className="text-sm text-slate-600">• {uc}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Architecture Fit</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{category.architecture}</p>
                  </div>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.technologies.map((tech) => (
                    <TechnologyCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection variant="default" />
    </>
  );
}

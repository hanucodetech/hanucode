import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { getProductBySlug, products } from '@/data/products';
import { softwareApplicationSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data';
import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Badge from '@/components/common/Badge';
import ProductVisual from '@/components/common/ProductVisual';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createMetadata({
    title: `${product.name} | HanuCode Products`,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: product.name },
  ];

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'security', label: 'Security' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      <JsonLd data={softwareApplicationSchema(product)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero
        breadcrumbs={breadcrumbs}
        badge={product.category}
        title={product.name}
        description={product.tagline}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          {product.features.map((f) => <Badge key={f}>{f}</Badge>)}
        </div>
      </PageHero>

      <div className="lg:flex">
        <aside className="hidden lg:block w-56 shrink-0 border-r border-border-light">
          <nav className="sticky top-20 p-6 space-y-1" aria-label="Product sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-surface-alt rounded-lg transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <section id="overview" className="section-padding bg-white">
            <Container size="narrow">
              <h2 className="text-2xl font-bold text-navy-900">Product Overview</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-border-light">
                <ProductVisual name={product.name} color={product.color} />
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-navy-900">Business Problem</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{product.businessProblem}</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Our Solution</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{product.solution}</p>
                </div>
              </div>
            </Container>
          </section>

          <section id="features" className="section-padding bg-surface">
            <Container>
              <h2 className="text-2xl font-bold text-navy-900 mb-8">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {product.keyFeatures.map((feature) => (
                  <div key={feature.title} className="p-6 rounded-2xl border border-border-light bg-white">
                    <h3 className="font-bold text-navy-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <h3 className="font-bold text-navy-900 mb-4">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((uc) => <Badge key={uc} variant="cyan">{uc}</Badge>)}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-navy-900 mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>

          <section id="architecture" className="section-padding bg-white">
            <Container size="narrow">
              <h2 className="text-2xl font-bold text-navy-900">Architecture</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{product.architecture}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </Container>
          </section>

          <section id="security" className="section-padding bg-surface">
            <Container size="narrow">
              <h2 className="text-2xl font-bold text-navy-900">Security</h2>
              <ul className="mt-4 space-y-2">
                {product.security.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section id="integrations" className="section-padding bg-white">
            <Container size="narrow">
              <h2 className="text-2xl font-bold text-navy-900">Integrations</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.integrations.map((i) => (
                  <span key={i} className="px-4 py-2 rounded-lg border border-border-light bg-surface text-sm font-medium text-navy-900">{i}</span>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="gradient" showArrow className="group">Request a Demo</Button>
              </div>
            </Container>
          </section>

          <div id="faq">
            <FAQ faqs={product.faqs} title={`${product.name} FAQ`} />
          </div>
        </div>
      </div>

      <CTASection
        title={`Interested in ${product.name}?`}
        description="Contact our team to learn how this product can address your organization's needs."
        primaryCta={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCta={{ label: 'View All Products', href: '/products' }}
      />
    </>
  );
}

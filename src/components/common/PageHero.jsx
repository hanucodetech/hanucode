import Container from './Container';
import Breadcrumb from './Breadcrumb';

export default function PageHero({ title, description, breadcrumbs, badge, children }) {
  return (
    <section className="relative bg-white border-b border-border-light">
      <div className="absolute inset-0 bg-brand-gradient-subtle" aria-hidden="true" />
      <Container className="relative py-12 md:py-16 lg:py-20">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {badge && (
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}

import Container from '@/components/common/Container';

const logos = [
  'Enterprise Client',
  'Tech Partner',
  'Global Org',
  'Innovation Co',
  'Digital First',
  'Secure Systems',
];

export default function LogoCloud() {
  return (
    <section className="py-12 border-y border-border-light bg-surface" aria-label="Trusted by organizations">
      <Container>
        <p className="text-center text-sm text-slate-500 mb-8">Trusted by forward-thinking organizations</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="text-sm font-semibold text-slate-400 tracking-wide uppercase"
              aria-label={name}
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute inset-0 bg-brand-gradient-subtle" aria-hidden="true" />
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-4">
              Enterprise Software Engineering
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight leading-tight">
              Building Ideas into{' '}
              <span className="text-gradient">Software</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 font-medium leading-relaxed">
              Secure, scalable software solutions for businesses ready to build, modernize and grow.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
              HanuCode builds SaaS products, cybersecurity solutions, AI-powered systems,
              and custom software for organizations that need reliable technology and
              long-term engineering expertise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/solutions" variant="gradient" size="lg" showArrow className="group">
                Explore Our Solutions
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Our Team
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

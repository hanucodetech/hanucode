import Container from './Container';
import Button from './Button';

export default function CTASection({
  title = 'Have an Idea? Let\'s Build It.',
  description = 'Tell us what you\'re trying to solve. We\'ll help you turn the idea into a secure, scalable software solution.',
  primaryCta = { label: 'Start a Conversation', href: '/contact' },
  secondaryCta = { label: 'Explore Our Work', href: '/case-studies' },
  variant = 'gradient',
}) {
  const isGradient = variant === 'gradient';

  return (
    <section className={`section-padding ${isGradient ? 'bg-navy-900' : 'bg-surface'}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${isGradient ? 'text-white' : 'text-navy-900'}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${isGradient ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant={isGradient ? 'gradient' : 'primary'}
              size="lg"
              showArrow
              className="group"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta?.href && secondaryCta?.label && (
              <Button
                href={secondaryCta.href}
                variant={isGradient ? 'secondary' : 'outline'}
                size="lg"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

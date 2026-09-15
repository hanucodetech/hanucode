import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { getIcon } from '@/lib/icons';
import { securityFeatures } from '@/data/solutions';

export default function SecuritySection() {
  return (
    <section className="section-padding bg-navy-900">
      <Container>
        <SectionHeading
          title="Security Is Part of the Architecture"
          description="We integrate security at every layer—from authentication and access control to encryption, monitoring, and secure infrastructure."
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityFeatures.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div key={feature.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <Icon className="h-6 w-6 text-brand-cyan mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href="/security" variant="gradient" size="lg" showArrow className="group">
            Explore Our Security Approach
          </Button>
        </div>
      </Container>
    </section>
  );
}

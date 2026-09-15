import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { getIcon } from '@/lib/icons';
import { whyHanuCode } from '@/data/solutions';

export default function WhyHanuCode() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title="Engineering With Purpose" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHanuCode.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.title} className="p-6 rounded-2xl border border-border-light bg-surface card-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Container from '@/components/common/Container';
import StatCard from '@/components/common/StatCard';
import { companyStats } from '@/data/solutions';

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Technology Built Around Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              HanuCode combines product engineering, custom software development, and technology
              consulting to help organizations build reliable systems that scale. We partner with
              businesses that value long-term engineering excellence over quick fixes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border-light bg-surface p-2">
                <StatCard value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

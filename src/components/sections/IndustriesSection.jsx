import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import IndustryCard from '@/components/cards/IndustryCard';
import { industries } from '@/data/solutions';

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title="Solutions Across Industries" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}

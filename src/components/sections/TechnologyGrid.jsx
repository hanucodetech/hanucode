import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import TechnologyCard from '@/components/cards/TechnologyCard';
import Button from '@/components/common/Button';
import { homeTechnologies } from '@/data/technologies';

export default function TechnologyGrid({ title, description, badge }) {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <SectionHeading badge={badge} title={title} description={description} />
        <p className="text-center text-slate-600 max-w-2xl mx-auto -mt-8 mb-10">
          Our technology choices are driven by scalability, maintainability, and the specific requirements of each project.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {homeTechnologies.map((tech) => (
            <TechnologyCard key={tech} tech={tech} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/technology" variant="outline" size="lg" showArrow className="group">
            Explore Our Technology
          </Button>
        </div>
      </Container>
    </section>
  );
}

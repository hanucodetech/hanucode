import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import Button from '@/components/common/Button';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesGrid({ title, description, badge, limit, showCta = true }) {
  const displayStudies = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading badge={badge} title={title} description={description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayStudies.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
        {showCta && (
          <div className="mt-12 text-center">
            <Button href="/case-studies" variant="outline" size="lg" showArrow className="group">
              View All Case Studies
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

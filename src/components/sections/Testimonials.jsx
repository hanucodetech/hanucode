import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function Testimonials({ title = 'What Our Partners Say', description }) {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

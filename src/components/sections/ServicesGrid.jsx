import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/cards/ServiceCard';
import { services } from '@/data/services';

export default function ServicesGrid({ title, description, badge, limit }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading badge={badge} title={title} description={description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

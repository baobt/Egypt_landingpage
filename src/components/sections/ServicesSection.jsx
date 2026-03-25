import { services } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../common/ServiceCard';

function ServicesSection() {
  return (
    <section id="consulting" className="section services">
      <div className="container">
        <SectionHeading title="Dịch vụ cốt lõi" />
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

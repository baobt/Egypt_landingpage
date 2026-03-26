import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../common/ServiceCard';

function ServicesSection({ content }) {
  return (
    <section id="consulting" className="section services">
      <div className="container">
        <SectionHeading title={content.headingTitle} />
        <div className="services__grid">
          {content.items.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

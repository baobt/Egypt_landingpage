import SectionHeading from '../common/SectionHeading';
import ProductCard from '../common/ProductCard';

function ProductShowcaseSection({ content }) {
  return (
    <section id="marketplace" className="section products">
      <div className="container">
        <SectionHeading title={content.headingTitle} subtitle={content.headingSubtitle} />
        <div className="products__grid">
          {content.items.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>

        <div className="products__cta">
          <div>
            <h4>{content.ctaTitle}</h4>
            <p>{content.ctaText}</p>
          </div>
          <a className="btn-primary" href="#contact">
            {content.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcaseSection;

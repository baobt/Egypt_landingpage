import { images } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import ReasonItem from '../common/ReasonItem';

function WhyChooseSection({ content }) {
  return (
    <section className="section why-choose">
      <div className="container why-choose__grid">
        <div>
          <SectionHeading title={content.headingTitle} />
          <div className="why-choose__stats">
            {content.stats.map(([value, label]) => (
              <div key={label} className="why-choose__stat-card">
                <span>{value}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <div className="why-choose__list">
            {content.reasons.map(([icon, title, text]) => (
              <ReasonItem key={title} icon={icon} title={title} text={text} />
            ))}
          </div>
          <p className="why-choose__cta">{content.cta}</p>
        </div>
        <div className="why-choose__image-box">
          <img src={images.whyChoose} alt={content.imageAlt} className="why-choose__image" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

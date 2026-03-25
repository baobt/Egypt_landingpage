import { images, reasons, trustStats } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import ReasonItem from '../common/ReasonItem';

function WhyChooseSection() {
  return (
    <section className="section why-choose">
      <div className="container why-choose__grid">
        <div>
          <SectionHeading title="💎 Vì sao chọn EgyptViet?" />
          <div className="why-choose__stats">
            {trustStats.map(([value, label]) => (
              <div key={label} className="why-choose__stat-card">
                <span>{value}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <div className="why-choose__list">
            {reasons.map(([icon, title, text]) => (
              <ReasonItem key={title} icon={icon} title={title} text={text} />
            ))}
          </div>
          <p className="why-choose__cta">👉 Không chỉ nhập hàng – chúng tôi giúp bạn kinh doanh thành công</p>
        </div>
        <div className="why-choose__image-box">
          <img src={images.whyChoose} alt="Cargo logistics" className="why-choose__image" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

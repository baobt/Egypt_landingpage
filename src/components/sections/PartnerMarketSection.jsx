import { partnerMarket } from '../../data/content';

function PartnerMarketSection() {
  return (
    <section id="partners" className="section partner-market">
      <div className="container">
        <h2 className="section-title">🤝 Đối tác & Thị trường</h2>
        <ul className="partner-market__list">
          {partnerMarket.map((item) => (
            <li key={item}>
              <i className="material-symbols-outlined">check_circle</i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="partner-market__cta">👉 Xây dựng chuỗi cung ứng bền vững – lâu dài – minh bạch</p>
      </div>
    </section>
  );
}

export default PartnerMarketSection;

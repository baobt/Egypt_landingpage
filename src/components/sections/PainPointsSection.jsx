import { painPoints } from '../../data/content';

function PainPointsSection() {
  return (
    <section className="section pain-points">
      <div className="container">
        <div className="pain-points__head">
          <h2 className="section-title">Bạn đang gặp khó khăn khi nhập khẩu hàng?</h2>
          <div className="pain-points__line" />
        </div>

        <div className="pain-points__grid">
          {painPoints.map(([icon, text]) => (
            <article key={text} className="pain-points__card">
              <i className="material-symbols-outlined">{icon}</i>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="pain-points__cta">👉 EgyptViet giúp bạn giải quyết toàn bộ từ A-Z</p>
      </div>
    </section>
  );
}

export default PainPointsSection;

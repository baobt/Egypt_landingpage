import { heroContacts, images } from '../../data/content';

function HeroSection() {
  return (
    <header id="hero" className="hero">
      <img className="hero__bg" src={images.hero} alt="Egypt trade skyline" />
      <div className="hero__overlay" />
      <div className="container hero__content hero__grid">
        <div>
          <span className="hero__tag">Trade Corridor: Egypt - Vietnam</span>
          <h1>
            Kết nối nguồn hàng Ai Cập – <em>Nhập khẩu nhanh, pháp lý chuẩn, giá tận gốc</em>
          </h1>
          <p>
            Chuyên cung cấp thực phẩm, nông sản &amp; sản phẩm Halal từ Ai Cập về Việt Nam – trọn gói từ sourcing, kiểm định đến phân phối.
          </p>
          <div className="hero__actions">
            <a className="btn-primary" href="#contact">
              Nhận báo giá ngay
            </a>
            <a className="btn-ghost" href="#contact">
              Tư vấn miễn phí 1:1
            </a>
          </div>
          <div className="hero__contacts">
            {heroContacts.map(({ icon, text }) => (
              <span key={text}>
                <i className="material-symbols-outlined">{icon}</i>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;

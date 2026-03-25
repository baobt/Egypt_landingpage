import { images } from '../../data/content';

function IntroSection() {
  return (
    <section id="our-story" className="section intro">
      <div className="container intro__grid">
        <div className="intro__image-wrap">
          <img src={images.intro} alt="Manufacturing facility" className="intro__image" />
        </div>
        <div>
          <h2 className="section-title">EgyptViet – Đối tác nhập khẩu hàng Ai Cập đáng tin cậy</h2>
          <p className="intro__desc">
            Chúng tôi giúp doanh nghiệp Việt tiếp cận trực tiếp nhà sản xuất tại Ai Cập, tối ưu chi phí và đảm bảo đầy đủ pháp lý khi đưa sản phẩm ra thị trường. Kinh nghiệm thực chiến trong nhập khẩu thực phẩm, công bố sản phẩm theo quy định Việt Nam và tư vấn tiêu chuẩn Halal quốc tế.
          </p>
          <p className="intro__quote">
            👉 EgyptViet không chỉ là đơn vị nhập khẩu – mà là đối tác chiến lược giúp bạn mở rộng thị trường Trung Đông.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

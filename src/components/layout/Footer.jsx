import { images } from '../../data/content';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-head">
            <img src={images.logo} alt="EgyptViet logo" className="footer__logo" />
            <h4>CÔNG TY TNHH EGYPTVIET</h4>
          </div>
          <p>
            Địa chỉ: 6-8 Đoàn Văn Bơ, TP. Hồ Chí Minh
            <br />
            Email: info@egyptviet.com
            <br />
            Website: egyptviet.com
          </p>
          <small>© 2024 EgyptViet Trade Corridor. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { images } from '../../data/content';

function Footer({ content }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-head">
            <img src={images.logo} alt="EgyptViet logo" className="footer__logo" />
            <h4>{content.companyName}</h4>
          </div>
          <p>
            {content.address}
            <br />
            {content.email}
            <br />
            {content.website}
          </p>
          <small>{content.copyright}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

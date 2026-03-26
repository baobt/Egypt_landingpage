import { images } from '../../data/content';

function HeroSection({ content }) {
  return (
    <header id="hero" className="hero">
      <img className="hero__bg" src={images.hero} alt={content.imageAlt} />
      <div className="hero__overlay" />
      <div className="container hero__content hero__grid">
        <div>
          <span className="hero__tag">{content.tag}</span>
          <h1>
            {content.titlePrefix}
            <em>{content.titleEmphasis}</em>
          </h1>
          <p>{content.description}</p>
          <div className="hero__actions">
            <a className="btn-primary" href="#contact">
              {content.primaryCta}
            </a>
            <a className="btn-ghost" href="#contact">
              {content.secondaryCta}
            </a>
          </div>
          <div className="hero__contacts">
            {content.contacts.map(({ icon, text }) => (
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

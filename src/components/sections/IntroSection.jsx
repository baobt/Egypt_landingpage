import { images } from '../../data/content';

function IntroSection({ content }) {
  return (
    <section id="our-story" className="section intro">
      <div className="container intro__grid">
        <div className="intro__image-wrap">
          <img src={images.intro} alt={content.imageAlt} className="intro__image" />
        </div>
        <div>
          <h2 className="section-title">{content.title}</h2>
          <p className="intro__desc">{content.description}</p>
          <p className="intro__quote">{content.quote}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

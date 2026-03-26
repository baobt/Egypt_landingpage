function FinalCtaSection({ content }) {
  return (
    <section className="section final-cta">
      <div className="container final-cta__inner">
        <h2 className="section-title">{content.title}</h2>
        <p>{content.quote}</p>
        <div className="final-cta__line" />
        <p className="final-cta__contact">{content.hotline}</p>
        <p className="final-cta__contact">{content.email}</p>
        <button className="btn-ghost">{content.button}</button>
      </div>
    </section>
  );
}

export default FinalCtaSection;

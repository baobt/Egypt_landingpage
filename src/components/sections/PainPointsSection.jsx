function PainPointsSection({ content }) {
  return (
    <section className="section pain-points">
      <div className="container">
        <div className="pain-points__head">
          <h2 className="section-title">{content.title}</h2>
          <div className="pain-points__line" />
        </div>

        <div className="pain-points__grid">
          {content.items.map(([icon, text]) => (
            <article key={text} className="pain-points__card">
              <i className="material-symbols-outlined">{icon}</i>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="pain-points__cta">{content.cta}</p>
      </div>
    </section>
  );
}

export default PainPointsSection;

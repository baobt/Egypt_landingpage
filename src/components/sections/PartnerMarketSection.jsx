function PartnerMarketSection({ content }) {
  return (
    <section id="partners" className="section partner-market">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <ul className="partner-market__list">
          {content.items.map((item) => (
            <li key={item}>
              <i className="material-symbols-outlined">check_circle</i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="partner-market__cta">{content.cta}</p>
      </div>
    </section>
  );
}

export default PartnerMarketSection;

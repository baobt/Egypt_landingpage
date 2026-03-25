function ServiceCard({ icon, title, items, summary }) {
  return (
    <article className="service-card">
      <i className="material-symbols-outlined service-card__icon">{icon}</i>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <i className="material-symbols-outlined">check_circle</i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {summary ? <p className="service-card__summary">👉 {summary}</p> : null}
    </article>
  );
}

export default ServiceCard;

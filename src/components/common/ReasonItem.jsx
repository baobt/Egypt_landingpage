function ReasonItem({ icon, title, text }) {
  return (
    <article className="reason-item">
      <i className="material-symbols-outlined">{icon}</i>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default ReasonItem;

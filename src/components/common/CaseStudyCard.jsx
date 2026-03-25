function CaseStudyCard({ title, desc, result }) {
  return (
    <article className="case-card">
      <h4>{title}</h4>
      <p>{desc}</p>
      <small>{result}</small>
    </article>
  );
}

export default CaseStudyCard;

function WorkflowStep({ icon, title, text }) {
  const isNumber = /^\d+$/.test(icon);

  return (
    <article className="workflow-step">
      <div className="workflow-step__icon">
        {isNumber ? <span>{icon}</span> : <i className="material-symbols-outlined">{icon}</i>}
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
}

export default WorkflowStep;

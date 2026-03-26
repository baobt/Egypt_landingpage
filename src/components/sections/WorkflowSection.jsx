import SectionHeading from '../common/SectionHeading';
import WorkflowStep from '../common/WorkflowStep';

function WorkflowSection({ content }) {
  return (
    <section id="logistics" className="section workflow">
      <div className="container">
        <SectionHeading title={content.headingTitle} center />
        <p className="workflow__sub">{content.subtitle}</p>
        <div className="workflow__line" />
        <div className="workflow__grid">
          {content.items.map(([icon, title, text]) => (
            <WorkflowStep key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
        <p className="workflow__cta">{content.cta}</p>
      </div>
    </section>
  );
}

export default WorkflowSection;

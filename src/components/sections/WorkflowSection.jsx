import { workflow } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import WorkflowStep from '../common/WorkflowStep';

function WorkflowSection() {
  return (
    <section id="logistics" className="section workflow">
      <div className="container">
        <SectionHeading title="Quy trình làm việc minh bạch" center />
        <p className="workflow__sub">Chỉ 5 bước để nhập hàng từ Ai Cập về Việt Nam</p>
        <div className="workflow__line" />
        <div className="workflow__grid">
          {workflow.map(([icon, title, text]) => (
            <WorkflowStep key={title} icon={icon} title={title} text={text} />
          ))}
        </div>
        <p className="workflow__cta">👉 Bạn chỉ cần tập trung bán hàng – chúng tôi lo phần còn lại</p>
      </div>
    </section>
  );
}

export default WorkflowSection;

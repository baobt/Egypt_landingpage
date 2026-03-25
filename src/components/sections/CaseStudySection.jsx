import { caseStudies } from '../../data/content';
import SectionHeading from '../common/SectionHeading';
import CaseStudyCard from '../common/CaseStudyCard';

function CaseStudySection() {
  return (
    <section className="section case-study">
      <div className="container">
        <SectionHeading title="📊 Case Study / Kết quả" subtitle="Hàng trăm khách hàng đã lựa chọn EgyptViet" />
        <div className="case-study__grid">
          {caseStudies.map(([title, desc, result]) => (
            <CaseStudyCard key={title} title={title} desc={desc} result={result} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;

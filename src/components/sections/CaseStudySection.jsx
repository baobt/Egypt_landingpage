import SectionHeading from '../common/SectionHeading';
import CaseStudyCard from '../common/CaseStudyCard';

function CaseStudySection({ content }) {
  return (
    <section className="section case-study">
      <div className="container">
        <SectionHeading title={content.headingTitle} subtitle={content.headingSubtitle} />
        <div className="case-study__grid">
          {content.items.map(([title, desc, result]) => (
            <CaseStudyCard key={title} title={title} desc={desc} result={result} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;

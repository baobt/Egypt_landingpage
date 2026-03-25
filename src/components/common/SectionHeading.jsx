function SectionHeading({ title, subtitle, center = false }) {
  return (
    <div style={{ marginBottom: '2.5rem', textAlign: center ? 'center' : 'left' }}>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeading;

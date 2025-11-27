const SectionHeading = ({ Icon, title, eyebrow, accentClasses = '' }) => (
  <div className="section-heading">
    <div className={`section-heading__icon ${accentClasses}`}>
      <Icon size={26} />
    </div>
    <div>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
    </div>
  </div>
);

export default SectionHeading;

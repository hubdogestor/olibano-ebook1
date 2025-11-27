const ActiveSectionBadge = ({ currentIndex = 0, total = 1, label }) => (
  <div className="section-progress-pill">
    <span className="section-progress-pill__index">
      {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </span>
    <span className="section-progress-pill__label">{label}</span>
  </div>
);

export default ActiveSectionBadge;

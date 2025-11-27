const SectionWrapper = ({ children, className = '' }) => (
  <section className={`section-shell ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;

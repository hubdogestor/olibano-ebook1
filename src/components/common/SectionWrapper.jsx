const SectionWrapper = ({ children, className = '' }) => (
  <section className={`px-6 py-12 max-w-3xl mx-auto animate-slideUp ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;

const SectionBadge = ({ children }) => {
  return (
    <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-cyan-400">
      {children}
    </span>
  );
};

export default SectionBadge;
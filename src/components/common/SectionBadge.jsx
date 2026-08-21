const SectionBadge = ({ children }) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00A8FF]/40 bg-[#00A8FF]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#00D2FF] shadow-[0_0_15px_rgba(0,168,255,0.15)]">
      {children}
    </span>
  );
};

export default SectionBadge;
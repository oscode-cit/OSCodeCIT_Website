const SectionBadge = ({ children }) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1 text-xs uppercase tracking-widest dark:text-[#00D2FF] shadow-[0_0_15px_rgba(0,168,255,0.15)] border-cyan-500/40 bg-cyan-500/10 font-mono font-bold text-cyan-700  mb-4 dark:shadow-lg">
      {children}
    </span>
  );
};

export default SectionBadge;
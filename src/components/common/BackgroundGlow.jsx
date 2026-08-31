const BackgroundGlow = () => {
  return (
    <>
      <div className="fixed -left-40 top-10 h-125 w-125 rounded-full bg-[#00A8FF]/20 blur-[160px] -z-10 pointer-events-none" />

      <div className="fixed -right-40 bottom-10 h-125 w-125 rounded-full bg-[#00D2FF]/15 blur-[160px] -z-10 pointer-events-none" />

      <div className="fixed left-1/2 top-1/3 -translate-x-1/2 h-150 w-150 rounded-full bg-[#0077FF]/10 blur-[180px] -z-10 pointer-events-none" />
    </>
  );
};

export default BackgroundGlow;